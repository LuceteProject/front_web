// pages/MemberListPage.tsx
import React, { useEffect, useState } from "react";
import { fetchData } from "../../utils/APIs"; // fetchData 함수 정의 필요
import MemberItem from "../../components/MemberItem";
import { Member } from "../../types";
import "../../styles/Member.css";

const Page = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const memberData = await fetchData("api/v1/users"); // 서버 API 경로수정 필요
        setMembers(memberData);
        console.log(memberData);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };
    fetchMembers();
  }, []);

  return (
    <div className="member-list">
      <h2>부원 목록</h2>
      <div className="member-container">
        {members.map((member) => (
          <MemberItem key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Page;
