import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useCounterStore } from "../store/store";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const setNmber = (number) => {
  useCounterStore.setState({ number: number });
};

const LoginPage = () => {
  const [formData, setFormData] = useState({
    callingCode: 0,
    number: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    useCounterStore.setState({ otp: otp });

    let refNumber = "+";

    for (let key in formData) {
      refNumber += formData[key];
    }
    setNmber(refNumber);

    try {
      const res = await axios.post("http://localhost:8000/auth/v1/login", {
        number: refNumber,
        otp: otp,
      });

      console.log("Response send", res.data);
    } catch (error) {
      console.log(error);
    }
    navigate("/otp");
  };

  return (
    <>
      <div className="h-screen w-full bg-background">
        <div className="pt-20 text-center">
          <h1 className="h1">Chatsapp</h1>
        </div>
        <div className="flex flex-col items-center gap-10 mt-20 px-20 py-10 bg-white max-w-2xl mx-auto rounded-2xl">
          <div>
            <h2 className="h3">Enter your phone number</h2>
          </div>
          <div className="max-w-lg text-center">
            <p>
              Whatsapp will need to verify your phone number. Carrier charges
              may apply. What's my phone number
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white p-2 rounded-xl shadow-md">
            <input
              name="callingCode"
              type="number"
              className="w-16 px-3 py-2 rounded-lg focus:outline-none"
              placeholder="+XX"
              onChange={handleChange}
            />
            <input
              name="number"
              type="number"
              className="flex-1 px-3 py-2 rounded-lg focus:outline-none"
              placeholder="Phone Number"
              onChange={handleChange}
            />
          </div>
          <div>
            <Button onClick={handleSubmit}>Next</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
