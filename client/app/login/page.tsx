"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


const page = () => {
  const  router = useRouter();
  return (
    <div className="h-screen">
    <div className="w-full h-[70px] bg-[#3D3D5C] px-5"> 
      <img src="/logo.png" alt="logo"  className="h-20 w-20 "/>
    </div>
    <div className="flex flex-col justify-center items-center h-full">
    
      <Tabs
        defaultValue="login"
        className="w-[400px]">
        <TabsList className="w-full">
          <TabsTrigger value="login" className="w-full font-bold">Login</TabsTrigger>
          <TabsTrigger value="signup" className="w-full font-bold">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="login" className="flex flex-col gap-3">
         <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <Button onClick={()=>{router.push("/home")}} >Log in</Button>
        </TabsContent>
        <TabsContent value="signup" className="flex flex-col gap-3">
            <Input placeholder="Name" type="text" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <Input placeholder="Confirm Password" type="password" />
            <Button>Sign up</Button>
        </TabsContent>
      </Tabs>
    </div>
    </div>
  );
};

export default page;
