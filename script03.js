  const params = new URLSearchParams(window.location.search);
        const pokemonName = params.get('pokemon');

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const container = document.getElementById('pokemon-details');
                const backLink = document.getElementById('back-link');
                container.innerHTML = `
                    <h2>${data.name}</h2>
                    <img src="${data.sprites.front_default}" alt="${data.name}" />
                    <img src="${data.sprites.back_shiny}" alt="${data.name}" />
                    <img src="${data.sprites.front_shiny}" alt="${data.name}" />
                    

                    <p><strong>id:</strong>${data.id}<p/>
                    <p><strong>order:</strong> ${data.order}<p/>
                    <p><strong>Height:</strong> ${data.height}</p>
                    <p><strong>Weight:</strong> ${data.weight}</p>
                    <p><strong>base_experience:</strong> ${data.base_experience}</p>
                    

                    

                    
                    
                `;
                backLink.href = `page2.html?type=${data.types[0].type.name}`;
            });