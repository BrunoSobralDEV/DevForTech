const ul = document.querySelector('ul');

function getGithubProfile () {
    fetch('https://api.github.com/users/brunosobraldev/repos')
        .then(async res => {

            if(!res.ok) {
                throw new Error(res.status)
            }

            var data = await res.json();
            data.map(item => {
                let li = document.createElement('li');
                
                li.innerHTML = `
                    <a href="${item.url}">
                        <strong>${item.name}</strong>
                    </a>
                    <span>Data Criação:
                        ${Intl.DateTimeFormat('pt-BR')
                            .format(new Date(item.created_at))}
                    </span>
                `
                ul.appendChild(li);
            })
        }).catch(e => console.log(e))
}

getGithubProfile();