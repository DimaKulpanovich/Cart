import styled, {css} from 'styled-components'

type StyledBtnPropsType = {
    color?: string;
    fontSize?: string;
    btnType: "primary" | "outlined";
    active?: boolean;
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  background-color: ${props => props.color || '#fb3f78'};
  padding: 7px 20px;
  color: #fff;
  font-size: ${props => props.fontSize || '10px'};
  font-weight: bold;
  width: 86px;
  height: 30px;
  border-radius: 5px;
  
  ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
    background-color: ${props => props.color || '#fb3f78'};
    color: #fff;
  `}

  ${props => props.active && css<StyledBtnPropsType>`
    box-shadow: 1px 1px 5px 5px ${props => props.color || '#fb3f78'};
  `}
`
export const SupperButton = styled(StyledBtn)`
  background-color: lightgreen;
  color: #292727;
`