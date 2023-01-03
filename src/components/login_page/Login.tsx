import "./login_page.scss";
import GoogleButton from "react-google-button";
import { useState } from "react";
import AddExpense from "../main_page/add_expense/AddExpense";
export default function LoginPage() {
  const [isUserLoged, setIsUserLoged] = useState(false);
  return !isUserLoged ? (
    <AddExpense />
  ) : (
    <div id="login-page">
      <div className="hero-heading">
        <h2>WELCOME TO​</h2>
        <h1>FinDio</h1>
        <img src="/assets/login-hero.png" alt="login-hero" />
        <GoogleButton id="login-btn" onClick={() => setIsUserLoged(true)} />
      </div>
    </div>
  );
}
