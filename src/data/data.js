interface DataProps {

}

interface DataObjectProps {
    icon: String;
    rounded: Boolean;
    smallText: String;
    largeText: String;
}

export default data = [
    {metrics: [
		{
			icon: <FaEye />,
			rounded: false,
			smallText: "Daily Views",
			largeText: "1,504",
		},
		{
			icon: <FaShoppingCart />,
			rounded: false,
			smallText: "Sales",
			largeText: "80",
		},
		{
			icon: <FaComments />,
			rounded: false,
			smallText: "Comments",
			largeText: "284",
		},
		{
			icon: <FaMoneyBill />,
			rounded: false,
			smallText: "Earning",
			largeText: "$7,842",
		},
    ]
},
    {orders: [
        {
         name: "Star Refrigerator", price: "$1200", payment: "paid", status: "Delivered"   
        },
        {
         name: "Window Coolers", price: "$110", payment: "paid", status: "Return"   
        },
        {
         name: "Speakers", price: "$620", payment: "due", status: "Pending"   
        },
        {
         name: "HP Laptop", price: "$110", payment: "due", status: "In Progress"   
        },
    ]
    },
    {customers: [
        {
            name: "David", country: "Italy", picture: "url"
        },
        {
            name: "Muhammad", country: "India", picture: "url"
        },
        {
            name: "Amelia", country: "France", picture: "url"
        },
    ]}
]