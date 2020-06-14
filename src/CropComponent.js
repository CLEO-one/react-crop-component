import React, { useState, useEffect } from 'react'
import html2canvas from 'html2canvas'
import { createPortal } from 'react-dom'

const CropPortal = ({ children, selector, onLoad }) => {
  useEffect(() => {
    onLoad()
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  return createPortal(children, selector)
}

const CropComponent = ({
  modalClassName,
  portalId = 'canvas-portal',
  Component,
  canvasConfigs,
  imgStyle,
  buttonGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonStyle = {
    padding: 8,
    margin: 8,
    background: '#273CAF',
    color: '#fff',
    border: 'none',
    outline: 'none',
  },
  filename = 'download.png',
  modalStyle = {
    position: 'fixed',
    left: 0,
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    bottom: 0,
    right: 0,
    background: 'rgba(3, 2, 38, 0.8)',
    zIndex: 9999,
  },
  downloadStyle = {
    padding: 8,
    margin: 8,
    background: '#36C2CE',
    color: '#fff',
  },

  DownloadButton = ({ canvasElement, onClick }) => (
    <a
      onClick={onClick}
      href={canvasElement && canvasElement.toDataURL()}
      download={filename}
      style={downloadStyle}
    >
      DOWNLOAD
    </a>
  ),
  CancelButton = ({ onClick }) => (
    <button style={buttonStyle} onClick={onClick}>
      CANCEL
    </button>
  ),
  CropButton = ({ onClick }) => (
    <button style={buttonStyle} onClick={onClick}>
      CROP COMPONENT
    </button>
  ),
}) => {
  const [crop, setCrop] = useState(false)
  const [canvasElement, setCanvasElement] = useState(null)
  const myPortalContainer = document.getElementById(portalId)
  myPortalContainer.style = 'position: fixed;top: 100%'
  return (
    <>
      <CropButton onClick={() => setCrop(true)} />
      {crop && (
        <>
          <CropPortal
            onLoad={() =>
              html2canvas(myPortalContainer, canvasConfigs).then((canvas) => {
                setCanvasElement(canvas)
              })
            }
            selector={myPortalContainer}
            children={canvasElement ? null : <Component />}
          />
          {canvasElement && (
            <div style={modalStyle}>
              <img
                style={imgStyle}
                src={canvasElement && canvasElement.toDataURL()}
                alt='Cropped Component'
              />
              <div style={buttonGroupStyle}>
                <CancelButton
                  onClick={() => {
                    setCrop(false)
                    setCanvasElement(null)
                  }}
                />
                <DownloadButton
                  canvasElement={canvasElement}
                  onClick={() => {
                    setCanvasElement(null)
                    setCrop(false)
                  }}
                />
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default CropComponent
