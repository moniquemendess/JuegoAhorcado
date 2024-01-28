function id(str) {
  return document.getElementById(str);
}

function obtener_random(num_min, num_max) {
  const amplitude_valores = num_max - num_min; // valor más alto - mas bajo del randon (7-0)*/
  const valAzar = Math.floor(Math.random() * amplitude_valores) + num_min;
  return valAzar;
}
