import React from "react";
import { Typography } from "@mui/material";

interface Report {
  [key: string]: string;
}

interface Client {
  factAddress: string,
  fin: string,
  kod: string,
  name: string,
  registrationAddress: string,
  birthDate: string,
  phoneMob: string,
  phoneHome: string,
  [key: string]: string;
}

interface Props {
  client: Client;
}

const ClientInfo = ({client}: Props) => {

	let day = client?.birthDate.slice(8, 10);
	let month = client?.birthDate.slice(5, 7);
	let year = client?.birthDate.slice(0, 4);
	let birthDate = day + "." + month + "." + year;

	const report: Report = {
		factAddress: 'Faktiki ünvan',
		fin: 'FİN',
		kod: 'Seriya və kod',
		name: 'Ad Soyad Ata adı',
		registrationAddress: 'Qeydiyyat ünvanı',
		phoneMob: 'Mobil telefon',
		phoneHome: 'Ev telefon',
	}

  return (
    <Typography textAlign="left" sx={{ lineHeight: 0.5, marginBottom: 5}}>
        {Object.keys(report).map((key: keyof typeof report) => (
					<p key={key}>
						<span>{report[key]}: </span>
						<span>{client[key]}</span>
					</p>
        ))}
        <p><span>Doğum tarixi: </span><span>{birthDate}</span></p>
    </Typography>
  );
}

export default ClientInfo;