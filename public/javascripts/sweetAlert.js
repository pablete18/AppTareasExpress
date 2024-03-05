const Swal = require('sweetalert2')


const exampleButtons = document.getElementById("my-btn");



   exampleButtons.addEventListener("click", (e) => {
      console.log('hicieste click')
         Swal.fire({
            icon: "success",
            title: "Editado con exito!",
            showConfirmButton: false,
            timer: 1500,
         });
    });
 