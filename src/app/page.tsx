'use client';

import { Formulario } from "@/components/Formulario";
import { Layout } from "@/components/Layout";
import { Tabela } from "@/components/Tabela";
import { TableButton } from "@/components/TableButton";
import Client from "@/core/Client";
import { useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState<'table' | 'form'>('table')
  const [client, setClient] = useState<Client>(Client.vazio())

  const clientes = [
    new Client('Ana', 34, '1'),
    new Client('João', 21, '2'),
    new Client('Pedro', 49, '3'),
    new Client('Karlos', 11, '4')
  ]

  function clienteSelecionado(cliente: Client) {
    setClient(cliente)
    setVisible('form')
  }

  function clienteExcluido(cliente: Client) {
    console.log("Excluir", cliente.nome)
  }

  function novoCliente() {
    setClient(Client.vazio())
    setVisible('form')
  }

  function salvarCliente(cliente: Client) {
    console.log(cliente)
    setVisible('table')
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout titulo="Cadastro Simples">
        {visible === 'table' ? (
          <> 
            <div className="flex justify-end">
              <TableButton className="mb-4" onClick={novoCliente}>Novo Cliente</TableButton>
            </div>

            <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
          </>
        ): (
          <Formulario client={client} onClick={() => setVisible('table')} changeClient={salvarCliente} /> 
        )}

      </Layout>
    </div>
  );
}
