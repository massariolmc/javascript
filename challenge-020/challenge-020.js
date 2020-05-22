(function(win,doc){
    'use strict';

    //var $username = prompt('Qual o seu nome?');    
    var $username = prompt('Qual o seu nome?') || 'desconhecido';    
    if ($username === null)
        $username = 'Desconhecido';
    alert('Bem vindo: ' + $username);

    //var $email = prompt('Qual o seu email?') || 'desconhecido';
    var $email = prompt('Qual o seu email?');
    if($email === null)
        $email = 'Desconhecido';
       
    var $inputUserName = doc.querySelector('input[type="text"]');
    var $inputEmail = doc.querySelector('input[type="email"');
    var $message = doc.querySelector('textarea');
    var $button = doc.querySelector('button[type="submit"]');

    $inputUserName.value = $username;
    $inputEmail.value = $email;

    $button.addEventListener('click',function(event){
        event.preventDefault();
        if(!$inputUserName.value )
            return alert('Preencha o nome do usuário');
        else if(!$inputEmail.value)
            return alert('Preencha o email');
        else if(!$message.value)
            return alert('Preencha a message');
        else if (!isValidEmail($inputEmail.value))
            return alert('Digite um email válido.');
        else{
            var send = confirm("Tem certeza que deseja enviar o formulário?");
            if (send)
                alert("Enviado com sucesso");
            else   
                alert("Não enviado");
        }            
        
    },false);

    function isValidEmail(email){
        return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
    }

    console.log($inputUserName);
    console.log($inputEmail);
    console.log($message.value);
    console.log($button);

})(window,document);