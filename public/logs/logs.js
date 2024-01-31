getData();

async function getData() {
  const response = await fetch("/api");
  const data = await response.json();

  for (item of data) {
    const root = document.createElement('div');
            const mood = document.createElement('div');
            const geo= document.createElement('div');
            const timestamp = document.createElement('div');
            const image = document.createElement('img');

            mood.textContent = `mood : ${item.mood}`;
            geo.textContent = `${item.latitude} , ${item.longitude}`;
            timestamp.textContent = `${item.CurrentDate}`; 

            image.src = item.image64;
            root.append(mood, geo , timestamp , image);
            document.body.append(root);
  }
  console.log(data);
}