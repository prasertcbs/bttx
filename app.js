/**
 author: Prasert Kanawattanachai
 email: prasert.k@chula.ac.th
 last updated: 20-Nov-2021
*/

const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const { translate } = require('bing-translate-api');

app.get('/', (req, res) => {
  // res.send('Webservice for Excel by @prasertcbs');
  res.sendFile(path.join(__dirname, '/about.html'));
  //   res.send('translate');
});

/**
 * แปลงข้อความ (text) เป็นภาษาที่ต้องการ (lang)
 */
app.get('/:lang/:text', async (req, res) => {
  let x = await translate(req.params.text, null, req.params.lang, true);
  console.log(x);
  res.send(x['translation']);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
