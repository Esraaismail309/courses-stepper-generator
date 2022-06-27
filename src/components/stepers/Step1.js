import React, { useState } from 'react'
import { Form, Formik, FieldArray, Field } from "formik";
import * as Yup from "yup";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { SelectField } from '../shared/SelectField';

export const Step1 = ({ handleSubmit }) => {
    const initialValues = {
        courses: [{
            lesson: '',
            level: 'Beginners'
        }]
    }
    const validationSchema = Yup.object({
        courses: Yup.array(Yup.object({
            lesson: Yup.string().required('req'),
            level: Yup.string().required('req')
        }))
    })
    const onSubmit = (values) => {

        if (localStorage.getItem('course') != null) {
            let x = JSON.parse(localStorage.getItem('course'))
            console.log(x);
            x.courses?.length === 1 ? localStorage.setItem('course', JSON.stringify(x.courses.concat(values))) :
                localStorage.setItem('course', JSON.stringify(x.concat(values)))
        } else {
            localStorage.setItem('course', JSON.stringify(values))
        }
        handleSubmit(values)
        // addDocs(values)
    }

    return (
        <div style={{ with: '100%' }}  >
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {
                    formik => {
                        return (<Form style={{ margin: 'auto' }}>
                            <FieldArray name='courses'>
                                {(fieldArrayprops) => {
                                    const { remove, push, form } = fieldArrayprops;
                                    const { values } = form;
                                    const { courses } = values;
                                    return (
                                        <>
                                            {courses.map((course, i) => (
                                                <div key={i} >
                                                    <Grid item container spacing={2} mt={3}  >
                                                        <Grid item xs={12} sm='auto' >
                                                            <Field name={`courses[${i}].lesson`}>{
                                                                ({ field, form }) => {
                                                                    const lessonError = form.errors?.courses?.length > 0 && form.errors?.courses[i]?.lesson
                                                                    const lessonTouched = form.touched?.courses?.length > 0 && form.touched.courses[i]?.lesson
                                                                    // console.log("form", lessonTouched)
                                                                    return (
                                                                        <TextField
                                                                            error={!!lessonError && lessonTouched}
                                                                            id={`courses[${i}].lesson`}
                                                                            label='Lesson Name'
                                                                            variant="standard"
                                                                            helperText={lessonTouched ? lessonError : null}
                                                                            {...field}
                                                                        />
                                                                    )
                                                                }
                                                            }
                                                            </Field>
                                                        </Grid>
                                                        <Grid item xs={12} sm='auto'>
                                                            <Field name={`courses[${i}].level`}>
                                                                {
                                                                    ({ field, form }) => {
                                                                        return (
                                                                            <SelectField name={`courses[${i}].level`} field={{ ...field }} {...form} />
                                                                        )
                                                                    }
                                                                }
                                                            </Field>
                                                        </Grid>
                                                        <Grid item>
                                                            <Button type='button'
                                                                variant="contained"
                                                                color="error"
                                                                mr={3}
                                                                onClick={() => {
                                                                    remove(i)
                                                                }}>Delete <DeleteForeverIcon />
                                                            </Button>
                                                        </Grid>
                                                        <Grid item>
                                                            <Button
                                                                type='button'
                                                                variant="contained"
                                                                color="success"
                                                                mr={5}
                                                                onClick={() => {
                                                                    push({
                                                                        lesson: '',
                                                                        level: 'Beginners'
                                                                    })
                                                                }}>Add <AddCircleIcon /></Button>
                                                        </Grid>
                                                    </Grid>
                                                </div>

                                            ))}
                                            <Button type='submit' >Next</Button>
                                        </>
                                    )







                                }}
                            </FieldArray>
                        </Form>
                        )
                    }
                }
            </Formik>




        </div >
    )
}
