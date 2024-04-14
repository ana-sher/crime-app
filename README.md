# Crime App
React app for displaying data of UK Police open API on map and through charts view.

![Demo](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2g1bGZoZmFqZnNveHN3Z294MXlnazZidDV1MHdya2NrcWx1MXN0ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GgLblVkrwWF6nnmfmN/giphy.gif)
## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm start
```

Then navigate to [https://localhost:3000/](https://localhost:3000/) (it is by default for npm start script, you can change it on other port if you would want to in `package.json`). 

For displaying data you need to be running backend api as well on port `:7062`. If you changed the port for API please change it in `src/services/http-service.ts` as well.