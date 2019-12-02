# AR-Test-2

Implementation of usage [AR.js](https://github.com/jeromeetienne/AR.js) with three.js in React

## How to run this project?

1. ```git clone https://github.com/denisstasyev/AR-Test-2.git```
2. ```cd AR-Test-2```
3. ```node testServer.js```
3. ```npm start``` or ```sudo npm start```
4. Go to ```http://localhost:3000``` in your Browser and check out result of my work 😀

## My experience with AR.js

[AR.js](https://github.com/jeromeetienne/AR.js) is an interesting thing that can be used to create Augmented Reality (AR) on the web. Starting from 2017 (the year AR.js appeared) almost every month new articles are published on how to create a website with AR in 10 minutes. This is true if you want to create a site with one HTML file. But let's take a look around. Most modern web applications use frameworks to simplify development. This repository contains all my experience with AR.js, the experience of embedding it in a React application.

### A brief look at AR.js basics

AR.js is a library that allows you to draw graphics on top of a marker (which is a specific picture). AR.js uses [ARToolKit](https://github.com/artoolkit/jsartoolkit5) technology to detect marker. [ARToolKit](https://github.com/artoolkit/jsartoolkit5) was created to detect a specific image, so AR.js cannot work without a marker. However, you can change the marker image to your own (with some limitations due to recognition difficulties).

For drawing graphics on top of the marker AR.js has two options. You can use [A-Frame](https://aframe.io/) (https://github.com/aframevr/aframe) or [three.js](https://threejs.org/) (https://github.com/mrdoob/three.js/).

### A-Frame VS. three.js

> My goal is to create a website for the react with the ability to view various models.

A-Frame is a superstructure over three.js, which allows developers to use simple custom HTML tags instead of using a lot of code created to run three.js.

Initially, I wanted to simplify the development and tried to use A-Frame with AR.js in React. The result of my work was the creation of [repository](https://github.com/denisstasyev/AR-Test). However, when I wanted to embed the resulting code into [my E-Gift project](https://github.com/denisstasyev/E-Gifts), it completely broke all CSS styles. Therefore, I decided to try to embed AR.js using three.js. You can see the result now in this repository.

### What's in this repository?

It contains ViewGift container with all app logic. ViewerAR is the main component to create AR with AR.js and three.js. If you are not familiar with three.js, then I advise you to first check out ViewerVR in order to get more experience with three.js.

### Key findings that I made

1. It is best to embed AR.js in your React application using <script> tag in public/index.html. Also AR.js requires global three.js, so you cannot use it separately as a package from NPM. AR.js itself is also very poorly adapted for NPM? so I do not recommend you use it from [NPM](https://www.npmjs.com/package/ar.js).
2. AR.js does not support ```embedded``` property of A-Frame now (AR.js 2.0.8). It only supports full screen operation (but you can draw your user interface (UI) on top of the camera 😀).
3. The only way to avoid scrolling the camera is to use CSS property ```overflow: hidden;``` for ```body```.
4. AR.js has no opportunity to turn off camera from code now. The only way to do this is to use ```window.location.reload();``` from JavaScript. That's why you cannot use special URL for AR with React Router.
  
5. three.js: it is quite hard to add custom loader any 3D models format. I use GLTF format in this project. It loads simple GLTF file, but then some textures are loaded separately. That's why you cannot add this simple file into your frontend app: you need some backend to share static models. I use Express for Node JS here. There is GLB format, which is archive of GLTF, but three.js has no loader for them now.

### My results

AR.js is a very cool thing I mean, but using it in a complex project can cause a number of problems. I hope I helped you save thousands of hours trying to figure out answers to basic questions about AR.js with this repository 😀

I got a few ideas while browsing [this archieved repository](https://github.com/marmelab/sketch-by-phone)

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
