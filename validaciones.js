document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const errorMsg = document.getElementById('errorMsg');

    // Validaciones básicas
    if (!nombre || !apellido || !correo || !telefono) {
      errorMsg.textContent = 'Todos los campos son obligatorios.';
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

    errorMsg.textContent = '';
    alert('Datos del cliente guardados correctamente.');
    
    this.reset();
  });