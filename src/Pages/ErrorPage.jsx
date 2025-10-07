import { AlertCircle } from "lucide-react";
import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () =>
{

    const error =  useRouteError();
    const navigate = useNavigate();
    console.log(navigate);
     const handleGoBackbtn = () =>
     {
       navigate(-1);
     }
     const handleGoHomebtn = () =>
     {
       navigate("/");
     }
    if(error.status === 404)
    {
    
    return(
        <div style={{backgroundColor:"black"}}>
          
      <div  className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="text-center p-8 rounded-2xl shadow-xl bg-gray-800/60 backdrop-blur-md max-w-md">
        <div className="flex justify-center mb-4">
          <AlertCircle className="w-16 h-16 text-red-500" />
        </div>

        <h1 className="text-5xl font-bold mb-3">Oops!</h1>
        <p className="text-lg text-gray-300 mb-6">
          Something went wrong. The page you’re looking for doesn’t exist or has
          been moved.
        </p>

        <button
          onClick={handleGoHomebtn}
          className="px-6 py-2 text-lg rounded-xl shadow-lg bg-red-500 hover:bg-red-600 transition-transform hover:scale-105"
        >
          Go Home
        </button>

        <button
          onClick={handleGoBackbtn}
          className="px-6 py-2 text-lg rounded-xl shadow-lg bg-red-500 hover:bg-red-600 transition-transform hover:scale-105"
        >
          Back To Recent
        </button>
      </div>
    </div>
    </div>

    )
    
    }
    console.log(error)
    return(
        <><h1>The Page You are looking is not foun</h1></>
    )
    
}