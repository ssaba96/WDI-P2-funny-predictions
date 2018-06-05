const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const expressLayouts = require('express-ejs-layouts');
const routes = require('./config/routes');
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
app.use(routes);

app.listen(PORT, () => console.log(`Up and running on port ${PORT}`));
