import { createContext, useContext, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "sonner";
import axios from "axios";

const CheckInContext = createContext();

async function handleGetIP() {
    const response = await axios.get("https://ifconfig.me/all.json")
    return response.data.ip_addr;
}

export const useCheckIn = () => {
    return useContext(CheckInContext);
}

export const CheckInProvider = ({ children }) => {
    const [isCheckedIn, setIsCheckedIn] = useState(false);
    const [isCheckedOut, setIsCheckedOut] = useState(false);
    const [showEarlyFormPopUp, setShowEarlyFormPopUp] = useState(false);
    const [showEarlyForm, setShowEarlyForm] = useState(false);

    const checkInTimeRef = useRef(null);

    useEffect(() => {
        const resetTime = new Date();
        resetTime.setHours(13, 0, 0, 0);

        const intervalId = setInterval(() => {
            const now = new Date();
            const timeUntilReset = resetTime - now;

            if (timeUntilReset <= 0) {
                setIsCheckedIn(false);
                setIsCheckedOut(false);

                resetTime.setDate(resetTime.getDate() + 1);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);



    function timeToSecond(timeStr) {
        const [hours, minutes, seconds] = timeStr.split(':').map(Number);
        return hours * 3600 + minutes * 60 + seconds;
    }

    function secondsToTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    function handleSetShowEarlyFormPopUp() {
        setShowEarlyFormPopUp((s) => !s);
    }

    function handleSetShowEarlyForm() {
        setShowEarlyForm((s) => !s);
    }

    async function handleSetIsCheckedIn() {
        const userIp = await handleGetIP();

        if (userIp === "222.252.29.85" || userIp === "14.177.225.128") {
            if (!isCheckedIn) {
                checkInTimeRef.current = new Date().toLocaleTimeString();
                console.log("Thời gian bắt đầu phiên", checkInTimeRef.current);
                setIsCheckedIn(true);
                toast.success("Đã bắt đầu phiên!");
            } else {
                toast.error("Đã bắt đầu phiên rồi!");
            }
        } else {
            toast.error("Bạn chưa kết nối với mạng RIPT 2 hoặc RIPT_WIFI_5G")
        }
    }

    async function handleSetIsCheckedOut() {
        if (isCheckedIn) {
            const userIp = await handleGetIP();
            if (userIp === "222.252.29.85" || userIp === "14.177.225.128") {
                const checkOutTime = new Date().toLocaleTimeString();
                const workingTime = secondsToTime(timeToSecond(checkOutTime) - timeToSecond(checkInTimeRef.current));

                if (isCheckedOut === false) {
                    if (workingTime >= "5:00:00") {
                        setIsCheckedOut(true);
                        toast.success("Kết thúc phiên thành công");
                    } else {
                        handleSetShowEarlyFormPopUp();
                    }
                } else {
                    toast.error("Đã kết thúc phiên rồi!");
                }
            } else {
                toast.error("Bạn chưa kết nối với mạng RIPT 2 hoặc RIPT_WIFI_5G")
            }
        } else {
            toast.error("Bạn chưa bắt đầu phiên!");
        }
    }

    return (
        <CheckInContext.Provider value={{ isCheckedIn, isCheckedOut, showEarlyFormPopUp, showEarlyForm, handleSetIsCheckedIn, handleSetShowEarlyFormPopUp, handleSetShowEarlyForm, handleSetIsCheckedOut, setIsCheckedOut }}>
            {children}
        </CheckInContext.Provider>
    )
}

CheckInProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
