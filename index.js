import { blogPostArray } from "./data.js"

const mainHomeContent = document.getElementById('main-home-content')
const featuredPost = document.getElementById('home-featured-post')

// I think the thing I added the event listener for turned out to not be needed. Saving for now since I can't remember.
let screenWidth = 0

window.addEventListener('resize', function () {
	getScreenWidth()
})

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
	<p class="header-post-date">${featuredPostObject.date}</p>
	<h2 class="header-post-title">${featuredPostObject.title}</h2>
	<p class="header-post-content cut-off-text">${featuredPostObject.content}></p>
	<a href="post.html" class="expanded-all-caps continue-reading">continue reading >></a>`

	let backgroundCss = `
		background-image: linear-gradient(rgba(0, 0, 0, 0.1),  41%, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8), rgb(0, 0, 0)), url("${featuredPostObject.image}");
		background-position: center; background-size: cover; background-repeat: no-repeat; background-color: #222;`
	document.getElementById('home-header').style.cssText = backgroundCss

		featuredPost.innerHTML = featuredPostHtml
}

function getMainHomeContent() {
	let mainContentHtml = ''
	for (let i = 1; i < 7; i++) {
		let currentPost = blogPostArray[i]

		mainContentHtml += `
		<div class="blog-post" id="next-post-${i}">
			<hr />
			<div class="image-wrapper">
				<img class="post-img" alt="image" src="${currentPost.image}">
			</div>
			<p class="post-date expanded-all-caps">${currentPost.date}</p>
			<h2 class="main-post-title">${currentPost.title}</h2>
			<p class="post-content cut-off-text">${currentPost.content}</p>
			<a href="" class="continue-reading expanded-all-caps">continue reading >></a>
		</div>`
	}

	mainHomeContent.innerHTML = mainContentHtml
}

function renderHomeContent() {
	getFeaturedPost()
	getMainHomeContent()
}

getScreenWidth()
renderHomeContent()
