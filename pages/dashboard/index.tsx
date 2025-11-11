import { useEffect } from "react";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from "../../lib/firebase";

export default function DashboardRedirect() {
  const router = useRouter();
  const auth = getAuth(app);
  const db = getFirestore(app);

  useEffect(() => {
    async function load() {
      const user = auth.currentUser;
      if (!user) {
        router.push("/login");
        return;
      }

      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        router.push("/login");
        return;
      }

      const role = snap.data().role;

      if (role === "Inventor") router.push("/dashboard/inventor");
      else if (role === "Attorney") router.push("/dashboard/attorney");
      else if (role === "Company") router.push("/dashboard/company");
      else router.push("/login");
    }

    load();
  }, []);

  return <p className="text-center mt-20 text-xl text-gray-400">Loading Dashboard...</p>;
}
