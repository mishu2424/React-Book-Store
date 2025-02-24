import { Outlet, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error=useRouteError();
    const navigate= useNavigate();
    const handleGoBack=()=>{
        navigate(-1);
    }
    console.log(error)
    return (
        <div>
            {
                error.status === 404 ? <div>
                    <p>Page not Found!!!</p>
                    <button onClick={handleGoBack} className="btn bg-red-500 text-white">Back</button>
                </div> : <Outlet></Outlet>
            }
        </div>
    );
};

export default ErrorPage;