import { blogPostArray } from "./data.js"

const newestPost = document.getElementById('newest-post')
const mainContent = document.getElementById('main-content')

function getNewestPost(){
	let newestPostObject = blogPostArray[0]

	let cutContent = newestPostObject.content.slice(0, 150)

	newestPost.innerHTML =
	`
	<p class="header-post-date">${newestPostObject.date}</p>
	<h1 class="header-post-title">${newestPostObject.title}</h1>
	<p class="header-post-content">${cutContent}...(<a href="placeholder.html">Click to continue</a>)</p>
	`
	}

function getMainContent() {
	let mainContentHtml = ''
	for(let i=1; i < 4; i++) {
		let currentPost = blogPostArray[i]
		let cutContent = currentPost.content.slice(0,130)
		console.log(currentPost.image)
		console.log(cutContent);
		mainContentHtml += `
			<div class="blog-post" id="next-post-${i}">
				<img class="post-img" alt="image" src="${currentPost.image}">
				<p class="post-date">${currentPost.date}</p>
				<p class="post-title">${currentPost.title}</p>
				<p class="post-content">${cutContent}...(<a href="placeholder.html">Click to continue</a>)</p>
			</div>
		`
	}
	let viewMore = `
			<a class="view-more" href="all-posts.html">View more</a>`

		mainContent.innerHTML = mainContentHtml + viewMore
}


function renderHtml() {
	getNewestPost()
	getMainContent()
}

renderHtml()

