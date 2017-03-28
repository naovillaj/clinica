      /* En la Clínica Lab necesitan crear un informe con los datos de los pacientes registrados. Para esto debe escribir una función que reciba como los inputs de nombre, apellido, edad, genero, ciudad y país.
      Cree un objeto basado en constructor asignando los parámetros entregados como propiedades y agregue un método del objeto llamado ficha que retorne la ficha del paciente con su nombre, apellido, edad y país.
       
      Ejemplo:
      Input:
          nombre = "Blanca"
          apellido = "Pérez"
          edad = 19
          genero = "Femenino"
          ciudad = "Santiago"
          pais = "Chile"
      Output(en el HTML):
          "Nombre: Blanca Pérez"
          "Edad: 19"
          "País: Chile"
      -TIP: elabora un formulario para obtener todos los datos de los pacientes, después, por cada paciente crea un nuevo objeto que esté almecenado en un array
      -TIP 2: por cada paciente nuevo que se ingrese crea un div sonde estén contenidos sus datos :) */
      var personas = [];
      var imprimir = document.getElementById("imprimir");

      function Persona (nombre, apellido, edad, genero, ciudad, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.genero = genero;
        this.ciudad = ciudad;
        this.pais = pais;
        this.saludo = function(){
        return ("<div class='resultado'><b><p> Nombre: </b> " + this.nombre + " " + this.apellido + "</p><p><b>  Edad: </b> " 
        + this.edad + " años  </p><b><p> País: </b> " + this.pais  + "<br></p></div>");
        }
      }

      window.addEventListener('load',function() {
        var boton = document.getElementById("todos");
        
        boton.addEventListener('click',function(e) {
        	e.preventDefault();  

        var name = document.getElementById("nombre").value; 
        var lastName = document.getElementById("apellido").value; 
        var age = document.getElementById("edad").value;
        var genre = document.getElementById("genero").value;
        var city = document.getElementById("ciudad").value; 
        var country = document.getElementById("pais").value;

        if(name != "", lastName!="", age!="", genre!="", city!="", country!=""){

          localStorage.setItem("nuevoPaciente", JSON.stringify(new Persona(name, lastName, age, genre, city, country)));

          //var paciente = new Persona(name, lastName, age, genre, city, country)
          //personas.push(paciente); 
          //imprimir.innerHTML += paciente.saludo();
          //document.getElementById("datos").reset();
          window.location = "paciente.html"

        } else{
          var comentarioGeneral = document.getElementById("camposObligatorios");
          comentarioGeneral.innerText = "Todos los campos son obligatorios";
        }

        
        })
      })


      var nombre = document.getElementById("nombre");
      var apellido = document.getElementById("apellido");
      var edad = document.getElementById("edad");
      var genero = document.getElementById("genero");
      var ciudad = document.getElementById("ciudad");
      var pais = document.getElementById("pais");

      var soloLetras = function(e){
        var codigoTecla = e.keyCode;  
        if((codigoTecla>=97 && codigoTecla<=122) || codigoTecla == 241 || (codigoTecla>=65 && codigoTecla<=90) || codigoTecla == 209 
            || codigoTecla == 42 || codigoTecla == 250 || codigoTecla == 225 || codigoTecla == 233 || codigoTecla == 237 
            || codigoTecla == 243 || codigoTecla == 32){
          return true;
        }else{
          return false;
        }
      }

      var soloNumeros = function(e){
        var codigoNumero = e.keyCode;

        if(codigoNumero>=48 && codigoNumero<= 57 && this.value.length<2){
          return true;
        }else{
          return false;
        }
      }

      nombre.onkeypress = soloLetras;
      apellido.onkeypress = soloLetras;
      genero.onkeypress = soloLetras;
      ciudad.onkeypress = soloLetras;
      pais.onkeypress = soloLetras;
      edad.onkeypress = soloNumeros;

      var inputs = document.getElementsByClassName("input-registro");
      var br = document.createElement("br");

      var comentario = function(){
        if(this.value.trim().length==0){
          this.value="";
          this.nextElementSibling.nextElementSibling.innerText="*Este elemento es obligatorio" ;
        } else {
          this.nextElementSibling.nextElementSibling.innerText="" ;
        }

        if(this.getAttribute("type") == "text"){

          var arrDato = this.value.split(" ");
          console.log(arrDato);
          var datoConMayusculas = "";
          for(var i = 0; i<arrDato.length; i++){
            datoConMayusculas += arrDato[i].charAt(0).toUpperCase() + arrDato[i].substring(1).toLowerCase() + " ";
            console.log(datoConMayusculas);
          }
          this.value=datoConMayusculas;
          
        }

         
      }

      for(var i = 0; i< inputs.length; i++){
        inputs[i].onblur = comentario;
      }

      if(localStorage.getItem("nuevoPaciente")){
        var naame = document.getElementById("nombre"); 
        var lastName = document.getElementById("apellido"); 
        var age = document.getElementById("edad");
        var genre = document.getElementById("genero");
        var city = document.getElementById("ciudad");   
        var country = document.getElementById("pais");

        var objetoPaciente = JSON.parse(localStorage.getItem("nuevoPaciente"));
        console.log(objetoPaciente.nombre);
        console.log(naame);
        console.log(lastName);
        console.log(objetoPaciente);


        naame.value = objetoPaciente.nombre;
        lastName.value = objetoPaciente.apellido;
        age.value = objetoPaciente.edad;
        genre.value = objetoPaciente.genero;
        city.value = objetoPaciente.ciudad;
        country.value = objetoPaciente.pais;
      }

      var limpiar = document.getElementById("borrar-contenido");
      limpiar.addEventListener('click', function(e){
      //e.preventDefault();

      localStorage.removeItem("nuevoPaciente");
      document.getElementById("datos").reset();
      });