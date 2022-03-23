//question 01

function calcMulti(){
  //take data from user
  let entry = parseInt(document.getElementById("entry").value);
  let result = []
  for(let i = 1; i <= 10; i++){
  result[i] = `<br> ${entry} x ${i} = ${entry * i}`
}
   document.getElementById("finalResult").innerHTML = result
}

//question 02
function inter(){
let v1 = parseInt(document.getElementById("v1").value);
let v2 = parseInt(document.getElementById("v2").value);
let values = []
for(let i = v1 + 1; i < v2 ; i++){ 
    values = values + `${i},`
 
  }
    document.getElementById("intervalo").innerHTML = `Resultado:  Os número entre ${v1} e ${v2} são : ${values}.`;
}

//question 03
let listItens = [];
function addItem(){
  let newItem =  document.getElementById("nameItem").value;
  listItens.push (`${newItem}`) 
  alert (`O item ${newItem} foi adicionado a lista`)
  //clear input after alert
  document.getElementById('nameItem').value=''
  
}
function showList(){
  document.getElementById("resultList").innerHTML =  `Resultado: A lista de itens é ${listItens}.`;
}
function clearList(){
  listItens = []
  document.getElementById("resultList").innerHTML = `Resultado: A lista de itens foi apagada.`;
  
}

//question 04
let nR = [];
function randomNumbers(){
  for (let i = 0; i <= 5; i++){
    nR[i] = Math.floor(Math.random() * 60) + 1
  }
  
  document.getElementById("result").innerHTML = `Resultado: ${nR} `
  
}

//question 05
let listM = [];
let listW = [];

function addPerson(){
let name = document.getElementById("name").value;
let gender = document.getElementById("gender").value;
  
  if (gender == 'M'){
     listM.push(name)
     document.getElementById("name").value='';
  }else if(gender=='W'){
  listW.push(name)
  document.getElementById("name").value='';
    }
  }


function showListPerson(){
  if (listM.length == 0 || listW.length == 0){
    alert(`Você precisa preencher as duas listas para apresentar os nomes na tela`)

  }else{
    document.getElementById("resultM"). innerHTML = `Lista de homens: ${listM}`
    document.getElementById("resultW"). innerHTML = `Lista de mulheres: ${listW}`
  }
}

function cleanPersonList(){
  listM = []
  listW = []
  document.getElementById("resultM"). innerHTML = "A LISTA FOI APAGADA"
  document.getElementById("resultW"). innerHTML = "" 
}

//JO-KEN-PO
