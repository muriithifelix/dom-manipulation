// Write your code here!
/*
The goal of this function will be to have all of our DOM manipulation happen within it. 

The userInfo object will be important to understand as it will contain all the unique details for our user. 
*/
const userInfo = {
	username: "flatUser123",
	description: "Hi, welcome to my webpage! Just a new user of this website!",
	theme: "red"
}

function displayUser(userInfo){

}

displayUser(userInfo)
/*
We are now selecting the header using .querySelector.
 To specifically target the id of the document we add ‘#main’ into the .querySelector,
  the ‘#’ being the indicator for selecting by id.
 */
const userInfo = {
	username: "flatUser123",
	description: "Hi, welcome to my webpage! Just a new user of this website!",
	theme: "red"
}

function displayUser(userInfo){
	const header = document.querySelector("#main")
}

displayUser(userInfo)

/*
By using .textContent with the header we can change the text of the webpage. 
This should change the header shown on the webpage to “flatUser’s Personal Webpage”.
*/
const userInfo = {
	username: "flatUser123",
	description: "Hi, welcome to my webpage! Just a new user of this website!",
	theme: "red"
}

function displayUser(userInfo){
	const header = document.querySelector("#main")
	header.textContent = userInfo.username + "'s Personal Webpage"
}
displayUser(userInfo)
/*
By using .className, we can change the name of the class applied to any piece of the DOM.
 As long as the class exists within our style.css the css changes will be reflected on our webpage. 
It should turn red as that is what it is in the userInfo given
 */
const userInfo = {
	username: "flatUser123",
	description: "Hi, welcome to my webpage! Just a new user of this website!",
	theme: "red"
}

function displayUser(userInfo){
	const header = document.querySelector("#main")
	header.textContent = userInfo.username + "'s Personal Webpage"
	header.className = userInfo.theme
}
displayUser(userInfo)
/*
To add the description to the page we want to create a p element and select the body element. 
The p element will contain our description and the body is where we want this description to go. 
We have no prefix in front of body as we are selecting based on the html element of body and not any id or class.
*/
const userInfo = {
	username: "flatUser123",
	description: "Hi, welcome to my webpage! Just a new user of this website!",
	theme: "red"
}

function displayUser(userInfo){
	const header = document.querySelector("#main")
	header.textContent = userInfo.username + "'s Personal Webpage"
	header.className = userInfo.theme

	const description = document.createElement("p")
	const body = document.querySelector("body")
}

displayUser(userInfo)

/*
Using our userInfo object we will change the text and the class of our description to match what the user wants.
 For now the p element containing our description is just floating unattached to our DOM. 
If we save the file and refresh the webpage we will see no changes reflected at this moment. 
 */
const userInfo = {
	username: "flatUser123",
	description: "Hi, welcome to my webpage! Just a new user of this website!",
	theme: "red"
}

function displayUser(userInfo){
	const header = document.querySelector("#main")
	header.textContent = userInfo.username + "'s Personal Webpage"
	header.className = userInfo.theme

	const description = document.createElement("p")
	const body = document.querySelector("body")

	description.textContent = userInfo.description
	description.className = userInfo.theme
}

displayUser(userInfo)
/*
The last piece we need to add is our .append. 
We are calling the body element we have selected and using .append on the body and passing in the argument of description. 
This will take our p element and add it as a child of the body element.
 */
const userInfo = {
	username: "flatUser123",
	description: "Hi, welcome to my webpage! Just a new user of this website!",
	theme: "red"
}

function displayUser(userInfo){
	const header = document.querySelector("#main")
	header.textContent = userInfo.username + "'s Personal Webpage"
	header.className = userInfo.theme

	const description = document.createElement("p")
	const body = document.querySelector("body")

	body.append(description)
}

displayUser(userInfo)
