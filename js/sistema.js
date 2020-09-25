
/*
Trabalho de desenvolvimento web 2 APS 1 - Curso ciência da computação
Professor: Silvio Eutimio
Dupla: Allan Oliveira e Julio fonseca
Desenvolvedor: Allan Oliveira
Data:24/09/2020
Obs: os dados mocados como cpf são fakes sem validação.
*/
relogioPt = () => {
    var clock = document.getElementById('clock-desktop');
    var clock_mobile = document.getElementById('clock-mobile');
     document.getElementById('hora').innerHTML = (new Date).toLocaleString()
    setInterval(function () {
        clock.innerHTML = ((new Date).toLocaleString().substr(11, 8));  
        clock_mobile.innerHTML = ((new Date).toLocaleString().substr(11, 8));  
    }, 1000);
}

login = () =>{
    let usuario = document.getElementById('usuario').value
    let senha = document.getElementById('senha').value

    if(usuario== 'admin' && senha =='12345'){
        window.location.href='painel.html'
    }else{
        $('#modalLogin').modal('show')
    }

    document.getElementById('modal-titulo').className ='modal-header text-danger'
    document.getElementById('acao-btn').className ='btn btn-danger'
    document.getElementById('titulo').innerHTML = 'Erro ao tentar logar, apenas usuario master tem permissão'
    document.getElementById('mensagem').innerHTML = 'Verique se dados foram preenchidos corretamente'
    document.getElementById('acao').innerHTML = 'Voltar e continuar '
    $('#modalGravacao').modal('show')
}

cadastrar = () =>{

    nome = document.getElementById('name').value

    document.getElementById('dados').innerHTML = 'Funcionário ' +  nome + ' Cadastrado com Sucesso'
  
    
    $('#modalCadastro').modal('show')
}


cadastro = () => {

   window.location.href='cadastro.html'
    
}

consulta = () => {

    window.location.href='consulta.html'
     
 }


 voltar = () => {
    window.history.back()
 }

 sair = () =>  {
    window.location.href='index.html'
 }

 
var lista ='{"empregados":[' +
'{"nome":"Allan Oliveira","cpf":"13831277705","cargo":"programador","horario_entrada":"09:30","horario_saida":"17:00", "mes": "1" , "dia": "10"  },' +
'{"nome":"John ferreira","cpf":"13324777704","cargo":"programador JR", "horario_entrada":"09:00","horario_saida":"18:00","mes": "3" , "dia": "11"},' +
'{"nome":"John ferreira","cpf":"13324777704","cargo":"programador JR", "horario_entrada":"09:20","horario_saida":"18:50","mes": "1" , "dia": "12"},' +
'{"nome":"Andre alves","cpf":"14474778705","cargo":"programador pleno","horario_entrada":"09:00","horario_saida":"18:00","mes": "3" , "dia": "13" },' +
'{"nome":"Allan Oliveira","cpf":"13831277705","cargo":"programador","horario_entrada":"09:00","horario_saida":"18:00","mes": "3" , "dia": "13" },' +
'{"nome":"Silvio Eutimio","cpf":"13200724617","cargo":"gerente de projetos","horario_entrada":"09:00","horario_saida":"17:00","mes": "3" , "dia": "15" },' +
'{"nome":"Julio Fonseca","cpf":"24200724688","cargo":"analista de dados","horario_entrada":"09:00","horario_saida":"18:00","mes": "3" , "dia": "15" },' +
'{"nome":"Silvio Eutimio","cpf":"13200724617","cargo":"gerente de projetos","horario_entrada":"09:00","horario_saida":"17:30","mes": "3" , "dia": "16" },' +
'{"nome":"Allan Oliveira","cpf":"13831277705","cargo":"programador","horario_entrada":"09:30","horario_saida":"17:00", "mes": "1" , "dia": "16"  },' +
'{"nome":"John ferreira","cpf":"13324777704","cargo":"programador JR", "horario_entrada":"09:00","horario_saida":"18:00","mes": "3" , "dia": "17"},' +
'{"nome":"John ferreira","cpf":"13324777704","cargo":"programador JR", "horario_entrada":"09:20","horario_saida":"18:50","mes": "1" , "dia": "17"},' +
'{"nome":" Andre alves","cpf":"14474778705","cargo":"programador pleno","horario_entrada":"09:00","horario_saida":"18:00","mes": "3" , "dia": "17" },' +
'{"nome":"Allan Oliveira","cpf":"13831277705","cargo":"programador","horario_entrada":"09:00","horario_saida":"18:00","mes": "3" , "dia": "17" },' +
'{"nome":"Silvio Eutimio","cpf":"13200724617","cargo":"gerente de projetos","horario_entrada":"09:00","horario_saida":"17:00","mes": "3" , "dia": "17" },' +
'{"nome":"Silvio Eutimio","cpf":"13200724617","cargo":"gerente de projetos","horario_entrada":"09:00","horario_saida":"17:30","mes": "3" , "dia": "18" },' +
'{"nome":"Andre alves","cpf":"14474778705","cargo":"programador pleno","horario_entrada":"09:00","horario_saida":"17:50","mes": "3" , "dia": "17" },' +
'{"nome":"Camila Queiroz","cpf":"12344787799","cargo":"programador senior","horario_entrada":"09:00","horario_saida":"18:00","mes": "1" , "dia": "17"  },'+
'{"nome":"Julio Fonseca","cpf":"24200724688","cargo":"analista de dados","horario_entrada":"09:00","horario_saida":"18:00","mes": "3" , "dia": "18" },' +
'{"nome":"Camila Queiroz","cpf":"12344787799","cargo":"programador senior","horario_entrada":"09:10","horario_saida":"18:00","mes": "1" , "dia": "18"  }]}';

var obj = JSON.parse(lista);

 console.log("Lista total ",obj.empregados)

loginFuncionario = () =>{
    let cpf = document.getElementById('cpf').value

    obj.empregados.forEach(function(d){   

       d.cpf

     if(cpf == d.cpf){
        empregado =  obj.empregados.filter(function(f) { return f.cpf == cpf}) 
        window.location.href='paginas/painel-funcionario.html?ip='+empregado[0].nome
    }else{

        $('#modal').modal('show')
    }
    })
   
  var empregado =  obj.empregados.filter(function(f) { return f.cpf == cpf}) 

//    console.log(empregado[0].nome)

//    document.getElementById('nome').innerHTML = empregado[0].nome
  
   
}

