import { vistaLogin } from "./vistaLogin"

export const vistaRegistre = {
    template: //html
    `
    <div class="container">
    <h1 class="mt-5 text-center">Registro</h1>
    <div class="m-5 mx-auto" style="max-width: 400px">
        <form action="" class="form border shadow-sm p-3">
            <label for="nombre" class="form-label">Nombre:</label>
            <input id="nombre" type="text" class="form-control" />
            <label for="apellidos" class="form-label">Apellidos:</label>
            <input id="apellidos" type="text" class="form-control" />
            <label for="email" class="form-label">Email:</label>
            <input id="email" type="text" class="form-control" />
            <label for="pass" class="form-label mt-3">Contraseña:</label>
            <input id="pass" type="password" class="form-control" />
            <button id="enviarRegistro"   class="btn btn-primary w-100 mt-3">Enviar</button>
        </form>
    </div>
</div>
    `,
    script:()=>{
        document.querySelector('#enviarRegistro').addEventListener('click',(event) =>{
            event.preventDefault()
            event.stopPropagation()
           
           
            
            document.querySelector('main').innerHTML =vistaLogin.template
        
        })
    }
}
