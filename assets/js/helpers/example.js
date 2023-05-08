// Conectar a la API REST para obtener los datos del producto
fetch('https://tu-api-rest.com/productos/1')
  .then((response) => response.json())
  .then((producto) => {
    // Restar la cantidad de productos comprados del stock del producto
    const cantidadComprada = 1 // Ejemplo de cantidad comprada
    const stockRestante = producto.stock - cantidadComprada

    // Actualizar la cantidad disponible en el stock del producto en la base de datos con la nueva cantidad restante
    fetch('https://tu-api-rest.com/productos/1', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ stock: stockRestante }),
    }).then(() => {
      // Mostrar un mensaje de éxito al usuario indicando que su compra ha sido realizada correctamente
      console.log('Compra realizada correctamente')
    })
  })
