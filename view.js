function navigation(){
    return `
    <div class="page">
    <div class="header"><h1> </h1></div>

    <div class="menu">
    <h3>Velg hva du vil øve på</h3>
    <button onclick="changePage('addisjon')" class="buttonMenu">Addisjon</button><br>
    <button onclick="changePage('subtraksjon')" class="buttonMenu">Subtraksjon</button> <br>
    <button onclick="changePage('multiplikasjon1')" class="buttonMenu">Multiplikasjon 1-5</button><br>
    <button onclick="changePage('multiplikason2')" class="buttonMenu">Multiplikasjon 1-10</button>   <br> 
    </div>

    <div class="mainContent">
    
    
    </div>

    
    </div>
    
    `
    
  
}

function hjem() {
    html =  `
    <div class="page">
    <div class="header"><h1> Øv på hoderegning </h1></div>

    <div class="menu">
    <h3>Velg hva du vil øve på</h3>
    <button onclick="changePage('addisjon')" class="buttonMenu">Addisjon</button><br>
    <button onclick="changePage('subtraksjon')" class="buttonMenu">Subtraksjon</button><br>
    <button onclick="changePage('multiplikasjon1')" class="buttonMenu">Multiplikasjon 1-5</button><br>
    <button onclick="changePage('multiplikasjon2')" class="buttonMenu">Multiplikasjon 1-10</button>   <br> 
    </div>

    <div class="mainContent">
    <p class="tekstMain">Velg i menyen på venstre side hva du vil øve deg på</p>
    
    </div>

    
    </div>
    
    `
    appDiv.innerHTML = html; 
}


function addisjon() {
html= 
`
<div class="page">
<div class="header"><h1> Addisjon </h1></div>

<div class="menu">
<h3>Velg hva du vil øve på</h3>
<button onclick="changePage('addisjon')" class="buttonMenu">Addisjon</button><br>
<button onclick="changePage('subtraksjon')" class="buttonMenu">Subtraksjon</button><br>
<button onclick="changePage('multiplikasjon1')" class="buttonMenu">Multiplikasjon 1-5</button><br>
<button onclick="changePage('multiplikasjon2')" class="buttonMenu">Multiplikasjon 1-10</button>  <br>  
</div>

<div class="mainContent">
<div class="regnestykker">
<div>${tall1} + ${tall2} = <input class="inputFelt" onchange="svar1=this.value" value='${svar1}' type="text" />${output1} </div>  </br>
<div>${tall2} + ${tall3} = <input class="inputFelt" onchange="svar2=this.value" value='${svar2}' type="text" />${output2} </div>  </br>
<div>${tall4} + ${tall5} = <input class="inputFelt" onchange="svar3=this.value" value='${svar3}' type="text" />${output3} </div>  </br>
<div>${tall6} + ${tall7} = <input class="inputFelt" onchange="svar4=this.value" value='${svar4}' type="text" />${output4} </div>  </br>
<div>${tall7} + ${tall8} = <input class="inputFelt" onchange="svar5=this.value" value='${svar5}' type="text" />${output5} </div> 
<div>${hurra}</div>
<br>
<button onclick="fåRegnestykker()" class="buttonMenu">Få regnestykker</button>
<button onclick="sjekkSvar()" class="buttonMenu">Sjekk svar</button>
<div><b>Poeng: </b> ${poeng}</div>
</div> </br>
<div>

</div>


</div>

`

    appDiv.innerHTML = html;  
}

function subtraksjon() {
    html= 
`
<div class="page">
<div class="header"><h1> Subtraksjon </h1></div>

<div class="menu">
<h3>Velg hva du vil øve på</h3>
<button onclick="changePage('addisjon')" class="buttonMenu">Addisjon</button><br>
<button onclick="changePage('subtraksjon')" class="buttonMenu">Subtraksjon</button><br>
<button onclick="changePage('multiplikasjon1')" class="buttonMenu">Multiplikasjon 1-5</button><br>
<button onclick="changePage('multiplikasjon2')" class="buttonMenu">Multiplikasjon 1-10</button>   <br> 
</div>

<div class="mainContent">
<div class="regnestykker">
<div>${tall1} - ${tall5} = <input class="inputFelt" onchange="svar1=this.value" value='${svar1}' type="text" />${output1} </div>  </br>
<div>${tall2} - ${tall6} = <input class="inputFelt" onchange="svar2=this.value" value='${svar2}' type="text" />${output2} </div>  </br>
<div>${tall3} - ${tall7} = <input class="inputFelt" onchange="svar3=this.value" value='${svar3}' type="text" />${output3} </div>  </br>
<div>${tall4} - ${tall8} = <input class="inputFelt" onchange="svar4=this.value" value='${svar4}' type="text" />${output4} </div>  </br>
<div>${tall1} - ${tall7} = <input class="inputFelt" onchange="svar5=this.value" value='${svar5}' type="text" />${output5} </div> 
<div>${hurra}</div>
<br>
<button onclick="fåSubtraksjon()" class="buttonMenu">Få regnestykker</button>
<button onclick="sjekkSvarSubtraksjon()" class="buttonMenu">Sjekk svar</button>
<div> <b>Poeng: </b> ${poeng}</div>
</div> </br>
<div>

</div>


</div>

`

    appDiv.innerHTML = html;  
}

