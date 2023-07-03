const currencyEl_one = document.getElementById("currency-one");
const currencyEl_Two = document.getElementById("currency-Two");
const amountEl_one = document.getElementById("amount-one");
const amountEl_Two = document.getElementById("amount-Two");

// https://app.exchangerate-api.com/invoices

// Fetch exchange rates and update the DOM
const rateEl = document.getElementById("rate");

const swap = document.getElementById("swap");

function calcultate() {
  // Event listeners

  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_Two.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/2eed6596fd1c1820d5328782/latest/${currency_one}`
  )
    .then(data => data.json())
    .then(data => {
      let result = data.conversion_rates[currency_two];
      rateEl.innerText = `1${currency_one} = ${result}  ${currency_two}`;
      amountEl_Two.value = (amountEl_one.value * result).toFixed(2);
      console.log(result);
    });
}
currencyEl_one.addEventListener("change", calcultate);
amountEl_one.addEventListener("input", calcultate);
currencyEl_Two.addEventListener("change", calcultate);
amountEl_Two.addEventListener("input", calcultate);

calcultate();
