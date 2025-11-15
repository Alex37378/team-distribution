 import React from "react"
 import studRoster from "./studRoster.js"
 
 export default function TableForm () {

    const total = studRoster.length * 10

    let scrs = Array(studRoster.length).fill(0)
    const [scores, setScores] = React.useState(scrs)
    const [tot, setTot] = React.useState(0)

    function updateScores (number, index) {
        
        const updatedArr = scores.map((sc, i) =>
            i === index ? number : sc
        );

        setScores(updatedArr)

        let sum =0
        for (let i=0; i<updatedArr.length; i++) {
            sum += updatedArr[i]
        }

        setTot(sum)
    }

    return (
        <div className="flex justify-center max-w-[300px] mx-auto overflow-x-auto border border-red-500 mt-10">
            <table className="w-full border-collapse border border-gray-300 text-left">
                <thead className="bg-gray-100">
                    <tr>
                        <th 
                            className="border border-gray-300 px-4 py-2 text-center"
                            colSpan={2}
                        >Team 1</th>
                    </tr>
                </thead>
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
