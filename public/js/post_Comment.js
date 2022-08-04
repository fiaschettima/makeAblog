const newPost = async (event) => {
    event.preventDefault();
   
    const title = document.querySelector('input[name="post_title"]').value;
    const content = document.querySelector('textarea[name="post_content"]').value;

    const response = await fetch('/api/blogPost', {
        method: "POST",
        body: JSON.stringify({ title, content }),
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
