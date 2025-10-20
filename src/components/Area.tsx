import { ReactNode } from "react"

const Area = ({children}: {children: ReactNode}) => {
    return(
        <div className="m-auto w-fullflex flex-col gap-6">
            {children}
        </div>
    )
}

export default Area