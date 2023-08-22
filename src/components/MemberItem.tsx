// components/MemberItem.tsx
import React from "react";
import "../styles/Member.css";
import { Member } from "../types"; // Member 타입 정의 필요


/* 타입 정의 */
type TeamCode = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 10 | 11;
type TeamCodeToNameMap = {
  [key in TeamCode]: string;
};
//team_code 숫자 -> 팀 이름으로 변환
const teamCodeToName: TeamCodeToNameMap = {
  0: "관리자",
  1: "극본",
  2: "기획",
  3: "디자인",
  4: "배우",
  5: "연출",
  6: "음악",
  10: "전체",
  11: "개인",
};

interface MemberItemProps {
  member: Member;
}

const MemberItem = ({ member }: MemberItemProps) => {
  const teamCode: TeamCode = member.team_code as unknown as TeamCode;
  const teamName = teamCodeToName[teamCode];
  //console.log(member.team_code);

  return (
    <div className="member-item">
      <img className="profile-image" src={member.profileImage} alt="profile-image" />
      <div className="member-details">
        <div className="profile-header">
          <h3 className="profile-name">{member.name}</h3>
          <p className="profile-team">{teamName}</p>
        </div>
        <p className="profile-info">번호: {member.phone}</p>
        <p className="profile-info">이메일: {member.email_address}</p>
        <p className="profile-message">"{member.profile_message}"</p>
      </div>
    </div>
  );
};

export default MemberItem;
