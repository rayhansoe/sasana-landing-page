// /utils/wordpress.js

const BASE_URL = 'https://sasanadigital.com/wp-json/wp/v2'

export async function getPosts() {
	const postsRes = await fetch(BASE_URL + '/posts')
	const postArray = await postsRes.json()
	const posts = postArray.slice(0, 3)
	return posts
}

export async function getPost(slug) {
	const posts = await getPosts()
	const postArray = posts.filter(post => post.slug == slug)
	const post = postArray.length > 0 ? postArray[0] : null
	return post
}

export async function getSlugs(type) {
	let elements = []
	switch (type) {
		case 'posts':
			elements = await getPosts()
			break
		case 'pages':
			elements = await getPages()
			break
	}
	const elementsIds = elements.map(element => {
		return {
			params: {
				slug: element.slug,
			},
		}
	})
	return elementsIds
}
