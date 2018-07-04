const app = "I don't do much.";


fetch('https://api.github.com/perchitti/repos').
  then(res => res.json()).
  then(json => console.log(json))
