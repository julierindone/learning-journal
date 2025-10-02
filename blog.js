import { blogPostArray } from "./data.js"

const mainBlogContent = document.getElementById('main-blog-content')

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


function getMainBlogContent() {
	let mainContentHtml = ''
	for (let i = 1; i < 4; i++) {
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

	mainBlogContent.innerHTML = mainContentHtml
}

function renderBlogContent() {
	getFeaturedPost()
	getMainBlogContent()
}

getScreenWidth()
renderBlogContent()