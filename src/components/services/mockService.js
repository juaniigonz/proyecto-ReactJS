// import productos from "../../data/productos";

// function APICall() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(productos);
//     }, 300);
//   });
// }

// export function getItem(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let itemFound = productos.find(
//         (arrayItem) => arrayItem.id === parseInt(id)
//       );
//       if (itemFound) resolve(itemFound);
//       else reject("Item no encontrado");
//     }, 1000);
//   });
// }

// export function getCategoria(categoriaID) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let itemFound = productos.filter((item) => {
//         return item.categoria === categoriaID;
//       });
//       if (itemFound.length > 0) resolve(itemFound);
//       else reject("no hay productos");
//     }, 1000);
//   });
// }


