var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "REVENUE",
            
            borderColor: '#7ED321',
            data: [0, 10, 5, 2, 20, 30, 45],
        },{
            label: "COST",
            
            borderColor: '#D0021B',
            data: [0, 20, 4, 50, 20, 40, 30],
        },{
            label: "INCOME",
            
            borderColor: '#4A90E2',
            data: [0, 40, 30, 20, 40, 10, 20],
        }]
    },

    // Configuration options go here
    options: {}
});