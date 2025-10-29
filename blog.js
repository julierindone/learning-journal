import { createPostHtml } from "./sharedFunctions.js"
import { blogPostArray } from "./data.js"

const blogFullPostWrapper = document.getElementById('blog-full-posts-wrapper')
let blogThumbnailCardGrid = document.getElementById('blog-thumbnail-card-grid')

function getScreenWidth() {
	if (window.innerWidth < 800) {
		screenWidth = "mobile"
	} else {
		screenWidth = "desktop"
	}
}

function getFeaturedPost() {
	let featuredPostObject = blogPostArray[0]
	let featuredPostHtml = `
			<img class="post-img" src="${featuredPostObject.image}" alt="${featuredPostObject.altText}" />
			<h2>${featuredPostObject.title}</h2>
			<p class="post-date">${featuredPostObject.date}</p>
			<p class="post-content">${featuredPostObject.content}</p>`

			blogFeaturedPost.innerHTML = featuredPostHtml
}

function getFullBlogPosts() {
	let fullPostsHtml = ''
	for (let i = 1; i < 4; i++) {
		let postToBuild = blogPostArray[i]
		fullPostsHtml += createPostHtml(postToBuild, "full")
	}
	blogFullPostWrapper.innerHTML = fullPostsHtml
}

}

function renderBlogContent() {
	getFeaturedPost()
	getFullBlogPosts()
	getPostCardGrid()
}

getScreenWidth()
renderBlogContent()