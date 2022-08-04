

const newPost = async (event) => {
    event.preventDefault();
    // Add query selector when made
    const postTitle = document.querySelector('#blogTitle').value;
    const postText = document.querySelector('#blogContent').value;

    await fetch('/api/blogPost', {
        method: 'POST',
        body: JSON.stringify({postTitle, postText,}),
        headers: { 'Content-Type': 'application/json' },
    })
    if(response.ok){
        document.location.replace('/dashbpoard')
    }else{
        alert('Failed to sign up.');
    }

}
document
  .querySelector('.btn-newPost')
  .addEventListener('click', newPost);
