// const productos = [
//   {
//     id: 1,
//     producto: "cuchillo de chef",
//     imagen: "../assets/Items/cuchilloChef.jpg",
//     descripcion:
//       "Los cuchillos de la Línea Chef atienden a todas las necesidades de los que cocinan. Las láminas de acero inoxidable reciben tratamiento térmico, que le da mayor durabilidad al filo y protección antimicrobiana en los mangos de polipropileno, que inhibe el crecimiento de bacterias y hongos.",
//     precio: 63,
//     stock: 8,
//     categoria: "cocina",
//   },
//   {
//     id: 2,
//     producto: "cuchillo macheta",
//     imagen: `../assets/Items/cuchilloMacheta.jpg`,
//     descripcion:
//       "Hacha de Chef , forjada en el mejor acero Aleman. El Hacha tiene un largo de hoja de 18cm siendo extremadamente filosa. La empuñadura es triple remache con cuadricula que le brinda un agarre perfecto.",
//     precio: 45,
//     stock: 5,
//     categoria: "cocina",
//   },
//   {
//     id: 3,
//     producto: "cuchillo de trinchar",
//     imagen: "../assets/Items/cuchilloDeTrinchar.jpg",
//     descripcion:
//       "Con la combinación perfecta de comodidad y rendimiento, puede cortar carne con facilidad mientras evita la fatiga y el dolor de dedos, combinando perfectamente rendimiento y comodidad.",
//     precio: 48,
//     stock: 6,
//     categoria: "cocina",
//   },
//   {
//     id: 4,
//     producto: "cuchillo dedshuesador",
//     imagen: "../assets/Items/cuchilloDeshuesador.jpg",
//     descripcion:
//       "La altísima calidad de las láminas, resultado del tratamiento térmico compuesto por templado (calentamiento de la lámina), subcero (enfriamiento de 50 a 196 grados negativos) y revenido (aumento de la elasticidad del acero) les da vida larga y eficiente.",
//     precio: 88,
//     stock: 3,
//     categoria: "cocina",
//   },
//   {
//     id: 5,
//     producto: "cuchillo jamonero",
//     imagen: "../assets/Items/cuchilloJamonero.jpg",
//     descripcion:
//       "El cuchillo jamonero es ideal para cortar jamón y otras piezas de carnes en longas finas. Viene con una hoja de 25 cm. y delgada con hoja flexible en acero inoxidable Molibdeno Vanadio. En cuanto al mango, esta encabado en cachas de plástico con tres remaches de aluminio.",
//     precio: 52,
//     stock: 5,
//     categoria: "cocina",
//   },
//   {
//     id: 6,
//     producto: "cuchillo Bowie",
//     imagen: " ../assets/Items/cuchilloBowie.jpg",
//     descripcion:
//       "Hoja biselada de 4 mm de espesor tipo Bowie, con lomo parcialmente dentado para apoyar el dedo , evitando todo tipo de deslizamientos y defensa integrada. Cachas de madera de guayacan seleccionada por su color, con remaches de plata alemana. Vaina de cuero vacuno.",
//     precio: 55,
//     stock: 7,
//     categoria: "caza",
//   },
//   {
//     id: 7,
//     producto: "cuchillo Yarara",
//     imagen: "../assets/Items/cuchilloYarara.jpg",
//     descripcion:
//       "Cuchillo táctico con hoja entera de 15 cm. y 5 mm. de espesor en acero sae 6150 (carbono aleado al cromo-vanadio) pavonado de origen alemán, con 56/58 Rocweell de dureza. Modelo versátil para múltiples servicios, supervivencia, táctico, caza, etc.",
//     precio: 77,
//     stock: 2,
//     categoria: "caza",
//   },
//   {
//     id: 8,
//     producto: "cuchillo M9",
//     imagen: "../assets/Items/cuchilloM9.jpg",
//     descripcion:
//       "Esta bayoneta militar m-9 de szco supplies mide 12 pulgadas de largo total. la hoja de sierra negra est hecha de acero inoxidable de grueso calibre con un relleno empotrado. el mango es abs duro. la funda es de uso intensivo, funda militar verde.",
//     precio: 29,
//     stock: 6,
//     categoria: "caza",
//   },
//   {
//     id: 9,
//     producto: "cuchillo Ka-Bar-12",
//     imagen: "../assets/Items/cuchilloKaBar12.jpg",
//     descripcion:
//       "Todos los Ka-bar negros cuentan con un 7 pulgadas. Hoja lisa hecha de acero Cro-Van 1095 con un revestimiento epoxi no reflectante y un mango negro Craton G. El cuchillo tiene una longitud total de 11 3/4 pulgadas. Andes con una funda de cuero negro. Detalles de la hoja: borde liso longitud de la hoja (pulgadas): 7. 00 Material de la hoja: acero al carbono negro. Sistema de transporte: cuero Material de la funda: Craton Longitud total (pulgadas): 11. 29.5 in",
//     precio: 77,
//     stock: 4,
//     categoria: "caza",
//   },
//   {
//     id: 10,
//     producto: "Cuchillo Muela Husky",
//     imagen: "../assets/Items/cuchilloMuelaHusky.jpg",
//     descripcion:
//       "El Muela Husky-10M es un cuchillo deportivo con hoja entera de 10 cm., fabricado en acero inoxidable Molibdeno Vanadio. Esta encabado en cachas cuidadosamente seleccionadas con remaches flower pins, al final del cabo trae un orificio con un cordón.",
//     precio: 63,
//     stock: 10,
//     categoria: "caza",
//   },
//   {
//     id: 11,
//     producto: "cuchillo Dagger Pua",
//     imagen: "../assets/Items/cuchilloDaggerPua.JPG",
//     descripcion:
//       "La vaina es de tela, similar a la utilizada en las alfombras de los automotores. Cosida y color verde militar. La hoja es de acero inoxidable, de doble filo y forma triangular. Se adelgaza en el recazo para dejar lugar para los dedos. La empuñadura es de madera dura, semicircular para apoyar en la palma de la mano, queda fija a la hoja por un pegamento del tipo epoxi.",
//     precio: 88,
//     stock: 20,
//     categoria: "defensa",
//   },
//   {
//     id: 12,
//     producto: "cuchillo Kerambit",
//     imagen: "../assets/Items/cuchilloKerambit.jpg",
//     descripcion:
//       "Ideal para combate cuerpo a cuerpo y defensa personal.  Cachas de polimero y cuerpo en una sola pieza, balanceado. Funda rígida con traba para protección",
//     precio: 29,
//     stock: 15,
//     categoria: "defensa",
//   },
//   {
//     id: 13,
//     producto: "cuchillo Kershaw",
//     imagen: "../assets/Items/cuchilloKershaw.jpg",
//     descripcion:
//       "El cuchillo AM-6 es una reversion de los clasicos AL MAR. Cuchillo de Cuello .Hoja de acero 8Cr13MoV con terminacion Stonewashed. Empuñadura de Nylon reforzado,funda de plástico rígido y cordón para colgar.",
//     precio: 98,
//     stock: 11,
//     categoria: "defensa",
//   },
//   {
//     id: 14,
//     producto: "cuchillo Stiletto",
//     imagen: "../assets/Items/cuchilloStiletto.jpg",
//     descripcion:
//       "Una navaja automática o cuchillo automático, es un tipo de navaja, con una hoja que se puede desplegar rápidamente. Boker y Magnum realmente se han destacado haciendo esta pieza, todo ello a través de materias primas de alta calidad y en altas tecnologias, un estilo tradicional que ha llegado para quedarse.",
//     precio: 15,
//     stock: 18,
//     categoria: "defensa",
//   },
//   {
//     id: 15,
//     producto: "cuchillo Tarjeta",
//     imagen: "../assets/Items/cuchilloTarjeta.jpg",
//     descripcion:
//       "Cuchillo super ligero de supervivencia en formato tarjeta de crédito, totalmente desplegable. Está construido en caucho antideslizante y con un cierre de seguridad único y a prueba de niños. Este articulo es de excelente utilidad y hace furor en el mundo por su ingenioso plegado llamado metamorfosis.",
//     precio: 74,
//     stock: 9,
//     categoria: "defensa",
//   },
// ];

// export default productos;
