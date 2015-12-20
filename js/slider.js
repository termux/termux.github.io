window.addEventListener("load", function() {
	'use strict';
	var delayBetweenSlides = 6000;

	window.setTimeout(function() {
		var images = document.querySelectorAll('[data-sliderimages]');
		for (var i = 0; i < images.length; i++) {
			(function(img, context) {
				var dataSliderImages = img.getAttribute('data-sliderimages').split(',');
				dataSliderImages.push(img.src); // Add initial image
				img.addEventListener("transitionend", function() {
					if (context.visible) {
						setTimeout(function() {
							img.classList.add('fade-out');
							img.classList.remove('fade-in');
						}, delayBetweenSlides);
					} else {
						// Change image, which will trigger 'load' event:
						img.src = dataSliderImages[context.count].trim();
						context.count = (context.count + 1) % dataSliderImages.length;
					}
					context.visible = !context.visible;
				}, false);
				img.addEventListener('load', function() {
					// Now that the new image has loaded we fade it in.
					context.visible = true;
					img.classList.remove('fade-out');
					img.classList.add('fade-in');
				}, false);
				img.classList.add('fade-out');
			})(images[i], { count: 0, visible:false});
		}
	}, delayBetweenSlides);
}, false);
