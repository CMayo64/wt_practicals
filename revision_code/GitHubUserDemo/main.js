
async function getUserData() {

    const user = await fetch('https://api.github.com/users/CMayo64');
    const userData = await user.json();
    document.querySelector('#avatar').setAttribute('src', userData.avatar_url);
    document.querySelector('#info').innerHTML = `<strong> bio:</strong> ${userData.bio} <strong> following:</strong>${userData.following}`;
}


 
window.addEventListener('DOMContentLoaded', () => {
    getUserData();
})