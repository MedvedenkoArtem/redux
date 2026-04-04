import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"; 
import { useAppDispatch } from "store/hooks";
import { employeesSliceActions } from "store/redux/employeesSlice/employeesSlice";
import { v4 as uuidv4 } from "uuid";

import {
  CREATE_EMPLOYEE_FIELDS,
  CREATE_EMPLOYEE_LABELS,
} from "./types";

import {
  CreateEmployseContainer,
  Title,
  InputsContainer,
} from "./styles";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

const validationSchema = Yup.object({
  [CREATE_EMPLOYEE_FIELDS.NAME]: Yup.string()
    .min(2, "Min 2 characters")
    .max(50, "Max 50 characters")
    .required("Name is required"),

  [CREATE_EMPLOYEE_FIELDS.SURNAME]: Yup.string()
    .max(15, "Max 15 characters")
    .required("Surname is required"),

  [CREATE_EMPLOYEE_FIELDS.AGE]: Yup.number()
    .typeError("Age must be a number")
    .required("Age is required")
    .positive("Must be positive")
    .integer("Must be integer"),

  [CREATE_EMPLOYEE_FIELDS.JOB]: Yup.string()
    .max(30, "Max 30 characters"),
});

function CreateEmployee() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      [CREATE_EMPLOYEE_FIELDS.NAME]: "",
      [CREATE_EMPLOYEE_FIELDS.SURNAME]: "",
      [CREATE_EMPLOYEE_FIELDS.AGE]: "",
      [CREATE_EMPLOYEE_FIELDS.JOB]: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(
        employeesSliceActions.addEmployee({
          id: uuidv4(),
          name: values.name,
          surname: values.surname,
          age: Number(values.age),
          job: values.job,

        })
      );

      resetForm();
      navigate("/EmployeeCard");
    },
  });

  const onAddEmployee = () => {
    formik.submitForm();
  };

  return (
    <CreateEmployseContainer>
      <Title>Create Employee</Title>

      <InputsContainer>
        <Input
          name={CREATE_EMPLOYEE_FIELDS.NAME}
          placeholder={CREATE_EMPLOYEE_LABELS.NAME}
          value={formik.values.name}
          onChange={formik.handleChange}
          error={!!formik.errors.name}
          helperText={formik.errors.name}
        />

        <Input
          name={CREATE_EMPLOYEE_FIELDS.SURNAME}
          placeholder={CREATE_EMPLOYEE_LABELS.SURNAME}
          value={formik.values.surname}
          onChange={formik.handleChange}
          error={!!formik.errors.surname}
          helperText={formik.errors.surname}
        />

        <Input
          name={CREATE_EMPLOYEE_FIELDS.AGE}
          placeholder={CREATE_EMPLOYEE_LABELS.AGE}
          value={formik.values.age}
          onChange={formik.handleChange}
          error={!!formik.errors.age}
          helperText={formik.errors.age}
        />

        <Input
          name={CREATE_EMPLOYEE_FIELDS.JOB}
          placeholder={CREATE_EMPLOYEE_LABELS.JOB}
          value={formik.values.job}
          onChange={formik.handleChange}
          error={!!formik.errors.job}
          helperText={formik.errors.job}
        />
      </InputsContainer>

      <Button name="Create" onClick={onAddEmployee} />
    </CreateEmployseContainer>
  );
}

export default CreateEmployee;