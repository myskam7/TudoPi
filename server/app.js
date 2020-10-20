var express = require('express');
const api = require('./router/routes/visionAPI.js');

// const fileName = './images/LICENSE.jpeg';
if (process.env.ENVIRONMENT !== 'prod') {
	try {
		// attempt to load dev .env file
		require('../.env');
	} catch (e) {
		throw 'Environment variables not found. If in dev, make sure your .env file is in place. If in prod, make sure you have properly configured your environment variables.';
	}
}


var app = express();
var router = require('./router')(app);

// async function asyncCall() {
//
// 	try {
// 		console.log("res", api('../images/LICENSE.jpeg'){
// 			return
// 		});
// 	} catch (error) {
// 		console.error(error);
// 		// expected output: ReferenceError: nonExistentFunction is not defined
// 		// Note - error messages will vary depending on browser
// 	}
//
// }
// asyncCall();



async function asyncCall() {

	try {
		console.log("res", api('../images/LICENSE.jpeg'));
	} catch (error) {
		console.error(error);
		// expected output: ReferenceError: nonExistentFunction is not defined
		// Note - error messages will vary depending on browser
	}

}
// asyncCall();




var server = app.listen(process.env.PORT, function() {
	console.log('Listening...');
});
