import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#A020F0", "#FFA500", "#FFD700"];

function Charts({ expenses }) {
    const data = ["Food", "Entertainment", "Travel"].map((cat) => ({
        name: cat,
        value: expenses
            .filter((e) => e.category === cat)
            .reduce((acc, curr) => acc + curr.price, 0),
    }));

    return (
        <div className="chart">
            <PieChart width={200} height={200}>
                <Pie data={data} dataKey="value" outerRadius={80}>
                    {data.map((entry, index) =>(

                        <Cell key={index} fill={COLORS[index]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
}

export default Charts;