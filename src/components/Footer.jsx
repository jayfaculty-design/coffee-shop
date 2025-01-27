import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandX,
  IconCoffee,
} from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { easeInOut } from "motion";

const Footer = () => {
  return (
    <div>
      <footer className="footer flex justify-between bg-black">
        <motion.div
          initial={{
            opacity: 0,
            x: -10,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.3,
              ease: easeInOut,
            },
          }}
          viewport={{
            once: true,
          }}
          className="flex items-center gap-5"
        >
          <Link to="/" className="flex flex-col text-yellowish">
            <IconCoffee size={40} />
            <p className="text-[12px]">JayFee</p>
          </Link>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved JayWebs
            Inc.
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 10,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.3,
              ease: easeInOut,
            },
          }}
          viewport={{
            once: true,
          }}
          className="social flex items-center gap-5 text-yellowish"
        >
          <a
            href="https://github.com/jayfaculty-design/coffee-shop"
            target="_blank"
          >
            <IconBrandGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/godfred-entsie-952a69223/"
            target="_blank"
          >
            <IconBrandLinkedin />
          </a>
          <a href="" target="_blank">
            <IconBrandX />
          </a>
        </motion.div>
      </footer>
    </div>
  );
};

export default Footer;
