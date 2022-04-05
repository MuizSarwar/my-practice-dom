  
        // select all the input and button 
        const email = document.querySelector('#account-email')
        const password = document.querySelector('#account-password')
        const logInButton = document.querySelector('#log-in-btn')




        // Log-in button Event 
        logInButton.addEventListener('click',()=>{

            if(email.value == 'muizsarwar8880@gmail.com' && password.value == 'tannucom'){
                window.location.href = '../account-page/account.html'
            }
            else{
                alert('you are not valid user !')
            }
        })
