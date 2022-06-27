import React, { useState } from 'react'
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { InputField } from '../shared/InputField';
import { Avatar, Box, Button, Grid } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import './../../App.css'


export const Step2 = ({ handleSubmit, handleBack }) => {
    const [avatarPreview, setAvatarPreview] = useState('/avatars/default.png');
    const initialValues = {
        instructorName: '',
        file: '',
        courseName: '',
        coursePrice: '',
        courseDuration: '',
    }
    const validationSchema = Yup.object({
        instructorName: Yup.string().required('Instructor Name is required'),
        courseName: Yup.string().required('Course Name is required'),
        coursePrice: Yup.string().required('Course Price is required'),
        courseDuration: Yup.string().required('Course Duration is required')
    })

    const onSubmit = (values) => {
        handleSubmit(values)

        let arrayValuse = [values]
        if (localStorage.getItem('courseDetails') != null) {
            let x = JSON.parse(localStorage.getItem('courseDetails'))
            localStorage.setItem('courseDetails', JSON.stringify(x.concat(arrayValuse)))
        } else {
            localStorage.setItem('courseDetails', JSON.stringify(arrayValuse))
        }
    }
    return (
        <Box sx={{ my: 10 }}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {
                    formik => {
                        return (
                            <Form>
                                <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
                                    <Grid item sm={6}>
                                        <InputField name='instructorName' label='Instructor Name' type='text' />
                                    </Grid>
                                    <Grid item sm={2}>
                                        < Avatar size='md' src={avatarPreview} />
                                    </Grid>
                                    <Grid item sm={4}>
                                        <Button
                                            variant='contained'
                                            component='label'
                                            startIcon={<CloudUploadIcon />}>
                                            Choose Avatar
                                            <input
                                                type='file'
                                                name='file' accept='image/*' hidden
                                                onChange={(e) => {
                                                    const fileReader = new FileReader();
                                                    fileReader.onload = () => {
                                                        if (fileReader.readyState === 2) {
                                                            formik.setFieldValue('avatar', fileReader.result);
                                                            setAvatarPreview(fileReader.result);
                                                        }
                                                    };
                                                    fileReader.readAsDataURL(e.target.files[0]);
                                                }}
                                            />
                                        </Button>
                                    </Grid>
                                    <Grid container style={{ marginTop: '2.5rem' }}>

                                    </Grid>
                                    <Grid item sm={4}>
                                        <InputField name='courseName' label='Course Name' type='text' />
                                    </Grid>
                                    <Grid item sm={4}>
                                        <InputField name='coursePrice' label='Course Price' type='number' />
                                    </Grid>
                                    <Grid item sm={4}>
                                        <InputField name='courseDuration' label='Course Duration' type='number' />
                                    </Grid>
                                </Grid>
                                <Button
                                    color="inherit"
                                    onClick={() => { handleBack(formik.values) }}
                                    sx={{ mr: 1 }}
                                >
                                    Back
                                </Button>
                                <Button type='submit'>Next</Button>
                            </Form>
                        )
                    }
                }
            </Formik>

        </Box >
    )
}
