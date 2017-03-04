const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(`${process.cwd()}/public`));

app.listen(port, function (err) {
  if (err) throw err;
  console.log(`Server running at http://127.0.0.1:${port}`);
});
