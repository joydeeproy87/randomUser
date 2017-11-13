'use strict';

function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}

var cards = document.getElementById('users');

var url = 'https://randomuser.me/api/?results=5';

fetch(url)
.then(function (resp) {
	return resp.json();
}).then(function (data) {
	var authors = data.results;
	console.log(authors);

	return authors.map(function (author) {

		var card = `
				<div class="card">
				  <img class="card-img-top" src="${author.picture.thumbnail}" alt="${author.name.first} ${author.name.last}">
				  <div class="card-body">
				    <h4 class="card-title">Name: ${author.name.first} ${author.name.last}</h4>
				    <p class="card-text">Gender: ${author.gender}</p>
				    <p class="card-text">DOB: ${author.dob}</p>
				  </div>
				</div>
			`;

		// cards.innerHTML = card;

		cards.innerHTML = document.getElementById('users').innerHTML;
		console.log(card);
		document.getElementById('users').appendChild(card);

		// var li = createNode('li'),
		//     img = createNode('img'),
		//     span = createNode('span');

		// img.src = author.picture.thumbnail;
		// span.innerHTML = author.name.first + ' ' + author.name.last;

		// append(li, img);
		// append(li, span);
		// append(div, li);

	});
}).catch(function (error) {
	console.log(JSON.stringify(error));
});
