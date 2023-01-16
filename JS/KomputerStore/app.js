const balanceElement = document.getElementById("h6-balance-amount");
const hCompFeatures = document.getElementById("h7-comp-features");
const compsElement = document.getElementById("select-computers");
const bankButtonDiv = document.getElementById("bank-button-div");
const hLoanAmount = document.getElementById("h6-loan-amount");
const hCompPrice = document.getElementById("h5-comp-price");
const hPayAmount = document.getElementById("h6-pay-amount");
const hComptitle = document.getElementById("h5-comp-title");
const btnPayLoan = document.getElementById("btn-pay-loan");
const btnGetLoan = document.getElementById("btn-get-loan");
const btnBankPay = document.getElementById("btn-bank-pay");
const btnBuyComp = document.getElementById("btn-buy-comp");
const hLoanText = document.getElementById("h6-loan-text");
const pCompText = document.getElementById("p-comp-text");
const btnWork = document.getElementById("btn-work");
const imgComp = document.getElementById("img-comp");

let computers = [];
let bankBalance = 500;
let payBalance = 0;
let outstandingLoanBalance = 0;
let computerPrice = 0;

/* Fetches the data from the JSON API and populates the list of computers,
   and updates the bank to display the amount of money one wants to start with
*/
fetch("https://hickory-quilled-actress.glitch.me/computers")
  .then((response) => response.json())
  .then((data) => (computers = data))
  .then((computers) => stockComputerStore(computers))
  .then(updateBank(0));

// Iterates through the list of computers from the API by and populates the html with all the information required
const stockComputerStore = (computers) => {
  computers.forEach((computer) => stockComputer(computer));
  hComptitle.innerText = computers[0].title;
  pCompText.innerText = computers[0].description;
  imgComp.src =
    "https://hickory-quilled-actress.glitch.me/" + computers[0].image;
  imgComp.onerror = function () {
    imageSource =
      "https://hickory-quilled-actress.glitch.me/" + computers[4].image;
    newImageSource = imageSource.replace("jpg", "png");
    imgComp.src = newImageSource;
  };
  hCompPrice.innerText = computers[0].price;
  computerPrice = computers[0].price;

  document.querySelector("#h7-comp-features").innerHTML = "";

  computers[0].specs.forEach(function (item) {
    var newElement = document.createElement("li");
    var newContent = document.createTextNode(item);
    newElement.appendChild(newContent);
    document.querySelector("#h7-comp-features").appendChild(newElement);
  });
};

// Populates the list of computers with one selected computer
const stockComputer = (computer) => {
  const compElement = document.createElement("option");
  compElement.value = computer.id;
  compElement.appendChild(document.createTextNode(computer.title));
  compsElement.appendChild(compElement);
};

// Changes the information displayed when a new computer is selected
const handleCompChange = (e) => {
  const selectComp = computers[e.target.selectedIndex];
  hComptitle.innerText = selectComp.title;
  pCompText.innerText = selectComp.description;
  imgComp.src = "https://hickory-quilled-actress.glitch.me/" + selectComp.image;
  hCompPrice.innerText = selectComp.price;
  computerPrice = selectComp.price;

  document.querySelector("#h7-comp-features").innerHTML = "";

  selectComp.specs.forEach(function (item) {
    let newElement = document.createElement("li");
    let newContent = document.createTextNode(item);
    newElement.appendChild(newContent);
    document.querySelector("#h7-comp-features").appendChild(newElement);
  });
};

// Updates the banks balance both in value and display on the website
function updateBank(currentBalance) {
  bankBalance = +bankBalance + +currentBalance;
  balanceElement.innerText = bankBalance;
}

// Updates the loan balance both in value and display on the website
function updateLoan(currentLoan) {
  outstandingLoanBalance = currentLoan;
  hLoanAmount.innerText = currentLoan;
}

/* Creates the "Pay loan" button on the page and then assigns an id and class.'
   The function also creates text to gove context to the loan button.
   Then the function creates an event listener that so the button is linked to another function 
*/
function createLoanButton() {
  let loanButton = document.createElement("button");
  loanButton.setAttribute("id", "btn-pay-loan");
  loanButton.setAttribute("class", "btn btn-danger");
  bankButtonDiv.appendChild(loanButton);
  loanButton.innerText = "Pay loan";
  loanButton.addEventListener("click", payLoan);

  hLoanText.innerText = "Loan:";
}

