import React, { useContext } from "react";
import Graph from "../chart/Graph";
import { dummyData } from "../../dummydata/data";
import { useStoreContext } from "../../contextApi/ContextApi";
import { useFetchTotalClicks } from "../hooks/useQuery";

const Dashboard = () => {
  const {token} = useStoreContext()
  
  const onError = () => console.error('ERROR');
  console.log(useFetchTotalClicks(token, onError))

  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
      <div className="lg:w-[90%] w-full mx-auto py-16">
        <div className=" h-96 relative ">
          <Graph graphData={dummyData} />
        </div>
        <div className="py-5 sm:text-end text-center">
          <button
            className="bg-custom-gradient px-4 py-2 rounded-md text-white"
            onClick={() => console.log('pressed button')}
          >
            Create a New Short URL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
