import styled from "@emotion/styled";
import { fontSizes } from "../../styles/variables";

const Info = styled.div({
  marginBottom: 10,
});

const InfoRole = styled.span({
  fontSize: fontSizes.basic,
  marginRight: 20,
});

const InfoPerson = styled.span({});

const InfoWrapper = styled.div({
  justifySelf: "center",
});

const Subtitle = styled.div({
  fontSize: fontSizes.subtitle,
  marginBottom: 20,
});

// eslint-disable-next-line
export default {
  Info,
  InfoRole,
  InfoPerson,
  InfoWrapper,
  Subtitle,
};
