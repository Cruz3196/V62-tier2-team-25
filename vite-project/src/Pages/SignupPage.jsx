import SignupForm from "../components/signup-form.jsx";
import leafImage from "../assets/leaf.png";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="grid w-full lg:grid-cols-3">
      {/* Left hero panel */}
      <div className="hidden lg:flex flex-col justify-center gap-16 bg-[#F2E4D4] px-12 py-16 xl:px-16">
        <h1 className="max-w-md text-4xl leading-tight tracking-tight text-[#6B6B6B] xl:text-5xl">
          <span className="font-bold">Get step by step</span>
          <br />
          <span className="font-bold text-[#86A19A]">
            Learning path generator
          </span>{" "}
          that helps grow their skills
        </h1>
        <Link to="/">
          <img
            src={leafImage}
            alt=""
            className="mx-auto h-78 w-56 object-contain xl:w-72"
          />
        </Link>
      </div>

      {/* Right form panel */}
      <div className="flex flex-col gap-4 p-6 md:p-10 lg:col-span-2">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
