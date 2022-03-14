
import styled from 'styled-components'
import { flexCenterCenter }  from '../../assets/styles/GlobalStyles'

export const StyledBasicBtn = styled.button`
  ${flexCenterCenter};
  color: ${(props) =>
    props.isDisabled ? "var(--color-grey-darker)" : "var(--color-white)"};
  background-color: ${(props) =>
    props.isDisabled
      ? "var(--color-grey-dark)"
      : props.bgColor
      ? props.bgColor
      : "var(--color-main)"};
  text-transform: capitalize;
  border: none;
  border-radius: 8px;
  width: fit-content;
  padding: 0.6rem 2.1rem;
  transition: all .1s ;
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
  :focus {
    border: 1px dotted currentColor;
  }
  :hover {
    filter: ${(props) => (props.isDisabled ? "" : "brightness(145%)")};
    transform: ${(props) => (props.isDisabled ? "" : "scale(.98)")};
  }
`;