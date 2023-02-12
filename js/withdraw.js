document.getElementById('btn-withdraw').addEventListener('click', function(){
     // capture input value
     const withdrawField= document.getElementById('withdraw-field');
     const newWithdrawValueString= withdrawField.value;
     // console.log(typeof newWithdrawValue);
     const newWithdrawValue= parseFloat(newWithdrawValueString);
     // clear input field
     withdrawField.value='';
     // validation
     if(isNaN(newWithdrawValue)){
          alert('Please Enter a Valid Number');
          return;
     }
     // get previous withdraw value
     const withdrawTotal= document.getElementById('withdraw-total');
     const previousWithdrawValueString= withdrawTotal.innerText;
     const previousWithdrawValue= parseFloat(previousWithdrawValueString);

     //  get previous balance value
     const balanceTotal= document.getElementById('balance-total');
     const previousBalanceValueString= balanceTotal.innerText;
     const previousBalanceValue= parseFloat(previousBalanceValueString);
     if(newWithdrawValue > previousBalanceValue){
          alert('tor baper bank e eto taka nai');
          return;
     }
     // update withdraw value
     withdrawTotal.innerText= previousWithdrawValue + newWithdrawValue;
     // update previous balance value
     balanceTotal.innerText= previousBalanceValue - newWithdrawValue;

})