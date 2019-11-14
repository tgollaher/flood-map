function BuildChart(labels, values, chartTitle) {
    var data = {
        labels: labels,
        datasets: [{
            label: chartTitle, // Name the series
            data: values,
            backgroundColor: 'rgb(54, 162, 235)'
        }],
    };

    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: data,
        options: {
            responsive: true, 
            maintainAspectRatio: false, 
            scales: {
                xAxes: [{
                        scaleLabel: {
                        display: true,
                        labelString: 'Precipitation(in)'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Date'
                    }
                }]
            },
        }
    });

    return myChart;
}

// Ref - https://github.com/jesseokeya/Forbes400  / https://forbes400.herokuapp.com/

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var json = JSON.parse(this.response);
      

var labels = json.map(function (e) {
    return e.date;
});
      

var values = json.map(function (e) {
    return (e.precip); 
});

BuildChart(labels, values, "Precipitation data 2018");
    }
  };
  xhttp.open("GET", "https://api.myjson.com/bins/zu5bi", false);
  xhttp.send();
