var reader = new FileReader(), img = new Image();
    var picName = document.getElementById('picName');
    var newSize = document.getElementById('newSize');
    var imgs = document.createElement('img');
    var can = document.createElement('canvas');
    var ctx = can.getContext('2d');

    can.width = 400;
    can.height = 400;

    reader.onload = function(e){
        img.src = e.target.result;
        // console.log(e.target.result);
        ctx.drawImage(img,0,0,400,300);
        upload();
    }

    document.getElementById('file').addEventListener('change',function(e){
        var imgSource = e.target.files[0]
        reader.readAsDataURL(imgSource);
        picName.innerHTML = `名称:${imgSource.name},大小:${Math.round(imgSource.size/10**3)/10**3}MB`
        console.log(imgSource);
    })

    function upload(){
        //the way of blob
        // canvas.toBlob(function(blob){
        //     var xhr = new XMLHttpRequest();
        //     xhr.open("POST", '', true);
        //     xhr.send(blob);   
        // });

        //the way of URL
        document.getElementById('container').appendChild(imgs);
        imgs.src = can.toDataURL();
        imgs.style.display = "none";
    }

    var tag = false;
    function preview(){
        if(tag){
            imgs.style.display = "none";
        }else{
            imgs.style.display = "block";
        }
        tag = !tag;
    }