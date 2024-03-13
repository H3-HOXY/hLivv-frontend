import "./styles/KeywordSelect.scss"
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
  { id: 'keyword-1', label: '# 심플한'},
  { id: 'keyword-2', label: '# 깨끗한'},
  { id: 'keyword-3', label: '# 모던한'},
  { id: 'keyword-4', label: '# 내추럴한'},
  { id: 'keyword-5', label: '# 미니멀'},
  { id: 'keyword-6', label: '# 비비드'},
  { id: 'keyword-7', label: '# 우아한'},
  { id: 'keyword-8', label: '# 고풍적'},
  { id: 'keyword-9', label: '# 동양적'},
  { id: 'keyword-10', label: '# 트렌디'},
];

const Preference = () => {
  const image = useImage()
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);
  const handleKeywordSelection = (jobId: string) => {
    setSelectedKeyword(jobId);
    console.log(`Selected job: ${jobId}`);
  };

  return (
    <div className="PreferenceKeyword">
      <div className="PreferenceKeywordWrapper">
        <div className="PreferenceKeywordTitle">
          <div className="PreferenceKeywordSubTitle">인테리어 취향 테스트</div>
          <div className="PreferenceKeywordMainTitle">선호하는 키워드를 선택해 주세요</div>
        </div>
        <hr className="PreferenceKeywordLine"/>
        <div className="PreferenceKeywordContent">
            <div className="PreferenceKeywordContentLine">
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
                    <div className="block">
                      <div className="w-full text-lg font-semibold">{state.label}</div>
                    </div>
                  </label>
                </div>
              ))}
            </div>
        </div>

        <div className="PreferenceKeywordMove">
          <a href="/preference">
            <button className="PreferenceKeywordPrev" title="이전">이전</button>
          </a>
          <a href="/preference/colorselect">
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