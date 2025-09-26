import { aboutMeArray } from "./data.js";

const mainAboutContent = document.getElementById('main-about-content')

function getAboutContent() {
	for(let i = 0; i < aboutMeArray.length; i++) {
		let currentAboutPost = aboutMeArray[i]

		let newDiv = document.createElement('div')
		newDiv.className = "about-post"
		newDiv.id = `about${i + 1}`
		newDiv.innerHTML = `
			<h2 class="main-post-title">${currentAboutPost.title}</h2>
			<p class="post-content">${currentAboutPost.content}</p>
			`
		mainAboutContent.appendChild(newDiv)

	}
}

getAboutContent()
