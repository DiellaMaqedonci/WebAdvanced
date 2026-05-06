var input = document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text = document.getElementById('teksti_id');

button.onclick = function(){
    text.innerHTML = input.ariaValueMax;
}

//var text = "The best school in the world is Digital School";
//var result = text.search("Digital School");
//document.getElementById('result1').innerHTML = result;


// var text = "The best school in the world is Digital School";
// var result = text.search(/Digital School/);
// document.getElementById('result2').innerHTML = result;


// var text = "The best school in the world is Digital School";
// var result = text.replace(/Digital School/, "Another School");
// document.getElementById('result3').innerHTML = result;


// var text = "abcdef";
// var regexp = new RegExp('abc');
// document.getElementById('result4').innerHTML = regexp.test(text);


// var text = "My school is the best school in the world";
// var regexp = /school/g;
// document.getElementById('result5').innerHTML = text.match(regexp);


// var text = "My school is the best school in the world";
// var regexp = /o/g;
// document.getElementById('result6').innerHTML = text.match(regexp);


// var text = "My school is the best school in the world";
// var regexp = /[abc]/g;
// document.getElementById('result7').innerHTML = text.match(regexp);


// var text = "Digital School is in the top 10 best schools in the world";
// var regexp = /[0-9]/g;
// document.getElementById('result8').innerHTML = text.match(regexp);


// var text = "My school is the best school in the world";
// var regexp = /(top|best|school)/g;
// document.getElementById('result9').innerHTML = text.match(regexp);


// var text = "100 percent";
// var regexp = /\d/g;
// document.getElementById('result10').innerHTML = text.match(regexp);


// var text = "My school is the best school in the world";
// var regexp = /\s/g;
// document.getElementById('result11').innerHTML = text.match(regexp);


// var text = "Heeey, how are you?";
// var regexp = /\e+/g;
// document.getElementById('result12').innerHTML = text.match(regexp);
