const express = require('express');
const app = express();

app.use(express.json());

idCliente = 2;
const cliente = [{
    idCliente: "0",
    clienteNome: "James",
    clienteEndereco: "Rua Azul, 48",
    clienteCidade: "Cotia - SP"
},
{
    idCliente: "1",
    clienteNome: "Diego",
    clienteEndereco: "Estrada Nova, 321",
    clienteCidade: "Itabuna - BA"
},
{
    idCliente: "2",
    clienteNome: "Maria",
    clienteEndereco: "Estrada das Cobras, 481",
    clienteCidade: "São José dos Campos - SP"
}];


//retorna um exemplo
app.get('/clientes/:index', (req, res) => {
    const { index } = req.params;

    return res.json(cliente[index]);
});

//retorna todos os exemplos
app.get('/clientes', (req, res) => {
    return res.json(cliente);
});

//cria um exemplo
app.post('/clientes', (req, res) => {
    idCliente++;
    const { clienteNome } = req.body;
    const { clienteEndereco } = req.body;
    const { clienteCidade } = req.body;

    cliente[idCliente] = { idCliente: idCliente, clienteNome, clienteEndereco, clienteCidade };

    return res.json(cliente[idCliente]);
});

// atualizar um exemplo
app.put('/clientes/:index', (req, res) => {
    const { index } = req.params;
    const { idCliente } = req.body;
    const { clienteNome } = req.body;
    const { clienteEndereco } = req.body;
    const { clienteCidade } = req.body;

    cliente[index] = { idCliente, clienteNome, clienteEndereco, clienteCidade };
    return res.json(cliente);
});

// deletar um exemplo
app.delete('/clientes/:index', (req, res) => {
    const { index } = req.params;

    cliente.splice(index, 1);
    return res.json({ messege: "Cliente foi excluído." });
});

app.listen(3000, () => {
    console.log('Servidor conectado na porta 3000')
});