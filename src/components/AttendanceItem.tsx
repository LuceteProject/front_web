import "../styles/Member.css";
import { Attendance } from "../types"; // Member 타입 정의 필요

interface AttendanceItemProps {
    attendance: Attendance;
}

const AttendanceItem = ({ attendance }: AttendanceItemProps) => {
    let converted_date = attendance.date.substring(0, 10);
    return (
        <div className="member-item">
            <div className="member-details">
                <div className="profile-header">
                    <h3 className="profile-name">{converted_date}</h3>
                </div>
                <p className="profile-info">출결 점수 : {attendance.point}</p>
                <p className="profile-info">출결 ID : {attendance.user_id}</p>
            </div>
        </div>
    );
};

export default AttendanceItem;
