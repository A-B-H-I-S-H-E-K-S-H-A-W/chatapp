import { useState } from "react";
import Button from "../components/Button";
import { useCounterStore } from "../store/store";
import { useNavigate } from "react-router-dom";
import Alert from "../components/ui/Alert";

const LoginPage = () => {
  const sendOtp = useCounterStore((state) => state.sendOtp);
  const [formData, setFormData] = useState({
    email: "",
  });
  const navigate = useNavigate();
  const [type, setType] = useState("");
  const [message, setMessage] = useState("Enter you email address");

  const setEmail = (email) => {
    useCounterStore.setState({ email: email });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setMessage("Enter a valid email address");
      setType("error");
      return;
    }

    const otp = Math.floor(100000 + Math.random() * 900000);
    useCounterStore.setState({ otp: otp });
    setEmail(formData.email);

    try {
      await sendOtp(formData.email);
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
        <div className="flex flex-col items-center gap-10 mt-20 px-20 py-10 bg-white max-w-3xl mx-auto rounded-2xl">
          <div>
            <h2 className="h3">Enter your email address</h2>
          </div>
          <div className="max-w-lg text-center">
            <p>
              Whatsapp will need to verify your email address. Carrier charges
              may apply. What's my phone number
            </p>
          </div>
          <div className="bg-white px-3 py-2 rounded-xl shadow-lg border-1">
            <input
              name="email"
              type="email"
              className="py-2 w-lg rounded-lg focus:outline-none"
              placeholder="Email Address"
              onChange={handleChange}
            />
            <Alert message={message} type={type} />
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
