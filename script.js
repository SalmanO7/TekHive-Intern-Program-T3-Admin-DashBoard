let toggle = document.querySelector(".toggle");
let nav = document.querySelector(".navbar");
let main = document.querySelector(".main");

toggle.onclick = () => {
  nav.classList.toggle("active");
  main.classList.toggle("active");
};

const ctx = document.getElementById("myChart").getContext("2d");
const earning = document.getElementById("earning").getContext("2d");
new Chart(ctx, {
  type: "polarArea",
  data: {
    labels: ["Deliverd", "Return", "Pending", "In prograss"],
    datasets: [
      {
        label: "Details",
        data: [2000, 300, 1500, 1000],
        backgroundColor: [
          "rgba(255, 99, 200, 1)",
          "rgba(54, 162, 235, 2)",
          "rgba(255, 206, 86, 2)",
          "rgba(75, 192, 192, 2)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

var myChart = new Chart(earning, {
  type: "bar",
  data: {
    labels: ["asd", "asd", "asd", "asd", "asd", "asd", "as"],
    datasets: [
      {
        label: "earning",
        data: ["12", "12", "123"],
        backgroundColor: [
          "rgba(255, 99, 200, 1)",
          "rgba(54, 162, 235, 2)",
          "rgba(255, 206, 86, 2)",
          "rgba(75, 192, 192, 2)",
        ],
      }
    ],
  },
  options: {
    responsive: true,
  },
});
