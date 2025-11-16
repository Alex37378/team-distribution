import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React from "react"

//this Event component displays a button
export default function Event () {

    const location = useLocation();

    const navigate = useNavigate();

    //only true for now, only instructor would be able to change it
    const [isEvent, setIsEvent] = React.useState(true);

    //this displays button, but only if there is an event, always the case for now
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            {/*if user has submitted already, disable the button*/}
            {isEvent && <button
                className={`px-4 py-2 rounded text-white bg-green-800 font-bold max-w-[200px] cursor-pointer
                            hover:bg-green-700 hover:scale-[1.02]
                            disabled:cursor-not-allowed disabled:opacity-40 `}
                onClick={() => navigate("/teampage/form")}
                disabled={location.state?.hasSubmitted}
            >
                Fill Team Points Form
            </button>}
        </div>
    )
}