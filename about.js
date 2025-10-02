import { aboutMeArray } from "./data.js";

const mainAboutContent = document.getElementById('main-about-content')

function getAboutContent() {
	let mainContentHtml = ''
	for(let i = 0; i < aboutMeArray.length; i++) {
		let currentAboutPost = aboutMeArray[i]

		mainContentHtml += `
		<div class="about-post" id="about${i + 1}">
			<hr />
			<h2 class="main-post-title">${currentAboutPost.title}</h2>
			<p class="post-content">${currentAboutPost.content}</p>
		</div>`
		mainAboutContent.innerHTML = mainContentHtml
	}
}

getAboutContent()
