import { vistaPanel } from "./vistaPanel"
import { vistaRegistre } from "./vistaRegistre"

export const vistaLogin = {
    template: //html
    `
    <div class="container">
                <h1 class="mt-5 text-center">Inicia sesión</h1>
                <div class="m-5 mx-auto" style="max-width: 400px">
                    <form action="" class="form border shadow-sm p-3">
                        <label for="email" class="form-label">Email:</label>
                        <input type="text" class="form-control" />
                        <label for="pass" class="form-label mt-3">Contraseña:</label>
                        <input id="pass" type="password" class="form-control" />
                        <div class="form-check mt-3">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                                checked
                            />
                            <label class="form-check-label" for="flexCheckChecked">
                                Recordar sesión
                            </label>
                        </div>
                        <a class="d-block text-end" href="">¿Has olvidado tu contraseña?</a>
                        <button id="enviarPanel" class="btn btn-primary w-100 mt-3">Iniciar sesión</button>
                    </form>
                    <a id="irRegistro" class="d-block mt-5 btn btn-secondary mx-auto" href=""
                        >¿Eres nuevo? Regístrate</a 
                    >
                </div>
            </div>
    `,
    script:()=>{
        document.querySelector('#enviarPanel').addEventListener('click',(event) =>{
            event.preventDefault()
            event.stopPropagation()
           
            
            document.querySelector('main').innerHTML=vistaPanel.template
            vistaPanel.script()
        
        })
        document.querySelector('#irRegistro').addEventListener('click',(event) =>{
          event.preventDefault()
          event.stopPropagation()
            
            document.querySelector('main').innerHTML=vistaRegistre.template
        
        })
    }
}