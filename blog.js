import { blogPostArray } from "./data.js"

function getFeaturedPost () {
	console.log("in getFeaturedPost")
	let featuredPost = blogPostArray[0]


	let featuredBlogImage = document.getElementById('featured-blog-image')
	featuredBlogImage.src = featuredPost.image
	featuredBlogImage.alt = featuredPost.altText

	let featuredBlogDate = document.getElementById('featured-blog-date')
	featuredBlogDate.innerHTML = featuredPost.date

	let featuredBlogTitle = document.getElementById('featured-blog-title')
	featuredBlogTitle.innerHTML = featuredPost.title

	let featuredBlogContent = document.getElementById('featured-blog-content')
	featuredBlogContent.innerText = featuredPost.content

}

getFeaturedPost()

