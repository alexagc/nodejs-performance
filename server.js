const express = require('express');
const app = express();

const requestLogs = [];

app.route('/').get((req, res, next) => {
  requestLogs.push({ url: req.url, date: new Date() });
  res.status(200).send(JSON.stringify(requestLogs));
});

app.listen(process.env.PORT || 3000, error => {
  error
    ? console.error(error)
    : console.info(`Server listening at port: ${process.env.PORT || 3000}`);
});
