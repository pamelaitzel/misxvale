function toggleMusica(){
    const audio = document.getElementById("musica");
    if(audio.paused){
      audio.play();
    }else{
      audio.pause();
    }
  }
  
  function entrarInvitacion(){
    const pantalla = document.getElementById("pantallaBienvenida");
    pantalla.classList.add("ocultar");
  
    const audio = document.getElementById("musica");
    audio.play().catch(() => {});
  }
  
  const fechaEvento = new Date("June 28, 2026 00:00:00").getTime();
  
  const intervalo = setInterval(function(){
    const ahora = new Date().getTime();
    const distancia = fechaEvento - ahora;
  
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
  
    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;
  
    if(distancia < 0){
      clearInterval(intervalo);
      document.getElementById("dias").innerText = "0";
      document.getElementById("horas").innerText = "0";
      document.getElementById("minutos").innerText = "0";
      document.getElementById("segundos").innerText = "0";
    }
  }, 1000);
  
  document.addEventListener("click", function () {
    const audio = document.getElementById("musica");
    audio.play().catch(() => {});
  }, { once: true });