function showMenu(id){
	if(document.getElementById(id).style.display == 'block'){
		document.getElementById(id).style.display = 'none'
	}else{
		document.getElementById(id).style.display = 'block'
	}
}

function showMobileMenu(){
	if(document.getElementById('mobile-menu').style.height == '0px' || document.getElementById('mobile-menu').style.height == 0){
		document.getElementById('mobile-menu').style.height = '120px'
	}else{
		document.getElementById('mobile-menu').style.height = '0px'
	}
}