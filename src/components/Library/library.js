import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useFormik } from "formik";
import { useState } from 'react';

export function Library() {

    const [count, setCount] = useState(1);
    const [rows, setRows] = useState([]);

    const formik = useFormik({
        initialValues: {
            title: '',
            number: '',
        },
        onSubmit: values => {
            setRows([...rows, { id: count, title: values.title, number: values.number}]);
            setCount(count + 1);
        },
    });

    const editBook = (id) => {
        let book = rows.find(row => row.id === id);
        formik.setFieldValue('title', book.title);
        formik.setFieldValue('number', book.number);
    }

    const deleteBook = (id) => {
        const newRows = rows.filter(row => row.id !== id);
        setRows(newRows);
    }

    return (
        <>
            <Stack
                component="form"
                sx={{
                    width: '25ch',
                    margin: '0 auto'
                }}
                spacing={2}
                noValidate
                autoComplete="off"
                onSubmit={formik.handleSubmit}
            >
                <h1>Library</h1>
                <TextField
                    {...formik.getFieldProps('title')}
                    placeholder='title'
                    hiddenLabel
                    id="filled-hidden-label-small"
                    variant="filled"
                    size="small"
                />
                <TextField
                    {...formik.getFieldProps('number')}
                    placeholder='number'
                    hiddenLabel
                    id="filled-hidden-label-small"
                    variant="filled"
                    size="small"
                />
                <Button
                    type='submit'
                    variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
            </Stack>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Title</TableCell>
                            <TableCell >Number</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell >{row.number}</TableCell>
                                <TableCell >
                                    <button onClick={() => editBook(row.id)}>Edit</button>
                                    <button onClick={() => deleteBook(row.id)}>Delete</button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}