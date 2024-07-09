<h1 align="center">Spreche Deutsch UI</h1>
 
<h2 align="center">Purpose of the Website/App:</h2>
 
<h3 align="center">To serve as the UI for my Spreche Deutsch application.</h3>
 
<h2 align="center">Technology used</h2>
 
<div align="center">
  <img align="center" src="/docs/readme-icons/react.svg" alt="HTML" height="50"/>
  <p align="center">React</p>
</div>

<div align="center">
  <img align="center" src="/docs/readme-icons/nextjs.svg" alt="HTML" height="50"/>
  <p align="center">NextJS</p>
</div>

<div align="center">
  <img align="center" src="/docs/readme-icons/tailwindcss.svg" alt="HTML" height="50"/>
  <p align="center">Tailwind CSS</p>
</div>

<div align="center">
  <img align="center" src="/docs/readme-icons/python.svg" alt="HTML" height="50"/>
  <p align="center">Python</p>
</div>

<div align="center">
  <img align="center" src="/docs/readme-icons/postgresql.svg" alt="HTML" height="50"/>
  <p align="center">Postgresql</p>
</div>

<h2 align="center">How The Application Works</h2>

- The application uses NextJS to render the site and its components.
- Tailwind CSS was used to style the application and manage dark mode functionality.
- The data is provided via Python FastAPI using a Postgresql database.
- State management is handled by Zustand which stores the data from each request.

<h2 align="center">What I Learnt</h2>

- Improved my experience with managing API calls and only making requests based on store state.
- Managed the data flow from the API by using a interface to model data structure.
- Integrated state management to store all the data for categories and translations.
- Practising smarter use of containers and components to keep the codebase scalable into the future.
- Refined my knowledge of animation libraries to provide better UX and feel to the application.

<h2 align="center">What Was The Biggest Challenge</h2>

The biggest challenge I faced was getting data from the API into the store and then into the UI in an efficient manner. I had to mirror the API interfaces with my UI interfaces for each request. The requests were made on application load and certain route navigations. Once the data was retrieved from the API I had to pass it into a store action which mapped the data into a model which went into the store. I also had to ensure API requests were only sent if data was missing from the store which required some state logic in each route component.
