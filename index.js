//carregar 0 modulo express//

const express = require('express')

// executar o módulo // 

const app = express()  

// defenir a pasta dos arquivosa  ejs //

app.set('views', './')



// criar uma instancia local //

app.listen(3050, ()=> {

    console.log("servidor local em http://localhost:3050")

})


//configuracao do banco de dados - inicio //

//importar o modulo mongoose //

const mongoose = require('mongoose')

//configurar o script de configuracao//

const conexao = ()=>{
 
mongoose.connect('mongodb+srv://user1:oi@fiaptecnico.zg8lq.mongodb.net/?retryWrites=true&w=majority')

}


// configurações do servidor - fim //

// rota para requisicao //

app.get('/', (req,res)=>{

    //res.send('Funcionando')//
    res.render('index.ejs')

 conexao()
// rota pARA A REQUISICAO // 

res.render('index.ejs', {nome:"Alunos Feiosos", turma: "2emia", disciplina:"LP2"})

})