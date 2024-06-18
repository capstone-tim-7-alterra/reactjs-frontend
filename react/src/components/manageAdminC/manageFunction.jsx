import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import manageAdmin from "./manageAdmin";
import AddAdmin from "./AddAdmin";

export default function AdminManagement() {
  const [admins, setAdmins] = useState([]);

  const fetchAdmins = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBhMjI0ZThhLTg1NTQtNGNhOC1hNjJkLThiZTEyOWQxNDVmYSIsInJvbGUiOiJzdXBlcl9hZG1pbiIsImV4cCI6MTcyMTE2ODcxNn0.ZiZSCYYhQiccWPlMdx9eFpgeKqdnZvb1p6YtcH2KtpU";
    try {
      const response = await axios.get(
        "https://kreasinusantara.shop/api/v1/admin",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAdmins(response.data.data);
    } catch (error) {
      console.error("Error fetching admins:", error);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  return (
    <Routes>
      <Route
        path="/dashboard/manage-admin"
        element={<manageAdmin admins={admins} />}
      />
      <Route
        path="/dashboard/manage-admin/add"
        element={<AddAdmin fetchAdmins={fetchAdmins} />}
      />
    </Routes>
  );
}
