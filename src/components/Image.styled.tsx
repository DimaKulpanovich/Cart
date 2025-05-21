import styled from 'styled-components'

export const StyledImage = styled.img`
  content: url('${props => props.src}');
  border-radius: 10px;
  object-fit: cover;
  width: 100%;
  height: auto;
`