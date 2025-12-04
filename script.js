let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
   //get total
   function gettotal(){
      if(price.value !=''){
         let result = (+price.value + +taxes.value + +ads.value ) 
         - +discount.value; 
         total.innerHTML = result;
         total.style.background ='rgba(30, 122, 30, 1)';
      }else{
         total.innerHTML='';
         total.style.background = 'rgb(172, 4, 4)';
         
      }
   }
   // creat product
   if(localStorage.product != null){
      datapro= JSON.parse(localStorage.product)
   }else{
      datapro = [];
   }
   
   submit.onclick = function(){
    if(!title.value || !price.value){ 
        alert("الرجاء إضافة عنوان المنتج والسعر.");
   }else{
      let newpro = {
         title:title.value,
         price:price.value,
         taxes:taxes.value,
         ads:ads.value,
         discount:discount.value,
         total:total.innerHTML,
         count:count.value,
         category:category.value,
      }
      if(newpro.count > 1){
         for(let i =0 ; i<newpro.count;i++){
            datapro.push(newpro);
         }if (newpro.count =1){
              datapro.push(newpro);
         }
         } else {
            alert("الرجاء إضافة عدد المنتج.");

            
         }
      }
      localStorage.setItem('product', JSON.stringify(datapro))
      cleardata();
      showdata();
   }
      
   
showdata();
   //clearinput
   function cleardata(){
         title.value ='';
         price.value ='';
         taxes.value ='';
         ads.value ='';
         discount.value ='';
         total.innerHTML ='';
         count.value ='';
         category.value ='';
      }
        //read 
        function showdata(){
            let table= '';
            for(let i =0;i<datapro.length;i++){
               table   +=`      <tr>
                                <td>${i}</td>
                                <td>${datapro[i].title}</td>
                                <td>${datapro[i].price}</td>
                                <td>${datapro[i].taxes}</td>
                                <td>${datapro[i].ads}</td>
                                <td>${datapro[i].discount}</td>
                                <td>${datapro[i].total}</td>
                                <td>${datapro[i].category}</td>
                                <td><button id="update">update</button></td>
                                <td><button  onclick ="deletdata(${i})" id="delete">delete</button></td>
                            </tr>`
               
            }
            document.getElementById('tbode').innerHTML = table;
            let btndeletall = document.getElementById('DeleAll');
            if(datapro.length>0){
               btndeletall.innerHTML =`<button onclick = deletall() id="delete">Delet All ${datapro.length}</button></td>`
               
            }else{
               btndeletall.innerHTML ='';
            }
        }
        //delet product
        function deletdata(i){
         datapro.splice(i,1);
         localStorage.product = JSON.stringify(datapro);
         showdata()

        }
        function deletall(){
         localStorage.clear()
         datapro.splice(0)
         showdata()
        }








 













