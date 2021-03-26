// for later access on filter
let dataObjects = null;

// initial set up
$(document).ready(() => {
  $.get(
    "https://raw.githubusercontent.com/mmarat01/JSONSongList-COMP20/master/songs.json",
    (data) => {
      // deserialize
      dataObjects = JSON.parse(data);
      // serialize based on parsed objects to avoid the \n chars
      let dataString = JSON.stringify(dataObjects);
      // print raw
      const rawOutput = document.querySelector("#raw-output");
      rawOutput.innerHTML = dataString;
      // print songs
      let cardOutput = document.querySelector("#card-output");
      dataObjects.forEach((song) => {
        // output in card shape
        let songCard = document.createElement("div");
        // build
        songCard.className = "song-card";
        songCard.innerHTML = `<p>Title: ${song.Title}</p><p>Artist: ${song.Artist}</p>`;
        songCard.innerHTML += `<p>Genre: ${song.Genre}</p><p>Year: ${song.Year}</p>`;
        // attach to root
        cardOutput.appendChild(songCard);
      });
    }
  );
});

/* filter 
   *had to be outside document.ready bc if declared inside
   it would be wrapped in anonymous event handler and its scope 
   would end with the function */
const filter = (e) => {
  // get selected
  const genre = $("#genres").val();
  if (genre == null) return false;
  // get output area and reset
  const cardOutput = document.querySelector("#card-output");
  cardOutput.innerHTML = "";
  // filter
  dataObjects.forEach((song) => {
    // filtered or All
    if (song.Genre == genre || genre == "All") {
      // output in card shape
      let songCard = document.createElement("div");
      // build
      songCard.className = "song-card";
      songCard.innerHTML = `<p>Title: ${song.Title}</p><p>Artist: ${song.Artist}</p>`;
      songCard.innerHTML += `<p>Genre: ${song.Genre}</p><p>Year: ${song.Year}</p>`;
      // attach to root
      cardOutput.appendChild(songCard);
    }
  });
};
