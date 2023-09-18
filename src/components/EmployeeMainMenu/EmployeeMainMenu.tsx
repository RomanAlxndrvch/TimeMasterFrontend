import React, { memo } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { LoginPassword } from 'components/LoginPassword/LoginPassword';
import { useSelector } from 'react-redux';

import { Menu } from 'components/Menu/Menu';
import { EmployeeType } from 'utils/types';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { AppRootStateType } from 'app/store';

export const EmployeeMainMenu = memo(function () {
  console.log('MainMenu');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  //Data from state
  const selectedEmployee = useSelector<AppRootStateType, EmployeeType>(
    (state) => state.employees.selectedEmployee
  );

  console.log(selectedEmployee);
  console.log('1');

  return (
    <div>
      <Routes>
        <Route path={'/employee-menu'} element={<Menu />} />
        <Route
          path={'/employee-password'}
          // element={<LoginPassword onSubmit={() => {}} />}
        />
      </Routes>
    </div>
  );
});
