import { aboutMeArray, blogPostArray } from "./data.js";
import { createPostHtml, getPostCardGrid } from "./sharedFunctions.js";

const aboutFullPostsWrapper = document.getElementById('about-full-posts-wrapper')
const loadMorePostCardsBtn = document.getElementById('load-more-post-cards-btn')
const aboutPostCardGrid = document.getElementById('about-post-card-grid')

// State variables for loadAboutPostCards/getThumbnailCardGrid:
let unpostedPostCount = blogPostArray.length;
let postCardHtml = '';
let displayedPostCount = 0;

loadMorePostCardsBtn.addEventListener('click', function () {
	loadAboutPostCards(3)
})

// TODO: refactor to use createPostHtml here.
function getAboutContent() {
	let fullPostsHtml = ''
	for (let i = 0; i < aboutMeArray.length; i++) {
		let currentAboutPost = aboutMeArray[i]

		fullPostsHtml += `
		<div class="about-post single-full-post-wrapper" id="about${i + 1}">
			<hr />
			<h2>${currentAboutPost.title}</h2>
			<p class="post-content">${currentAboutPost.content}</p>
		</div>`
		aboutFullPostsWrapper.innerHTML = fullPostsHtml
	}
}

function loadAboutPostCards(postsToAdd) {
	// 1. create state object to pass:
	let currentState = {
		unpostedPostCount,
		postCardHtml,
		displayedPostCount,
		postCardGridElement: aboutPostCardGrid
	};

	// 2. call getPostCardGrid() and update local state with the returned values
	const updatedState = getPostCardGrid(currentState, postsToAdd)
	unpostedPostCount = updatedState.unpostedPostCount;
	postCardHtml = updatedState.postCardHtml;
	displayedPostCount = updatedState.displayedPostCount;
}

function renderAboutContent() {
	getAboutContent()
	loadAboutPostCards()
}

renderAboutContent()
