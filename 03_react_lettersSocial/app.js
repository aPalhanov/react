//var proxy = require('express-http-proxy');
const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const path = require('path')

const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const favicon = require('serve-favicon');
const hpp = require('hpp');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const responseTime = require('response-time');


// Our dummy database backend
const DB = require('./db/DB');

const app = express();
const backend = DB(); 


// Add some boilerplate middlware
//app.use(logger(__PRODUCTION__ ? 'combined' : 'dev'));
app.use(logger('dev'));
app.use(helmet.xssFilter({ setOnOldIE: true }));
app.use(responseTime());
app.use(helmet.frameguard());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy({ setTo: 'react' }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(hpp());



app.use(cors({ origin: config.get('ORIGINS') }));


app.use(express.json({extended: true}));

app.use('/api', backend);
app.use('/static', express.static(__dirname + '/static'));
app.use(favicon(__dirname + '/static/assets/meta/favicon.ico'));



/*
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/link', require('./routes/link.routes'))
app.use('/t', require('./routes/redirect.routes'))
*/

/*
if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
  }
  
*/

/*
// Error handling routes
app.use((req, res, next) => {
	const err = new Error('Not found');
	err.status = 404;
	next(err);
});
app.use((err, req, res) => {
	console.error(err);
	return res.status(err.status || 500).json({
			message: err.message
	});
});

process.on('unhandledRejection', e => {
	console.error(e);
});
*/


const PORT = config.get('port') || 5000;

async function start(){
    try{/*
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
				*/
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
    }catch(e){
        console.log('Server Error', e.message);
        process.exit(1);
    }
}


start();