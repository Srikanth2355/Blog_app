

const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPost();
}

const getPost = () => {
    const postid = getpostidparam();
    const url = `${API_URL}${postid}`;
     fetch(url,{
         method:'GET',
     }).then((response)=> {
         return response.json();
     }).then((data)=> {
         buildPost(data);
     })
}

const getpostidparam = ()=>{
    const querystring = window.location.search;
    const urlparams = new URLSearchParams(querystring);
    return urlparams.get("id");
}

const buildPost = (data) => {
    const postdate = new Date(parseInt(data.added_date)).toDateString();
    const postimage = `${API_BASE_URL}${data.post_image}`;

    document.getElementById("individual-post-title").innerText = data.title;
    document.getElementById("individual-post-content").innerText = data.content;
    document.getElementById("individual-post-date").innerText =`published on ${postdate}`;
    document.querySelector("header").style.backgroundImage = `url(${postimage})`;
}

