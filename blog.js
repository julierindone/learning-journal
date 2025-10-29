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
	let featuredPost = blogPostArray[0]

	let featuredBlogImage = document.getElementById('featured-blog-image')
	featuredBlogImage.src = featuredPost.image
	featuredBlogImage.alt = featuredPost.altText

	let featuredBlogDate = document.getElementById('featured-blog-date')
	featuredBlogDate.innerHTML = featuredPost.date

	let featuredBlogTitle = document.getElementById('featured-blog-title')
	featuredBlogTitle.innerHTML = featuredPost.title

	let featuredBlogContent = document.getElementById('blog-featured-content')
	featuredBlogContent.innerHTML = featuredPost.content
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