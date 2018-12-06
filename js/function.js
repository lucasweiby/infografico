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

    sr.reveal('.info-quest', {
      duration: 1000,
      distance: '150%',
      origin: 'top',
      reset: true
    })

    sr.reveal('.label-answer', {
      delay: 500,
      reset: true,
      interval: 500
    })

    sr.reveal('.info-result', {
      origin: 'bottom',
      distance: '100%',
      reset: true
    })

    sr.reveal('.feedback', {
      origin: 'bottom',
      distance: '100%',
      reset: true,
      delay: 500
    })

    sr.reveal('.icon-result', {
      origin: 'top',
      distance: '200%',
      reset: true,
      delay: 800
    })

    sr.reveal('.text', {
      duration: 1000,
      origin: 'left',
      distance: '50%',
      reset: true,
      interval: 500
    })

    sr.reveal('.legend', {
      duration: 1000,
      origin: 'right',
      distance: '50%',
      reset: true,
      delay: 500
    })
    sr.reveal('.revela', {
      duration: 1000,
      origin: 'bottom',
      distance: '50%',
      reset: true,
      delay: 1000
    })
});





//chart

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});