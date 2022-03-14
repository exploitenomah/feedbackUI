
import styled  from 'styled-components'
import { flexCenterCenter } from '../../assets/styles/GlobalStyles'


export const FeedbackCard = styled.section`
  background-color: var(--color-white);
  border-radius: 15px;
  padding: 2.2rem 3rem;
  width: 90vw;
  max-width: 45.5em;
  margin: 1.8rem auto;
  position: relative;
  p{
    margin-right: auto;
    text-align: justify;
  }
`;
export const FeedbackFormWrapper = styled.form`
  h2 {
    margin: 0 auto;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 600;
  }
  legend {
    padding: 0;
    margin: 2rem auto 0;
    display: grid;
    grid-template-columns: 70% 30%;
    justify-content: center;
    align-items: center;
    max-width: 90%;
    @media(max-width: 600px){
      display: flex;
      flex-direction: column;
    }
    input {
      grid-area: 1/1 / end/end;
    }
    button {
      grid-area: 1/2/2 / end;
      margin: 0 0.7rem;
      justify-self: flex-end;
    }
  }
`;
export const FeedbackInput = styled.input`
  border: 1px solid #ccc;
  padding: 0.9rem 7.5rem 0.9rem 0.9rem;
  border-radius: 8px;
  font-family: inherit;
  font-size: inherit;
  font-weight: 400;
  color: var(--color-main);
  caret-color: var(--color-main);
  :focus,
  :focus-within,
  :focus-visible {
    outline: none;
    border: 1px dashed var(--color-main);
  }
  @media (max-width: 600px) {
    padding: 0.9rem;
    margin: 0.7rem 0;
  }
`;
export const RatingList = styled.ul`
  ${flexCenterCenter};
  flex-wrap: wrap;
  margin: .5rem auto;
  padding: 0;
`;
export const RatingItem = styled.li`
  list-style-type: none;
   [type = 'radio'] {
    opacity: 0;
  }
  [type = 'radio']:checked + label{
      background-color: var(--color-accent);
      color: var(--color-grey-light);
  }
`;
export const RatingLabel = styled.label`
  ${flexCenterCenter};
  min-width: 3.1rem;
  min-height: 3.1rem;
  border: none;
  border-radius: 50%;
  color: var(--color-main);
  background-color: var(--color-grey-light);
  font-size: 1.25rem;
  margin: 2px;
  padding: 8px;
  cursor: pointer;
  transition: all 0.4s ease;
  :hover {
    background-color: var(--color-accent);
    color: var(--color-grey-light);
  }
`;
export const Small = styled.small`
  display: block;
  margin: .8rem auto 0;
  text-align: center;
  color: var(--rebecca-purple);
  font-size: 1rem;
  font-weight: normal;
`
export const FeedbackListElement = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style-type: none;
`
export const RatingHolder = styled.h2`
  ${flexCenterCenter};
  background-color: var(--color-accent);
  min-width: 3.1rem;
  min-height: 3.1rem;
  border: none;
  border-radius: 50%;
  border: 1px var(--color-grey-light) solid;
  color: var(--color-main);
  color: var(--color-grey-light);
  font-size: 1.25rem;
  font-weight: normal;
  margin: 2px;
  padding: 8px;
  border-radius: 50%;
  position: absolute;
  top: -5%;
  left: -2%;
`;
export const ButtonsHolder = styled.div`
  display: flex;
  margin-left: auto;
  position: absolute;
  top: 2%;
  right: 4%;

  button{
    border: none;
    background: transparent;
    margin: 0 .3rem;
    font-size: 1rem;
    cursor: pointer;
  }
`
export const StatsHolder = styled.section`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  max-width: 45.5em;
  margin: 0 auto;
  padding: 0.5rem;
  color: var(--color-grey-light);
  h3{
    margin: 0;
    padding: 0;
  }
`