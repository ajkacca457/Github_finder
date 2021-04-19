const search=document.querySelector("#search");
const sbtn=document.querySelector("#sbtn");
const alert=document.querySelector(".alert");

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
console.log(data);
}



const getUser= async (user)=>{
let githubResponse = await fetch(`https://api.github.com/users/${user}`);
let githubUser = await githubResponse.json();
return githubUser;
}
