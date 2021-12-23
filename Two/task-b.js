var VSHADER_SOURCE =
    "attribute vec4 a_Position;" +
    "attribute vec4 a_Color;" +
    "varying vec4 v_Color;" +
    "void main(){" +
    "gl_Position = a_Position;" +
    "v_Color = a_Color;" +
     "}";

var FSHADER_SOURCE =
    "precision mediump float;" +
    "varying vec4 v_Color;" +
     "void main() {" +
     "gl_FragColor = v_Color;" +
     "}";
const { vec3 } = glMatrix;

var gl,canvas;
var points = [];
var colors = [];
function main() {
    points = [];
    colors = [];
    canvas = document.getElementById("gl");
    gl = getWebGLContext(canvas);
    if(!gl) {
        console.log("Failed to get the rendering context for WebGL");
        return;
    }
    if(!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log("Failed to initialize shader.");
        return;
    }

    var vertices = ([
        0.0000, 0.0000, -1.0000,
        0.0000, 0.9428, 0.3333,
        -0.8165, -0.4714, 0.3333,
        0.8165, -0.4714, 0.3333
        // 0.0,-0.3,-1.0,
        // 0.0,1.0,0.0,
        // -1.0,-1.0,0.0,
        // 1.0,-1.0,0.0,
    ]);
    var p1 = vec3.fromValues(vertices[0],vertices[1],vertices[2]);
    var p2 = vec3.fromValues(vertices[3],vertices[4],vertices[5]);
    var p3 = vec3.fromValues(vertices[6],vertices[7],vertices[8]);
    var p4 = vec3.fromValues(vertices[9],vertices[10],vertices[11]);

    var num = document.getElementById("show").value;
    divide(p1,p2,p3,p4,num);

    console.log(points);

    gl.clearColor(1.0,1.0,1.0,1.0);
    gl.enable(gl.DEPTH_TEST);

    var bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( points ), gl.STATIC_DRAW );

    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_Position);

    var cBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array( colors ), gl.STATIC_DRAW);

    console.log(colors.length);
    var a_Color = gl.getAttribLocation(gl.program,'a_Color');
    gl.vertexAttribPointer(a_Color,3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_Color);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES,0,points.length/3);
}
function divide(a,b,c,d,cnt) {
    if(cnt==0) {
        // gl.drawArrays(gl.TRIANGLES,);
        push_color(a, c, b, 0);
        push_color(a, c, d, 1);
        push_color(a, b, d, 2);
        push_color(b, c, d, 3);
        // gl.clear(gl.COLOR_BUFFER_BIT);
        // gl.drawArrays(gl.TRIANGLES,0,points.length/3);
        return;
    }
    // console.log(b[0]);
    var ab = vec3.create();
    vec3.lerp(ab, a, b, 0.5);
    var ac = vec3.create();
    vec3.lerp(ac, a, c, 0.5);
    var ad = vec3.create();
    vec3.lerp(ad, a, d, 0.5);
    var bc = vec3.create();
    vec3.lerp(bc, b, c, 0.5);
    var bd = vec3.create();
    vec3.lerp(bd, b, d, 0.5);
    var cd = vec3.create();
    vec3.lerp(cd, c, d, 0.5);
    cnt--;
    divide(a, ab, ac, ad, cnt);
    divide(ab, b, bc, bd, cnt);
    divide(ac, bc, c, cd, cnt);
    divide(ad, bd, cd, d, cnt);
}
function push_color(a,b,c,color) {
    points.push(a[0],a[1],a[2]);
    points.push(b[0],b[1],b[2]);
    points.push(c[0],c[1],c[2]);
    var baseColor = [
        1.0,0.0,0.0,
        0.0,1.0,0.0,
        0.0,0.0,1.0,
        0.0,0.0,0.0,
    ];
    for(var i = 0; i < 9; i++) {
        colors.push(baseColor[color*3+i%3]);
    }
}