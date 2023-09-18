$(document).ready(function () {
    $("#form-signup").on('submit', e => {
      e.preventDefault();
    }).validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            },
            password2: {
                required: true,
                minlength: 8,
                equalTo: "#password"
            },
            user: {
                required: true
            }
        },
        messages: {
            name: {
                required: "El nombre es requerido",
                minlength: "El nombre debe tener al menos 3 caracteres"
            },
            email: {
                required: "El email es requerido",
                email: "Debe ingresar un email válido"
            },
            password: {
                required: "La contraseña es requerida",
                minlength: "La contraseña debe tener al menos 8 caracteres"
            },
            password2: {
                required: "La contraseña es requerida",
                minlength: "La contraseña debe tener al menos 8 caracteres",
                equalTo: "Las contraseñas deben coincidir"
            },
            user: {
                required: "El usuario es requerido"
            }
        },
        errorPlacement: function (error, element) {
            error.addClass("error-text");
            error.insertAfter(element);
        },
        submitHandler: (form) => {
            const data = Object.fromEntries(new FormData(form));
            console.log('Validado');
            console.log(data);
            form.reset();
            Swal.fire({
                icon: 'success',
                title: 'Registro Exitoso',
                text: 'Hemos creado tu cuenta correctamente.',
            });
        }
    });
  });