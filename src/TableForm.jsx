 import React from "react"
 import studRoster from "./studRoster.js"
 
 //this TableForm component displays a table with header, students, and footer
 export default function TableForm ( {tableData} ) {

    //calc expected total
    const total = studRoster.length * 10

    let scrs = Array(studRoster.length).fill(0)
    const [scores, setScores] = React.useState(scrs)
    const [tot, setTot] = React.useState(0)

    //pass table information to receivefromTable function in Submit.jsx if any info changes
    React.useEffect(() => {
        tableData(tot, scores, total)
    }, [tot, scores, total,])

    //update scores array state
    function updateScores (number, index) {
        
        //find index associated with input field that has changed, and when you do, change array[index] to be that new number
        const updatedArr = scores.map((sc, i) =>
            i === index ? number : sc
        );

        //update array state
        setScores(updatedArr)

        //update total state
        let sum =0
        for (let i=0; i<updatedArr.length; i++) {
            sum += updatedArr[i]
        }

        setTot(sum)
    }

    //returns a table with a header row, body rows, and footer row
    return (
        <div className="flex justify-center max-w-[300px] mx-auto overflow-x-auto mt-10">
            <table className="w-full border-collapse border border-gray-300 text-left">
                <thead className="bg-gray-100">
                    <tr>
                        <th 
                            className="border border-gray-300 px-4 py-2 text-center"
                            colSpan={2}
                        >Team 1</th>
                    </tr>
                </thead>

                {/*
                    For each student, make a row with two cells, one cell has their name, the other has an input field.
                    'onChange' makes it so that EVERY time input field is changed, it updates the scores array and the total
                */}
                <tbody>

                    {studRoster.map((s, index) => (
                        <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2">{s.name}</td>
                            <td className="border border-gray-300 px-4 py-2 text-right">
                                <input
                                    type="text"
                                    placeholder="e.g. 10"
                                    className="max-w-[70px] bg-transparent focus:outline-none"
                                    onChange = {(e) => updateScores(Number(e.target.value), index)}
                                />
                            </td>
                        </tr>
                    ))}

                </tbody>
                <tfoot className="bg-gray-100">
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 text-right font-bold">Must total {total}</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-bold">{tot}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
 }
