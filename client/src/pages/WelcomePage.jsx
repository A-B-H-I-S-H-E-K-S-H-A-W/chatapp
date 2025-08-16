import Button from "../components/Button";
import { Link } from "react-router-dom";
import loginbg from "../assets/background.jpg";

const WelcomePage = () => {
  return (
    <>
      <div className="h-screen w-full bg-background">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="flex flex-col gap-10 py-28 justify-center items-center h-full">
            <div className="">
              <h1 className="h1">Welcome to Chatsapp</h1>
            </div>
            <div>
              <img
                className="size-64"
                src="https://www.pinclipart.com/picdir/big/221-2217551_computer-user-clip-art.png"
                alt="img"
              />
            </div>
            <div className="max-w-lg text-center">
              <p>
                Read our privacy policy. Tap Agree to continue or accept
                theterms and condition
              </p>
            </div>
            <div>
              <Link to={"/login"}>
                <Button className={"bg-accent"}>Tap to continue</Button>
              </Link>
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

export default WelcomePage;
