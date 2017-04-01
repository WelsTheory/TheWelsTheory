
	var consulta = window.matchMedia('(max-width: 650px)');
	consulta.addListener(mediaQuery);

	var $burgerButton = document.getElementById('burger-button');
	var $menu = document.getElementById('menu');

	function toggleMenu(){
		$menu.classList.toggle('active')
	};

	function showMenu(){
		$menu.classList.add('active');
	};

	function hideMenu(){
		$menu.classList.remove('active');
	};

	function mediaQuery(){
		if (consulta.matches) {
			console.log('se cumplio la condición');
			$burgerButton.addEventListener('touchstart',toggleMenu);
		} 
		else{
			console.log('no se cumplio la condición');
			$burgerButton.removeEventListener('touchstart',toggleMenu);	
		}
	}
	mediaQuery();
	//Gestos Touch
	var $body = document.body;

	var gestos = new Hammer($body);
		gestos.on('swipeleft', hideMenu);
		gestos.on('swiperight', showMenu);

	// Lazy loading
		var bLazy = new Blazy({
    		selector: 'img'// options
		});

	// ME GUSTA 
	(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.8";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
	//Comentarios
	(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.8";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
	//Twitter
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
	// GOOGLE FONTS
	WebFont.load({

	    google: {

	      families: ['Kalam','Roboto Condensed']

	    }

	  });