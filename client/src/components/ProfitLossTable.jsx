import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";



function ProfitLossTable({ rows }) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius:4,
        marginBottom:4
      }}
    >
      <Table>

        <TableHead>

          <TableRow>

            <TableCell>
              <b>Particular</b>
            </TableCell>

            <TableCell align="right">
              <b>Amount</b>
            </TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {rows.map((row) => (

            <TableRow key={row.particular}>

              <TableCell>

                {row.particular}

              </TableCell>

              <TableCell align="right">

                {row.amount}

              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>

    </TableContainer>
  );
}

export default ProfitLossTable;