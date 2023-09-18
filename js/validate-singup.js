$(document).ready(function () {
    jQuery.validator.addMethod("validRut", function(value, element) {
        return validar(value); // Call your validar function
    }, "RUT inválido");
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
            },
            rut: { 
                required: true,
                validRut: true 
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
            },
            rut: {
                required: "El RUT es requerido"
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


function validar(rut){
    var suma = 0;
    var arrRut = rut.split("-");
    var rutSolo = arrRut[0];
    var verif = arrRut[1];
    var continuar = true;
    for (i = 2; continuar; i++) {
        suma += (rutSolo % 10) * i;
        rutSolo = parseInt((rutSolo / 10));
        i = (i == 7) ? 1 : i;
        continuar = (rutSolo == 0) ? false : true;
    }
    resto = suma % 11; dv = 11 - resto;
    if (dv == 10) {
        if (verif.toUpperCase() == 'K') return true;
    } else if (dv == 11 && verif == 0)
        return true;
    else if (dv == verif) return true;
    else return false;
    return false;

}