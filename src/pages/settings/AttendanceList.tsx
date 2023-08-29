import React, { useEffect, useState } from "react";
import { fetchData } from "../../utils/APIs";
import AttendanceItem from "../../components/AttendanceItem";
import { Attendance } from "../../types";
import "../../styles/Member.css";
/**
 * @todo 출결 확인 범위에 맞게 api 엔드포인트 수정
 * @todo 관리자가 웹에서 출결 수정하려면 UI 변경 필요
 * 
 */
const Page = () => {
    const [items, setItems] = useState<Attendance[]>([]);
    const user_id = JSON.parse(sessionStorage.getItem("user-info") || "{}").id; //사용자 정보 가져올 때 참조
    useEffect(() => {
        const fetchAttendance = async () => {
            try {
                const atdData = await fetchData(`api/v1/attendances/userID/${user_id}`); // 서버 API 경로수정 필요
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
