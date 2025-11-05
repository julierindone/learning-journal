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

export function getThumbnailCardGrid(currentState, postsToAdd = 2) {
	// Extract properties of currentState into local variables
	let { unpostedPostCount, thumbnailCardHtml, displayedPostCount, blogThumbnailCardGridElement } = currentState;

	// thumbnailStartingIndex keeps track of the index that should be created
	let thumbnailStartingIndex = displayedPostCount;

	// Can't add more posts than are available
	if (unpostedPostCount < postsToAdd) {
		postsToAdd = unpostedPostCount;
	}

	// TODO: Cut off at 2. Once there are more posts it could get increased to load 3 or 4 at a time.
	for (let i = thumbnailStartingIndex; i < thumbnailStartingIndex + postsToAdd; i++) {
		let postToBuild = blogPostArray[i];
		thumbnailCardHtml += createThumbnailCardHtml(postToBuild);
		displayedPostCount++;
		unpostedPostCount -= 1;
	}

	// Update the DOM element directly if it's passed
	if (blogThumbnailCardGridElement) {
		blogThumbnailCardGridElement.innerHTML = thumbnailCardHtml;
	}

	// Return the updated state
	return { unpostedPostCount, thumbnailCardHtml, displayedPostCount, blogThumbnailCardGridElement };
}
