document.getElementById("formEvento").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Obtener los datos del formulario
    const tipo = this.tipo.value;
    const fecha = this.fecha.value;
    const asistentes = this.asistentes.value;
    const notas = this.notas.value.trim();
  
    // Obtener los servicios seleccionados
    const serviciosSeleccionados = [];
    const servicios = this.querySelectorAll("input[name='servicios']:checked");
    servicios.forEach((servicio) => {
      serviciosSeleccionados.push(servicio.value);
    });
  
    // Crear el contenido del resumen
    const resumenHTML = `
      <p><strong>Tipo de evento:</strong> ${tipo}</p>
      <p><strong>Fecha:</strong> ${fecha}</p>
      <p><strong>Asistentes:</strong> ${asistentes}</p>
      <p><strong>Servicios seleccionados:</strong> ${serviciosSeleccionados.join(", ") || "Ninguno"}</p>
      <p><strong>Notas:</strong> ${notas || "Sin notas adicionales"}</p>
    `;
  
    // Mostrar resumen en pantalla
    document.getElementById("resumenContenido").innerHTML = resumenHTML;
    document.querySelector("#resumen").style.display = "block";
  
    // Ocultar el formulario
    this.style.display = "none";
  });
  