const botaoInicarCamera = document.querySelector('[data-video-botao]');
const campoCameera = document.querySelector('[data-camera]');
const vidio = document.querySelector('[data-video]'); 
const botaoTirarFoto = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const mensagem = document.querySelector('[data-mensagem]');
const botaoDeEnviar = document.querySelector('[data-enviar]');

let imagemURL ="";


botaoInicarCamera.addEventListener('click', async function () {
    const iniciarVideo = await navigator.mediaDevices
        .getUserMedia({ video: true, audio: false });

    botaoInicarCamera.style.display = "none";
    campoCameera.style.display = "block";

    vidio.srcObject = iniciarVideo;
});

botaoTirarFoto.addEventListener('click', function(){
    canvas.getContext('2d').drawImage(vidio, 0, 0, canvas.width, canvas.height);
    imagemURL = canvas.toDataURL("image/jpeg");

    campoCameera.style.display = 'none';
    mensagem.style.display = 'block';

})

botaoDeEnviar.addEventListener('click', ()=>{
    const receberDados = localStorage.getItem('cadastro');
    const comverteRetono = JSON.parse(receberDados)

    comverteRetono.imagem = imagemURL
    
    localStorage.setItem('cadastro', JSON.stringify(comverteRetono))

    window.location.href = 'abrir-conta-form-3.html';
})