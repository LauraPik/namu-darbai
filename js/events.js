// document.querySelector('#vip').addEventListener('click', ()=>{
//     alert('paspaudziau');
// })

// document.querySelector(".adsss").onclick = ()=>{
//     alert('Kitas');
// }

// function increaseFont(elem, inc){
//     const val = window.getComputedStyle(elem).getPropertyValue('font-size');
//     const currentSize = parseFloat(val);
//     elem.style.fontSize = currentSize + inc + 'rem';
// }

// const idEl = document.getElementById('vip');
// idEl.addEventListener('click',() =>increaseFont(idEl, 1));

// let classEl = document.querySelector('.adsss');
// classEl.addEventListener('click',() =>increaseFont(classEl, 2));

// paspaudus srifto dydis padideja du kartus:

// for(const article of document.querySelectorAll('article p')){
//     article.addEventListener('click',()=>{
//         article.style.fontSize ='2rem';
//     }

//     )
// }


// document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault(); // pakeicia standartine formos elgsena
//     console.log(e.target);
//     const bgColor = document.querySelector('input').value;
//     document.querySelector('body').style.backgroundColor = bgColor;
// })

// sukurti to do list aplikacija
// vartotojas iveda i formos input lauka darbo pavadinima
//paspaudzia mygtuka prideti
// ivestas darbas pridedamas i ul lista 
// kai vartotojas paspaudzia pasalinti pasalinamas paskutinis darbas su li elementu
//darbo sukurimo metu i ul sukuriamas li, o i li idedamas darba aprasantis tekstas

// function newElement() {
//     let li = document.createElement("li");
//     let inputValue = document.getElementById("myInput").value;
//     let t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === '') {
//       alert("You must write something!");
//     } else {
//       document.getElementById("myUL").appendChild(li);
//     }
//     document.getElementById("myInput").value = "";
  
//     let span = document.createElement("SPAN");
//     let txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);
  
//     for (i = 0; i < close.length; i++) {
//       close[i].onclick = function() {
//         let div = this.parentElement;
//         div.style.display = "none";
//       }
//     }
//   } 


//  document.querySelector('#push').addEventListener('click',()=>{
//         let liEl = document.createElement('li');
//         let inputValue = document.getElementById("myInput1").value
//         liEl.textContent= inputValue;
//         let t = document.querySelector('#list');
//         t.appendChild(liEl);
//         let spanEl = document.createElement('span');
//         liEl.appendChild(spanEl);
//         let buttonEl = document.createElement('button');
//         buttonEl.textContent ='pasalinti';
//         spanEl.appendChild(buttonEl);
        
        

        // let closeEl = document.getElementsByTagName("LI");
        // let i;
        // for (i = 0; i < closeEl.length; i++) {
        //     let span = document.createElement("SPAN");
        //     let txt = document.createTextNode("\u00D7");
        //     span.className = "close";
        //     span.appendChild(txt);
        //     closeEl[i].appendChild(span);
        //     if( i === span){
        //         let span = document.createElement("SPAN");
        //         let txt = document.createTextNode("\u00D7");
        //         span.className = "close";
        //         span.appendChild(txt);
        //         closeEl[i].appendChild(span);
        //     }else{
        //         continue;
        //     }
    
        // }
    
           
// }

//     )

    // document.querySelectorAll('button').onclick = ()=>{
    //     for(i=0; i< buttonEl.len)
    //     alert('Kitas');
    // }

    // for(const button of document.querySelectorAll('list')){
    //     article.addEventListener('click',()=>{
    //         article.style.fontSize ='2rem';
    //     }
    
    //     )
    // }
    

    // for(const article of document.querySelectorAll('article')){
    //     article.addEventListener('click',()=>{
    //         article.style.fontSize ='2rem';
    //     }
    
    //     )
    // }
    

// for( i=0; i < 4; i++ ){
//     let div1El = document.createElement('div');
//     div1El.classList="row";
//     document.body.appendChild(div1El);
//     for( j = 0; j< 4; j++){
//         let div2El = document.createElement('div');
//         div2El.classList="column";
//         div2El.style.height ='200px';
//         div2El.style.width ='400px';
//         div2El.style.border = "thick solid #0000CE"
//         div2El.style.backgroundColor =setBg();
//         div1El.appendChild(div2El);
//         div2El.addEventListener('mouseover', ()=>{
//             div2El.style.backgroundColor =setBg();
        
//         })

//     }
// }

// function setBg() {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     return "#" + randomColor;
    
//   }
// let buttonClicked = document.querySelector('#push');



// for(i =0; i < 1; i++){
//     let rowdiv = document.createElement('div');
//     rowdiv.classList ="row";
//     document.body.appendChild(rowdiv);
//     for(j=1; j < 11; j++){
//         let columndiv = document.createElement("div");
//         columndiv.style.height ='200px';
//         columndiv.style.width ='400px';
//         columndiv.classList = "column";
//         rowdiv.appendChild(columndiv);
//         for(t = 0; t < 1; t++){
//         let imgEl = document.createElement('img');
//         imgEl.src =`img/${j}.jpg`;
//         imgEl.idName = "random";
//         imgEl.style.width='12rem';
//         columndiv.appendChild(imgEl);
        
//         }


//     }
// }

const listOfImages = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("listOfImages", listOfImages);
listOfImages.map((a) => {
    console.log("a: ", a);
});
0
const shuffle = (array) => { 
    return array.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value); 
  }; 

const insertImages = (list) => {
    let imgs = list.length;
    let imgContainer = document.getElementById("list");
        imgContainer.innerHTML = "";

    for(let j=0; j<imgs; j++){
        let liEl = document.createElement("li");
        liEl.style.display ='inline';
        // li.style.width ='400px';

        let imgEl = document.createElement('img');
        imgEl.src =`img/${list[j]}.jpg`;
        imgEl.idName = "random";
        imgEl.style.width='12rem';

        liEl.appendChild(imgEl);
        imgContainer.appendChild(liEl);
    }
    // console.log("imgs", imgs);
}
// console.log(listOfImages);
insertImages(listOfImages);

let onClickDoStuff = function(toDo){
    if(toDo == 1){
        // suffle img list
        insertImages(shuffle(listOfImages));
    } else if(toDo == 2){
        // restore img list
        insertImages(listOfImages);
    }
}

// Click for suffle
document.getElementById("push")
    .addEventListener("click", function(){ onClickDoStuff(1)});

// Click for restore
document.getElementById("push1")
    .addEventListener("click", function(){ onClickDoStuff(2)});

  
// var ImgDoubleClicked = document.querySelectorAll('img');
// console.log(shuffle(ImgDoubleClicked));
// console.log(ImgDoubleClicked)

// let onMouseMove = function(){
//     console.log("dasdasd");
//     ImgDoubleClicked.textContent = 'meow';

// }

// document.getElementById("push").addEventListener("click", onMouseMove);


// let galery = document.querySelectorAll('img')

// console.log(galery)
// for(let i=galery.length; i>=0; i--){
//     i =  Math.floor(Math.random()*i);  
//  }

// buttonClicked.addEventListener('click', (e)=>{
//     e.preventDefault();
//     for(let i=galery.length; i>=0; i--){
//        let randomImg =  Math.floor(Math.random()*i);
//        document.querySelectorAll('img').innerHTML= randomImg;

//     }
// })

