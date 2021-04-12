var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition();
var textbox=document.getElementById("speechtext");
function photo(){
document.getElementById("speechtext").innerHTML="";
recognition.start();
}
recognition.onresult=function run(event){
console.log(event);
content=event.results[0][0].transcript;
console.log(content);
document.getElementById("speechtext").innerHTML=content;
speak();
Webcam.attach( '#camera' );
setTimeout(function(){
    takeselfie();
    save();
},3000);
}
function speak(){
var synth=window.speechSynthesis;
var speak_data=document.getElementById("speechtext").innerHTML;
var utter=new SpeechSynthesisUtterance(speak_data);
synth.speak(utter);
}
Webcam.set({
    width: 320,
    height: 320,
    image_format: 'png',
    png_quality: 90
  });
  function takeselfie(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img src='"+data_uri+"'id='savethisphoto'>";  
  })
    }
    function save(){
   var link=document.getElementById("link");
   var image=document.getElementById("savethisphoto").src;
  link.href=image;
  link.click();  
  }
  function finsih(){
 window.location="https://forms.gle/dcULjeHuko1h3MSr7";
  }
  

