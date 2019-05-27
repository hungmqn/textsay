require('dotenv').config();
require('./global');
const http = require('http');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const app = express();

app.server = http.createServer(app);

const routes = require('./routes');
const middlewares = require('./middlewares');

app.use(morgan('dev'));
// app.use(cors({
//   origin: ['*'],
//   credentials: true
// }));
// const whitelist = ['http://firstdomain.com', 'http://seconddomain.com']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// };

app.use(helmet());
app.use(cors());
// app.use(cors(corsOptions));

app.use(bodyParser.json({limit: '500kb'}));
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}));
app.use(routes);
app.use(middlewares.errorHandler.logErrors);
app.use(middlewares.errorHandler.clientErrorHandler);
app.use(middlewares.errorHandler.errorHandler);

app.server.listen(config.server.port || 9420, () => {
  // console.log(`Started ${env} server on port ${app.server.address().port}`);
});
