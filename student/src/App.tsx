// import React from 'react';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './store/store';
// import theme from './theme';
// import AppRoutes from './routes';
// function App() {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//        <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <BrowserRouter>
//           <AppRoutes />
//         </BrowserRouter>
//       </ThemeProvider>
//       </PersistGate>
//     </Provider>
//   );
// }
// export default App;


import React from "react";
import { useState, useEffect } from "react";
import {
  Pagination,
  ApiResponse,
  FormField,
  AsyncState,
  ModalProps,
  SortOrder,
  SelectOption,
} from "./typescript/interfacetypes";
import { Card } from "@mui/material";
import { 
  StringOrNumber,
  Status, 
  Notification, 
  FormValue } from "./typescript/uniontypes";
  import {
    Address,
    UserProfile,
    Product} from "./typescript/objecttypes";

interface Student {
  id: number;
  fname: string;
  lname: string;
  email: string;
}

function App() {
  //use Pagination<Student> type for state
   const [pagination, setPagination] = useState<Pagination<Student>>({
    items: [
      { id: 1, fname: "Pooja", lname: "Fuyal", email: "pooja@example.com" },
      { id: 2, fname: "Shreya", lname: "Pokhrel", email: "shreya@example.com"  },
    ],
    currentPage: 1,
    totalPages: 1,
    itemsPerPage: 10,
    totalItems: 2,
  });

  // use ModalProps for a modal state
  const [modal, setModal] = useState<ModalProps>({
    isOpen: false,
    onClose: () => setModal(prev => ({ ...prev, isOpen: false })),
    title: "Example Modal",
  });

  // using enum SortOrder
  
  const [inputText, setInputText] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.ASC);
   const [sortedArray, setSortedArray] = useState<string[]>([]);

   const handleSort = () => {
    const array = inputText.split(",").map((item) => item.trim());
    const sorted = [...array].sort();

    if (sortOrder === SortOrder.DESC) {
      sorted.reverse();
    }

    setSortedArray(sorted);
  };

  //  select options
  const selectOptions: SelectOption[] = [
    { label: "Ascending", value: SortOrder.ASC },
    { label: "Descending", value: SortOrder.DESC },
  ];

   // API response state (simulate fetching students)
  const [apiResponse, setApiResponse] = useState<ApiResponse<Student[]>>({
    data: [],
    status: 0,
  });

  // Simulate fetching data with AsyncState
  const [fetchState, setFetchState] = useState<AsyncState<Student[]>>({
    loading: false,
  });

  const [value, setValue] = useState<StringOrNumber>("Hello");
  const [status, setStatus] = useState<Status>("loading");

  const [notification, setNotification] = useState<Notification>({
    message: "Welcome to the app!",
    type: "info",
  });

  const [formValue, setFormValue] = useState<FormValue>("");

  const handleToggle = () => {
    if (typeof value === "string") {
      setValue(123);
    } else {
      setValue("Switched back to string");
    }
  };

  const handleStatusChange = () => {
    const newStatus: Status = status === "loading" ? "success" : "error";
    setStatus(newStatus);
  };

  const handleNotificationTypeChange = (type: Notification["type"]) => {
    setNotification({ ...notification, type });
  };

  const handleFormValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!isNaN(Number(val))) {
      setFormValue(Number(val));
    } else {
      setFormValue(val);
    }
  };

  // UserProfile state
  const [user, setUser] = useState<UserProfile>({
    id: 1,
    name: "Pooja Fuyal",
    email: "pooja@example.com",
    address: {
      street: "123 Main Street",
      city: "Kathmandu",
      zipCode: "44600",
    },
  });

   // Product list state
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 20, description: "Wireless mouse" },
  ]);

  const updateUserCity = () => {
    setUser((prevUser) => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        city: "Pokhara",
      },
    }));
  };


  // Simulate fetching students on mount
  useEffect(() => {
    setFetchState({ loading: true });
    setTimeout(() => {
      const fetchedStudents = pagination.items;
      setApiResponse({ data: fetchedStudents, status: 200, message: "Success" });
      setFetchState({ loading: false, data: fetchedStudents });
    }, 1000);
  }, [pagination.items]);

  // FormField for a student’s first name input
  const [fnameField, setFnameField] = useState<FormField<string>>({
    value: "",
    error: undefined,
    touched: false,
  });

  // Handle form field change
  const handleFnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFnameField({
      value: e.target.value,
      error: e.target.value ? undefined : "First name is required",
      touched: true,
    });
  };
  return (
    <div>
      <h1>React + Redux + TypeScript + Vite</h1>
      <p>Welcome to your app!</p>
<Card>
      <div style={{ padding: 20 }}>
      <h1>Students Pagination</h1>

      {fetchState.loading ? (
        <p>Loading students...</p>
      ) : (
        <ul>
          {apiResponse.data.map((student) => (
            <li key={student.id}>
              {student.fname} {student.lname} - {student.email}
            </li>
          ))}
        </ul>
      )}

      <p>
        Page {pagination.currentPage} of {pagination.totalPages}
      </p>

      <button onClick={() => setModal({ ...modal, isOpen: true })}>
        Open Modal
      </button>

      {modal.isOpen && (
        <div
          style={{
            border: "1px solid black",
            padding: 10,
            marginTop: 10,
            maxWidth: 300,
          }}
        >
          <h2>{modal.title}</h2>
          <button onClick={modal.onClose}>Close</button>
        </div>
      )}
      </div>
      </Card>
      <br></br>

      
<Card>
      <div style={{ padding: 20 }}>
      <h2>Sort Array</h2>

      <label>Enter comma-separated values:</label>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="e.g., mango, apple, banana"
        style={{ width: "100%", marginTop: 5, marginBottom: 10 }}
      />

      <label>Choose sort order:</label>
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value as SortOrder)}
        style={{ marginLeft: 10, marginBottom: 10 }}
      >
        <option value={SortOrder.ASC}>Ascending</option>
        <option value={SortOrder.DESC}>Descending</option>
      </select>

      <br />
      <button onClick={handleSort} style={{ marginBottom: 20 }}>
        Sort
      </button>

      <h3>Sorted Output:</h3>
      <ul>
        {sortedArray.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
</Card>
<br></br>
<Card>
  <div style={{ marginTop: 20 }}>
    <label>First Name:</label>
      <input
        type="text"
        value={fnameField.value}
        onChange={handleFnameChange}
        style={{ marginLeft: 10 }}
      />
       {fnameField.error && fnameField.touched && (
        <span style={{ color: "red", marginLeft: 10 }}>{fnameField.error}</span>
      )}  
    </div>
</Card>
<br></br>
<Card>
      <div style={{ padding: 20 }}>
      <h1>Union Types Demo</h1>

      <section style={{ marginBottom: 20 }}>
        <h3>StringOrNumber: {typeof value} — {value}</h3>
        <button onClick={handleToggle}>Toggle String/Number</button>
      </section>

      <section style={{ marginBottom: 20 }}>
        <h3>Status: {status}</h3>
        <button onClick={handleStatusChange}>Change Status</button>
      </section>

      <section style={{ marginBottom: 20 }}>
        <h3>Notification: {notification.message} [{notification.type}]</h3>
        <button onClick={() => handleNotificationTypeChange("warning")}>Set to Warning</button>
        <button onClick={() => handleNotificationTypeChange("error")}>Set to Error</button>
      </section>

      <section>
        <h3>Form Value (string | number | boolean)</h3>
        <input
          type="text"
          onChange={handleFormValueChange}
          placeholder="Type a number or string"
        />
        <p>
          Value: {formValue.toString()} ({typeof formValue})
        </p>
      </section>
    </div>
</Card>
    
<br></br>
  <Card>
      <div style={{ padding: 20 }}>
      <h1>Object Types in TypeScript</h1>

      <section style={{ marginBottom: 20 }}>
        <h2>User Profile</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p>
          <strong>Address:</strong> {user.address.street}, {user.address.city} {user.address.zipCode}
        </p>
        <button onClick={updateUserCity}>Change City to Pokhara</button>
      </section>

      <section>
        <h2>Product List</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> - ${product.price}
              {product.description && <> ({product.description})</>}
            </li>
          ))}
        </ul>
      </section>
      
    </div>
    </Card>
    </div>
    
);
}


export default App;
