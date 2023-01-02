import GoogleButton from "react-google-button";
import "./login.scss";

export default function Login() {
  return (
    <div id="login">
      <div className="heading">
        <h2>WELCOME TO​</h2>
        <h1>FinDio</h1>
      </div>
      <GoogleButton
        onClick={() => {
          console.log("Google button clicked");
        }}
      />
    </div>
  );
}
