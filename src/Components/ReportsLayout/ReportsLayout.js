import React, { useState, useEffect } from 'react';
import './ReportsLayout.css';

const ReportsLayout = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    if (storedDoctorData) {
      setReports([storedDoctorData]);
    }
  }, []);

  const handleViewReport = (report) => {
    // Open report in modal or new page
    alert(`Viewing report for Dr. ${report.doctorName}\nDate: ${report.date}\nSpeciality: ${report.speciality}`);
  };

  const handleDownloadReport = (report) => {
    // Simulate download
    alert(`Downloading report for Dr. ${report.doctorName}`);
    // Actual implementation would generate/download PDF
  };

  return (
    <div className="reports-container">
      <h2>Medical Reports</h2>
      <div className="reports-list">
        {reports.length > 0 ? (
          reports.map((report, index) => (
            <div key={index} className="report-card">
              <div className="report-info">
                <h3>Dr. {report.doctorName}</h3>
                <p><strong>Speciality:</strong> {report.speciality}</p>
                <p><strong>Appointment Date:</strong> {report.date}</p>
                <p><strong>Time:</strong> {report.selectedSlot}</p>
                <p><strong>Patient:</strong> {report.name}</p>
              </div>
              <div className="report-actions">
                <button 
                  className="view-btn"
                  onClick={() => handleViewReport(report)}
                >
                  View Report
                </button>
                <button 
                  className="download-btn"
                  onClick={() => handleDownloadReport(report)}
                >
                  Download Report
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-reports">No medical reports found.</p>
        )}
      </div>
    </div>
  );
};

export default ReportsLayout;