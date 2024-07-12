const express = require('express');
const app = express();
const port = 3000;

const mysql = require('mysql');
const util = require('util');

const conn = mysql.createConnection({
	host: 'mysql',
	user: 'root',
	password: 'root',
	database: 'nodedb'
});

const query = util.promisify(conn.query).bind(conn);

app.get('/', async (req, res) => {
	try {

		await query('INSERT INTO people (name) VALUES ("William Willians")');

		const people = await query('SELECT name FROM people');

		let response = '<h1>Full Cycle Rocks!</h1><ul>';
		people.forEach(person => {
			response += `<li>${person.name}</li>`;
		});
		response += '</ul>';

		res.send(response).status(200);
	} catch (err) {
		console.error('Database error:', err);
		res.status(500).send('Server error');
	}
});

app.listen(port, () => {
	console.info(`App listening at http://localhost:${port}`);
});
