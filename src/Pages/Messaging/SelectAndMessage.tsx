import { Link } from "react-router-dom"
export const SelectAndMessage = () => {
    const idone = "HTzcnxaBnmSolM5IgiDEwe79RQu1"
    const idtwo = "EI2fBzvER3R4h2XcbxsZsF10Be52"
    return (
        <div className=" ">
            <Link to={{ pathname: `/messages/${idone+"-"+idtwo}` }}>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Go to Messages
                </button>
            </Link>
        </div>
    )
}