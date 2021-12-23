$(document).keydown(function (event) {
    var step = 50;
    if(event.keyCode == 87) {//前1
        if(p == 1) {
            console.log(cat.position.x + " " + cat.position.z);
            if(vis[[cat.position.x+2*step,cat.position.z]] != 1) {
                cat.position.x += step;
            }
        } else {
            if(p==2) alpha = 180;
            else if(p==3) alpha = -90;
            else alpha = 90;
            alpha %= 360;
            var x = cat.position.x;
            var y = cat.position.y;
            var z = cat.position.z;
            cat.position.x = 0;
            cat.position.y = 0;
            cat.position.z = 0;
            cat.rotateZ((alpha/180)*Math.PI);
            cat.position.x = x;
            cat.position.y = y;
            cat.position.z = z;
            p = 1;
        }
    }
    if(event.keyCode == 83) {//后2
        if(p == 2) {
            console.log(cat.position.x + " " + cat.position.z);
            if(vis[[cat.position.x-2*step,cat.position.z]] != 1) {
                cat.position.x -= step;
            }
        } else {
            if(p==1) alpha=180;
            else if(p==3) alpha = 90;
            else alpha = -90;
            alpha += 360;
            alpha %= 360;
            var x = cat.position.x;
            var y = cat.position.y;
            var z = cat.position.z;
            cat.position.x = 0;
            cat.position.y = 0;
            cat.position.z = 0;
            cat.rotateZ((alpha/180)*Math.PI);
            cat.position.x = x;
            cat.position.y = y;
            cat.position.z = z;
            p = 2;
        }
    }
    if(event.keyCode == 65) {//左3
        if(p == 3) {
            console.log(cat.position.x + " " + cat.position.z);
            if(vis[[cat.position.x,cat.position.z-2*step]] != 1) {
                cat.position.z -= step;
            }
        } else {
            if(p==1) alpha=90;
            else if(p==2) alpha = -90;
            else alpha = 180;
            alpha += 360;
            alpha %= 360;
            var x = cat.position.x;
            var y = cat.position.y;
            var z = cat.position.z;
            cat.position.x = 0;
            cat.position.y = 0;
            cat.position.z = 0;
            cat.rotateZ((alpha/180)*Math.PI);
            cat.position.x = x;
            cat.position.y = y;
            cat.position.z = z;
            p = 3;
        }
    }
    if(event.keyCode == 68) {//右4
        if(p == 4) {
            console.log(cat.position.x + " " + cat.position.z);
            if(vis[[cat.position.x,cat.position.z+2*step]] != 1) {
                cat.position.z += step;
            }
        } else {
            if(p==1) alpha = -90;
            else if(p==2) alpha = 90;
            else alpha = -180;
            alpha += 360;
            alpha %= 360;
            var x = cat.position.x;
            var y = cat.position.y;
            var z = cat.position.z;
            cat.position.x = 0;
            cat.position.y = 0;
            cat.position.z = 0;
            cat.rotateZ((alpha/180)*Math.PI);
            cat.position.x = x;
            cat.position.y = y;
            cat.position.z = z;
            p = 4;
        }
    }
})
