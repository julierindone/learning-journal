export function createPostHtml(postToBuild, purpose = "grid-card") {
	let wrapperClass = ''
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
						<img class="post-img" alt="image" src="${postToBuild.image}" />
					</div>
						<h2>${postToBuild.title}</h2>
					<p class="post-date">${postToBuild.date}</p>
					<p class="${postContentClass}">${postToBuild.content}</p>
				</div>
				${continueReading}
			</div>`;
}

// TODO: Can I remove the "post" wrapper? Or should I keep it just for uniformity's sake?
// Can I combine card wrapper and image wrapper?
export function createThumbnailCardHtml(postToBuild) {
	return `
		<div class="thumbnail-card-wrapper " id="id-${postToBuild.id}">
				<div class="image-wrapper">
					<img class="post-img" alt="${postToBuild.alt}" src="${postToBuild.image}" />
						<h2>${postToBuild.title}</h2>
				</div>
		</div>`
}
