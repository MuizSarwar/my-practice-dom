  // select html element 
  const listContainer = document.querySelector('.list-container')
  const showList = document.querySelector('.show-list')

  // select all button 
  const allBtn = document.querySelector('.all-btn')
  const phoneBtn = document.querySelector('.phone-btn')
  const laptopBtn = document.querySelector('.laptop-btn')
  const watchBtn = document.querySelector('.watch-btn')

  // all products storage 
  const products = [
      {name:'Iphone Plus phone',price:3443,category:'phone all'},
      {name:'One phone plus',price:3243,category:'phone all'},
      {name:'How phone',price:844367,category:'phone all'},
      {name:'Phone Task ',price:344983,category:'phone all'},
      {name:'One plus Laptop',price:343,category:'laptop all'},
      {name:'samsung Laptop',price:930,category:'laptop all'},
      {name:'Huawae one phone ',price:8783,category:'phone all'},
      {name:'asus watch ',price:443,category:'watch all'},
      {name:'apple watch ',price:5643,category:'watch all'}
  ];



  // handling all button event 
  allBtn.addEventListener('click',function (){
      takeAndSearch(products,'all')
  })
  phoneBtn.addEventListener('click',function (){
      takeAndSearch(products,'phone')
  })
  laptopBtn.addEventListener('click',function (){
      takeAndSearch(products,'laptop')
  })
  watchBtn.addEventListener('click',function (){
      takeAndSearch(products,'watch')
  })

  // product search function 
  function takeAndSearch(products,searchText){
      for (const product of products) {
          if(product.category.includes(searchText)){
              addToUi(product)
          }
      }
  }

  // add into the UI 
  function addToUi(product){

      const productContainer = document.createElement('div');


      const listHeading = document.createElement('h2');
      listHeading.innerText = ' Product Name: ' + product.name;
      productContainer.appendChild(listHeading)

      const listPara = document.createElement('p')
      listPara.innerText = ' price: ' + product.price;
      productContainer.appendChild(listPara);

      showList.appendChild(productContainer);



      
  }


 




