Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function picture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="train" src="'+data_uri+'"/>';
    });
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/8E6Xsizro/',modelLoaded);
function modelLoaded(){
    console.log("Model is Loaded");
}