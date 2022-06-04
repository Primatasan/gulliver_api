const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
const apiUrl = '../model/hotels-com.json'
const apiUrl2 = '../model/agendalx.json'

fetch(apiUrl)
	.then(response => response.json())
    .then(data => {
        const main = document.getElementById('main'); // pega o main na home para usarmos para exibir listas
        const list = data.suggestions[1].entities
        console.log(list)
        const listHTML = list.map(item => {
            return `
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-md-10 pt-3">
                            <h4>${item.name}</h4>
                            <p>${item.caption}</p>
                        </div>
                        <div class="col-md-2">
                            <a href="#" class="btn btn-primary">Ver</a>
                        </div>
                    </div>
                </li>
            `
        }).join('')
        main.innerHTML = listHTML
    })

    fetch(apiUrl2)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const atracoes = document.getElementById('atracoes')
        const removeIndexSix = data.filter((item, index) => index !== 6)
        const atracoesHTML = removeIndexSix.map(item => {
            return `
            <div class="card block mt-5" style="max-width: 18rem; height: 30rem">
                <img src="${item.featured_media_large}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.title.rendered}</h5>
                        <p class="card-text">${item.description}</p>
                        <a href="${item.link}" class="btn btn-primary">Ver</a>
                    </div>
                </div>
            `
        }
        ).join('')
        atracoes.innerHTML = atracoesHTML
    }
    )
   

