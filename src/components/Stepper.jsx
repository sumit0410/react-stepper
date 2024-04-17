import React, { useEffect, useRef, useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";

const Stepper = ({ formSteps = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  console.log(currentStep);
  const stepRef = useRef([]);

  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth,
      marginRight: stepRef.current[formSteps.length - 1].offsetWidth,
    });
  }, [stepRef, stepRef.current]);

  console.log(currentStep);

  if (!formSteps.length) {
    return <></>;
  }

  const handleNextStep = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === formSteps.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };
  // const handlePreviousStep = () => {
  //   setCurrentStep((prevStep) => {
  //     if (prevStep <= formSteps.length) {
  //       setIsComplete(false);
  //       return prevStep - 1;
  //     }
  //   });
  //   // if (currentStep <= formSteps.length) {
  //   //   setCurrentStep((prevStep) => prevStep - 1);
  //   //   setIsComplete(false);
  //   // }
  // };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (formSteps.length - 1)) * 100;
  };

  const ActiveComponent = formSteps[currentStep - 1]?.component;
  return (
    <>
      <div className="stepper">
        {formSteps.map((step, index) => {
          return (
            <div
              className={`step ${
                currentStep > index + 1 || isComplete ? "complete" : ""
              } ${currentStep === index + 1 ? "active" : ""}`}
              key={index}
              ref={(ele) => (stepRef.current[index] = ele)}
            >
              <div className="stepNumber">
                {currentStep > index + 1 || isComplete ? (
                  <IoCheckmarkCircle />
                ) : (
                  index + 1
                )}
              </div>
              <div className="stepName">{step.name}</div>
            </div>
          );
        })}

        <div
          className="progressBar"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className="progress"
            style={{ width: `${calculateProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>
      {isComplete ? (
        <div>
          <h1
            style={{
              textAlign: "center",
              fontSize: "40px",
              fontFamily: "cursive",
            }}
          >
            Thank You !
          </h1>
          <p style={{ textAlign: "center" }}>
            Your details have been submitted successfully. We will contact you
            soon!
          </p>
        </div>
      ) : (
        <ActiveComponent />
      )}
      {!isComplete && (
        <button onClick={handleNextStep}>
          {currentStep === formSteps.length ? "Finish" : "Next"}
        </button>
      )}
      {/* <button onClick={handlePreviousStep}>Prev</button> */}
    </>
  );
};

export default Stepper;
