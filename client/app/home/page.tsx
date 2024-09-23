import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div>
      <div className="w-full h-[70px] bg-gray-200"></div>

      <h1 className="font-bold text-3xl mt-6 ml-5">Welcome, Mary</h1>

      <div className="w-full h-[300px] bg-gray-200 m-7">
        <h1 className="font-bold text-3xl mt-3 ml-7 text-black">Rs.3,000</h1>

        <Button className="bg-amber-500 font-bold text-2xl h-[60px] ml-7 mt-3">Add Money</Button>
        <Button className="bg-amber-500 font-bold text-2xl h-[60px] ml-7 mt-3">Send Money</Button>
        <Button className="bg-amber-500 font-bold text-2xl h-[60px] ml-7 mt-3">Receive Money</Button>
      </div>
      <h1 className=" text-3xl mt-6 ml-5">Transaction History:</h1>
      <hr className=" ml-5 mr-5 border-t-2 border-gray-400" />
      <h1 className=" text-2xl mt-6 ml-5">name</h1>
      <h1 className=" text-2xl mt-1 ml-5">date</h1>
      <hr className=" ml-5 mr-5 border-t-2 border-gray-400 mt-3" />
      <h1 className=" text-2xl mt-6 ml-5">name</h1>
      <h1 className=" text-2xl mt-1 ml-5">date</h1>
      <hr className=" ml-5 mr-5 border-t-2 border-gray-400 mt-3" />
      <h1 className=" text-2xl mt-6 ml-5">name</h1>
      <h1 className=" text-2xl mt-1 ml-5">date</h1>
      <hr className=" ml-5 mr-5 border-t-2 border-gray-400 mt-3" />
      <h1 className=" text-2xl mt-6 ml-5">name</h1>
      <h1 className=" text-2xl mt-1 ml-5">date</h1>
      <hr className=" ml-5 mr-5 border-t-2 border-gray-400 mt-3" />
      <h1 className=" text-2xl mt-6 ml-5">name</h1>
      <h1 className=" text-2xl mt-1 ml-5">date</h1>
      <hr className=" ml-5 mr-5 border-t-2 border-gray-400 mt-3" />
      <h1 className=" text-2xl mt-6 ml-5">name</h1>
      <h1 className=" text-2xl mt-1 ml-5">date</h1>
      <hr className=" ml-5 mr-5 border-t-2 border-gray-400 mt-3" />
      <h1 className=" text-2xl mt-6 ml-5">name</h1>
      <h1 className=" text-2xl mt-1 ml-5">date</h1>
      <hr className=" ml-5 mr-5 border-t-2 border-gray-400 mt-3" />
    </div>
  );
};

export default Page;
