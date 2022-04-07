      let mySongs = ["/mp3/aishite.mp3", "/mp3/matryoshka.mp3", "/mp3/dekinai.mp3", "/mp3/coinlockerbaby.mp3", ];

         let x = Math.floor(Math.random() * mySongs.length);
  var element = document.getElementById('myAudio');
  var myDiv = document.getElementById('song');

function songChooser(mySongs){
  return mySongs[x];
}

window.addEventListener('load', (event) => {
  let createAudio = `
<audio id="myAudio" autoplay controls>
<source src="${songChooser(mySongs)}">
        `;
    myDiv.innerHTML = createAudio;
});
