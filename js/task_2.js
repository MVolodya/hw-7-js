
window.addEventListener('scroll', function (e) {
	console.log(document.body.scrollTop);

  var $parallax = document.getElementById('parallax');
  var posY = document.body.scrollTop || document.documentElement.scrollTop * (-0.5);
  console.log(posY);
  $parallax.style.backgroundPosition = '0px ' + posY + 'px';
  console.log($parallax);
})
