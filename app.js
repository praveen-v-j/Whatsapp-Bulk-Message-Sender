const { Client, NoAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const csv = require('csv-parser');
const readline = require('readline');
const { clear } = require('console');

const message = fs.readFileSync("./message.txt", {encoding: 'utf-8'});
const contacts = [];
// const media = fs.readFileSync ("./picture.jpg")

fs.createReadStream('contacts.csv')
.pipe(csv())
.on('data', function(data) {
    try {
        contacts.push(data.number); 
    } catch(err) {
        console.error(err);
    }
})
.on('end', () => {
    // console.log(contacts);
});

let counter = { fails: 0, success: 0 }

const SESSION_FILE_PATH = './whatsapp-session.json';

// let sessionCfg;
// if (fs.existsSync(SESSION_FILE_PATH)) {
//     sessionCfg = require(SESSION_FILE_PATH);
// }
// const client = new Client({
//     session: sessionCfg
// });

// equivalent to
const client = new Client({
    authStrategy: new NoAuth()
});

client.initialize();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('Scan the QR code to log in');
});

/*
client.on('authenticated', (session) => {
    console.log('AUTHENTICATED', session);
    sessionCfg = session;
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function (err) {
        if (err) {
            console.error(err);
        }
    });
});
*/

const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
let isLoggedIn = false;

  userInput.on('line', async (input) => {
    // if (input.toLowerCase() === 'send') {
    //   await deploy_all();
    //   // code to send messages here
    // } else 
    if (input.toLowerCase() === 'send') {
        if (!isLoggedIn) {
          console.log('Please login first');
          return;
        }
         console.log('Sending messages...');
        }
        // Add your code to send messages here
    //   } else if (input.toLowerCase() === 'login') {
    //     if (isLoggedIn) {
    //       console.log('Already logged in');
    //       return;
    //     }
    //     await client.waitForConnect();
    //     isLoggedIn = true;
    //     console.log('Logged in!');
    //   }
    if (input === 'dub') {
        const contacts = fs.readFileSync('contacts.csv', 'utf-8').split('\n').filter(Boolean);
        const uniqueContacts = [...new Set(contacts)];
        fs.writeFileSync('contacts.csv', uniqueContacts.join('\n'));
        console.log('Duplicate contacts removed!');
    } else if (input.toLowerCase() === 'clear') {
      console.clear();
    } else if (input.toLowerCase() === 'logout') {
        try {
            if (!isLoggedIn) {
                console.log('No Account Found');
                return;
            } else {
                client.logout(0);
                console.log('Account ')
            }
          } catch (err) {
            console.error('No Account Login');
            return;
          }
          process.exit(0);
    } else if (input === 'exit') {
        console.log('Ok Bye 😉')
        process.exit(0);        
    } else if (input === 'code') {
        try {
            if (!isLoggedIn) {
              await client.initialize();
              isLoggedIn = true;
              console.log('Logged in!');
            } else {
              console.log('You are already logged in!');
            }
          } catch (err) {
            console.error('Initialization failed');
          }

    } else {
        console.log(`Invalid command: ${input}`);
      } 
      // } else {
    //   console.log('Invalid command. Please enter either "send", "exit", "logout" or "clear".');
    // } 
  });  

client.on('auth_failure', msg => {
    // Fired if session restore was unsuccessfull
    console.error('AUTHENTICATION FAILURE', msg);
});

client.on('ready', () => {
    console.log('Account was login successfully!');
    deploy_all();
});

client.on('disconnected', (reason) => {
    console.log('Account was logged out', reason);
    client.initialize();
});

async function deploy_all() {
    let count = 0;
    for (const contact of contacts) {
        const final_number = (contact.length > 10) ? `${contact}@c.us` : `91${contact}@c.us`;
        const isRegistered = await client.isRegisteredUser(final_number);
        if (isRegistered) {
            const media = MessageMedia.fromFilePath('./picture.jpg');
            const msg = await client.sendMessage(final_number, message, media);
            const msg2 = await client.sendMessage(final_number, media);
            console.log(`${contact} Sent`); 
            counter.success++;
            /*
            deleteChat(final_number)
            .then((res) => console.log(res)) // contains ["successfuly deleted"]
            .catch((err) => console.log(err))// contains ["something went wrong", "do not have chat history"]
            */
        } else {
            console.log(`${contact} Failed`);
            counter.fails++;
        }
        count++;
    }
    console.log(`Result: ${counter.success} sent, ${counter.fails} failed`);
    return count;
}

async function deleteChat(phoneNumber) {
    return new Promise((resolve, reject) => {
        client.getChatById(phoneNumber).then((chat) => {
            // console.log("Chat information = ", chat)
            chat.delete().then((deleteRes) => {
                if(deleteRes) 
                    resolve(`successfuly deleted`)
                else 
                    reject("something went wrong")
            })
        }).catch((err) => {
            if(err.message.includes("Cannot read property 'serialize' of undefined"))
                reject(`do not have chat history`)
            // can handle other error messages...     
        })
    })
}

process.stdin.on('data', function (chunk) {
    const command = chunk.toString().trim();
    if (command === 'ls') {
        console.log(`Number of contacts: ${contacts.length}`);
    }
});
