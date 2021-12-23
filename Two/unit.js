var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'attribute vec4 a_Color;\n' +
    'varying vec4 v_Color;\n' +
    'uniform mat4 u_xformMatrix;\n' +
    'void main() {\n' +
    '    gl_Position =  u_xformMatrix * a_Position;\n' +
    '    v_Color = a_Color;\n' +
    '}\n';

var FSHADER_SOURCE =
    "precision mediump float;\n" +
    'varying vec4 v_Color;\n' +
    'void main() {\n' +
    '    gl_FragColor = v_Color;\n' +
    '}\n';

function main() {
    var canvas = document.getElementById("gl");
    var gl = getWebGLContext(canvas);
    if(!gl) {
        console.log("Failed to get the rendering context for WebGL");
        return;
    }
    if(!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.log("Failed to initialize shader.");
        return;
    }
    var vertices = new Float32Array([
        0.0,0.5,
        -0.5,-0.5,
        0.5,-0.5,
    ]);
    var colors = new Float32Array([
        1.0,0.0,0.0,
        0.0,1.0,0.0,
        0.0,0.0,1.0,
    ]);
    var vertexBufer = gl.createBuffer();
    if(!vertexBufer) {
        console.log("Failed to create the buffer object.");
        return;
    }
    gl.bindBuffer(gl.ARRAY_BUFFER,vertexBufer);
    gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW);

    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    gl.vertexAttribPointer(a_Position,2,gl.FLOAT,false,0,0);
    gl.enableVertexAttribArray(a_Position);

    var angle = document.getElementById("angle").value;
    var radian = Math.PI * angle / 180.0;
    var cosB = Math.cos(radian), sinB = Math.sin(radian);
    var x = document.getElementById("location_x").value;
    var y = document.getElementById("location_y").value;
    var xformMatrix = new Float32Array([
        cosB,-sinB,0.0,0.0,
        sinB,cosB,0.0,0.0,
        0.0,0.0,1.0,0.0,
        x,y,0.0,1.0,
    ]);
    var u_xformMatrix = gl.getUniformLocation(gl.program,'u_xformMatrix');
    gl.uniformMatrix4fv(u_xformMatrix,false,xformMatrix);

    var colorBuffer = gl.createBuffer();
    if(!colorBuffer) {
        console.log("Failed to create the buffer object.");
        return;
    }
    gl.bindBuffer(gl.ARRAY_BUFFER,colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER,colors,gl.STATIC_DRAW);

    var a_Color = gl.getAttribLocation(gl.program,'a_Color');
    gl.vertexAttribPointer(a_Color,3,gl.FLOAT,false,0,0);
    gl.enableVertexAttribArray(a_Color);

    gl.clearColor(0.0,0.0,0.0,1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.TRIANGLES,0,3);
}