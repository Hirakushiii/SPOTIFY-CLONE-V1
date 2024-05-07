const urlParams = new URLSearchParams(window.location.search);

// Access a specific parameter:
const name = urlParams.get('n');
const auth = urlParams.get('auth');
const today = new Date();

const hours = today.getHours();
const sayhello = sayhelloo();
function sayhelloo(){
    if(hours <= 11){
        return 'Pagi';
    }else if(hours >= 11 && hours < 15){
        return 'Siang';
    }else if(hours >=15 && hours <= 19 ){
        return 'Sore'
    }else{
        return 'Malam';
    }
}


document.querySelector('#sayhello').innerHTML = `Selamat ${sayhello} ${name}`;
alert(signin);