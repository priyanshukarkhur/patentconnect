import { useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../lib/firebase";
import { doc, setDoc, getFirestore } from "firebase/firestore";

const db = getFirestore();

export default function JoinPatentHive() {
  const [role, setRole] = useState("Inventor");
  const router = useRouter();

  const handleContinue = async () => {
    const user = auth.currentUser;
    if (!user) return alert("Please sign in first.");

    await setDoc(doc(db, "users", user.uid), {
      role,
      email: user.email,
      createdAt: new Date(),
    });

    router.push(`/dashboard/${role.toLowerCase()}`);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Join PatentHive</h1>

      <label>Select your role: </label>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option>Inventor</option>
        <option>Attorney</option>
        <option>Company</option>
      </select>

      <br /><br />
      <button onClick={handleContinue} style={{ padding: "8px 18px" }}>
        Continue →
      </button>
    </div>
  );
}
