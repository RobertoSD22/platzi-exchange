import numeral from "numeral";

const dollarFilter = function(valor) {
  if (!valor) {
    return "$ 0";
  }

  return numeral(valor).format("($ 0.00a)");
};

const percentFilter = function(valor) {
  if (!valor) {
    return "0%";
  }

  return `${Number(valor).toFixed(2)}%`;
};

export { dollarFilter, percentFilter }; //No se le agrega el deafult porque queremos que se utilicen de manera atomica, sin necesidad de que importe los otros filtros
