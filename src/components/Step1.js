import styled from "styled-components";

const StyledContainer = styled.div`
  > div {
    display: flex;
    justify-content: center;
    flex-flow: column;
    max-width: 500px;
  }
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

const Step1 = ({ onChange, animal, color }) => {
  return (
    <StyledContainer>
      <p>This is step 1</p>
      <div>
        <StyledInput
          placeholder="Your Favourite color"
          id="color"
          type="text"
          onChange={onChange}
          value={color}
        ></StyledInput>

        <StyledInput
          placeholder="Your pet's name"
          id="animal"
          type="text"
          value={animal}
          onChange={onChange}
        ></StyledInput>
      </div>
    </StyledContainer>
  );
};

export default Step1;
