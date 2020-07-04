# Front-end code for Alex's website

To start developing, first clone this repository
(``git clone https://github.com/alvyjudy/alexwebsite.git``) and intialize it
by running ``npm install`` inside the directory.

There are two ways to view the website in a development setting. First, run
``npm run devServer``. This will start a server process on localhost port
3001 which you can view in your browser. Any code base change will also be
updated without having to restart it. Second, run ``npm run build`` to generate
the bundle file inside a ``dist/`` folder which could be served into a simple
HTTP server by running ``npm run serve``.

Image files are hosted on a public google cloud storage bucket and the website
requires a fileIndex obtained from there. To generate this index, run ``npm
run updateIndex``. When starting the server in the aforementioned manner, this
command is run automatically.


To build locally, invoke ``npm run build``

To deploy locally after the build, invoke ``npm run start``

To deploy locally built files to google cloud app engine, run ``gcloud app
deploy``

To build and deploy on google cloud, invoke ``gcloud builds submit .``

The above four tasks can be chained for convenience,
