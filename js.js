
function Crear_Tabla() {
    var compra = document.getElementById("Compra").value;
    var nombre = document.getElementById("Nombre").value;
    var precio = document.getElementById("Precio").value;
    var tabla = document.getElementById("Tabla");
    var rows = tabla.rows;
    if (compra && nombre && precio != "") {
        if (rows.length - 1 < compra) {
            for (var i = rows.length; compra >= rows.length; i++) {
                var fila = tabla.insertRow(i);
                var columna = fila.insertCell(0);
                var columna1 = fila.insertCell(0);
                var columna2 = fila.insertCell(0);

                columna.innerHTML = 0;
                columna1.innerHTML = 0;
                columna2.innerHTML = i;

            }
        } else {
            document.getElementById("Tabla").deleteRow(compra);
            var fila = tabla.insertRow(compra);
            var columna = fila.insertCell(0);
            var columna1 = fila.insertCell(0);
            var columna2 = fila.insertCell(0);


        }
        columna.innerHTML = precio;
        columna1.innerHTML = nombre;
        columna2.innerHTML = compra;

    }
}