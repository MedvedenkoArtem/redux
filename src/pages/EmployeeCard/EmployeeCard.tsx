import { useAppDispatch, useAppSelector } from "store/hooks";
import { CardWrapper, Field, Label, Value, ButtonsContainer } from "./styles";
import Button from "components/Button/Button";
import { employeesSliceActions } from "store/redux/employeesSlice/employeesSlice";

function EmployeeCard() {
  const dispatch = useAppDispatch();

  const employees = useAppSelector((state) => state.employees.employees);

  const onDelete = (id: string | number) => {
    dispatch(employeesSliceActions.deleteEmployee(id));
  };

  const onDeleteAll = () => {
    dispatch(employeesSliceActions.deleteAllEmployees());
  };

  if (employees.length === 0) {
    return <p>No employees</p>;
  }

  return (
    <>
      {employees.map((employee) => (
        <CardWrapper key={employee.id}>
          <Field>
            <Label>Name:</Label>
            <Value>{employee.name}</Value>
          </Field>

          <Field>
            <Label>Surname:</Label>
            <Value>{employee.surname}</Value>
          </Field>

          <Field>
            <Label>Age:</Label>
            <Value>{employee.age}</Value>
          </Field>

          <Field>
            <Label>Job:</Label>
            <Value>{employee.job}</Value>
          </Field>

          <ButtonsContainer>
            <Button name="DELETE" onClick={() => onDelete(employee.id)} isRed />
          </ButtonsContainer>
        </CardWrapper>
      ))}
      <ButtonsContainer>
        <Button name="DELETE ALL" onClick={onDeleteAll} isRed />
      </ButtonsContainer>
    </>
    
  );
} 

export default EmployeeCard;