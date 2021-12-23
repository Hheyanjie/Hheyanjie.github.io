var OBJLoader = new THREE.OBJLoader();
var MTLLoader = new THREE.MTLLoader();

// 加载OBJ文件
// 如果没有材质文件，系统自动设置Phong网格材质
function loadOBJ1(obj) {
    OBJLoader.load('../Maze_obj/Tree 02/Tree.obj', function (obj) {
        // 初始化模型坐标值（根据需要自行调整）
        // 设置模型缩放比例
        obj.position.x = 0;
        obj.position.y = 0;
        obj.position.z = 0;
        // obj.rotateX(-Math.PI/2);
        // obj.rotateZ(Math.PI/2);
        obj.scale.set(200, 200, 200);
        // 把模型添加到场景里面
        obj.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                //设置模型皮肤
                child.material.map = THREE.ImageUtils.loadTexture("../Maze_obj/Tree 02/DB2X2_L01.png");
            }
        })
        scene.add(obj);
        // setTimeout(animate(), 400);
    }, function () {
        console.log('import OBJ success!');
    }, function (err) {
        console.log('OBJ error!', err);
    });
}
loadOBJ1();
MTLLoader.load('../Maze_obj/Tree 02/Tree.mtl', function (materials) {
    // OBJ模型会和MaterialCreator包含的材质相对应
    materials.preload();
    OBJLoader.setMaterials(materials);
    // var materialsDetail = materials.materials;
    // for (var item in materialsDetail) {
    //     materialsDetail[item].opacity = 1;
    // }
    //loadOBJ(materials);
}, function () {
    console.log('import MTL success!');
}, function (err) {
    console.log('MTL error!', err);
});

var OBJLoader1 = new THREE.OBJLoader();
var MTLLoader1 = new THREE.MTLLoader();

// 加载OBJ文件
// 如果没有材质文件，系统自动设置Phong网格材质
function loadOBJ(obj) {
    OBJLoader1.load('../Maze_obj/Scottish_Fold_v2_L3.123cf1337e81-1923-4e6b-8589-71a7b9a2c2bf/13047_Scottish_Fold_v2_l3.obj', function (obj) {
        // 初始化模型坐标值（根据需要自行调整）
        // 设置模型缩放比例
        cat = obj;
        obj.position.x = 50;
        obj.position.y = 0;
        obj.position.z = -1550;
        obj.rotateX(-Math.PI/2);
        obj.rotateZ(Math.PI/2);
        obj.scale.set(3, 3, 3);
        // 把模型添加到场景里面
        obj.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                //设置模型皮肤
                child.material.map = THREE.ImageUtils.loadTexture("../Maze_obj/Scottish_Fold_v2_L3.123cf1337e81-1923-4e6b-8589-71a7b9a2c2bf/Scottish_Fold_diff.jpg");
            }
        })
        scene.add(obj);
        // setTimeout(animate(), 400);
    }, function () {
        console.log('import OBJ success!');
    }, function (err) {
        console.log('OBJ error!', err);
    });
}
loadOBJ();
MTLLoader1.load('../Maze_obj/Scottish_Fold_v2_L3.123cf1337e81-1923-4e6b-8589-71a7b9a2c2bf/13047_Scottish_Fold_v2_l3.mtl', function (materials) {
    // OBJ模型会和MaterialCreator包含的材质相对应
    materials.preload();
    OBJLoader.setMaterials(materials);
    // var materialsDetail = materials.materials;
    // for (var item in materialsDetail) {
    //     materialsDetail[item].opacity = 1;
    // }
    //loadOBJ(materials);
}, function () {
    console.log('import MTL success!');
}, function (err) {
    console.log('MTL error!', err);
});



var OBJLoader2 = new THREE.OBJLoader();
var MTLLoader2 = new THREE.MTLLoader();

// 加载OBJ文件
// 如果没有材质文件，系统自动设置Phong网格材质
function loadOBJ2(obj) {
    OBJLoader2.load('../Maze_obj/Cobra RX55/Cobra RX55.obj', function (obj) {
        // 初始化模型坐标值（根据需要自行调整）
        // 设置模型缩放比例
        obj.position.x = -1800;
        obj.position.y = -240;
        obj.position.z = 0;
        // obj.rotateX(-Math.PI/2);
        // obj.rotateZ(Math.PI/2);
        obj.scale.set(3, 3, 3);
        // 把模型添加到场景里面
        // obj.traverse(function(child) {
        //     if (child instanceof THREE.Mesh) {
        //         //设置模型皮肤
        //         child.material.map = THREE.ImageUtils.loadTexture("../Maze_obj/Cobra RX55/Maps/");
        //     }
        // })
        scene.add(obj);
        // setTimeout(animate(), 400);
    }, function () {
        console.log('import OBJ success!');
    }, function (err) {
        console.log('OBJ error!', err);
    });
}
loadOBJ2();
MTLLoader2.load('../Maze_obj/Cobra RX55/Cobra_RX55.mtl', function (materials) {
    // OBJ模型会和MaterialCreator包含的材质相对应
    materials.preload();
    OBJLoader2.setMaterials(materials);
    // var materialsDetail = materials.materials;
    // for (var item in materialsDetail) {
    //     materialsDetail[item].opacity = 1;
    // }
    //loadOBJ(materials);
}, function () {
    console.log('import MTL success!');
}, function (err) {
    console.log('MTL error!', err);
});






