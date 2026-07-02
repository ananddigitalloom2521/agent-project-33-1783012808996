const express = require('express');
const app = express();
const routes = require('./routes/index.js');

app.use(express.static('public'));
app.use('/', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));