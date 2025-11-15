 import React from "react"
 import studRoster from "./studRoster.js"
 
 export default function TableForm () {

    function makeRows () {

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

                    {studRoster.map((s) => (
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">{s.name}</td>
                            <td className="border border-gray-300 px-4 py-2 text-right">
                                <input
                                    type="text"
                                    placeholder="e.g. 10"
                                    className="max-w-[70px] bg-transparent focus:outline-none"
                                />
                            </td>
                        </tr>
                    ))}

                </tbody>
                <tfoot className="bg-gray-100">
                    <tr>
                        <td className="border border-gray-300 px-4 py-2 text-right font-bold">must sum to 120</td>
                        <td className="border border-gray-300 px-4 py-2 text-right font-bold">120</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
 }
