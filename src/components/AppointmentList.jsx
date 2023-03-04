import React from 'react'
import { useGlobalContext } from '../context/context'
import { Container } from 'react-bootstrap';

const AppointmentList = () => {
    const { appointments, setAppointments } = useGlobalContext();

    return (
        <Container className='p-2'>
            <h3 className='display-6 mb-2' style={{ color: "rgb(166,18,189)" }}>
                Appointment List
            </h3>
            <div className='d-flex flex-column align-items-center'>
                {!appointments.length && (<img src="./img/appointment.jpg" width="80%" alt="" />)} 
                {appointments?.map((item) =>{
                    const { id, patient, consulted, doctor, day } = item;
                    return (
                            <div
                            key={id}
                            className={consulted ? "appointments consulted" : "appointments "}
                            >

                            </div>
                        )
                })}
            </div>
        </Container>
    )
}

export default AppointmentList