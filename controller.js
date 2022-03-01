function changePage(side){
    aktivside = side;
    updateView();
}

function updateView(){
    const side = aktivside;
    if(side == 'hjem') hjem();
    if(side == 'addisjon') addisjon();
    if(side == 'subtraksjon') subtraksjon();
    if(side == 'multiplikasjon1') multiplikasjon1();
    if(side == 'multiplikasjon2') multiplikasjon2();

}

function fåRegnestykker() {
    output1 = ' ';
    output2 = ' ';
    output3 = ' ';
    output4 = ' ';
    output5 = ' ';
    svar1 = 0;
    svar2 = 0;
    svar3 = 0;
    svar4 = 0;
    svar5 = 0;
    

    tall1= Math.floor(Math.random() * 10) + 1;

    tall1= Math.floor(Math.random() * 10) + 1;
    tall2= Math.floor(Math.random() * 10) + 1;
 
    tall3= Math.floor(Math.random() * 10) + 1;
    tall4= Math.floor(Math.random() * 10) + 1;
 
    tall5= Math.floor(Math.random() * 10) + 1;
    tall6= Math.floor(Math.random() * 10) + 1;
 
    tall7= Math.floor(Math.random() * 10) + 1;
    tall8= Math.floor(Math.random() * 10) + 1;

    hurra='';
    
     randomGif= Math.floor(Math.random() * gifs.length);
     gif= gifs[randomGif];

    updateView();
 
    
 }
 function sjekkSvar(){
     
            
if (svar1 ==  tall1 + tall2 ) {output1 = '&#9989'}
else {output1 = '&#10060'}

if (svar2 ==  tall2 + tall3 ) {output2 = '&#9989'}
else {output2 = '&#10060'}

if (svar3 ==  tall4 + tall5 ) {output3 = '&#9989'}
else {output3 = '&#10060'}

if (svar4 ==  tall6 + tall7 ) {output4 = '&#9989'}
else {output4 = '&#10060'}

if (svar5 ==  tall7 + tall8 ) {output5 = '&#9989'}
else {output5 = '&#10060'}

if (svar1 ==  tall1 + tall2 && svar2 ==  tall2 + tall3 && svar3 ==  tall4 + tall5 && svar4 ==  tall6 + tall7 && svar5 == tall7 + tall8) 
{    hurra += `<img src= "${gif}"/>`
    poeng ++;  } 
    else {
        poeng --;
    }
    

   updateView();
}

function fåSubtraksjon(){
    output1 = ' ';
    output2 = ' ';
    output3 = ' ';
    output4 = ' ';
    output5 = ' ';
    svar1 = 0;
    svar2 = 0;
    svar3 = 0;
    svar4 = 0;
    svar5 = 0;

    tall1= Math.floor(Math.random() * 10) + 10;
    tall2= Math.floor(Math.random() * 10) + 10;
    tall3= Math.floor(Math.random() * 10) + 10;
    tall4= Math.floor(Math.random() * 10) + 10;

    tall5= Math.floor(Math.random() * 10) + 1;
    tall6= Math.floor(Math.random() * 10) + 1;
    tall7= Math.floor(Math.random() * 10) + 1;
    tall8= Math.floor(Math.random() * 10) + 1;

    hurra='';
    
    randomGif= Math.floor(Math.random() * gifs.length);
    gif= gifs[randomGif];

   updateView();


}

function sjekkSvarSubtraksjon(){
    if (svar1 ==  tall1 - tall5 ) {output1 = '&#9989'}
    else {output1 = '&#10060'}
    
    if (svar2 ==  tall2 - tall6 ) {output2 = '&#9989'}
    else {output2 = '&#10060'}
    
    if (svar3 ==  tall3 - tall7 ) {output3 = '&#9989'}
    else {output3 = '&#10060'}
    
    if (svar4 ==  tall4 - tall8 ) {output4 = '&#9989'}
    else {output4 = '&#10060'}
    
    if (svar5 ==  tall1 - tall7 ) {output5 = '&#9989'}
    else {output5 = '&#10060'}

    if (svar1 ==  tall1 - tall5 && svar2 ==  tall2 - tall6 && svar3 ==  tall3 - tall7 && svar4 ==  tall4 - tall8 && svar5 ==  tall1 - tall7) 
{    hurra += `<img src= "${gif}"/>`
    poeng ++;  } 
    else {
        poeng --;
    }
    
   updateView();
}

