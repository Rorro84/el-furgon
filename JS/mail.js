$(document).ready(function()
{
    $('#btnSend').click(function()
    {
        var errores = '';

        // Validado Nombre ===============================
        if( $('#names').val() == '' )
        {
            errores += '<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B");
        } else {
            $('#names').css("border-bottom-color", "#d1d1d1");
        }

        // Validado Correo ===============================
        if( $('#email').val() == '' )
        {
            errores += '<p>Ingrese un correo</p>';
            $('#email').css("border-bottom-color", "#F14B4B");
        } else {
            $('#email').css("border-bottom-color", "#d1d1d1");
        }

        // Validado Mensaje ==============================
        if( $('#message').val() == '' )
        {
            errores += '<p>Escriba un mensaje</p>';
            $('#message').css("border-bottom-color", "#F14B4B");
        } else {
            $('#message').css("border-bottom-color", "#d1d1d1");
        }

        // ENVIANDO MENSAJE ==============================
        if( errores == '' == false)
        {
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>';

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ================================
        $('#btnClose').click(function()
        {
            $('.modal_wrap').remove();
        });
    });
});


/*$(document).ready(function()
{
  $('#btnSend').click(function()
  {
    var errores = '';
    // Validando Nombre ===========
    if($('#names').val() == '')
    {
      errores += '<p> Ingrese un nombre </p>';
      $('#names').css('border-bottom-color', '#F14B4B');
    } else {
      $('#names').css('border-bottom-color', '#D1D1D1');
    }
    
    // Validando Correo ===========
    if($('#email').val() == '')
    {
      errores += '<p> Introduce un email válido </p>';
      $('#email').css('border-bottom-color', '#F14B4B');
    } else {
      $('#email').css('border-bottom-color', '#D1D1D1');
    }
    
    // Validando Mensaje ==========
    if($('#message').val() == '')
    {
      errores += '<p> Escribe un mensaje </p>';
      $('#message').css('border-bottom-color', '#F14B4B');
    } else {
      $('#message').css('border-bottom-color', '#D1D1D1');
    }
    
    // Enviando mensaje ===========
    if(errores == '' == false)
    {
      var mensajeModal = '<div class="modal_wrap">' +
          '<div class="mensaje_modal">' +
            '<h3> Errores detectados </h3>' +
            errores +
            '<span id="btnClose"> Cerrar </span>' +
          '</div>' +
          '</div>';
      $('body').append(mensajeModal);
    }
      
    // Cerrando modal ===========
    $('#btnClose').click(function()
    {
      $('.modal_wrap').remove();
    });     
  });  
});*/