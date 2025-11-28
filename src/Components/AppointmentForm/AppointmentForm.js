import React, { useState } from 'react'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmi, userData }) => {
    const [name, setName] = useState(userData?.name || '');
    const [email, setEmail] = useState(userData?.email ||'');
    const [date, setDate] = useState(new Date());
    const [selectedSlot, setSelectedSlot] = useState('');
    
    const today = new Date().toISOString().split('T')[0];
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
 
    const handleFormSubmit = (e) => {
      e.preventDefault();
// Check if selected date is in the past
  const selectedDate = new Date(date);
  const today = new Date();
  
  if (selectedDate < today) {
    alert('Please select a future date');
    return;
  }
      onSubmi({ name, email, date, selectedSlot });
      setName('');
      setEmail('');
      setDate('');
      setSelectedSlot('');

      const doctorData = {
        doctorName: doctorName,
        speciality: doctorSpeciality,
        name: name,
        email: email,
        date: date,
        selectedSlot: selectedSlot

      };
    
      // Store doctorData in localStorage as a JSON string.
      localStorage.setItem('doctorData', JSON.stringify(doctorData));
      localStorage.removeItem('hideAppointmentCard');
    


    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date of Appointment</label>
          <input
            type="date"
            id="date"
            min={today}  
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
        <label htmlFor="selectedSlot">

Book a time slot
</label>
<select    type="dropdown"
            id="selectedSlot"
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
            required>
 <option value="">Select a time</option> 
  <option value="9:00am">9:00am</option>

  <option value="10:00am">10:00am</option>

  <option value="11:00am">11:00am</option>

</select>


</div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm;
