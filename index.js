import { getHomePostCardGrid } from "./sharedFunctions.js"
import { blogPostArray } from "./data.js"

const featuredPost = document.getElementById('home-featured-post')
const homeOlderPostsButton = document.getElementById('home-older-posts-button')

// state variables for getHomePostCardGrid
let unpostedHomePostCount = blogPostArray.length;
let homePostCardHtml = '';
let homedisplayedPostCount = 0;
const homePostCardGrid = document.getElementById('home-post-card-grid')

window.addEventListener('load', function () {
	detectLandscapePhoneOrientation()
})

window.addEventListener('resize', function () {
	detectLandscapePhoneOrientation()
})

homeOlderPostsButton.addEventListener('click', function () {
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
	<p class="header-post-content cut-off-text">${featuredPostObject.content}</p>
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

	homedisplayedPostCount++;
	unpostedHomePostCount--;

	featuredPost.innerHTML = featuredPostHtml;
}

function loadHomePostCards(postsToAdd = 2) {
	// 1. create state object to pass:
	let currentState = {
		unpostedHomePostCount,
		homePostCardHtml,
		homedisplayedPostCount,
		homePostCardGridElement: homePostCardGrid
	};

	// 2 call getHomePostCardGrid() and update local state with the returned values
	const updatedState = getHomePostCardGrid(currentState, postsToAdd)
	unpostedHomePostCount = updatedState.unpostedHomePostCount
	homePostCardHtml = updatedState.homePostCardHtml
	homedisplayedPostCount = updatedState.homedisplayedPostCount
}

function renderHomeContent() {
	getFeaturedPost()
	loadHomePostCards()
}

renderHomeContent()
