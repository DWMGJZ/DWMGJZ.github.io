    // onscroll:滚动事件
    window.onscroll=()=>{
        var st=document.documentElement.scrollTop||document.scrollTop
        console.log(st);
        if(st>6){
           ad.style.display="block";
        }
        else{
           ad.style.display="none";
        }
     }