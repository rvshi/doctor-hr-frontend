import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const DataTable = ({ data }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell numeric>#</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell numeric>Heart Rate (bpm)</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.data.map((n, i) => {
                    return (
                        <TableRow key={i}>
                            <TableCell numeric>{i + 1}</TableCell>
                            <TableCell>Yesterday</TableCell>
                            <TableCell numeric>{n}</TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}

export default DataTable;