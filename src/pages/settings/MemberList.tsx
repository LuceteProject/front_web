// pages/MemberListPage.tsx
import React, { useEffect, useState } from "react";
import { fetchData } from "../../utils/APIs"; // fetchData 함수 정의 필요
import MemberItem from "../../components/MemberItem";
import { Member } from "../../types";
import "../../styles/Member.css";
// 더미 데이터 예시
const dummyMembers = [
  {
    id: 1,
    name: "John",
    semester: 10,
    team: "A-Team",
    phone: "123-456-7890",
    profile_message: "안녕하세요!",
  },
  {
    id: 2,
    name: "Jane",
    semester: 11,
    team: "B-Team",
    phone: "987-654-3210",
    profile_message: "만나서 반가워요!",
  },
  // 추가 더미 데이터
];

const Page = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const memberData = await fetchData("api/v1/members"); // 서버 API 경로수정 필요
        setMembers(memberData);
        console.log(memberData);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };
    //fetchMembers();
  }, []);

  return (
    <div className="member-list">
      <h2>부원 목록</h2>
      <div className="member-container">
        {members.map((member) => (
          <MemberItem key={member.id} member={member} />
        ))}
        {dummyMembers.map((member) => (
          <MemberItem key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Page;
