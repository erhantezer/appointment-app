import { useState } from "react";

const useSelectDrName = () => {
    const [selectedDrName, setSelectedDrName] = useState("");

    return { selectedDrName, setSelectedDrName }
}

export default useSelectDrName