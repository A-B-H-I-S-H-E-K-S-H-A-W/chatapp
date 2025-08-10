import React from "react";
import Button from "../components/Button";

const WelcomePage = () => {
  return (
    <>
      <div className="h-screen w-full bg-background">
        <div className="flex flex-col gap-10 justify-center items-center h-full">
          <div className="">
            <h1 className="text-primary text-5xl font-bold">
              Welcome to Chatsapp
            </h1>
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
              Read our privacy policy. Tap Agree to continue or accept theterms
              and condition
            </p>
          </div>
          <div>
            <Button>Tap to continue</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
