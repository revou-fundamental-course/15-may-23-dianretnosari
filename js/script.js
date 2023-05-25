function hidelp() {     
    var x = document.getElementById('lu');

    if(x.style.display === 'none') {
        x.style.display = 'block';
        display = 0;        
    }
          else
    {
        x.style.display = 'none';
    } 
}

 
function showlp() {     
    var y = document.getElementById('kel');

    if(y.style.display === 'none') {
        y.style.display = 'block';
        display = 0;        
    }
          else
    {
        y.style.display = 'none';
    } 
}

function hidelpp() {     
    var z = document.getElementById('lup');

    if(z.style.display === 'none') {
        z.style.display = 'block';
        display = 0;        
    }
          else
    {
        z.style.display = 'none';
    } 
}

 
function showlpp() {     
    var a = document.getElementById('kelp');

    if(a.style.display === 'none') {
        a.style.display = 'block';
        display = 0;        
    }
          else
    {
        a.style.display = 'none';
    } 
}


let btnClear = document.querySelector('#resetinput');
let inputs = document.querySelectorAll('input');

btnClear.addEventListener('click', () => {
inputs.forEach(input => input.value = '');
});


//let btnClear = document.querySelector('button');
//let inputs = document.querySelectorAll('input');

//btnClear.addEventListener('click', () => {
//    inputs.forEach(input => input.value = '');
//});



// LUAS PERSEGI
function sisiluaspersegi(){
    var s = document.getElementById('s').value;
   
    var sisiluaspersegi = s;

    document.getElementById('sisiluaspersegi').innerHTML = sisiluaspersegi;
}

function outputluaspersegi(){
    var s = document.getElementById('s').value;
   
    var outputluaspersegi = s*s;

    document.getElementById('outputluaspersegi').innerHTML = outputluaspersegi;
}


// KELILING PERSEGI

function sisikelilingpersegi(){
    var sp = document.getElementById('sp').value;
   
    var sisikelilingpersegi= sp;

    document.getElementById('sisikelilingpersegi').innerHTML = sisikelilingpersegi;
}

function outputkelilingpersegi(){
    var sp = document.getElementById('sp').value;
   
    var outputkelilingpersegi = sp*sp*sp*sp;

    document.getElementById('outputkelilingpersegi').innerHTML = outputkelilingpersegi;
}


// LUAS PERSEGI PANJANG 

function panjangluaspersegipanjang(){
    var p = document.getElementById('p').value;
   
    var panjangluaspersegipanjang= p;

    document.getElementById('panjangluaspersegipanjang').innerHTML = panjangluaspersegipanjang;
}

function lebarluaspersegipanjang(){
    var l = document.getElementById('l').value;
   
    var lebarluaspersegipanjang= l;

    document.getElementById('lebarluaspersegipanjang').innerHTML = lebarluaspersegipanjang;
}

function outputluaspersegipanjang(){
    var p = document.getElementById('p').value;
    var l = document.getElementById('l').value;
   
    var outputluaspersegipanjang = (p)*(l);

    document.getElementById('outputluaspersegipanjang').innerHTML = outputluaspersegipanjang;
}


// KELILING PERSEGI PANJANG 

function panjangpersegipanjang(){
    var w = document.getElementById('w').value;
   
    var panjangpersegipanjang= w;

    document.getElementById('panjangpersegipanjang').innerHTML = panjangpersegipanjang;
}

function lebarpersegipanjang(){
    var h = document.getElementById('h').value;
   
    var lebarpersegipanjang= h;

    document.getElementById('lebarpersegipanjang').innerHTML = lebarpersegipanjang;
}

function outputkelpersegipanjang(){
    var w = document.getElementById('w').value;
    var h = document.getElementById('h').value;
   
    var outputkelpersegipanjang = (2*w)+(2*h);

    document.getElementById('outputkelpersegipanjang').innerHTML = outputkelpersegipanjang;
}
