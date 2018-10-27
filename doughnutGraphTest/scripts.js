//Fetch my canvas
var myCanvas = document.getElementById('myChart').getContext('2d');

//declare the rgb values of red, green and blue in chart colors
window.chartColors = {
  red: 'rgb(204, 0, 0)',
  green: 'rgb(41, 163, 41)',
  blue: 'rgb(0, 0, 255)',
};

//create chart
var myDoughnutChart = new Chart(myCanvas, {
  // The type of chart to create. Doughnut this case
  type: 'doughnut',

  // The data for our dataset
  data: {
    //our labels
    labels: ["Basset", "Pioneer", "Dalton Voigt"],
    //data sets. Usually only one dataset in a dougnut, or else they become super weird. Test it if you want
    datasets: [
      //first (and only) dataset
      {
        //data values assigned in order of labels
        data: [3, 10, 5],
        //data colors assignedin order of labels
        backgroundColor: [
          window.chartColors.red,
          window.chartColors.green,
          window.chartColors.blue,
        ],
      }
      //end of data set
    ]
  },

  // Configuration options go here
  options: {
    //Allow it to change its size (in style.css)
    maintainAspectRatio: false,
  }
});
