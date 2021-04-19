const search=document.querySelector("#search");
const sbtn=document.querySelector("#sbtn");
const alert=document.querySelector(".alert");
const output=document.querySelector(".output");

sbtn.addEventListener("click",(e)=>{
  e.preventDefault();

if(search.value===""){
alert.classList.add("show")
setTimeout(()=>{
alert.classList.remove("show")
}, 1500);
}
else {
  getUser(search.value).then(res=> displayUser(res)).catch(error=> console.log(error));
  search.value="";
  }
})


const displayUser=(data)=>{
output.classList.add("show");
if(data.message){
output.innerHTML=`<h4>${data.message}</h4>`
}else {
  output.innerHTML=`<h4>${data.name}</h4>
  <img src="${data.avatar_url}" alt="${data.name} info" class="proimg">
  <p class="w-75 mx-auto">${data.bio}</p>
  <p>${data.company}</p>
  <p><i class="fas fa-globe mr-2"></i> portfolio/Website: <a href="${data.blog}" class="text-white">Go to website</a></p>
  <div class="info">
  <p><i class="fas fa-users"></i> Number of Followers: ${data.followers}</p>
  <p><i class="fas fa-eye"></i> Following: ${data.following}</p>
  <p><i class="fas fa-code-branch"></i> Number of Repos: ${data.public_repos}</p>
  </div>
  <p><i class="fas fa-compass mr-2"></i> Location: ${data.location}</p>
  <p><i class="fab fa-twitter"></i> ${data.twitter_username}</p>
  `
}
console.log(data);
}



const getUser= async (user)=>{
let githubResponse = await fetch(`https://api.github.com/users/${user}`);
let githubUser = await githubResponse.json();
return githubUser;
}
