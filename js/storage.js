"use strict";

const STORAGE_KEY = "renteaseFlats";
let storageMessage = "";

function loadFlats() {
  storageMessage = "";

  /*
   * TODO JS-STORAGE-1
   * 1. Lê STORAGE_KEY com localStorage.getItem().
   * 2. Se a chave não existir, devolve [].
   * 3. Converte a string com JSON.parse().
   * 4. Confirma que o resultado é um array.
   * 5. Se ocorrer um erro, define storageMessage e devolve [].
   */ 
  const flats = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!Array.isArray(flats)) {
    return [];
  }
  try {
    storageMessage = "";
    return flats;
  } catch (error) {
    storageMessage = "Erro ao carregar os apartamentos.";
    return [];
  }
}
/* ------------------------------------------------------------ */


function saveFlats(flats) {
  /*
   * TODO JS-STORAGE-2
   * 1. Converte o array com JSON.stringify().
   * 2. Guarda a string com localStorage.setItem().
   * 3. Devolve true quando a gravação termina.
   * 4. Se ocorrer um erro, define storageMessage e devolve false.
   */ 

  try {
    storageMessage = "Apartamentos guardados com sucesso.";
    localStorage.setItem(STORAGE_KEY, JSON.stringify(flats));
    return true;
  } catch (error) {
    storageMessage = "Erro ao guardar os apartamentos: " + error.message;
    return false;
  }
}
/* ------------------------------------------------------------ */


function formatCurrency(value) {
  return Number(value).toLocaleString("pt-PT", {
    style: "currency",
    currency: "EUR"
  });
}
