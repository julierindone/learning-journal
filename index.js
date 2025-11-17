import { getPostCardGrid } from "./sharedFunctions.js"
import { blogPostArray } from "./data.js"

const featuredPost = document.getElementById('home-featured-post')
const loadMorePostCardsBtn = document.getElementById('load-more-post-cards-btn')

// state variables for getPostCardGrid
let unpostedPostCount = blogPostArray.length;
let postCardHtml = '';
let displayedPostCount = 0;
const homePostCardGrid = document.getElementById('home-post-card-grid')

window.addEventListener('load', function () {
	detectLandscapePhoneOrientation()
})

window.addEventListener('resize', function () {
	detectLandscapePhoneOrientation()
})

loadMorePostCardsBtn.addEventListener('click', function () {
	loadHomePostCards(3)
})

function detectLandscapePhoneOrientation() {
	if (window.innerHeight < 600 && window.innerWidth > 500) {
		document.getElementById('home-header').style.height = 'unset'
		document.querySelector('#home-featured-post').style.paddingTop = '2em'
		document.querySelector('#home-featured-post').style.background = 'linear-gradient(rgb(0, 0, 0, 0.4), 55%, rgb(0, 0, 0, .65))'

	} else {
		document.getElementById('home-header').style.removeProperty('height')
		document.querySelector('#home-featured-post').style.removeProperty('padding-top')
		document.querySelector('#home-featured-post').style.removeProperty('background')
	}
}

function getFeaturedPost() {
	let featuredPostObject = blogPostArray[0]
	let featuredPostHtml = `
	<h2 class="header-post-title">${featuredPostObject.title}</h2>
	<p class="header-post-content cut-off-text line-break">${featuredPostObject.content}</p>
	<a href="post.html" class="continue-reading">read more&thinsp;<span>&#187;</span></a>`

	document.getElementById('home-header').style.backgroundImage = `linear-gradient(
		rgb(0, 0, 0, 0.1), rgb(0, 0, 0, 0.3), 41%, rgb(0, 0, 0, 0.66), rgb(0, 0, 0, 0.7), rgb(0, 0, 0, 0.8)),
		url("${featuredPostObject.image}")`;
	document.getElementById('home-header').style.backgroundPosition = 'center';
	document.getElementById('home-header').style.backgroundSize = 'cover';
	document.getElementById('home-header').style.backgroundRepeat = 'no-repeat';
	document.getElementById('home-header').style.backgroundColor = '#222';
	document.getElementById('home-header').role = 'img';
	document.getElementById('home-header').ariaLabel = `image of ${featuredPostObject.alt}`;

	displayedPostCount++;
	unpostedPostCount--;

	featuredPost.innerHTML = featuredPostHtml;
}

// same as loadAboutPostCards
function loadHomePostCards(postsToAdd) {
	// 1. create state object to pass:
	let currentState = {
		unpostedPostCount,
		postCardHtml,
		displayedPostCount,
		postCardGridElement: homePostCardGrid
	};

	// 2. call getPostCardGrid() and update local state with the returned values
	const updatedState = getPostCardGrid(currentState, postsToAdd)
	unpostedPostCount = updatedState.unpostedPostCount
	postCardHtml = updatedState.postCardHtml
	displayedPostCount = updatedState.displayedPostCount
}

function renderHomeContent() {
	getFeaturedPost()
	loadHomePostCards()
}

renderHomeContent()
