import "../Components_scss/KeywordSelect.scss"
import { useImage } from "../pages/common/hooks/useImage";

interface Job {
  id: string;
  value: string;
  label: string;
}

const jobList: Job[] = [
  { id: 'job-1', value: 'job-1', label: 'UI/UX Engineer'},
  { id: 'job-2', value: 'job-2', label: 'React Developer'},
  { id: 'job-3', value: 'job-3', label: 'Full Stack Engineer'},
];

const Preference = () => {
  const image = useImage()
  const handleJobSelection = (jobId: string) => {
    // Your logic for handling job selection goes here
    console.log(`Selected job: ${jobId}`);
  };

  return (
    <div className="PreferenceKeyword">
      <div className="PreferenceKeywordWrapper">
        <div className="PreferenceKeywordTitle">
          <div className="PreferenceKeywordSubTitle">인테리어 취향 테스트</div>
          <div className="PreferenceKeywordMainTitle">선호하는 키워드를 3개 선택해 주세요</div>
        </div>
        <hr className="PreferenceKeywordLine"/>
        <div className="PreferenceKeywordContent">
          <div className="PreferenceKeywordContentLine">
            <div className="PreferenceKeywordContentItem"># 심플한</div>
            <div className="PreferenceKeywordContentItem"># 깨끗한</div>
            <div className="PreferenceKeywordContentItem"># 모던한</div>
            <div className="PreferenceKeywordContentItem"># 내추럴한</div>
          </div>
          <div className="PreferenceKeywordContentLine">
            <div className="PreferenceKeywordContentItem"># 미니멀</div>
            <div className="PreferenceKeywordContentItem"># 비비드</div>
            <div className="PreferenceKeywordContentItem"># 우아한</div>
            <div className="PreferenceKeywordContentItem"># 고풍적</div>
          </div>
          <div className="PreferenceKeywordContentLine">
            <div className="PreferenceKeywordContentItem"># 동양적</div>
            <div className="PreferenceKeywordContentItem"># 트렌디</div>
          </div>
        </div>

        {/* <ul className="space-y-4 mb-4">
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
        </ul> */}

        <div className="PreferenceKeywordMove">
          <a href="/preference">
            <button className="PreferenceKeywordPrev" title="이전">이전</button>
          </a>
          <a href="/preference/colorselect">
            <button className="PreferenceKeywordNext" title="다음">다음</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Preference;