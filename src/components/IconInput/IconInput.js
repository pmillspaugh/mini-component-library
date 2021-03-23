import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--input-height": `${24}px`,
    "--padding": `${24}px`,
    "--font-size": `${14}px`,
    "--icon-size": `${16}px`,
    "--border-weight": `${1}px`,
  },
  large: {
    "--input-height": `${36}px`,
    "--padding": `${36}px`,
    "--font-size": `${18}px`,
    "--icon-size": `${24}px`,
    "--border-weight": `${2}px`,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];

  return (
    <Wrapper style={styles} width={width}>
      <IconWrapper style={styles}>
        <Icon id={icon} size={size === "small" ? 16 : 24} />
      </IconWrapper>
      <Input style={styles} type="text" placeholder={placeholder}></Input>
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  width: ${(p) => `${p.width}px`};
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  width: var(--icon-size);
  height: var(--icon-size);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  pointer-events: none;
`;

const Input = styled.input`
  width: 100%;
  height: var(--input-height);
  padding: 0;
  padding-left: var(--padding);
  box-sizing: border-box;
  border: none;
  border-bottom: var(--border-weight) solid ${COLORS.black};
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }
`;

export default IconInput;
