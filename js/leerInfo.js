async function show () {
    const resDos = await fetch('http://localhost:3000/donaciones');
    const data = await resDos.json();
    
    CrearCards(data);
}

show();

// Funcion para Crear cards desde js

function CrearCards (donantes){
    const container_cards = document.getElementById('showData_info_donadores');

    // recorrer el array con los donantes
    donantes.map((donante) =>{
        const card = document.createElement('div');
        const row = document.createElement('div')
        const parrafoNombre= document.createElement('p');
        const parraTipoDonacion= document.createElement('p');
        const parraId= document.createElement('p');

        const nombre = document.createElement('span');
        const nombreDonante = document.createElement('span');

        const tipoDonacion = document.createElement('span');
        const nombreDonacion = document.createElement('span');

        const id = document.createElement('span');
        const numId = document.createElement('span');


        nombre.innerText = 'Nombre: ';
        nombreDonante.innerText = donante.nombreDonante;
        tipoDonacion.innerText = 'Tipo de Donacion: ';
        nombreDonacion.innerText = donante.tipoDonacion;
        id.innerText = 'ID: ';
        numId.innerText = donante.idDonante;

        parraTipoDonacion.append(nombre,nombreDonante);
        parraTipoDonacion.classList.add('col-4')

        parrafoNombre.append(tipoDonacion,nombreDonacion);
        parrafoNombre.classList.add('col-4')

        parraId.append(id,numId);
        parraId.classList.add('col-4')

        row.append(parraId,parraTipoDonacion,parrafoNombre);
        row.classList.add('row')

        card.append(row);
        card.classList.add('card');

        container_cards.append(card);

    })
}

