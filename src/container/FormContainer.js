import styled from "styled-components";
import { useState } from "react";
import Step0 from "../components/Step0";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 300px;
`;

const FormContainer = () => {
  const [step, setStep] = useState(0);

  return (
    <StyledContainer>
      {step === 0 && <Step0 />}
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
    </StyledContainer>
  );
};

export default FormContainer;
