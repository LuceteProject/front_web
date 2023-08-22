const initialState = {
    user: null, // 초기 상태를 정의
};

const userReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case "SET_USER":
            return { ...state, user: action.payload }; // 유저 정보 설정 액션
        default:
            return state;
    }
};

export default userReducer;
