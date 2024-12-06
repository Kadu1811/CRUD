type ButtonProps = {
    color?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
}

const TableButton = ({color, className, children}: ButtonProps) => {
    const cor = color ?? 'green'

    return (
        <button className={`bg-gradient-to-r from-${cor}-400 to-${cor}-700 text-white px-4 py-2 rounded-md ${className}`}>
            {children}
        </button>
    )
}

export { TableButton }