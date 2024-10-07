import {createAdminClient, createSessionClient,DATABASE_ID,COMPANIES_COLLECTION_ID,STUDENTS_COLLECTION_ID,databases} from './appwrite';
import {ID} from 'appwrite';

const db={};

const collections=[
    {
        dbId: DATABASE_ID,
        id:COMPANIES_COLLECTION_ID,
        name: 'companies',
    },
    {
        dbId: DATABASE_ID,
        id:STUDENTS_COLLECTION_ID,
        name: 'students',
    }
];

collections.forEach((col)=>{
    db[col.name]={
        create:(payload,permissions,id=ID.unique())=>
           databases.createDocument(col.dbId,col.id,payload,permissions,id),
        update:(payload,permissions,id)=>
            databases.updateDocument(col.dbId,col.id,id,payload,permissions),
        delete:(id)=>
            databases.deleteDocument(col.dbId,col.id,id),
        list:(queries=[])=>
            databases.listDocuments(col.dbId,col.id,queries),
        get:(id)=>databases.getDocument(col.dbId,col.id,id)

    }
})



export default db;