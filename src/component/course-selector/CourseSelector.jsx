import React from "react";
import "./CourseSelector.scss";
import CourseSelectorOption from "../course-selector-option/CourseSelectorOption";

function CourseSelector(props) {
  const { choose } = props;
  // console.log(choose)
  // console.log('s:', choose)

  return (
    <>
      <div className="selector">
        <select type="text" onChange={props.handleChange}>
          {/* <option value>請選擇教室課程</option> */}

          {choose.coursesCategory &&
            choose.coursesCategory.map((option) => (
              <CourseSelectorOption
                key={option.courseCategoryId}
                option={option}
              />
            ))}
        </select>
      </div>
      {/* <div>{choose}</div> */}
    </>
  );
}
export default CourseSelector;
