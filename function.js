let total = 0;

function productPrice (target){
  const selectedItemContainer = document.getElementById('item-select')
  const productName = target.childNodes[7].childNodes[1].innerText;
  const li = document.createElement('li')
  li.className = 'list-decimal'
  li.innerText = productName;
  selectedItemContainer.appendChild(li);
  const price = target.childNodes[7].childNodes[3].innerText.split(" ")[0];
  const priceString = parseFloat (price);
  total = total + priceString;
  document.getElementById("Total-price").innerText = total.toFixed(2);
  const button = document.getElementById ("Purchase-btn")
  const applyButton = document.getElementById('discount-btn')
  if (total >= 200) {
    applyButton.disabled = false;
  }
  if (total > 0) {
    button.disabled = false;
    return total;
  }
}

function getValueFromInputField (inputId){
  const inputValue = document.getElementById (inputId);
  const inputValueString = inputValue.value;
  return inputValueString;
}

function getDiscount (){
  const inputValueString = getValueFromInputField ("discount-Input")
  if (inputValueString === ("SELL200")){
    const disscountCalculate = total;
    const discountAmount = (total * 20 ) / 100;
    const discountAmountSet = document.getElementById ("discount-ammount");
    discountAmountSet.innerText = discountAmount.toFixed(2);
    const totalPrice = total - discountAmount;
    const totalAfterDiscount = document.getElementById ("total");
    totalAfterDiscount.innerText = totalPrice.toFixed(2);
  }

}

// for go back home 

document.getElementById('close-btn').addEventListener('click', () => {
  location.reload();
});