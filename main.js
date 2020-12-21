prediction_1="";
prediction_2="";
Webcam.set({
    width:350, height:300, image_format:'png', png_quality:99, dest_width:345,dest_height:295
});
camera=document.getElementById("camera");
Webcam.attach(camera);
function takepicture() {
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_url+"'>";
    });
}
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/YJ6dCV5le/model.json",modelloaded);
function modelloaded(){
    console.log("model loaded");
};
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The first prediction is"+prediction_1;
    speak_data_2="The second prediction is"+prediction_2;
    var utter=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utter);
}
speak();