import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React from "react"

export default function Event () {

    const location = useLocation();

    const navigate = useNavigate();

    const [isEvent, setIsEvent] = React.useState(true);

    return (
        <div className="flex justify-center items-center h-screen w-screen">
            {isEvent && <button
                className={`px-4 py-2 rounded text-white bg-green-800 font-bold max-w-[200px]
                            hover:bg-green-700 hover:scale-[1.02]
                            ${location.state?.hasSubmitted ? "cursor-not-allowed" : "cursor-pointer"}`}
                onClick={() => navigate("/teampage/form")}
                disabled={location.state?.hasSubmitted}
            >
                Fill Team Points Form
            </button>}
        </div>
    )
}