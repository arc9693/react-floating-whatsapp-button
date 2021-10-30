import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp-button'
import 'react-floating-whatsapp-button/dist/index.css'

interface FloatingWhatsAppProps {
  phone?: string
  message?: string
  size?: string
  backgroundColor?: string
  position?: string
  popupMessage?: string
  showPopup?: boolean
  showOnIE?: boolean
  autoOpenTimeout?: number
  headerColor?: string
  headerTitle?: string
  zIndex?: number
  buttonImage?: string
}

let FloatingWhatsAppInitialPropValues: FloatingWhatsAppProps = {
  phone: '+919999999999',
  message: '',
  size: '70px',
  backgroundColor: '#25D366',
  position: 'right',
  popupMessage: 'Hello, how can we help you?',
  showPopup: false,
  showOnIE: true,
  autoOpenTimeout: 2000,
  headerColor: '#128C7E',
  headerTitle: 'WhatsApp Chat',
  buttonImage:
    'data:image/png;base64,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',
  zIndex: 5
}

const App = () => {
  const [
    floatingWhatsAppPropValues,
    setFloatingWhatsAppPropValues
  ] = React.useState(FloatingWhatsAppInitialPropValues)

  const onFppUpdate = (e: React.FormEvent<any>): void => {
    const curr = floatingWhatsAppPropValues
    curr[e.currentTarget.name] = e.currentTarget.value
    setFloatingWhatsAppPropValues({ ...floatingWhatsAppPropValues, ...curr })
  }

  return (
    <div className='container-fluid'>
      <div className='row bg-dark'>
        <h3 className='text-center text-white mt-5 mb-5'>
          Welcome to the Demo of <b>react-floating-whatsapp-button</b>
        </h3>
      </div>
      <div className='row'>
        <p>Note: Change values in the input boxes to modify configuration.</p>
        <div className='col-12'>
          <div className='input-group mb-3'>
            <span className='input-group-text'>Phone number</span>
            <input
              type='text'
              className='form-control'
              placeholder='Phone number'
              aria-label='Phone number'
              onChange={onFppUpdate}
              value={floatingWhatsAppPropValues.phone}
              name='phone'
            />
          </div>
          <div className='input-group mb-3'>
            <span className='input-group-text'>Z-index</span>
            <input
              type='number'
              className='form-control'
              placeholder='Z-index'
              aria-label='Z-index'
              onChange={onFppUpdate}
              value={floatingWhatsAppPropValues.zIndex}
              name='zIndex'
            />
          </div>
          <div className='input-group mb-3'>
            <span className='input-group-text'>Popup Message</span>
            <input
              type='string'
              className='form-control'
              placeholder='Popup Message'
              aria-label='Popup Message'
              onChange={onFppUpdate}
              value={floatingWhatsAppPropValues.popupMessage}
              name='popupMessage'
            />
          </div>
          <div className='input-group mb-3'>
            <span className='input-group-text'>Popup Auto Open Timeout</span>
            <input
              type='number'
              className='form-control'
              placeholder='Popup Auto Open Timeout'
              aria-label='Popup Auto Open Timeout'
              onChange={onFppUpdate}
              value={floatingWhatsAppPropValues.autoOpenTimeout}
              name='autoOpenTimeout'
            />
          </div>
          <div className='input-group mb-3'>
            <span className='input-group-text'>Header Color</span>
            <input
              type='color'
              className='form-control'
              placeholder='Header Color'
              aria-label='Header Color'
              onChange={onFppUpdate}
              value={floatingWhatsAppPropValues.headerColor}
              name='headerColor'
              style={{
                height: 'auto'
              }}
            />
          </div>
          <div className='input-group mb-3'>
            <span className='input-group-text'>Header Title</span>
            <input
              type='string'
              className='form-control'
              placeholder='Header Title'
              aria-label='Header Title'
              onChange={onFppUpdate}
              value={floatingWhatsAppPropValues.headerTitle}
              name='headerTitle'
            />
          </div>
          <div className='input-group mb-3'>
            <span className='input-group-text'>
              Position
              <br /> (right/left)
            </span>
            <input
              type='string'
              className='form-control'
              placeholder='Position'
              aria-label='Position'
              onChange={onFppUpdate}
              value={floatingWhatsAppPropValues.position}
              name='position'
              style={{
                height: 'auto'
              }}
            />
          </div>
          <div className='input-group mb-3'>
            <span className='input-group-text'>Button size</span>
            <input
              type='string'
              className='form-control'
              placeholder='Button size'
              aria-label='Button size'
              onChange={onFppUpdate}
              value={floatingWhatsAppPropValues.size}
              name='size'
            />
          </div>
          <div className='input-group mb-3'>
            <span className='input-group-text'>
              Button Image Background Color
            </span>
            <input
              type='color'
              className='form-control'
              placeholder='Button Image Background Color'
              aria-label='Button Image Background Color'
              onChange={onFppUpdate}
              value={floatingWhatsAppPropValues.backgroundColor}
              name='backgroundColor'
              style={{
                height: 'auto'
              }}
            />
          </div>
          <div className='input-group mb-5'>
            <span className='input-group-text'>
              Button Image <br /> (Base64 image string)
            </span>
            <textarea
              rows={7}
              className='form-control'
              aria-label='Base64 image string'
              value={floatingWhatsAppPropValues.buttonImage}
              onChange={onFppUpdate}
              name='buttonImage'
            ></textarea>
          </div>
        </div>
      </div>
      <FloatingWhatsApp
        buttonImage={floatingWhatsAppPropValues.buttonImage}
        phone={floatingWhatsAppPropValues.phone}
        zIndex={floatingWhatsAppPropValues.zIndex}
        popupMessage={floatingWhatsAppPropValues.popupMessage}
        backgroundColor={floatingWhatsAppPropValues.backgroundColor}
        position={floatingWhatsAppPropValues.position}
        headerColor={floatingWhatsAppPropValues.headerColor}
        headerTitle={floatingWhatsAppPropValues.headerTitle}
        autoOpenTimeout={floatingWhatsAppPropValues.autoOpenTimeout}
        size={floatingWhatsAppPropValues.size}
      />
    </div>
  )
}

export default App
