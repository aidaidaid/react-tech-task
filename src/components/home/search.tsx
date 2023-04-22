import React from 'react';
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { selectClients, setCurrentClient } from "../../reduxToolkit/toolkitSlice";
import { useState } from "react";
import ClientInfo from "./clientInfo";
import { styles } from '../../styles';

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clients = useSelector(selectClients);
	const [fin, setFIN] = useState('');
	const [match, setMatch] = useState<Boolean|null>(null);
	const [client, setClient] = useState<any>(null);
  
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFIN(event.target.value);
  };

	const handleSearch = () => {
  	const clientMatch =  clients.find(item=>item.fin === fin);
		if (clientMatch) {
			setMatch(true);
			console.log(clientMatch)
			setClient(clientMatch);
		} else {
			setMatch(false);
		}
  };

	const handleAddClient = () => {
    navigate('/client');
  };

	const handleCreateCredit = () => {
		dispatch(setCurrentClient(client));
    navigate('/credit');
  };

  return (
    <Box id="search" sx={styles.main}>
			<div>
				<TextField sx={{ marginRight: 2}}
					label="Search"
					variant="outlined"
					size="small"
					value={fin}
					onChange={handleChange}
				/>
			  <Button
					sx={styles.buttonSearch}
					variant="contained"
					color="primary"
					onClick={handleSearch}
				>Axtar</Button>
			</div>
			<div id='clientInfo'>
				{match ?
				<div>
					<ClientInfo client={client}/>
					<Button
						sx={styles.button}
						variant="contained"
						color="primary"
						onClick={handleCreateCredit}
					>Yeni kredit sifarişi yarat
					</Button>
				</div>
				:	
				<>
				{match === false ?
					<>
						<p>Müştəri mövcud deyil.</p>
						<div>
							<Button
								sx={styles.button}
								variant="contained"
								color="primary"
								onClick={handleAddClient}
							>Yeni müştəri qeydiyyatı</Button>
						</div>
					</> : <></>
				}
				</>
				}
			</div>
    </Box>
  );
}

export default Search;