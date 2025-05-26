document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const fechaNacimiento = document.getElementById('date').value;
    const errorMsg = document.getElementById('errorMsg');

    // Validaciones básicas
    if (!nombre || !apellido || !correo || !telefono || !direccion || !fechaNacimiento) {
      errorMsg.textContent = 'Todos los campos son obligatorios.';
      return;
    }

    if (/\d/.test(nombre)) {
      errorMsg.textContent = 'El nombre no debe contener números.';
      return;
    }

    if (/\d/.test(apellido)) {
      errorMsg.textContent = 'El apellido no debe contener números.';
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(correo)) {
      errorMsg.textContent = 'Por favor, introduce un correo válido.';
      return;
    }

    if (!/^\d{7,15}$/.test(telefono)) {
      errorMsg.textContent = 'El teléfono debe contener solo números (7-15 dígitos).';
      return;
    }

    const fechaIngresada = new Date(fechaNacimiento);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0); // Para comparar solo la fecha

    if (fechaIngresada > hoy) {
      errorMsg.textContent = 'La fecha de nacimiento no puede ser en el futuro.';
      return;
    }

    errorMsg.textContent = '';
    alert('Datos del cliente guardados correctamente.');
    
    this.reset();
  });