import style from "../../styles/Timeline.module.css";
import Link from "next/link";

const Timeline = ({ userName }) => {
    return (
        <>
            <h1 className={style.h1}>This is the timeline of { userName }</h1>
            <Link href="/">
                <a className={style.gohome}>Go home</a>
            </Link>
        </>
    )
}

export default Timeline;

Timeline.getInitialProps = async () => {
    return fetch('http://localhost:3000/api/hello')
        .then(res => res.json())
        .then(response => {
            const { userName } = response
            return { userName }
        })
}