const balance = document.querySelector("#balance");
const description = document.querySelector("#desc");
const amount = document.querySelector("#amount");
const income = document.querySelector("#inncome");
const expance = document.querySelector("#expance");
const transaction = document.querySelector("#trans");
const form = document.querySelector("#form");

const localStorageTrans = JSON.parse(localStorage.getItem("trans"));

let transactions = localStorage.getItem("trans") !== null ? localStorageTrans : [];

function loadTransaction(trans) {
    const sign = trans.amount < 0 ? "-" : "+";
    const item = document.createElement("li");
    item.classList.add(trans.amount < 0 ? "expance" : "income");
    item.innerHTML = `
        ${trans.description}
        <span>${sign} ₹${Math.abs(trans.amount)}</span>
        <button onclick="removeTrans(${trans.id})">x</button>
    `;
    transaction.appendChild(item);
}

function removeTrans(id) {
    if (confirm("Are you sure you want to delete this transaction?")) {
        transactions = transactions.filter((trans) => trans.id !== id);
        config();
        updateLocalStorage();
    }
}

function updateAmount() {
    const amounts = transactions.map((trans) => trans.amount);
    const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
    balance.innerHTML = `₹ ${total}`;

    const incomes = amounts.filter((item) => item > 0)
        .reduce((acc, item) => acc + item, 0).toFixed(2);
    income.innerHTML = `₹ ${incomes}`;

    const expances = amounts.filter((item) => item < 0)
        .reduce((acc, item) => acc + item, 0).toFixed(2);
    expance.innerHTML = `₹ ${Math.abs(expances)}`;
}

function config() {
    transaction.innerHTML = "";
    transactions.forEach(loadTransaction);
    updateAmount();
}

function addTransaction(e) {
    e.preventDefault();
    if (description.value.trim() === "" || amount.value.trim() === "") {
        alert("Please enter both a description and an amount.");
    } else {
        const newTransaction = {
            id: uniqueId(),
            description: description.value,
            amount: +amount.value // Convert amount to a number
        };
        transactions.push(newTransaction);
        description.value = "";
        amount.value = "";
        config();
        updateLocalStorage();
    }
}

function uniqueId() {
    return Math.floor(Math.random() * 10000000000);
}

function updateLocalStorage() {
    localStorage.setItem("trans", JSON.stringify(transactions)); // Corrected JSON.stringify
}

form.addEventListener("submit", addTransaction);
window.addEventListener("load", function() {
    config();
});
