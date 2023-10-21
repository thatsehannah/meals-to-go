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
//in the videos, they're wrapping the Spacer around the element they want to
//enforce spacing. I'm not doing that; I'm using it similarily how it a Spacer
//View is used in iOS
const getVariant = (position, size, theme) => {
  const property = positionVariant[position];
  const spacing = theme.space[sizeVariant[size]];
  return `${property}:${spacing}`;
};

export const Spacer = styled.View`
  /* example output: margin-top: 16px */
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
