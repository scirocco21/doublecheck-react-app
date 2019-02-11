import React from 'react';
import TextForm from '../Containers/TextForm.js'
import { FaCheckDouble } from 'react-icons/fa'
import SubmitButton from './SubmitButton'
import { titleGenerator } from '../titleGenerator.js'

const Home = props => (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to DoubleCheck!
        </h1>
        <br/>
        <FaCheckDouble />
        <hr/>
        <h4>
          Are you sending the right message?
        </h4>
        <p>
          Paste your texts and tweets into DoubleCheck to find out.
        </p>
        <p>Pro Tip: Use short passages between 2-4 sentences for optimal results</p>
        {props.buttonVisible &&
          <SubmitButton/>
        }
        {!props.buttonVisible && <TextForm defaultTitle={titleGenerator()}/>}
      </header>
    </div>
)
export default Home;
