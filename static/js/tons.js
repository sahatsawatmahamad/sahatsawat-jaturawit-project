
document.addEventListener("keydown", function (e) {
  var instrument = document.getElementById("sound").value;
  if (instrument == "Synth" || instrument == "sound" ) {
    var synth = new Tone.Synth().toDestination();
  }else if (instrument == "AMSynth"){
    var synth = new Tone.AMSynth().toDestination();
    synth.volume.value = 5;
  }else if (instrument == "DuoSynth"){
    var synth = new Tone.DuoSynth().toDestination();
    synth.volume.value = -10;
  }else if (instrument == "FMSynth"){
    var synth = new Tone.FMSynth().toDestination();
    synth.volume.value = 5;
  }else if (instrument == "MembraneSynth"){
    var synth = new Tone.MembraneSynth().toDestination();
    synth.volume.value = 0;
  }
  if (e.keyCode == 81) {
    synth.triggerAttackRelease("C3", "16n");
    document.getElementById("C1").style.opacity = 1;
    document.getElementById("C1").classList.add("tran");
    
  } else if (e.keyCode == 87) {
    synth.triggerAttackRelease("D3", "16n");
    document.getElementById("D1").style.opacity = 1;
    document.getElementById("D1").classList.add("tran");
    
  } else if (e.keyCode == 69) {
    synth.triggerAttackRelease("E3", "16n");
    document.getElementById("E1").style.opacity = 1;
    document.getElementById("E1").classList.add("tran");
    
  } else if (e.keyCode == 82) {
    synth.triggerAttackRelease("F3", "16n");
    document.getElementById("F1").style.opacity = 1;
    document.getElementById("F1").classList.add("tran");
    
  } else if (e.keyCode == 84) {
    synth.triggerAttackRelease("G3", "16n");
    document.getElementById("G1").style.opacity = 1;
    document.getElementById("G1").classList.add("tran");
    
  } else if (e.keyCode == 89) {
    synth.triggerAttackRelease("A3", "16n");
    document.getElementById("A1").style.opacity = 1;
    document.getElementById("A1").classList.add("tran");
    
  } else if (e.keyCode == 85) {
    synth.triggerAttackRelease("B3", "16n");
    document.getElementById("B1").style.opacity = 1;
    document.getElementById("B1").classList.add("tran");
    
  } else if (e.keyCode == 68) {
    synth.triggerAttackRelease("C4", "16n");
    document.getElementById("C2").style.opacity = 1;
    document.getElementById("C2").classList.add("tran");
    
  } else if (e.keyCode == 70) {
    synth.triggerAttackRelease("D4", "16n");
    document.getElementById("D2").style.opacity = 1;
    document.getElementById("D2").classList.add("tran");
    
  } else if (e.keyCode == 71) {
    synth.triggerAttackRelease("E4", "16n");
    document.getElementById("E2").style.opacity = 1;
    document.getElementById("E2").classList.add("tran");
    
  } else if (e.keyCode == 72) {
    synth.triggerAttackRelease("F4", "16n");
    document.getElementById("F2").style.opacity = 1;
    document.getElementById("F2").classList.add("tran");
    
  } else if (e.keyCode == 74) {
    synth.triggerAttackRelease("G4", "16n");
    document.getElementById("G2").style.opacity = 1;
    document.getElementById("G2").classList.add("tran");
    
  } else if (e.keyCode == 75) {
    synth.triggerAttackRelease("A4", "16n");;
    document.getElementById("A2").style.opacity = 1;
    document.getElementById("A2").classList.add("tran");
    
  } else if (e.keyCode == 76) {
    synth.triggerAttackRelease("B4", "16n");
    document.getElementById("B2").style.opacity = 1;
    document.getElementById("B2").classList.add("tran");
    
  } else if (e.keyCode == 77) {
    synth.triggerAttackRelease("C5", "16n");
    document.getElementById("C3").style.opacity = 1;
    document.getElementById("C3").classList.add("tran");
    
  }
});
document.addEventListener("keyup", function (e) {
  if (e.keyCode == 81) {
    document.getElementById("C1").style.opacity = 0.6;
    document.getElementById("C1").classList.remove("tran");
  } else if (e.keyCode == 87) {
    document.getElementById("D1").style.opacity = 0.6;
    document.getElementById("D1").classList.remove("tran");
  } else if (e.keyCode == 69) {
    document.getElementById("E1").style.opacity = 0.6;
    document.getElementById("E1").classList.remove("tran");
  } else if (e.keyCode == 82) {
    document.getElementById("F1").style.opacity = 0.6;
    document.getElementById("F1").classList.remove("tran");
  } else if (e.keyCode == 84) {
    document.getElementById("G1").style.opacity = 0.6;
    document.getElementById("G1").classList.remove("tran");
  } else if (e.keyCode == 89) {
    document.getElementById("A1").style.opacity = 0.6;
    document.getElementById("A1").classList.remove("tran");
  } else if (e.keyCode == 85) {
    document.getElementById("B1").style.opacity = 0.6;
    document.getElementById("B1").classList.remove("tran");
  } else if (e.keyCode == 68) {
    document.getElementById("C2").style.opacity = 0.6;
    document.getElementById("C2").classList.remove("tran");
  } else if (e.keyCode == 70) {
    document.getElementById("D2").style.opacity = 0.6;
    document.getElementById("D2").classList.remove("tran");
  } else if (e.keyCode == 71) {
    document.getElementById("E2").style.opacity = 0.6;
    document.getElementById("E2").classList.remove("tran");
  } else if (e.keyCode == 72) {
    document.getElementById("F2").style.opacity = 0.6;
    document.getElementById("F2").classList.remove("tran");
  } else if (e.keyCode == 74) {
    document.getElementById("G2").style.opacity = 0.6;
    document.getElementById("G2").classList.remove("tran");
  } else if (e.keyCode == 75) {
    document.getElementById("A2").style.opacity = 0.6;
    document.getElementById("A2").classList.remove("tran");
  } else if (e.keyCode == 76) {
    document.getElementById("B2").style.opacity = 0.6;
    document.getElementById("B2").classList.remove("tran");
  } else if (e.keyCode == 77) {
    document.getElementById("C3").style.opacity = 0.6;
    document.getElementById("C3").classList.remove("tran");
  }
});
const keyList = ["C1", "D1", "E1", "F1", "G1", "A1", "B1", "C2", "D2", "E2", "F2", "G2", "A2", "B2","C3"];
keyList.forEach((key) => {
  var canvas = document.getElementById(key);
  var ctx = canvas.getContext("2d");
  ctx.font = "30px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText(key, canvas.width / 2, canvas.height / 2);
});
const keyCode = ["Q", "W", "E", "R", "T", "Y", "U", "D", "F", "G","H","J","K","L","M"];
keyCode.forEach((keytype) => {
  var canvastype = document.getElementById(keytype);
  var ctxtype = canvastype.getContext("2d");
  ctxtype.font = "30px Arial";
  ctxtype.fillStyle = "white";
  ctxtype.textAlign = "center";
  ctxtype.fillText(keytype, canvastype.width / 2, canvastype.height / 2);
});
function setting(){
  document.getElementById("settingform").style.width = "180px";
  document.getElementById("settingform").style.height = "180px";
}
Howtoplay();
function Howtoplay() {
  Swal.fire({
    title: "<i>HOW TO PLAY</i>",
    html: "1.Play with <b>KeyType</b>.<br><br>2.You can change <b>sound.</b><br><br>3.Let's play!!!",
    confirmButtonText: "<u>got it.</u>",
  });
}
