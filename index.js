const url='https://rickandmortyapi.com/api/character/'
fetch(url)
.then(response=>response.json())
.then(dato=>{
    console.log(dato)
    let elementos= document.getElementById('elemento')
    elementos.innerHTML=  dato.results.map(
        dato=>`
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row">
                <div class="col-md-4">
                <img src="${dato.image}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title text-bold">${dato.name}</h5>
                    <p class="card-text">${dato.status} - ${dato.species}</p>
                    <p class="card-text">Ultima ubicacion: ${dato.origin.name}</p>
                    <p class="card-text"><small class="text-muted">${dato.location.name}</small></p>
                </div>
                </div>
            </div>
            </div>
        `
    )
})
.catch(error => console.log(error))