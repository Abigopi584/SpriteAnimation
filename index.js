var tid;

function startAnimation(node){
    // time interval

    var position = 256;
    var interval = 100
    const diff = 256;
    tid = setInterval(()=>{
        $('#spriteImage').css({'background-position':'-'+position+'px 0px'})
        // 1536 is the length of the entire sprite
        position = (position < 1536) ? position + diff : 256;
    }, interval)
}

function stopAnimation() {
    clearInterval(tid)
}


