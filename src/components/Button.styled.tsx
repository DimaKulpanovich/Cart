import styled, { css } from "styled-components";

type StyledBtnPropsType = {
  color?: string;
  fontSize?: string;
  btnType: "primary" | "outlined";
  active?: boolean;
};

export const StyledBtn = styled.button<StyledBtnPropsType>`
  padding: 7px 0;
  font-size: ${(props) => props.fontSize || "10px"};
  font-weight: bold;
  width: 86px;
  height: 30px;
  border: 2px solid ${(props) => props.color || "#fb3f78"};
  border-radius: 5px;

  ${(props) =>
    props.btnType === "primary" &&
    css<StyledBtnPropsType>`
      background-color: ${(props) => props.color || "#fb3f78"};
      color: #fff;

      &:hover {
        background-color: #fff;
        color: ${(props) => props.color || "#fb3f78"};
      }
    `}
  ${(props) =>
    props.btnType === "outlined" &&
    css<StyledBtnPropsType>`
      background-color: #fff;
      color: ${(props) => props.color || "#fb3f78"};

      &:hover {
        background-color: ${(props) => props.color || "#fb3f78"};
        color: #fff;
      }
    `}

  ${(props) =>
    props.active &&
    css<StyledBtnPropsType>`
      box-shadow: 1px 1px 5px 5px ${(props) => props.color || "#fb3f78"};
    `}
`;
export const SupperButton = styled(StyledBtn)`
  background-color: lightgreen;
  color: #292727;
`;
