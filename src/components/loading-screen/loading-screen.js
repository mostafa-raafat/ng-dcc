// React
import React from "react";

// Components
import background from "../../styles/images/Topo-Abs-BG.svg";

// Styled & Motion Components
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.1) url(${background}) no-repeat center/cover;
  background-blend-mode: screen;
`;

const FadingContainer = () => (
  <motion.div
    initial={{ opacity: 1, zIndex: 1000 }}
    animate={{
      opacity: 0,
      transitionEnd: {
        display: "none"
      }
    }}
    transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
  >
    <Container></Container>
  </motion.div>
);

const LoadScreen = props => {
  return <FadingContainer />;
};

export default LoadScreen;
