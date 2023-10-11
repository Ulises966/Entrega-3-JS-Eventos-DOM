const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];




const pizzaForm = document.getElementById('pizza-form')
const input = document.getElementById('input')
const container = document.getElementById('container-card')
const button = document.getElementById('btn')
const mensageError = document.getElementById('mensageError')



const pizza = JSON.parse(localStorage.getItem('pizza')) || [];
const saveLocalStorage = (pizza) => {
  localStorage.setItem('pizza', JSON.stringify(pizza));
}

const mostrarPizza = (pizza) => {
  return `
  <div class="pizza-card">
      <h2>${pizza.nombre}</h2>
      <p>Precio: $${pizza.precio}</p>
      <img src="${pizza.imagen}" alt="${pizza.nombre}">
  </div>
`
}



const capturarId = (e) => {
  e.preventDefault();
  const value = input.value;
  const pizza = pizzas.find(e => Number(e.id) === Number(value));
  
  if (!pizza) {
    mensageError.textContent = 'No existe en el menu'
    container.innerHTML = '';
    localStorage.removeItem('pizza');
  }

  container.innerHTML = mostrarPizza(pizza);
  mensageError.textContent = '';
  saveLocalStorage(pizza);
  
}

const pizzaEnlocal = () => {
    container.innerHTML = mostrarPizza(pizza);
}


const init = () => {
  document.addEventListener('DOMContentLoaded', pizzaEnlocal);
  button.addEventListener('click', capturarId);
}
 
init()





