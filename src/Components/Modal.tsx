import React, { useState } from 'react';
import ModalBase from './ModalBase';
import CardModal from './CardModal';

const Modal = () => {
  const [isActive, setIsActive] = useState(false);

  const onClickModalOn = () => {
    setIsActive(true);
  };

  const onClickModalOff = () => {
    setIsActive(false);
  };

  const onClickCardRemove = () => {
    alert('이벤트 실행');
  };

  return (
    <>
      <div>
        <h1>모달창 띄우기</h1>
        <button onClick={onClickModalOn}>모달창 띄우기 버튼</button>
        <ModalBase active={isActive} closeEvent={onClickModalOff}>
          <CardModal closeEvent={onClickModalOff} title="임시 초대장 삭제" actionMsg="삭제" actionEvent={onClickCardRemove}>
            임시 초대장을 삭제 하시겠습니까?
            <br />
            삭제한 초대장은 복구 할 수 없습니다.
          </CardModal>
        </ModalBase>
      </div>
    </>
  );
};

export default Modal;