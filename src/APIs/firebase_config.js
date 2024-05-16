const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const admin=require("firebase-admin")
const credentials=require('../../Firebasekey/markme-10176-firebase-adminsdk-b6cqj-99a96c23d2.json')


admin.initializeApp({
    credential: cert(credentials)
});

const db=admin.firestore();

module.exports=db;

