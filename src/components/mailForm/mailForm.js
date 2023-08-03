import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useFormik } from "formik";
import * as Yup from 'yup';

export function MailForm() {

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

    return(
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
                <h1>Contact Form</h1>
                <TextField
                    {...formik.getFieldProps('name')}
                    placeholder='name'
                    hiddenLabel
                    id="filled-hidden-label-small"
                    variant="filled"
                    size="small"
                    error={formik.submitCount > 0 && Boolean(formik.errors.name)}
                    helperText={formik.submitCount > 0 && formik.errors.name}
                />
                <TextField
                    {...formik.getFieldProps('mail')}
                    placeholder='mail'
                    hiddenLabel
                    id="filled-hidden-label-small"
                    variant="filled"
                    size="small"
                    error={formik.submitCount > 0 && Boolean(formik.errors.mail)}
                    helperText={formik.submitCount > 0 && formik.errors.mail}
                />
                <TextField
                    {...formik.getFieldProps('phone')}
                    placeholder='phone'
                    hiddenLabel
                    id="filled-hidden-label-small"
                    variant="filled"
                    size="small"
                    error={formik.submitCount > 0 && Boolean(formik.errors.phone)}
                    helperText={formik.submitCount > 0 && formik.errors.phone}
                />
                <TextField
                    {...formik.getFieldProps('message')}
                    id="message"
                    label="Message"
                    multiline
                    error={formik.submitCount > 0 && Boolean(formik.errors.message)}
                    helperText={formik.submitCount > 0 && formik.errors.message}
                />
                <Button
                    type='submit'
                    variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
            </Stack>
        </>
    )
}