import Image from "next/image";
import { Inter } from "next/font/google";
import { useRef, useState } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  if (typeof document !== "undefined") {
    document.body.style.overflow = "hidden";
  }
  const audioRef = useRef<HTMLAudioElement>(null);
  const [scale, setScale] = useState(false);

  const handlePlayer = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }

    setScale(true);

    setTimeout(() => {
      setScale(false);
    }, 300);
  };

  return (
    <>
      <Head>
        <title>キキボタン</title>
        <meta httpEquiv="Content-Language" content="ja" />
      </Head>

      <div className="h-screen w-full flex items-center justify-center">
        <button
          onClick={handlePlayer}
          className=" absolute  fles flex justify-center items-center hover:scale-105"
        >
          <p className=" absolute">▶</p>
          <img src="img/puppet.png" className={`h-12 w-12  `} />
        </button>
        <img
          src="img/kiki.png"
          className={`h-64 w-64  transition-transform transform duration-200 object-contain  ${scale ? "sm:scale-[1000%] scale-[500%]" : "scale-[0%]"}`}
        />
        <audio ref={audioRef}>
          <source
            src="https://drive.google.com/uc?export=download&id=1jdmMcEWZlGyhCjLXErcIb5q2Dnyq5rkU"
            type="audio/mpeg"
          ></source>
        </audio>
      </div>
    </>
  );
}
