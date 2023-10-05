import React, { Component } from 'react'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'
import { Particles } from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { loadLinksPreset } from 'tsparticles-preset-links'

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }

  // #######
  // particles
  particlesInit = async (engine) => {
    console.log(engine)
    await loadSlim(engine)
    await loadLinksPreset(engine)
  }

  particlesLoaded = async (container) => {
    await console.log(container)
  }

  render() {
    const particlesOptions = {
      preset: 'links',
      background: {
        color: {
          value: '',
        },
      },
      particles: {
        links: {
          color: '#3ca9d1',
          opacity: 5,
        },
      },
    }
    // #######
    // particles

    return (
      <div className="App">
        <Particles
          className="particles"
          id="tsparticles"
          options={particlesOptions}
          init={this.particlesInit}
          loaded={this.particlesLoaded}
        />

        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} />
      </div>
    )
  }
}

export default App
