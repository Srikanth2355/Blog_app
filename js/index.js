

const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPosts();
}

const getPosts = () => {
    fetch(API_URL, {
        method:'GET',
    }).then((response)=> {
        return response.json();
    }).then((data)=> {
        buildPosts(data);
    })
}

const buildPosts = (blogPosts) => {
    let blogpostcontent = "";
    for(blogpost of blogPosts){
        const postdate = new Date(parseInt(blogpost.added_date)).toDateString();
        const postimage = `${API_BASE_URL}${blogpost.post_image}`;
        const postlink = `/post.html?id=${blogpost.id}`;
        blogpostcontent +=`<a class="post-link" href="${postlink}">
        <div class="post">
        <div class="post-image" style="background-image:url(${postimage})"></div>
        <div class="post-content">
            <div class="post-date">${postdate} </div>
            <div class="post-title"><h4>${blogpost.title}</h4></div>
            <div class="post-text"> ${blogpost.content}</div>
        </div>
    </div>
    </a>`
    }
    document.querySelector(".blog-post").innerHTML = blogpostcontent;
}