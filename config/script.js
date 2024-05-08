const btn_login = document.querySelectorAll('.gotoapp');

btn_login.forEach(e => {
    e.addEventListener('click', ()=>{
        let confirm = prompt('Masukkan namamu :');
        if(confirm.length === 0){
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Kamu belum memasukkan nama!"
                });
        }else{
            async function done(){
                await Swal.fire({
                    title: `Hallo ${confirm}!`,
                    text: "Selamat mencoba websiteku!",
                    icon: "success"
                });
                document.location.href = `app/index.html?n=${confirm}`;
            };
            done();
        }
    })
});