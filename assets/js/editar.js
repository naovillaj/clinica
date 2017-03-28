var regresar = document.getElementById("editar-datos");
if(regresar){
	regresar.addEventListener('click', function(e){
		e.preventDefault();

		window.location = "index.html";
});
}

/*		var name = document.getElementById("nombre").value; 
		console.log(name);
		var lastName = document.getElementById("apellido").value; 
		var age = document.getElementById("edad").value;
		var genre = document.getElementById("genero").value;
		var city = document.getElementById("ciudad").value; 	
		var country = document.getElementById("pais").value;

		var objetoPaciente = JSON.parse(localStorage.getItem("nuevoPaciente"));
		console.log(objetoPaciente);


		name.innerHTML = objetoPaciente.nombre;
		lastName.innerHTML = objetoPaciente.apellido;
		age.innerHTML = objetoPaciente.edad;
		genre.innerHTML = objetoPaciente.genero;
		city.innerHTML = objetoPaciente.ciudad;
		country.innerHTML = objetoPaciente.pais;*/