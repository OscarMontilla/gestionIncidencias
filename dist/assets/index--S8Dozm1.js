(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function d(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=d(e);fetch(e.href,o)}})();const u=[{codigo:"497654",fecha:"29/08/2023",fechaResuelto:"04/05/2023",aula:"C1",grupo:"DAW2",ordenador:"PC1",descripcion:"No enciende el ordenador",alumno:"Oscar Montilla",estado:"resuelto"},{codigo:"487554",fecha:"22/04/2023",aula:"A1",grupo:"DAW1",ordenador:"PC2",descripcion:"Problemas con el hardware",alumno:"Cristina Sanchez",estado:"pendiente"},{codigo:"452156",fecha:"28/09/2022",aula:"A2",grupo:"DAW2",ordenador:"PC4",descripcion:"Problemas con el software",alumno:"Miguel Ruiz",estado:"pendiente"},{codigo:"453456",fecha:"28/04/2023",fechaResuelto:"10/12/2021",aula:"B2",grupo:"DAW1",ordenador:"PC5",descripcion:"No hay conexión a Internet",alumno:"Carlos Lopez",estado:"resuelto"}],r={template:`
   <h1>Administración de incidencias</h1>
   <h2 class="mt-5">Tickets pendientes</h2>
   <table class="table mt-4">
     <thead>
       <tr>
         <th>Código</th>
         <th>Fecha</th>
         <th>Aula</th>
         <th>Grupo</th>
         <th>Ordenador</th>
         <th>Descripción</th>
         <th>Alumno</th>
         <th></th>
         <th></th>
       </tr>
     </thead>
     <tbody id="tablaPendiente">
     
     </tbody>
   </table>
   <h2 class="mt-5">Tickets resueltos</h2>
   <table class="table mt-4">
     <thead>
       <tr>
         <th>Código</th>
         <th>Fecha</th>
         <th>Fecha resuelto</th>
         <th>Aula</th>
         <th>Grupo</th>
         <th>Ordenador</th>
         <th>Descripción</th>
         <th>Alumno</th>
       </tr>
     </thead>
     <tbody id="tablaResuelto">
     
     </tbody>
   </table>
 `,script:()=>{u.forEach(t=>{t.estado=="pendiente"?document.querySelector("#tablaPendiente").innerHTML+=`
          <tr>
            <td>${t.codigo}</td>
            <td>${t.fecha}</td>
            <td>${t.aula}</td>
            <td>${t.grupo}</td>
            <td>${t.ordenador}</td>
            <td>${t.descripcion}</td>
            <td>${t.alumno}</td>
            <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
            <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></button></td>
            <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i></button></td>
            <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i></button></td>
          </tr>
        `:document.querySelector("#tablaResuelto").innerHTML+=`
          <tr>
            <td>${t.codigo}</td>
            <td>${t.fecha}</td>
            <td>${t.fechaResuelto}</td>
            <td>${t.aula}</td>
            <td>${t.grupo}</td>
            <td>${t.ordenador}</td>
            <td>${t.descripcion}</td>
            <td>${t.alumno}</td>
            <td><button class="btn btn-success" title="Resolver ticket">Resolver</button></td>
            <td><button class="btn btn-warning" title="Añadir comentario"><i class="bi bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></button></td>
            <td><button class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i></button></td>
            <td><button class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i></button></td>
          </tr>
        `})}},a={template:`
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
    `,script:()=>{document.querySelector("#enviarRegistro").addEventListener("click",t=>{t.preventDefault(),t.stopPropagation(),document.querySelector("main").innerHTML=n.template})}},n={template:`
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
    `,script:()=>{document.querySelector("#enviarPanel").addEventListener("click",t=>{t.preventDefault(),t.stopPropagation(),document.querySelector("main").innerHTML=r.template,r.script()}),document.querySelector("#irRegistro").addEventListener("click",t=>{t.preventDefault(),t.stopPropagation(),document.querySelector("main").innerHTML=a.template})}},c={template:`
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Panel</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cosmo/bootstrap.min.css">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
      </head>
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
            <div>
              <button id="panel" class="btn btn-secondary ms-2">PANEL</button>
              <button id="login" class="btn btn-secondary ms-2">LOGIN</button>
              <button id="registro" class="btn btn-secondary ms-2">REGISTRO</button>
            </div>
            <div>
              <span>administrador@fpllefia.com</span>
              
            </div>
          </div>
        </nav>
    `,script:()=>{document.querySelector("#panel").addEventListener("click",()=>{document.querySelector("main").innerHTML=r.template,r.script()}),document.querySelector("#login").addEventListener("click",()=>{document.querySelector("main").innerHTML=n.template}),document.querySelector("#registro").addEventListener("click",()=>{document.querySelector("main").innerHTML=a.template})}};document.querySelector("header").innerHTML=c.template;c.script();document.querySelector("main").innerHTML=a.template;a.script();document.querySelector("main").innerHTML=n.template;n.script();
