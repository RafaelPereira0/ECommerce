import { ReactNode } from "react"

const Steps = ({children}: {children: ReactNode}) => {
    return(
        <div className="flex gap-6 p-15">
            {children}
        </div>
    )
}

export default Steps