const main = document.getElementById('main'); // pega o main na home para usarmos para exibir listas

const options = { // cabeçalho (header) com opções para fetch
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
		'X-RapidAPI-Key': 'b9bf594e8emshb22a76bd2c9f8fep137c85jsna47fe0a2e3d6'
	}
};

fetch('https://hotels4.p.rapidapi.com/locations/v2/search?query=lisbon&locale=es_US&currency=USD', options)
	.then(response => response.json())
    .then(data => { // pega o json e transforma em array
        console.log(data); // exibe o json
        const hotels = data.suggestions[1].entities // pega o array de hotel dentro de suggestions

        const hotelId1 = hotels[0].destinationId;
        const hotelId2 = hotels[1].destinationId;
        const hotelId3 = hotels[2].destinationId;

        function infoHotel(e, idNome, idCaption){
        let nomeHotel = hotels[e].name;
        let captionHotel = hotels[e].caption;
        document.getElementById(idNome).innerHTML = nomeHotel;
        document.getElementById(idCaption).innerHTML = "<b>Endereço: </b>" + captionHotel;
        }

        for(let i = 0; i < 3; i++){
            infoHotel(i, `hotel${i}`, `Caption${i}`);
        }
        

        fetch(`https://hotels4.p.rapidapi.com/properties/get-details?id=${hotelId1}&checkIn=2020-01-08&checkOut=2020-01-15&adults1=1&currency=BRL&locale=en_US`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
    
            const precoHotels = data.data.body.propertyDescription.featuredPrice.currentPrice.formatted
            document.getElementById("preco1").innerHTML = "Quartos à partir de " + precoHotels + ",00";
        
            
        
        })
        .catch(err => console.error(err));


        fetch(`https://hotels4.p.rapidapi.com/properties/get-details?id=${hotelId2}&checkIn=2020-01-08&checkOut=2020-01-15&adults1=1&currency=BRL&locale=en_US`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
    
            const precoHotels = data.data.body.propertyDescription.featuredPrice.currentPrice.formatted
            document.getElementById("preco2").innerHTML = "Quartos à partir de " + precoHotels + ",00";
            
        
        })
        .catch(err => console.error(err));


        fetch(`https://hotels4.p.rapidapi.com/properties/get-details?id=${hotelId3}&checkIn=2020-01-08&checkOut=2020-01-15&adults1=1&currency=BRL&locale=en_US`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
    
            const precoHotels = data.data.body.propertyDescription.featuredPrice.currentPrice.formatted
            document.getElementById("preco3").innerHTML = "Quartos à partir de " + precoHotels + ",00";
        
            
        
        })
        .catch(err => console.error(err));

    })
	.catch(err => console.error(err)); // caso ocorra um erro, exibe o erro

    
   