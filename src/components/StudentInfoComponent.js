import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'ID', label: 'ID', minWidth: 170 },
    { id: 'Name', label: 'Name', minWidth: 100 },
    {
        id: 'Age',
        label: 'Age',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'Address',
        label: 'Address',
        minWidth: 170,
        align: 'right',
    }
];

function createData(ID, Name, Age, Address) {
    return { ID, Name, Age, Address };
}

const rows = [
    createData('1', 'Đức Anh', 21, 'HD'),
    createData('2', 'Phong', 22, 'NĐ'),
    createData('3', 'Hiếu', 21, 'HN'),
    createData('4', 'Khánh', 19, 'HN'),
    createData('5', 'Duy', 30, 'NĐ'),
    createData('6', 'Kỳ', 45, 'TH'),
    createData('7', 'Việt', 16, 'VT'),
    createData('8', 'Nam', 23, 'QN'),
    createData('9', 'Tú', 19, 'HN'),
    createData('10', 'Khiêm', 20, 'ĐN'),

];

export default function ColumnGroupingTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={2}>
                                Country
                            </TableCell>
                            <TableCell align="center" colSpan={3}>
                                Details
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ top: 57, minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}