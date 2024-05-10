let input_search = document.querySelector('#search-input');
input_search.addEventListener('input', function(){
    const apiKey = 'https://itunes.apple.com/search?';
    fetch(`${apiKey}term=${this.value}&media=music&limit=10`)
    .then(response => {
        if(!response.ok){
            throw new Error(response.statusText);
            // response.statusText
        }
        return response.json();
    })
    .then(response => {
        let alldata = response.results;
        alldata.forEach(m => {
            document.querySelector('#container-content').innerHTML += fragment(m);
        });
    }
);
})
function fragment(m){
    return `<div class="col-sm-11 clearfix">
                <a href="">
                    <i class="bi bi-play float-end">Play</i>
                </a>
                <i class="bi bi-clock-history float-end px-4">${parseFloat(m.trackTimeMillis / 60)}</i>
                <p>
                    ${m.trackCensoredName}
                    <figcaption class="figure-caption">${m.artistName}</figcaption>
                </p>
                <hr>
            </div>`;
}
function changetime(m){
    let timestamp = m; // Angka yang ingin diubah menjadi waktu
    let date = new Date();

    date.setTime(timestamp * 1000);
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'Asia/Jakarta' // Sesuaikan dengan zona waktu Anda
    };
}