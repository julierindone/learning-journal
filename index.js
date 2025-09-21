import { blogPostArray } from "./data.js"

const mainHomeContent = document.getElementById('main-home-content')
const featuredPost = document.getElementById('featured-post')

function getFeaturedPost() {
	let featuredPostObject = blogPostArray[0]
	let cutContent = featuredPostObject.content.slice(0, 150)

	featuredPost.innerHTML = `
	<p class="header-post-date">${featuredPostObject.date}</p>
	<h1 class="header-post-title">${featuredPostObject.title}</h1>
	<p class="header-post-content">${cutContent}...(<a href="placeholder.html">Click to continue</a>)</p>`

	let backgroundCss = `
		background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95)),
			url("${featuredPostObject.image}");
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;`
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
				<p class="post-title">${currentPost.title}</p>
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
