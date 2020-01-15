import React from 'react'

function ProgressPath ({ children }) {
  return (
    <article className='slds-card'>
      <div className='slds-card__body slds-card__body_inner'>
        <div className='slds-path'>
          <div className='slds-grid slds-path__track'>
            <div className='slds-grid slds-path__scroller-container'>
              <div className='slds-path__scroller' role='application'>
                <div className='slds-path__scroller_inner'>
                  <ul
                    className='slds-path__nav'
                    role='listbox'
                    aria-orientation='horizontal'
                  >
                    <li
                      className='slds-path__item slds-is-complete'
                      role='presentation'
                    >
                      <a
                        aria-selected='false'
                        className='slds-path__link'
                        href='javascript:void(0);'
                        id='path-6'
                        role='option'
                        tabindex='-1'
                      >
                        <span className='slds-path__stage'>
                          <svg
                            className='slds-icon slds-icon_x-small'
                            aria-hidden='true'
                          >
                            <use href='/assets/icons/utility-sprite/svg/symbols.svg#check'></use>
                          </svg>
                          <span className='slds-assistive-text'>
                            Stage Complete
                          </span>
                        </span>
                        <span className='slds-path__title'>Contacted</span>
                      </a>
                    </li>
                    <li
                      className='slds-path__item slds-is-complete'
                      role='presentation'
                    >
                      <a
                        aria-selected='false'
                        className='slds-path__link'
                        href='javascript:void(0);'
                        id='path-7'
                        role='option'
                        tabindex='-1'
                      >
                        <span className='slds-path__stage'>
                          <svg
                            className='slds-icon slds-icon_x-small'
                            aria-hidden='true'
                          >
                            <use href='/assets/icons/utility-sprite/svg/symbols.svg#check'></use>
                          </svg>
                          <span className='slds-assistive-text'>
                            Stage Complete
                          </span>
                        </span>
                        <span className='slds-path__title'>Open</span>
                      </a>
                    </li>
                    <li
                      className='slds-path__item slds-is-complete'
                      role='presentation'
                    >
                      <a
                        aria-selected='false'
                        className='slds-path__link'
                        href='javascript:void(0);'
                        id='path-8'
                        role='option'
                        tabindex='-1'
                      >
                        <span className='slds-path__stage'>
                          <svg
                            className='slds-icon slds-icon_x-small'
                            aria-hidden='true'
                          >
                            <use href='/assets/icons/utility-sprite/svg/symbols.svg#check'></use>
                          </svg>
                          <span className='slds-assistive-text'>
                            Stage Complete
                          </span>
                        </span>
                        <span className='slds-path__title'>Unqualified</span>
                      </a>
                    </li>
                    <li
                      className='slds-path__item slds-is-current slds-is-active'
                      role='presentation'
                    >
                      <a
                        aria-selected='true'
                        className='slds-path__link'
                        href='javascript:void(0);'
                        id='path-9'
                        role='option'
                        tabindex='0'
                      >
                        <span className='slds-path__stage'>
                          <svg
                            className='slds-icon slds-icon_x-small'
                            aria-hidden='true'
                          >
                            <use href='/assets/icons/utility-sprite/svg/symbols.svg#check'></use>
                          </svg>
                          <span className='slds-assistive-text'>
                            Current Stage:
                          </span>
                        </span>
                        <span className='slds-path__title'>Nurturing</span>
                      </a>
                    </li>
                    <li
                      className='slds-path__item slds-is-incomplete'
                      role='presentation'
                    >
                      <a
                        aria-selected='false'
                        className='slds-path__link'
                        href='javascript:void(0);'
                        id='path-10'
                        role='option'
                        tabindex='-1'
                      >
                        <span className='slds-path__stage'>
                          <svg
                            className='slds-icon slds-icon_x-small'
                            aria-hidden='true'
                          >
                            <use href='/assets/icons/utility-sprite/svg/symbols.svg#check'></use>
                          </svg>
                        </span>
                        <span className='slds-path__title'>Closed</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProgressPath
