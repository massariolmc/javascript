(function(){
    'use strict';

    var maximiano = {
        name: 'Maximiano',
        lastName: 'Massariol'
    };

    var jessica = {
        name: 'Jessica',
        lastName: 'Shceffer'
    };

    function getFullName(){
        return this.name + ' ' + this.lastName;        
    }

    console.log('Os nomes da pessoas são: ');
    console.log(getFullName.call(maximiano));
    console.log(getFullName.call(jessica));
   

    function sum(){
        //console.log('Valor do arguments: ');
        console.log(arguments);      
        
        var result = Array.prototype.reduce.call(arguments, function(acumuled, actual){
            return Number(acumuled) + Number(actual);//força a variavel ser numero
            //return +acumuled + +actual; //o simbolo de + força a variavel ser numero, igual em cima
        });
        //console.log(result);        
        return result;
    }   
    
    console.log( 'Somar alguns números: '+ sum(20,30,40,877,343) + '\n');
    console.log('Somar alguns números: ' + sum(50,60,70,80,90) + '\n');
    console.log('Somar alguns números: ' + sum(80,90,100) + '\n');

    var useEntry = prompt('Entre com alguns números que serão somados: ');
    console.log('\nEntrada do usuário:' + useEntry);

    function justNumbers(str){
        return useEntry.replace(/\D+/g, ',').split(',');        

    }

    console.log('\n Entrada do usuário limpa. Somente números:' );
    var numbers = justNumbers(useEntry);
    console.log(numbers);

    console.log('\n Somar números entrados pelo usuário: ');

    console.log(sum.apply(sum, numbers));// Com o apply o primeiro argumento é o this(nesse caso é a própria função) e o segundo é uma array



})();