"use strict";
/**
 * Project - A Node Js For Web Development
 *
 * @package  Express
 * @author   Tony Mbois <project>
 */

/*
|--------------------------------------------------------------------------
| database required 
|--------------------------------------------------------------------------
|
| database will be require in folder databases and to access automaticly
| and will be execute in index.js after this file have required
|
*/

require('./databases/database')

/*
|--------------------------------------------------------------------------
| validator required 
|--------------------------------------------------------------------------
|
| validator to given response after input and then this not have to filled
| by form validate, it have will be given response validate alert
|
*/

const ExpressValidator = require('express-validator')

/*
|--------------------------------------------------------------------------
| session required 
|--------------------------------------------------------------------------
|
| Express session to given session to save the data object or any data parse. 
|
*/

const expressSession = require('express-session')


/*
|--------------------------------------------------------------------------
| path required component describe by nodejs path
|--------------------------------------------------------------------------
|
| The path module provides utilities for working with file and directory paths. It can be accessed using: const path = require('path');
|
*/

const path = require('path')

/*
|--------------------------------------------------------------------------
| express required component describe by Express Documentation
|--------------------------------------------------------------------------
|
| Express.js, or simply Express, is a back end web application framework for Node.js,
| released as free and open-source software under the MIT License
| Express.js is very easy to implementation for MVC with asyc
|
*/

const express = require("express"),app = express(), PegawaiRoute = require('./routes/web');

/*
|--------------------------------------------------------------------------
| SESSIONS
|--------------------------------------------------------------------------
|
| set up express session will be execute
|
*/

app.use(expressSession({secret: 'max', saveUninitialized: false, resave:false,  cookie: { maxAge: 1000}}))

/*
|--------------------------------------------------------------------------
| Join dirname by views
|--------------------------------------------------------------------------
|
*/


app.set('views', path.join(__dirname, 'resources/views/'));

/*
|--------------------------------------------------------------------------
| view engine automatic to generate file 
|--------------------------------------------------------------------------
|
*/

app.set('view engine', 'ejs');

/*
|--------------------------------------------------------------------------
| Port by .env
|--------------------------------------------------------------------------
|
| this port will be access in .env file -> this is environment file to easy access by code
|
*/

app.set('port',process.env.PORT || 1337);

/*
|--------------------------------------------------------------------------
| Express Urlencode, json, and static, and set any app
|--------------------------------------------------------------------------
|
| Express urlencode is to generate url -> This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
| Returns middleware that only parses JSON and only looks at requests where the Content-Type header matches the type option.
| static Express to access static what you can do when join with js folder and css folder in public tree
|
*/

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(PegawaiRoute)

/*

|--------------------------------------------------------------------------
| Listener
|--------------------------------------------------------------------------
|
| app.listen is function to get port that it will be connect to server by this port 
|
*/

app.listen(app.get("port"), () => {
    console.log(`Server is running at http://localhost:${app.get("port")}`);
});

/*
|--------------------------------------------------------------------------
| End FIle
|--------------------------------------------------------------------------
|
| Thanks you :) 
|
*/