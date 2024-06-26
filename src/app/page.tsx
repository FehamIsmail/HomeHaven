"use client";
import connection from "@/app/api/supabase/SupabaseContextProvider";
import {useEffect, useState} from "react";
import Header from "@/app/components/navbars/Header";
import Hero from "@/app/components/landing/Hero";

export default function Home() {
    const [userData, setUserData] = useState<any>(null)
    const supabase = connection

    const signout = async () => {
        try {
            // Remove user_role and user_id from local storage
            localStorage.removeItem('user_role');
            localStorage.removeItem('user_id');

            await supabase.auth.signOut();
            window.location.href = '/';
        } catch (error:any) {
            console.error('Error signing out:', error.message);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userSession = await supabase.auth.getSession()
                if (userSession) {
                    setUserData(userSession.data.session?.user.email)
                }
            } catch (error) {
                console.log('Error fetching user data: ', error)
            }
        }
        fetchData().catch(console.error)

    }, []);



    return (
        <main>
            <Header/>
            <Hero/>
            {/*<nav className={"mt-4 gap-4 flex justify-center"}>*/}

            {/*    <button onClick={() => window.location.href = '/login'}*/}
            {/*            className={"bg-blue-500 w-20 p-2 rounded-md hover:bg-blue-600 text-white"}>Log in*/}
            {/*    </button>*/}
            {/*    <button onClick={() => window.location.href = '/signup'}*/}
            {/*            className={"bg-blue-500 w-20 p-2 rounded-md hover:bg-blue-600 text-white"}>Sign up*/}
            {/*    </button>*/}
            {/*</nav>*/}

            {/*<div className={"mt-10 p-4 text-center flex flex-col gap-4 items-center"}>*/}
            {/*    <h1>Home</h1>*/}

            {/*    <p><b>Logged in as:</b> {userData || "not logged in"}</p>*/}
            {/*    <button onClick={signout} className={"bg-red-500 w-20 p-2 rounded-md hover:bg-red-600 text-white"}>Sign*/}
            {/*        out*/}
            {/*    </button>*/}
            {/*</div>*/}
        </main>
    );
}
