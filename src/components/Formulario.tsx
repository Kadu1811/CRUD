import { useState } from "react"
import { Entrada } from "./Entrada"
import Client from "@/core/Client"
import { TableButton } from "./TableButton"

type FormularioProps = {
        client: Client
        changeClient?: (client: Client) => void
        onClick?: () => void
}

const Formulario = ({client, onClick, changeClient}: FormularioProps) => {
    const id = client?.id ?? null

    const [nome, setNome] = useState(client?.nome ?? '')
    const [idade, setIdade] = useState(client?.idade ?? 0)

    return (
        <div> 
            {id && (
                <Entrada onlyRead texto="Código" value={id} className='mb-2' />
            )}

            <Entrada texto="Nome" value={nome} onChangeValue={setNome} className='mb-2' />
    
            <Entrada texto="Idade" type="number" value={idade} onChangeValue={setIdade} />

            <div className="flex justify-end mt-7">
                <TableButton color="blue" className="mr-2" onClick={() => changeClient?.(new Client(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </TableButton>

                <TableButton color="gray" onClick={onClick}>
                    Cancelar
                </TableButton>
            </div>
        </div>
    )
}

export { Formulario }