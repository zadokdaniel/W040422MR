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
