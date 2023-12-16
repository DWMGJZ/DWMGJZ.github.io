
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
	