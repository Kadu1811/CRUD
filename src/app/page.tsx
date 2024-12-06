'use client';

import { Layout } from "@/components/Layout";
import { Tabela } from "@/components/Tabela";
import { TableButton } from "@/components/TableButton";
import Client from "@/core/Client";

export default function Home() {
  const clientes = [
    new Client('Ana', 34, '1'),
    new Client('João', 21, '2'),
    new Client('Pedro', 49, '3'),
    new Client('Karlos', 11, '4')
  ]

  function clienteSelecionado(cliente: Client) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Client) {
    console.log("Excluir", cliente.nome)
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <TableButton className="mb-4">Novo Cliente</TableButton>
        </div>

        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
      </Layout>
    </div>
  );
}
