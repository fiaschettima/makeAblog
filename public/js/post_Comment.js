

const newPost = async (event) => {
    event.preventDefault();
   
    const post_title = document.querySelector('input[name="post_title"]').value;
    const post_content = document.querySelector('textarea[name="post_content"]').value;

    const response = await fetch('/api/blogPost', {
        method: 'POST',
        body: JSON.stringify({post_title, post_content,}),
        headers: { 'Content-Type': 'application/json' },
    })
    if(response.ok){
        document.location.replace('/dashboard')
    }else{
        alert('Failed to sign up.');
    }

}
document
  .querySelector('.newBlog-form')
  .addEventListener('submit', newPost);
