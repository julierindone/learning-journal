import { createPostHtml } from "./sharedFunctions.js"
import { blogPostArray } from "./data.js"

const homePostCardGrid = document.getElementById('home-post-card-grid')
const featuredPost = document.getElementById('home-featured-post')

// window.addEventListener('load', function () {
// 	detectScreenOrientation()
// })

// window.addEventListener('resize', function () {
// 	detectScreenOrientation()
// })

// function detectScreenOrientation() {
// 	if (window.innerHeight < 600 && window.innerWidth > 500) {
// 		document.getElementById('home-header').style.height = 'unset'
// 		document.querySelector('#home-featured-post p:first-child').style.marginTop = '1em'
// 	} else {
// 		document.getElementById('home-header').style.removeProperty('height')
// 		document.querySelector('#home-featured-post p:first-child').style.removeProperty('margin-top')
// 	}
// }

function getFeaturedPost() {
	let featuredPostObject = blogPostArray[0]
	let featuredPostHtml = `
	<h2 class="header-post-title">${featuredPostObject.title}</h2>
	<p class="header-post-content cut-off-text">${featuredPostObject.content}</p>
	<a href="post.html" class="continue-reading">read more&thinsp;<span>&#187;</span></a>`

	document.getElementById('home-header').style.backgroundImage = `linear-gradient(
		rgb(0, 0, 0, 0.1), rgb(0, 0, 0, 0.3), 41%, rgb(0, 0, 0, 0.66), rgb(0, 0, 0, 0.7), rgb(0, 0, 0, 0.8)),
		url("${featuredPostObject.image}")`;
	document.getElementById('home-header').style.backgroundPosition = 'center';
	document.getElementById('home-header').style.backgroundSize = 'cover';
	document.getElementById('home-header').style.backgroundRepeat = 'no-repeat';
	document.getElementById('home-header').style.backgroundColor = '#222';

	featuredPost.innerHTML = featuredPostHtml
}

function getHomePostCardGrid() {
	let postCardHtml = ''
	for (let i = 1; i < 7; i++) {
		let postToBuild = blogPostArray[i]
		postCardHtml += createPostHtml(postToBuild)

		// displayedPostCount++
		// unpostedPostCount -= 1
	}
	homePostCardGrid.innerHTML = postCardHtml
}

function renderHomeContent() {
	getFeaturedPost()
	getHomePostCardGrid()
}

renderHomeContent()
