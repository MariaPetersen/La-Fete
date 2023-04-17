import "./styles.scss"

const Text = (props) => {
    return <div className="paragraph">
        <p>{props.textContent}</p>
    </div>
}

export default Text