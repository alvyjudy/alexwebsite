# Project overview

This is the frontend codebase that's intended to communicate with the 
[backend](https://github.com/alvyjudy/alexwebsite-backend-2). The frontend
will be served on a dedicated server that also acts as a proxy, such that
incoming client request will be forwarded to the backend to avoid CORS issue.

There are two main branch: master and future. Future is experimental and master
is stable. Each has their own CI/CD set up.

- future build: https://frontend-future-dot-kahului.nn.r.appspot.com
- master build: https://kahului.nn.r.appspot.com


# Development guide

To start developing, first clone this repository
(``git clone https://github.com/alvyjudy/alexwebsite.git``)  and invoke
``yarn install`` to initialize the project.

To build locally, invoke ``yarn run build``

To deploy locally after the build, invoke ``yarn run start``

To deploy locally built files to google cloud app engine, run ``gcloud app
deploy``

To build and deploy on google cloud, invoke ``gcloud builds submit .``

To develop the front end, invoke ``npx webpack -w --mode production``, this
will continuously bundle files from ``src`` to ``dist``, then invoke
``PORT=3001 node serve.js`` to serve those files on ``http://localhost:3001``.

## Communicating with the backend

All communications with the backend should be done with redux thunk, defined
in a series of files ending with `.thunk.js` under the `states` folder. 

Given that both the frontend and backend could be deployed with different
versions, it is important to pair them up properly. This is done by prepending
the following line of code on top of each `thunk` file:

```javascript
const BACKEND = process.env.API + '/api'
```

Given the problems associated with CORS such as preflight request, it seems
that proxying is a better option. The ParcelJS API actually plays well with
express and it appears that a proxy middleware could easily be the solution.

## On Google Cloud

This repository is connected to google cloud and a new version of the website
will be built and hosted when a tag matching ``^v[0-9]+$`` (e.g. ``v1``,
``v2``, ..., ``v12``) is pushed. This triggers the Cloud Build to perform
the steps specified in ``npm run build`` and App Engine to perform ``npm
run start``.

(WIP) The server is configured to redirect all request with the prefix ``/api/``
to a dedicated backend server.
