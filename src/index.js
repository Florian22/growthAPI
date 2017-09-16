import express from 'express';
import constants from './config/constants';
import './config/dbconfig';
import middlewaresConfig from './config/middlewares';

const app = express();

middlewaresConfig(app);

app.get('/', (req,res) => {
	res.send('Hello world!');
});

app.get('/thibault', (req,res) => {
	res.send('Hello Mr Huckert!');
});

app.listen(constants.PORT, err => {
 if(err){
 	throw err;
 }else{
 	console.log(`
 			Server running on port: ${constants.PORT}
 			------
 			Running on ${process.env.NODE_ENV}
 		`)
 }
});