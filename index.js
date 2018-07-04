const app = "I don't do much.";


  const token = 'f89f5a08939186a09a19957da0172763998957db'
  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));
