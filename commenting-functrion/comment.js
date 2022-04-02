

        // select everything and store them inside variables
        const commentBox = document.querySelector('#comment')
        const commentBtn = document.querySelector('#comment-btn')
        const commentContainer = document.querySelector('.comment-container')

        // Event handler 
        commentBtn.addEventListener('click',function (){
            const commentBoxValue = commentBox.value ;

            const singleComment = document.createElement('p');
            singleComment.innerHTML = commentBoxValue ;

            commentContainer.appendChild(singleComment);
            commentBox.value = '';



        })

