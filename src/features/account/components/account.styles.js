import styled from "styled-components";

export const CenteredContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.8);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  width: 80%;
`;
