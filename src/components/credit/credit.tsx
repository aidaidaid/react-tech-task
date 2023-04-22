import React from 'react';
import { useState } from 'react';
import { Button, Stepper, Step, StepLabel, Box } from '@mui/material';
import Stage1 from './stage1';
import Stage2 from './stage2';
import Stage3 from './stage3';
import Stage4 from './stage4';
import Stage5 from './stage5';
import { useForm } from 'react-hook-form';
import { validationRules } from '../../valdationRules';

export interface FormValues {
  sector: string;
  monthlyIncome: string;
  experienceYears: string;
  experienceMonths: string;
  region: string;
  businessAddress: string;
  currency: string;
  purpose: string;
  amount: string;
  duration: string;
  percent: string;
  // @ts-ignore
  guarantors: Client[];
  fin: string,
  status: string,
  reason: string,
  [key: string]: string
}

function Credit() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState<any>({
		guarantors: [],
  });

  const onSubmit = (data: any) => {
    if (activeStep === 0 || activeStep === 1 || activeStep === 2 || activeStep === 4) {
      const newFormValues = { ...formValues, ...data };
      setFormValues(newFormValues);
    }
      handleNext();
      console.log(formValues)
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const steps = ['Birinci mərhələ', 'İkinci mərhələ', 'Üçüncü mərhələ', 'Dördüncü mərhələ', 'Beşinci mərhələ'];

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (<Stage1 register={register} errors={errors} validationRules={validationRules}/>);
      case 1:
        return (<Stage2 register={register} errors={errors} validationRules={validationRules}/>);
      case 2:
        return (<Stage3 formValues={formValues} setFormValues={setFormValues}/>);
      case 3:
        return (<Stage4 formValues={formValues}/>);
      case 4:
        return (<Stage5 formValues={formValues}/>);
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: 5, alignItems: 'center'}}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <>
            {getStepContent(activeStep)}
            <Box sx={{ margin: 5 }}>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Geri
              </Button>
                <Button
                  disabled={activeStep === steps.length - 1}
                  color="primary" 
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                >Davam et
                </Button>
            </Box>
          </>
      </Box>
    </Box>
  );
}

export default Credit;