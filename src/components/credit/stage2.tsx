import React from 'react';
import { Box, TextField } from "@mui/material";
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { styles } from '../../styles';

interface Stage2Props {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  validationRules: Record<string, Record<string, any>>;
}

const Stage2 = ({ register, errors, validationRules }: Stage2Props) => {

  return (
    <Box id="stage2" style={styles.box}>
      <p>Kredit barədə məlumat</p>
		  <TextField
        label="Valyuta"
        variant="outlined"
        fullWidth
        {...register("currency", validationRules.currency)}
        helperText={errors?.currency && "This field is required"}
        error={Boolean(errors.currency)}
      />
      <TextField
        label="Biznes kreditin məqsədi"
        variant="outlined"
        fullWidth
        {...register("purpose", validationRules.purpose)}
        helperText={errors?.purpose && "This field is required"}
        error={Boolean(errors.purpose)}
      />
      <TextField
        label="Məbləğ"
        variant="outlined"
        fullWidth
        {...register("amount", validationRules.amount)}
        helperText={errors?.amount?.message && "This field is required"}
        error={Boolean(errors.amount)}
      />
      <TextField
        label="Müddət"
        variant="outlined"
        fullWidth
        {...register("duration", validationRules.duration)}
        helperText={errors?.duration && "This field is required"}
        error={Boolean(errors.duration)}
      />
      <TextField
        label="Faiz"
        variant="outlined"
        fullWidth
        {...register("percent", validationRules.percent)}
        helperText={errors?.percent && "This field is required"}
        error={Boolean(errors.percent)}
      />
    </Box>
  );
}

export default Stage2;