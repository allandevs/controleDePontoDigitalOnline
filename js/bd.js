
/*
Trabalho de desenvolvimento web 2 APS 1 - Curso ciência da computação
Professor: Silvio Eutimio
Dupla: Allan Oliveira e Julio fonseca
Desenvolvedor: Allan Oliveira
Data:24/09/2020
Obs: os dados mocados como cpf são fakes sem validação.
*/
recuperaRegistros = () => {

let lista = '{"empregados":[' +
'{"nome":"Allan Oliveira","cpf":"13831277705","cargo":"programador JR","horario_entrada":"09:30","horario_saida":"17:00", "mes": "1" , "dia": "10"  },' +
'{"nome":"John ferreira","cpf":"13324777704","cargo":"programador Pleno", "horario_entrada":"09:00","horario_saida":"18:00","mes": "3" , "dia": "11"},' +
'{"nome":"John ferreira","cpf":"13324777704","cargo":"programador Pleno", "horario_entrada":"09:20","horario_saida":"18:50","mes": "1" , "dia": "12"},' +
'{"nome":"Andre alves","cpf":"14474778705","cargo":"programador pleno","horario_entrada":"09:00","horario_saida":"18:00","mes": "3" , "dia": "13" },' +
'{"nome":"Allan Oliveira","cpf":"13831277705","cargo":"programador JR","horario_entrada":"09:00","horario_saida":"18:00","mes": "3" , "dia": "13" },' +
'{"nome":"Silvio Eutimio","cpf":"13200724617","cargo":"gerente de projetos","horario_entrada":"09:00","horario_saida":"17:00","mes": "3" , "dia": "15" },' +
'{"nome":"Julio Fonseca","cpf":"24200724688","cargo":"analista de dados","horario_entrada":"09:00","horario_saida":"18:00","mes": "3" , "dia": "15" },' +
'{"nome":"Silvio Eutimio","cpf":"13200724617","cargo":"gerente de projetos","horario_entrada":"09:00","horario_saida":"17:30","mes": "3" , "dia": "16" },' +
'{"nome":"Allan Oliveira","cpf":"13831277705","cargo":"programador JR","horario_entrada":"09:30","horario_saida":"17:00", "mes": "1" , "dia": "16"  },' +
'{"nome":"John ferreira","cpf":"13324777704","cargo":"programador JR", "horario_entrada":"09:00","horario_saida":"18:00","mes": "3" , "dia": "17"},' +
'{"nome":"John ferreira","cpf":"13324777704","cargo":"programador JR", "horario_entrada":"09:20","horario_saida":"18:50","mes": "1" , "dia": "17"},' +
'{"nome":" Andre alves","cpf":"14474778705","cargo":"programador pleno","horario_entrada":"09:00","horario_saida":"18:00","mes": "3" , "dia": "17" },' +
'{"nome":"Allan Oliveira","cpf":"13831277705","cargo":"programador JR","horario_entrada":"09:00","horario_saida":"18:00","mes": "3" , "dia": "17" },' +
'{"nome":"Silvio Eutimio","cpf":"13200724617","cargo":"gerente de projetos","horario_entrada":"09:00","horario_saida":"17:00","mes": "3" , "dia": "17" },' +
'{"nome":"Silvio Eutimio","cpf":"13200724617","cargo":"gerente de projetos","horario_entrada":"09:00","horario_saida":"17:30","mes": "3" , "dia": "18" },' +
'{"nome":"Andre alves","cpf":"14474778705","cargo":"programador pleno","horario_entrada":"09:00","horario_saida":"17:50","mes": "3" , "dia": "17" },' +
'{"nome":"Camila Queiroz","cpf":"12344787799","cargo":"programador senior","horario_entrada":"09:00","horario_saida":"18:00","mes": "1" , "dia": "17"  },'+
'{"nome":"Julio Fonseca","cpf":"24200724688","cargo":"analista de dados","horario_entrada":"09:00","horario_saida":"18:00","mes": "3" , "dia": "18" },' +
'{"nome":"Camila Queiroz","cpf":"12344787799","cargo":"programador senior","horario_entrada":"09:10","horario_saida":"18:00","mes": "1" , "dia": "18"  }]}';

let obj = JSON.parse(lista);

let listaFuncionarios = document.getElementById('lista')


obj.empregados.forEach(function(d){   
    let linha = listaFuncionarios.insertRow()
    linha.insertCell(0).innerHTML = d.nome
    linha.insertCell(1).innerHTML = d.cpf
    linha.insertCell(2).innerHTML = d.cargo
    linha.insertCell(3).innerHTML = d.horario_entrada
    linha.insertCell(4).innerHTML = d.horario_saida
    linha.insertCell(5).innerHTML = d.dia
    switch(d.mes){
        case '1': d.mes = 'Janeiro'
        break
        case '2': d.mes = 'Fevereiro'
        break
        case '3': d.mes = 'Março'
        break
        case '4': d.mes = 'Abril'
        break
        case '5': d.mes = 'Maio'
        break
        case '6': d.mes = 'Junho'
        break
        case '7': d.mes = 'Julho'
        break
        case '8': d.mes = 'Agosto'
        break
        case '9': d.mes = 'Setembro'
        break
    }
    linha.insertCell(6).innerHTML = d.mes

})

 filtrar = () => {

    document.getElementById('lista').innerHTML=" "

  
    let listaFuncionarios = document.getElementById('lista')

    dia = document.getElementById('dia').value
    mes = document.getElementById('mes').value  
    cpf = document.getElementById('cpf').value 
    
    
    if(mes){
        
        empregado = obj.empregados.filter(function(f){ return f.mes == mes}) 

    }

    if(dia){

        empregado = obj.empregados.filter(function(f){ return f.dia == dia})

    }

    if(cpf){
        empregado =  obj.empregados.filter(function(f) { return f.cpf == cpf})
    }
 
    console.log("Lista de registros filtrados ",empregado)

    empregado.forEach(function(d){

        let linha = listaFuncionarios.insertRow()

        linha.insertCell(0).innerHTML = d.nome
        linha.insertCell(1).innerHTML = d.cpf
        linha.insertCell(2).innerHTML = d.cargo
        linha.insertCell(3).innerHTML = d.horario_entrada
        linha.insertCell(4).innerHTML = d.horario_saida
        linha.insertCell(5).innerHTML = d.dia
        linha.insertCell(6).innerHTML = d.mes

    })
 
        if(document.getElementById('lista').innerHTML == " "){
            document.getElementById('lista').style.color = "red";
            document.getElementById('lista').innerHTML= "Nenhum registro encontrado"
        }else{
            document.getElementById('lista').style.color = "#000";
        }

    }

    
    
}


