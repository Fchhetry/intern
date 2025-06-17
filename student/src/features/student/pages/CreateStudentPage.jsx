import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CreateEditStudentFormView from "../viewModules/CreateEditStudentFormView";
import { addStudent } from "../../../store/StudentSlice";

export default function CreateStudentPage() {
  const dispatch = useDispatch(); // trigger redux actions
  const navigate = useNavigate(); // go back to home page

  const handleSubmit = (student) => {
    const newStudent = {
      ...student, //Copies all form data fields
      id: Date.now(), //  ensures each student has a unique ID based on the current time
    };

    dispatch(addStudent(newStudent)); //ends the student to the Redux store
    navigate("/"); //Takes the user back to the homepage
  };

  return (
    <CreateEditStudentFormView
      onSubmit={handleSubmit} //Passes the function to be called when form is submitted
      isEditMode={false} //Tells the form it's in create mode
      student={null} // on not editing, there's no existing student data to prefill the form
    />
  );
}
