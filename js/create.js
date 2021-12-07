// javascript for create.html
const form = document.querySelector('.storyy');

const createPost = async (e) => {
  e.preventDefault();

  const doc = {
    title: form.title.value,
    time:"",
    category: form.category.value,
    story:form.post.value,
    duration:"",
    censor: "",
    great: "",
  }

  await fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: { 'Content-Type': 'application/json' }
  })

  window.location.replace('/')
}

form.addEventListener('submit', createPost);