import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';
import { Client, setClient } from '../../reduxToolkit/toolkitSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { styles } from '../../styles';

const AddClient = () => {
  const dispatch = useDispatch();
	const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  
  const validationRules = {
    factAddress: {
      required: true
    },
    fin: {
      required: true,
      pattern: /^[A-Za-z0-9]{7}$/
    },
    kod: {
      required: true,
      pattern: /^([a-zA-Z0-9]{9}([a-zA-Z0-9]{2})?|[a-zA-Z0-9]{11})$/
    },
    name: { 
      required: true,
      pattern: /^[A-Za-z-]+ [A-Za-z-]+ [A-Za-z-]+$/
    },
    email: {
      required: true,
      pattern: /^[A-Za-z]+ [A-Za-z]+ [A-Za-z]+$/,
    },
    registrationAddress: {
      required: true
    },
    phone: {
      required: true,
      pattern: /^(\+?\d{1,3}[- ]?)?\d{10}$/
    },
  };

  type FormData = Omit<Client, "id">;

  const onSubmit = (data: FormData) => {
    console.log(data);
    dispatch(setClient(data));
    navigate('/');
  };

  return (
    <Box style={{ display: 'flex', marginTop: 30, gap: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', minHeight: 450 }}>
    <p>Yeni müştəri qeydiyyatı</p>
    <form onSubmit={handleSubmit(onSubmit)} style={{width: 500, display: 'flex', gap: 12, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <TextField
        id="factAddress"
        label="Faktiki ünvan"
        variant="outlined"
        fullWidth
        {...register("factAddress", validationRules.factAddress)}
        helperText={errors?.factAddress && "This field is required"}
        error={Boolean(errors.factAddress)}
      />
      <TextField
        id="fin"
        label="FIN"
        variant="outlined"
        fullWidth
        {...register("fin", validationRules.fin)}
        helperText={errors?.fin && "This field is required"}
        error={Boolean(errors.fin)}
      />
      <TextField
        id="kod"
        label="Seriya və kod"
        variant="outlined"
        fullWidth
        {...register("kod", validationRules.kod)}
        helperText={errors?.kod && "This field is required"}
        error={Boolean(errors.kod)}
      />
      <TextField
        id="name"
        label="Ad Soyad Ata adı"
        variant="outlined"
        fullWidth
        {...register("name", validationRules.name)}
        helperText={errors?.name && "Name is required"}
        error={Boolean(errors['name'])}
      />
      <TextField
        id="registrationAddress"
        label="Qeydiyyat ünvanı"
        variant="outlined"
        fullWidth
        {...register("registrationAddress", validationRules.registrationAddress)}
        helperText={errors?.registrationAddress && "This field is required"}
        error={Boolean(errors.registrationAddress)}
      />
      <TextField
        id="birthDate"
        type="date"
        variant="outlined"
        fullWidth
        {...register("birthDate", { required: true })}
        error={Boolean(errors.birthDate)}
        helperText={errors.birthDate&& "This field is required"}
      />
      <TextField
        id="phoneMob"
        label="Mobil telefon"
        variant="outlined"
        fullWidth
        {...register("phoneMob", validationRules.phone)}
        error={Boolean(errors['phoneMob'])}
        helperText={errors['phoneMob'] && "This field is required"}
      />
      <TextField
        id="phoneHome"
        label="Ev telefon"
        variant="outlined"
        fullWidth
      />
    <Button
      sx={styles.button}
      type="submit"
      variant="contained"
      color="primary"
    >Əlavə et</Button>
    </form>
    </Box>
  );
}

export default AddClient;