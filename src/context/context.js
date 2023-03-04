import { createContext, useContext, useState } from "react";
import { doctorData, appointmentData } from "../helper/data";

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext)
};

export const AppProvider = ({ children }) => {
    const [doctors, setDoctors] = useState(doctorData);
    const [appointments, setAppointments] = useState(appointmentData);

//! Mock Data yerine API'Den veri cekilseydi
  // const getAppointments = async () => {
  //   try {
  //     const { data } = await axios.get("url")
  //     setAppointments(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getAppointments()
  // }, [])

    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}