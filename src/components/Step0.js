import styled from "styled-components";

const StyledContainer = styled.div``;

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  padding: 10px;
  border-bottom: 3px solid white;
  font-size: 2em;
  color: white;
  outline: none;
`;

const Step0 = ({ onChange }) => {
  return (
    <StyledContainer>
      <p>This is step 0</p>
      <StyledInput
        placeholder="Insert your Name"
        id="userName"
        type="text"
        onChange={onChange}
      ></StyledInput>
    </StyledContainer>
  );
};

export default Step0;
