export function createPostHtml(postToBuild) {
	let path = window.location.pathname
	let postTitleClass = ''
	let postContentClass = 'post-content cut-off-text'
	let continueReading = `
		<a href="" class="continue-reading">continue reading&thinsp;<span>&#187;</span></a>`

	if (path.includes('blog.html')) {
		postTitleClass = 'full-blog-posts-title'
		postContentClass = 'full-blog-posts-content'
		continueReading = ``
	}

	return `
			<div class="post" id="next-post-${postToBuild.id}">
				<hr />
				<div class="post-wrapper">
					<div class="image-wrapper">
						<img class="post-img" alt="image" src="${postToBuild.image}">
					</div>
					<p class="post-date">${postToBuild.date}</p>
					<h2 class="main-post-title">${postToBuild.title}</h2>
					<p class="${postContentClass}">${postToBuild.content}</p>
				</div>
				${continueReading}
			</div>`;
}
