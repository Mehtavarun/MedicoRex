# MedicoRex
This is Medical Management System created by Node.JS and MongoDB basically API in which there basically four schemas with which user can create profiles of patients, there information regarding health will be stored and reports and medicine information can be performed as CRUD operations.

## Getting Things Started
To run your the app on your machine:
1.Clone the repository or download on desktop, move into the folder of repository. 
2.Run the following command to install all packages.
```
npm install
```
### Usage
1.You can easily use the API in which visiting can give you your token that can be used for deleting the patient profile
```
localhost:6500/token/<username>
```

2.For creating new profile, medicine, report, patient data you can visit either of following: (Note: it should be done using 'POST' request)
```
localhost:6500/api/profile/create

localhost:6500/api/report/create

localhost:6500/api/patient/create

localhost:6500/api/medicine/create
```
3. For deleting profile, medicine, report, patient data you can visit either of following: (Note: it should be done using 'DELETE' request and for deleting profile the token is used as parameter)
```
localhost:6500/api/profile/create

localhost:6500/api/report/create

localhost:6500/api/patient/create

localhost:6500/api/medicine/create
```

#### Built with:
MongoDB, Express.JS, Node.JS
