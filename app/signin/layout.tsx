import { Chilanka } from "next/font/google";
import { Children } from "react";

export default function({children}:{children:React.ReactNode}){
    return <div>
        <div className="border flex justify-center pd-4"> Sign in now and get 20% off</div>
        <div>{children}</div>
    </div>
}