function noteDown(elem) {
  var instrument = document.getElementById("sound").value;
  if (instrument == "Synth" || instrument == "sound") {
    const synth = new Tone.Synth().toDestination();
    var note = elem.dataset.note;
    synth.triggerAttackRelease(note, "16n");
  }else if (instrument == "AMSynth"){
    const synth = new Tone.AMSynth().toDestination();
    synth.volume.value = 5;
    var note = elem.dataset.note;
    synth.triggerAttackRelease(note, "16n");
  }else if (instrument == "DuoSynth"){
    const synth = new Tone.DuoSynth().toDestination();
    synth.volume.value = -10;
    var note = elem.dataset.note;
    synth.triggerAttackRelease(note, "16n");
  }else if (instrument == "FMSynth"){
    const synth = new Tone.FMSynth().toDestination();
    synth.volume.value = 5;
    var note = elem.dataset.note;
    synth.triggerAttackRelease(note, "16n");
  }else if (instrument == "MembraneSynth"){
    const synth = new Tone.MembraneSynth().toDestination();
    synth.volume.value = 0;
    var note = elem.dataset.note;
    synth.triggerAttackRelease(note, "16n");
  }
}
Howtoplay();
function Howtoplay() {
  Swal.fire({
    title: "<i>HOW TO PLAY</i>",
    html: "1.Play with <b>Mouse over</b>.<br><br>2.Setting:<br><br> You can change <b>sound</b> and <b>type of hand</b><br><br>3.Let's play!!!",
    confirmButtonText: "<u>got it.</u>",
  });
}
const keyList = [
  "C1",
  "D1",
  "E1",
  "F1",
  "G1",
  "A1",
  "B1",
  "C2",
  "D2",
  "E2",
  "F2",
  "G2",
  "A2",
  "B2",
  "C3",
];
keyList.forEach((key) => {
  var canvas = document.getElementById(key);
  var ctx = canvas.getContext("2d");
  ctx.font = "30px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText(key, canvas.width / 2, canvas.height / 2);
});
const keyCode = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
];
keyCode.forEach((keytype) => {
  var canvastype = document.getElementById(keytype);
  var ctxtype = canvastype.getContext("2d");
  ctxtype.font = "30px Arial";
  ctxtype.fillStyle = "white";
  ctxtype.textAlign = "center";
  ctxtype.fillText(keytype, canvastype.width / 2, canvastype.height / 2);
});
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
