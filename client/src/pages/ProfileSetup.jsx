import { useState } from "react";
import Button from "../components/Button";
import { useCounterStore } from "../store/store";
import { useNavigate } from "react-router-dom";

const ProfileSetup = () => {
  const [formData, setFormData] = useState({
    username: "",
  });
  const email = useCounterStore((state) => state.email);
  const setUsername = useCounterStore((state) => state.setUsername);
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
      const result = await setUsername(email, formData.username);

      if (result.success) {
        navigate("/home");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-screen w-full bg-background">
        <div className="flex flex-col gap-10 justify-center items-center h-full">
          <div className="">
            <h1 className="h2">Setup your profile {email}</h1>
          </div>
          <div>
            <img
              className="size-64"
              src="https://www.pinclipart.com/picdir/big/221-2217551_computer-user-clip-art.png"
              alt="img"
            />
          </div>
          <div className="bg-white p-2 rounded-xl shadow-lg border-1">
            <input
              name="username"
              type="text"
              className="px-3 py-2 w-lg rounded-lg focus:outline-none"
              placeholder="Enter Username"
              onChange={handleChange}
            />
          </div>
          <div>
            <Button onClick={handleSubmit} className={""}>
              Tap to continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSetup;
