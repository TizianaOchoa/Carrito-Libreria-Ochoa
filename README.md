# 📚 Librería Ochoa – Carrito de Compras

Proyecto desarrollado para la materia **Programación 1**, consistente en la creación de un carrito de compras funcional utilizando **HTML, CSS, Bootstrap y JavaScript**.

La tienda está basada en una librería ficticia llamada **Librería Ochoa**, donde el usuario puede visualizar diferentes libros, agregarlos al carrito, modificar cantidades, eliminarlos y ver el total actualizado en tiempo real.

---

## 🚀 Características del Proyecto

### 🛒 Funcionalidades del carrito
- Agregar libros al carrito.
- Eliminar libros individualmente.
- Modificar la cantidad desde un input numérico.
- Vaciar el carrito completo.
- Calcular el total a pagar en tiempo real.
- Guardar el carrito en **localStorage** para persistencia.
- Renderizado dinámico del DOM.
- Diseño responsivo usando Bootstrap 5.

### 📘 Catálogo de libros (8 en total)
Cada libro contiene:
- Nombre
- Precio
- Imagen
- Botón para agregar al carrito

---

## 🎨 Estilo y diseño
- Fondo celeste en toda la página.
- Línea morada fina debajo del título principal.
- Tarjetas de productos con imagen, precio y botón.
- Interfaz simple, limpia y moderna gracias a Bootstrap.

---

## 🧠 Tecnologías utilizadas

| Tecnología | Uso |
|-----------|-----|
| **HTML5** | Estructura de la página |
| **CSS3** | Estilos y colores personalizados |
| **Bootstrap 5** | Estilos visuales y componentes rápidos |
| **JavaScript** | Lógica del carrito y manejo del DOM |
| **LocalStorage** | Guardado de datos persistente |
| **VS Code + Live Server** | Entorno de desarrollo |

---

## 📁 Estructura del proyecto

```

carrito-libreria-ochoa/
│── Carrito.html
│── Estilo.css
│── App.js
│── Img/
│ ├── Carrito libreria 1.jpg
│ ├── Carrito libreria 2.jpg
│ ├── El principito.jpg
│ ├── Cien años de soledad.jpg
│ ├── Harry Potter y la Piedra Filosofal.jpg
│ ├── 1984 - Geotge Orwell.jpg
│ ├── El Hobbit.jpg
│ ├── Sherlock Holmes - Estudio en Escarlata.jpg
│ ├── Don quijote.jpg
│ └── La metamorfosis.jpg

```

---

## ▶️ Cómo ejecutar el proyecto

1. Abrir la carpeta en **Visual Studio Code**.
2. Guardar los archivos correspondienes.
3. Clic derecho sobre **Carrito.html** → _Open with Google Chrome_.
4. El proyecto cargará en el navegador automáticamente.

---

## 📜 Resumen técnico del funcionamiento

- `productos[]`: contiene todos los libros (nombre, precio, imagen).
- `carrito[]`: libros seleccionados por el usuario.
- Métodos utilizados:
  - `.find()`
  - `.filter()`
  - `.forEach()`
  - `.reduce()`
- Eventos:
  - `onclick`
  - `onchange`
  - `window.onload`
- Datos guardados con:
  - `localStorage.setItem()`
  - `localStorage.getItem()`

---

## 🖼️ Capturas del proyecto
<img width="1366" height="768" alt="Carrito libreria 1" src="https://github.com/user-attachments/assets/d146f212-3e83-40e8-8974-e9e4132dca48" />
<img width="1366" height="332" alt="Carrito libreria 2" src="https://github.com/user-attachments/assets/66c5928b-7461-47c7-a9f5-fe15a11a377f" />

---

## 👤 Autor
Proyecto creado por **Tiziana Ochoa** para la materia **Programación 1** Profesor: **David Gnagnarella**.

---

## 🏁 Estado del proyecto
✔️ Completado  
