import React, { useState } from 'react'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmi }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState(new Date());
    const [selectedSlot, setSelectedSlot] = useState('');
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
 
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmi({ name, phoneNumber, date, selectedSlot });
      setName('');
      setPhoneNumber('');
      setDate('');
      setSelectedSlot('');

      const doctorData = {
        doctorName: doctorName,
        specialty: doctorSpeciality,
        name: name,
        phoneNumber: phoneNumber,
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
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Date of Appointment</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
        <label htmlFor="selectedSlot">

Book a time slot

<select    type="dropdown"
            id="selectedSlot"
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
            required>

  <option selectedSlot="time1">9:00am</option>

  <option selectedSlot="time2">10:0a0m</option>

  <option selectedSlot="time3">11:00am</option>

</select>

</label>
</div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm;
