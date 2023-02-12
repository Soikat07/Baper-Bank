
// add event handler in deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
     console.log('connected')
     // capture input value
     const depositField = document.getElementById('deposit-field');
     const newDepositAmountString= depositField.value;
     // make string to number
     const newDepositAmount=parseFloat(newDepositAmountString);
      // clear deposit input field
      depositField.value='';
     // validation
     if(isNaN(newDepositAmount)){
          alert('Please provide a valid Number');
          return;
     }

     // get the current deposit value
     const previousDepositElement= document.getElementById('deposit-total');
     const previousDepositAmountString= previousDepositElement.innerText;
     const previousDepositAmount= parseFloat(previousDepositAmountString);   
     // update current deposit value
     previousDepositElement.innerText= previousDepositAmount + newDepositAmount;

     // get the current balance value
     const previousBalanceElement= document.getElementById('balance-total');
     const previousBalanceAmountString= previousBalanceElement.innerText;
     const previousBalanceAmount= parseFloat(previousBalanceAmountString)
     // update current balance value
     previousBalanceElement.innerText=previousBalanceAmount + newDepositAmount;
})
document.getElementById('btn-logout').addEventListener('click', function(){
     window.location.href='index.html';
})