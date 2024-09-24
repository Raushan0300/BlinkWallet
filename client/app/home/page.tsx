import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div>
      
      <div className="w-full h-[70px] bg-[#3D3D5C] px-5"> 
        <img src="/logo.png" alt="logo"  className="h-20 w-20"/>
      </div>

      <h1 className="font-bold text-3xl mt-6 ml-5">Welcome, Mary</h1>

      <div className=" h-[300px] flex flex-col justify-between bg-gray-200 m-7 py-4 px-8 rounded-[20px]">
        <h1 className="font-bold text-8xl text-black">Rs.3,000</h1>
<div className="flex gap-7 flex-wrap" >

<Button className="bg-amber-500 font-bold text-2xl h-[60px]">Add Money</Button>
        <Button className="bg-amber-500 font-bold text-2xl h-[60px] ">Send Money</Button>
        <Button className="bg-amber-500 font-bold text-2xl h-[60px] ">Receive Money</Button>

</div>
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
