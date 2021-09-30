Webcam.set({

    width:350,
    height:350,
    image_format:'png',
    png_quality:100,

    constraints:{facingMode:'environment'}
    
})
Webcam.attach("#camera")


function take_picture(){

    Webcam.snap(function (take_image){
    
        document.getElementById("result").innerHTML=`<img id =captured_image src=${take_image}> `
    })
        
    }
    
    console.log("ml5 version" ,ml5.version)
    
    storage = ml5.imageClassifier('MobileNet' ,modelLoaded)
    
    function modelLoaded(){
        
        console.log("Model Has Been Loaded Sucsessfuly")
        
    
    }
    
    function identify(){
    img = document.getElementById("captured_image")
    storage.classify(img, getResult)
        
    }
    
    function  getResult(error,result){
    
        if(error){
    
            console.error(error)
        }
    
        else{
    
            console.log(result);
            document.getElementById("object_name").innerHTML = result[0].label
    
        }
       
    }