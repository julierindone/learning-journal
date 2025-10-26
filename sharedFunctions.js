export function createPostHtml(postToBuild, purpose) {
	let path = window.location.pathname
	let postTitleClass = ''
	let postContentClass = ''
	let continueReading = ''

	if (purpose == "grid-card") {
		postTitleClass = 'post-card-grid-title'
		postContentClass = 'post-card-grid-content cut-off-text'
		continueReading = `
			<a href="" class="continue-reading">continue reading&thinsp;<span>&#187;</span></a>`
	}

	if (path.includes('blog.html')) {
		postTitleClass = 'full-blog-posts-title'
		postContentClass = 'full-blog-posts-content'
		continueReading = ``
	}

	return `
			<div class="post" id="id-${postToBuild.id}">
				<hr />
				<div class="post-wrapper">
					<div class="image-wrapper">
						<img class="post-img" alt="image" src="${postToBuild.image}">
					</div>
					<p class="post-date">${postToBuild.date}</p>
					<h2 class="${postTitleClass}">${postToBuild.title}</h2>
					<p class="${postContentClass}">${postToBuild.content}</p>
				</div>
				${continueReading}
			</div>`;
}
