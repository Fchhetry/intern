import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import CreateEditStudentFormView from "../viewModules/CreateEditStudentFormView";
import { updateStudent } from "../../../store/studentSlice";

export default function EditStudentPage() {
  const { id } = useParams(); //Accesses route parameters  here student id
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const student = useSelector(
    (
      state // Fetches the student data from Redux state
    ) => state.students.list.find((s) => s.id === Number(id))
  );

  const handleSubmit = (updatedStudent) => {
    dispatch(updateStudent({ ...updatedStudent, id: Number(id) }));
    navigate("/dashboard/studentlist");
  };

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <CreateEditStudentFormView
      onSubmit={handleSubmit}
      isEditMode={true}
      student={student}
    />
  );
}
