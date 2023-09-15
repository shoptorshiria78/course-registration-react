 import PropTypes from 'prop-types'

const Course = ({course, handleSelect}) => {

    const {img, title, description, price, credit} = course;
    
    return (
        <div className="p-3 rounded-xl bg-white space-y-3">
            <img src={course.img} alt="" />
            <h1 className="text-[#1C1B1B] text-base font-bold ">{course.title}</h1>
            <p className="text-[#1C1B1B99] text-sm font-medium ">{course.description}</p>
            <div className="flex justify-between">
                <p>$ <span className='text-[#1C1B1B99] text-sm font-medium'>Price: {course.price}</span> </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 6.042C10.3516 4.56336 8.2144 3.74694 6 3.75C4.948 3.75 3.938 3.93 3 4.262V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.042C13.6483 4.56328 15.7856 3.74685 18 3.75C19.052 3.75 20.062 3.93 21 4.262V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.9969 13.6484 18.8134 12 20.292M12 6.042V20.292" stroke="#1C1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                <p className='text-[#1C1B1B99] text-sm font-medium'>Credit: <span>{course.credit}</span> hr </p>
            </div>
            <button onClick={()=>handleSelect(course.credit, course.price, course.title)} className='text-white w-full bg-[#2F80ED] rounded-xl h-8'>Select</button>
        </div>
    );
};

Course.propTypes ={
    course: PropTypes.object.isRequired,
    handleSelect: PropTypes.func.isRequired
}

export default Course;