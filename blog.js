import { blogPostArray } from "./data.js"

const mainBlogContent = document.getElementById('main-blog-content')

function getFeaturedPost() {
	let featuredPost = blogPostArray[0]

	let featuredBlogImage = document.getElementById('featured-blog-image')
	featuredBlogImage.src = featuredPost.image
	featuredBlogImage.alt = featuredPost.altText

	let featuredBlogDate = document.getElementById('featured-blog-date')
	featuredBlogDate.innerHTML = featuredPost.date

	let featuredBlogTitle = document.getElementById('featured-blog-title')
	featuredBlogTitle.innerHTML = featuredPost.title

	let featuredBlogContent = document.getElementById('blog-featured-content')
	featuredBlogContent.innerText = featuredPost.content
}

let screenWidth = 0

window.addEventListener('resize', () => {
	if (window.innerWidth < 800) {
		screenWidth = "mobile"
	} else {
		screenWidth = "desktop"
	}
})

function getMainBlogContent() {
	let mainContentHtml = ''
	for (let i = 1; i < blogPostArray.length; i++) {
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

	mainBlogContent.innerHTML = mainContentHtml
}

function renderBlogContent() {
	getFeaturedPost()
	getMainBlogContent()
}

renderBlogContent()