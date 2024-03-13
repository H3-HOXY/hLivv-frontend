import "./styles/PreferenceTest.scss"
import {useImage} from "../common/hooks/useImage";
import {useNavigate} from 'react-router-dom';
import QuestionData from "../../question.json"
import {useEffect, useState} from "react";

/**
 * @since 
 * @author 최정윤, 이호연
 */

type Answers = {
    QuestionData: string[]
}

const PreferenceTest = () => {
    const image = useImage()
    const navigate = useNavigate();
    const [currentIdx, setCurrentIdx] = useState<number>(0)
    const [answers, setAnswers] = useState<Answers>({QuestionData: Array(QuestionData.length)} as Answers)
    const [selectedAnswer, setSelectedAnswer] = useState<'a' | 'b' | 'c' | 'd'>('a')
    const [isRadioDisabled, setIsRadioDisabled] = useState(false);

    useEffect(() => {
        setIsRadioDisabled(false);
        if (QuestionData !== undefined && currentIdx < QuestionData.length) {
            const currentQuestion = QuestionData[currentIdx];
            if (currentQuestion) { // 추가된 부분: 현재 질문이 정의되어 있는지 검사
                console.log(`Current Question: ${currentQuestion.question}`);
            }
        } else {
            // 11번 질문 이상인 경우 결과 페이지로 이동
            // 쿼리 스트링 형식으로 보내기
            navigate('/preference/testresult');
        }
    }, [currentIdx])

  // 다음 버튼을 눌렀을 때
//   const handleNextButtonClick = () => {
//     if (currentIdx === 10) {
//       // currentIdx가 10일 때, 결과 페이지로 이동
//       navigate('/preference/testresult', { state: { answers } });
//     } else {
//       console.log(answers.QuestionData)
//       // 그 외의 경우에는 currentIdx를 증가시킴
//       setCurrentIdx(currentIdx + 1);
//     }
//   };
    // 다음 버튼을 눌렀을 때
    const handleNextButtonClick = () => {
        setAnswers(prevAnswers => {
            const newAnswers = [...prevAnswers.QuestionData];
            newAnswers[currentIdx] = selectedAnswer;
            return {QuestionData: newAnswers};
        });

        setSelectedAnswer('a');

        if (currentIdx === 10) {
            // currentIdx가 10일 때, 결과 페이지로 이동
            answers.QuestionData[currentIdx] = selectedAnswer;
            navigate('/preference/testresult', {state: {answers}});
        } else {
            // 그 외의 경우에는 currentIdx를 증가시킴
            setCurrentIdx(currentIdx + 1);
            setIsRadioDisabled(false);
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

    const handleQuestionSelection = (questionId: string, currentQuestionId: number) => {
        // 선택한 답변을 answers 상태에 저장
        setSelectedAnswer(questionId as 'a' | 'b' | 'c' | 'd')
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
                        <div className="PreferenceTestRightQuestion">{QuestionData[currentIdx].question}</div>
                        <ul className="PreferenceTestRightAnswer space-y-4 mb-4">
                            {QuestionData[currentIdx].answer.map((job) => (
                                <li key={job.id}>
                                    <input
                                        type="radio"
                                        id={job.id}
                                        name="job"
                                        value={job.id}
                                        checked={answers.QuestionData[currentIdx] === job.id || job.id === selectedAnswer}
                                        className={`hidden peer ${isRadioDisabled ? 'disabled' : ''}`}
                                        onChange={() => handleQuestionSelection(job.id, currentIdx)}
                                        required
                                    />
                                    <label
                                        htmlFor={job.id}
                                        className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
                                    >
                                        <div className="block text-start">
                                            <div className="w-full text-lg font-semibold">{job.text}</div>
                                        </div>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="PreferenceTestMove">
                    <button className="PreferenceTestPrevBtn" title="이전"
                            onClick={handlePrevButtonClick}>이전
                    </button>
                    <button className="PreferenceTestNextBtn" title="다음"
                            onClick={handleNextButtonClick}>다음
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PreferenceTest;