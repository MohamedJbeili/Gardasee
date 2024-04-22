window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    var tag1=document.getElementsByClassName("tag1"),
    radtoure1 = document.getElementsByClassName("radtoure1"),
    info = document.getElementsByClassName("info");
    console.log(tag1[0]);
    console.log(radtoure1[0]);

    tag1[0].addEventListener ("click",function() {
        console.log(radtoure1[0]);
        radtoure1[0].style.display="flex";
        info[0].style.display="none";
       
        
    });



    var tag2 = document.getElementsByClassName("tag2"),
    radtoure2 = document.getElementsByClassName("radtoure2");
   tag2[0].addEventListener ("click",function() {
       
        radtoure2[0].style.display="flex";
        info[0].style.display="none";
       
    });

    var tag3 =document.getElementsByClassName("tag3"),
    radtoure3 = document.getElementsByClassName("radtoure3");
   tag3[0].addEventListener ("click",function() {
       
        radtoure3[0].style.display="flex";
        info[0].style.display="none";
       
    });

    var tag4 = document.getElementsByClassName("tag4"),
    radtoure4 = document.getElementsByClassName("radtoure4");
   tag4[0].addEventListener ("click",function() {
       
        radtoure4[0].style.display="flex";
        info[0].style.display="none";
       
    });

    var tag5 = document.getElementsByClassName("tag5"),
    radtoure5 = document.getElementsByClassName("radtoure5");
   tag5[0].addEventListener ("click",function() {
       
        radtoure5[0].style.display="flex";
        info[0].style.display="none";
       
    });
    var bar = document.getElementsByClassName("bar"),
    nav = document.getElementsByClassName("hauptNav");
    bar[0].addEventListener ("click",function() {
       if(nav[0].style.display=="block"){
        nav[0].style.display="none";} 
        else{nav[0].style.display="block";}
        
       
    });





  });
  