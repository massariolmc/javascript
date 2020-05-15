(function(){
    'use strict';

    var name = 'Maximiano';
    var count = name.length;
    console.log('As letras do meu nome: ');
    for (var i=0; i < count; i++){
        console.log(name[i] + ' é a ' + (i+1) + 'º letra do meu nome')
    };

    var fullName = 'MaximIano mAssariol cARdoso';
    var newName = fullName.toLowerCase().split(' ').join('-');
    console.log( '\nNome convertido à partir de um slug:' );
    console.log(newName);

    var slug = fullName.split(' ');    
    console.log(slug);

    var slug2 = []
    slug.forEach(function(element, index, array){
        slug2.push(element.charAt(0).toUpperCase() + element.slice(1).toLocaleLowerCase());
    });//MODO TRADICIONAL
    console.log('MODO TRADICIONAL: ' + slug2.join(' '));

    slug = newName.split('-').map(function(name){
        return name.charAt(0).toUpperCase() + name.slice(1);
    }).join(' ');//MODO RÁPIDO
    console.log('MODO RÁPIDO: ' + slug);        
    
    
    
    console.log( '\nMeus amigos:' );
    var arr = ['Miguel', 'Labelle', 'Jessica', 'Maximiano'];
    var count_arr = arr.length;    
    var comp2 = arr.slice(0,(count_arr - 1)) + ' e ' +arr.slice(count_arr-1);    
    console.log("MANEIRA FÁCIL: " + comp2);//MANEIRA FÁCIL
    comp2 = arr.reduce(function(acumulado, atual, index){
        var separator = arr.length -1 === index ? ' e ' : ', ';
        return acumulado + separator + atual;
    }).concat(' são meus amigos.');
    console.log("MANEIRA MUITO FÁCIL : " + comp2);//MANEIRA MUITO FÁCIL
    var newArr = '';
    for(i = 0; i < count_arr; i++){
        if ((i+2) == count_arr){
            newArr += (arr[i] + ' e ');      
        }
        else if ((i +1) == count_arr){
            newArr += (arr[i]);      
        }
        else{
            newArr += (arr[i] + ', ');      
        }        
    }
    console.log("MANEIRA TRADICIONAL : " + newArr);//MANEIRA DIFICIL
    
    console.log( '\nEra "Roberto", agora é:' );
    name = 'Roberto';
    count = name.length;
    console.log('MANEIRA 1: ' + name.slice(0,2) + name.slice(2,7).replace('o','a'));
    console.log('MANEIRA 2: ' + name.replace('to','ta'));

    console.log( '\nParte de uma string:' );
    name = 'Fernando';
    console.log('MANEIRA 1: ' + name.slice(name.lastIndexOf('nando')));
    console.log('MANEIRA 2: ' + name.substring(8,3));

    console.log( '\nNome com letras intercaladas entre caixa alta e baixa:' );
    var myName = 'gabriEla';
    count = myName.length;
    var newMyName = '';
    for (i=0;i < count; i++){
        if( i %2 == 0){
            newMyName += myName[i].toUpperCase();
        }
        else{
            newMyName += myName[i].toLocaleLowerCase();
        }
    }
    console.log(newMyName);



 
})();