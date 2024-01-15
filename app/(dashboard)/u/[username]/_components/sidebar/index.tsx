import { Navigation } from "./navigation"
import { Toggle } from "./toggle"
import Wrapper from "./warpper"

export const Sidebar = () => {
    return (
        <Wrapper>
            <Toggle />
            <Navigation />
        </Wrapper>
    )
}