// slider

$(function(){
	$('.slider').slick({
		arrows: false,
		fade: true,
		autoplay: 3000,
		dots: true
	});
	
	$('.burger').on('click', function(){
		$('.menu').addClass('active');
	});

	$('.close-btn').on('click', function(){
		$('.menu').removeClass('active');
	});
});

// dark-theme

const themeBtn = document.querySelector('.switch_3');

function initialState(themeName) {
	localStorage.setItem('theme', themeName);
	document.documentElement.className = themeName;
}

initialState('dark-theme');

function toggleTheme() {
	if (localStorage.getItem('theme') == 'dark-theme') {
		initialState('light-theme');
	} else {
		initialState('dark-theme');
	}
}

themeBtn.addEventListener('click', (e) => {
	toggleTheme();
});


