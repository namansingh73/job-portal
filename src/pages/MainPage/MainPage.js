import React, { useState } from "react";
import Jobs from "../Jobs/Jobs";
import AppliedJobs from "../AppliedJobs/AppliedJobs";
import { Routes, Route } from "react-router-dom";

const MainPage = () => {
  const [jobs, setJobs] = useState([
    {
      id: "1",
      companyName: "Aviate",
      companyMoto: "Customer ka chutiya bnao, paise kamao",
      companySize: "1 - 10 Employees",
      postedDate: "1 Month",
      role: "Associate Engineer",
      location: "Remote",
      salary: "$69.69 - $169.69",
      saved: false,
      applied: false,
      appliedDate: "Yesterday",
      status: "Pending",
    },
    {
      id: "2",
      companyName: "Aviate",
      companyMoto: "Customer ka chutiya bnao, paise kamao",
      companySize: "1 - 10 Employees",
      postedDate: "1 Month",
      role: "Software Developer Engineer",
      location: "Remote",
      salary: "$69.69 - $269.69",
      saved: false,
      applied: false,
      appliedDate: "Yesterday",
      status: "Accepted",
    },
    {
      id: "3",
      companyName: "Aviate",
      companyMoto: "Customer ka chutiya bnao, paise kamao",
      companySize: "1 - 10 Employees",
      postedDate: "1 Month",
      role: "Associate Engineer",
      location: "Remote",
      salary: "$69.69 - $169.69",
      saved: false,
      applied: false,
      appliedDate: "Yesterday",
      status: "Pending",
    },
  ]);

  const toggleSaveHandler = (id) => {
    const idx = jobs.findIndex((job) => job.id === id);
    const newJobs = [...jobs];
    newJobs[idx] = { ...newJobs[idx] };
    newJobs[idx].saved = !newJobs[idx].saved;

    setJobs(newJobs);
  };

  const applyHandler = (id) => {
    const idx = jobs.findIndex((job) => job.id === id);
    const newJobs = [...jobs];
    newJobs[idx] = { ...newJobs[idx] };
    newJobs[idx].applied = true;
    setJobs(newJobs);
  };

  return (
    <>
      <Routes>
        <Route
          path="/jobs"
          element={
            <Jobs
              jobs={jobs}
              toggleSaveHandler={toggleSaveHandler}
              applyHandler={applyHandler}
            />
          }
          exact
        />
        <Route path="/applied" element={<AppliedJobs jobs={jobs} />} exact />
      </Routes>
    </>
  );
};

export default MainPage;
