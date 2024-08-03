document.onkeydown = async function(e) {
    player = document.getElementById('player');
    if (e.keyCode == 37) {
        if(getComputedStyle(player).left > '0px'){
            player.style.left = parseInt(getComputedStyle(player).left) - 10 + 'px';
        }
    }
    if (e.keyCode == 39) {
        if(getComputedStyle(player).left.replace("px","") <= window.innerWidth - 100){
            player.style.left = parseInt(getComputedStyle(player).left) + 10 + 'px';
        }
    }
    if (e.keyCode == 38) {
        var salto = true
        if(salto) {
            function salto(){
                player.style.bottom = parseInt(getComputedStyle(player).bottom) + 10 + 'px';
            }
            for (let i = 0; i < 10; i++) {
                await new Promise(resolve => setTimeout(() => {
                    salto();
                    resolve();
                }, 100));
            }
            function bajada(){
                player.style.bottom = parseInt(getComputedStyle(player).bottom) - 10 + 'px';
            }
            for (let i = 0; i < 10; i++) {
                await new Promise(resolve => setTimeout(() => {
                    bajada();
                    resolve();
                }, 100));
            }
        }
    }

    console.log(getComputedStyle(player).left);
}