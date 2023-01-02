import GoogleButton from "react-google-button";
import "./login.scss";

export default function Login() {
  return (
    <div id="login">
      <div className="logo">
        <img src="vite.svg" />
      </div>
      <GoogleButton
        onClick={() => {
          console.log("Google button clicked");
        }}
      />
    </div>
  );
}
