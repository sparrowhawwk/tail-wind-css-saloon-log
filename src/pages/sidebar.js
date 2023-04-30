export default function Sidebar({ chooseComponent }) {
    return(
        <>
            <ul className="list-none space-y-2">
                <li className="p-2 m-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <button onClick={() => chooseComponent('today')}>Today</button>
                </li>
                <li className="p-2 m-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <button onClick={() => chooseComponent('history')}>History</button>
                </li>
            </ul>
        </>
    );
}
