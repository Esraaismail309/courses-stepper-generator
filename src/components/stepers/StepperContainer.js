import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Step3 } from './Step3';

const steps = ['Course landing page details', 'Course details', 'Course lessons'];

export const StepperContainer = () => {

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = (values) => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = (values) => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: '50%', margin: 'auto', marginTop: '2rem' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Box>
                        {
                            activeStep === 0 && <Step1 handleSubmit={handleNext} />
                        }
                        {
                            activeStep === 1 && <Step2 handleSubmit={handleNext} handleBack={handleBack} />
                        }
                        {
                            activeStep === 2 && <Step3 handleSubmit={handleNext} handleBack={handleBack} />
                        }
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        {/* <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button> */}
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleNext}>
                            {/* {activeStep === steps.length - 1 ? 'Finish' : 'Next'} */}
                            {activeStep === steps.length - 1 && 'Finish'}

                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}


