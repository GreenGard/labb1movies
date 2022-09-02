fetch ('./json/ratings.json')
    .then(response => response.json())
    .then(data => {
        for (var i = 0; i<data.topfive.length; i++){
            let vtitel = data.topfive[i].titel;
            let vscore = data.topfive[i].score;
            document.querySelector("#tb1").innerHTML += `
                                <tr>
                                    <td>${vtitel}</td>
                                    <td>${vscore}</td>
                                    
                                </tr>`;
        }
    })
