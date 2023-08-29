// pages/MemberListPage.tsx
import React, { useEffect, useState } from "react";
import { fetchData } from "../../utils/APIs";
import MemberItem from "../../components/MemberItem";
import { Member } from "../../types";
import "../../styles/Member.css";
/**
 * @todo 권한에 따라 유저정보 다르게 불러올거면 API 엔드포인트 수정
 * 
 */
const Page = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const user_id = JSON.parse(sessionStorage.getItem("user-info") || "{}").id; //사용자 정보 가져올 때 참조

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
