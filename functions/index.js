const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((req, res) => {
  res.send("Hello from Firebase!");
});

exports.getScreams = functions.https.onRequest((req, res) => {
  admin.firestore().collection('screams').get()
    .then((data) => {
      const screams = [];
      data.forEach(doc => {
        screams.push(doc.data())
      });
      console.log(screams);
      res.send(screams);
    })
    .catch((err) => {
      console.log(err);
    })
});