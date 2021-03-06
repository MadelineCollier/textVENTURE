/////////////////////////////////////////////////////////////////////////////////////////////////////////
///////                                                                                               ///
////// This directory is automatically compiled by Webpack                                           ////
/////  Only use these pack files to reference code in app/javascript so that code will be compiled  /////
////    To reference this file, add <%= javascript_pack_tag 'application' %> to a layout file      //////
///                                                                                               ///////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
//////////////////////////////////////////////////////////////////////
/////                                                              ///
//// Import .jsx files below to include them in the React element ////
///                                                              /////
//////////////////////////////////////////////////////////////////////
import Console from '../Console.jsx'

document.addEventListener('DOMContentLoaded', () => {
  const reactRoot = document.getElementById('state-content')
  const reactProps = reactRoot.dataset.reactProps

  if (reactProps) {
    const data = JSON.parse(reactProps)
    ReactDOM.render(<Console log={data} />, reactRoot)
  }
})