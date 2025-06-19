import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteStudent } from "../store/studentSlice";

export function useStudentListHooks() {
  const students = useSelector((state) => state.students.list || []);
  const searchQuery = useSelector((state) => state.students.searchQuery || "");
  const safeSearch = searchQuery.toLowerCase().trim();

  const filteredStudent = students.filter((student) =>
    `${student.fname} ${student.lname}`.toLowerCase().includes(safeSearch)
  );
  const displayList = safeSearch ? filteredStudent : students;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [accountAnchorEl, setAccountAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const accountMenuOpen = Boolean(accountAnchorEl);

  const handleMenuOpen = (event, studentId) => {
    setAnchorEl(event.currentTarget);
    setSelectedStudentId(studentId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedStudentId(null);
  };

  const handleAccountMenuClose = () => {
    setAccountAnchorEl(null);
    setSelectedStudentId(null);
  };

  const handleDeleteStudent = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      dispatch(deleteStudent(id));
    }
    handleMenuClose();
  };

  const handleAdd = () => navigate("/create");
  const handleEdit = () => {
    if (selectedStudentId) navigate(`/edit/${selectedStudentId}`);
    handleMenuClose();
  };

  return {
    displayList,
    anchorEl,
    open,
    accountAnchorEl,
    accountMenuOpen,
    selectedStudentId,
    handleMenuOpen,
    handleMenuClose,
    handleAccountMenuClose,
    handleDeleteStudent,
    handleAdd,
    handleEdit,
  };
} 


export function useStudentForm({ isEditMode, student, onSubmit }) {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    gender: "",
    phone: "",
    bio: "",
  });

  const genderOptions = ["Male", "Female", "Other"];

  useEffect(() => {
    if (isEditMode && student) {
      setForm({
        fname: student.fname || "",
        lname: student.lname || "",
        email: student.email || "",
        gender: student.gender || "",
        phone: student.phone || "",
        bio: student.bio || "",
      });
    }
  }, [isEditMode, student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = {
      id: isEditMode && student?.id ? student.id : Date.now(),
      ...form,
    };
    onSubmit(studentData);
  };

  return {
    form,
    genderOptions,
    handleChange,
    handleSubmit,
  };
}
