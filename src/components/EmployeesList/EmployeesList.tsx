import React from 'react';
import classes from '../EmployeesList/EmployeesList.module.css';
import { Button, List } from '@mui/material';
import { useSelector } from 'react-redux';
import { AppRootStateType } from 'app/store';
import { EmployeesListItem } from 'components/EmployeesList/ListItem/EmployeesListItem';
import { EmployeeRespondType } from 'utils/types';

const EmployeesListBM = () => {
  const employeesList = useSelector<AppRootStateType, EmployeeRespondType[]>(
    (state) => state.employees.allEmployees
  );

  return (
    <div className={classes.mainBlock}>
      <List component="nav" aria-label="employees list">
        {employeesList.map((el) => {
          return <EmployeesListItem name={el.name} id={el._id} key={el._id} />;
        })}
      </List>
      <Button variant={'contained'} className={classes.listButton}>
        FOR ADMIN
      </Button>
    </div>
  );
};

export const EmployeesList = React.memo(EmployeesListBM);
