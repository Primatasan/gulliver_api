const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
const apiUrl = '../model/api.json'
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

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
   