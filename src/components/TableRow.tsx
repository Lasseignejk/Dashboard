interface TableRowProps {
    text: string | number
    centered?: boolean
    column?: string
}

const TableRow = ({text, centered, column}:TableRowProps) => {
    // const statusTitles = ["In Progress", "Pending", "Completed", "Scheduled"]
    let color = ""
    console.log(column + "-" + text)

    // if (statusTitles.includes(text)) {
    //     if (text == "In Progress") {
    //         color = "text-white bg-blue-500 text-right"
    //     }
    //     else if (text == "Pending") {
    //         color = "text-white bg-yellow-500 text-right"
    //     }
    //     else if (text == "Completed") {
    //         color = "text-white bg-green-500 text-right"
    //     } else if (text == "Scheduled") {
    //         color = "text-white bg-purple-500 text-right"
    //     }
    // }
  return (
    <td id={column + "-" + text} className={`py-1 ${centered ? "text-center": ""} ${color}`}>
    <span className={``}>{text}</span>
    </td>
  )
}

export default TableRow