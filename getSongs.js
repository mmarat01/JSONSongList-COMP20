$.get(
  "https://raw.githubusercontent.com/mmarat01/JSONSongList-COMP20/master/songs.json",
  (data) => {
    // deserialize
    let dataObjects = JSON.parse(data);
    // serialize based on parsed objects to avoid the \n chars
    let dataString = JSON.stringify(dataObjects);
    // print raw
    let output = document.querySelector("#output");
    output.innerHTML = dataString;
    // print songs
    dataObjects.forEach((song) => {
      // output in card shape
      let songCard = document.createElement("div");
      // build
      songCard.className = "song-card";
      songCard.innerHTML = `<p>Title: ${song.Title}</p><p>Artist: ${song.Artist}</p>`;
      songCard.innerHTML += `<p>Genre: ${song.Genre}</p><p>Year: ${song.Year}</p>`;
      // attach to root
      output.appendChild(songCard);
    });
  }
);
