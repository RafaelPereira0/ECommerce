import { ReactNode } from "react"
import Area from "./Area"
import Header from "./Header"
import Steps from "./Steps"

const Theme = ({children}: {children: ReactNode}) => {
    return(
        <div className="bg-[#02044A] text-white min-h-screen">
            <Area>
                <Header/>
                <Steps>
                    {children}
                </Steps>
            </Area>
        </div>
    )
}

export default Theme