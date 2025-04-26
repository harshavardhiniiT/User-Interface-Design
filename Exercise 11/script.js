// Data for the inventory
const inventoryData = {
    labels: ['Electronics', 'Clothing', 'Home Appliances', 'Books', 'Toys'],
    datasets: [
      {
        label: 'Items in Stock',
        data: [200, 150, 100, 80, 50],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF'
        ],
      }
    ]
  };
  
  // Creating the Pie Chart
  const ctxPie = document.getElementById('pieChart').getContext('2d');
  const pieChart = new Chart(ctxPie, {
    type: 'pie',
    data: inventoryData,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Inventory Distribution'
        }
      }
    }
  });
  
  // Creating the Bar Chart
  const ctxBar = document.getElementById('barChart').getContext('2d');
  const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: inventoryData,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Items in Stock by Category'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  