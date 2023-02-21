# Rapid naming
Checkout our website here:

https://disoveryapp-6e148.firebaseapp.com/

## Development Process

First clone the repository, then just run

```
npm install
```

to download all project dependencies when developing, make the changes you need to the code and then use
```
npm run start
```

to view new changes locally when developing.

## Deployment Process

Assuming you cloned the repository already and already have firebase CLI, you need to run

```
npm build
```

We host our application on firebase so then just do:
```
firebase deploy
```

If firebase problems when deploying or want to host on your own firebase project then

**DELETE:** 

- ./firebase
- firebase.json
- .firebaserc

and then do

```
firebase init
```

Select

- (Y) to proceed
- "Hosting: Configure files for FireBase Hosting and (optionally) set up Github action deploys

and then
```
firebase deploy
```
