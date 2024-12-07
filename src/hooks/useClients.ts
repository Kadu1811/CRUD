import ColecaoCliente from "@/backend/db/ColecaoCliente"
import Client from "@/core/Client"
import { ClienteRepositorio } from "@/core/ClienteRepositorio"
import { useEffect, useState } from "react"
import { useVisible } from "./useVisible"

const useClients = () => {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const {
        showForm,
        showTable,
        visibleTable
    } = useVisible()

    const [client, setClient] = useState<Client>(Client.vazio())
    const [clients, setClients] = useState<Client[]>([])
  
    useEffect(obterTodos, [])
    
    function obterTodos() {
      repo.obterTodos().then(clients => {
        setClients(clients)
        showTable()
      })
    }
  
    function clienteSelecionado(cliente: Client) {
      setClient(cliente)
      showForm()
    }
  
    async function excluirCliente(cliente: Client) {
      await repo.excluir(cliente)
      obterTodos()
    }
  
    function novoCliente() {
      setClient(Client.vazio())
      showForm()
    }
  
    async function salvarCliente(cliente: Client) {
      await repo.salvar(cliente)
      obterTodos()
    }

    return {
        novoCliente,
        salvarCliente,
        clienteSelecionado,
        excluirCliente,
        obterTodos,
        client,
        clients,
        showTable,
        visibleTable
    }
}

export { useClients }