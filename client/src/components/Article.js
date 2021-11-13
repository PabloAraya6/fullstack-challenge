import moment from 'moment'
const styles = {
    all: {
        paddingLeft: '40px',
        paddingRight: '40px',
    },
    row: {
        paddingLeft: '30px',
        paddingTop: '25px',
        paddingBottom: '20px',
        borderBottom: '1px #ccc solid',
        margin: '5 30px',
        cursor: 'pointer'
    },
    col1: {
        width: '70%',
        display: 'inline-block',
        color: '#333'
    },
    col2: {
        width: '20%', display: 'inline-block', textAlign: 'center'
    },
    col3: {
        width: '10%', display: 'inline-block',
        textAlign: 'center',
        color: '#333',
    },
    hr: {
        marginTop: '25px'
    },
    gray: {
        color: '#999'
    }
}

function Article({ _id, story_title, title, story_url, author, created_at, onDelete }) {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const onClickUrl = (url) => {
        if (url) return () => openInNewTab(url)
    }

    const handleFormat = (date) => {
        const today = moment(date).isSame(moment(), "day")
        const yesterday = moment(date).isSame(moment().subtract(1, 'day'), "day")
        if (today) return moment(date).format('HH:mm a')
        if (yesterday) return 'yesterday'
        return moment(date).format('MMM DD')
    }

    return (
        <div style={styles.all}>
            <div style={styles.row}>
                <div style={styles.col1} onClick={onClickUrl(story_url)}>
                    {story_title || title}<span style={styles.gray}> - {author} - </span>
                </div>
                <div style={styles.col2} onClick={onClickUrl(story_url)}>
                    {handleFormat(created_at)}
                </div>
                <div style={styles.col3} >
                    <div
                        onClick={() => onDelete(_id)}>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Article