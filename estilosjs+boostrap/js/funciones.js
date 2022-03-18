function creaCampos() {
	
	var objeto_campo= document.getElementById('contenedor_campo'); 
		objeto_campo.innerHTML="";
	var padre = document.createElement("input");
	padre.type="text";
	padre.placeholder="escriba su nombre";
	padre.onblur= escucha;
	padre.id="valor";
	objeto_campo.appendChild(padre);
}
	function escucha(){
		var longi=document.getElementById('valor').value;
		var objeto_alert = document.getElementById('contenedor_aviso');
			var alerta= document.createElement("div");
		if(longi.length<4){
			objeto_alert.innerHTML="";
			alerta.className="alert alert-danger";
			alerta.innerHTML="<strong>Incorrecto!</strong> El nombre no cumple con los requisitos."
			objeto_alert.appendChild(alerta);
		}
		else{
			objeto_alert.innerHTML="";
			alerta.className="alert alert-success";
			alerta.innerHTML="<strong>Correcto!</strong> El nombre cumple con los requisitos."
			
			objeto_alert.appendChild(alerta);
	}
	}

	


