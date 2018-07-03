import React, { Component } from 'react';
import Reveal from 'reveal.js';
import MathJax from 'react-mathjax2';
import '../node_modules/reveal.js/css/reveal.css';
import '../node_modules/reveal.js/css/theme/moon.css';
import './App.css';

const tf = 'tf(t,d) = log(1 + f_(t,d))';

class App extends Component {
  componentDidMount() {
    Reveal.initialize({
      width: '100%',
      height: '100%'
    });
  }

  render() {
    return (
      <div className="demo reveal">
        <div className="slides">
          <section>
            <header className="main-header">S1 Title</header>
            <div className="slide-body">
              <MathJax.Context input="ascii">
                <div>
                  <MathJax.Node>{tf}</MathJax.Node>
                </div>
              </MathJax.Context>
            </div>
          </section>
          <section>S2</section>
          <section>S3</section>
        </div>
      </div>
    );
  }
}

export default App;
