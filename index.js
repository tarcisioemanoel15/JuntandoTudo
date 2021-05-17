function horas(){
function hora(){
    function ze(num){ return num >= 10 ? num : "0"+num;}
const rel = document.querySelector("#rel");
const data = new Date();
const hor = ze(data.getHours());
const min = ze(data.getMinutes());
const seg = ze(data.getSeconds());
const horas = `${hor}:${min}:${seg}`;
return  rel.innerHTML= horas;
}
setInterval(hora, 1000);
}
horas();
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//Botoes mudar backgrund
function doisButoes(){
const container = document.querySelector('.container');
document.addEventListener('click', function(e){
const el = e.target;
if(el.classList.contains('b0')){
    container.classList.add('b2')
}
if(el.classList.contains('b1')){
    container.classList.remove('b2')
}
});
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    


}
doisButoes()
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//Area de cllick
 function Interaja(){

     const a = document.querySelector('.area');
     const ar = document.querySelector('.ar');

     a.addEventListener('click', clicar);
     a.addEventListener('mouseenter', entrou);
     a.addEventListener('mouseout', saiu);

     function clicar(){
    a.style.color= 'blue';
    ar.style.background= 'red';
   // ar.classList.add('b2');
    a.innerText= 'Clicou';
}
function entrou(){
    
    a.style.background= 'red';
    ar.style.background= 'yellow';
    a.innerHTML= 'Emtrou';
}
function saiu(){
    a.style.background= '#fccfee';
    a.style.background= 'pink';
    a.innerText='Saiu';
}
}
Interaja();
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
/*Um botão*/
function umBotao(){
const h1 = document.querySelector('h1');
const button = document.querySelector('.div button');
const div = document.querySelector('.div');
const area = document.querySelector('.area'); 

button.addEventListener('click', muda);
button.addEventListener('mouseenter', mudaa);

function muda(){
div.style.background= 'black';
area.style.background= 'black';
button.style.background= 'black';
h1.style.background= 'black';

}

    function mudaa(){
        div.style.background= 'pink';
        area.style.background= 'whit';
        button.style.background= 'whit';
        h1.style.background= 'whit';
    }
}
umBotao();
//###############################################################
//Formulario
function formulario(){
const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault();
//    console.log('Previnido');

const res = document.querySelector('#res');
const pesoa = [];
const nome = document.querySelector('#nome').value;
const sobreNome = document.querySelector('#sobreNome').value;
const idade = document.querySelector('#idade').value;
const peso = document.querySelector('#peso').value;
const altura = document.querySelector('#altura').value;

 pesoa.push({
 nome: nome.value,
 sobreNome: sobreNome.value,
 idade: idade.value,
 peso: peso.value,
 altura: altura.value
});


res.innerHTML+= `<p> ${nome} ${sobreNome} sua idade é ${idade} seu peso ${peso}kl; altura ${altura} </p>`;
});
}
formulario();
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
function calkImc(){
const form = document.querySelector('#formImc');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const peso1 = document.querySelector('#pesoimc');
    const altura1 = document.querySelector('#alturaimc');

    const peso = Number(peso1.value)
    const altura = Number(altura1.value)
    
    if(peso == '' || altura == ''){

        if(!peso){
            return Resultado('Peso invalido', false);
        }
        if(!altura){
            return Resultado('Altura invalida', false);
        }
        
    }else{
        
        const imc = calculo(peso, altura); 
        const msg = mensaguem(imc);
        const ImcMsg = `${imc}, ${msg}`;
        
        Resultado(ImcMsg, true);
    }
});

function calculo(peso, altura){
    const res = peso / (altura * altura);
    return res.toFixed(2); 
}
function mensaguem(imc){
const ver = ['magro', 'normal', 'gordo', 'obesidade'];

if(imc < 20){return ver[0]}
if(imc >= 20 && imc < 40 ){return ver[1]}
if(imc >= 40 && imc < 60){return ver[2]}
if(imc >= 60 && imc < 100){return ver[3]}

}

function criap(){
    const p = document.createElement('p');
    return p;
}

function Resultado(msg, verdadeira){
const res = document.querySelector('#resultado');
res.innerHTML+= '';

const p = criap()

if(verdadeira){
    p.classList.add('cor');
}else{
    p.classList.add('corr');
}

p.innerHTML+= msg; 
res.appendChild(p);
}

}
calkImc();
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//Metronomo
function Metronomo(){
const metronomo = document.querySelector('.rell');

function seg(segundos){
    let data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    });
}
console.log(seg(10));
let segundos = 0; 
let timer; 

function contandor(){
    timer = setInterval(function(){
        segundos++
        metronomo.innerHTML= (seg(segundos)); 
    }, 1000);
}

document.addEventListener('click', function(e){
    let el = e.target;

    if(el.classList.contains('iniciar')){
        metronomo.classList.remove('b2')
        metronomo.classList.add('cortimer')
        clearInterval(timer)
        contandor(segundos);
        
    }
    if(el.classList.contains('pausar')){
        metronomo.classList.add('b2')
        metronomo.classList.add('cortimer')
        clearInterval(timer)
        
    }
    if(el.classList.contains('zerar')){
        metronomo.classList.remove('b2')
        metronomo.classList.remove('cortimer')
        clearInterval(timer)
        metronomo.innerHTML= '00:00:00'
        segundos = 0;
    }
});

}
Metronomo()


