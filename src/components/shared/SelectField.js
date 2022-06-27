import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export const SelectField = ({ name, values, field, ...form }) => {
    // const = props
    const [level, setLevel] = useState('');
    const handleChange = (event) => {
        setLevel(event.target.value);
    };
    return (
        <div>
            <FormControl sx={{ minWidth: 150 }} >
                <InputLabel id={name}>Lesson Level</InputLabel>
                <Select
                    labelId={name}
                    id={name}
                    label="Level"
                    value={level}
                    variant="standard"
                    onChange={handleChange}
                    renderValue={(value) => `${value}`}
                    {...field}
                >
                    <MenuItem value='Beginners'>Beginners</MenuItem>
                    <MenuItem value='Intermediate'>Intermediate</MenuItem>
                    <MenuItem value='Advanced'>Advanced</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}