function load() {
    var textureLoader = new THREE.TextureLoader();
    var ma = new THREE.MeshBasicMaterial({map: textureLoader.load("rock4.jpeg")});
    for(var i = 0; i < 31; i++) {
        if(i==15) continue;
        var w = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100).translate(-1450+100*i,50,-1450), ma);
        vis[[-1450+100*i,-1400]] = 1;
        vis[[-1450+100*i,-1450]] = 1;
        vis[[-1450+100*i,-1500]] = 1;
        vis[[-1450+100*i-50,-1450]] = 1;
        vis[[-1450+100*i+50,-1450]] = 1;
        scene.add(w);
    }
    for(var i = 0; i < 30; i++) {
        var w = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100).translate(-1450,50,-1450+100*i), ma);
        vis[[-1450,-1450+100*i-50]] = 1;
        vis[[-1450,-1450+100*i]] = 1;
        vis[[-1450,-1450+100*i+50]] = 1;
        scene.add(w);
    }
    for(var i = 0; i < 30; i++) {
        var w = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100).translate(1550,50,-1450+100*i), ma);
        vis[[1550,-1450+100*i-50]] = 1;
        vis[[1550,-1450+100*i]] = 1;
        vis[[1550,-1450+100*i+50]] = 1;
        scene.add(w);
    }
    for(var i = 0; i < 31; i++) {
        if(i==15) continue;
        var w = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100).translate(-1450+100*i,50,1450), ma);
        vis[[-1450+100*i-50,1450]] = 1;
        vis[[-1450+100*i,1450]] = 1;
        vis[[-1450+100*i,1400]] = 1;
        vis[[-1450+100*i,1500]] = 1;
        vis[[-1450+100*i+50,1450]] = 1;
        scene.add(w);
    }
    for(var i = 0; i < 40; i++) {
        // if(i==15) continue;
        var w = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100).translate(-1950+100*i,50,1950), ma);
        vis[[-1950+100*i-50,1950]] = 1;
        vis[[-1950+100*i,1950]] = 1;
        vis[[-1950+100*i+50,1950]] = 1;
        scene.add(w);
    }
    for(var i = 0; i < 39; i++) {
        var w = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100).translate(-1950+100*i,50,-1950), ma);
        vis[[-1950+100*i-50,-1950]] = 1;
        vis[[-1950+100*i,-1950]] = 1;
        vis[[-1950+100*i+50,-1950]] = 1;
        scene.add(w);
    }
    for(var i = 0; i < 39; i++) {
        var w = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100).translate(-1950,50,-1950+100*i), ma);
        vis[[-1950,-1950+100*i-50]] = 1;
        vis[[-1950,-1950+100*i]] = 1;
        vis[[-1950,-1950+100*i+50]] = 1;
        scene.add(w);
    }
    for(var i = 0; i < 39; i++) {
        var w = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100).translate(1950,50,-1950+100*i), ma);
        vis[[1950,-1950+100*i-50]] = 1;
        vis[[1950,-1950+100*i]] = 1;
        vis[[1950,-1950+100*i+50]] = 1;
        scene.add(w);
    }


    var ww = [
        [-550,-550],
        [-550,-450],
        [-550,-350],
        [-550,-250],
        [-550,-150],
        [-550,-50],
        [-550,50],
        [-550,150],
        [-550,250],
        [-550,350],
        [-550,450],
        [-450,-550],
        [-350,-550],
        [-250,-550],
        [-150,-550],
        [-50,-550],
        [50,-550],
        [150,-550],
        [250,-550],
        [350,-550],
        [450,-550],
        [550,550],
        [-550,550],
        [-450,550],
        [-350,550],
        [-250,550],
        [-150,550],
        [-50,550],
        [50,550],
        [150,550],
        [250,550],
        [350,550],
        [450,550],
        [550,-550],
        [550,-550],
        [550,-450],
        [550,-350],
        [550,-250],
        [550,-150],
        [550,-50],
        [550,50],
        [550,150],
        [550,250],
        [550,350],
        [550,450],
        [550,550],
    ];
    for(var i = 0; i < ww.length; i++) {
        var w = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100).translate(ww[i][0],50,ww[i][1]),ma);
        vis[[ww[i][0],ww[i][1]]] = 1;
        vis[[ww[i][0]+50,ww[i][1]]] = 1;
        vis[[ww[i][0]-50,ww[i][1]]] = 1;
        vis[[ww[i][0],ww[i][1]+50]] = 1;
        vis[[ww[i][0],ww[i][1]-50]] = 1;
        // vis[[ww[i][0]-100,ww[i][1]]+50] = 1;
        // vis[[ww[i][0],ww[i][1]]-50] = 1;
        scene.add(w);
    }

    var www = [
        [150,-1350],
        [150,-1250],
        [150,-1150],
        [150,-1050],
        [150,-950],
        [150,-850],
        [150,-850],
        [250,-850],
        [350,-850],
        [450,-850],
        [550,-850],
        [650,-850],
        [750,-850],
        [750,-750],
        [750,-650],
        [750,-550],
        [750,-450],
        [750,-350],
        [750,-250],
        [750,-150],
        [750,-50],
        [750,50],
        [750,150],
        [750,250],
        [750,350],
        [750,450],
        [750,550],
        [750,650],
        [750,750],
        [750,850],
        [650,850],
        [550,850],
        [450,850],
        [350,850],
        [250,850],
        [150,850],
        [150,950],
        [150,1050],
        [150,1150],
        [150,1250],
        [150,1350],

        [-50,1350],
        [-50,1250],
        [-50,1150],
        [-50,1050],
        [-50,950],
        [-50,850],
        [-50,750],
        [-50,650],
        [-250,1350],
        [-250,1250],
        [-250,1150],
        [-250,1050],
        [-250,950],
        [-250,850],
        [-250,750],
        [-250,650],
        [-450,1350],
        [-450,1250],
        [-450,1150],
        [-450,1050],
        [-450,950],
        [-450,850],
        [-450,750],
        [-450,650],


        [-50,-1350],
        [-50,-1250],
        [-50,-1150],
        [-50,-1050],
        [-50,-950],
        [-50,-850],
        [-50,-750],
        [-50,-650],

        [-250,-1350],
        [-250,-1250],
        [-250,-1150],
        [-250,-1050],
        [-250,-950],
        [-250,-850],
        [-250,-750],
        [-250,-650],
        [-450,-1350],
        [-450,-1250],
        [-450,-1150],
        [-450,-1050],
        [-450,-950],
        [-450,-850],
        [-450,-750],
        [-450,-650],

    ];
    for(var i = 0; i < www.length; i++) {
        var w = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100).translate(www[i][0],50,www[i][1]), ma);
        vis[[www[i][0],www[i][1]]] = 1;
        vis[[www[i][0]+50,www[i][1]]] = 1;
        vis[[www[i][0]-50,www[i][1]]] = 1;
        vis[[www[i][0],www[i][1]+50]] = 1;
        vis[[www[i][0],www[i][1]-50]] = 1;
        // vis[[ww[i][0]-100,ww[i][1]]+50] = 1;
        // vis[[ww[i][0],ww[i][1]]-50] = 1;
        scene.add(w);
    }

    var njh = [
        [1350,-1150],
        [1250,-1150],
        [1150,-1150],
        [1050,-1150],
        [950,-1150],
        [1350,-1050],
        [1250,-950],
        [1150,-850],
        [1050,-750],
        [950,-650],
        [1050,-650],
        [1150,-650],
        [1250,-650],
        [1350,-650],

        [1350,-50],
        [1350,50],
        [1350,150],
        [1250,50],
        [1150,50],
        [1050,50],
        [950,50],
        [950,-50],

        [1350,650],
        [1250,650],
        [1150,650],
        [1050,650],
        [950,650],
        [1150,750],
        [1150,850],
        [1350,950],
        [1250,950],
        [1150,950],
        [1050,950],
        [950,950],

    ];

    var textureLoader = new THREE.TextureLoader();
    var mm = new THREE.MeshBasicMaterial({map: textureLoader.load("2.jpg")})
    for(var i = 0; i < njh.length; i++) {

        var w = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100).translate(njh[i][0],50,njh[i][1]), mm);
        scene.add(w);
    }
    var hyj = [
        [-1250,-1150],
        [-1150,-1150],
        [-1050,-1150],
        [-950,-1150],
        [-850,-1150],
        [-1050,-1050],
        [-1050,-950],
        [-1250,-850],
        [-1150,-850],
        [-1050,-850],
        [-950,-850],
        [-850,-850],

        [-1250,-50],
        [-1150,-50],
        [-1050,-50],
        [-1050,-150],
        [-950,-150],
        [-850,-150],
        [-1050,50],
        [-950,50],
        [-850,50],

        [-1250,650],
        [-1250,750],
        [-1150,750],
        [-1050,750],
        [-950,750],
        [-850,750],
        [-850,650],
        [-850,850],

    ];
    for(var i = 0; i < hyj.length; i++) {
        var w = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100).translate(hyj[i][0],50,hyj[i][1]), mm);
        scene.add(w);
    }
}

