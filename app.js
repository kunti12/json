//lo que hago es obtener unos datos con un crud con método post. El archivo guardar.php tiene lo siguiente:


<?php
echo json_encode($_POST);
////////////////////////////////////////////////////////////////////////

tengo un archivo llamado app.js que tiene lo siguiente:




function insertarBD(datos) { 

     var xhr = new XMLHttpRequest();


     xhr.open("POST", "../datos/guardar.php", true);


     xhr.onreadystatechange = function() {
          if(this.status === 200 ) {
            console.log(xhr.responseText);     //este me imprime el siguiente string json:   {"nombre":"Rosa","numero":"1154","accion":"crear"}          
            var obj = JSON.parse(xhr.responseText);  //esta es la linea que causa error


         }   
};
