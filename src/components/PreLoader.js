import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import * as location from "../Assets/Lottie/METABLAZE-Doors.json";
import App from "../App";
import '../Assets/css/_preloader.scss';
import { motion } from 'framer-motion';

const defaultOptions1 = {
  loop: false,
  autoplay: true,
  animationData: location.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function PreLoader() {
  const [, setData] = useState([]);
  const [, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 0);
        });
    }, 3200);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          <div className="lottieintro">
            <Lottie options={defaultOptions1} />
          </div>
        </>
      ) : (
        <>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.4,
          }}><App /></motion.div>
        </>
      )}
    </>
  );
}

export default PreLoader;