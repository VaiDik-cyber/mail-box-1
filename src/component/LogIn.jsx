const LogIn = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen relative top-0 right-0">
      <div className="hidden sm:block"></div>

      <div className="bg-inherit flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto rounded-lg bg-[rgb(226,175,161)] opacity-75 p-8 px-8 font-bold"
          //   onSubmit={submitHandler}
        >
          <h2 className="text-4xl dark:text-white font-bold text-center">
            LOG IN
          </h2>
          <div className="flex flex-col text-[rgb(41,64,88)] py-2">
            <label>Username</label>
            <input
              className="rounded-lg bg-[rgb(216,237,248)] mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none focus:text-[rgb(216,237,248)]"
              type="text"
              //   ref={emailRef}
              required
            />
          </div>
          <div className="flex flex-col text-[rgb(41,64,88)] py-2">
            <label>Password</label>
            <input
              className="p-2 rounded-lg bg-[rgb(216,237,248)] mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none focus:text-[rgb(226,241,250)]"
              type="password"
              //   ref={passwordRef}
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
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
