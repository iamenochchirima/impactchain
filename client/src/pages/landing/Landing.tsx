import { Link } from "react-router-dom";

const LandingPage = () => {

  
  return (
    <div className="min-h-screen overflow-hidden flex-col flex items-center ">
       {/* Background Video */}
       <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="z-10 flex flex-col items-center justify-center">
      <img
        className=""
        src="/i.c.logo2.png"
        alt="impact chain logo"
      />
      <div className="flex flex-col items-center justify-center md:text-6xl text-7xl">
        <h1>
          <span className="text-green-400  font-extrabold font-NeueMachinaUltrabold">
            impact.
          </span>
          <span className="text-white  font-extrabold font-NeueMachinaUltrabold">
            chain
          </span>
        </h1>
        <h2 className="text-white text-3xl font-NeueMachinaRegular font-thin">
          Measure Impact. Create Change.
        </h2>
      </div>

      <Link
        to="login"
        className=" mt-14 bg-custom-green px-20 py-2 items-center font-TelegraphRegular font-extrabold text-xl text-center rounded-xl"
      >
        Login
      </Link>
      </div>
    </div>
  );
};

export default LandingPage;
