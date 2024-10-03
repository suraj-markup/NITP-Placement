import { createSessionClient } from "@/appwrite/appwrite";
import {DATABASE_ID,COMPANIES_COLLECTION_ID} from '@/appwrite/appwrite';
import { cookies } from "next/headers";
export async function GET(requets){

    const sessionCookie= cookies().get('session');

    try{
        // const {db} = await createSessionClient(sessionCookie.value);
        // const {documents:data}= await db.listDocuments(DATABASE_ID,COMPANIES_COLLECTION_ID);
            
        const data=[];
        return Response.json({data});
    

    }
    catch(e){
        console.error(e);
        return Response.json("Access Denies",{
            status:403,
        });
    }
}
    