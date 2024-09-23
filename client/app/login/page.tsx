import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <Tabs defaultValue="login" className="w-[400px] bg-black rounded p-2">
  <TabsList className="grid w-full grid-cols-2 bg-neutral-700 rounded">
    <TabsTrigger value="login" className="text-white rounded data-[state=active]:bg-black data-[state=active]:text-white data-[state=inactive]:hover:underline">Login</TabsTrigger>
    <TabsTrigger value="signup" className="text-white rounded data-[state=active]:bg-black data-[state=active]:text-white data-[state=inactive]:hover:underline">Sign Up</TabsTrigger>
  </TabsList>
  <TabsContent value="login" className="text-white flex flex-col gap-2">
    <h1 className="text-2xl">Login</h1>
    <Input type="email" placeholder="Email" className="placeholder:text-slate-400 rounded" />
    <Input type="password" placeholder="Password" className="placeholder:text-slate-400 rounded" />
    <Button className="rounded bg-white text-black hover:text-white hover:bg-[#FF9505]">Login</Button>
  </TabsContent>
  <TabsContent value="signup" className="text-white flex flex-col gap-2">
    <h1 className="text-2xl">Signup</h1>
    <Input type="text" placeholder="Name" className="placeholder:text-slate-400 rounded" />
    <Input type="email" placeholder="Email" className="placeholder:text-slate-400 rounded" />
    <Input type="password" placeholder="Password" className="placeholder:text-slate-400 rounded" />
    <Button className="rounded bg-white text-black hover:text-white hover:bg-[#FF9505]">Signup</Button>
  </TabsContent>
</Tabs>

    </div>
  )
};

export default page