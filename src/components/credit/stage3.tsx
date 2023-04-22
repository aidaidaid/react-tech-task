import React from 'react';
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, createStyles } from "@mui/material";
import { useSelector } from "react-redux";
import { selectClients } from "../../reduxToolkit/toolkitSlice";
import { useState } from "react";
import { FormValues } from './credit';
import { styles } from '../../styles';

interface Stage3Props {
  formValues: FormValues;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

const Stage3 = ({ formValues, setFormValues }: Stage3Props) => {
	const clients = useSelector(selectClients);
	const [fin, setFIN] = useState('');
	const [match, setMatch] = useState(true);
	const [guarantors, setGuarantors] = useState(formValues.guarantors);
	
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFIN(event.target.value);
  };

	const handleAdd = () => {
  	const clientMatch = clients.find(item=>item.fin === fin);
		const alreadyGuarantor = guarantors.some(guarantor => guarantor.fin === fin);
		if (!alreadyGuarantor) {
			if (clientMatch) {
				setMatch(true);
				setGuarantors([...guarantors, clientMatch])
				//@ts-ignore
				setFormValues((prevValues) => ({
				...prevValues,
				guarantors: [...prevValues.guarantors, clientMatch],
					}));
			} else {
				setMatch(false);
			}
		}
  };

  return (
    <Box id="stage3" style={styles.box}>
      <div>
				<p>Zaminin əlavəsi</p>
				<TextField
					label="Search"
					variant="outlined"
					size="small"
					value={fin}
					onChange={handleChange}
				/>
				<div>
				<Button
						sx={styles.button}
						variant="contained"
						color="primary"
						onClick={handleAdd}
					>Əlavə et</Button>
				{match ?
					<></>
					:
					<p>Müştəri mövcud deyil.</p>
				}
				</div>
			</div>
			<TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>FIN</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {guarantors.map((item) => (
            <TableRow key={item.name}>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell>{item.fin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}

export default Stage3;