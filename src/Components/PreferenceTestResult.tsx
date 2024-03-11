import "../Components_scss/PreferenceTestResult.scss"
import React, {useEffect, useState} from 'react';
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis} from 'recharts';
import {useLocation, useNavigate} from 'react-router-dom';
import result from '../result.json'
import {getApi} from "../api/ApiWrapper";

type UVData = {
    name: string,
    uv: number
}
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
    const navigate = useNavigate();
    const location = useLocation();
    const selectedAnswers = location.state?.answers;
    const [answers, setAnswers] = useState<Map<string, number>>(new Map<string, number>())
    const [mostSelection, setMostSelection] = useState<'A' | 'B' | 'C' | 'D'>('A')
    const [uvData, setUvData] = useState<UVData[]>([])

    useEffect(() => {
        if (selectedAnswers !== undefined) {
            answers.set('A', selectedAnswers.QuestionData.filter((answer: string) => answer === 'a').length)
            answers.set('B', selectedAnswers.QuestionData.filter((answer: string) => answer === 'b').length)
            answers.set('C', selectedAnswers.QuestionData.filter((answer: string) => answer === 'c').length)
            answers.set('D', selectedAnswers.QuestionData.filter((answer: string) => answer === 'd').length)
            let most: 'A' | 'B' | 'C' | 'D' = 'A'
            most = answers.get('B')!! > answers.get(most)!! ? 'B' : most
            most = answers.get('C')!! > answers.get(most)!! ? 'C' : most
            most = answers.get('D')!! > answers.get(most)!! ? 'D' : most
            const uvData: UVData[] = [
                {
                    name: 'A 문항',
                    uv: answers.get('A')!!
                },
                {
                    name: 'B 문항',
                    uv: answers.get('B')!!
                },
                {
                    name: 'C 문항',
                    uv: answers.get('C')!!
                },
                {
                    name: 'D 문항',
                    uv: answers.get('D')!!
                },
            ]
            setUvData(uvData)
            setMostSelection(most)
        }
        console.log('Selected answers:', selectedAnswers);
    }, [])
    useEffect(() => {
        async function setMemberSeasonType() {
            try {
                const api = await getApi()
                switch (mostSelection) {
                    case "A":
                        await api.updateSeason({season: "FALL"})
                        break;
                    case "B":
                        await api.updateSeason({season: "SUMMER"})
                        break;
                    case "C":
                        await api.updateSeason({season: "SPRING"})
                        break;
                    case "D":
                        await api.updateSeason({season: "WINTER"})
                        break;
                }
            } catch (e) {

            }
        }

        if (mostSelection !== undefined) {
            setMemberSeasonType().then()
        }
    }, [mostSelection])
    console.log('Answers:', answers)
    console.log(mostSelection)

    return (
        <div className="PreferenceTestResult">
            <div className="PreferenceTestResultContent">
                <div className="PreferenceTestResultContentLeft">
                    {/*    */}
                    <ResultDescription desc={result.filter(
                        item => item.id === mostSelection.toLowerCase()
                    )[0]}/>
                </div>
                <div className="PreferenceTestResultContentRight">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={uvData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            barCategoryGap="20%"
                            style={{border: 'none'}}
                        >
                            <CartesianGrid stroke="transparent" strokeDasharray="3 3"/>
                            <XAxis dataKey="name" axisLine={false}/>
                            {/* <YAxis domain={[0, 100]}/> */}
                            <YAxis axisLine={false} tick={false}/>
                            {/* <Tooltip /> */}
                            {/* <Legend /> */}
                            <Bar dataKey="uv" fill="#FFCC2C" background={{fill: '#eee'}} stroke="transparent"/>
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

type ResultDescription = {
    id: string, type: string, character: string, diagnosis: string
}

function ResultDescription({desc}: { desc: ResultDescription }) {
    if (desc === undefined) {
        return <></>
    }

    return (
        <>
            <div className="PreferenceTestResultContentLeftHead">
                <div className="PreferenceTestResultContentLeftTitle">
                    {desc.type}
                </div>
                <div className="PreferenceTestResultContentLeftContent">
                    {desc.character}
                </div>
            </div>
            <div className="PreferenceTestResultContentLeftContain">
                <div className="PreferenceTestResultContentLeftContainTitle">인테리어 취향 진단</div>
                <div className="PreferenceTestResultContentLeftContainContent">{desc.diagnosis}
                </div>
            </div>
        </>
    )
}