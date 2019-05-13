crearAlerta = function (mensaje, clase, time) {
  
  if ($('body').find('div#toast-container').length == 0) {
     
    var $body = $('body');
        var $contenedor = $('<div>', {'id':'toast-container', 'class': 'toast-top-right'});
        var $contenedorHijo = $('<div>', {'class': 'toast toast-'+clase+''
                                          ,'aria-live':'assertive'
                                          ,'style':'display: block;'});
    var html = '<button type="button" class="toast-close-button" '+
                           'role="button">×</button><div class="toast-message">'+mensaje+'</div>';
    
$contenedorHijo.append(html);      
    
        $contenedor.append($contenedorHijo);
   

        $contenedor.on('click', '.toast-close-button', function (e) {
          
            e.preventDefault();
            var parent = $(this).parent('.toast');
            parent.fadeOut("slow", function () { $(this).remove(); });
        });
    
    
    
        $body.append($contenedor);

setTimeout(function () {
      debugger;
            $contenedorHijo.remove();
        }, 3000);

  }
  else {
    
    var $contenedor = $('div#toast-container');
    
    $contenedor.append('<div class="toast toast-'+clase+'" aria-live="assertive" style="display: block;"><button type="button" class="toast-close-button" '+
                           'role="button">×</button><div class="toast-message">'+mensaje+'</div></div>');       

        $contenedor.on('click', '.toast-close-button', function (e) {
          debugger;
            e.preventDefault();
            var parent = $(this).parent('.toast');
            parent.fadeOut("slow", function () { $(this).remove(); });
        });
    
    
  }
        

    }

$('#mostar').click(function(){
alert('test');
});
  
