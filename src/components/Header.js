import { LogoIcon } from "./assets/icons"
import { BulbIcon } from "./assets/icons"
const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo-wrapper">
                    <div className="logo">
                        <LogoIcon />
                    <span>Snippet section</span>
                    </div>
                <button className="icon"><BulbIcon /></button>
                </div>
            </div>
        </header>
    )
}

export default Header