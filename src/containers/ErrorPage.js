import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ErrorPage extends Component {
  render(){
    return (
      <main id="errorPage">
        <section>
        </section>
        <section className="page-title">
          <h1>Page Not Found</h1>
          <p><span>Hmm... seems like you found a missing page</span></p>
          <p><span>You can go back to the homepage <Link to="/">here</Link></span></p>
        </section>
        <section>
        </section>
      </main>
    )
  }
}

export default ErrorPage;
