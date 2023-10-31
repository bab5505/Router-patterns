import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import DogList from './DogList';
import FilterDogDetails from './FilterDogDetails';

function AppRoutes({ dogs }) {
  return (
    <Routes>
      <Route path="/" element={<DogList dogs={dogs} />} />
      <Route path="/dogs/:name" element={<FilterDogDetails dogs={dogs} />} />
      <Route index element={<Navigate to="/dogs" />} />
    </Routes>
  );
}

export default AppRoutes;
