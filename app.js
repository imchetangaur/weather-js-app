const form = document.querySelector("form");
const search = document.querySelector("#search");
const temp = document.querySelector("#temp");
const sun = document.querySelector("#sun");

const options = {
	method: "GET",
	headers: {
		"X-Api-Key": "OoGkqIzSPIvln2KKuBI8jw==WN0MqeOLPfvSBAVM",
	},
};
const getweather = (city) => {
	const url = `https://api.api-ninjas.com/v1/weather?city=${city}`;
	fetch(url, options)
		.then((res) => res.json())
		.then((res) => {
			showweather(res);
		});
};
const showweather = (res) => {
	var s = new Date(1504095567183).toLocaleTimeString("en-US");

	temp.innerHTML = `
  <div>
      <h2>${res.temp}&#8451;</h2>
      <div class="max_temp">${res.max_temp}&#8451 - ${res.max_temp}&#8451</div>
  </div>

    `;

	sun.innerHTML = `<div>
  <img src="sunrise.png" width="100px" height="" alt="">
  <div class="time">${new Date(res.sunrise * 1000).toLocaleTimeString()}</div>
  </div>
  
  <div>
  <img src="sunset.png" width="100px" height="" alt="">
  <div class="time">${new Date(res.sunset * 1000).toLocaleTimeString()}</div>
  </div>
  `;
};

form.addEventListener("submit", function (event) {
	getweather(search.value);
	event.preventDefault();
});
