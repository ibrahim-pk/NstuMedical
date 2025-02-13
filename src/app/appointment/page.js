"use client"

import React, { useState } from 'react';
import AppointmentBanner from '../component/appointment/AppointmentBanner';
import AvailableAppointments from '../component/appointment/AvailableAppointments';



const Appointments = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <>
            <div className='mx-2'>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointments
                selectedDate={selectedDate}
            ></AvailableAppointments>
            </div>
        </>
    );
};
export default Appointments;