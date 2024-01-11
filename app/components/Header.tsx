import { IcLogoHeader } from "@/public/icons/IcLogoHeader"
import { Button } from "."

export const Header = () => {
    return (
        <div className="mt-3 px-10 flex justify-between items-center absolute w-full">
            <IcLogoHeader width="100px"  height="32px" display="flex"/>
            <div>
                <Button color="accent" width="110px" loading={true}>Sign In</Button>
            </div>
        </div>
    )
}

export default Header