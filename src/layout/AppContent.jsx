import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// routes config
import routes from '../routes';

const AppContent = () => {
  return (
    <div className="consignment-app-content">
      {/* <Suspense fallback={<CSpinner color="primary" />}> */}
      <Routes>
        {routes.map((route, idx) => {
          return (
            route.element && (
              <Route key={idx} path={route.path} exact={route.exact} name={route.name} element={<route.element />} />
            )
          );
        })}

        <Route path="/" element={<Navigate to="dashboard" replace />} />
      </Routes>
      {/* </Suspense> */}
    </div>
  );
};

export default React.memo(AppContent);

export { AppContent };
