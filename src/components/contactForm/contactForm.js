import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import { useFormik } from "formik";
import * as Yup from 'yup';

export function ContactForm() {
    const validateLogin = Yup.object({
        mail: Yup.string()
            .email('Đây không phải là địa chỉ email hợp lệ'),
        name: Yup.string()
            .max(10, 'tối đa 10 ký tự'),
        phone: Yup.string()
            .max(10, 'tối đa 10 ký tự'),
        message: Yup.string()
            .max(10, 'tối đa 10 ký tự'),
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            mail: '',
            phone: '',
            message: ''
        },
        validationSchema: validateLogin,
        onSubmit: values => {
            console.log(values)
        },
    });

    return (
            <Box 
                component="form"
                onSubmit={formik.handleSubmit}
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}
                noValidate
                autoComplete="off"
            >
                <h1>Contact Form</h1>
                <div>
                    <TextField
                        {...formik.getFieldProps('name')}
                        id="name"
                        label="Name"
                        multiline
                        error={Boolean(formik.errors.name)}
                        helperText={formik.errors.name}
                    />
                </div>
                <div>
                    <TextField
                        {...formik.getFieldProps('mail')}
                        id="mail"
                        label="Mail"
                        multiline
                        error={Boolean(formik.errors.mail)}
                        helperText={formik.errors.mail}
                    />
                </div>
                <div>
                    <TextField
                        {...formik.getFieldProps('phone')}
                        id="phone"
                        label="Phone"
                        multiline
                        error={Boolean(formik.errors.phone)}
                        helperText={formik.errors.phone}
                    />
                </div>
                <div>
                    <TextField
                        {...formik.getFieldProps('message')}
                        id="message"
                        label="Message"
                        multiline
                        error={Boolean(formik.errors.message)}
                        helperText={formik.errors.message}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Stack direction="row" spacing={2}>
                        <Button 
                        type='submit'
                        variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </Stack>
                </div>
            </Box>
    );
}