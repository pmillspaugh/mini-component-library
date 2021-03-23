import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  large: {
    "--height": `${24}px`,
    "--padding": `${4}px`,
    "--border-radius": `${8}px`,
  },
  medium: {
    "--height": `${12}px`,
    "--padding": `${0}px`,
    "--border-radius": `${4}px`,
  },
  small: {
    "--height": `${8}px`,
    "--padding": `${0}px`,
    "--border-radius": `${4}px`,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <Progress
      style={styles}
      value={value}
      max="100"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <InnerBar value={value} />
    </Progress>
  );
};

const Progress = styled.div`
  height: var(--height);
  width: 370px;
  padding: var(--padding);
  border-radius: var(--border-radius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  box-sizing: border-box;
`;

const InnerBar = styled.div`
  height: 100%;
  width: ${(p) => p.value + "%"};
  background-color: ${COLORS.primary};
  border-radius: ${(p) => {
    return p.value >= 99 ? `${4 - 4 * (100 - p.value)}px` : "4px 0 0 4px";
  }};
`;

export default ProgressBar;
