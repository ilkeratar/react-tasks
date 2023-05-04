import Course from "./Course";
import { useState } from "react";
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa';

function Courses({ courses, removeCourse }) {
  const [index, setIndex] = useState(0);
  const { content, title, price } = courses[index];
  const checkIndex=(index)=>{
    if(index===-1){
        return courses.length-1;
    }
    if(index===5){
        return 0;
    }
        return index;
  }
  const prevCourse=()=>{
    setIndex((index)=>{
        let newIndex=index-1;
        return checkIndex(newIndex);
    })
  }
  const nextCourse=()=>{
    setIndex((index)=>{
        let newIndex=index+1;
        return checkIndex(newIndex);
    })
  }
  const getRandomCourse=()=>{
    let randomNmbr=Math.floor(Math.random()*courses.length);
    if(randomNmbr===index){
        randomNmbr++;
    }
    setIndex(checkIndex(randomNmbr));
  }

  return (
    <div className="courseMainDiv">
      <div className="courseTitle">
        <h2>My Courses</h2>
        <button className="cardDeleteBtn" onClick={getRandomCourse}>Assign random course</button>
      </div>
      <div className="cardMain">
        <button className="prevNextBtn" onClick={prevCourse}>
            <FaChevronLeft/>
        </button>
        <div className="card">
          <div className="cardTitlePrice">
            <h2 className="cardTitle">{title}</h2>
            <h4 className="cardPrice">{price}TL</h4>
          </div>
          <p className="cardContent">{content}</p>
        </div>
        <button className="prevNextBtn" onClick={nextCourse}>
            <FaChevronRight/>
        </button>
        {/* {courses.map((course,index)=>{
           return <Course key={index} {...course} removeOneCourse={removeCourse}/>
        })} */}
      </div>
    </div>
  );
}

export default Courses;
