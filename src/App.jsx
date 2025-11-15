import TableForm from "./TableForm.jsx"

export default function App () {
  return (
    <div className= "flex flex-col gap-4 items-center" >
      <TableForm/>
      <button
        className="px-4 py-2 rounded text-white bg-black font-bold max-w-[100px] cursor-pointer
                  hover:bg-gray-900 hover:scale-[1.02]"
      >
        Submit
      </button>
    </div>
  )
}