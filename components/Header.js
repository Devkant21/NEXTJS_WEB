import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>
                Devkant Swargiary's
            </span> Portfolio
        </h1>
            <p className={headerStyles.description}>Staying convex in attempt to launch into the stratosphere</p>
    </div>
  )
}

export default Header