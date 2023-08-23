import React, { createContext, useContext, useState, ReactNode } from 'react';

// 유저 정보 타입 정의
type UserInfo = {
  id: number;
  name: string;
  email: string;
  // ... (다른 필드들)
};

// Context 타입 정의
type AuthContextType = {
  userToken: string | null;
  userInfo: UserInfo | null;
  setUserToken: (token: string | null) => void;
  setUserInfo: (info: UserInfo | null) => void;
};

// Context 생성
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider 컴포넌트 생성
type AuthProviderProps = {
  children: ReactNode;
};
export function AuthProvider({ children }: AuthProviderProps) {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  return (
    <AuthContext.Provider value={{ userToken, userInfo, setUserToken, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom Hook 생성
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
