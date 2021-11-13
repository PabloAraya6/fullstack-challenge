
const headerStyle = {
    backgroundColor: '#3a3b3c',
    color: 'white',
    padding: '5px 70px 1px'
}

const titleStyle = {
    fontSize: '70px',
    marginTop: '30px',
    marginBottom: '0'
}

const subTitleStyle = {
    fontSize: '20px',
    paddingBottom: '30px'
}

const Header = () => (
    <header style={headerStyle}>
        <h1 style={titleStyle}>HN Feed</h1>
        <div style={subTitleStyle}>
            <h3>We 🤍 hacker news!</h3>
        </div>
    </header>
)

export default Header