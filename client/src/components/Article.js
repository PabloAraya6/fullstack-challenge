const styles = {
    all: {
        fontSize: '20px'
    },
    row: {
        paddingLeft: '30px',
        paddingTop: '25px',
        backgroundColor: 'white',
        margin: '0 30px',
    },
    col1: {
        width: '70%',
        display: 'inline-block',
    },
    col2: {
        width: '20%', display: 'inline-block', textAlign: 'center'

    },
    col3: {
        width: '10%', display: 'inline-block',
        textAlign: 'center'
    },
    hr: {
        marginTop: '25px'
    },
    gray: {
        color: 'gray'
    }
}

const Article = () => (
    <div style={styles.all}>
        <div style={styles.row}>
            <div style={styles.col1}>
                WordPress 4.3 will be rewritten in Node.js <span style={styles.gray}>- Garbage -</span>
            </div>
            <div style={styles.col2}>
                11:35 am
            </div>
            <div style={styles.col3}>
                🗑️
            </div>
            <hr style={styles.hr}></hr>
        </div>
    </div>

)

export default Article