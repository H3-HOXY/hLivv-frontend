import "./styles/ProfileEdit.scss"

/**
 * @since 
 * @author 최정윤
 */

const ProfileEdit = () => {
  return (
    <div className="ProfileEdit">
      <div className="ProfileEditWrapper">
        <div className="ProfileEditTitle">프로필관리</div>
        <div className="ProfileEditContent">
          <div className="ProfileEditContentTitle">프로필정보</div>

          <div className="ProfileEditContentId">이메일</div>
          <div className="ProfileEditContentIdEdit">
            <input className="ProfileEditContentIdInput" title="id"></input>
            <button className="ProfileEditContentIdButton" title="button">중복 확인</button>
          </div>
          <div className="ProfileEditContentPassword">현재 비밀번호</div>
          <input className="ProfileEditContentPasswordInput" title="pw"></input>
        </div>
        <button className="ProfileEditBtn" title="editbutton">변경 완료</button>
      </div>
    </div>
  );
}

export default ProfileEdit;