function fåMultiplikasjon1(){
    output1 = ' ';
    output2 = ' ';
    output3 = ' ';
    output4 = ' ';
    output5 = ' ';
    svar1 = 0;
    svar2 = 0;
    svar3 = 0;
    svar4 = 0;
    svar5 = 0;

    tall1= Math.floor(Math.random() * 10) + 1;
    tall2= Math.floor(Math.random() * 5) + 1;
    tall3= Math.floor(Math.random() * 10) + 1;
    tall4= Math.floor(Math.random() * 5) + 1;

    tall5= Math.floor(Math.random() * 10) + 1;
    tall6= Math.floor(Math.random() * 5) + 1;
    tall7= Math.floor(Math.random() * 10) + 1;
    tall8= Math.floor(Math.random() * 5) + 1;

    hurra='';
    
    randomGif= Math.floor(Math.random() * gifs.length);
    gif= gifs[randomGif];

   updateView();

}

function sjekkSvarMultiplikasjon1(){

    if (svar1 ==  tall1 * tall2 ) {output1 = '&#9989'}
    else {output1 = '&#10060'}
    
    if (svar2 ==  tall2 * tall3 ) {output2 = '&#9989'}
    else {output2 = '&#10060'}
    
    if (svar3 ==  tall4 * tall5 ) {output3 = '&#9989'}
    else {output3 = '&#10060'}
    
    if (svar4 ==  tall6 * tall8 ) {output4 = '&#9989'}
    else {output4 = '&#10060'}
    
    if (svar5 ==  tall7 * tall8 ) {output5 = '&#9989'}
    else {output5 = '&#10060'}

    if (svar1 ==  tall1 * tall2 && svar2 ==  tall2 * tall3 && svar3 ==  tall4 * tall5 && svar4 ==  tall6 * tall8 && svar5 ==  tall7 * tall8) 
{    hurra += `<img src= "${gif}"/>`
    poeng  ++   } 
    else {
        poeng --;
    }
    
   updateView();

}

function fåMultiplikasjon2(){
    output1 = ' ';
    output2 = ' ';
    output3 = ' ';
    output4 = ' ';
    output5 = ' ';
    svar1 = 0;
    svar2 = 0;
    svar3 = 0;
    svar4 = 0;
    svar5 = 0;

    tall1= Math.floor(Math.random() * 10) + 1;
    tall2= Math.floor(Math.random() * 10) + 1;
    tall3= Math.floor(Math.random() * 10) + 1;
    tall4= Math.floor(Math.random() * 10) + 1;

    tall5= Math.floor(Math.random() * 10) + 1;
    tall6= Math.floor(Math.random() * 10) + 1;
    tall7= Math.floor(Math.random() * 10) + 1;
    tall8= Math.floor(Math.random() * 10) + 1;

    hurra='';
    
    randomGif= Math.floor(Math.random() * gifs.length);
    gif= gifs[randomGif];

   updateView();

}

function sjekkSvarMultiplikasjon2(){

    if (svar1 ==  tall1 * tall2 ) {output1 = '&#9989'}
    else {output1 = '&#10060'}
    
    if (svar2 ==  tall2 * tall3 ) {output2 = '&#9989'}
    else {output2 = '&#10060'}
    
    if (svar3 ==  tall4 * tall5 ) {output3 = '&#9989'}
    else {output3 = '&#10060'}
    
    if (svar4 ==  tall6 * tall8 ) {output4 = '&#9989'}
    else {output4 = '&#10060'}
    
    if (svar5 ==  tall7 * tall8 ) {output5 = '&#9989'}
    else {output5 = '&#10060'}

    if (svar1 ==  tall1 * tall2 && svar2 ==  tall2 * tall3 && svar3 ==  tall4 * tall5 && svar4 ==  tall6 * tall8 && svar5 ==  tall7 * tall8) 
{    hurra += `<img src= "${gif}"/>`
    poeng ++;  } 
    else {
        poeng --;
    }
    
   updateView();

}

