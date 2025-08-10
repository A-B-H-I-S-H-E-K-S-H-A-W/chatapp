import { useState } from "react";
import Button from "../components/Button";

const OtpPage = () => {
  const [formData, setFormData] = useState({
    callingCode: 0,
    number: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <>
      <div className="h-screen w-full bg-background">
        <div className="pt-20 text-center">
          <h1 className="h1">Chatsapp</h1>
        </div>
        <div className="flex flex-col items-center gap-10 mt-20 px-20 py-10 bg-white max-w-2xl mx-auto rounded-2xl">
          <div>
            <h2 className="h3">We have sent the OTP</h2>
          </div>
          <div className="max-w-lg text-center">
            <p>
              We have sent the 6-character OTP to number. Please enter the code
              below to continue
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white p-2 rounded-xl shadow-md">
            <input
              name="otp"
              type="number"
              className="flex-1 px-3 py-2 rounded-lg focus:outline-none"
              placeholder="6 digit OTP"
              onChange={handleChange}
            />
          </div>

          <div className="">
            <p className="p inline">Did'nt recieve the OTP</p>
            <span className="text-secondary font-semibold cursor-pointer">
              {" "}
              Click here
            </span>
          </div>
          <div>
            <Button onClick={handleSubmit}>Next</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpPage;
