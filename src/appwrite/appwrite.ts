import { Client, Databases, Account } from 'node-appwrite';
export const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;
export const API_KEY = process.env.NEXT_PUBLIC_APPWRITE_API_KEY;
export const ENDPOINT_URL = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
export const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
export const COMPANIES_COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_COMPANIES;
export const STUDENTS_COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_STUDENTS;
// export const BUCKET_ID = import.meta.env.VITE_APPWRITE_BUCKET_ID;


const client=new Client();
client
.setEndpoint(ENDPOINT_URL||``)
.setProject(PROJECT_ID||``)

const account = new Account(client);
const databases = new Databases(client);


const createAdminClient= async () =>{
    const client =new Client()
    client
        .setEndpoint(ENDPOINT_URL||``)
        .setProject(PROJECT_ID||``)
        .setKey(API_KEY||``)

    return {
        get account(){
            return new Account(client);
        },
        get db(){
            return new Databases(client);
        },
    };

};

const createSessionClient= async (session: string) =>{
    const client =new Client()
    client
        .setEndpoint(ENDPOINT_URL||``)
        .setProject(PROJECT_ID||``)
    if(session){
        client.setSession(session);
    }

    return {
        get account(){
            return new Account(client);
        },
        get db(){
            return new Databases(client);
        },
    };

};


export {client,account,databases, createAdminClient, createSessionClient};