import { blogPostArray } from "./data.js"

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
						<img class="post-img" alt="${postToBuild.alt}" src="${postToBuild.image}" />
					</div>
						<h2>${postToBuild.title}</h2>
					<p class="post-date">${postToBuild.date}</p>
					<p class="${postContentClass}">${postToBuild.content}</p>
				</div>
				${continueReading}
			</div>`;
}

export function createThumbnailCardHtml(postToBuild) {
	return `
		<div class="thumbnail-card-wrapper " id="id-${postToBuild.id}">
				<div class="image-wrapper">
					<img class="post-img" alt="${postToBuild.alt}" src="${postToBuild.image}" />
						<h2>${postToBuild.title}</h2>
				</div>
		</div>`
}

export function getThumbnailCardGrid(currentState, postsToAdd = 3) {

	// extract properties of currentState into local variables
	let { unpostedPostCount, thumbnailCardHtml, displayedPostCount, blogThumbnailGridElement } = currentState;

	// thumbnailStartingIndex keeps track of the index that should be created
	let thumbnailStartingIndex = displayedPostCount;

	// can't add more posts than are available
	if (unpostedPostCount < postsToAdd) {
		postsToAdd = unpostedPostCount;
	}

	// get html for each thumbnail
	for (let i = thumbnailStartingIndex; i < thumbnailStartingIndex + postsToAdd; i++) {
		let postToBuild = blogPostArray[i];
		thumbnailCardHtml += createThumbnailCardHtml(postToBuild);
		displayedPostCount++;
		unpostedPostCount -= 1;
	}

	// update DOM
	blogThumbnailGridElement.innerHTML = thumbnailCardHtml;

	// if there are no more posts to load, remove load button and add end message
	if (unpostedPostCount == 0) {
		document.getElementById('load-more-thumbnails-btn').remove()
		const asideSection = document.getElementById('aside-section')
		const endOfThumbnails = document.createElement('p')
		endOfThumbnails.classList.add('divider', 'end-of-thumbnails')
		endOfThumbnails.innerHTML = "You've reached the end."
		asideSection.appendChild(endOfThumbnails)
	}

	return { unpostedPostCount, thumbnailCardHtml, displayedPostCount };
}

export function getPostCardGrid(currentState, postsToAdd = 3) {
	let { unpostedPostCount, postCardHtml, displayedPostCount, postCardGridElement } = currentState
	let postCardStartingIndex = displayedPostCount

	if (postsToAdd > unpostedPostCount) {
		postsToAdd = unpostedPostCount
	}

	for (let i = postCardStartingIndex; i < postCardStartingIndex + postsToAdd; i++) {
		let postToBuild = blogPostArray[i]
		postCardHtml += createPostHtml(postToBuild)

		displayedPostCount++;
		unpostedPostCount--;
	}

	postCardGridElement.innerHTML = postCardHtml;

	if (unpostedPostCount == 0) {
		document.getElementById('load-more-post-cards-btn').remove()
		const asideSection = document.getElementById('aside-section')
		const endOfPostCards = document.createElement('p')
		endOfPostCards.classList.add('divider', 'end-of-post-cards')
		endOfPostCards.innerHTML = "You've reached the end."
		asideSection.appendChild(endOfPostCards)
	}

	// Return updated State
	return { unpostedPostCount, postCardHtml, displayedPostCount };
}
