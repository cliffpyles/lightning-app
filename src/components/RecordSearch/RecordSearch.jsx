import React from 'react'
import { Input, Button } from '@salesforce/design-system-react'

import './RecordSearch.css'

function RecordSearch ({ children }) {
  return (
    <div className='slds-tabs_scoped'>
      <ul className='slds-tabs_scoped__nav' role='tablist'>
        <li
          className='slds-tabs_scoped__item'
          title='Item One'
          role='presentation'
        >
          <a
            className='slds-tabs_scoped__link'
            href='javascript:void(0);'
            role='tab'
            tabindex='-1'
            aria-selected='false'
            aria-controls='tab-scoped-1'
            id='tab-scoped-1__item'
          >
            Item One
          </a>
        </li>
        <li
          className='slds-tabs_scoped__item slds-is-active'
          title='Item Two'
          role='presentation'
        >
          <a
            className='slds-tabs_scoped__link'
            href='javascript:void(0);'
            role='tab'
            tabindex='0'
            aria-selected='true'
            aria-controls='tab-scoped-2'
            id='tab-scoped-2__item'
          >
            Item Two
          </a>
        </li>
        <li
          className='slds-tabs_scoped__item'
          title='Item Three'
          role='presentation'
        >
          <a
            className='slds-tabs_scoped__link'
            href='javascript:void(0);'
            role='tab'
            tabindex='-1'
            aria-selected='false'
            aria-controls='tab-scoped-3'
            id='tab-scoped-3__item'
          >
            Item Three
          </a>
        </li>
      </ul>
      <div
        id='tab-scoped-1'
        className='slds-tabs_scoped__content slds-hide'
        role='tabpanel'
        aria-labelledby='tab-scoped-1__item'
      >
        Item One Content
      </div>
      <div
        id='tab-scoped-2'
        className='slds-tabs_scoped__content slds-show'
        role='tabpanel'
        aria-labelledby='tab-scoped-2__item'
      >
        <div className='slds-grid slds-gutters'>
          <div className='slds-col slds-size_10-of-12'>
            <Input />
          </div>
          <div className='slds-col slds-size_2-of-12'>
            <Button>Search</Button>
          </div>
        </div>
      </div>
      <div
        id='tab-scoped-3'
        className='slds-tabs_scoped__content slds-hide'
        role='tabpanel'
        aria-labelledby='tab-scoped-3__item'
      >
        Item Three Content
      </div>
    </div>
  )
}

export default RecordSearch
