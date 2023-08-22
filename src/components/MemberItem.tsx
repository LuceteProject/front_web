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
      <img className="profile-image" src={member.profileImage} alt="profile-image" />
      <div className="member-details">
        <div className="profile-header">
          <h3 className="profile-name">{member.name}</h3>
          <p className="profile-team">{member.team}</p>
        </div>
        <p className="profile-info">번호: {member.phone}</p>
        <p className="profile-info">이메일: {member.email_address}</p>
        <p className="profile-message">"{member.profile_message}"</p>
      </div>
    </div>
  );
};

export default MemberItem;
