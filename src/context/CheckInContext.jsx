import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "sonner";
import axios from "axios";

const CheckInContext = createContext();

async function handleGetIP() {
    const response = await axios.get("https://ifconfig.me/all.json")
    const ip = response.data.ip_addr;
    return ip;
}

export const useCheckIn = () => {
    return useContext(CheckInContext);
}

export const CheckInProvider = ({ children }) => {
    const [isCheckedIn, setIsCheckedIn] = useState(false);

    async function handleSetIsCheckedIn() {
        const userIp = await handleGetIP();
        console.log("Ip hien tai: ", userIp);    

        if (userIp === "222.252.29.85" || userIp === "14.177.225.128") {
            if (isCheckedIn === false) {
                setIsCheckedIn(true);
                toast.success("Điểm danh thành công!");
            } else {
                toast.error("Bạn đã điểm danh rồi!");
            }
        } else {
            toast.error("Bạn chưa kết nối với mạng RIPT 2 hoặc RIPT_WIFI_5G")
        }
    }

    return (
        <CheckInContext.Provider value={{ isCheckedIn, handleSetIsCheckedIn }}>
            {children}
        </CheckInContext.Provider>
    )
}

CheckInProvider.propTypes = {
    children: PropTypes.node.isRequired,
}