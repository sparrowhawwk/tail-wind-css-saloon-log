export default function Sidebar({ chooseComponent }) {
    return(
        <>
            <ul className="list-none">
                <li className="p-2 m-2">
                    <button onClick={() => chooseComponent('today')}>Today</button>
                </li>
                <li className="p-2 m-2">
                    <button onClick={() => chooseComponent('history')}>History</button>
                </li>
            </ul>
        </>
    );
}
