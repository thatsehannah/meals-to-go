import styled from "styled-components/native";

//these styles will be applied to all variants (unless they're overwritten)
// PUT THIS BACK -> font-family: ${theme.fonts.body};
const defaultTextStyles = (theme) => `
  
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
  color: ${theme.colors.text.error};
`;

const caption = (theme) => `
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.bold};
`;

// PUT THIS BACK -> font-family: ${theme.fonts.heading};
const label = (theme) => `
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.medium};
`;

//the keys are all functions declared above and their values
//will be used for the corresponding properties
//would be the same as:
// const variants = {
//   body: body,
//   label: label,
//   caption: caption,
//   error: error,
//   hint: hint
// };
const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
