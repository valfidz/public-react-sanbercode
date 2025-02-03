import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/home/home";
import { Dashboard } from "./pages/dashboard/dashboard";
import { DashboardJobList } from "./pages/dashboard/dashboardJobList";
import { JobCreateForm } from "./pages/form/jobForm";
import { JobEditForm } from "./pages/form/jobEditForm";
import { Register } from "./pages/register/register";
import { Login } from "./pages/login/login";
import { LoginRoute } from "./auth/loginRoute";
import { RouteAuth } from "./auth/routeAuth";
import { JobDetail } from "./pages/home/jobDetail";
import { Profile } from "./pages/profile/profilePage";
import { ChangePass } from "./pages/changepassword/changePass";
import { NotFound } from "./components/404/404";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/jobs/:id' element={<JobDetail />} />
            <Route path='/dashboard' element={
              <RouteAuth>
                <Dashboard />
              </RouteAuth>
              } />
            <Route path='/dashboard/list-job-vacancy' element={
              <RouteAuth>
                <DashboardJobList />
              </RouteAuth>
              } />
            <Route path='/dashboard/list-job-vacancy/form' element={
              <RouteAuth>
                <JobCreateForm />
              </RouteAuth>
              } />
              <Route path='/dashboard/list-job-vacancy/form/:id' element={
                <RouteAuth>
                  <JobEditForm />
                </RouteAuth>
              } />
              <Route path='/dashboard/profile' element={
                <RouteAuth>
                  <Profile />
                </RouteAuth>
              } />
              <Route path='/dashboard/change-password' element={
                <RouteAuth>
                  <ChangePass />
                </RouteAuth>
              } />
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={
              <LoginRoute>
                <Login />
              </LoginRoute>
              }/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
