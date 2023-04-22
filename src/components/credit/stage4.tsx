import React from 'react';
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import { FormValues } from "./credit";

type RowData = {
  month: number;
  monthPay: number;
  percentAmount: number;
  payout: number;
  debt: number;
};

const Stage4 = ({ formValues }: { formValues: FormValues }) => {
    const p = Number(formValues.percent)/12/100;
    const percentAmount = p*Number(formValues.amount);
    const duration = Number(formValues.duration);
    const monthPay = ((percentAmount*Math.pow((1+p),duration))/(Math.pow((1+p),duration)-1));
    const [rows, setRows] = useState<RowData[]>([]);

    useEffect(() => {
      const rowsData = [];
      let currentDebt = Number(formValues.amount);

      let i = 1;
      while (currentDebt >= 0) {
        const percentAmount = (p*currentDebt);
        const payout = (monthPay - percentAmount);
        currentDebt = (currentDebt - payout);
        const debtValue = currentDebt < 0 ? 0 : currentDebt;
        rowsData.push({ month: i, monthPay, percentAmount, payout, debt: debtValue });
        i++;
      }

      setRows(rowsData);
    }, [monthPay, p, formValues.amount]);

  return (
    <Box id="stage4" style={{ display: 'flex', gap: 10, margin: 50, flexDirection: 'column', alignItems: 'center', minHeight: 450 }}>      
      <p>Ödəniş cədvəli</p>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="example table">
        <TableHead>
          <TableRow style={{ backgroundColor: '#1976D2' }} >
            <TableCell align="center">Ay</TableCell>
            <TableCell align="center">Aylıq ödəniş</TableCell>
            <TableCell align="center">Faiz məbləği</TableCell>
            <TableCell align="center">Əsas məbləğ</TableCell>
            <TableCell align="center">Borcun qalığı</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: RowData) => (
            <TableRow key={row.month}>
            <TableCell align="center">{row.month}</TableCell>
            <TableCell align="center">{row.monthPay.toFixed(2)}</TableCell>
            <TableCell align="center">{row.percentAmount.toFixed(2)}</TableCell>
            <TableCell align="center">{row.payout.toFixed(2)}</TableCell>
            <TableCell align="center">{row.debt.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
    </Box>
  );
}

export default Stage4;