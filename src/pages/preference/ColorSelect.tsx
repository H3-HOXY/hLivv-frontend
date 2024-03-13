import "./styles/ColorSelect.scss"
import { useImage } from "../common/hooks/useImage";
import React, { useState } from 'react';

/**
 * @since 
 * @author 최정윤
 */

interface Keyword {
  id: string;
  label: string;
}

const keywordList: Keyword[] = [
  { id: 'keyword-1', label: '블랙'},
  { id: 'keyword-2', label: '화이트'},
  { id: 'keyword-3', label: '그레이'},
  { id: 'keyword-4', label: '베이지'},
  { id: 'keyword-5', label: '오크'},
  { id: 'keyword-6', label: '월넛'},
  { id: 'keyword-7', label: '레드'},
  { id: 'keyword-8', label: '핑크'},
  { id: 'keyword-9', label: '옐로우'},
  { id: 'keyword-10', label: '그린'},
  { id: 'keyword-11', label: '민트'},
  { id: 'keyword-12', label: '블루'},
  { id: 'keyword-13', label: '네이비'},
];

const Preference = () => {
  const image = useImage()
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);
  const handleKeywordSelection = (jobId: string) => {
    setSelectedKeyword(jobId);
    console.log(`Selected job: ${jobId}`);
  };

  return (
    <div className="ColorSelect">
      <div className="ColorSelectWrapper">
        <div className="ColorSelectTitle">
          <div className="ColorSelectSubTitle">인테리어 취향 테스트</div>
          <div className="ColorSelectMainTitle">선호하는 컬러를 선택해 주세요</div>
        </div>
        <hr className="ColorSelectLine"/>
        <div className="ColorSelectContent">
          <div className="ColorSelectContentLine">
            {keywordList.map((state) => (
              <div key={state.id}>
                <input
                  type="radio"
                  id={state.id}
                  name="job"
                  className="hidden peer"
                  onChange={() => handleKeywordSelection(state.id)}
                  required
                />
                <label
                  htmlFor={state.id}
                  className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
                >
                  <img className="ColorSelectImg" src={image(`${state.label}.png`)} title="pic"></img>
                  <div className="block">
                    <div className="w-full text-lg font-semibold">{state.label}</div>
                  </div>
                </label>
              </div>
            ))}
          </div>

          {/* <div className="ColorSelectContentLine">
            <img className="ColorSelectImg" src={image("블랙.png")} title="pic"></img>
            <img className="ColorSelectImg" src={image("화이트.png")} title="pic"></img>
            <img className="ColorSelectImg" src={image("그레이.png")} title="pic"></img>
            <img className="ColorSelectImg" src={image("베이지.png")} title="pic"></img>
          </div>
          <div className="ColorSelectContentLine">
            <img className="ColorSelectImg" src={image("오크.png")} title="pic"></img>
            <img className="ColorSelectImg" src={image("월넛.png")} title="pic"></img>
            <img className="ColorSelectImg" src={image("레드.png")} title="pic"></img>
            <img className="ColorSelectImg" src={image("핑크.png")} title="pic"></img>
          </div>
          <div className="ColorSelectContentLine">
            <img className="ColorSelectImg" src={image("옐로우.png")} title="pic"></img>
            <img className="ColorSelectImg" src={image("그린.png")} title="pic"></img>
            <img className="ColorSelectImg" src={image("민트.png")} title="pic"></img>
            <img className="ColorSelectImg" src={image("블루.png")} title="pic"></img>
          </div>
          <div className="ColorSelectContentLine">
            <img className="ColorSelectImg" src={image("네이비.png")} title="pic"></img>
          </div> */}
        </div>
        <div className="ColorSelectMove">
          <a href="/preference/keywordselect">
            <button className="ColorSelectPrevBtn" title="이전">이전</button>
          </a>
          <a href="/preference/preferencetest">
            <button
              className={`PreferenceKeywordNext bg-gray-100 text-gray-500 ${selectedKeyword ? 'bg-white border border-black text-black' : 'dark:bg-gray-600 dark:text-white'}`}
              title="다음"
            >다음</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Preference;