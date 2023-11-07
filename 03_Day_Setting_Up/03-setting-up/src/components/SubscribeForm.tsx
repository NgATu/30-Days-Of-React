const SubscribeForm = () => {
  return (
    <div className="w-10/12 bg-[#bbdeed] rounded-md p-6 flex flex-col items-center gap-7">
      <h1 className="text-2xl">SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates.</p>
      <form className="flex flex-col items-center gap-4">
        <div className="flex gap-3">
          <input
            className="px-3 py-2 rounded-md"
            type="text"
            name="firstName"
            placeholder="First name"
          />
          <input
            className="px-3 py-2 rounded-md"
            type="text"
            name="lastName"
            placeholder="Last name"
          />
          <input
            className="px-3 py-2 rounded-md"
            type="text"
            name="email"
            placeholder="email"
          />
        </div>
        <button
          className="w-[18rem] rounded-md py-1 text-slate-50 bg-red-300"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
