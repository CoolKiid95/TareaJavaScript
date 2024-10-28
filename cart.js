const elementosCocina = [
    {
      id: 1,
      nombre: "Sartén Antiadherente",
      precio: 25.99,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5yZ_PxjZ7YCnXT4VCnslyU2j0Mxr0ZO-cMw&s",
      contador: 0
    },
    {
      id: 2,
      nombre: "Cuchillo Chef",
      precio: 18.50,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg7Tik7ZJfwwU8iOhfJsoRZ9j6qLvU5WSfcg&s",
      contador: 0
    },
    {
      id: 3,
      nombre: "Tabla de Cortar",
      precio: 12.75,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcn4jjm12FseOdd69lIZuAhM8430td1weBkg&s",
      contador: 0
    },
    {
      id: 4,
      nombre: "Olla de Acero inx",
      precio: 35.00,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6aK2b4HIOkOwMY85IjkwiC8imDt_AUggUow&s",
      contador: 0
    },
    {
      id: 5,
      nombre: "Batidora de Mano",
      precio: 29.99,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_P7EhOLvK0CjdHuSbBRJFA0blhRHNq-Ugw&s",
      contador: 0
    },
    {
      id: 6,
      nombre: "Tetera Eléctrica",
      precio: 22.50,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VlNNZOrbLiSB-iHJ3xQhcl5RI3XIJFgzkg&s",
      contador: 0
    }
  ];
  
let productos = document.getElementById("productos")

for (let index = 0; index < elementosCocina.length; index++) {
    const element = elementosCocina[index];

    productos.innerHTML += `                        
    <div class="card tarjeta col-3" style="width: 16rem;">
            <img src="${element.imagen}" class="card-img-top imagen" alt="${element.nombre}">
            <div class="card-body">
                <h5 class="card-title">${element.nombre}</h5>
                <p class="card-text"></p>
                <div class="d-flex justify-content-center py-0">
                    <p class="btn btn-primary py-0 mt-4">$ ${element.precio}</p>
                </div>
                <div class="d-flex justify-content-center ">
                    <i type="button" id="" class="flecha decrementar fa-solid fa-arrow-left me-2"></i>
                    <p class="fw-bold fs-3 cantidad mb-0">0</p>
                    <i type="button" id="" class="flechas incrementar fa-solid fa-arrow-right ms-2"></i>
                </div>
            </div>
        </div>` 

//contador

let mas = document.getElementsByClassName("incrementar")
let menos = document.getElementsByClassName("decrementar")
let cantidades = document.getElementsByClassName("cantidad")
let total = document.getElementById("total")
let subtotal = document.getElementById("subtotal")
let ahorro = document.getElementById("ahorro")
let finaltotal = document.getElementById("finaltotal")
let sumasubtotal = 0
let sumatotal = 0
let productosencarrito = []
  for (let i = 0; i < mas.length; i++) {
    const boton = mas[i];
    boton.addEventListener("click", (evento)=>{
      elementosCocina[i].contador++
      cantidades[i].innerText = elementosCocina[i].contador  
      productosencarrito.push(elementosCocina[i])
      total.innerText = productosencarrito.length
      sumasubtotal += elementosCocina[i].precio
      subtotal.innerText = `$${sumasubtotal}`
      if (productosencarrito.length > 5) {
        ahorro.innerText = `$5.00`
      }
      sumatotal += elementosCocina[i].precio
      finaltotal.innerText = `$${sumatotal}`
      if (productosencarrito.length > 5) {
        finaltotal.innerText = `$${(sumatotal)-5}`
      }
    })
  
  }
  for (let i = 0; i < menos.length; i++) {
    const boton = menos[i];
    boton.addEventListener("click", (evento)=>{
    if (elementosCocina[i].contador > 0) {
        elementosCocina[i].contador--
        cantidades[i].innerText = elementosCocina[i].contador
        productosencarrito.pop(elementosCocina[i])
        total.innerText = productosencarrito.length
        sumasubtotal -= elementosCocina[i].precio
        subtotal.innerText = `$${sumasubtotal}`
        if (productosencarrito.length <= 5) {
          ahorro.innerText = `$0.00`
        }
        sumatotal -= elementosCocina[i].precio
        finaltotal.innerText = `$${sumatotal}`
        if (productosencarrito.length > 5) {
          finaltotal.innerText = `$${(sumatotal)-5}`  
        }
    }
    })
  }

}


// ------------ Puntos a realizar --------------------

// en "total productos" se debe mostrar la cantidad de elementos seleccionados por el ususario.
// en "subtotal" se debe mostar el valor total de los elementos dependiendo de la cantidad.
// en "ahorro" se debe mostrar el descuento de "5 dolares" si hay mas de 5 articulos.
// en "total a pagar" se debe mostrar el valor total menos el "ahorro".
// la cantidad de productos no debe poder bajar nemos de "0"

