const balanceElement = document.getElementById("h6-balance-amount");
const compsElement = document.getElementById("select-computers");
const hCompPrice = document.getElementById("h5-comp-price");
const payElement = document.getElementById("h6-pay-amount");
const hComptitle = document.getElementById("h5-comp-title");
const btnPayLoan = document.getElementById("btn-pay-loan");
const btnGetLoan = document.getElementById("btn-get-loan");
const btnBankPay = document.getElementById("btn-bank-pay");
const btnBuyComp = document.getElementById("btn-buy-comp");
const pCompText = document.getElementById("p-comp-text");
const btnWork = document.getElementById("btn-work");

let computers = [];
let bankBalance = int;
let payBalance = int;
let outstandingLoanBalance = int;

fetch("https://hickory-quilled-actress.glitch.me/computers")
  .then((response) => response.json())
  .then((data) => (computers = data))
  .then((computers) => stockComputerStore(computers));

const stockComputerStore = (computers) => {
  computers.forEach((computer) => stockComputer(computer));
};

const stockComputer = (computer) => {
  const compElement = document.createElement("option");
  compElement.value = computer.id;
  compElement.appendChild(document.createTextNode(computer.title));
  compsElement.appendChild(compElement);
};
