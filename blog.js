import { createPostHtml, createThumbnailCardHtml } from "./sharedFunctions.js"
import { blogPostArray } from "./data.js"

const blogFeaturedPost = document.getElementById('blog-featured-post')
const blogFullPostWrapper = document.getElementById('blog-full-posts-wrapper')
let blogThumbnailCardGrid = document.getElementById('blog-thumbnail-card-grid')
let displayedPostCount = 0
let unpostedPostCount = blogPostArray.length


function getFeaturedPost() {
	let featuredPostObject = blogPostArray[0]
	let featuredPostHtml = `
			<img class="post-img" src="${featuredPostObject.image}" alt="${featuredPostObject.altText}" />
			<h2>${featuredPostObject.title}</h2>
			<p class="post-date">${featuredPostObject.date}</p>
			<p class="post-content">${featuredPostObject.content}</p>`

	displayedPostCount++
	unpostedPostCount -= 1

	blogFeaturedPost.innerHTML = featuredPostHtml
}

function getFullBlogPosts() {
	let fullPostsHtml = ''
	for (let i = 1; i < 4; i++) {
		let postToBuild = blogPostArray[i]
		fullPostsHtml += createPostHtml(postToBuild, "full")
		displayedPostCount++
		unpostedPostCount -= 1
	}

	blogFullPostWrapper.innerHTML = fullPostsHtml
}

function getThumbnailCardGrid() {
	let thumbnailCardHtml = ''
	// thumbnailStartingIndex keeps track of the index that should be created
	let thumbnailStartingIndex = displayedPostCount

	// TODO: Cut off at 4 and then add button to load more
	for (let i = thumbnailStartingIndex; i < blogPostArray.length; i++) {
		let postToBuild = blogPostArray[i]
		thumbnailCardHtml += createThumbnailCardHtml(postToBuild)
		displayedPostCount++
		unpostedPostCount -= 1
	}

	blogThumbnailCardGrid.innerHTML = thumbnailCardHtml
}

function renderBlogContent() {
	getFeaturedPost()
	getFullBlogPosts()
	getThumbnailCardGrid()
}

renderBlogContent()