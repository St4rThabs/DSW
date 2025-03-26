function dataPorExtenso(data) {
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  const [dia, mes, ano] = data.split("/");

  return `${dia} de ${meses[parseInt(mes) - 1]} de ${ano}`;
}

const data = "30/06/2004";
console.log(dataPorExtenso(data));
