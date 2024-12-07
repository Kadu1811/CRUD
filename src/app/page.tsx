'use client';

import { Formulario } from "@/components/Formulario";
import { Layout } from "@/components/Layout";
import { Tabela } from "@/components/Tabela";
import { TableButton } from "@/components/TableButton";
import { useClients } from "@/hooks/useClients";

export default function Home() {
  const { 
    clienteSelecionado, 
    excluirCliente, 
    novoCliente, 
    salvarCliente, 
    clients, 
    client,
    showTable,
    visibleTable
  } = useClients()

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout titulo="Cadastro Simples">
        {visibleTable ? (
          <> 
            <div className="flex justify-end">
              <TableButton className="mb-4" onClick={novoCliente}>Novo Cliente</TableButton>
            </div>

            <Tabela clientes={clients} clienteSelecionado={clienteSelecionado} clienteExcluido={excluirCliente}></Tabela>
          </>
        ): (
          <Formulario client={client} onClick={showTable} changeClient={salvarCliente} /> 
        )}

      </Layout>
    </div>
  );
}
