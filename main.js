const posts = document.querySelectorAll('.post');

const postContentContainer = document.getElementById('showPost');

posts.forEach(post => {
    post.addEventListener('click', () => {
        posts.forEach(p => {
            if (p !== post) {
                p.style.display = 'none';
            }
        });

        postContentContainer.innerHTML = '';

        const content = post.innerHTML;

        const contentElement = document.createElement('div');
        contentElement.innerHTML = content;

        postContentContainer.appendChild(contentElement);
    });
});