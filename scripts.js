const SHEET_ID = "1uT69sPKos3TbKoDP10UceazlJYwRrOKmn5KNPhanRco";

const ACCESS_TOKEN =
  "ya29.a0Aa4xrXN6b0Tn7BHeZ3X_qwj6G4SUW05S7abWfBtooTnLd3HMhRsQRawAHAyNGeFgXYZO4JIiy6gjY-XmPF6ncuZV9YmaYKSW77aGUHcRYM0fgD0iwXp8kLp-MtHWQaCQMri7co8nolXanZ6GaFtYmncSSE3kaCgYKATASARISFQEjDvL9wCUTjvccQl_UrGS5p5mscw0163";

fetch(
  // Obtenemos los datos de la planilla, de la hoja hojaMenu, columnas A y B desde la segunda fila
  `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/almuerzo!A2:C`,
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  }
//esperamos el response
)

.then(function (response) {
    //esperamos el json del response para poder utilizarlo
    response.json().then(function (data) {
    const values = data.values;

    // Obtenemos el elemento del dom
    const lista = document.getElementById("lista-menu");

    for (var i = 0; i < values.length; i++) {

        // Div que va a contener los datos del producto
        const producto = document.createElement("div");
        producto.className =  "menu-item";

        // Nombre del producto
        const itemProducto = document.createElement("span");
        itemProducto.className = "item producto";
        itemProducto.innerHTML = values[i][0]; 

        // Descripcion
        const itemDescripcion = document.createElement("span");
        itemDescripcion.className = "item descripcion";
        itemDescripcion.innerHTML = values[i][1]; 

        // Precio
        const itemPrecio = document.createElement("span");
        itemPrecio.className = "item precio";
        itemPrecio.innerHTML = values[i][2];
      
        // Agregamos todos los elementos al div de producto
        producto.appendChild(itemProducto);
        producto.appendChild(itemDescripcion);
        producto.appendChild(itemPrecio);

        // Agregamos el producto a la lista
        lista.appendChild(producto);
    }
    });
});