/* CONTRASEÑA Y USUARIO */
const validCredentials = {
    username: '@contenido',
    password: 'ghingenieria',
  };
  
  /* ESTRUCTURAS DE DATOS */
  const $username = document.getElementById('inUsername'); //USUARIO
  const $password = document.getElementById('inPassword'); //CONTRASEÑA
  const $submit = document.getElementById('submitBtn'); //BOTON ENVIAR
  const $private = document.getElementById('private');  //CONTENIDO EXCLUSIVO
  const $modal = document.getElementById('staticBackdrop');
  const $success = document.getElementById('success'); //MENSAJE
  const $error = document.getElementById('error');    //MENSAJE DE ERROR
  const $close = document.getElementById('closeBtn'); // BOTON DE CERRAR
  
  const myCredentials = {
    username: null,
    password: null,
  };
  
  /* FUNCIONES */
  const handleUsername = (event) => {
        myCredentials.username = event.target.value;
     };
  
  const handlePassword = (event) => {
       myCredentials.password = event.target.value;
      };
  
  const handleSubmit = () => {
    // validar credenciales
    const username = myCredentials.username === validCredentials.username;
    const password = myCredentials.password === validCredentials.password;
    
    if (username && password) {
      $private.classList.remove('disabled');
      
      // mostrar mensaje de éxito
      $success.classList.remove('d-none');
      // luego, ocultar mensaje de éxito
      setTimeout(() => {
        $success.classList.add('d-none');
        $close.click();
      }, 3000);
    } else {
      // mostrar error
      $error.classList.remove('d-none');
      // luego, ocultar mensaje de error
      setTimeout(() => {
        $error.classList.add('d-none');
      }, 3000);
    }
  };
  
  /* EVENTOS */
  document.addEventListener('DOMContentLoaded', () => {
    $username.addEventListener('input', handleUsername);
    $password.addEventListener('input', handlePassword);
    $submit.addEventListener('click', handleSubmit);
  });