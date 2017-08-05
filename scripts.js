function drawTree(H) {
    for (var i = 0; i < H ; i++) {
        var star = '';

        for (var j = 0; j <= i; j++) {
            star += '*';
        }
          
        console.log(star)
    }
}

drawTree(5);