// Removes the "Pay loan" button and accompanying text
function removeLoanButton() {
  let buttonToRemove = document.getElementById("btn-pay-loan");
  buttonToRemove.remove();
  hLoanText.innerText = "";
  hLoanAmount.innerText = "";
}

/* Prompts the user to input a number value. If the user inputs anything that is not a number the prompt simply reappears.
   Once the user inputs a number the function checks if the number typed is the same as or more than double the amount in the bank.
   If this is true the user is told that the amount is to large. If the number typed is less than double the amount in the bank,
   the value gets added to the bank and the amount loaned is remembered and the "Pay loan" button is created
   If the user already has a loan registered the user is told that they cannot have two loans at a time.
*/
function getLoan() {
  do {
    var loanAmount = prompt("Please enter a number:");
  } while (!/^\d+$/.test(loanAmount));
  if (loanAmount >= bankBalance * 2) {
    window.alert(
      "You cannot take on a loan greater than your bank account balance."
    );
  } else if (outstandingLoanBalance == 0) {
    updateLoan(loanAmount);
    updateBank(loanAmount);
    createLoanButton();
  } else {
    window.alert("You can only have up to one loan at a time");
  }
  console.log(bankBalance);
  console.log(outstandingLoanBalance);
}

// Adds 100 to the pay balance and updates the text on the website
function doWork() {
  payBalance = +payBalance + 100;
  hPayAmount.innerText = payBalance;
}

/* Takes the amount generated by working and adding it to the bank.
   If there is no existing loan, the user puts it directly into the bank and updates the text on the website.
   If there is already a loan 10% of the pay balance is already calculated at the top of the function and is 
   taken away from what gets added to the bank. The 10% then gets added to the existing loan and the text is updated as well.
*/
function putPayInBank() {
  let currentPay = payBalance;
  let tenPercentOfPay = (10 / 100) * currentPay;
  if (outstandingLoanBalance == 0) {
    bankBalance = +bankBalance + +currentPay;
    payBalance = 0;
    hPayAmount.innerText = payBalance;
    balanceElement.innerText = bankBalance;
  } else {
    bankBalance = +bankBalance + +currentPay - +tenPercentOfPay;
    outstandingLoanBalance = +outstandingLoanBalance + +tenPercentOfPay;
    payBalance = 0;
    hPayAmount.innerText = payBalance;
    balanceElement.innerText = bankBalance;
    hLoanAmount.innerText = outstandingLoanBalance;
  }
}

/* Lets the user pay off their loan. If the amount used to pay of the loan is equal to or less than
   the amount on the loan balance, the pay balance is subtracted from the loan balance and the text is updated on the website.
   If the pay balance is more than the loan balance the loan is paid off and the rest of the pay is put in the bank.
*/
function payLoan() {
  let currentPay = payBalance;
  let payAfterLoan = +currentPay - +outstandingLoanBalance;
  if (payBalance <= outstandingLoanBalance) {
    outstandingLoanBalance = +outstandingLoanBalance - +payBalance;
    payBalance = 0;
    hPayAmount.innerText = payBalance;
    hLoanAmount.innerText = outstandingLoanBalance;
  } else {
    outstandingLoanBalance = 0;
    bankBalance = +bankBalance + +payAfterLoan;
    payBalance = 0;
    hPayAmount.innerText = payBalance;
    balanceElement.innerText = bankBalance;
    removeLoanButton();
  }
}

/* checks if the user has enough bank balance to buy a computer. If the user has
   to buy the selected computer, the bank value is reduced by the value of the computer
   and the user is informed of their purchase.
   If the user's bank balance is lower than the value of the computer, the user is informed that they do
   not have enogh to buy the computer selected.
*/

function buyComputer() {
  if (bankBalance >= computerPrice) {
    bankBalance = +bankBalance - +computerPrice;
    balanceElement.innerText = bankBalance;
    computerName = hComptitle.innerText;
    window.alert(
      "Congratulations! You are now the proud owner of " + computerName + "!"
    );
  } else {
    window.alert("You cannot afford this computer");
  }
}

btnBuyComp.addEventListener("click", buyComputer);
btnBankPay.addEventListener("click", putPayInBank);
btnGetLoan.addEventListener("click", getLoan);
compsElement.addEventListener("change", handleCompChange);
btnWork.addEventListener("click", doWork);
