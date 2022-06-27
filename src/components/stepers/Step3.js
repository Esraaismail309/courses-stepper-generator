import { Button, Grid } from '@mui/material'
import React from 'react'

export const Step3 = ({ handleBack }) => {

    let course = JSON.parse(localStorage.getItem('course'))

    if (course?.length > 0) {
        var coursedata = course[course.length - 1].courses[0]
    }
    let details = JSON.parse(localStorage.getItem('courseDetails'))
    if (details?.length > 0) {
        var courseDetails = details[details.length - 1]
    }
    console.log(courseDetails);
    return (
        <Grid>
            Course Details:
            <div>
                <strong>instructor name: </strong>
                {courseDetails.instructorName}
            </div>
            <div>
                <strong>course name: </strong>
                {courseDetails.courseName}
            </div>
            <div>
                <strong>course duration: </strong>
                {courseDetails.courseDuration}
            </div>
            <div>
                <strong>course Price: </strong>
                {courseDetails.coursePrice} $
            </div>
            <div>
                <strong>instructor image: </strong>
                <img src={courseDetails.avatar ? courseDetails.avatar : 'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1214428300?k=20&m=1214428300&s=170667a&w=0&h=NPyJe8rXdOnLZDSSCdLvLWOtIeC9HjbWFIx8wg5nIks='} style={{ width: '10%', borderRadius: '50%' }} alt={details.instructorName} />
            </div>
            <Button
                color="inherit"
                onClick={() => { handleBack() }}
                sx={{ mr: 1 }}
            >
                Back
            </Button>
        </Grid>
    )
}
