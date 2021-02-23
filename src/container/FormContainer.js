import styled from "styled-components";
import { useState, useEffect } from "react";
import Step0 from "../components/Step0";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const WAIT_INTERVAL = 750;
let progressTimer = null;
const bestGame = [
  "The Last of Us II",
  "Ghost of Tsushima",
  "Fall Guys",
  "Call of Duty Warzone",
];
const FormContainer = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    userName: "",
    color: "",
    animal: "",
    bestGame: "",
  });
  const [completedSteps, setCompletedSteps] = useState({
    step0: false,
    step1: false,
    step2: false,
  });

  const [isComplete, setIsComplete] = useState(false);
  const handleChange = (evt) => {
    const { id, value } = evt.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    setStep(3);
  };
  useEffect(() => {
    if (formData.userName.length > 0) {
      setCompletedSteps((prevState) => ({
        ...prevState,
        step0: true,
      }));
    }
    if (formData.color.length > 0 && formData.animal.length > 0) {
      setCompletedSteps((prevState) => ({
        ...prevState,
        step1: true,
      }));
    }
    if (formData.bestGame) {
      setCompletedSteps((prevState) => ({
        ...prevState,
        step2: true,
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
    if (completedSteps.step0 && completedSteps.step1) {
      clearTimeout(progressTimer);
      progressTimer = setTimeout(() => {
        return setStep(2);
      }, WAIT_INTERVAL);
    }
    if (completedSteps.step0 && completedSteps.step1 && completedSteps.step2) {
      setIsComplete(true);
    }
  }, [completedSteps]);

  return (
    <StyledContainer>
      {step === 0 && <Step0 onChange={handleChange} />}
      {step === 1 && <Step1 onChange={handleChange} />}
      {step === 2 && (
        <Step2
          options={bestGame}
          onChange={handleChange}
          onSubmit={handleSubmit}
          isComplete={isComplete}
        />
      )}
      {step === 3 && <Step3 sentData={formData} />}
    </StyledContainer>
  );
};

export default FormContainer;
