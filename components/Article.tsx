import Image from "next/image";
import logo from "../public/jest.svg";
import signInHero from "@/public/next.svg";
import Link from "next/link";

export default function Article() {
  return (
    <main className=" h-screen flex flex-col">
      <h2
        test-id="test-id-heading"
        className="bg-blue-600 py-4 text-3xl text-center rounded"
      >
        {" "}
        ARTICLE{" "}
      </h2>
      <div className="flex flex-col md:flex-row gap-16 md:gap-36">
        <div className="flex flex-col gap-24 md:py-16 md:px-24 p-5 md:h-screen">
          <Image src={logo} alt="lendSqr logo" className="w-28 md:w-56" />
          <Image
            src={signInHero}
            alt="lendSqr hero"
            className="hidden md:block"
          />
          <Link href="/test-page">LINK</Link>
        </div>
      </div>
    </main>
  );
}
