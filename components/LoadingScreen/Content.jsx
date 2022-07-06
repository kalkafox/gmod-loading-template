import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-circular-progressbar/dist/styles.css";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import { useSpring, animated as a, useTransition } from "react-spring";

import {
  faGear,
  faSpinner,
  faCheckCircle,
  faUserCheck,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";

const Content = () => {
  const router = useRouter();

  const [profileData, setProfileData] = useState({});

  const [progress, setProgress] = useState(0);

  const [step, setStep] = useState(0);

  const [profileDataReady, setProfileDataReady] = useState(false);

  const [profileContentSpring, setProfileContentSpring] = useSpring(() => ({
    opacity: 0,
    scale: 0.8,
    transform: "translateY(100px)",
  }));

  let randomMessages = [
    "Loading...",
    "Reticulating splines...",
    "Parsing data...",
    "Analyzing data...",
    "Calculating data...",
    "Sorting data...",
    "Filtering data...",
    "Processing data...",
  ];

  const [message, setMessage] = useState({
    message: randomMessages[0],
    modifier: "text-zinc-300",
    icon: faGear,
    spin: true,
  });

  const profileTextTransition = useTransition(message, {
    config: {
      friction: 8,
    },
    from: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: -20, config: { clamp: true } },
  });

  useEffect(() => {
    if (profileDataReady) {
      setProfileContentSpring({
        opacity: 1,
        scale: 1,
        transform: "translateY(0px)",
      });

      // GMod hooks.

      window.SetFilesTotal = (files) => {
        console.log(`Need: ${files} files.`);
      };

      window.DownloadingFile = (file) => {
        console.log(`Downloading: ${file}`);
      };

      window.GameDetails = (
        serverName,
        serverUrl,
        mapName,
        maxPlayers,
        steamId,
        gameMode,
        volume,
        language
      ) => {
        console.log(`Server: ${serverName}`);
        console.log(`URL: ${serverUrl}`);
        console.log(`Map: ${mapName}`);
        console.log(`Players: ${maxPlayers}`);
        console.log(`SteamID: ${steamId}`);
        console.log(`Game Mode: ${gameMode}`);
        console.log(`Volume: ${volume}`);
        console.log(`Language: ${language}`);
        setProgress(100);
      };

      window.SetStatusChanged = (status) => {
        switch (status) {
          case "Sending client info...":
            setMessage({
              message: status,
              modifier: "text-zinc-400",
              icon: faSpinner,
              spin: true,
            });
            break;
          case "Client info sent!":
            setMessage({
              message: status,
              modifier: "text-green-400",
              icon: faCheckCircle,
              spin: false,
            });
            setProgress(30);
            break;
          case "Starting Lua...":
            setMessage({
              message: status,
              modifier: "text-zinc-400",
              icon: faSpinner,
              spin: true,
            });
            break;
          case "Lua Started!":
            setMessage({
              message: status,
              modifier: "text-green-400",
              icon: faFilePen,
              spin: false,
            });
            setProgress(80);
            break;
          case "Fully connected!":
            setMessage({
              message: status,
              modifier: "text-green-400",
              icon: faCheckCircle,
              spin: false,
            });
            setProgress(100);
            break;
          case "Ready to play!":
            setMessage({
              message: status,
              modifier: "text-green-400",
              icon: faUserCheck,
              spin: false,
            });
            setProgress(100);
            break;
          default:
            setMessage({
              message: status,
              modifier: "text-zinc-400",
              icon: faSpinner,
              spin: true,
            });
        }
      };

      window.SetFilesNeeded = (files) => {
        console.log(`Need: ${files} files.`);
      };

      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * randomMessages.length);
        setMessage({
          message: randomMessages[randomIndex],
          modifier: "text-zinc-300",
          icon: faGear,
          spin: true,
        });
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [profileDataReady]);

  useEffect(() => {
    const getSteamInfo = async () => {
      const steamId = router.query.steamid;
      console.log(steamId);
      const steamInfo = await fetch("api/steam", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          steamId: steamId,
        }),
      });
      if (steamInfo.ok) {
        const steamInfoJson = await steamInfo.json();
        setProfileDataReady(true);
        setProfileData(steamInfoJson);
        console.log(steamInfoJson);
      }
    };

    if (document.readyState) {
      getSteamInfo();
    }
  }, [router.query.steamid]);
  return (
    <a.div style={profileContentSpring} className="w-full h-full fixed">
      <div className="fixed min-w-[40%] w-[400px] h-96 rounded-3xl text-zinc-300 bg-neutral-800/50 m-auto top-0 bottom-0 left-0 right-0">
        {profileDataReady && (
          <>
            <div className="absolute text-center w-full top-5 text-5xl font-['Poppins']">
              Welcome, {profileData.personaname}.
            </div>
            <div className="h-0">
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: "rgba(212,212,216,1)",
                  textColor: "rgba(255, 255, 255, 0)",
                  trailColor: "rgba(200,0,0,0)",
                  backgroundColor: "rgba(0,0,0,0)",
                  textSize: "20px",
                  pathTransitionDuration: 1,
                  strokeLinecap: "butt",
                })}
                className="h-[200px] top-[5.5rem] absolute w-full"
                value={progress}
              />
            </div>
            <div className="m-auto grid object-center justify-center top-24 relative">
              <Image
                className="rounded-full absolute right-0 m-auto w-full left-0 top-20"
                src={profileData.avatarfull}
                width="184px"
                height="184px"
                alt="steamAvatar"
              />
            </div>
            {profileTextTransition((style, i) => (
              <a.div
                style={style}
                className={`${i.modifier} w-full text-center bottom-16 absolute text-xl h-0 font-['Poppins']`}>
                <FontAwesomeIcon
                  className={i.spin ? "fa-spin" : ""}
                  icon={i.icon}
                />
                &nbsp;{i.message}
              </a.div>
            ))}
          </>
        )}
      </div>
    </a.div>
  );
};

export default Content;
