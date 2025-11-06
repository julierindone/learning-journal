import { createPostHtml, getThumbnailCardGrid } from "./sharedFunctions.js"
import { blogPostArray } from "./data.js"

const blogFeaturedPost = document.getElementById('blog-featured-post')
const blogFullPostWrapper = document.getElementById('blog-full-posts-wrapper')
const blogThumbnailOlderPostsButton = document.getElementById('blog-thumbnail-older-posts-button')

// State variables for getThumbnailCardGrid:
let unpostedPostCount = blogPostArray.length;
let thumbnailCardHtml = '';
let displayedPostCount = 0;
const blogThumbnailCardGrid = document.getElementById('blog-thumbnail-card-grid');

blogThumbnailOlderPostsButton.addEventListener('click', function () {
	loadThumbnails()
})

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

function loadThumbnails() {
	// 1. create state object to pass:
	let currentState = {
		unpostedPostCount,
		thumbnailCardHtml,
		displayedPostCount,
		blogThumbnailCardGridElement: blogThumbnailCardGrid // Pass the actual DOM element
	};

	// 2. Call getThumbnailCardGrid() and update local state with the returned values
	const updatedState = getThumbnailCardGrid(currentState, 2);
	unpostedPostCount = updatedState.unpostedPostCount;
	thumbnailCardHtml = updatedState.thumbnailCardHtml;
	displayedPostCount = updatedState.displayedPostCount;
}

function renderBlogContent() {
	getFeaturedPost()
	getFullBlogPosts()
	loadThumbnails()
}

renderBlogContent()