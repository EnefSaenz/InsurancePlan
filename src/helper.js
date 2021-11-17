// Obtiene diferencia de años
export function obtenerDifYear(year) {
  return new Date().getFullYear() - year;
}

// Calcular total según marca
export function asociarMarca(marca) {
  let incremento;
  switch (marca) {
    case "asiatico":
      incremento = 1.1;
      break;

    case "americano":
      incremento = 1.2;
      break;

    case "europeo":
      incremento = 1.25;
      break;

    default:
      break;
  }
  return incremento;
}

// Calcular total según plan
export function asociarPlan(plan) {
  return plan === "basico" ? 1.15 : 1.4;
}

// Primera letra mayúscula
export function capitalizeText(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
