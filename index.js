setInterval(function () {
  var d =  new Date();

  var hr = d.getHours();
  var mn = d.getMinutes();
  var sec = d.getSeconds();

  var hrRotate = 30*hr + 0.5*mn + 0.00833*sec;
  var minRotate = 6*mn + 0.1*sec;
  var secRotate = 6*sec;

  document.querySelector('.hour').style.transform = 'rotate(' + hrRotate + 'deg)';
  document.querySelector('.minute').style.transform = 'rotate('+ minRotate + 'deg)';
  document.querySelector('.second').style.transform = 'rotate('+ secRotate + 'deg)';


  // document.querySelector('.minute').style.transform = 'rotate(360deg)';
  // // document.querySelector('.minute').style.transform = 'rotate('+ minRotate + 'deg)';
  // // document.querySelector('.second').style.transform = 'rotate('+ secRotate + 'deg)';
},1000);


document.querySelector('.toggleMode').addEventListener('click', function(){

    document.querySelector('.toggleButton').classList.toggle('buttonChange');
    document.querySelector('.innerCircle').classList.toggle('innerChange');
    document.querySelector('h3').classList.toggle('hChange');
    document.querySelector('body').classList.toggle('bodyChange');
    document.querySelector('.clock').classList.toggle('clockChange');
    document.querySelector('.container').classList.toggle('containerChange');
})
