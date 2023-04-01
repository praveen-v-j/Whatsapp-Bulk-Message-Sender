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
    <li>Install dependencies: <code>npm i</code></li>
  </ol>
  <h2>Usage</h2>
  <p>To start the application, run: <code>node app.js</code></p>
  <p>To send bulk messages, create a CSV file named <code>contacts.csv</code> in the <code>data</code> directory. The file should contain a list of phone numbers</p>
  <p>And, create a text file named <code>message.txt</code> in the <code>data</code> directory. The file should contain messages</p>
  <p>If you want to send an image along with the message, you have to paste the image in the data directory and name it as <code>picture.jpg</code>.</p>

  <p>Once the file is created, the application will automatically read it and send the messages to the corresponding phone numbers.</p>
  
  <h2>Available Commands</h2>
  <table>
  <tr>
    <th>Commands</th>
    <th>Usage</th>
  </tr>
  <tr>
    <td>Logout - logout</td>
    <td>This command logs out the session.</td>
  </tr>
  <tr>
    <td>Exit - clear</td>
    <td>This command closes the application.</td>
  </tr>
  <tr>
    <td>Clear - clear</td>
    <td>This command clears the console.</td>
  </tr>
  <tr>
    <td>Dub - dub</td>
    <td>This command remove the duplicate contacts.</td>
  </tr>
  <tr>
    <td>Code - code</td>
    <td>This command generate a QR.</td>
  </tr>
</table>
<h2>To-do List</h2>
<table>
  <thead>
    <tr>
      <th>Task</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Media search and add various attachment</td>
      <td>&#x274C;</td>
    </tr>
    <tr>
      <td>Proper season management</td>
      <td>&#x274C;</td>
    </tr>
    <tr>
      <td>Auto-reply message</td>
      <td>&#x274C;</td>
    </tr>
    <tr>
      <td>Implementing .env file for easy configuration</td>
      <td>&#x274C;</td>
    </tr>
  </tbody>
</table>

  <h2>Disclaimer</h2>
    <p>
      This application is intended for educational purposes only. Use of this application for spamming
      or any other malicious activity is strictly prohibited. The author of this application is not
      responsible for any consequences resulting from the use of this application.
    </p>
    <h2>License</h2>
  <p>This project is licensed under the <a href="https://opensource.org/licenses/MIT">MIT License</a>.</p>
  <p>You are free to use, modify, and distribute this project for any purpose, as long as you include the original license and attribution to the original authors.</p>
  <p>The software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.</p>
</section>
</body>
</html>
