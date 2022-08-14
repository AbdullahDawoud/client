import React from 'react';
import { Router } from '@reach/router';
import Book from '../components/book';
import { Link } from 'gatsby';

type Props = {
  id?: string;
  path: string;
};

const Page404 = (props: Props) => {
  return (
    <div style={noutFoundDivStyles}>
      <img
        style={{ width: '200px' }}
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBkPSJtNTA0LjkgNDk4LjY5Yy0xLjkxMDItMS44NzUtNC4zMDA4LTMuMTk5Mi02LjkwNjItMy44MjQyLTIuNjA1NS0wLjYyNS01LjMzNTktMC41MzEyNS03Ljg5MDYgMC4yNzM0NGwtMjguMTE3LTI4LjI2NmgtMC4wMDM5MDZjMjkuMzM2LTMzLjAxNiAzOS4yNTgtNzguOTczIDI2LjE2LTEyMS4xNS0xMy4wOTgtNDIuMTc2LTQ3LjMwOS03NC40MjYtOTAuMTg0LTg1LjAxNi00Mi44NzUtMTAuNTktODguMTY0IDIuMDIzNC0xMTkuMzkgMzMuMjUtMzEuMjI3IDMxLjIzLTQzLjg0IDc2LjUyLTMzLjI1IDExOS40IDEwLjU5IDQyLjg3NSA0Mi44NCA3Ny4wODIgODUuMDE2IDkwLjE4czg4LjEzMyAzLjE3NTggMTIxLjE0LTI2LjE1NmwyOC4yNjYgMjguMjY2aDAuMDAzOTA2Yy0xLjM1MTYgNC45ODQ0LTAuMDAzOTA2IDEwLjMxMiAzLjU1MDggMTQuMDU5bDMyLjU1OSAzMi40MWMyLjc1NzggMi43MzQ0IDYuNDc2NiA0LjI3NzMgMTAuMzU5IDQuMjkzIDMuOTMzNiAwLjAyMzQzOCA3LjcxNDgtMS41MjM0IDEwLjUwOC00LjI5MyAyLjc1NzgtMi43NzM0IDQuMzA0Ny02LjUyMzQgNC4zMDQ3LTEwLjQzNCAwLTMuOTEwMi0xLjU0NjktNy42NjAyLTQuMzA0Ny0xMC40MzR6bS0yMTQuNzQtMzYuODQ4Yy0yMC44MzItMjAuODA5LTMyLjU0Ny00OS4wNDMtMzIuNTU5LTc4LjQ5Mi0wLjAxMTcxOS0yOS40NDUgMTEuNjc2LTU3LjY4OCAzMi40OTYtNzguNTEyIDIwLjgxNi0yMC44MjggNDkuMDU1LTMyLjUyNyA3OC41LTMyLjUyNyAyOS40NDUgMCA1Ny42ODQgMTEuNjk5IDc4LjUwNCAzMi41MjcgMjAuODE2IDIwLjgyNCAzMi41MDQgNDkuMDY2IDMyLjQ5MiA3OC41MTItMC4wMTE3MTggMjkuNDQ5LTExLjcyNyA1Ny42ODQtMzIuNTU5IDc4LjQ5Mi0yMC43OTMgMjAuODItNDkuMDEyIDMyLjUyLTc4LjQzOCAzMi41Mi0yOS40MjYgMC01Ny42NDUtMTEuNjk5LTc4LjQzOC0zMi41MnoiLz4KICA8cGF0aCBkPSJtMzExLjYyIDM4MS4xOGMxLjM0MzggMS40MzM2IDMuMjE0OCAyLjI0MjIgNS4xNzk3IDIuMjQyMiAxLjk2MDkgMCAzLjgzNTktMC44MDg1OSA1LjE3OTctMi4yNDIybDkuNjIxMS05LjQ3MjcgOS42MjExIDkuNDcyN2gtMC4wMDM5MDZjMS4zNDM4IDEuNDMzNiAzLjIxODggMi4yNDIyIDUuMTc5NyAyLjI0MjIgMS45NjA5IDAgMy44MzU5LTAuODA4NTkgNS4xNzk3LTIuMjQyMiAxLjQyOTctMS4zMzk4IDIuMjQyMi0zLjIxNDggMi4yNDIyLTUuMTc5NyAwLTEuOTYwOS0wLjgxMjUtMy44MzU5LTIuMjQyMi01LjE3OTdsLTkuNDcyNy05LjYxNzIgOS40NzI3LTkuNjIxMWMyLjg1OTQtMi44NTk0IDIuODU5NC03LjUgMC0xMC4zNTlzLTcuNS0yLjg1OTQtMTAuMzU5IDBsLTkuNjIxMSA5LjQ3MjctOS42MjExLTkuNDcyN2gwLjAwMzkwNmMtMi44NjMzLTIuODU5NC03LjUtMi44NTk0LTEwLjM1OSAwLTIuODYzMyAyLjg1OTQtMi44NjMzIDcuNSAwIDEwLjM1OWw5LjQ3MjcgOS42MjExLTkuNDcyNyA5LjYyMTF2LTAuMDAzOTA3Yy0xLjQzMzYgMS4zNDM4LTIuMjQyMiAzLjIxODgtMi4yNDIyIDUuMTc5NyAwIDEuOTY0OCAwLjgwODU5IDMuODM5OCAyLjI0MjIgNS4xNzk3eiIvPgogIDxwYXRoIGQ9Im0zODUuNjIgMzgxLjE4YzEuMzQzOCAxLjQzMzYgMy4yMTg4IDIuMjQyMiA1LjE3OTcgMi4yNDIyIDEuOTYwOSAwIDMuODM1OS0wLjgwODU5IDUuMTc5Ny0yLjI0MjJsOS42MjExLTkuNDcyNyA5LjYyMTEgOS40NzI3aC0wLjAwMzkwNmMxLjM0MzggMS40MzM2IDMuMjE4OCAyLjI0MjIgNS4xNzk3IDIuMjQyMiAxLjk2NDggMCAzLjgzOTgtMC44MDg1OSA1LjE3OTctMi4yNDIyIDEuNDMzNi0xLjMzOTggMi4yNDIyLTMuMjE0OCAyLjI0MjItNS4xNzk3IDAtMS45NjA5LTAuODA4NTktMy44MzU5LTIuMjQyMi01LjE3OTdsLTkuNDY4OC05LjYxNzIgOS40NzI3LTkuNjIxMWgtMC4wMDM5MDZjMi44NjMzLTIuODU5NCAyLjg2MzMtNy41IDAtMTAuMzU5LTIuODU5NC0yLjg1OTQtNy40OTYxLTIuODU5NC0xMC4zNTkgMGwtOS42MjExIDkuNDcyNy05LjYyMTEtOS40NzI3aDAuMDAzOTA3Yy0yLjg1OTQtMi44NTk0LTcuNS0yLjg1OTQtMTAuMzU5IDBzLTIuODU5NCA3LjUgMCAxMC4zNTlsOS40NzI3IDkuNjIxMS05LjQ3MjcgOS42MjExdi0wLjAwMzkwN2MtMS40Mjk3IDEuMzQzOC0yLjI0MjIgMy4yMTg4LTIuMjQyMiA1LjE3OTcgMCAxLjk2NDggMC44MTI1IDMuODM5OCAyLjI0MjIgNS4xNzk3eiIvPgogIDxwYXRoIGQ9Im00MjcuOCA0MDUuNmgtMTE4LjRjLTQuMDg1OSAwLTcuMzk4NCAzLjMxMjUtNy4zOTg0IDcuMzk4NHMzLjMxMjUgNy4zOTg0IDcuMzk4NCA3LjM5ODRoMjIuMTk5djIyLjE5OWMwIDcuOTMzNiA0LjIzNDQgMTUuMjYyIDExLjEwMiAxOS4yMjcgNi44NjcyIDMuOTY0OCAxNS4zMzIgMy45NjQ4IDIyLjE5OSAwIDYuODY3Mi0zLjk2NDggMTEuMDk4LTExLjI5MyAxMS4wOTgtMTkuMjI3di0yMi4xOTloNTEuODAxYzQuMDg1OSAwIDcuMzk4NC0zLjMxMjUgNy4zOTg0LTcuMzk4NHMtMy4zMTI1LTcuMzk4NC03LjM5ODQtNy4zOTg0em0tNjYuNTk4IDM2Ljk5NmMwIDQuMDg1OS0zLjMxMjUgNy40MDIzLTcuNDAyMyA3LjQwMjMtNC4wODU5IDAtNy4zOTg0LTMuMzE2NC03LjM5ODQtNy40MDIzdi0yMi4xOTloMTQuODAxeiIvPgogIDxwYXRoIGQ9Im01MTYuNiAyMTMuMjFjLTkuODE2NCAwLTE5LjIyNyAzLjg5ODQtMjYuMTY0IDEwLjgzNi02LjkzNzUgNi45NDE0LTEwLjgzNiAxNi4zNTItMTAuODM2IDI2LjE2NHMzLjg5ODQgMTkuMjIzIDEwLjgzNiAyNi4xNmM2LjkzNzUgNi45NDE0IDE2LjM0OCAxMC44MzYgMjYuMTY0IDEwLjgzNiA5LjgxMjUgMCAxOS4yMjMtMy44OTQ1IDI2LjE2LTEwLjgzNiA2LjkzNzUtNi45Mzc1IDEwLjgzNi0xNi4zNDggMTAuODM2LTI2LjE2cy0zLjg5ODQtMTkuMjIzLTEwLjgzNi0yNi4xNjRjLTYuOTM3NS02LjkzNzUtMTYuMzQ4LTEwLjgzNi0yNi4xNi0xMC44MzZ6bTAgNTkuMTk5Yy01Ljg5MDYgMC0xMS41MzUtMi4zMzk4LTE1LjY5OS02LjUwMzktNC4xNjQxLTQuMTYwMi02LjUtOS44MDg2LTYuNS0xNS42OTVzMi4zMzU5LTExLjUzNSA2LjUtMTUuNjk5YzQuMTY0MS00LjE2MDIgOS44MDg2LTYuNSAxNS42OTktNi41IDUuODg2NyAwIDExLjUzMSAyLjMzOTggMTUuNjk1IDYuNSA0LjE2NDEgNC4xNjQxIDYuNSA5LjgxMjUgNi41IDE1LjY5OXMtMi4zMzU5IDExLjUzNS02LjUgMTUuNjk1Yy00LjE2NDEgNC4xNjQxLTkuODA4NiA2LjUwMzktMTUuNjk1IDYuNTAzOXoiLz4KICA8cGF0aCBkPSJtMjcyLjQxIDIyOC4wMWMwLTcuODUxNi0zLjExNzItMTUuMzc5LTguNjcxOS0yMC45My01LjU1MDgtNS41NTA4LTEzLjA3OC04LjY2OC0yMC45MjYtOC42NjgtNy44NTE2IDAtMTUuMzc5IDMuMTE3Mi0yMC45MyA4LjY2OC01LjU1MDggNS41NTA4LTguNjcxOSAxMy4wNzgtOC42NzE5IDIwLjkzIDAgNy44NTE2IDMuMTIxMSAxNS4zNzkgOC42NzE5IDIwLjkzIDUuNTUwOCA1LjU1MDggMTMuMDc4IDguNjY4IDIwLjkzIDguNjY4IDcuODQ3NyAwIDE1LjM3NS0zLjExNzIgMjAuOTI2LTguNjY4IDUuNTU0Ny01LjU1MDggOC42NzE5LTEzLjA3OCA4LjY3MTktMjAuOTN6bS00NC4zOTggMGMwLTMuOTI1OCAxLjU1ODYtNy42OTE0IDQuMzM1OS0xMC40NjUgMi43NzM0LTIuNzc3MyA2LjUzOTEtNC4zMzU5IDEwLjQ2NS00LjMzNTkgMy45MjE5IDAgNy42ODc1IDEuNTU4NiAxMC40NjUgNC4zMzU5IDIuNzczNCAyLjc3MzQgNC4zMzIgNi41MzkxIDQuMzMyIDEwLjQ2NSAwIDMuOTI1OC0xLjU1ODYgNy42ODc1LTQuMzMyIDEwLjQ2NS0yLjc3NzMgMi43NzM0LTYuNTQzIDQuMzM1OS0xMC40NjUgNC4zMzU5LTMuOTI1OCAwLTcuNjkxNC0xLjU2MjUtMTAuNDY1LTQuMzM1OS0yLjc3NzMtMi43NzczLTQuMzM1OS02LjUzOTEtNC4zMzU5LTEwLjQ2NXoiLz4KICA8cGF0aCBkPSJtMjY1LjAxIDUyNGgtNy40MDIzdi03LjM5ODRjMC00LjA4OTgtMy4zMTI1LTcuNDAyMy03LjM5ODQtNy40MDIzLTQuMDg1OSAwLTcuMzk4NCAzLjMxMjUtNy4zOTg0IDcuNDAyM3Y3LjM5ODRoLTcuNDAyM2MtNC4wODU5IDAtNy4zOTg0IDMuMzEyNS03LjM5ODQgNy4zOTg0IDAgNC4wODU5IDMuMzEyNSA3LjM5ODQgNy4zOTg0IDcuMzk4NGg3LjQwMjN2Ny40MDIzYzAgNC4wODU5IDMuMzEyNSA3LjM5ODQgNy4zOTg0IDcuMzk4NCA0LjA4NTkgMCA3LjM5ODQtMy4zMTI1IDcuMzk4NC03LjM5ODR2LTcuNDAyM2g3LjQwMjNjNC4wODU5IDAgNy4zOTg0LTMuMzEyNSA3LjM5ODQtNy4zOTg0IDAtNC4wODU5LTMuMzEyNS03LjM5ODQtNy4zOTg0LTcuMzk4NHoiLz4KIDwvZz4KPC9zdmc+Cg=="
        alt=""
      />
      <div>Page Not Found</div>
    </div>
  );
};
const noutFoundDivStyles = { display: 'flex', alignItems: 'center', flexDirection: 'column' };

const App = () => {
  return (
    <>
      <button
        className="btn"
        style={{ marginBottom: '10px', display: 'block' }}
        onClick={() => window.history.back()}>
        &#60; Go Back
      </button>
      <Router basepath="/">
        <Page404 path="book" />
        <Book path="book/:id" />
        <Page404 path="*" />
      </Router>
    </>
  );
};
export default App;
