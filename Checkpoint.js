let pipoca = 10;
let macarrao = 8;
let feijao = 12;
let carne = 15;
let brigadeiro = 8;

function microondas(comida,tempo){
switch (comida) {
    case 1:
        if(tempo  > 20 && tempo < 30) {
            console.log('A comida queimou')
        }else if(tempo > 30) {
            console.log('kabumm')
        }else if(tempo < 10) {
            console.log('tempo insuficiente')
        }else {
            console.log('Prato pronto,Bom apetite!')
        }
        break;
    case 2:
        if(tempo  > 16 && tempo < 24) {
            console.log('A comida queimou')
        }else if(tempo > 24) {
            console.log('kabumm')
        }else if(tempo < 8) {
            console.log('tempo insuficiente')
        }else {
            console.log('Prato pronto,Bom apetite!')
        }
        break;
    case 3:
        if(tempo  > 30 && tempo < 45) {
            console.log('A comida queimou')
        }else if(tempo > 45) {
            console.log('kabumm')
        }else if(tempo < 15) {
            console.log('tempo insuficiente')
        }else {
            console.log('Prato pronto,Bom apetite!')
        }
        break;
    case 4:
        if(tempo  > 24 && tempo < 36) {
            console.log('A comida queimou')
        }else if(tempo > 36) {
            console.log('kabumm')
        }else if(tempo < 12) {
            console.log('tempo insuficiente')
        }else {
            console.log('Prato pronto,Bom apetite!')
        }
        break;
    case 5:
        if(tempo  > 16 && tempo < 24) {
            console.log('A comida queimou')
        }else if(tempo > 24) {
            console.log('kabumm')
        }else if(tempo < 8) {
            console.log('tempo insuficiente')
        }else {
            console.log('Prato pronto,Bom apetite!')
        }
        break;
        default: {
            console.log('Prato inexistente')
        }
        
    }      
        
}


microondas(1, 10)
