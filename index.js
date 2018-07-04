const app = "I don't do much.";

fetch('https://api.github.com/repos/jquery/jquery/commits')
  .then(res => res.json())
  .then(json => console.log(json));
  
  const token = 'd19cfb6d5234a862374020e3431c8d540962fd10'
  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));
