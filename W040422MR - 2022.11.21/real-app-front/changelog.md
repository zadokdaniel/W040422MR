## home page component

```jsx
const Home = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 mt-4">
          <h1>
            Real<i className="bi bi-geo-fill"></i>App
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            neque accusamus pariatur reprehenderit nemo beatae facere obcaecati
            est impedit numquam.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
```

## navbar component

1. create navbar component and connect to App.jsx
2. copy sm navbar from bootstrap examples into the navbar.jsx component
3. fix to the desired structure (see commit)

## create footer component

```jsx
const Footer = () => {
  return (
    <footer className="border-top pt-3 py-2 text-center">
      <span>
        Real<i className="bi bi-geo-fill"></i>App
      </span>
      <span className="mx-2">&copy;</span>
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
```

## create basic layout in App.jsx component

```jsx
function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <header>HEADER</header>

      <main className="flex-fill container">MAIN</main>

      <footer>Footer</footer>
    </div>
  );
}
```

## install bootstrap and bootsrap-icons

`npm install bootstrap bootstrap-icons`

## start a new project

`npx create-react-app real-app-front`
