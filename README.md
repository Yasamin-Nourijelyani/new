# Rapid naming
Checkout our website here:

https://disoveryapp-6e148.firebaseapp.com/

* Our group report is under the Team/ folder

All our dev code is in **public** not in **src**.

-------

## Development Process

First clone the repository, then download all project dependencies by running:

```
npm install
```

Make the changes you need to the code and then use
```
npm run start
```

to view new changes locally when developing.

------ 
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

When it asks to keep the default folder (public) - input in build.

and then
```
firebase deploy
```
