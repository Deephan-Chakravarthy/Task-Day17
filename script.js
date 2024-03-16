var res = fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((data1) => bar(data1));

var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";

function bar(data1) {
  console.log(data1);
  for (var i = 0; i < data1.length; i++) {
    var col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `<div class="card text-white bg-dark mb-3" style="max-width: 20rem;">
    <div class="card-header" style="text-align:center" >${data1[i].name.common}</div>
    
    
    <div class="card-body">

    <img src="${data1[i].flags.png}" class="img-fluid img-thumbnail" alt="..."><br><br>
      <div class="card-text">Capital:${data1[i].capital}</div>
      <div class="card-text">Region:${data1[i].continents}</div>
      <div class="card-text">Country code:${data1[i].fifa}</div><br> 
    <button type="button" class="btn btn-outline-secondary" onclick="weather(${data1[i].latlng[0]},${data1[i].latlng[1]})">Click here for weather</button>
    </div>

  </div>`;
    row.append(col);
    container.append(row);
    document.body.append(container);
  }
}

function weather(lat, lng) {
  var final_res = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9c78fb31fa8d64ece58de68e24053e7e`
  )
    .then((data2) => data2.json())
    .then((data3) => console.log(data3));
}
