import styled from "styled-components";
import { useState, useEffect } from "react";
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

const WAIT_INTERVAL = 750;
let progressTimer = null;

const FormContainer = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    userName: "",
  });
  const [completedSteps, setCompletedSteps] = useState({
    step0: false,
    step1: false,
    step2: false,
  });

  const handleChange = (evt) => {
    const { id, value } = evt.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    console.log(formData.userName);
  };

  useEffect(() => {
    if (formData.userName.length > 0) {
      setCompletedSteps((prevState) => ({
        ...prevState,
        step0: true,
      }));
    }
  }, [formData]);

  useEffect(() => {
    if (completedSteps.step0 && !completedSteps.step1) {
      clearTimeout(progressTimer);
      progressTimer = setTimeout(() => {
        return setStep(1);
      }, WAIT_INTERVAL);
    }
  });

  return (
    <StyledContainer>
      {step === 0 && <Step0 onChange={handleChange} />}
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
    </StyledContainer>
  );
};

export default FormContainer;
