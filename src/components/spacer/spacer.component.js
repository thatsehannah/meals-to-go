import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import styled from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "margin-top",
  left: "margin-left",
  bottom: "margin-bottom",
  right: "margin-right",
};

//builds the appropriate css property based off of the props position and size
const getVariant = (position, size, theme) => {
  const property = positionVariant[position];
  const value = theme.space[sizeVariant[size]];
  return `${property}:${value}`;
};

export const Spacer = styled.View`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
