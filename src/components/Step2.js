import styled from "styled-components";

const StyledContainer = styled.div``;

const Step2 = ({ options, onChange, onSubmit, isComplete }) => {
  return (
    <StyledContainer>
      <p>This is step 2</p>

      <p>Pick the best videogame of 2020</p>
      {options.map((item, i) => (
        <div key={i}>
          <input
            type="radio"
            id="bestGame"
            name="bestGame"
            value={item}
            onChange={onChange}
          />
          <label>{item}</label>
        </div>
      ))}
      <input
        type="button"
        value="Send"
        name="submit"
        id="submit"
        style={{ padding: "25px", margin: "25px" }}
        onClick={onSubmit}
        disabled={!isComplete}
      />
    </StyledContainer>
  );
};

export default Step2;
