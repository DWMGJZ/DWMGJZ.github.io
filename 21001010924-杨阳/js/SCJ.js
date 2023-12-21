var main=document.getElementsByClassName("main")[0];
var li=main.querySelectorAll(".top li");
var box=main.querySelectorAll(".box");
console.log(main,li,box);
for(let i=0;i<li.length;i++){
    li[i].onmouseover=()=>{
        for(let j=0;j<li.length;j++){
            li[j].classList.remove("selected");
            box[j].style.display="none";
        }
        li[i].classList.add("selected");
        box[i].style.display="block";
        

    }
}


var swiper = new Swiper(".s1", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    autoplay: {
        delay: 2000,
    },
});


var url=`http://rap2api.taobao.org/app/mock/315422/222`
fetch(url).then(data=>{
    return data.json();
}).then(data=>{
    console.log(data);
    parse(data);
    //自定义的函数，写在外面，参数为json数组
}).catch(e=>{
    console.log(e);
});

function parse(data){
    var clist=document.querySelector(".clist");
    for(let v of data){
        let li=document.createElement("li");
        li.innerHTML=`
            <img src="./images/${v.img}">
            <div class="txt">
                <h3>${v.title}</h3>
                <span class="author">${v.author}</span>
                <span class="time">${v.time}</span> 
            </div>
        `;
        clist.appendChild(li);
    }    
}

var url2 = `http://rap2api.taobao.org/app/mock/315422/444`;
fetch(url2)
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data);
    parse2(data);
  })
  .catch((e) => {
    console.log(e);
  });

function parse2(data) {
  var dlist = document.querySelector(".dlist");
  for (let v of data) {
    let li = document.createElement("li");
    li.innerHTML = `
                  <img src="./images/${v.img}">
                   <h3>${v.title}</h3>
                   <p>${v.author}</p>
      `
    dlist.appendChild(li);
  }
}
