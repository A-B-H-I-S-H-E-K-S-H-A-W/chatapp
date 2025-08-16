import { useState } from "react";
import Button from "../components/Button";
import { useCounterStore } from "../store/store";
import { useNavigate } from "react-router-dom";
import ButtonLoader from "../components/ui/Loading";
import loginbg from "../assets/background.jpg";

const ProfileSetup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
  });
  const email = useCounterStore((state) => state.email);
  const setUsername = useCounterStore((state) => state.setUsername);
  const loading = useCounterStore((state) => state.loading);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    useCounterStore.setState({ loading: true });
    try {
      const result = await setUsername(
        email,
        formData.username,
        formData.fullName
      );

      if (result.success) {
        navigate("/home");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      useCounterStore.setState({ loading: false });
    }
  };

  return (
    <>
      <div className="h-screen w-full bg-background">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="flex flex-col gap-8 py-18 justify-center items-center h-full">
            <div className="">
              <h1 className="h2">Setup your profile</h1>
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
                name="fullName"
                type="text"
                className="px-3 py-2 w-lg rounded-lg focus:outline-none"
                placeholder="Enter Full Name"
                onChange={handleChange}
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
              <Button
                disabled={loading}
                className={`${loading ? "bg-secondary" : "bg-accent"}`}
                onClick={handleSubmit}
              >
                {loading ? <ButtonLoader /> : "Tap to continue"}
              </Button>
            </div>
          </div>
          <div>
            <img className="h-screen w-full" src={loginbg} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSetup;
