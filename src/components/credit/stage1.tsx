import React from 'react';
import { Box, TextField } from "@mui/material";
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { styles } from '../../styles';

interface Stage1Props {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  validationRules: Record<string, Record<string, any>>;
}

const Stage1 = ({ register, errors, validationRules }: Stage1Props) => {

  return (
    <Box id="stage1" style={styles.box}>
      <p>Şəxs haqqında məlumat</p>
      <TextField
        label="Fəaliyyət sektoru"
        variant="outlined"
        fullWidth
        {...register("sector", validationRules.sector)}
        helperText={errors?.sector?.message && "This field is required"}
        error={Boolean(errors.sector)}
      />
      <TextField
        label="Aylıq gəliri"
        variant="outlined"
        fullWidth
        {...register("monthlyIncome", validationRules.monthlyIncome)}
        helperText={errors?.monthlyIncome?.message && "This field is required"}
        error={Boolean(errors.monthlyIncome)}
      />
      <TextField
        label="İş təcrübəsi (il)"
        variant="outlined"
        fullWidth
        {...register("experienceYears", validationRules.experienceYears)}
        helperText={errors?.experienceYears?.message && "This field is required"}
        error={Boolean(errors.experienceYears)}
      />
      <TextField
        label="İş təcrübəsi (ay)"
        variant="outlined"
        fullWidth
        {...register("experienceMonths", validationRules.experienceMonths)}
        helperText={errors?.experienceMonths?.message && "This field is required"}
        error={Boolean(errors.experienceMonths)}
      />
      <TextField
        label="Region"
        variant="outlined"
        fullWidth
        {...register("region", validationRules.region)}
        helperText={errors?.region?.message && "This field is required"}
        error={Boolean(errors.region)}
      />
      <TextField
        label="Biznes ünvanı"
        variant="outlined"
        fullWidth
        {...register("businessAddress", validationRules.businessAddress)}
        helperText={errors?.businessAddress?.message && "This field is required"}
        error={Boolean(errors.businessAddress)}
      />
    </Box>
  );
}

export default Stage1;