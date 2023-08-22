import React, { useEffect, useState } from "react";
import { fetchData } from "../../utils/APIs"; // fetchData 함수 정의 필요
import AttendanceItem from "../../components/AttendanceItem";
import { Attendance } from "../../types";
import "../../styles/Member.css";

const Page = () => {
    const [items, setItems] = useState<Attendance[]>([]);

    useEffect(() => {
        const fetchAttendance = async () => {
            const userId = 1;
            try {
                const atdData = await fetchData(`api/v1/attendances/userID/${userId}`); // 서버 API 경로수정 필요
                setItems(atdData);
                console.log(atdData);
            } catch (error) {
                console.error("Error fetching members:", error);
            }
        };
        fetchAttendance();
    }, []);

    return (
        <div className="member-list">
            <h2>출결 확인</h2>
            <div className="member-container">
                {items.map((item) => (
                    <AttendanceItem key={item.id} attendance={item} />
                ))}
            </div>
        </div>
    );
};

export default Page;
