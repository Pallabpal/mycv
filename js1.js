// -----------skills-progress-animation-------------------------
var progressbar =document.querySelectorAll('.skill-progress > div');
var skillconatiner= document.getElementById('skills-container');

window.addEventListener('scroll', checkscroll);
var animationdone=false;
function initialbars(){
        for(let bar of progressbar)
        bar.style.width=0+"%";
}
initialbars();
function fillbars(){
       
        for(let bar of progressbar)
        {
                let targetwidth=bar.getAttribute('data-bar-width');
                let currentwidth=0;
                let interval=setInterval(function(){
                   if(currentwidth>targetwidth){
                   clearInterval(interval);
                   return;
                   }
                   currentwidth++;
                   bar.style.width=currentwidth+"%";
                }, 5)
        }
}

function checkscroll(){
        var cd= skillconatiner.getBoundingClientRect();
        
        if(!animationdone && cd.top<=window.innerHeight){
                animationdone=true;
                console.log("visible");
                 fillbars();
        }
        else if(cd.top>window.innerHeight){
             animationdone=false;
             initialbars();
        }
}
// ------------------float-effect-----------------------------

window.addEventListener('scroll', reveal);
function reveal(){
    var  reveals=document.querySelectorAll('.reveal');
    
   
    for(let i=0; i<reveals.length;i++){
        var target=reveals[i].getBoundingClientRect().top;
        var windowheight=window.innerHeight;
    if(target<=windowheight-150 ){
        console.log("float");
        reveals[i].classList.add("start-float");
    }
    else{
        reveals[i].classList.remove("start-float")
        return;
    }

}
    
}
// -------------------------typewriteEffect-----------------------------
const arr=["hank you for visiting"];
let target= document.querySelector(".copyright p span");
let targetWord=0;
let targetchar=0;
function typeeffect(){
   if(targetWord <arr.length){
   
    //console.log(newWord);
   
    setTimeout(()=>{
      if(targetchar<arr[targetWord].length){
        targetchar=targetchar+1;
  
        let newWord= arr[targetWord].substr(0, targetchar);
        target.innerHTML=newWord;
        target.classList.add("stop-blinking");
         typeeffect();
      }
      else{
         target.classList.remove("stop-blinking");
         clearEffect();
      }
    }, 200)
   }
  
   
}
typeeffect();
function clearEffect(){
   
    setTimeout(()=>{
      if(targetchar>0){
        targetchar--;
        let newWord= arr[targetWord].substr(0, targetchar);
        target.innerHTML=newWord;
        target.classList.add("stop-blinking");
        clearEffect();
      }
      else{
        target.classList.remove("stop-blinking");
        targetWord++;
        targetWord=targetWord%arr.length;
        typeeffect();
      }
    }, 100)
}
let seeMoreHide = false;

function seeMore() {
 
  if (seeMoreHide === false) {
    let arr=document.querySelectorAll(".seemore.hide");
    for(let i=0; i<arr.length; i++){
      arr[i].classList.remove("hide");
    }
    document.querySelector("#portfolio .container .btn").innerHTML = "Show less";
    arr[arr.length-1].setAttribute("id","valll")
    document.querySelector("#portfolio .container .btn").href="#valll";
    seeMoreHide = true;
  } else {
    let arr=document.querySelectorAll(".seemore");
    for(let i=0; i<arr.length; i++){
      arr[i].classList.add("hide");;
    }
    document.querySelector("#portfolio .container .btn").href="";
    document.querySelector("#portfolio .container .btn").href="#portfolio";
    document.querySelector("#portfolio .container .btn").innerHTML = "Show More";
    seeMoreHide = false;
  }
}
