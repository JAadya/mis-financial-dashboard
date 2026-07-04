export const dashboardData = {

    kpis: [

        {
            title: "Revenue",
            value: "₹18.2 L",
            change: "12.4%",
            positive: true
        },

        {
            title: "Expenses",
            value: "₹8.6 L",
            change: "4.2%",
            positive: false
        },

        {
            title: "Gross Profit",
            value: "₹9.6 L",
            change: "8.3%",
            positive: true
        },

        {
            title: "Net Profit",
            value: "₹7.9 L",
            change: "6.1%",
            positive: true
        },

        {
            title: "Bank Balance",
            value: "₹14.3 L",
            change: "2.8%",
            positive: true
        },

        {
            title: "Cash Balance",
            value: "₹1.2 L",
            change: "1.5%",
            positive: false
        }

    ],

    revenueTrend: [

        { month: "Jan", revenue: 8 },
        { month: "Feb", revenue: 10 },
        { month: "Mar", revenue: 9 },
        { month: "Apr", revenue: 12 },
        { month: "May", revenue: 15 },
        { month: "Jun", revenue: 18 }

    ],

    expenseBreakdown: [

        { name: "Rent", value: 18 },
        { name: "Travel", value: 12 },
        { name: "Utilities", value: 15 },
        { name: "Professional", value: 22 },
        { name: "Subscriptions", value: 8 },
        { name: "Others", value: 25 }

    ],

    profitLoss: [

        {
            particular: "Revenue from Operations",
            amount: "₹18.2 L"
        },

        {
            particular: "Direct Expenses",
            amount: "₹8.6 L"
        },

        {
            particular: "Gross Profit",
            amount: "₹9.6 L"
        },

        {
            particular: "Operating Expenses",
            amount: "₹1.7 L"
        },

        {
            particular: "Net Profit",
            amount: "₹7.9 L"
        }

    ],

    aiInsights: [

{
text:"Revenue increased by 12.4% compared to last month.",
type:"positive"
},

{
text:"Operating expenses increased by 6%.",
type:"warning"
},

{
text:"Gross Profit Margin remains healthy.",
type:"success"
},

{
text:"Reduce travel expenses to improve profitability.",
type:"suggestion"
}

]

}