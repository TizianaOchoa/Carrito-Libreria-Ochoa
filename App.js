const productos = [
    { id: 1, nombre: "El Principito", precio: 49999, img: "Img/El principito.jpg" },
    { id: 2, nombre: "Cien Años de Soledad", precio: 52300, img: "Img/Cien años de soledad.jpg" },
    { id: 3, nombre: "Harry Potter y la Piedra Filosofal", precio: 12000, img: "Img/Harry Potter y la Piedra Filosofal.jpg" },
    { id: 4, nombre: "1984 - George Orwell", precio: 93900, img: "Img/1984 - George Orwell.jpg" },
    { id: 5, nombre: "El Hobbit", precio: 43250, img: "Img/El Hobbit.jpg" },
    { id: 6, nombre: "Sherlock Holmes - Estudio en Escarlata", precio: 10500, img: "Img/Sherlock Holmes - Estudio en Escarlata.jpg" },
    { id: 7, nombre: "Don Quijote de la Mancha", precio: 35125, img: "Img/Don quijote.jpg" },
    { id: 8, nombre: "La Metamorfosis", precio: 12100, img: "Img/La metamorfosis.jpg" }
];


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarProductos() {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";

    productos.forEach(producto => {
        const card = document.createElement("div");
        card.className = "card p-2 shadow-sm";
        card.style.width = "16rem";

        card.innerHTML = `
            <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text"><strong>$${producto.precio.toLocaleString()}</strong></p>
                <button class="btn btn-success w-100" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            </div>
        `;

        contenedor.appendChild(card);
    });
}


function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const item = carrito.find(p => p.id === id);

    if (item) {
        item.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    actualizarCarrito();
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
}

function modificarCantidad(id, nuevaCantidad) {
    const item = carrito.find(p => p.id === id);

    if (nuevaCantidad <= 0) {
        eliminarDelCarrito(id);
    } else {
        item.cantidad = nuevaCantidad;
    }

    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

function mostrarCarrito() {
    const contenedor = document.getElementById("carrito");
    contenedor.innerHTML = "";

    carrito.forEach(item => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        li.innerHTML = `
            ${item.nombre} - $${item.precio.toLocaleString()}
            <input type="number" min="1" value="${item.cantidad}"
                   class="form-control w-25"
                   onchange="modificarCantidad(${item.id}, this.value)">
            <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${item.id})">X</button>
        `;

        contenedor.appendChild(li);
    });
}

function mostrarTotal() {
    const total = carrito.reduce(
        (acc, item) => acc + item.precio * item.cantidad,
        0
    );

    document.getElementById("total").textContent =
        total.toLocaleString("es-AR", { style: "currency", currency: "ARS" });
}

function actualizarCarrito() {
    mostrarCarrito();
    mostrarTotal();
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

window.onload = () => {
    mostrarProductos();
    actualizarCarrito();
};
