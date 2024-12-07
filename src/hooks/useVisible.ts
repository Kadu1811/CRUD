import { useState } from "react"

const useVisible = () => {
    const [visible, setVisible] = useState<'table' | 'form'>('table')

    const showTable = () => setVisible('table')
    const showForm = () => setVisible('form')

    return {
        visibleForm: visible === 'form',
        visibleTable: visible === 'table',
        showForm, 
        showTable
    }

}

export { useVisible }