import Client from "@/core/Client"
import { EditIcon, TrashIcon } from "./Icons"

type TabelaProps = {
    clientes: Client[]
    clienteSelecionado?: (cliente: Client) => void
    clienteExcluido?: (cliente: Client) => void
}

const Tabela = ({clientes, clienteExcluido, clienteSelecionado}: TabelaProps) => {

    const renderActions = clienteSelecionado || clienteExcluido

    const header = () => {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {renderActions && (<th className="p-4">Ações</th>)}
            </tr>
        )
    }

    const renderData = () => {
        return clientes?.map((cliente, id) => {
            return (
                <tr key={id} className={`${id % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {renderActions && (tableActions(cliente))}
                </tr>
            )
        })
    }

    const tableActions = (cliente: Client) => {
        return (
            <td className="flex justify-center"> 
                {clienteSelecionado && (
                    <button 
                        className="flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50"
                        onClick={() => clienteSelecionado?.(cliente)}
                    >
                        {EditIcon}
                    </button>
                )}

                {clienteExcluido && (
                    <button 
                        className="flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:bg-purple-50"
                        onClick={() => clienteExcluido?.(cliente)}
                    >
                        {TrashIcon}
                    </button>
                )}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800"> 
                {header()}
            </thead>

            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}

export { Tabela }