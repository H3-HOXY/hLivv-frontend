import "../Components_scss/PreferenceTest.scss"
import { useImage } from "../pages/common/hooks/useImage";

interface Job {
  id: string;
  value: string;
  label: string;
}

const jobList: Job[] = [
  { id: '1', value: 'a', label: 'a. 긴 식탁 하나에 손님들을 모두 앉히고 음식을 푸짐하게 준비해서 대접한다. 활기찬 대화가 끊이지 않도록 한다.'},
  { id: '2', value: 'b', label: 'b. 촛불을 켜놓고 식탁을 우아하게 장식해서 고전적인 분위기를 낸다.'},
  { id: '3', value: 'c', label: 'c. 밝은 햇빛 아래서 재미있는 놀이와 게임을 하며 피크닉을 즐긴다.'},
  { id: '4', value: 'd', label: 'd. 완벽한 저녁 식사가 되도록 전문 요리사를 고용하거나, 손님들을 미슐랭 등급 레스토랑으로초대한다.'},
];

const PreferenceTest = () => {
  const image = useImage()
  const handleJobSelection = (jobId: string) => {
    // Your logic for handling job selection goes here
    console.log(`Selected job: ${jobId}`);
  };

  return (
    <div className="PreferenceTest">
      <div className="PreferenceTestWrapper">
        <div className="PreferenceTestContent">
          <div className="PreferenceTestLeft">
            <img className="PreferenceTestImg" src={image("색채심리테스트.png")} title="pic"></img>
          </div>
          <div className="PreferenceTestRight">
            <div className="PreferenceTestRightQuestion">01. 저녁 식사에 손님을 초대한다면, 가장 마음에 드는 방법은 무엇인가?</div>
            <ul className="PreferenceTestRightAnswer space-y-4 mb-4">
              {jobList.map((job) => (
                <li key={job.id}>
                  <input
                    type="radio"
                    id={job.id}
                    name="job"
                    value={job.value}
                    className="hidden peer"
                    onChange={() => handleJobSelection(job.id)}
                    required
                  />
                  <label
                    htmlFor={job.id}
                    className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
                  >
                    <div className="block">
                      <div className="w-full text-lg font-semibold">{job.label}</div>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="PreferenceTestMove">
          <a href="/preference/colorselect">
            <button className="PreferenceTestPrevBtn" title="이전">이전</button>
          </a>
          <a href="/preference/testresult">
          <button className="PreferenceTestNextBtn" title="다음">다음</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PreferenceTest;