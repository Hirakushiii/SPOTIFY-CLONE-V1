const urlParams = new URLSearchParams(window.location.search);

const name = urlParams.get("n");
document.querySelector("#exit-tab").addEventListener("click", () => {
    document.location.href = `/app/index.html?n=${name}`;
});

// <----- SEARCH FUNCTION -----> //

let input_search = document.querySelector("#search-input");
const input_btn = document.querySelector("#search-btn");

input_btn.addEventListener("click", async () => {
const apiKey = "https://itunes.apple.com/search?";
    await fetch(`${apiKey}term=${input_search.value}&media=music&&limit=10`)
        .then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
            // response.statusText
        }
        return response.json();
    })
        .then((response) => {
        if (response.resultCount === 0) {
            return (document.querySelector("#container-content").innerHTML = notfound(input_search.value));
        }
            let alldata = response.results;
            let cards = "";
            alldata.forEach((m) => {
            cards += fragment(m);
        });
        document.querySelector("#container-content").innerHTML = cards;
    });
    function musik(){
        return document.querySelectorAll('.play-music');        
    }
    let alldata = musik();
    alldata.forEach(m =>{
        m.addEventListener('click', function(){
            // console.log(this.dataset.bsMusic);
            document.querySelector('.audio-player').setAttribute('src', this.dataset.bsMusic);
        })
    })
});
function fragment(m) {
    return `<div class="col-sm-11 clearfix">
                <p class="text-primary play-music float-end" data-bs-music="${m.previewUrl}" style="cursor: pointer;">
                    <i class="bi bi-play float-end">Play</i>
                </p>
                <i class="bi bi-clock-history float-end px-4"> ${milidetiktodetik(m.trackTimeMillis)}</i>
                <p>
                    ${m.trackCensoredName}
                    <figcaption class="figure-caption">${m.artistName}</figcaption>
                </p>
                <hr>
            </div>`;
}
function audiofragment(a) {
    return `<audio src="${a}"
            class="w-75"
            controls>
        </audio>`;
}
function notfound(s) {
    return `<h1 class="text-center pt-3 text-danger">${s} IS NOT FOUND</h1>`;
}

function milidetiktodetik(milidetik) {
    // Hitung jumlah menit
    let menit = Math.floor(milidetik / (1000 * 60));
    // Hitung sisa detik
    let detik = Math.floor((milidetik % (1000 * 60)) / 1000);
    // Format string menit dan detik
    let stringMenitDetik = `${menit}:${detik.toString().padStart(2, "0")}`;
    // Kembalikan string menit dan detik
    return stringMenitDetik;
}