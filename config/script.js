const btn_login = document.querySelectorAll('.gotoapp');

btn_login.forEach(e => {
    e.addEventListener('click', ()=>{
        let confirm = prompt('Masukkan namamu :');
        if(confirm.length === 0){
            return alert('Namamu kosong wak!');
        }else{
            document.location.href = `app/index.html?n=${confirm}&&auth=true`;
        }
    })
});