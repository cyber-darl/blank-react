import React, { useState, useEffect } from 'react';
import './ReportsLayout.css';

const ReportsLayout = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    console.log('Stored data:', storedDoctorData); // Debugging
    
    if (storedDoctorData && storedDoctorData.doctorName) {
      setReports([storedDoctorData]);
    }
  }, []);

  const handleViewReport = (report) => {
    // Will open PDF in new tab
    window.open('/reports.pdf', '_blank');
  };

  const handleDownloadReport = (report) => {
    // Will download PDF
    const link = document.createElement('a');
    link.href = '/reports.pdf';
    link.download = `medical-report-${report.doctorName}.pdf`;
    link.click();
  };

  return (
    <div className="reports-container">
      <h2>Medical Reports</h2>
      <div className="reports-list">
        {reports.length > 0 ? (
          reports.map((report, index) => (
            <div key={index} className="report-card">
              <div className="report-info">
                <h3>{report.doctorName}</h3>
                <p><strong>Speciality:</strong> {report.speciality}</p>
                <p><strong>Appointment Date:</strong> {report.date}</p>
                <p><strong>Time:</strong> {report.selectedSlot}</p>
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
          <div className="no-reports">
            <h3>Oops, no booked appointment</h3>
            <p>You haven't booked any appointments yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportsLayout;