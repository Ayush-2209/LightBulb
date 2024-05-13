function Bulb(x){
    let pic;
    if(x==0){
        pic= "images/Off.png"
    }else{
        pic="images/On.png" 
    } 
    
    document.getElementById('bulb_image').src=pic;
} 