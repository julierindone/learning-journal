export function createPostHtml(postToBuild) {
	console.log(`creating post html`);

	return `
			<div class="blog-post" id="next-post-${postToBuild.id}">
				<hr />
				<div class="post-wrapper">
					<div class="image-wrapper">
						<img class="post-img" alt="image" src="${postToBuild.image}">
					</div>
					<p class="post-date expanded-all-caps">${postToBuild.date}</p>
					<h2 class="main-post-title">${postToBuild.title}</h2>
					<p class="post-content cut-off-text">${postToBuild.content}</p>
				</div>
				<a href="" class="continue-reading expanded-all-caps">continue reading >></a>
			</div>`;
}
