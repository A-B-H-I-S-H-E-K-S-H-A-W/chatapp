import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useCounterStore } from "../store/store";
import { useNavigate } from "react-router-dom";

const OtpPage = () => {
  const [formData, setFormData] = useState({
    otp: 0,
  });
  const [timer, setTimer] = useState(90);
  const email = useCounterStore((state) => state.email);
  const sendOtp = useCounterStore((state) => state.sendOtp);
  const verifyOtp = useCounterStore((state) => state.verifyOtp);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const result = await verifyOtp(email, formData.otp);

      navigate("/profile-setup");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (timer <= 0) return;
    const timeOut = setTimeout(() => {
      setTimer((prevVal) => prevVal - 1);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [timer]);

  const resend = () => {
    if (!email) {
      console.log("email not found");
    }
    sendOtp(email);
  };

  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;

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
              We have sent the 6-character OTP to{" "}
              <span className="font-bold">{email}</span>. Please enter the code
              below to continue.
            </p>
            <p>
              You can resend OTP after{" "}
              <span className="font-bold">
                {minutes}:{seconds}
              </span>
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
            {timer === 0 && (
              <span
                onClick={() => {
                  setTimer(90);
                  resend();
                }}
                className="text-secondary font-semibold cursor-pointer"
              >
                {" "}
                Click here
              </span>
            )}
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
