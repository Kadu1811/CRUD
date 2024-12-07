type ButtonProps = {
    color?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

const TableButton = ({color, className, children, onClick}: ButtonProps) => {
    const cor = color ?? 'green'

    return (
        <button 
            className={`bg-gradient-to-r from-${cor}-400 to-${cor}-700 text-white px-4 py-2 rounded-md ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export { TableButton }