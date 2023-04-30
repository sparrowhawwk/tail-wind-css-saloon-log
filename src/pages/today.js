export default function Today() {
    const tableCss = `
        .table-wrp  {
            max-height: 30vh;
            overflow-y: auto;
            display:block;
        }
    `;
    return (
        <>
            <style>
                {tableCss}
            </style>
            <div className="p-2">
                <div className="w-full">
                    <div className="flex mb-5">
                        <div className="w-1/3">
                            <label htmlFor="first_name" className="mb-1 block">Firstname</label>
                            <input type="text" className="form-input rounded border border-solid border-slate-200 p-2 w-5/6"
                                id="first_name" name="first_name"/>
                        </div>
                        <div className="w-1/3">
                            <label htmlFor="last_name" className="mb-1 block">Lastname</label>
                            <input type="text" className="form-input rounded border border-solid border-slate-200 p-2 w-5/6"
                                id="last_name" name="last_name"/>
                        </div>
                        <div className="w-1/3">
                            <label htmlFor="phone_number" className="mb-1 block">Phone</label>
                            <input type="text" className="form-input rounded border border-solid border-slate-200 p-2 w-5/6"
                                id="phone_number" name="phone_number"/>
                        </div>
                    </div>
                    <div className="flex mb-5">
                        <div className="w-1/3">
                            <label htmlFor="cs_age" className="mb-1 block">Age</label>
                            <input type="number" className="form-input rounded border border-solid border-slate-200 p-2 w-5/6"
                                id="cs_age" name="cs_age"/>
                        </div>
                        <div className="w-1/3">
                            <label htmlFor="cs_amount" className="mb-1 block">Amount</label>
                            <input type="number" className="form-input rounded border border-solid border-slate-200 p-2 w-5/6"
                                id="cs_amount" name="cs_amount"/>
                        </div>
                        <div className="w-1/3">
                            <label className="mb-2 block">Gender</label>
                            <input type="radio" name="cs_gender" id="cs_male" className="mr-2" />
                            <label htmlFor="cs_male" className="mr-2">Male</label>
                            <input type="radio" name="cs_gender" id="cs_female" className="mr-2"/>
                            <label htmlFor="cs_male">Female</label>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-full">
                            <button className="rounded bg-green-500 border border-solid border-green-200 pt-1 pb-1 pr-4 pl-4 text-white">Log</button>
                        </div>
                    </div>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div className="w-full overflow-x-auto table-wrp max-h-20">
                    <table className="table-auto min-w-full text-left">
                        <thead className="border-b dark:border-neutral-500 bg-neutral-50">
                            <tr>
                                <th scope="col" className="px-6 py-4">#</th>
                                <th scope="col" className="px-6 py-4">Firstname</th>
                                <th scope="col" className="px-6 py-4">Lastname</th>
                                <th scope="col" className="px-6 py-4">Age</th>
                                <th scope="col" className="px-6 py-4">Gender</th>
                                <th scope="col" className="px-6 py-4">Amount</th>
                                <th scope="col" className="px-6 py-4">Date</th>
                            </tr>
                        </thead>
                        <tbody className="overflow-y-auto max-h-20">
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                                    value => {
                                        return (
                                            <>
                                                <tr className="border-b dark:border-neutral-500 ease-in-out hover:bg-neutral-100" key={value}>
                                                    <td className="whitespace-nowrap px-6 py-4">1</td>
                                                    <td className="whitespace-nowrap px-6 py-4">Rahul</td>
                                                    <td className="whitespace-nowrap px-6 py-4">Sultan</td>
                                                    <td className="whitespace-nowrap px-6 py-4">26</td>
                                                    <td className="whitespace-nowrap px-6 py-4">Male</td>
                                                    <td className="whitespace-nowrap px-6 py-4">110</td>
                                                    <td className="whitespace-nowrap px-6 py-4">30/04/2023</td>
                                                </tr>
                                            </>
                                        );
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}