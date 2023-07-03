import LogIn from "./LogIn";
import LogInVideo from "./LogInVideo";
// import SignIn from "./SignIn";
// import SignInVideo from "./SignInVideo";

const Auth = () => {
  return (
    <div className="authContainer">
      <LogInVideo />
      {/* <SignInVideo /> */}
      {/* <SignIn /> */}
      <LogIn />
    </div>
  );
};

export default Auth;
