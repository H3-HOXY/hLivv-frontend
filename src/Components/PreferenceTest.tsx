import "../Components_scss/PreferenceTest.scss"
import { useImage } from "../pages/common/hooks/useImage";
import { useNavigate } from 'react-router-dom';
import data from "../question.json" 
import { useEffect, useState } from "react";

interface Question {
  id: string;
  value: string;
  label: string;
}
type Answers={
  data:string[]
}
type QuestionData={question:string, answer:{ value: string; text: string; }[]}
const questionList: Question[] = [
  { id: '1', value: 'a', label: 'a. 긴 식탁 하나에 손님들을 모두 앉히고 음식을 푸짐하게 준비해서 대접한다. 활기찬 대화가 끊이지 않도록 한다.'},
  { id: '2', value: 'b', label: 'b. 촛불을 켜놓고 식탁을 우아하게 장식해서 고전적인 분위기를 낸다.'},
  { id: '3', value: 'c', label: 'c. 밝은 햇빛 아래서 재미있는 놀이와 게임을 하며 피크닉을 즐긴다.'},
  { id: '4', value: 'd', label: 'd. 완벽한 저녁 식사가 되도록 전문 요리사를 고용하거나, 손님들을 미슐랭 등급 레스토랑으로초대한다.'},
];

const TestList = data.map((item) => {
  return {
    id: item.question,
    value: item.answer.map((ans) => ans.id).join(''), // Combine answer IDs for simplicity
    label: item.question,
  };
});

const PreferenceTest = () => {
  const image = useImage()
  const navigate = useNavigate();
  const [currentIdx, setCurrentIdx] = useState<number>(0)
  const [answers, setAnswers] = useState<Answers>({data:[]} as Answers )
  // const [question, setQuestion] = useState<QuestionData>(data[currentIdx] as QuestionData)
  
  useEffect(()=>{
    if (data !== undefined && currentIdx < data.length) {
      const currentQuestion = data[currentIdx];
      if (currentQuestion) { // 추가된 부분: 현재 질문이 정의되어 있는지 검사
        console.log(`Current Question: ${currentQuestion.question}`);
        // 아직 11번 질문 이하인 경우 다음 질문으로 이동
        // setQuestion(data[currentIdx]as QuestionData)
        answers.data[currentIdx] = "a"
        setAnswers(answers)
        console.log(answers.data[currentIdx])
        console.log(data.length)
        console.log(currentIdx)
      }
    } else {
      console.log(answers)
      // 11번 질문 이상인 경우 결과 페이지로 이동
      // 쿼리 스트링 형식으로 보내기
      navigate('/preference/testresult');
    }
  },[currentIdx])

  // 다음 버튼을 눌렀을 때
  const handleNextButtonClick = () => {
    if (currentIdx === 10) {
      // currentIdx가 10일 때, 결과 페이지로 이동
      navigate('/preference/testresult');
    } else {
      // 그 외의 경우에는 currentIdx를 증가시킴
      setCurrentIdx(currentIdx + 1);
    }
  };

  // 이전 버튼을 눌렀을 때
  const handlePrevButtonClick = () => {
    if (currentIdx === 0) {
      // currentIdx가 10일 때, 결과 페이지로 이동
      navigate('/preference/colorselect');
    } else {
      // 그 외의 경우에는 currentIdx를 증가시킴
      setCurrentIdx(currentIdx - 1);
    }
  };

  //console.log(data);  
  const handleQuestionSelection = (questionId: string, currentQuestionId: number) => {
    const nextQuestionId = currentQuestionId + 1;
    
    console.log(`Selected job: ${questionId}`);
  };

  return (
    <div className="PreferenceTest">
      <div className="PreferenceTestWrapper">
        <div className="PreferenceTestContent">
          <div className="PreferenceTestLeft">
            <img className="PreferenceTestImg" src={image("인테리어취향진단.png")} title="pic"></img>
          </div>
          <div className="PreferenceTestRight">
            <div className="PreferenceTestRightQuestion">{data[currentIdx].question}</div>
            <ul className="PreferenceTestRightAnswer space-y-4 mb-4">
              {data[currentIdx].answer.map((job) => (
                <li key={job.id}>
                  <input
                    type="radio"
                    id={job.id}
                    name="job"
                    value={job.id}
                    className="hidden peer"
                    onChange={() => handleQuestionSelection(job.id, 1)}
                    required
                  />
                  <label
                    htmlFor={job.id}
                    className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">{job.text}</div>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="PreferenceTestMove">
          {/* <a href="/preference/colorselect"> */}
            <button className="PreferenceTestPrevBtn" title="이전"
            onClick={handlePrevButtonClick}>이전</button>
          {/* </a> */}
          {/* <a href="/preference/testresult"> */}
          <button className="PreferenceTestNextBtn" title="다음"
          onClick={handleNextButtonClick}>다음</button>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
}

export default PreferenceTest;