  import React from "react";
  import Mic from "../../src/Assets/compimg/microsoft_logo.svg";
  import Wal from "../../src/Assets/compimg/walmart_logo.svg";
  import Acc from "../../src/Assets/compimg/accenture_logo.svg";
  import Ado from "../../src/Assets/compimg/adobe_logo.svg";
  import Pay from "../../src/Assets/compimg/paypal_logo.svg";
  import Google from "../../src/Assets/compimg/google.png";
  import udemy from "../../src/Assets/compimg/udemy.png";
  import Raz from "../../src/Assets/compimg/razorpay.png";

  import { motion } from "framer-motion";

  const logos = [
    { name: "Microsoft", image: Mic },
    { name: "Walmart", image: Wal },
    { name: "Accenture", image: Acc },
    { name: "Google", image: Google },
    { name: "Adobe", image: Ado },
    { name: "Paypal", image: Pay },
    // { name: "Udemy", image: udemy },
    // { name: "Razorpay", image: Raz },
  ];

  const LogoTicker = () => {
    return (
      <section className=" overflow-x-hidden">
            <motion.div
              animate={{
                x: "-50%",
              }}
              transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity,
              }}
              className="flex gap-14 pr-24"
            >
              {Array.from({ length: 2 }).map((_, i) => (
                <React.Fragment key={i}>
                  {logos.map((logo) => (
                    <img
                      src={logo.image}
                      key={logo.name}
                      alt={logo.name}
                      className="max-h-16" // Optional: Controls image size
                    />
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
      </section>
    );
  };

  export default LogoTicker;
