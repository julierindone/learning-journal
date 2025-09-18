import { aboutMeArray } from "./data.js";

const mainAboutContent = document.getElementById('main-about-content')

function getAboutContent() {
	for(let i = 0; i < aboutMeArray.length; i++) {
		let currentAboutPost = aboutMeArray[i]

		let newDiv = document.createElement('div')
		newDiv.className = "about-post"
		newDiv.id = `about${i + 1}`
		newDiv.innerHTML = `
			<p class="post-title">${currentAboutPost.title}</p>
			<p class="post-content">${currentAboutPost.content}</p>
			`
		mainAboutContent.appendChild(newDiv)

	}




	// 	newDiv.className = "about-section"
	// 	// newDiv.id = `about${i + 1}`
	// 	newDiv.id = `about${i}`
	// 	newDiv.innerHTML = `
	// 		<p class="post-title">${section.title}</p>
	// 		<p>${section.content}</p>
	// 		`

	// 		console.log(mainAboutContent.innerHTML)
	// 	// mainAboutContent.appendChild('newDiv')
	// })
}

getAboutContent()
