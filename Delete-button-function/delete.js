
        const deleteBox = document.querySelector('#delete-box')
        const deleteButton = document.querySelector('.delete-btn')
        const commentContainer = document.querySelector('.comment-container')
        const comment = document.querySelector('.comment')

        //focus
        deleteBox.addEventListener('focus',function (){
            document.body.style.backgroundColor ='red'

        })

        //blur
        deleteBox.addEventListener('blur',function (){
            document.body.style.backgroundColor = 'white'
        })

        // //keyup 
        deleteBox.addEventListener('keyup',function (event){
            if(event.target.value == 'delete'){
                deleteButton.removeAttribute('disabled');
            }
            else{
                deleteButton.setAttribute('disabled',true)
            }
        })

        //change 
        deleteBox.addEventListener('change',function (){
            deleteButton.setAttribute('disabled',true)
            window.alert('You have to type delete word, you cannot copy and past ');
        })

        // watching if delete button is clicked  
        deleteButton.addEventListener('click',function (){
            console.log('delete clicked')
            commentContainer.removeChild(comment);
            
        })



   