import { getPosts } from './fetch-utils.js';
import { renderPosts } from './render-utils.js';

async function loadData() {
    const posts = await getPosts();
    const main = document.querySelector('main');
    for (let post of posts) {
        const postDiv = renderPosts(post);
        main.append(postDiv);
    }

}
loadData();
