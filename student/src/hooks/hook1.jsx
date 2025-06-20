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

  const [page, setPage] = useState(1);
  const studentsPerPage = 6;
  const totalPages = Math.ceil(displayList.length / studentsPerPage);

  const startIndex = (page - 1) * studentsPerPage;
  const endIndex = startIndex + studentsPerPage;
  const paginatedList = displayList.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleMenuOpen = (event, studentId) => {
    setAccountAnchorEl(event.currentTarget);
    setSelectedStudentId(studentId);
  };

  const handleMenuClose = () => {
    setAccountAnchorEl(null);
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

  const handleAdd = () => navigate("/dashboard/create");
  const handleEdit = () => {
    if (selectedStudentId) navigate(`/dashboard/edit/${selectedStudentId}`);
    handleMenuClose();
  };

  return {
    displayList,
    paginatedList,
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
    page,
    totalPages,
    handlePageChange,
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

export function useLogin() {
  const [loginData, setLoginData] = useState({ 
    email: "", 
    password: "" 
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!loginData.email) newErrors.email = "Email is required";
    if (!loginData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validate()) return;

  const savedUserStr = localStorage.getItem("authUser");
    if (!savedUserStr) {
      setErrors({ email: "No user found. Please sign up first." });
      return;
    }
    const savedUser = JSON.parse(savedUserStr);

    if (
      loginData.email === savedUser.email &&
      loginData.password === savedUser.password
    ) {
      
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } else {
      setErrors({ email: "Invalid email or password" });
    }
  };

  return { 
    loginData, 
    errors, 
    handleChange, 
    handleLogin 
  };
}

  
export function useSignup() {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(signupData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!signupData.password) {
      newErrors.password = "Password is required";
    } else if (signupData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (signupData.password !== signupData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!validate()) return;

    localStorage.setItem("authUser", JSON.stringify({
      email: signupData.email,
      password: signupData.password,
    }));
    navigate("/");
  };

  return { signupData, errors, handleChange, handleSignup };
}

