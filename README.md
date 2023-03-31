<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body>
  <h1>WhatsApp Bulk Message Sender</h1>
  <p>This is a Node.js application for sending bulk messages on WhatsApp using the WhatsApp Web API.</p>
  <h2>Installation</h2>
  <ol>
    <li>Clone the repository: <code>git clone https://github.com/praveen3164/Whatsapp-Bulk-Message-Sender/</code></li>
    <li>Install dependencies: <code>npm install</code></li>
  </ol>
  <h2>Usage</h2>
  <p>To start the application, run: <code>node app.js</code></p>
  <p>To send bulk messages, create a CSV file named <code>contacts.csv</code> in the <code>data</code> directory. The file should contain a list of phone numbers</p>
  <p>And, create a text file named <code>message.txt</code> in the <code>data</code> directory. The file should contain messages</p>
  <p>If you want to send an image along with the message, you have to paste the image in the data directory and name it as <code>picture.jpg</code>.</p>

  <p>Once the file is created, the application will automatically read it and send the messages to the corresponding phone numbers.</p>
  
  <table>
  <tr>
    <th>Available Commands</th>
    <th>Usage</th>
  </tr>
  <tr>
    <td>Logout</td>
    <td>This command logs out the session.</td>
  </tr>
  <tr>
    <td>Exit</td>
    <td>This command closes the application.</td>
  </tr>
  <tr>
    <td>Clear</td>
    <td>This command clears the console.</td>
  </tr>
</table>

  <h2>Disclaimer</h2>
    <p>
      This application is intended for educational purposes only. Use of this application for spamming
      or any other malicious activity is strictly prohibited. The author of this application is not
      responsible for any consequences resulting from the use of this application.
    </p>
</body>
</html>
