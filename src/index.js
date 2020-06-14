import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CropComponent from './CropComponent'
import * as serviceWorker from './serviceWorker'
import Chart from './Chart'
import GithubLogo from './GithubLogo'

const TitleComponent = ({ title = 'Hi, Crop Me' }) => (
  <h1
    style={{
      backgroundColor: '#061A40',
      color: '#fff',
      width: 250,
      height: 250,
      fontSize: 32,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0,
    }}
  >
    {title}
  </h1>
)


ReactDOM.render(
  <React.StrictMode>
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <a
          href='https://github.com/cleo-one/react-crop-component'
          style={{ position: 'absolute', right: 8, top: 8 }}
        >
          <GithubLogo />
        </a>
        <TitleComponent />
        <CropComponent
          portalId='crop-portal'
          canvasConfigs={{
            width: 250,
            height: 250,
            innerWidth: 250,
            innerHeight: 250,
          }}
          imgStyle={{
            width: 250,
            height: 250,
          }}
          Component={TitleComponent}
        />

        <Chart />
        <CropComponent
          portalId='crop-portal'
          canvasConfigs={{
            width: 250,
            height: 65,
            innerWidth: 250,
            innerHeight: 65,
            backgroundColor: 'transparent',
          }}
          imgStyle={{
            width: 250,
            height: 65,
          }}
          Component={Chart}
        />
      </div>
    </>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
