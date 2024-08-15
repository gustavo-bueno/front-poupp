import styled from "styled-components/native";

import { H2 } from "../../components/Text";
import { metrics } from "../../styles";
export const AddAccountLabel = styled(H2).attrs({
  fontWeight: "medium",
})`
  margin-bottom: ${metrics.base * 2}px;
`;
