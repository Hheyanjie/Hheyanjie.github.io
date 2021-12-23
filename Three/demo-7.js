var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'attribute vec4 a_Color;\n' +
    'varying vec4 v_Color;\n' +
    'void main() {\n' +
    '   gl_Position = a_Position;\n' +
    '   gl_PointSize = 10.0;\n' +
    '   v_Color = a_Color;\n' +
    '}\n';

var FSHADER_SOURCE =
    "precision mediump float;\n" +
    'varying vec4 v_Color;\n' +
    'void main() {\n' +
    '   gl_FragColor = v_Color;\n' +
    '}\n';

var gl;
var canvas;
var points = [];
var colors = [];

var draw = false;
function main() {
    canvas = document.getElementById("gl");
    gl = getWebGLContext(canvas);
    gl.clearColor(0.3,0.3,0.3,1.0);
    if(!gl) {
        console.log("Failed to get the rendering context for WebGL");
        return;
    }
    if(!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log("Failed to initialize shader.");
        return;
    }
    render();
    canvas.addEventListener("click", function (e) {
        // console.log(draw);
        e = window.event || e;
        var x = e.clientX;
        var y = e.clientY;
        var left = canvas.offsetLeft;
        var top = canvas.offsetTop;
        var width = canvas.width;
        var height = canvas.height;
        // console.log(width+ " " + height);
        x -= left,y -= top;
        x = (x - width/2.0) / (width/2.0);
        y = (height/2.0 - y) / (height/2.0);
        // console.log(x + " " + y);
        points.push(x,y,0);
        var R = Math.random();
        var G = Math.random();
        var B = Math.random();
        colors.push(R,G,B);
        // console.log(points);
        var bufferId = gl.createBuffer();
        // 将缓冲区对象绑定到目标
        gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
        // 向缓冲区对象写入数据
        gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( points ), gl.STATIC_DRAW );
        var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
        gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);
        // 连接a_Position变量与分配给它的缓冲区对象
        gl.enableVertexAttribArray(a_Position);

        var colorBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER,colorBuffer);
        gl.bufferData(gl.ARRAY_BUFFER,new Float32Array( colors ), gl.STATIC_DRAW);
        var a_Color = gl.getAttribLocation(gl.program, 'a_Color');
        gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(a_Color);
        // gl.vertexAttrib3f(a_Position,0.0,0.0,0.0);
        render();
    });
}
function render() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP,0,points.length/3);
}
function my_clear() {
    points = [];
    colors = [];
    main();
}