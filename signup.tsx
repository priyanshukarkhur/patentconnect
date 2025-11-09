
import { useState } from "react";

export default function Signup() {
  const [role, setRole] = useState("inventor");

  return (
    <div className="p-10 text-textlight">
      <h1 className="text-4xl font-bold text-accent mb-6">Join PatentHive</h1>

      <label className="block mb-3 text-lg">Select your role:</label>
      <select
        value={role}
        onChange={(e)=>setRole(e.target.value)}
        className="bg-bg border border-accent p-2 rounded"
      >
        <option value="inventor">Inventor</option>
        <option value="attorney">Attorney</option>
        <option value="company">Company / Organization</option>
      </select>

      <p className="mt-6 opacity-80">
        Next step: We will integrate Firebase Authentication (Google + Email login).
      </p>
    </div>
  );
}
