"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { fetchData } from "../client";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin=async()=>{
    if(!email || !password){
      setError("Please fill all fields");
      return;
    }
    const res = await fetchData("/login", "POST", {email, password}, {});

    if(res.status === 200){
      localStorage.setItem("token", res.data.token);
      router.push("/home");
    } else if(res.status === 401){
      setError("Invalid password");
      setSuccess("");
    } else if(res.status === 404){
      setError("User not found");
      setSuccess("");
    } else {
      setError("Something went wrong");
      setSuccess("");
    }
  };

  const handleRegister=async()=>{
    if(!email || !password || !name || !confirmPassword){
      setError("Please fill all fields");
      return;
    }
    if(password !== confirmPassword){
      setError("Passwords do not match");
      return;
    }
    const res = await fetchData("/register", "POST", {name, email, password}, {});
    if(res.status === 200){
      setSuccess("User created successfully");
      setError("");
    } else if(res.status === 409){
      setError("User already exists");
      setSuccess("");
    } else {
      setError("Something went wrong");
      setSuccess("");
    }
  };
  return (
    <div className="h-screen">
      <div className="w-full h-[70px] bg-[#3D3D5C] px-5">
        <img
          src="/logo.png"
          alt="logo"
          className="h-20 w-20 "
        />
      </div>
      <div className="flex flex-col justify-center items-center h-full">
        <Tabs
          defaultValue="login"
          className="w-[400px]">
          <TabsList className="w-full">
            <TabsTrigger
              value="login"
              className="w-full font-bold">
              Login
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="w-full font-bold">
              Sign Up
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="login"
            className="flex flex-col gap-3">
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-[12px]">{error}</p>}
            <Button
              onClick={() => {
                handleLogin();
              }}>
              Log in
            </Button>
          </TabsContent>
          <TabsContent
            value="signup"
            className="flex flex-col gap-3">
            <Input
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {success && <p className="text-green-500 text-[12px]">{success}</p>}
            {error && <p className="text-red-500 text-[12px]">{error}</p>}
            <Button onClick={()=>{
              handleRegister();
            }}>Sign up</Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
