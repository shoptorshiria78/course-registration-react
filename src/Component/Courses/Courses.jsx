import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types'

const Courses = ({handleSelect}) => {

    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch("course.json")
        .then(res => res.json())
        .then(data => setCourses(data));
    },[])

    return (
        <div className="grid col-span-1 md:col-span-2 lg:col-span-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-3">
            {
                courses.map(course => <Course
                     key={course.id} 
                     course={course}
                     handleSelect={handleSelect}></Course>)
            }
            
        </div>
    );
};

Courses.propTypes ={
    handleSelect: PropTypes.func.isRequired
}
export default Courses;