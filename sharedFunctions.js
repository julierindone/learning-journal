export function createPostHtml(postToBuild) {
	let path = window.location.pathname
	let continueReading = `
		<a href="" class="continue-reading">continue reading&thinsp;<span>&#187;</span></a>`
	let postContentClass = 'post-content cut-off-text'

	if (path.includes('blog.html')) {
		postContentClass = 'blog-page-post-content cut-off-text'
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
