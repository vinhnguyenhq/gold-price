import * as React from 'react'
import { Link } from 'react-router-dom'

const AppLayout = ({ children }) => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <div className=" navbar-item"></div>
              <Link className="navbar-item is-active is-size-5 has-text-weight-semibold" to="/">
                Home
              </Link>
              <Link className="navbar-item is-size-5 has-text-weight-semibold" to="/gold">
                Gold
              </Link>
              <Link className="navbar-item is-size-5 has-text-weight-semibold" to="/currency">
                Currency
              </Link>
              <Link className="navbar-item is-size-5 has-text-weight-semibold" to="/about">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2"></div>
            </div>

            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">September 15, 2020</h2>
                    <h1 className="title">Exchange Rate Monitoring</h1>
                    <p>A web application to keep track the exchange rates</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container has-text-centered is-widescreen">{children}</div>
      </section>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Exchange Rates</strong>
          </p>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default AppLayout
