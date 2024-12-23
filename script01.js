fetch('https://pokeapi.co/api/v2/type?limit=21')
.then(response => response.json())
.then(data => {
    console.log(data);
    const container = document.getElementById('types-list');
    data.results.forEach(type => {
        console.log(data.results);
        
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `<a href="page2.html?type=${type.name}">${type.name}</a>`;
        container.appendChild(div);
    });
});






