// javascript for index.html
const container = document.querySelector('.blogs2');
const searchForm = document.querySelector('.search_story');


const renderPosts = async (term) => {
  console.log(term);
  //let uri = 'http://localhost:3000/posts?_sort=time&_order=desc';
  let uri = 'https://saveandsound-api.herokuapp.com/posts?category=運動&censor=pass&&_sort=time&_order=desc';
  if (term) {
    uri += `&q=${term}`
  }

  const res = await fetch(uri);
  const posts = await res.json();
  console.log(posts);

  let template = '';
  posts.forEach(post => {    
    
    template += `
      <a href="details.html?id=${post.id}&email=${post.email}&title=${post.title}">
        <div class="m">
          <div class="img" >
              <img src="${post.photo_path.substring(34)}">
          </div>     
          <div class="m0">
              <div>${post.name}</div>
              <div>${post.category}</div>
          </div>
          <div class="m1">${post.title}</div>
          <div class="m2">${post.time}</div>
          <div class="m3">${post.duration}</div>
        </div>
      </a>
    `
  });
  
  container.innerHTML = template;
}

// search
searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  renderPosts(searchForm.term.value.trim());
})

window.addEventListener('DOMContentLoaded', () => renderPosts());