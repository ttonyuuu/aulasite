function logar(){

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    //validar se o usuario e a senha sao igual 'admin'
//se for, imprimir ok
//senao, imprimir ERRO }

    if (usuario == 'admin' && senha == 'admin') {
        Swal.fire({
            title: 'Login realizado!',
            text: 'Bem-vindo, ' + usuario + '!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            setTimeout(() => {
                location.href = "./html/home.html";
            }, 100); 
        });
    } else {
        Swal.fire({
            title: 'Erro!',
            text: 'Usuário ou senha incorretos.',
            icon: 'error',
            confirmButtonText: 'Tentar novamente'
        });
    }
}



        
    









