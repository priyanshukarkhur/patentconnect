import { useState } from "react";

export default function Signup() {
  const [role, setRole] = useState("Inventor");

  const handleNext = () => {
    localStorage.setItem("role", role);
    window.location.href = "/login"; // go to login page
  };

  return (
    <div className="p-10 text-light">
      <h1 className="text-4xl font-bold mb-6">Join PatentHive</h1>

      <label className="block mb-2 text-lg">Select your role:</label>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="p-2 text-black rounded"
      >
        <option>Inventor</option>
        <option>Attorney</option>
        <option>Company</option>
      </select>

      <button
        onClick={handleNext}
        className="mt-6 bg-accent text-black px-6 py-3 rounded-lg font-semibold"
      >
        Continue
      </button>
    </div>
  );
}
