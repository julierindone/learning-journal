import { blogPostArray } from "./data.js"

const mainHomeContent = document.getElementById('main-home-content')
const featuredPost = document.getElementById('home-featured-post')
let screenWidth = 0

window.addEventListener('resize', () => {
	if (window.innerWidth < 800) {
		screenWidth = "mobile"
	} else {
		screenWidth = "desktop"
	}
})


function getFeaturedPost() {
	let featuredPostObject = blogPostArray[0]
	let cutContent = featuredPostObject.content.slice(0, 150)

	featuredPost.innerHTML = `
	<p class="header-post-date">${featuredPostObject.date}</p>
	<h2 class="header-post-title">${featuredPostObject.title}</h2>
	<p class="header-post-content">${cutContent}...(<a href="placeholder.html">Click to continue</a>)</p>`

	let backgroundCss = `
		background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url("${featuredPostObject.image}");
		background-position: center; background-size: cover; background-repeat: no-repeat; background-color: #222;`
	document.getElementById('home-header').style.cssText = backgroundCss
}

function getMainHomeContent() {
	let mainContentHtml = ''
	for (let i = 1; i < 4; i++) {
		let currentPost = blogPostArray[i]
		let cutContent = currentPost.content.slice(0, 200)

		mainContentHtml += `
			<div class="blog-post" id="next-post-${i}">
				<div class="image-wrapper">
					<img class="post-img" alt="image" src="${currentPost.image}">
				</div>
				<p class="post-date">${currentPost.date}</p>
				<h2 class="main-post-title">${currentPost.title}</h2>
				<p class="post-content">${cutContent}...(<a href="placeholder.html">continue reading</a>)</p>
			</div>
		`
	}

	mainHomeContent.innerHTML = mainContentHtml
}

function renderHomeContent() {
	getFeaturedPost()
	getMainHomeContent()
}

renderHomeContent()
