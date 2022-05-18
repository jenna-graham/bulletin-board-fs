export function renderPosts(post) {
    const div = document.createElement('div');
    div.classList.add('post');

    const h1 = document.createElement('h1');
    h1.textContent = post.title;

    const h2 = document.createElement('h2');
    h2.textContent = post.description;

    const p = document.createElement('p');
    p.textContent = post.contact;

    div.append(h1, h2, p);
    return div;
}