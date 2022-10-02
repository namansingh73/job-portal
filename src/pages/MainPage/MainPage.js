import React, { useState } from "react";
import Jobs from "../Jobs/Jobs";
import AppliedJobs from "../AppliedJobs/AppliedJobs";
import { Routes, Route } from "react-router-dom";

const MainPage = () => {
  const [jobs, setJobs] = useState([
    {
      id: "1",
      companyName: "Aviate",
      companyMoto:
        "Aviate is job-discovery and preparation platform for Job-seekers",
      companySize: "1 - 10 Employees",
      postedDate: "1 Month",
      role: "Front-end Engineer",
      location: "Remote",
      salary: "₹30,000 - ₹60,000",
      saved: false,
      applied: false,
      appliedDate: "Today",
      status: "Pending",
    },
    {
      id: "2",
      companyName: "Halo",
      companyMoto: "Move science forward",
      companySize: "11 - 50 Employees",
      postedDate: "1 Week",
      role: "Senior Software Engineer",
      location: "Remote",
      salary: "$120k – $160k • 0.125% – 1.0%",
      saved: false,
      applied: false,
      appliedDate: "Yesterday",
      status: "Accepted",
    },
    {
      id: "3",
      companyName: "Payhip",
      companyMoto: "Payhip is an ecommerce platform for creators",
      companySize: "1 - 10 Employees",
      postedDate: "Yesterday",
      role: "Affiliate Marketing/Partner Manager",
      location: "Remote",
      salary: "$45k – $65k • 0.0% – 1.0%",
      saved: false,
      applied: false,
      appliedDate: "1 Week",
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
