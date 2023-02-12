// add click event handler in the submit button
document.getElementById('btn-login').addEventListener('click', function(){
     console.log('connected')
     // step:2 get the email address inside the email input field
     //always remember use(.value) to get the input value
     const userEmail= document.getElementById('user-email');
     const email= userEmail.value;
     // step:3 get the password inside the password input value
     const userPassword= document.getElementById('user-password');
     const password= userPassword.value;
     // Danger: Do not verify email password in the client side but in first case we will use but in future we never use this 
     // step:5 verify email and password and check whether valid or invalid user
     // console.log(email, password);
     if( email=== 'sahasoikat94@gmail.com' && password === 'secret'){
          window.location.href='bank.html';
     }
     else{
          alert('Password bhul dicos jah muri kha')
     }
})
