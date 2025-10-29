export function createPostHtml(postToBuild, purpose = "grid-card") {
	let wrapperClass = ''
	let postTitleClass = ''
	let postContentClass = ''
	let continueReading = ''

	if (purpose == "grid-card") {
		wrapperClass = 'post-card-wrapper'
		postContentClass = 'post-content cut-off-text'
		continueReading = `
			<a href="" class="continue-reading">continue reading&thinsp;<span>&#187;</span></a>`
	}

	if (purpose == "full") {
		wrapperClass = 'single-full-post-wrapper'
		postContentClass = 'post-content'
		continueReading = ``
	}

	return `
			<div class="post" id="id-${postToBuild.id}">
				<hr />
				<div class="${wrapperClass}">
					<div class="image-wrapper">
						<img class="post-img" alt="image" src="${postToBuild.image}">
					</div>
					<h2 class="${postTitleClass}">${postToBuild.title}</h2>
					<p class="post-date">${postToBuild.date}</p>
					<p class="${postContentClass}">${postToBuild.content}</p>
				</div>
				${continueReading}
			</div>`;
}
