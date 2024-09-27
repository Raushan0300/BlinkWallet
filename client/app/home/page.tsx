"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { fetchData } from "../client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const Page = () => {
  const [name, setName] = useState<string>("");
  const [balance, setBalance] = useState<number>(0);
  const [history, setHistory] = useState<any>([]);
  const [amount, setAmount] = useState<string>("");

  useEffect(() => {
    const fetchWalletData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
      }
      const res = await fetchData("/wallet", "GET", {}, { token });
      if (res.status === 200) {
        setName(res.data.name);
        setBalance(res.data.balance);
      } else if (res.status === 404) {
        window.location.href = "/login";
      } else {
        console.log("Something went wrong");
      }
    };
    const fetchHistoryData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
      }
      const res = await fetchData("/history", "GET", {}, { token });
      if (res.status === 200) {
        setHistory(res.data);
      } else if (res.status === 404) {
        window.location.href = "/login";
      } else {
        console.log("Something went wrong");
      }
    };
    const getAllData = async () => {
      await fetchWalletData();
      await fetchHistoryData();
    };
    getAllData();
  }, []);

  const handleAmountChange = (e: any) => {
    const value = e.target.value;
    
    if (/^\d*$/.test(value)) {
      setAmount(value);
    } else {
      return;
    }
  };

  const handleAddMoney = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
    const Intamount = parseInt(amount);
    const res = await fetchData("/add-money", "POST", { amount: Intamount }, { token });
    if (res.status === 200) {
      setBalance(res.data.balance);
    } else if (res.status === 404) {
      window.location.href = "/login";
    } else {
      console.log("Something went wrong");
    }
  };

  return (
    <div>
      <div className="w-full h-[70px] bg-[#3D3D5C] px-5">
        <img
          src="/logo.png"
          alt="logo"
          className="h-20 w-20"
        />
      </div>

      <h1 className="font-bold text-3xl mt-6 ml-5">Welcome, {name}</h1>

      <div className=" h-[300px] flex flex-col justify-between bg-gray-200 m-7 py-4 px-8 rounded-[20px]">
        <h1 className="font-bold text-8xl text-black">Rs. {balance}</h1>
        <div className="flex gap-7 flex-wrap">
          {/* <Button className="bg-amber-500 font-bold text-2xl h-[60px]">
            Add Money
          </Button> */}
          <Dialog>
            <DialogTrigger>
              <div className="px-5 py-2 flex flex-col items-center justify-center rounded-lg bg-amber-500 font-bold text-2xl h-[60px] text-[#333] hover:bg-white cursor-pointer">
                Add Money
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Money</DialogTitle>
                <DialogDescription>
                  Add Money to your Wallet
                </DialogDescription>
              </DialogHeader>
              <Input placeholder="Enter Amount" type="text" value={amount} onChange={(e)=>{handleAmountChange(e)}} />
              <Button className="bg-amber-500 font-bold" onClick={()=>{handleAddMoney()}}>Add Money</Button>
            </DialogContent>
          </Dialog>

          <div className="px-5 py-2 flex flex-col items-center justify-center rounded-lg bg-amber-500 font-bold text-2xl h-[60px] text-[#333] hover:bg-white cursor-pointer">
                Send Money
              </div>
              <div className="px-5 py-2 flex flex-col items-center justify-center rounded-lg bg-amber-500 font-bold text-2xl h-[60px] text-[#333] hover:bg-white cursor-pointer">
                Request Money
              </div>
        </div>
      </div>

      <h1 className=" text-3xl mt-6 ml-5">Transaction History:</h1>
      <hr className=" ml-5 mr-5 border-t-2 border-gray-400" />

      <div className="flex flex-col gap-4 m-5">
        {history.count > 0 ? (
          history.history.map((item: any, index: any) => (
            <div
              key={index}
              className="flex justify-between">
                <div className="flex flex-col">
                  <h1>{item.name}</h1>
                  <p className="text-slate-400">{item.type}</p>
                </div>
              <h1>{item.amount}</h1>
            </div>
          ))
        ) : (
          <h1>No transactions yet</h1>
        )}
      </div>
    </div>
  );
};

export default Page;
