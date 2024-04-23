import BarChart  from "../components/BarChart"
import Image from "next/image"

export default function Home() {

    return (
        <main className="flex">
            {/*Side bar*/}
            <div className="bg-purple-800 text-white h-screen w-full flex flex-col justify-between">
                <div>
                    <div className="flex my-7 justify-center items-center">
                        {/* logo */}
                        <Image
                            src="/droitdash.svg"
                            width={10}
                            height={20}
                            className="w-10 h-10"
                            alt="Dashboard Image"
                        />
                        <p>DroitDash</p>
                    </div>
                
                    {/* Menu Item */}
                    <div className="flex justify-between p-3">
                        <div className="flex ">
                            <Image
                                src="/dashboard.svg"
                                width={20}
                                height={20}
                                className="w-5 h-5"
                                alt="Dashboard Image"
                            />
                            <p>Dashboard</p>
                        </div>
                        <Image
                            src="/dash.svg"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                            alt="Dash"
                        />
                    </div>

                    {/* Menu Item */}
                    <div className="flex justify-between p-3 border-b-2 border-grey-0">
                        <div className="flex">
                            <Image 
                                src="/metrics.svg"
                                width={20}
                                height={20}
                                className="w-5 h-5"
                                alt="Key Metrics"                        
                            />
                            <h5 className="m-md">Key metrics</h5>
                        </div>
                    </div>
                    
                    {/* Menu Item */}
                    <div className="flex justify-between p-3">
                        <div className="flex">
                            <Image
                                src="/pie-chart.svg"
                                width={20}
                                height={20}
                                className="w-5 h-5"
                                alt="Analytics"
                            />
                            <h5>Analytics</h5>
                        </div>
                        <Image
                            src="/dash.svg"
                            width={20}
                            height={20}
                            className="w-5 h-5"
                            alt="Dash"
                        /> 
                    </div>
                    
                    <div className="flex justify-between p-4 border-b-2 border-gray-0">
                        <div className="flex">
                            <Image
                                src="/idot.png"
                                width={20}
                                height={20}
                                className="w-5 h-5"
                                alt="Dot"
                            /> 
                            <p>AI analytics</p>
                        </div>
                        
                    </div> 
                
                    <div className="flex justify-between p-3">
                        <div className="flex">
                            <Image
                                src="/doc.svg"
                                width={20}
                                height={20}
                                className="w-5 h-5"
                                alt="Dot"
                            /> 
                            <p>Documents</p>
                        </div>
                        
                    </div>

                    <div className="flex justify-between p-3">
                        <div className="flex">
                            <Image
                                src="/notification.png"
                                width={20}
                                height={20}
                                className="w-5 h-5"
                                alt="Dot"
                            /> 
                            <p>Notification</p>
                        </div>
                        
                    </div>

                    {/* bottom card */}
                    <div className="rounded-lg bg-purple-600 p-4 m-2 bottom:0">
                        <div className="flex justify-between items-center">
                            <img src="avatar.png" className="w-12 h-12 rounded-full" />
                            <Image
                                src="arrow.svg"
                                height={20}
                                width={20}
                                className="w-5 h-5"
                                alt="Arrow"
                            />
                        </div>
                        <h2 className="font-bold">WP.AR Pascal</h2>
                        <p className="text-md font-thin">jonna@gmail.com</p>
                    </div>
                                                    
                </div>
            </div>

            {/* Main Screen */}
            <div className="w-full">
                <div className="flex justify-between w-full px-3 pt-7 items-center">
                    <p className="font-medium text-3xl">Viewer Demographics</p>

                    <div className="flex space-x-2">
                        <div className="bg-white flex items-center border rounded-md border-black p-1">
                        <Image
                            src="/search.svg"
                            height={20}
                            width={20}
                            className="w-6 h-4"
                            alt="Search Icon"
                        />
                        <input
                            className="p-2  w-72 "
                            placeholder="Type keywords to search"
                        />
                        </div>
                        <button className="shadow-xl border rounded-md border-black p-3">
                        <Image
                            src="/notification.png"
                            height={20}
                            width={20}
                            className="w-6 h-4"
                            alt="Notification Icon"
                        />

                        </button>
                        <button className="rounded-md bg-purple-700 text-white shadow-xl p-3">
                        <Image
                            src="/setting.svg"
                            height={50}
                            width={50}
                            className="w-6 h-5"
                            alt="Setting Icon"
                        />
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex space-x-3 border-b-2 border-gray-200 m-4">
                    <a
                        href="#"
                        className="flex space-x-1 border-b-2 items-center justify-center border-purple-700 p-2"
                    >
                    <Image
                        src="/value.svg"
                        width={20}
                        height={20}
                        className="w-4 h-5"
                        alt="Value Comparison"
                    />

                    <p>Value comparison</p>
                    </a>

                    {/* Tab links */}
                    <a
                        href="#"
                        className="flex space-x-1  items-center justify-center p-2"
                    >
                        <Image
                            src="/percent.svg"
                            width={20}
                            height={20}
                            className="w-4 h-5"
                            alt="Average"
                        />
                        <p>Average values</p>
                    </a>

                    {/* Tab links */}
                    <a
                        href="#"
                        className="flex space-x-1  items-center justify-center p-2 "
                    >
                        <Image
                            src="/setting.svg"
                            width={20}
                            height={20}
                            className="w-4 h-5"
                            alt="Configure"
                        />

                        <p>Configure analysis</p>
                    </a>

                    {/* Tab links */}
                    <a
                        href="#"
                        className="flex space-x-1  items-center justify-center p-2"
                    >
                        <Image
                            src="/filter.svg"
                            width={20}
                            height={20}
                            className="w-4 h-5"
                            alt="Filter"
                        />
   
                        <p>Filter analysis</p>
                    </a>
                </div>

                <div className="flex">
                    {/* Split flex 1 */}
                    <div className="px-3">
                        {/*Cards*/}
                        <div className="grid grid-cols-3 gap-4">
                           <div className="bg-indigo-200 flex items-center justify-between rounded-md shadow-lg p-4">
                                <div>
                                    <p>Total sales</p>
                                    <p className="font-semibold text-2xl">$59,690</p>
                                    <p className="text-sm">
                                        Since last week{" "}
                                        <span className="bg-white text-indigo-700 p-1 rounded-xl ">
                                        +23%
                                        </span>
                                    </p>
                                </div>
                                <div className="items-center flex justify-center">
                                    <img src="line-graph.png" className="w-150 h-180" />
                                    
                                </div>
                            </div>
                            <div className="bg-red-200 flex items-center justify-between rounded-md shadow-lg p-4">
                                <div>
                                    <p>Total Orders</p>
                                    <p className="font-semibold text-2xl">4865</p>
                                    <p className="text-sm">
                                        Since last week{" "}
                                        <span className="bg-white text-indigo-700 p-1 rounded-xl ">
                                        +23%
                                        </span>
                                    </p>
                                </div>
                                <div className="items-center flex justify-center">
                                    <img src="line-graph.png" className="w-150 h-180" />
                                </div>
                            </div>
                            <div className="bg-green-200 flex items-center justify-between rounded-md shadow-lg p-4">
                                <div>
                                    <p>Total Customers</p>
                                    <p className="font-semibold text-2xl">2245</p>
                                    <p className="text-sm">
                                        Since last week{" "}
                                        <span className="bg-white text-indigo-700 p-1 rounded-xl ">
                                        +23%
                                        </span>
                                    </p>
                                </div>
                                <div className="items-center flex justify-center">
                                    <img src="line-graph.png" className="w-150 h-180" />
                                </div>
                            </div>
                        </div>

                        {/* Sales report */}
                        <div className="mt-10 shadow-2xl p-4 rounded-xl">
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-6 items-center">
                                    <p className="text-2xl">Sales Report</p>

                                    <div className="flex space-x-3">
                                        <a className="p-2 shadow-xl rounded-xl" href="#">
                                        12 months
                                        </a>
                                        <a
                                        className="p-2 shadow-xl rounded-xl bg-gray-200"
                                        href="#"
                                        >
                                        3 months
                                        </a>
                                        <a
                                        className="p-2 shadow-xl rounded-xl bg-gray-200"
                                        href="#"
                                        >
                                        30 days
                                        </a>
                                        <a
                                        className="p-2 shadow-xl rounded-xl bg-gray-200"
                                        href="#"
                                        >
                                        1 day
                                        </a>
                                    </div>
                                </div>

                                <div className="flex space-x-3">
                                    <button className="p-2 shadow-xl rounded-xl">
                                        <Image
                                            src="/down-arrow.svg"
                                            width={20}
                                            height={20}
                                            className="w-7 h-7"
                                            alt="Down arrow"
                                        />
                                    </button>
                                    <button className="p-2 shadow-xl rounded-xl">
                                        <Image
                                            src="/dotted-line.svg"
                                            width={20}
                                            height={20}
                                            className="w-7 h-7"
                                            alt="Dootted-line"
                                        />
                                    </button>
                                </div>
                            </div>
                            <br />
                            <br />
                        <div>
                            <p>Avg per month</p>
                            <p className="font-semibold text-2xl">$38,500</p>
                        </div>
                        <br />
                        <br />

                        <div className="flex justify-center items-center">
                            <BarChart />
                        </div>

                        {/* Orders list */}
                        <div className="mt-10 shadow-2xl p-4 rounded-xl">
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-6 items-center">
                                    <p className="text-2xl">Orders List</p>
                                </div>

                                <div className="flex space-x-3">
                                    <button className="p-2 shadow-xl rounded-xl">
                                        <Image
                                            src="/filter.svg"
                                            width={20}
                                            height={20}
                                            className="w-5 h-5"
                                            alt="Arrow Down"
                                        />
                                    </button>
                                    <button className="p-2 shadow-xl rounded-xl">
                                        <Image
                                            src="/down-arrow.svg"
                                            width={20}
                                            height={20}
                                            className="w-5 h-5"
                                            alt="Arrow Down"
                                        />
                                    </button>
                                    <button className="p-2 shadow-xl rounded-xl">
                                        <Image
                                            src="/dotted-line.svg"
                                            width={20}
                                            height={20}
                                            className="w-5 h-5"
                                            alt="Arrow Down"
                                        />
                                    </button>
                                </div>
                            </div>
                            <br />
                            <div className="flex space-x-4 p-4 my-3 w-full bg-gray-300">
                                <p>Plan</p>
                                <p>Customer</p>
                                <p>Order</p>
                                <p>Sale</p>
                                <p>Due date</p>
                                <p>Rating</p>
                                <p>Status</p>
                            </div>
                            <div className="flex items-center space-x-4 w-full">
                                <p className="p-3 bg-gray-300 rounded-md">1</p>
                                <div className="flex items-center space-x-1">
                                    <img src="avatar.png" className="w-12 h-12 rounded-full" />
                                    <p>John C.</p>
                                </div>
                                <div className="bg-purple-200 rounded-xl p-2">#1323344</div>
                                    <p>$134</p>
                                    <p>7th March 2024</p>
                                    <div className="bg-green-200 rounded-xl p-2 flex space-x-1 items-center">
                                        <span className="h-2 w-2 bg-green-700 rounded-full"></span>
                                        Complete
                                    </div>
                                </div>
                            </div>
                            <br/>

                        </div>

                    </div>
                    {/* split flex 2 */}
                    <div className="px-3 w-2/5">
                        {/* Orders list */}
                        <div className=" shadow-2xl p-4 rounded-xl">
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-6 items-center">
                                    <p className="text-2xl">Orders List</p>
                                </div>

                                <div className="flex space-x-3">
                                    <button className="p-2 shadow-xl rounded-xl">
                                        <Image
                                            src="/filter.svg"
                                            width={20}
                                            height={20}
                                            className="w-5 h-5"
                                            alt="Order"
                                        />
                                    </button>
                                    <button className="p-2 shadow-xl rounded-xl">
                                        <Image
                                            src="/dotted-line.svg"
                                            width={20}
                                            height={20}
                                            className="w-5 h-5"
                                            alt="Order"
                                        />
                                    </button>
                                </div>
                            </div>
                            <br />
                            <div className="flex justify-center items-center">
                                
                            </div>
                        </div>

                        <div className="bg-indigo-200 mt-3  items-center justify-between rounded-md shadow-lg p-4">
                        <div className="flex justify-between">
                            <p>Total sales</p>
                            <select>
                            <option>January</option>
                            </select>
                        </div>
                        <div className="flex mt-5">
                            <div>
                            <p className="font-semibold text-2xl">$59,690</p>
                            <p className="text-sm">
                                Since last week{" "}
                                <span className="bg-white text-indigo-700 p-1 rounded-xl ">
                                +23%
                                </span>
                            </p>
                            </div>
                            <div className="items-center flex justify-center">
                            
                            </div>
                        </div>
                        </div>

                        <div className="bg-green-200 mt-3  items-center justify-between rounded-md shadow-lg p-4">
                        <div className="flex items-center justify-between">
                            <div className="p-5 bg-white rounded-xl text-blue-400 text-3xl">
                                <Image
                                    src="/dotted-line.svg"
                                    width={20}
                                    height={20}
                                    className="w-5 h-5"
                                    alt="Order"
                                />
                            </div>
                            <div>
                            <p className="font-medium text-xl">Total Orders</p>
                            <p>Saved on Jan 4 1998</p>
                            </div>
                            <img src="avatar.png" className="h-12 w-12 rounded-full" />
                        </div>
                        </div>
                    </div>
                </div>

            </div>

            

        </main>
    );
}