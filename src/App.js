import React from 'react'
import AppHeader from './components/AppHeader'
import AppNav from './components/AppNav'
import RecordHeader from './components/RecordHeader'
import RecordTabs from './components/RecordTabs'
import RecordSearch from './components/RecordSearch'
import RecordActivity from './components/RecordActivity'
import RecordSecondary from './components/RecordSecondary'
import ProgressPath from './components/ProgressPath'

import './App.css'

function App () {
  return (
    <div className='App'>
      <AppHeader />
      <AppNav />

      <div className='slds-container_x-large slds-container_center'>
        <div className='slds-p-top_large'>
          <div className='slds-grid slds-gutters slds-wrap'>
            <div className='slds-col slds-size_1-of-1 slds-large-size_8-of-12'>
              <RecordHeader />
              <div className='slds-p-top_large'>
                <ProgressPath />
              </div>
              <div className='slds-p-top_large'>
                <RecordTabs />
              </div>
              <div className='slds-p-top_large'>
                <RecordSearch />
              </div>

              <div className='slds-p-top_large'>
                <RecordActivity />
              </div>
            </div>
            <div className='slds-col slds-size_1-of-1 slds-large-size_4-of-12'>
              <RecordSecondary />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
