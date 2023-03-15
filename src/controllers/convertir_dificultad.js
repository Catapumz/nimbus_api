/*function ndificultad(dificultad) {
  if (dificultad == "negro") {
    return 4278190080;
  } else if (dificultad == "morado") {
    return 4288423856;
  } else if (dificultad == "naranja") {
    return 4294940672;
  } else if (dificultad == "amarillo") {
    return 4294961979;
  } else if (dificultad == "verde") {
    return 4283215696;
  }
}*/

const ndificultad = {
  negro: 4278190080,
  morado: 4288423856,
  naranja: 4294940672,
  amarillo: 4294961979,
  verde: 4278190080,
};

//chatGPT solución
// function ndificultad(dificultad) {
//     switch(dificultad) {
//       case "negro":
//         return 4278190080;
//       case "morado":
//         return 4288423856;
//       case "naranja":
//         return 4294940672;
//       case "amarillo":
//         return 4294961979;
//       case "verde":
//         return 4283215696;
//       default:
//         return null; // valor por defecto en caso de que el parámetro no coincida con ninguna de las opciones anteriores
//     }
//   }

module.exports = ndificultad;
