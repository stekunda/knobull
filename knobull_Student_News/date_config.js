const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = today.toLocaleString('default', { month: 'long' }) + ' ' + dd;
document.write(today);