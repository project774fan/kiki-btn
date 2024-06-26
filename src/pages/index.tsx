import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  if (typeof document !== "undefined") {
    document.body.style.overflow = "hidden";
  }
  const audioRef = useRef<HTMLAudioElement>(null);
  const [scale, setScale] = useState(false);

  useEffect(() => {
    const preloadAudio = (url: string) => {
      const audio = new Audio();
      audio.src = url;
    };

    preloadAudio("https://project774fan.github.io/kiki-btn/audio/kiki_1.mp3");
    preloadAudio("https://project774fan.github.io/kiki-btn/audio/kiki_2.mp3");
  }, []);

  const handlePlayer = () => {
    const getRandomBoolean = () => {
      return Math.random() < 0.5;
    };
    const randomBoolean = getRandomBoolean();

    if (audioRef.current) {
      audioRef.current.src = `https://project774fan.github.io/kiki-btn/audio/${randomBoolean ? "kiki_1" : "kiki_2"}.mp3`;
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }

    setScale(true);

    setTimeout(() => {
      setScale(false);
    }, 450);
  };

  return (
    <>
      <Head>
        <title>キキボタン</title>
        <meta httpEquiv="Content-Language" content="ja" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@chinari819" />
        <meta name="twitter:title" content="キキボタン" />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/project774fan/kiki-btn/main/public/img/twitterCard.png"
        />
      </Head>

      <div className="flex h-screen w-full items-center justify-center">
        <button
          onClick={handlePlayer}
          className="absolute flex items-center justify-center hover:scale-105"
        >
          <p className="absolute">▶</p>
          <img src="img/puppet.png" className={`h-12 w-12`} />
        </button>
        <img
          src="img/kiki.webp"
          className={`h-64 w-64 transform object-contain transition-transform duration-300 ${scale ? "scale-[500%] sm:scale-[700%]" : "scale-[0%]"}`}
        />
        <audio ref={audioRef}>
          <source type="audio/mpeg"></source>
        </audio>
      </div>
    </>
  );
}
