import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [role, setRole] = useState("Inventor");

  return (
    <div className="p-10 text-center text-light">
      <h1 className="text-5xl font-bold text-accent mb-6">PatentHive</h1>

      <p className="text-lg opacity-90 max-w-xl mx-auto mb-8">
        Connecting inventors, attorneys, and companies globally using intelligent matching.
      </p>

      <div className="my-6">
        <label className="text-lg mr-3">Select your role:</label>
        <select
          className="p-2 rounded text-black"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Inventor</option>
          <option>Attorney</option>
          <option>Company</option>
        </select>
      </div>

      <p className="my-6 text-xl">Next step: Create your account →</p>

      <Link
        href={{
          pathname: "/signup",
          query: { role }
        }}
        className="inline-block mt-4 bg-accent text-black px-6 py-3 rounded-lg font-semibold"
      >
        Continue to Signup
      </Link>
    </div>
  );
}
