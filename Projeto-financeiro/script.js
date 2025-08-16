const form = document.getElementById('interest-form');
const principalInput = document.getElementById('principal');
const rateInput = document.getElementById('rate');
const timeInput = document.getElementById('time');
const typeSelect = document.getElementById('interest-type');
const resultDiv = document.getElementById('result');
const totalP = document.getElementById('total');
const interestP = document.getElementById('interest-earned');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const principal = parseFloat(principalInput.value);
  const rate = parseFloat(rateInput.value) / 100;
  const time = parseFloat(timeInput.value);
  const type = typeSelect.value;

  let total, interest;

  if (type === 'simple') {
    interest = principal * rate * time;
    total = principal + interest;
  } else { // composto
    total = principal * Math.pow(1 + rate, time);
    interest = total - principal;
  }

  totalP.textContent = `Montante Total: R$ ${total.toFixed(2)}`;
  interestP.textContent = `Juros Ganhos: R$ ${interest.toFixed(2)}`;
  resultDiv.classList.remove('hidden');
});
