import { getPosts, logout, getUser, checkAuth, } from './fetch-utils.js';
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

const logInBtn = document.getElementById('login-button');

async function handleLogout() {
    await logout();
}
async function handleAuth() {
    window.location.href = '/auth-page';
}
const user = getUser();
if (user) {
    logInBtn.textContent = 'Logout';
    logInBtn.addEventListener('click', handleLogout);
    logInBtn.classList.remove('hide');
} else {
    logInBtn.textContent = 'Sign In / Sign Up';
    logInBtn.addEventListener('click', handleAuth);
    logInBtn.classList.remove('hide');
}

const newPostBtn = document.getElementById('create-button');

newPostBtn.addEventListener('click', () => {
    if (checkAuth()) window.location.href = '/create-page';

    console.log('it worked');
}
);

