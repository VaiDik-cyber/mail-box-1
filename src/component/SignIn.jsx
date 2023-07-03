import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmedPasswordRef = useRef();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [password, confirmPassword] = useState(true);
  const [validate, setValidate] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidate(true);

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredConfirmedPassword = confirmedPasswordRef.current.value;

    if (enteredPassword !== enteredConfirmedPassword) {
      confirmPassword(false);
    }

    if (enteredPassword === enteredConfirmedPassword) {
      setIsLoading(true);
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC_yolbLHb4IiBBN2V1VIG5QKIrhWoBFnY",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            confirmPassword: enteredConfirmedPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        confirmPassword(true);
        setIsLoading(false);
        if (res.ok) {
          alert("Success!");
          navigate.push("/login");
          console.log(res);
          //
        } else {
          res.json().then((data) => {
            let errorMsg = "Authotication Failed";
            if (data && data.error && data.error.message) {
              errorMsg = data.error.message;
            }
            confirmPassword(errorMsg);
          });
        }
      });
    }
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen relative top-0 right-0">
      <div className="hidden sm:block"></div>

      <div className="bg-inherit flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto rounded-lg bg-[rgb(226,175,161)] opacity-75 p-8 px-8 font-bold"
          onSubmit={submitHandler}
        >
          <h2 className="text-4xl dark:text-white font-bold text-center">
            SIGN IN
          </h2>
          <div className="flex flex-col text-[rgb(41,64,88)] py-2">
            <label>Username</label>
            <input
              className="rounded-lg bg-[rgb(216,237,248)] mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none focus:text-[rgb(216,237,248)]"
              type="text"
              ref={emailRef}
              required
            />
          </div>
          <div className="flex flex-col text-[rgb(41,64,88)] py-2">
            <label>Password</label>
            <input
              className="p-2 rounded-lg bg-[rgb(216,237,248)] mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none focus:text-[rgb(226,241,250)]"
              type="password"
              ref={passwordRef}
              required
            />
          </div>
          <div className="flex flex-col text-[rgb(41,64,88)] py-2">
            <label>Confirmed Password</label>
            <input
              className="p-2 rounded-lg bg-[rgb(216,237,248)] mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none focus:text-[rgb(226,241,250)]"
              type="password"
              ref={confirmedPasswordRef}
              required
            />
          </div>
          <div className="flex justify-between text-[rgb(41,64,88)] py-2">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
            <p>Forgot Password</p>
          </div>
          <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
            Create Account
          </button>
          {isLoading && <p>Loading....</p>}
          <p className="mb-0 mt-3 text-center">
            Already have an account??{" "}
            <Link
              to="/login"
              className="text-dark fw-bold border-b border-black"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
