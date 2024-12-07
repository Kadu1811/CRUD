import Client from "./Client"

interface ClienteRepositorio {
    salvar(cliente: Client): Promise<Client> 
    excluir(cliente: Client): Promise<void> 
    obterTodos(): Promise<Client[]> 
}

export type { ClienteRepositorio }