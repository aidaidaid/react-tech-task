import React from 'react';
import { Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentClient, setCredit } from "../../reduxToolkit/toolkitSlice";
import { useState } from "react";
import { useNavigate } from "react-router";
import { FormValues } from './credit';
import { styles } from '../../styles';

interface Report {
  [key: string]: string;
}

const Stage5 = ({ formValues }: { formValues: FormValues }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const client = useSelector(selectCurrentClient);
  const [decline, setDecline] = useState(false);
  const [reason, setReason] = useState('');

  console.log(formValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReason(event.target.value);
  };

	const handleConfirm = () => {
    setReason('');
    // @ts-ignore
    formValues.fin = client?.fin;
    formValues.status = 'confirmed';
		dispatch(setCredit(formValues));
    navigate('/');
  };

	const handleDecline = () => {
    setDecline(true);
  };

  const handleSend = () => {
    if (decline && reason) {
      formValues.status = 'declined';
      formValues.reason = reason;
      // @ts-ignore
      formValues.fin = client?.fin;
      dispatch(setCredit(formValues));
      navigate('/');
    }
  }
  

  const report: Report = {
    sector: 'Fəaliyyət sektoru',
    monthlyIncome: 'Aylıq gəliri',
    experienceYears: 'İş təcrübəsi (il)',
    experienceMonths: 'İş təcrübəsi (ay)',
    region: 'Region',
    businessAddress: 'Biznes ünvanı',
		currency: 'Valyuta',
		purpose: 'Biznes kreditin məqsədi',
		amount: 'Məbləğ',
		duration: 'Müddət',
		percent: 'Faiz',
  }

  return (
    <Box id="stage5" style={styles.box}>
      <p>Xülasə</p>
      <Typography textAlign="left" sx={{ lineHeight: 0.5}}>
        <p><span>Müştəri: </span><span>{client?.name}</span></p>
        <p><span>FIN: </span><span>{client?.fin}</span></p>
        {Object.keys(report).map((key) => (
          <p key={key}>
          <span>{report[key]}: </span>
          <span>{formValues[key]}</span>
        </p>
        ))}
        <p><span>Zaminlər: </span>
          {formValues.guarantors.map((client, index) => (
            <span key={client.fin}>{client.name}
            {index !== formValues.guarantors.length - 1 && ', '}
            </span>
          ))}
        </p>
      </Typography>
      <Box>
        <Button
          sx={{margin: 2}}
          onClick={handleConfirm}
          variant="contained"
        >Təsdiq</Button>
        <Button
          sx={{margin: 2}}
          onClick={handleDecline}
          variant="contained"
          color='error'
        >İmtina</Button>
        {decline?
        <>
          <TextField
            id="reason"
            label="Səbəb"
            variant="outlined"
            fullWidth
            value={reason}
            onChange={handleChange}
            required
          />
          <Button
            onClick={handleSend}
          >Göndər</Button>
          </> : <>
        </>
        }
      </Box>
    </Box>
  );
}

export default Stage5;