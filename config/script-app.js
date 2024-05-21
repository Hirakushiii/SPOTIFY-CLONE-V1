const urlParams = new URLSearchParams(window.location.search);

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
document.querySelector('#change-tab').addEventListener('click', ()=>{
    document.location.href = `/app/search.html?n=${name}`;
})
document.querySelector('#logout').addEventListener('click', ()=>{
    let auth = confirm('Yakinn mau logout?....');
    if (auth === false) {
        return false
    } else {
        async function klik(){
            await Swal.fire({
                    title: "Log-out Berhasil!",
                    text: `Dateng lagi yaa ${name}...`,
                    icon: "success"
                });
                document.location.href = `/index.html`;
            };
        return klik();
    }
})

document.querySelector('#sayhello').innerHTML = `Selamat ${sayhello} ${name}`;

const apiKey = 'https://itunes.apple.com/search?';

fetch(`${apiKey}term=m&country=us&media=music&limit=10`)
    .then(response => {
        if(!response.ok){
            throw new Error(response.statusText);
            // response.statusText
        }
        return response.json();
    })
    .then(response => {
        document.querySelectorAll('.slider-1').forEach(e => {
            e.classList.remove('placeholder');
        });
        let alldata = response.results;
        alldata.forEach(m => {
            document.querySelector('.slider-1').innerHTML += Fragment(m);
        });
    }
);
fetch(`${apiKey}term=a&country=kr&media=music&limit=10`)
    .then(response => response.json())
    .then(data => {
        document.querySelectorAll('.slider-2').forEach(e => {
            e.classList.remove('placeholder');
        });
        let alldata = data.results;
        alldata.forEach(m => {
            document.querySelector('.slider-2').innerHTML += Fragment2(m);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    }
);

function Fragment(m){
    return `<div class="card">
                <img src="${m.artworkUrl100}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title" style="white-space: wrap; font-size: 1rem;">${m.trackName}</h5>
                    <p class="card-text" style="white-space: wrap; font-size: .6rem;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. At maiores, quaerat magnam, odio, modi eum aliquam vel ea ex iure corporis ipsum tempora ab neque!</p>
                    <a href="${m.previewUrl}" class="btn btn-primary w-100" target="_blank">Play & Download</a>
                </div>
                <div class="card-footer position-absolute bottom-0 end-0 start-0 text-center">
                    <small class="text-body-secondary">Released ${m.releaseDate.slice(0, 10)}</small>
                </div>
            </div>`
}
function Fragment2(mm){
    return `<div class="card">
                <img src="${mm.artworkUrl100}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title" style="white-space: wrap; font-size: 1rem;">${mm.trackName}</h5>
                    <p class="card-text" style="white-space: wrap; font-size: .6rem;">Lorem, ipsum dolor sit amet consectetur adipisicing elit. At maiores, quaerat magnam, odio, modi eum aliquam vel ea ex iure corporis ipsum tempora ab neque!</p>
                    <a href="${mm.previewUrl}" class="btn btn-primary w-100" target="_blank">Play & Download</a>
                </div>
                <div class="card-footer position-absolute bottom-0 end-0 start-0 text-center">
                    <small class="text-body-secondary">Released ${mm.releaseDate.slice(0, 10)}</small>
                </div>
            </div>`
}

// NAVBAR FUNCTION

document.querySelector('#nav-to-home').addEventListener('click', ()=>{
    document.location.href = `../app/index.html?n=${name}`
});
document.querySelector('#nav-to-search').addEventListener('click', ()=>{
    document.location.href = `../app/search.html?n=${name}`
});
document.querySelector('#nav-to-profile').addEventListener('click', ()=>{
    document.location.href = `../app/profile.html?n=${name}`
});