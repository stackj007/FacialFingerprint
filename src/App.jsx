import { useState } from 'react'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'

import { useCallback } from 'react'
import { Particles } from 'react-tsparticles'

import { loadSlim } from 'tsparticles-slim'
import { loadLinksPreset } from 'tsparticles-preset-links'

export default function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine)
    await loadSlim(engine)
    await loadLinksPreset(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])

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

  return (
    <div className="App">
      <Particles
        className="particles"
        id="tsparticles"
        options={particlesOptions}
        init={particlesInit}
        loaded={particlesLoaded}
      />

      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*
      <FaceRecognition />} */}
    </div>
  )
}
