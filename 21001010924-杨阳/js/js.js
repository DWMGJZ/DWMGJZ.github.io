


//tap选项卡
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
//swoper
		var swiper = new Swiper(".s1", {
			scrollbar: {
				el: ".swiper-scrollbar",
				hide: false,
			},
			autoplay: {
				delay: 2000,
			},
		});
	
        var swiper2 = new Swiper(".s2", {
            direction: "vertical",
             autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            }, 
        });
//json解析
var url=`http://rap2api.taobao.org/app/mock/315422/000`;
fetch(url).then(data=>{
    return data.json();
}).then(data=>{
    console.log(data);
    parse(data);
}).catch(e=>{
    console.log(e);
});

function parse(data){
    var alist=document.querySelector(".alist");
    for(let v of data){
        let li=document.createElement("li");
        li.innerHTML=`
            <div class="list">
                <div class="item">
                    <a href="${v.link}">
                        <img src="./images/${v.img}">
                    </a>
                    <h3>${v.title}</h3>
                    <p>${v.author}</p>
                </div>
            </div>
        `;
        alist.appendChild(li);
    }
}

var url2=`http://rap2api.taobao.org/app/mock/315422/111`;
fetch(url2).then(data=>{
    return data.json();
}).then(data=>{
    console.log(data);
    parse2(data);
}).catch(e=>{
    console.log(e);
});

function parse2(data){
    var blist=document.querySelector(".blist");
    for(let v of data){
        let li=document.createElement("li");
        li.innerHTML=`
            <li>
                <img src="./images/${v.img}">
                <p>${v.author}</p>
                <h3>${v.title}</h3>
                <a href="#"> ${v.link}</a>
            </li>
        `;
        blist.appendChild(li);
    }
}

