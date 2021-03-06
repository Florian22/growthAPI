import express from 'express';
import constants from './config/constants';
import './config/dbconfig';
import middlewaresConfig from './config/middlewares';
import apiRoutes from './modules';

const app = express();

middlewaresConfig(app);

app.get('/', (req,res) => {
	res.send('Hello world!');
});

app.get('/thibault', (req,res) => {
	var json = `{
		"message": "Hello"
	}`;
	res.send(json);
});

apiRoutes(app);

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