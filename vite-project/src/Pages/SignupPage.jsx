import SignupForm from "../components/signup-form.jsx";
import plantImage from "../assets/plant.png";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row">
      {/* Left hero panel */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center gap-16 bg-[#F8DCC1] px-12 py-16 xl:px-16">
        <h1 className="max-w-md text-4xl leading-tight tracking-tight text-[black] xl:text-5xl">
          <span className="font-bold">Get step by step</span>
          <br />
          <span className="font-bold text-[#86A19A]">
            Learning path generator
          </span>{" "}
          that helps grow their skills
        </h1>
        <Link to="/">
          <img
            src={plantImage}
            alt=""
            className="mx-auto h-78 w-56 object-contain xl:w-72"
          /> 
        </Link>
      </div>

      {/* Right form panel */}
      <div className="flex flex-1 flex-col justify-center items-center p-6 md:p-10 lg:w-1/2 bg-[#F0EFED]">
        <div className="w-full max-w-sm">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;