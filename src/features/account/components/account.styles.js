import styled from "styled-components";
import { Button, TextInput } from "react-native-paper";
import { ImageBackground } from "react-native";

export const SignUpText = styled.Text`
  color: blue;
`;

export const AppName = styled.Text`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-family: ${(props) => props.theme.fonts.japanese};
  font-size: ${(props) => props.theme.sizes[3]};
  color: ${(props) => props.theme.colors.brandGreen.dark};
  margin-top: 350px;
`;

export const AppNameTwo = styled.Text`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-family: ${(props) => props.theme.fonts.japanese};
  font-size: ${(props) => props.theme.sizes[3]};
  color: ${(props) => props.theme.colors.brandGreen.dark};
  margin-top: 20px;
`;

export const CenteredContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const AccountContainer = styled.View`
  background-color: ${(props) => props.theme.colors.brandGreen.light};
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  width: 80%;
  border-radius: 8px;
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.23;
  shadow-radius: 2.62px;
  elevation: 4;
`;

export const SignUpContainer = styled.View`
  flex-direction: row;
  margin: 3px;
`;

export const AuthButton = styled(Button)`
  padding: ${(props) => props.theme.space[2]};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.brandGreen.primary};
`;

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.6);
  width: 100%;
  height: 100%;
`;

export const BackgroundImage = styled(ImageBackground).attrs({
  source: require("../../../../assets/leaves.png"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextInputs = styled(TextInput)`
  margin: 4px;
`;
