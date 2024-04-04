import Head from "next/head";
import Dashboard from "./dashboard";
import Header from "@/components/header";
import SideMenu from "@/components/sideMenu";
import { useSession } from "next-auth/react";
import Login from "@/components/login";
import scss from './Home.module.scss'

const Home:React.FC=()=> {
  const { data: session } = useSession();
  return (
    <>
     
      <main className={scss.main}>
        {session && <Dashboard/>}
        {!session && <Login/>}
      </main>
    </>
  );
}

export default Home;
