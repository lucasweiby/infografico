$(document).ready(function () {
    window.sr = ScrollReveal()

    sr.reveal('.info-title', {
      duration: 1000,
      distance: '150%',
	    origin: 'top',
      reset: true
    })

    sr.reveal('.input-name', {
      delay: 500,
      duration: 500,
      distance: '150%',
	    origin: 'bottom',
      reset: true
    })

    sr.reveal('.submit', {
      delay: 700,
      duration: 500,
      distance: '150%',
	    origin: 'bottom',
      reset: true
    })
});
