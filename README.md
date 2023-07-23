## React & GraphQL Testing Approach/Stack

# Architecture
1. Local Request Path
npm start -> package.json/{start} -> react-scripts-start -> Node.js Dev Server (hot module loading) -> Dev Server = Compile/build{webPack} -> Dev Server Listener/localhost:port -> loop-back interface | Node hot-reload etc.

2. Remote Request Path (potential)
Client -> URL web/https res. (ip)->dns record -> Port 443 -> Nginx -> App.js , server serves React files -> Client makes req. -> React app API client (api.js) -> Port 443 APi server, GraphQL -> HTTP response -> React App -> Client machine.

# Testing Libraries:
1. Jest, @testing-library/react

## Test Strategy
# React App
1. Unit Tests __tests__
- BookSearch Component
- BookSearch.test.js
# What it does
1. Renders BookSearch.js component in the jsDOM "virtual dom"
2. Check that the BookSearch component renders and can be interacted with
3. Check that the search box and the search button elements are inside the virtual DOM
4. Use the explicit assertion expect to check these elements are in the DOM
# Why do this?
- One might rightly question whether using the jsDOM/virtual dom to load the component is really that great a test, but there are benefits.
1. We check the component loads in this isolated test. If a typo/mistake creeps in that breaks the component, we'll catch it's inability to render here prior to actually running it in a browser
2. Make sure that higher level tests that rely on this specified behaviour don't experience errors up the chain, since they're validated here first
# Drawbacks?
- It's not a real browser's DOM API, so therefore there could be "environment" related issues, between isolated test-env and the real browser
- JsDOM might not handle async behaviours exactly like a real browser's DOM
- CSS etc. jsDOM does not have a rendering engine, therefore styles/sizes/positions won't be accounted for


