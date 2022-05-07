function validaSejaJogador(){
	var nome = document.sejaPatrocinador.txtnome.value;
	var regExpNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})$");
	
	if(!regExpNome.test(nome)){
		alert("Preencha o campo nome corretamente.");
		document.sejaPatrocinador.txtnome.focus();
		return false;
	}
	
	
	var cpf = document.sejaPatrocinador.txtcpf.value;
	var regExpCpf = new RegExp("^([0-9]{3}[.]{1}){2}[0-9]{3}[-]{1}[0-9]{2}$");
	
	if(!regExpCpf.test(cpf)){
		alert("Preencha o campo CPF corretamente.");
		document.sejaPatrocinador.txtcpf.focus();
		return false;
	}
	
	
	var fone = document.sejaPatrocinador.txtfone.value;
	var regExpFone = new RegExp("^[1-9]{2}[ ]{1}[0-9]{4,5}[-]{1}[0-9]{4}$")
	//var regExpFone = new RegExp("^\d{2}\s{1}\d{4,5}[-]{1}\d{4}$");
	
	if(!regExpFone.test(fone)){
		alert("Preencha o campo telefone corretamente.");
		document.sejaPatrocinador.txtfone.focus();
		return false;
	}
	
	var email = document.sejaPatrocinador.txtemail.value;
	var regExpEmail = new RegExp("^([A-z]+)[\w\.-]*@{1}[a-z]+(\.{1}[a-z]+)$");
	
	if(!regExpEmail.test(email)){
		alert("Preencha o campo de e-mail corretamente.");
		document.sejaPatrocinador.txtemail.focus();
		return false;
	}
	
	if(document.sejaPatrocinador.aceitaTermos.checked==false){
		alert("Você deve aceitar os termos")
		return false;
	}
	return true;
}
function tipoPessoa(){
	var tipoPessoa = document.getElementById("nomeReal");
	var tipoDocumento = document.getElementById("documento");
	if(document.sejaPatrocinador.selTipo.value=="PF"){
		console.log(document.sejaPatrocinador.selTipo.value);
		tipoPessoa.innerHTML = "Nome";
        tipoDocumento.innerHTML = "CPF";
        document.getElementById("nome").placeholder="José da Silva";
        document.getElementById("cpf").placeholder='000.000.000-00';
	} else if(document.sejaPatrocinador.selTipo.value=="PJ"){
		tipoPessoa.innerHTML = "Nome Empresa";
        tipoDocumento.innerHTML = "CNPJ";
        document.getElementById("nome").placeholder='SENAI';
        document.getElementById("cpf").placeholder='00.000.000/0001-00';
	} else {
		tipoPessoa.innerHTML = "Nome Físico ou Jurídico";
        tipoDocumento.innerHTML = "CPF ou CNPJ";
        document.getElementById("cpf").placeholder='';
        document.getElementById("nome").placeholder='';
	}
}
function validaSejaPatrocinador (){
	if(document.sejaPatrocinador.selTipo.value==""){
		alert("Você deve selecionar o tipo de pessoa.");
		document.sejaPatrocinador.selTipo.focus();
		return false;
    }
    
    var nome = document.sejaPatrocinador.txtnome.value;
    var regExpNomePj = new RegExp("^[A-zÀ-ü0-9]+([ ]{1}[A-zÀ-ü0-9])*$");
    var regExpNomePf = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})$");

    var numeroDocumento = document.sejaPatrocinador.txtcpf.value;
    var regExpCpf = new RegExp ("^([0-9]{3}[.]{1}){2}[0-9]{3}[-]{1}[0-9]{2}");
    var regExpCnpj = new RegExp ("^[0-9]{2}([.]{1}[0-9]{3}){2}[/]{1}(0001){1}[-]{1}[0-9]{2}$")
    //XX.XXX.XXX/0001-XX
    
    if(document.sejaPatrocinador.selTipo.value=="PF"){
        if(!regExpNomePf.test(nome)){
            alert("Preencha o campo nome corretamente");
            document.sejaPatrocinador.txtnome.focus();
            return false;
        }
        if(!regExpCpf.test(numeroDocumento)){
            alert("Preencha o campo CPF corretamente");
		    document.sejaPatrocinador.txtcpf.focus();
		    return false;
        }

    } else if (document.sejaPatrocinador.selTipo.value=="PJ"){
        if(!regExpNomePj.test(nome)){
            alert("Preencha o campo nome corretamente");
            document.sejaPatrocinador.txtnome.focus();
            return false;
        }
        if(!regExpCnpj.test(numeroDocumento)){
            alert("Preencha o campo CNPJ corretamente");
		    document.sejaPatrocinador.txtcpf.focus();
		    return false;
        }
    }

    var fone = document.sejaPatrocinador.txtfone.value;
    var regExpFone = new RegExp("^[1-9]{2}[ ]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
	
	if(!regExpFone.test(fone)){
		alert("Preencha o campo telefone corretamente");
		document.sejaPatrocinador.txtfone.focus();
		return false;
	}
	
	var email = document.sejaPatrocinador.txtemail.value;
	var regExpEmail = new RegExp("^([A-z]+)[\w\.-]*@{1}[a-z]+(\.{1}[a-z]+)$");
	
	if(!regExpEmail.test(email)){
		alert("Preencha o campo de e-mail corretamente.");
		document.sejaPatrocinador.txtemail.focus();
		return false;
	}
	
	var radio_buttons = document.sejaPatrocinador.tipoContr;
	console.log(radio_buttons);
	var re = false;
	for (var i=0;i<radio_buttons.length; i++){
		if(radio_buttons[i].checked==true){
			re = true;
			console.log(re);
		}
	}
	if (re==false){
		alert("Escolha um tipo de contribuição");
		return false;
    }
    
    var valorContribuicao = document.sejaPatrocinador.txtvalor.value;
    var regExpValor = new RegExp("^([0-9]{1,}[,]{1}[0-9]{2})$")
	
	if(!regExpValor.test(valorContribuicao)){
		alert("Preencha o campo de valor de doação corretamente");
		document.sejaPatrocinador.txtvalor.focus();
		return false;
	}	
	return true;
}