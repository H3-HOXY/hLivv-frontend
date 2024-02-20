import { useSearchParams } from "react-router-dom"
import "../Components_scss/Fail.scss"

const Fail = () => {
  const [searchParams] = useSearchParams()

  return (
    <div className="Fail">
      <h1>결제 실패</h1>
      <div>{`사유: ${searchParams.get("message")}`}</div>
    </div>
  )
}
export default Fail;