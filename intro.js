
//event listener click 
document.querySelector('#alert').addEventListener('click',ejecutarBoton);
const boton = document.querySelector('#boton');

boton.addEventListener('click',ejecutaPe);

function ejecutarBoton(e)
{
    e.preventDefault;

    alert('Hola mundo');
    e.target.className ='disabled btn btn-success';

}

function ejecutaPe(e)
{
    e.target.parentElement.remove();
    console.log(e.target.parentElement);
}