function multiplikasjon1() {
    html= 
    `
    <div class="page">
    <div class="header"><h1> Multiplikasjon med tallene 1-5 </h1></div>
    
    <div class="menu">
    <h3>Velg hva du vil øve på</h3>
    <button onclick="changePage('addisjon')" class="buttonMenu">Addisjon</button><br>
    <button onclick="changePage('subtraksjon')" class="buttonMenu">Subtraksjon</button><br>
    <button onclick="changePage('multiplikasjon1')" class="buttonMenu">Multiplikasjon 1-5</button><br>
    <button onclick="changePage('multiplikasjon2')" class="buttonMenu">Multiplikasjon 1-10</button>  <br>  
    </div>
    
    <div class="mainContent">
    <div class="regnestykker">
    <div>${tall1} * ${tall2} = <input class="inputFelt" onchange="svar1=this.value" value='${svar1}' type="text" />${output1} </div>  </br>
    <div>${tall2} * ${tall3} = <input class="inputFelt" onchange="svar2=this.value" value='${svar2}' type="text" />${output2} </div>  </br>
    <div>${tall4} * ${tall5} = <input class="inputFelt" onchange="svar3=this.value" value='${svar3}' type="text" />${output3} </div>  </br>
    <div>${tall6} * ${tall8} = <input class="inputFelt" onchange="svar4=this.value" value='${svar4}' type="text" />${output4} </div>  </br>
    <div>${tall7} * ${tall8} = <input class="inputFelt" onchange="svar5=this.value" value='${svar5}' type="text" />${output5} </div> 
    <div>${hurra}</div>
    <br>
    <button onclick="fåMultiplikasjon1()" class="buttonMenu">Få regnestykker</button>
    <button onclick="sjekkSvarMultiplikasjon1()" class="buttonMenu">Sjekk svar</button>
    <div> <b>Poeng: </b> ${poeng}</div>
    </div> </br>
    <div>
    
    </div>
    
    
    </div>
    
    `
    
        appDiv.innerHTML = html;  
    
}

function multiplikasjon2() {
    html= 
    `
    <div class="page">
    <div class="header"><h1> Multiplikasjon med tallene 1-10 </h1></div>
    
    <div class="menu">
    <h3>Velg hva du vil øve på</h3>
    <button onclick="changePage('addisjon')" class="buttonMenu">Addisjon</button><br>
    <button onclick="changePage('subtraksjon')" class="buttonMenu">Subtraksjon</button><br>
    <button onclick="changePage('multiplikasjon1')" class="buttonMenu">Multiplikasjon 1-5</button><br>
    <button onclick="changePage('multiplikasjon2')" class="buttonMenu">Multiplikasjon 1-10</button>  <br>  
    </div>
    
    <div class="mainContent">
    <div class="regnestykker">
    <div>${tall1} * ${tall2} = <input class="inputFelt" onchange="svar1=this.value" value='${svar1}' type="text" />${output1} </div>  </br>
    <div>${tall2} * ${tall3} = <input class="inputFelt" onchange="svar2=this.value" value='${svar2}' type="text" />${output2} </div>  </br>
    <div>${tall4} * ${tall5} = <input class="inputFelt" onchange="svar3=this.value" value='${svar3}' type="text" />${output3} </div>  </br>
    <div>${tall6} * ${tall8} = <input class="inputFelt" onchange="svar4=this.value" value='${svar4}' type="text" />${output4} </div>  </br>
    <div>${tall7} * ${tall8} = <input class="inputFelt" onchange="svar5=this.value" value='${svar5}' type="text" />${output5} </div> 
    <div>${hurra}</div>
    <br>
    <button onclick="fåMultiplikasjon2()" class="buttonMenu">Få regnestykker</button>
    <button onclick="sjekkSvarMultiplikasjon2()" class="buttonMenu">Sjekk svar</button>
    <div> <b>Poeng: </b>${poeng}</div>
    </div> </br>
    <div>
    
    </div>
    
    
    </div>
    
    `
    
        appDiv.innerHTML = html;  
}