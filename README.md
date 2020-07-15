# Front-end code for Alex's website

To start developing, first clone this repository
(``git clone https://github.com/alvyjudy/alexwebsite.git``)  and invoke
``npm install`` to initialize the project.

To build locally, invoke ``npm run build``

To deploy locally after the build, invoke ``npm run start``

To deploy locally built files to google cloud app engine, run ``gcloud app
deploy``

To build and deploy on google cloud, invoke ``gcloud builds submit .``

To develop the front end, invoke ``npx webpack -w --mode production``, this
will continuously bundle files from ``src`` to ``dist``, then invoke
``PORT=3001 node serve.js`` to serve those files on ``http://localhost:3001``.

# On Google Cloud

This repository is connected to google cloud and a new version of the website
will be built and hosted upon when a tag matching ``^v[0-9]+$`` (e.g. ``v1``,
``v2``, ..., ``v12``) is pushed. This triggers the Cloud Build to perform
the steps specified in ``npm run build`` and App Engine to perform ``npm
start``.

(WIP) The server is configured to redirect all request with the prefix ``/api/``
to a dedicated backend server.
