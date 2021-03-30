const $modal = document.querySelector(".modal");
const $reservarInput = document.querySelector(".modal input");

let activeSeat = null;
let assentos = [
  { id: "A1", reservado: false, nome: null },
  { id: "A2", reservado: false, nome: null },
  { id: "A3", reservado: false, nome: null },
  { id: "A4", reservado: false, nome: null },
  { id: "A5", reservado: false, nome: null },
  { id: "A6", reservado: false, nome: null },
  { id: "A7", reservado: false, nome: null },
  { id: "A8", reservado: false, nome: null },
  { id: "A9", reservado: false, nome: null },
  { id: "A10", reservado: false, nome: null },
  { id: "A11", reservado: false, nome: null },
  { id: "A12", reservado: false, nome: null },
  { id: "A13", reservado: false, nome: null },
  { id: "A14", reservado: false, nome: null },
  { id: "A15", reservado: false, nome: null },
  { id: "A16", reservado: false, nome: null },
  { id: "A17", reservado: false, nome: null },
  { id: "A18", reservado: false, nome: null },
  { id: "A19", reservado: false, nome: null },
  { id: "A20", reservado: false, nome: null },
  { id: "A21", reservado: false, nome: null },
  { id: "A22", reservado: false, nome: null },
  { id: "A23", reservado: false, nome: null },
];

function reservar(nome) {
  assentos.map((a, index) => {
    if (a.id == activeSeat) {
      assentos[index].nome = nome;
      assentos[index].reservado = true;

      document.querySelector(`#${activeSeat}`).className = "assento-reservado";
    }
  });

  console.log("assentos =>", assentos);
}

function atribuirNome() {
  if ($reservarInput.value) {
    reservar($reservarInput.value);

    $reservarInput.value = "";

    return closeModal();
  }
}

function showModal(target) {
  assentos.map((a) => {
    if (a.id == target.id) {
      if (a.reservado) {
        return alert(`Assento já reservado por ${a.nome}`);
      }
      activeSeat = target.id;

      if (!/show/.test($modal.className)) {
        $modal.className += " show";

        $reservarInput.focus();
      }
    }
  });
}

function closeModal() {
  activeSeat = null;

  if (/show/.test($modal.className)) {
    $modal.className = "modal";
  }
}