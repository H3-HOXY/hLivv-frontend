import React from "react";

export function MyPoint({myPoint, orderPoint, setOrderPoint}: {
    myPoint: number,
    orderPoint: number,
    setOrderPoint: React.Dispatch<React.SetStateAction<number>>,
}) {
    return (<div className="OrderPoint">
        <div className="OrderPointTitle">포인트</div>
        <hr className="OrderLine"/>
        <div className="OrderPointContent">
            <div className="OrderPointContentFirst">
                <input className="OrderPointPay" type="text" title="point"
                       value={orderPoint}
                       onChange={
                           (e) => {
                               const input = Number(e.target.value)
                               if (myPoint > input) {
                                   setOrderPoint(input)
                               } else {
                                   setOrderPoint(myPoint)
                               }
                           }
                       }></input>
                <button className="OrderPointUse"
                        onClick={() => setOrderPoint(myPoint)}>
                    전액사용
                </button>
            </div>
            <div className="OrderPointRest">
                <div className="OrderPointRestTitle">사용 가능 포인트</div>
                <div className="OrderPointRestMoney">{myPoint}</div>
            </div>
        </div>
    </div>)
}