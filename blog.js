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

	let featuredBlogContent = document.getElementById('featured-blog-content')
	featuredBlogContent.innerText = featuredPost.content
}

function getMainBlogContent() {
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

	mainBlogContent.innerHTML = mainContentHtml + viewMore
}

function renderBlogContent() {
	getFeaturedPost()
	getMainBlogContent()
}

renderBlogContent()