import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin: 15px 0;
  background-color: transparent;
  border: none;
  padding: 10px;
  border-bottom: 3px solid white;
  font-size: 2em;
  color: white;
  outline: none;
`;

const Step1 = ({ onChange }) => {
  return (
    <StyledContainer>
      <p>This is step 1</p>

      <StyledInput
        placeholder="Your Favourite color"
        id="color"
        type="text"
        onChange={onChange}
      ></StyledInput>

      <StyledInput
        placeholder="Your pet's name"
        id="animal"
        type="text"
        onChange={onChange}
      ></StyledInput>
    </StyledContainer>
  );
};

export default Step1;
