const { inserirAluno } = require('../controller/controllerAluno.js')
const { atualizarAluno } = require('../controller/controllerAluno.js')

const aluno = {
    id: 124,
    nome: "Artur",
    data_nascimento: "1990-04-04",
    telefone: "2232435353",
    email: "artur@alves.net",
    foto: "png",
    cpf: "48488566835",
    senha: "senha123",
    questao_condicao_medica: "nao",
    questao_lesoes: "nao",
    questao_medicamento: "nao",
    peso: "70.5",
    altura: "1.75",
    objetivo: "Perder peso",
    id_genero: 2
}
describe('Teste de ID não existente', () =>{
    test('Verificação do ID do aluno', async ()=>{
        const resultadoAluno = await atualizarAluno(aluno, aluno.id)
        console.log(resultadoAluno)
        expect(resultadoAluno.status).toBe(404)
    })
})

describe('Teste de ID não existente', () =>{
    test('Verificação do ID do aluno', async ()=>{
        const resultadoAluno = await atualizarAluno(aluno, aluno.id)
        console.log(resultadoAluno)
        expect(resultadoAluno.status).toBe(404)
    })
})

// describe('Teste de inserir aluno', () => {
//     test('Inserção de aluno na academia', async ()=> {
//         const resultadoAluno = await inserirAluno(aluno)
//         console.log(resultadoAluno)
//         expect(resultadoAluno.status).toBe(201)
//     })
// })

// describe('Teste de erro de inserção do aluno', () => {
//     test('Falha de cadastro do aluno', async ()=> {
//         const resultadoAluno = await inserirAluno(aluno)
//         console.log(resultadoAluno)
//         expect(resultadoAluno.status).toBe(400)
//     })
// })