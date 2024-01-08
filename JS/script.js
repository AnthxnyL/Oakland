// DROPDOWN MENU

var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.dropdown-menu'),
			arrow = button.querySelector('i.icon-arrow');

	button.onclick = function(event) {
		if(!menu.hasClass('show')) {
			menu.classList.add('show');
			menu.classList.remove('hide');
			arrow.classList.add('open');
			arrow.classList.remove('close');
			event.preventDefault();
		}
		else {
			menu.classList.remove('show');
			menu.classList.add('hide');
			arrow.classList.remove('open');
			arrow.classList.add('close');
			event.preventDefault();
		}
	};
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};


// FILTER

window.onload = () => {
	let filters = document.querySelectorAll('#filters div');

	for(let filter of filters) {
		filter.addEventListener('click', function(){
			let tag = this.id;

			for(let filter of filters) {
				if(filter.classList.contains('active')) {
					filter.classList.remove('active');
				}

				let filter_onclick = document.getElementById(tag);
				filter_onclick.classList.add('active');

			}


			let images = document.querySelectorAll('#gallery div');

			for(let image of images) {
				image.classList.replace("active", "inactive");

				if(tag in image.dataset || tag == "all") {
					image.classList.replace("inactive", "active");

					
				}

			}
		});
	}
	
}

// HAMBURGER MENU

hamburger = document.querySelector(".hamburger");
            hamburger.onclick = function() {
                navBar = document.querySelector(".header__nav");
                navBar.classList.toggle("active");
            }