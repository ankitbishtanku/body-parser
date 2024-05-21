/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;


app.use(bodyParser.urlencoded({extended : false}));
app.use('/login', express.static(  __dirname + '/public'));

app.get('/', (req, res) => {
  res.send('Hello, this is home page!');
});

app.post('/login', (req, res) => {
	console.log(req.body);
	const email = req.body.email;
	res.redirect("/");
})

app.listen(port, () => {
	console.log(`server is running at ${port}`);
});


