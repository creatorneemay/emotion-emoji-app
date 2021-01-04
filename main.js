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
    speak_data_1="The first prediction is "+prediction_1;
    speak_data_2="The second prediction is "+prediction_2;
    var utter=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utter);
}
function check() {
    img=document.getElementById("captured_image");
    classifier.classify(img,gotresult);
}
function gotresult(error, results) {
    if (error){
        console.log(error);
    }
    else {
        console.log(results);
        prediction_1=results[0].label;
        console.log(prediction_1);
        prediction_2=results[1].label;
        speak();
        document.getElementById("result_emotion_name").innerHTML=prediction_1;
        document.getElementById("result_emotion_name_2").innerHTML=prediction_2;
        if (prediction_1=="happy"){
            document.getElementById("update_emoji").innerHTML= "&#128522"
        }
        if (prediction_1=="sad"){
            document.getElementById("update_emoji").innerHTML= "&#128532;"
        }
        if (prediction_1=="angry"){
            document.getElementById("update_emoji").innerHTML= "&#128545;"
        }
        if (prediction_1=="crying"){
            document.getElementById("update_emoji").innerHTML= "&#128546;"
        }
        if (prediction_2=="happy"){
            document.getElementById("update_emoji_2").innerHTML= "&#128522"
        }
        if (prediction_2=="sad"){
            document.getElementById("update_emoji_2").innerHTML= "&#128532;"
        }
        if (prediction_2=="angry"){
            document.getElementById("update_emoji_2").innerHTML= "&#128545;"
        }
        if (prediction_2=="crying"){
            document.getElementById("update_emoji_2").innerHTML= "&#128546;"
        }
    }
}
