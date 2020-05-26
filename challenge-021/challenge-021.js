(function(win,doc){
    'use strict';
    var $cron = doc.querySelector("input[type='text']");
    
    var $start = doc.querySelector("button[data-js='start']");
    var $stop = doc.querySelector("button[data-js='stop']");
    var $reset = doc.querySelector("button[data-js='reset']");
    var $counter = 0;
    var $temporizador = 0;

    $start.addEventListener('click',startFunc,false);//Aqui não invoca a função, apenas referencia, pois a chamada é assincrona, ele será invocado automaticamente na hora do click
    $stop.addEventListener('click',stopFunc,false);
    $reset.addEventListener('click',resetFunc,false);

    function startFunc(){
        $cron.value = $counter++;
        $temporizador = setTimeout(startFunc, 1000);//Ele chama a função recursivamente
    }
    function stopFunc(){
        clearTimeout($temporizador);
    }
    function resetFunc(){
        $counter = 0;
        $cron.value = 0;
    }


})(window, document);