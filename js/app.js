'use strict';

function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}

const div = document.getElementById('users');
const url = 'https://randomuser.me/api?results=2';


fetch(url)
.then(function(response) {
	return response.json();
})
.then(function(data) {
	var users = data.results;
	console.log(users);
})
.catch(function(error) {

});