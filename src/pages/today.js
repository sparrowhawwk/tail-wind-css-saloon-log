export default function Today() {
    return (
        <>
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
            </div>
        </>
    );
}