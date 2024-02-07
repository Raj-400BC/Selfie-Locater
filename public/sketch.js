function setup() {
  noCanvas();
  const video = createCapture(VIDEO);
  video.size(160, 120);

  const button = document.getElementById("submit");
  button.addEventListener("click", async (event) => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      let CurrentDate = new Date();
      const mood = document.getElementById("mood").value;
      document.getElementById("latitude").textContent = latitude;
      document.getElementById("longitude").textContent = longitude;
      document.getElementById("timestamp").textContent = CurrentDate;

      video.loadPixels();
      const image64 = video.canvas.toDataURL();
      const data = { latitude, longitude, mood, CurrentDate, image64 };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const response = await fetch("/api", options);
      const json = await response.json();
      console.log(json);
    });
  });
}
