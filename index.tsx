
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 text-textlight">
      <h1 className="text-5xl font-bold text-accent mb-4">PatentHive</h1>
      <p className="text-lg opacity-90 max-w-xl">
        Connecting inventors, attorneys, and companies globally using intelligent matching.
      </p>
      <Link href="/signup" className="inline-block mt-6 bg-accent text-black px-6 py-3 rounded-lg font-semibold">
        Get Started
      </Link>
    </div>
  );
}
