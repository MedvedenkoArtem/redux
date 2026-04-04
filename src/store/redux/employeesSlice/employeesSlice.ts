import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Employee {
  id: string | number;
  [key: string]: any;
}

interface EmployeesState {
  employees: Employee[];
}

const initialState: EmployeesState = {
  employees: []
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },
    deleteEmployee: (state, action: PayloadAction<string | number>) => {
      state.employees = state.employees.filter(
        (emp) => emp.id !== action.payload
      );
    },
    deleteAllEmployees: (state) => {
      state.employees = [];
    }
  }
});

export const employeesSliceActions = employeesSlice.actions;
export default employeesSlice.reducer;