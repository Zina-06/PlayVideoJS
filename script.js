var video = document.querySelector("video"); //Atribui o video a variavel `video`
var definirTempo = 5; //Variável para definir o tempo que foi salvo
var timeStamp = 0; //Variável para saber o tempo em que o video se encontra
var intervaloCurrentTime = 1000;

video.currentTime = definirTempo;
timeStamp = definirTempo;

//Checa se o usuário avançou
video.addEventListener('timeupdate', function() {
  if (!video.seeking) {
        timeStamp = video.currentTime;
  }
});

//Impede usuário de avançar o vídeo
video.addEventListener('seeking', function() {
  var delta = video.currentTime - timeStamp;
  if (delta > 0.01) {
    video.currentTime = timeStamp;
    alert("Avanço não é permitido")
  }
}); 

//Atribui á variável ´timeStamp` o tempo do video no intervalo de 5 segundos
function imprimirCurrentTime() {
  timeStamp = parseInt(video.currentTime);
  console.log(timeStamp);
}
setInterval(imprimirCurrentTime, intervaloCurrentTime); //Tempo em milisegundos
