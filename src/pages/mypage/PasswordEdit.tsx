import "./styles/PasswordEdit.scss"

/**
 * @since 
 * @author 최정윤
 */

const PasswordEdit = () => {
  return (
    <div className="PasswordEdit">
      <div className="PasswordEditWrapper">
        <div className="PasswordEditTitle">비밀번호 수정</div>
        <div className="PasswordEditContent">
          <div className="PasswordEditContentItem">
            <div className="PasswordEditContentItemTitle">현재 비밀번호</div>
            <input className="PasswordEditContentItemInput" title="password"></input>
          </div>
          <div className="PasswordEditContentItem">
            <div className="PasswordEditContentItemTitle">새 비밀번호</div>
            <input className="PasswordEditContentItemInput" title="newpassword"></input>
          </div>
          <div className="PasswordEditContentItem">
            <div className="PasswordEditContentItemTitle">새 비밀번호 확인</div>
            <input className="PasswordEditContentItemInput" title="passwordfconfirm"></input>
          </div>
        </div>
        <div className="PasswordEditBtn">변경 완료</div>
      </div>
    </div>
  );
}

export default PasswordEdit;