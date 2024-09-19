import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { GoogleOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import "../../App.css";
import { auth } from "../../utils/firebase";
import { GoogleAuthProvider , signInWithPopup } from "firebase/auth";


function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState([]);
  const navigate = useNavigate();
  
  const HandleLogin = () => {};

  const HandleGoBack = ()=>{navigate("/")};
    
  
  const HandleWithGoogle = (e) => {
    e.preventDefault()
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };


  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-Image">
      <ArrowLeftOutlined  onClick={HandleGoBack} className="absolute top-5 left-5 text-2xl" />
      <div className=" border-2 mx-auto p-6 gap-6 rounded-xl shadow-lg sm:w-full lg:max-w-md">
        <h1 className="text-center font-semibold text-4xl py-6">Sign in</h1>
        <form className="max-w-lg mx-auto">
          <div className="relative z-0 w-full mb-5 group">

            <input
              type="email"
              name="floating_email"
              id="floating_email"
              onChange={(e)=>{setEmail(e.target.value)}}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              onChange={(e)=>{setPassword(e.target.value)}}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>

         
          <div className="relative z-0 w-full mb-5 group">
            <button
              type="submit"
              onClick={HandleLogin}
              className="me-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Logins
            </button>
            <p className="text-center my-2">Or</p>
            <button
              type="submit"
              onClick={HandleWithGoogle}
              className="me-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login with <GoogleOutlined />
              oogle
            </button>

          
          </div>
        </form>
        <p>
          Don't have an account?{" "}
          <Link
            to={"/auth/signup"}
            className="text-blue-500 hover:text-blue-700"
          >
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
