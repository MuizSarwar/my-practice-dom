       // total balanced 
       const balancedTotal = document.querySelector('#balanceTotal')

       // diposit functionality
       
       diposit()

       function diposit(){
           const dipositTotal = document.querySelector('#dipositTotal')
           const dipositAmount = document.querySelector('#diposit')
           const dipositButton = document.querySelector('#diposit-btn')

           
           //deposit button event 
           dipositButton.addEventListener('click',function (){
               const dipositAmountNumber = parseFloat(dipositAmount.value)
               const dipositTotalNumber = parseFloat(dipositTotal.innerHTML)

               dipositTotal.innerHTML = dipositAmountNumber + dipositTotalNumber ;

               const balancedTotalAfterDiposit = parseFloat(balancedTotal.innerHTML) + dipositAmountNumber ;
               balancedTotal.innerHTML = balancedTotalAfterDiposit ;

               dipositAmount.value ='';

               
           })


       }



       // withdraw functionality
       withdraw()

       function withdraw(){

           const withdrawTotal = document.querySelector('#withdrawTotal')
           const withdrawAmount = document.querySelector('#withdraw')
           const withdrawButton = document.querySelector('#withdraw-btn')


           //withdraw button event 
           withdrawButton.addEventListener('click',function (){
               const withdrawAmountNumber = parseFloat(withdrawAmount.value)
               const withdrawTotalNumber = parseFloat(withdrawTotal.innerHTML)

               withdrawTotal.innerHTML = withdrawAmountNumber + withdrawTotalNumber ;

               const balancedTotalAfterDiposit = parseFloat(balancedTotal.innerHTML) - withdrawAmountNumber ;
               balancedTotal.innerHTML = balancedTotalAfterDiposit ;

               withdrawAmount.value = ''



           })




       }


