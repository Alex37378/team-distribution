import TableForm from "./TableForm.jsx"
import React from "react"
import { useNavigate } from "react-router-dom";

//this Submit component displays Submit button as well as error messages if applicable
export default function Submit () {

  const navigate = useNavigate();
  
  //for keeping track of table information
  const [tableInfo, setTableInfo] = React.useState({})

  //for keeping track of if user has pressed "Submit" or not
  const [first, setFirst] = React.useState(true);

  //for keeping track of if there are errors in submitted form
  const [errorScore, setErrorScore] = React.useState(false);
  const [errorTotal, setErrorTotal] = React.useState(false);

  //get table information and put it as new state
  function receiveFromTable(total, scores, exptotal) {
    setTableInfo({"total": total, "scores": scores, "exptotal": exptotal})
  }

  //validate submitted form
  function validateData () {

    setFirst(false)

    setErrorScore(false);
    setErrorTotal(false);

    let error = false

    let scorez = tableInfo["scores"]

    //console.log(scorez)

    //if any scores in table are negative or decimal, then there is error
    for (let i=0; i< scorez.length; i++) {
      if (!Number.isInteger(scorez[i]) || scorez[i] < 0) {
        setErrorScore(true)
        error = true
        break;
      }
    }

    //if expected total and actual total are not same, then there is error
    if (tableInfo["total"] !== tableInfo["exptotal"]) {
      setErrorTotal(true)
      error = true
    }

    //if no errors, form is submitted and user is brought back to team page
    if (!error) {
      navigate("/teampage", {
        state: {hasSubmitted: true}
      });
    }
  }

  //display table and submit button
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

      {/*following error messages are displayed or not depending on errorScore and errorTotal*/}
      {!first && errorScore && <p 
        className="text-red-500"
      >
        Error: One or more scores are not valid
      </p>}

      {!first && errorTotal && <p 
        className="text-red-500"
      >
        Error: Expected total and actual total do not match
      </p>}

    </div>
  )
}