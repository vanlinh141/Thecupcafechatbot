const express = require('express')
const setViewEngine = require('./configs/viewEngine');
const initRoute = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;

setViewEngine(app);
initRoute(app);

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}))

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });

