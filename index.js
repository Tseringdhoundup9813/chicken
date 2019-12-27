
const container2 =document.querySelector('.container2');
const photo = document.querySelector('.photo');
const content = document.querySelector('.content');

window.addEventListener('scroll',function(){
	const scrollTop = window.scrollY;
	if(scrollTop + window.innerHeight > photo.offsetTop + photo.offsetHeight){

		
		photo.style.transform ="translateX(0px)";
		content.style.transform ="translateX(0px)";
		photo.style.transition ="all 2s";
		content.style.transition ="all 2s";
	}
});
