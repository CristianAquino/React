import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { AccountPage } from "../pages/AccountPage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { ProjectPage } from "../pages/ProjectPage";
import { UsersPage } from "../pages/admin/UsersPage";
import { Layout } from "../Layout";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { roles } from "../helpers/roles";
import { Fragment } from "react";
export function AppRouter() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="account"
            element={
              <PrivateRoute>
                <AccountPage />
              </PrivateRoute>
            }
          />
          <Route
            path="projects"
            element={
              <PrivateRoute>
                <ProjectsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="projects/:projectId"
            element={
              <PrivateRoute>
                <ProjectPage />
              </PrivateRoute>
            }
          />
          <Route
            path="admin/users"
            element={
              <PrivateRoute hasRole={roles.admin}>
                <UsersPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Fragment>
  );
}
