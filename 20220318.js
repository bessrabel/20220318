let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let btnLotto = document.getElementById("btnLotto");

function lotto(){
  box1.style.opacity = 0;
  box2.style.opacity = 0;
  box3.style.opacity = 0;
  box4.style.opacity = 0;
  box5.style.opacity = 0;
  box6.style.opacity = 0;
  box7.style.opacity = 0;

  let lotto= [0,0,0,0,0,0,0];
  
  for(let i=0; i<7;i++){
    lotto[i]=parseInt(Math.random()*45+1);
    for(let j=0;j<i;j++){
      if(lotto[i] === lotto[j]){
        i--;
        break;
      }
    }
  }
  for(let i=0; i<6;i++){
    for(let j=0;j<i;j++){
      if(lotto[i] > lotto[j]){
        let temp = lotto[i];
        lotto[i] = lotto[j];
        lotto[j] = temp;
      }
    }
  }
  function n1(){
    box1.innerText = lotto[5];
    box1.style.opacity = 1;
  }
  function n2(){
      box2.innerText = lotto[4];
      box2.style.opacity = 1;
  }
  function n3(){
      box3.innerText = lotto[3];
      box3.style.opacity = 1;
  }
  function n4(){
      box4.innerText = lotto[2];
      box4.style.opacity = 1;
  }
  function n5(){
    if(box4.style.opacity = 1){
      box5.innerText = lotto[1];
      box5.style.opacity = 1;
    }
  }
  function n6(){
      box6.innerText = lotto[0];
      box6.style.opacity = 1;
  }
  function n7(){
      box7.innerText = lotto[6];
      box7.style.opacity = 1;
  }
  function stop(){
    btnLotto.disabled = false;
  }
  
  btnLotto.disabled = true;
 
  setTimeout(n1, 1000);
  setTimeout(n2, 2000);
  setTimeout(n3, 3000);
  setTimeout(n4, 4000);
  setTimeout(n5, 5000);
  setTimeout(n6, 6000);
  setTimeout(n7, 7000);  
  setTimeout(stop,7500)
}

btnLotto.addEventListener("click",lotto,true);