//const express = require('express');
//const fetch = require('node-fetch');

import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3005;
app.use(cors());

app.get('/search/:searchTerm', async (request, response) => {
	const api_URL = `https://itunes.apple.com/search?term=${request.params.searchTerm}&limit=100`;
	const apiResponse = await fetch(api_URL);
	const responseJson = await apiResponse.json();
	response.json(responseJson);
});

app.listen(port, (request, response) => {
	console.log('App is up and running');
});
