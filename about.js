import { aboutMeArray, blogPostArray } from "./data.js";
import { createPostHtml } from "./sharedFunctions.js";

const aboutFullPostsWrapper = document.getElementById('about-full-posts-wrapper')
let postCardGrid = document.getElementById('about-post-card-grid')

function getAboutContent() {
	let fullPostsHtml = ''
	for (let i = 0; i < aboutMeArray.length; i++) {
		let currentAboutPost = aboutMeArray[i]

		fullPostsHtml += `
		<div class="about-post single-full-post-wrapper" id="about${i + 1}">
			<hr />
			<h2>${currentAboutPost.title}</h2>
			<p class="post-content">${currentAboutPost.content}</p>
		</div>`
		aboutFullPostsWrapper.innerHTML = fullPostsHtml
	}
}

function getPostCardGrid() {
	let postCardHtml = ''

	for (let i = 0; i < 3; i++) {
		let postToBuild = blogPostArray[i]
		postCardHtml += createPostHtml(postToBuild)
	}
	postCardGrid.innerHTML = postCardHtml
}

getAboutContent()
getPostCardGrid()
