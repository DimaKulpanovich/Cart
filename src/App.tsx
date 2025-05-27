import './App.css'
import styled from "styled-components";
import {StyledBtn, SupperButton} from "./components/Button.styled.tsx";
import {myTheme} from "./styles/Theme.styled.tsx";
import {StyledCart} from "./components/Cart.styled.tsx";
import {StyledImage} from "./components/Image.styled.tsx";
import CartImage from "./assets/cart.jpg"
import {StyledTitle} from "./components/Title.styled.tsx";
import {StyledText} from "./components/Text.styled.tsx";
import {StyledBtnWrapper} from "./components/BtnWrapper.styled.tsx";

function App() {

    return (
        <>
            <Box>
                <StyledCart>
                    <StyledImage src={CartImage} />
                    <StyledTitle>Headline</StyledTitle>
                    <StyledText>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</StyledText>
                    <StyledBtnWrapper>
                        <StyledBtn
                            color={myTheme.colors.primary}
                            btnType={"primary"}>
                            See more
                        </StyledBtn>
                        <StyledBtn
                            color={myTheme.colors.primary}
                            btnType={"outlined"}>
                            Save
                        </StyledBtn>
                    </StyledBtnWrapper>
                </StyledCart>
            </Box>
        </>
    )
}

export default App

const Box = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;

  button {
    cursor: pointer;
  }

  ${SupperButton} {
    border: darkgreen 2px solid;
  }

  @media ${myTheme.media.mobile} {
    flex-direction: column;
  }
`

