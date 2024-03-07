import "../Components_scss/PreferenceTestResult.scss"
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'A 문항',
    uv: 3,
  },
  {
    name: 'B 문항',
    uv: 4,
  },
  {
    name: 'C 문항',
    uv: 3,
  },
  {
    name: 'D 문항',
    uv: 1,
  },
];

const PreferenceTestResult = () => {
  return (
    <div className="PreferenceTestResult">
      <div className="PreferenceTestResultContent">
        <div className="PreferenceTestResultContentLeft">
        <div className="PreferenceTestResultContentLeftHead">
            <div className="PreferenceTestResultContentLeftTitle">A가 가장 많았다면: 가을/대지 유형</div>
            <div className="PreferenceTestResultContentLeftContent">가을/대지 유형인 사람은 따뜻하고 남을 잘 보살핀다. 고유한 본성은 강렬한 외향성이다. 다른 사람에게 관심을 기울이고 사람들이 어떤 행동을 하는 이유를 궁금해한다. 호기심이 많고 뭔가를 이해하려는 욕구가 강하다. 텃밭에 물을 주거나 산책을 하는 것처럼 자연 속에 있을 때 가장 행복해한다. 가장 좋아하는 오락은 편안하고 느긋한 분위기에서 즐기는 활동이다. 친구들을 만나거나 친구들을 식사에 초대하는 것을 무척 좋아한다.(이때 친구들의 수는 많지 않다.) 음식이 잔뜩 쌓인 식탁에 둘러앉거나 벽난로 앞 푹신한 소파에 앉아 속 깊은 이야기를 나누는 것을 좋아하며 모임의 규모는 작은 편이다. 가을/대지 유형은 조금 별나고 화려할 수 있으며 반항적인 면모를 지닌 사람도 더러 있다. 간혹 권위적이고 위압적으로 보이기도 한다. 내면에는 불이 활활 타고 있는데, 누군가 건드리면 그 불이 폭발할 수도 있다.</div>
          </div>
          <div className="PreferenceTestResultContentLeftContain">
            <div className="PreferenceTestResultContentLeftContainTitle">인테리어 취향 진단</div>
            <div className="PreferenceTestResultContentLeftContainContent">편안하고 안락한 분위기가 중요하다. 노출 벽, 나무 마루바닥, 도자기, 구리 냄비와 같은 자연의 질감과 소재를 좋아한다. 집을 사서 직접 개조할 수도 있다. 육체적인 편안함을 중요하게 생각하므로 가구는 가볍거나 투명한 것말고 튼튼한 것으로 골라야 한다 벽난로, 오븐, 가스레인지의편안한 느낌에서 위안을 얻는다. 책과 자잘한 액세서리를좋아해서 문짝 없는 선반에 수집품을 늘어놓기도한다. 미니멀한 감성과는 거리가 멀다.</div>
          </div>
        </div>
        <div className="PreferenceTestResultContentRight">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barCategoryGap="20%"
              style={{ border: 'none' }}
            >
              <CartesianGrid stroke="transparent" strokeDasharray="3 3" />
              <XAxis dataKey="name" axisLine={false}/>
              {/* <YAxis domain={[0, 100]}/> */}
              <YAxis axisLine={false} tick={false}/>
              {/* <Tooltip /> */}
              {/* <Legend /> */}
              <Bar dataKey="uv" fill="#FFCC2C" background={{ fill: '#eee' }} stroke="transparent"/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="PreferenceTestResultMove">
        <a href="/preference/preferencetest">
          <button className="PreferenceTestResultPrevBtn" title="이전">이전</button>
        </a>
        <a href="/preference/interiorrecommend">
          <button className="PreferenceTestResultNextBtn" title="다음">다음</button>
        </a>
      </div>
    </div>
  );
}

export default PreferenceTestResult;