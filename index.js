import { blogPostArray } from "./data.js"

const mainHomeContent = document.getElementById('main-home-content')
const featuredPost = document.getElementById('featured-post')

function getFeaturedPost() {
	let featuredPostObject = blogPostArray[0]
	let cutContent = featuredPostObject.content.slice(0, 150)

	featuredPost.innerHTML = `
	<p class="header-post-date">${featuredPostObject.date}</p>
	<h2 class="header-post-title">${featuredPostObject.title}</h2>
	<p class="header-post-content">${cutContent}...(<a href="placeholder.html">Click to continue</a>)</p>`

	let backgroundCss = `
		background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("${featuredPostObject.image}");
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
				<img class="post-img" alt="image" src="${currentPost.image}">
				<p class="post-date">${currentPost.date}</p>
				<h2 class="post-title">${currentPost.title}</h2>
				<p class="post-content">${cutContent}...(<a href="placeholder.html">Click to continue</a>)</p>
			</div>
		`
	}
	let viewMore = `<a class="view-more" href="all-posts.html">View more</a>`

	mainHomeContent.innerHTML = mainContentHtml + viewMore
}

function renderHomeContent() {
	getFeaturedPost()
	getMainHomeContent()
}

renderHomeContent()
