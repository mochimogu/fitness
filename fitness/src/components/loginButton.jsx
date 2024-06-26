import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import image from '../images/runer-silhouette-running-fast.png'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/workout",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return (
    <div className="d-flex flex-column text-center w-50 m-auto mt-5 p-5 border rounded shadow bg-body-secondary">
        <img src={image} className="img-thumbnail h-25 w-25 m-auto rounded" alt="logo running"/>
        <h1 className="fs-1 mb-2 mt-3">MiniFit</h1>
        <h1 className="fs-4 mb-5">A minimal approach to fitness & dieting</h1>
        <div className="btn-group w-50 m-auto">
            <button type="button" onClick={() => loginWithRedirect()} className="btn btn-primary">Log In</button>
            <button type="button" onClick={handleSignUp} className="btn btn-primary">Sign Up</button>
        </div>
    </div>
  );
};

export default LoginButton;