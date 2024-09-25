
// history and donation button
const historyButton = document.getElementById("btn-history");
const donateButton = document.getElementById("btn-donate");


document.getElementById("btn-history").addEventListener("click", function () {
  switchButton("history-data");

  historyButton.classList.add('bg-lime-400');
  donateButton.classList.remove('bg-lime-400');
  donateButton.classList.add('border');
});

document.getElementById("btn-donate").addEventListener("click", function () {
  switchButton("card-section");

  historyButton.classList.remove('bg-lime-400');
  historyButton.classList.add('border');
  donateButton.classList.add('bg-lime-400');
});

// card - 1:
document.getElementById("donate-now-btn-nuakhali").addEventListener("click", function () {
  const addMoney = getValueByIdFromInput("donate-For-nuakhali-input");
  const donarBalance = donationValueAmount("main-balance");

  const getMoney = donationValueAmount("donation-balance-Nuakhali-has");
  const donaterBalanceISNow = donarBalance - addMoney;

  const totalDonationGetNuakhali = addMoney + getMoney;

  if (addMoney > donarBalance) {
    alert("you don't have sufficient balance for donating");
    return;
  }
  if (addMoney <= 0) {
    alert("Negative value is not accepted");
    return;
  }

  if (isNaN(addMoney)) {
    alert("Wrong!Input accepts only Valid Number");
    return;
  }

  document.getElementById("main-balance").innerText = donaterBalanceISNow;
  document.getElementById("donation-balance-Nuakhali-has").innerText = totalDonationGetNuakhali;

  //pop up
  document.getElementById("popup").classList.remove("hidden");
  document.getElementById("close-confirmation").addEventListener("click", function () {
    document.getElementById("popup").classList.add("hidden");
  });

  // history
  const div = document.createElement("div");

  div.innerHTML = `
            <p class ='text-xl font-bold py-4 px-4 border'> You donate ${addMoney} tk for Noakhali Transaction date is ${new Date().toLocaleDateString()} ${new Date().toTimeString()}</p>
          `;
  document.getElementById("transaction-container").appendChild(div);
});

// card - 2
document.getElementById("donate-btn-for-feni").addEventListener("click", function () {
  const inputMoney = getValueByIdFromInput("donate-feni-input");
  const donarBalance = donationValueAmount("main-balance");
  const feniHasBalance = donationValueAmount("donation-balance-feni");

  const donaterBalanceISNow = donarBalance - inputMoney;
  const totalDonationGetFeni = inputMoney + feniHasBalance;

  if (inputMoney > donarBalance) {
    alert("you don't have sufficient balance for donating");
    return;
  }
  if (inputMoney <= 0) {
    alert("Negative value is not accepted");
    return;
  }
  if (isNaN(inputMoney)) {
    alert("Wrong!Input accepts only Valid Number");
    return;
  }

  document.getElementById("main-balance").innerText = donaterBalanceISNow;
  document.getElementById("donation-balance-feni").innerText = totalDonationGetFeni;

  // pop up
  document.getElementById("popup").classList.remove("hidden");
  document.getElementById("close-confirmation").addEventListener("click", function () {
    document.getElementById("popup").classList.add("hidden");
  });

  // history
  const div = document.createElement("div");

  div.innerHTML = `
                <p class ='text-xl font-bold py-4 px-4 border'> You donate ${inputMoney} tk for Feni, Transaction date is ${new Date().toLocaleDateString()} ${new Date().toTimeString()}</p>
            `;
  document.getElementById("transaction-container").appendChild(div);
});

// card - 3
document.getElementById("donate-for-student").addEventListener("click", function () {
  const donateForStudent = getValueByIdFromInput("donate-amount-input");
  const donarBalance = donationValueAmount("main-balance");
  const balanceIsNow = donationValueAmount("donation-has-rightnow");

  const donaterBalanceISNow = donarBalance - donateForStudent;
  const totalDonationStudentHas = donateForStudent + balanceIsNow;

  if (donateForStudent > donarBalance) {
    alert("you don't have sufficient balance for donating");
    return;
  }
  if (donateForStudent <= 0) {
    alert("Negative value is not accepted");
    return;
  }
  if (isNaN(donateForStudent)) {
    alert("Wrong!Input accepts only Valid Number");
    return;
  }

  document.getElementById("main-balance").innerText = donaterBalanceISNow;
  document.getElementById("donation-has-rightnow").innerText = totalDonationStudentHas;

  // pop up
  document.getElementById("popup").classList.remove("hidden");
  document.getElementById("close-confirmation").addEventListener("click", function () {
    document.getElementById("popup").classList.add("hidden");
  });

  // history
  const div = document.createElement("div");

  div.innerHTML = `
                <p class ='text-xl font-bold py-4 px-4 border'> You donate ${donateForStudent} tk for Quota Movement, Transaction date is ${new Date().toLocaleDateString()} ${new Date().toTimeString()}</p>
            `;
  document.getElementById("transaction-container").appendChild(div);
});
