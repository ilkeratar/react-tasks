import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Courses from './Courses';
import Loading from './Loading';

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/courses');
      setCourses(response.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }

  const deleteCourse = async (id) => {
    const afterDeletedCourse = courses.filter((course) => course.id !== id);
    setCourses(afterDeletedCourse);
    // const response=await axios.delete(`http://localhost:3000/courses/${id}`);
  }


  useEffect(() => {
    fetchCourses();
  }, [])



  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          {courses.length === 0 ? 
          (<div className='refleshDiv'>
            <h2>All Courses Deleted!</h2>
            <button className='cardDeleteBtn' onClick={()=>fetchCourses()}>Refresh</button>
          </div>) :
            (<Courses courses={courses} removeCourse={deleteCourse} />)}
        </>

      )}

    </div>
  );
}

export default App;
