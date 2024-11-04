import { Prova } from "./script/build/prova.mjs";


;(() => {
    console.log('Pronto');
    new Prova('ciao')
    document.body.innerHTML = 'Programam funziona'
})()