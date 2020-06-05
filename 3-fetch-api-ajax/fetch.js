function loadJson(url) {
  return fetch(url)
    .then(response => response.json());
}

function showAvatar(githubUser) {
  return new Promise(function(resolve, reject) {
    let img = document.createElement('img');
    let tittle = document.createElement('h1');
    img.src = githubUser.avatar_url;
    img.className = "promise-image";
    tittle.innerHTML = `Name:  ${githubUser.login}`;
    document.body.append(tittle);
    document.body.append(img);     
    
    setTimeout(() => {
      resolve(githubUser);
    }, 3000);
  });
}

loadJson('https://api.github.com/repos/push-dev/frontend-roadmap/commits')
.then(githubUser => githubUser[0].author)
.then(showAvatar)