const params = new URLSearchParams(window.location.search);
const typeName = params.get('type');
console.log(typeName);


        fetch(`https://pokeapi.co/api/v2/type/${typeName}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const container = document.getElementById('pokemon-list');
                data.pokemon.forEach(entry => {
                    // console.log(entry);
                    
                    const div = document.createElement('div');
                    div.classList.add('item');
                    div.innerHTML = `<a href="page3.html?pokemon=${entry.pokemon.name}">${entry.pokemon.name}</a>`;
                    container.appendChild(div);
                });
            });