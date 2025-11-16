import TableForm from "./TableForm.jsx"
import React from "react"
import { useNavigate } from "react-router-dom";

export default function Submit () {

  const navigate = useNavigate();

  const [tableInfo, setTableInfo] = React.useState({})

  const [first, setFirst] = React.useState(true);

  const [errorScore, setErrorScore] = React.useState(false);
  const [errorTotal, setErrorTotal] = React.useState(false);

  let submit = !(errorScore || errorTotal);

  function receiveFromTable(total, scores, exptotal) {
    setTableInfo({"total": total, "scores": scores, "exptotal": exptotal})
  }

  function validateData () {

    setFirst(false)

    let scorez = tableInfo["scores"]

    console.log(scorez)

    for (let i=0; i< scorez.length; i++) {
      if (!Number.isInteger(scorez[i]) || scorez[i] < 0) {
        setErrorScore(true)
        break;
      }
    }

    if (tableInfo["total"] !== tableInfo["exptotal"]) {
      setErrorTotal(true)
    }
  }

  useEffect(() => {
    if (submit) {
      navigate("/teampage"), {
        state: {hasSubmitted: true}
      };
    }
  }, [submit, first, navigate]);

  return (
    <div className= "flex flex-col gap-4 items-center" >
      <TableForm tableData={receiveFromTable}/>
      <button
        className="px-4 py-2 rounded text-white bg-black font-bold max-w-[100px] cursor-pointer
                  hover:bg-gray-900 hover:scale-[1.02]"
        onClick={() => validateData() }
      >
        Submit
      </button>

      {!first && errorScore && <p className="text-red-500">Error: One or more scores are not valid</p>}
      {!first && errorTotal && <p className="text-red-500">Error: Expected total and actual total do not match</p>}
    </div>
  )
}