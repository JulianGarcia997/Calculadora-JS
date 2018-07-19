var Calculadora = {

  tecla_0:document.getElementById('0'),
  tecla_1:document.getElementById('1'),
  tecla_2:document.getElementById('2'),
  tecla_3:document.getElementById('3'),
  tecla_4:document.getElementById('4'),
  tecla_5:document.getElementById('5'),
  tecla_6:document.getElementById('6'),
  tecla_7:document.getElementById('7'),
  tecla_8:document.getElementById('8'),
  tecla_9:document.getElementById('9'),
  on:document.getElementById('on'),
  sign:document.getElementById('sign'),
  mas:document.getElementById('mas'),
  menos:document.getElementById('menos'),
  por:document.getElementById('por'),
  dividido:document.getElementById('dividido'),
  punto:document.getElementById('punto'),
  igual:document.getElementById('igual'),
  display:document.getElementById('display'),

  numero_1:0,

  suma:false,
  resta:false,
  multiplicacion:false,
  division:false,

  init:function(){
    var self=this
    self.on.addEventListener("click",function(){self.resetear()})
    self.sign.addEventListener("click",function(){self.cambiarSigno()})
    self.tecla_0.addEventListener("click",function(){self.llenarDisplay('0')})
    self.tecla_1.addEventListener("click",function(){self.llenarDisplay('1')})
    self.tecla_2.addEventListener("click",function(){self.llenarDisplay('2')})
    self.tecla_3.addEventListener("click",function(){self.llenarDisplay('3')})
    self.tecla_4.addEventListener("click",function(){self.llenarDisplay('4')})
    self.tecla_5.addEventListener("click",function(){self.llenarDisplay('5')})
    self.tecla_6.addEventListener("click",function(){self.llenarDisplay('6')})
    self.tecla_7.addEventListener("click",function(){self.llenarDisplay('7')})
    self.tecla_8.addEventListener("click",function(){self.llenarDisplay('8')})
    self.tecla_9.addEventListener("click",function(){self.llenarDisplay('9')})
    self.mas.addEventListener("click",function(){self.sumar()})
    self.menos.addEventListener("click",function(){self.restar()})	
    self.por.addEventListener("click",function(){self.multiplicar()})	
    self.dividido.addEventListener("click",function(){self.dividir()})	
    self.punto.addEventListener("click",function(){self.ponerPunto()})	
    self.igual.addEventListener("click",function(){self.resultado()})
    //efecto de click
    self.on.addEventListener("mousedown",function(){self.on.style.transform="scale(0.9)"})
    self.on.addEventListener("mouseup",function(){self.on.style.transform="scale(1)"})
    self.sign.addEventListener("mousedown",function(){self.sign.style.transform="scale(0.9)"})
    self.sign.addEventListener("mouseup",function(){self.sign.style.transform="scale(1)"})
    self.tecla_0.addEventListener("mousedown",function(){self.tecla_0.style.transform="scale(0.9)"})
    self.tecla_0.addEventListener("mouseup",function(){self.tecla_0.style.transform="scale(1)"})
    self.tecla_1.addEventListener("mousedown",function(){self.tecla_1.style.transform="scale(0.9)"})
    self.tecla_1.addEventListener("mouseup",function(){self.tecla_1.style.transform="scale(1)"})
    self.tecla_2.addEventListener("mousedown",function(){self.tecla_2.style.transform="scale(0.9)"})
    self.tecla_2.addEventListener("mouseup",function(){self.tecla_2.style.transform="scale(1)"})
    self.tecla_3.addEventListener("mousedown",function(){self.tecla_3.style.transform="scale(0.9)"})
    self.tecla_3.addEventListener("mouseup",function(){self.tecla_3.style.transform="scale(1)"})
    self.tecla_4.addEventListener("mousedown",function(){self.tecla_4.style.transform="scale(0.9)"})
    self.tecla_4.addEventListener("mouseup",function(){self.tecla_4.style.transform="scale(1)"})
    self.tecla_5.addEventListener("mousedown",function(){self.tecla_5.style.transform="scale(0.9)"})
    self.tecla_5.addEventListener("mouseup",function(){self.tecla_5.style.transform="scale(1)"})
    self.tecla_6.addEventListener("mousedown",function(){self.tecla_6.style.transform="scale(0.9)"})
    self.tecla_6.addEventListener("mouseup",function(){self.tecla_6.style.transform="scale(1)"})
    self.tecla_7.addEventListener("mousedown",function(){self.tecla_7.style.transform="scale(0.9)"})
    self.tecla_7.addEventListener("mouseup",function(){self.tecla_7.style.transform="scale(1)"})
    self.tecla_8.addEventListener("mousedown",function(){self.tecla_8.style.transform="scale(0.9)"})
    self.tecla_8.addEventListener("mouseup",function(){self.tecla_8.style.transform="scale(1)"})
    self.tecla_9.addEventListener("mousedown",function(){self.tecla_9.style.transform="scale(0.9)"})
    self.tecla_9.addEventListener("mouseup",function(){self.tecla_9.style.transform="scale(1)"})
    self.mas.addEventListener("mousedown",function(){self.mas.style.transform="scale(0.9)"})
    self.mas.addEventListener("mouseup",function(){self.mas.style.transform="scale(1)"})
    self.menos.addEventListener("mousedown",function(){self.menos.style.transform="scale(0.9)"})
    self.menos.addEventListener("mouseup",function(){self.menos.style.transform="scale(1)"})
    self.por.addEventListener("mousedown",function(){self.por.style.transform="scale(0.9)"})
    self.por.addEventListener("mouseup",function(){self.por.style.transform="scale(1)"})
    self.dividido.addEventListener("mousedown",function(){self.dividido.style.transform="scale(0.9)"})
    self.dividido.addEventListener("mouseup",function(){self.dividido.style.transform="scale(1)"})
    self.punto.addEventListener("mousedown",function(){self.punto.style.transform="scale(0.9)"})
    self.punto.addEventListener("mouseup",function(){self.punto.style.transform="scale(1)"})
    self.igual.addEventListener("mousedown",function(){self.igual.style.transform="scale(0.9)"})
    self.igual.addEventListener("mouseup",function(){self.igual.style.transform="scale(1)"})
  },

  llenarDisplay:function(numero){
    var self=this
    if(self.display.innerHTML=='0'){
      self.display.innerHTML=numero 	
    }
    else if(self.display.innerHTML.length<8){
      self.display.innerHTML+=numero   
    }

  },

  resetear:function(){
    var self=this
    self.display.innerHTML='0'	
  },

  sumar:function(){
    var self=this
    self.suma=true
    self.numero_1+=parseInt(self.display.innerHTML)
    self.display.innerHTML=''	
  },

  restar:function(){
    var self=this
    self.resta=true
    self.numero_1=parseInt(self.display.innerHTML)
    self.display.innerHTML=''	
  },

  multiplicar:function(){
    var self=this
    self.multiplicacion=true
    self.numero_1=self.display.innerHTML
    self.display.innerHTML=''	
  },

  dividir:function(){
    var self=this
    self.division=true
    self.numero_1=self.display.innerHTML
    self.display.innerHTML=''	
  },

  cambiarSigno:function(){
    var self=this
    if(self.display.innerHTML!='0'){
     var cadena = "-"+self.display.innerHTML
     self.display.innerHTML=cadena
    }	
  },

  ponerPunto:function(){
  	var self=this
  	var existe=false
  	var i=0
    while(existe==false && i<self.display.innerHTML.length){
      if(self.display.innerHTML[i]!='.'){
        i++
      }
      else{
        existe=true
      }
    }

    if(existe==true){
    }
    else{
      self.display.innerHTML+='.'	
    }
  },

  resultado:function(){
    var self=this
    var resultado=0
    if(this.suma==true){
      resultado=parseInt(self.numero_1)+parseInt(self.display.innerHTML)
      self.display.innerHTML=resultado
      self.suma=false
    }
    else if(this.resta==true){
      resultado=parseInt(self.numero_1)-parseInt(self.display.innerHTML)
      self.display.innerHTML=resultado
      self.resta=false	
    }
    else if(this.multiplicacion==true){
      resultado=parseInt(self.numero_1)*parseInt(self.display.innerHTML)
      self.display.innerHTML=resultado
      self.multiplicacion=false
    }
    else if(this.division==true){
      if(self.display.innerHTML=='0'){
        self.display.innerHTML='ERROR'
        self.division=false
      }
      else{
        resultado=parseInt(self.numero_1)/parseInt(self.display.innerHTML)
        self.display.innerHTML=resultado
        self.division=false
      }	 	
    }	
    self.numero_1=0;
  }
}

Calculadora.init()