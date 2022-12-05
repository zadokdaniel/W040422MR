## use formik in signup

## install formik

`npm install formik`

## create common Input component

- create Input component
- use it in signup page's form

## create signup page

- create sign up component page
- route to the component on correlated navlink

## add routes and use links and navlinks

- add routes in App.jsx for home and about
- replace <a> tags with Links and NavLinks components

## install react-router-dom package

`npm install react-router-dom`

## extract header from home and about into PageHeader component

```jsx
const PageHeader = ({ title, description }) => {
  return (
    <>
      <div className="row">
        <div className="col-12 mt-4">
          <h1>{title}</h1>
        </div>
      </div>

      {description ? (
        <div className="row">
          <div className="col-12">
            <p>{description}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PageHeader;
```

## about page component

```jsx
const About = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 mt-4">
          <h1>
            About Real<i className="bi bi-geo-fill"></i>App
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

export default About;
```

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