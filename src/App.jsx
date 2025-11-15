import TableForm from "./TableForm.jsx"
import React from "react"

export default function App () {

  const [errorScore, setErrorScore] = React.useState(false);
  const [errorTotal, setErrorTotal] = React.useState(false);

  let submit = !(errorScore || errorTotal);

  function validateData (scores, total, expectedTotal) {

    for (let i; i< scores.length; i++) {
      if (!Number.isInteger(scores[i]) || scores[i] < 0) {
        setErrorScore(true)
      }
    }

    if (total !== expectedTotal) {
      setErrorTotal(true)
    }

    <ul>
      {errorScore && <li>Error: One or more scores are not valid</li>}
      {errorTotal && <li>Error: Expected total and actual total do not match</li>}
    </ul>
  }

  return (
    <div className= "flex flex-col gap-4 items-center" >
      <TableForm/>
      <button
        className="px-4 py-2 rounded text-white bg-black font-bold max-w-[100px] cursor-pointer
                  hover:bg-gray-900 hover:scale-[1.02]"
        onClick={() => validateData() }
      >
        Submit
      </button>
      <p>{validateData}</p>
      {submit && <p>Submitted successfully</p>}
    </div>
  )
}