// var rangeval =  document.getElementById('range').value;
// var numberval = document.getElementById('number').value;

document.getElementById('range').addEventListener('change', function (){

  document.getElementById('number').value = document.getElementById('range').value;
  } 
);

document.getElementById('number').addEventListener('change', function (){

  document.getElementById('range').value = document.getElementById('number').value   
   } 
 );
 
