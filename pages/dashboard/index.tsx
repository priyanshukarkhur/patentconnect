import { useEffect } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function DashboardRouter() {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // If no user -> go login
      if (!user) return router.push("/login");

      // Get role saved at signup (temporary storage)
      const role = localStorage.getItem("role");

      if (role === "Inventor") router.push("/dashboard/inventor");
      else if (role === "Attorney") router.push("/dashboard/attorney");
      else if (role === "Company") router.push("/dashboard/company");
      else router.push("/signup"); // If no role, ask again
    });
  }, []);

  return <h1 style={{ textAlign: "center", marginTop: "40vh" }}>Redirecting...</h1>;
}
