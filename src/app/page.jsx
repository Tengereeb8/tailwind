export default function Home() {
  return (
    <div>
      <Profile />
    </div>
  );
}
const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="  w-70 h-120 bg-[#fcfcfc] text-black rounded-[40px]">
        <div className="w-70 h-70">
          <img
            className="w-full h-full rounded-[40px] p-2 "
            src="/profile.png"
            alt=""
          />
        </div>
        <div className="flex flex-col  gap-1 px-7">
          <h1 className="text-[22px] flex items-center pt-5">
            Sophie Bennett <img src="/check.svg" alt="" />
          </h1>
          <p>Product Designer who focuses on simplicity & usability. </p>
        </div>
        <div className="flex px-7 gap-1 pt-5">
          <div className="flex gap-1 items-center">
            <img src="/follow.svg" alt="" /> 312
          </div>
          <div className="flex gap-1 items-center">
            <img src="/icon.svg" alt="" /> 48
          </div>
          <div className="w-27.25 h-11 bg-[#efefef] rounded-4xl flex items-center justify-center">
            Follow +
          </div>
        </div>
      </div>
    </div>
  );
};
