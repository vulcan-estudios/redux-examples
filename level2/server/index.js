const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;

let store = {
  balance: 750
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(`${process.cwd()}/public`));

app.get('/api/store', function (req, res) {
  setTimeout(function () {
    res.json(store);
  }, 750);
});

app.post('/api/deposit', function (req, res) {
  const toDeposit = Number(req.body.value) || 0;
  store.balance = store.balance + toDeposit;

  setTimeout(function () {
    res.json(store);
  }, 750);
});

app.post('/api/withdraw', function (req, res) {
  const toWithdraw = Number(req.body.value) || 0;
  store.balance = store.balance - toWithdraw;

  setTimeout(function () {
    res.json(store);
  }, 750);
});

app.listen(port, function (err) {
  if (err) throw err;
  console.log(`Server running at http://127.0.0.1:${port}`);
});
