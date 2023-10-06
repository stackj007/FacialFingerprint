import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'
import { Particles } from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { loadLinksPreset } from 'tsparticles-preset-links'

const PAT = 'd306b1ef55324eee93915df97e0e5989'
const USER_ID = 'z8qe93kvskhl'
const APP_ID = 'my-first-application-rvyxg2'
const MODEL_ID = 'face-detection'
const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105'
const IMAGE_URL =
  'https://samples.clarifai.com/metro-north.jpg'

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl: '',
      results: null,
    }
    this.detectFaces = this.detectFaces.bind(this)
  }

  detectFaces = (imageUrl) => {
    const url = `https://api.clarifai.com/v2/models/${MODEL_ID}/versions/${MODEL_VERSION_ID}/outputs`

    const requestBody = {
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: {
              url: imageUrl,
            },
          },
        },
      ],
    }

    const config = {
      headers: {
        Accept: 'application/json',
        Authorization: `Key ${PAT}`,
      },
    }

    axios
      .post(url, requestBody, config)
      .then((response) => {
        this.setState({ results: response.data })
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value,
      imageUrl: event.target.value,
    })
  }

  onButtonSubmit = () => {
    this.detectFaces(this.state.imageUrl)
  }

  // ######
  // <particles>
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
    // <particles/>
    // #######

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
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {this.state.imageUrl && (
          <img src={this.state.imageUrl} alt="Input" />
        )}
        {this.state.results && (
          <div>{JSON.stringify(this.state.results)}</div>
        )}
      </div>
    )
  }
}

export default App
