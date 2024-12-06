type EntradaProps = {
    type?: 'text' | 'number'
    texto: string
    value: any
    onlyRead?: boolean
    onChangeValue?: (value: any) => void
    className?: string
}

const Entrada = ({texto, type, value, onlyRead, onChangeValue, className}: EntradaProps) => {
    return (
        <div className={`flex flex-col ${className}`}> 
            <label className="mb-2">
                {texto}
            </label>

            <input 
                type={type ?? 'text'} 
                value={value}
                readOnly={onlyRead}
                onChange={e => onChangeValue?.(e.target.value)}
                className={`border border-purple-500 rounded-lg focus:outline-none bg-gray-100 px-4 py-2 ${onlyRead ? '' : 'focus:bg-white'}`}
            />
        </div>
    )
}

export { Entrada }