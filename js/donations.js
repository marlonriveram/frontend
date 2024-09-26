let listElements = document.querySelectorAll('.list__button--click');
const form = document.getElementById('form_post');

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {

        listElement.classList.toggle('arrow')

        let height = 0;
        let menu = listElement.nextElementSibling;

        console.log(menu.scrollHeight);

        if(menu.clientHeight == "0") {
            height = menu.scrollHeight;
        }

        menu.style.height =  height + "px";
    });
});



form.addEventListener('submit',async (event) =>{
    try {
   
        //obtieni los datos de un formulario y crea una lista clave/valor
        const dataList= new FormData(event.target);
    
        // convierte una lista clave/valor a un objeto
        const dataForm = Object.fromEntries(dataList);
        console.log(dataForm)

        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json' // Indica que envías datos en formato JSON
            },
            body: JSON.stringify(dataForm) // Convierte el objeto en una cadena JSON
          };
          
        const res = await fetch('http://localhost:3000/donaciones',options);
        const usuarioCreado = await res.json();

     
        console.log(usuarioCreado);
       
    } catch (error) {
        console.log(error)
    }
});



// Mostrar los usuarios en pantalla
// window.addEventListener('load', async ()=>{
//     const res = await fetch('http://localhost:3000/donaciones');
//      const data = await res.json();
//      console.log(data);
//      CrearCards(data);
// });








