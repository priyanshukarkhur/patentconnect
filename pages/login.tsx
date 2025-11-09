import { auth, provider } from "../lib/firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginWithGoogle = async () => {
    await signInWithPopup(auth, provider);
    window.location.href = "/dashboard";
  };

  const loginWithEmail = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "/dashboard";
  };

  return (
    <div style={{ padding: 40, color: "white" }}>
      <h1>Login to PatentHive</h1>

      <button onClick={loginWithGoogle} style={{ marginTop: 20 }}>
        Sign in with Google
      </button>

      <div style={{ marginTop: 30 }}>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={loginWithEmail}>Login with Email</button>
      </div>
    </div>
  );
}
