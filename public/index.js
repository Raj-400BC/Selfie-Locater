function findMe() {
    navigator.geolocation.getCurrentPosition(async position=> {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const timestamp = position.timestamp;
        let CurrentDate = new Date(timestamp);
        const favAni = document.getElementById('name').value;
        document.getElementById('latitude').textContent = latitude;
        document.getElementById('longitude').textContent = longitude;
        document.getElementById('timestamp').textContent = CurrentDate;
        const data = {
            latitude ,longitude , CurrentDate , favAni
        }
        const options = {
            method : 'POST',
            headers : { 'Content-Type' : 'application/json'
        },
            body : JSON.stringify(data)
        }
        const response = await fetch('/api',options );
            const json = await response.json();
            console.log(json);
            // console.log('data sent')
    });
 };