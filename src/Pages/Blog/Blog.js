import React from "react";

const Blog = () => {
  return (
    <div className="mt-20 container mx-auto">
      <div>
        <h1 className="text-4xl text-center mt-10 mb-5 underline">Blog</h1>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">What is cors ?</div>
        <div className="collapse-content">
          <p>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request. <br />
            For security reasons, browsers restrict cross-origin HTTP requests
            initiated from scripts. For example, XMLHttpRequest and the Fetch
            API follow the same-origin policy. This means that a web application
            using those APIs can only request resources from the same origin the
            application was loaded from unless the response from other origins
            includes the right CORS headers.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </div>
        <div className="collapse-content">
          <p>
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more. <br />
            Usually, authentication by a server entails the use of a user name
            and password. Other ways to authenticate can be through cards,
            retina scans, voice recognition, and fingerprints. <br />
            Auth0, MongoDB, Passport, Okta are the most popular alternatives and
            competitors to Firebase Authentication.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How does the private route work?
        </div>
        <div className="collapse-content">
          <p>
            The react private route component renders child components (
            children ) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property. <br />
            The private route component is used to protect selected pages in a
            React app from unauthenticated users.The react private route
            component renders child components (children) if the user is logged
            in. If not logged in the user is redirected to the /login page with
            the return url passed in the location state property.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          What is Node? How does Node work?
        </div>
        <div className="collapse-content">
          <p>
            Node.js is a JavaScript runtime environment that achieves low
            latency and high throughput by taking a 'non-blocking' approach to
            serving requests. In other words, Node.js wastes no time or
            resources on waiting for I/O requests to return. <br />
            It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive. <br />
            Node.js accepts the request from the clients and sends the response,
            while working with the request node.js handles them with a single
            thread. To operate I/O operations or requests node.js use the
            concept of threads. Thread is a sequence of instructions that the
            server needs to perform. It runs parallel on the server to provide
            the information to multiple clients. Node.js is an event loop
            single-threaded language. It can handle concurrent requests with a
            single thread without blocking it for one request.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
