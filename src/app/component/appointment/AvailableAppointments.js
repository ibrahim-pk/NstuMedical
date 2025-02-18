import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const [slot1, setSlot1] = useState(false);
    const [slot2, setSlot2] = useState(false);
    const [slot3, setSlot3] = useState(false);
    const [slot4, setSlot4] = useState(false);
    const [slot5, setSlot5] = useState(false);
    const date = format(selectedDate, 'PP');

    const slots = [
        { value: 1, time: "10:00AM-11:00AM" },
        { value: 2, time: "11:00AM-12:00PM" },
        { value: 3, time: "12:00PM-1:00PM" },
        { value: 4, time: "2:00PM-3:00PM" },
        { value: 5, time: "3:00PM-4:00PM" }
    ];

    useEffect(() => {
        const fetchAvailability = async (slot, setter) => {
            try {
                const res = await fetch(`http://localhost:5000/api/v1/appointment/available-appointment/slot${slot}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ date, value: slot, time: slots[slot - 1].time })
                });
                const data = await res.json();
                setter(data?.booked || false);
                //console.log(data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchAvailability(1, setSlot1);
        fetchAvailability(2, setSlot2);
        fetchAvailability(3, setSlot3);
        fetchAvailability(4, setSlot4);
        fetchAvailability(5, setSlot5);
    }, [date]);

    const appointmentOptions = slots.map((slot, index) => ({
        title: 'Counseling Psychology',
        time: slot.time,
        value: slot.value,
        slot: [slot1, slot2, slot3, slot4, slot5][index]
    }));

    return (
        <section className='mx-auto max-w-screen-lg my-8 p-4'>
            <h4 className='text-xl font-semibold text-center text-primary'>Available Appointments on {date}</h4>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6'>
                {appointmentOptions.map((option) => (
                    <AppointmentOption
                        key={option.value}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                        date={date}
                    />
                ))}
            </div>
        </section>
    );
};

export default AvailableAppointments;
