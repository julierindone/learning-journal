import { createPostHtml, getThumbnailCardGrid } from "./sharedFunctions.js"
import { blogPostArray } from "./data.js"

const blogFeaturedPost = document.getElementById('blog-featured-post')
const blogFullPostWrapper = document.getElementById('blog-full-posts-wrapper')
const blogThumbnailGrid = document.getElementById('blog-thumbnail-grid');
const loadMoreThumbnailsBtn = document.getElementById('load-more-thumbnails-btn')

// state variables for loadThumbnails/getThumbnailCardGrid:
let unpostedPostCount = blogPostArray.length;
let thumbnailCardHtml = '';
let displayedPostCount = 0;

loadMoreThumbnailsBtn.addEventListener('click', function () {
	loadThumbnails(3)
})

function getFeaturedPost() {
	let featuredPostObject = blogPostArray[0]
	let featuredPostHtml = `
			<img class="post-img" src="${featuredPostObject.image}" alt="${featuredPostObject.altText}" />
			<h2>${featuredPostObject.title}</h2>
			<time>${featuredPostObject.date}</time>
			<p class="post-content">${featuredPostObject.content}</p>`

	displayedPostCount++
	unpostedPostCount -= 1

	blogFeaturedPost.innerHTML = featuredPostHtml
}

// TODO: Move to sharedFunctions so it can be used by About Me page
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

function loadThumbnails(postsToAdd) {
	// 1. create state object to pass:
	let currentState = {
		unpostedPostCount,
		thumbnailCardHtml,
		displayedPostCount,
		blogThumbnailGridElement: blogThumbnailGrid // Pass the actual DOM element
	};

	// 2. Call getThumbnailCardGrid() and update local state with the returned values
	const updatedState = getThumbnailCardGrid(currentState, postsToAdd);
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