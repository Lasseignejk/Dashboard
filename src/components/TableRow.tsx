interface TableRowProps {
    text: string | number
    centered?: boolean
    column?: string
}

const TableRow = ({text, centered, column}:TableRowProps) => {
    let color = ""

  return (
    <td id={column + "-" + text} className={`py-2 ${centered ? "text-center": ""} ${color}`}>
    <span className={``}>{text}</span>
    </td>
  )
}

export default TableRow