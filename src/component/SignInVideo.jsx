import ExpenseTracker from "../assets/signUp.mp4";
const SignInVideo = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={ExpenseTracker} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SignInVideo;
