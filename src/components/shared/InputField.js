import { TextField } from '@mui/material';
import { Field } from 'formik';
import React from 'react'

export const InputField = (props) => {
    // console.log(props);
    const { label, name, ...rest } = props
    // console.log(props);
    return (
        <div>
            <Field name={name}>{
                ({ field, form }) => {

                    return (
                        <TextField
                            error={!!form.errors[name] && form.touched[name]}
                            id={name}
                            label={label}
                            helperText={form.touched[name] ? form.errors[name] : null}
                            variant="standard"
                            {...field}
                            {...rest}
                        />
                    )
                }
            }

            </Field>

        </div>
    )
}
