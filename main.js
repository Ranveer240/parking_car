canvas=document.getElementById('my_canvas');
ctx= canvas.getContext('2d');

car_width=75;
car_height=100;
car_X= 5;
car_Y=225;
car_img="car2.png";
background_img="parkingLot.jpg";

function add() {
	background_img_tag= new Image();
	background_img_tag.onload= uploadbackground;
	background_img_tag.src=background_img;

	greencar_img_tag = new Image();
	greencar_img_tag.onload= upload_car;
	greencar_img_tag.src= car_img;
}

function uploadbackground(){
    ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height);
}

function upload_car(){
    ctx.drawImage(greencar_img_tag,car_X,car_Y,car_width,car_height);
}

window.addEventListener ("keydown",my_keydown);
function my_keydown(e){
key_pressed=e.keyCode;
if(key_pressed=='38'){
    up();
}
if(key_pressed=='40'){
    down();
}
if(key_pressed=='37'){
    left();
}
if(key_pressed=='39'){
    right();
}
}
function up(){
    if(car_Y >= 0)
	{
        car_Y= car_Y - 10;
		uploadbackground();
        upload_car();
    }

}
function down(){
    if(car_Y <= 300)
	{
        car_Y= car_Y + 10;
        uploadbackground();
        upload_car();
    }

}
function right(){
    if(car_X < 700){
        car_X= car_X + 10;
       uploadbackground();
        upload_car();
    }

}
function left(){
    if(car_X > 0){
        car_X= car_X - 10;
		uploadbackground();
        upload_car();
    }

}
