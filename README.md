# Fast Radius Code Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Additional dependencies are `@emotion/styled` and `uuid`.

[View the deployed site](https://gifted-mirzakhani-d03557.netlify.com/).

## Intent:

The purpose of this app is to parse an ascii STL file and display information about each file.

Example File:

```
solid simple
  facet normal 0 0 0
      outer loop
          vertex 0 0 0
          vertex 1 0 0
          vertex 1 1 1
      endloop
  endfacet
  facet normal 0 0 0
      outer loop
          vertex 0 0 0
          vertex 0 1 1
          vertex 1 1 1
      endloop
  endfacet
endsolid simple
```

### Usage

Just fork or clone this repository, run `yarn` or `npm install`.
Then run `yarn start` or `npm run start`.

-   **Development:**
    `yarn start` will run a development server with hot reloading at <localhost:3000>
-   **Production:**
    `yarn build` will bundle everything up on your `/dist` folder

### To-Dos:

-   [ ] Add bounding-box data.
-   [ ] Add surface-area data.
-   [ ] Add units radio buttons?
-   [ ] Add LinkedIn link URL
-   [ ] Add sort to list?
