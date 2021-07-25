//=========================================================[ENVIA UM CLIENTE PARA A VARIAVEL DE LISTA NEWSLETTER]===========================================//
function sendForm(formName,FormEmail){
    localStorage.setItem("Nome",formName);
    localStorage.setItem("Email",FormEmail);
    document.getElementById("exampleSucess").innerHTML = "Salvamos em seu navegador o seu nome "+localStorage.getItem("Nome")+" e o seu e-mail "+localStorage.getItem("Email")+ " !";
    document.getElementById("exampleSucess").style.display = "block";
}

//=========================================================[ENVIA UM CLIENTE PARA A VARIAVEL localStorage ]===========================================//
function sendCliente(){
    let phone = document.getElementById("cliPhone").value;
    let nome = document.getElementById("cliNome").value;
    let email = document.getElementById("cliEmail").value;

    
    let cliente = JSON.parse(localStorage.getItem("Clientes"));

    if(cliente == null){
        localStorage.setItem("Clientes", "[]");
        cliente = [];
    }

    let cliAuxiliar = {
        nome: nome,
		phone: phone,
		email: email
    }
		cliente.push(cliAuxiliar);
		localStorage.setItem("Clientes", JSON.stringify(cliente));
}


//====================================[ENVIA UM PRODUTO PARA A VARIAVEL localStorage ]===========================================//
function sendProduto(){
    let titulo = document.getElementById("prodTitulo").value;
    let ean = document.getElementById("prodEan").value;


    let produto = JSON.parse(localStorage.getItem("Produtos"));

    if(produto == null){
        localStorage.setItem("Produtos", "[]");
        produto = [];
    }

    let prodAuxiliar = {
        titulo: titulo,
		ean: ean
    }

        produto.push(prodAuxiliar);
		localStorage.setItem("Produtos", JSON.stringify(produto));
}


//=========================================================[POPUPA A TABELA DE CLIENTES]===========================================//
function popCliTable(tabela) {
   
    var dados=[]

    if(JSON.parse(localStorage.getItem("Clientes")) != null){
        dados.push(JSON.parse(localStorage.getItem("Clientes")));
        console.log(dados[0]);
    }
    var nomes = [];
    var th = tabela.tHead.getElementsByTagName('th');
    var tbody = "";
    for (var i = 0; i < dados[0].length; i++) {
      tbody += "<tr>";
      tbody += "<td>"+  i +"</td>";
      tbody += "<td>"+  dados[0][i].nome +"</td>";
      tbody += "<td>"+  dados[0][i].email +"</td>";
      tbody += "<td>"+  dados[0][i].phone +"</td>";
      tbody += "<tr>";
    }
    tabela.tBodies[0].innerHTML = tbody;
  }

//=========================================================[POPUPA A TABELA DE PRODUTOS]===========================================//
function popProdTable(tabela) {

    var dados=[]

    if(JSON.parse(localStorage.getItem("Produtos")) != null){
        dados.push(JSON.parse(localStorage.getItem("Produtos")));
        console.log(dados[0]);
    }
    var nomes = [];
    var th = tabela.tHead.getElementsByTagName('th');
    var tbody = "";
    for (var i = 0; i < dados[0].length; i++) {
      tbody += "<tr>";
      tbody += "<td>"+  i +"</td>";
      tbody += "<td>"+  dados[0][i].titulo +"</td>";
      tbody += "<td>"+  dados[0][i].ean +"</td>";
      tbody += "<tr>";
    }
    tabela.tBodies[0].innerHTML = tbody;
}