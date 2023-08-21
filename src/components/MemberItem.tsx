// components/MemberItem.tsx
import React from "react";
import "../styles/Member.css";
import { Member } from "../types"; // Member 타입 정의 필요

interface MemberItemProps {
  member: Member;
}

const MemberItem = ({ member }: MemberItemProps) => {
  return (
    <div className="member-item">
      <div className="profile-view">
        <img className="profile-image" src={member.profileImage} alt="profile-image" />
        <div className="profile-details">
          <p className="profile-name">{member.name} : {member.semester} 기 {member.team} 팀</p>

          <p className="profile-info">
            {member.phone} / 이메일
          </p>
          <p className="message-text">" {member.profile_message} "</p>
        </div>
      </div>
    </div>
  );
};

export default MemberItem;
