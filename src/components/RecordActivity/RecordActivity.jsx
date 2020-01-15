import React from 'react'
import useState from './useState'

import './RecordActivity.css'

function RecordActivity ({ children }) {
  const [state, dispatch] = useState()

  return (
    <ul className='slds-timeline'>
      <li>
        <div className='slds-timeline__item_expandable slds-timeline__item_task'>
          <span className='slds-assistive-text'>task</span>
          <div className='slds-media'>
            <div className='slds-media__figure'>
              <button
                className='slds-button slds-button_icon'
                title='Toggle details for Review proposals for EBC deck with larger team and have marketing review this'
                aria-controls='task-item-base'
              >
                <svg
                  className='slds-button__icon slds-timeline__details-action-icon'
                  aria-hidden='true'
                >
                  <use href='/assets/icons/utility-sprite/svg/symbols.svg#switch'></use>
                </svg>
                <span className='slds-assistive-text'>
                  Toggle details for Review proposals for EBC deck with larger
                  team and have marketing review this
                </span>
              </button>
              <div
                className='slds-icon_container slds-icon-standard-task slds-timeline__icon'
                title='task'
              >
                <svg className='slds-icon slds-icon_small' aria-hidden='true'>
                  <use href='/assets/icons/standard-sprite/svg/symbols.svg#task'></use>
                </svg>
              </div>
            </div>
            <div className='slds-media__body'>
              <div className='slds-grid slds-grid_align-spread slds-timeline__trigger'>
                <div className='slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space'>
                  <div className='slds-checkbox'>
                    <input
                      type='checkbox'
                      name='options'
                      id='checkbox-unique-id-17'
                      value='checkbox-unique-id-17'
                    />
                    <label
                      className='slds-checkbox__label'
                      for='checkbox-unique-id-17'
                    >
                      <span className='slds-checkbox_faux'></span>
                      <span className='slds-form-element__label slds-assistive-text'>
                        Mark Review proposals for EBC deck with larger team and
                        have marketing review this complete
                      </span>
                    </label>
                  </div>
                  <h3
                    className='slds-truncate'
                    title='Review proposals for EBC deck with larger team and have marketing review this'
                  >
                    <a href='javascript:void(0);'>
                      <strong>
                        Review proposals for EBC deck with larger team and have
                        marketing review this
                      </strong>
                    </a>
                  </h3>
                  <div className='slds-no-flex'>
                    <span
                      className='slds-icon_container slds-icon-utility-rotate'
                      title='Recurring Task'
                    >
                      <svg
                        className='slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small'
                        aria-hidden='true'
                      >
                        <use href='/assets/icons/utility-sprite/svg/symbols.svg#rotate'></use>
                      </svg>
                      <span className='slds-assistive-text'>
                        Recurring Task
                      </span>
                    </span>
                  </div>
                </div>
                <div className='slds-timeline__actions slds-timeline__actions_inline'>
                  <p className='slds-timeline__date'>9:00am | 3/20/17</p>
                  <button
                    className='slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small'
                    aria-haspopup='true'
                    title='More Options for this item'
                  >
                    <svg className='slds-button__icon' aria-hidden='true'>
                      <use href='/assets/icons/utility-sprite/svg/symbols.svg#down'></use>
                    </svg>
                    <span className='slds-assistive-text'>
                      More Options for this item
                    </span>
                  </button>
                </div>
              </div>
              <p className='slds-m-horizontal_xx-small'>
                <a href='javascript:void(0);'>You</a> created a task with
                <a href='javascript:void(0);'>Charlie Gomez</a>
              </p>
              <article
                className='slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small'
                id='task-item-base'
                aria-hidden='true'
              >
                <ul className='slds-list_horizontal slds-wrap'>
                  <li className='slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small'>
                    <span className='slds-text-title slds-p-bottom_x-small'>
                      Name
                    </span>
                    <span
                      className='slds-text-body_medium slds-truncate'
                      title='Charlie Gomez'
                    >
                      <a href='javascript:void(0);'>Charlie Gomez</a>
                    </span>
                  </li>
                  <li className='slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small'>
                    <span className='slds-text-title slds-p-bottom_x-small'>
                      Related To
                    </span>
                    <span
                      className='slds-text-body_medium slds-truncate'
                      title='Tesla Cloudhub + Anypoint Connectors'
                    >
                      <a href='javascript:void(0);'>
                        Tesla Cloudhub + Anypoint Connectors
                      </a>
                    </span>
                  </li>
                </ul>
                <div>
                  <span className='slds-text-title'>Description</span>
                  <p className='slds-p-top_x-small'>
                    Need to finalize proposals and brand details before the
                    meeting
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className='slds-timeline__item_expandable slds-timeline__item_call'>
          <span className='slds-assistive-text'>log_a_call</span>
          <div className='slds-media'>
            <div className='slds-media__figure'>
              <button
                className='slds-button slds-button_icon'
                title='Toggle details for Mobile conversation on Monday'
                aria-controls='call-item-base'
              >
                <svg
                  className='slds-button__icon slds-timeline__details-action-icon'
                  aria-hidden='true'
                >
                  <use href='/assets/icons/utility-sprite/svg/symbols.svg#switch'></use>
                </svg>
                <span className='slds-assistive-text'>
                  Toggle details for Mobile conversation on Monday
                </span>
              </button>
              <div
                className='slds-icon_container slds-icon-standard-log-a-call slds-timeline__icon'
                title='call'
              >
                <svg className='slds-icon slds-icon_small' aria-hidden='true'>
                  <use href='/assets/icons/standard-sprite/svg/symbols.svg#log_a_call'></use>
                </svg>
              </div>
            </div>
            <div className='slds-media__body'>
              <div className='slds-grid slds-grid_align-spread slds-timeline__trigger'>
                <div className='slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space'>
                  <h3
                    className='slds-truncate'
                    title='Mobile conversation on Monday'
                  >
                    <a href='javascript:void(0);'>
                      <strong>Mobile conversation on Monday</strong>
                    </a>
                  </h3>
                </div>
                <div className='slds-timeline__actions slds-timeline__actions_inline'>
                  <p className='slds-timeline__date'>10:00am | 3/23/17</p>
                  <button
                    className='slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small'
                    aria-haspopup='true'
                    title='More Options for this item'
                  >
                    <svg className='slds-button__icon' aria-hidden='true'>
                      <use href='/assets/icons/utility-sprite/svg/symbols.svg#down'></use>
                    </svg>
                    <span className='slds-assistive-text'>
                      More Options for this item
                    </span>
                  </button>
                </div>
              </div>
              <p className='slds-m-horizontal_xx-small'>
                <a href='javascript:void(0);'>You</a> logged a call with
                <a href='javascript:void(0);'>Adam Chan</a>
              </p>
              <article
                className='slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small'
                id='call-item-base'
                aria-hidden='true'
              >
                <ul className='slds-list_horizontal slds-wrap'>
                  <li className='slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small'>
                    <span className='slds-text-title slds-p-bottom_x-small'>
                      Name
                    </span>
                    <span
                      className='slds-text-body_medium slds-truncate'
                      title='Adam Chan'
                    >
                      <a href='javascript:void(0);'>Adam Chan</a>
                    </span>
                  </li>
                  <li className='slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small'>
                    <span className='slds-text-title slds-p-bottom_x-small'>
                      Related To
                    </span>
                    <span
                      className='slds-text-body_medium slds-truncate'
                      title='Tesla Cloudhub + Anypoint Connectors'
                    >
                      <a href='javascript:void(0);'>
                        Tesla Cloudhub + Anypoint Connectors
                      </a>
                    </span>
                  </li>
                </ul>
                <div>
                  <span className='slds-text-title'>Description</span>
                  <p className='slds-p-top_x-small'>
                    Adam seemed interested in closing this deal quickly! Let’s
                    move.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className='slds-timeline__item_expandable slds-timeline__item_email'>
          <span className='slds-assistive-text'>email</span>
          <div className='slds-media'>
            <div className='slds-media__figure'>
              <button
                className='slds-button slds-button_icon'
                title='Toggle details for Re: Mobile conversation on Monday with the new global team'
                aria-controls='email-item-base'
              >
                <svg
                  className='slds-button__icon slds-timeline__details-action-icon'
                  aria-hidden='true'
                >
                  <use href='/assets/icons/utility-sprite/svg/symbols.svg#switch'></use>
                </svg>
                <span className='slds-assistive-text'>
                  Toggle details for Re: Mobile conversation on Monday with the
                  new global team
                </span>
              </button>
              <div
                className='slds-icon_container slds-icon-standard-email slds-timeline__icon'
                title='email'
              >
                <svg className='slds-icon slds-icon_small' aria-hidden='true'>
                  <use href='/assets/icons/standard-sprite/svg/symbols.svg#email'></use>
                </svg>
              </div>
            </div>
            <div className='slds-media__body'>
              <div className='slds-grid slds-grid_align-spread slds-timeline__trigger'>
                <div className='slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space'>
                  <h3
                    className='slds-truncate'
                    title='Re: Mobile conversation on Monday with the new global team'
                  >
                    <a href='javascript:void(0);'>
                      <strong>
                        Re: Mobile conversation on Monday with the new global
                        team
                      </strong>
                    </a>
                  </h3>
                  <div className='slds-no-flex'>
                    <span
                      className='slds-icon_container slds-icon-utility-groups'
                      title='Group email'
                    >
                      <svg
                        className='slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small'
                        aria-hidden='true'
                      >
                        <use href='/assets/icons/utility-sprite/svg/symbols.svg#groups'></use>
                      </svg>
                      <span className='slds-assistive-text'>Group email</span>
                    </span>
                    <span
                      className='slds-icon_container slds-icon-utility-attach'
                      title='Has attachments'
                    >
                      <svg
                        className='slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small'
                        aria-hidden='true'
                      >
                        <use href='/assets/icons/utility-sprite/svg/symbols.svg#attach'></use>
                      </svg>
                      <span className='slds-assistive-text'>
                        Has attachments
                      </span>
                    </span>
                  </div>
                </div>
                <div className='slds-timeline__actions slds-timeline__actions_inline'>
                  <p className='slds-timeline__date'>10:00am | 3/24/17</p>
                  <button
                    className='slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small'
                    aria-haspopup='true'
                    title='More Options for this item'
                  >
                    <svg className='slds-button__icon' aria-hidden='true'>
                      <use href='/assets/icons/utility-sprite/svg/symbols.svg#down'></use>
                    </svg>
                    <span className='slds-assistive-text'>
                      More Options for this item
                    </span>
                  </button>
                </div>
              </div>
              <p className='slds-m-horizontal_xx-small'>
                <a href='javascript:void(0);'>You</a> emailed
                <a href='javascript:void(0);'>Lea Chan</a>
              </p>
              <article
                className='slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small'
                id='email-item-base'
                aria-hidden='true'
              >
                <ul className='slds-list_horizontal slds-wrap'>
                  <li className='slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small'>
                    <span className='slds-text-title slds-p-bottom_x-small'>
                      From Address
                    </span>
                    <span
                      className='slds-text-body_medium slds-truncate'
                      title='Jackie Dewar'
                    >
                      <a href='javascript:void(0);'>Jackie Dewar</a>
                    </span>
                  </li>
                  <li className='slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small'>
                    <span className='slds-text-title slds-p-bottom_x-small'>
                      To Address
                    </span>
                    <span
                      className='slds-text-body_medium slds-truncate'
                      title='Lea Chan'
                    >
                      <a href='javascript:void(0);'>Lea Chan</a>
                    </span>
                  </li>
                </ul>
                <div>
                  <span className='slds-text-title'>Text Body</span>
                  <p className='slds-p-top_x-small'>
                    Hi everyone, Thanks for meeting with the team today and
                    going through the proposals we saw. This goes on and wraps
                    if needed.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className='slds-timeline__item_expandable slds-timeline__item_event'>
          <span className='slds-assistive-text'>event</span>
          <div className='slds-media'>
            <div className='slds-media__figure'>
              <button
                className='slds-button slds-button_icon'
                title='Toggle details for EBC Follow up call'
                aria-controls='event-item-base'
              >
                <svg
                  className='slds-button__icon slds-timeline__details-action-icon'
                  aria-hidden='true'
                >
                  <use href='/assets/icons/utility-sprite/svg/symbols.svg#switch'></use>
                </svg>
                <span className='slds-assistive-text'>
                  Toggle details for EBC Follow up call
                </span>
              </button>
              <div
                className='slds-icon_container slds-icon-standard-event slds-timeline__icon'
                title='event'
              >
                <svg className='slds-icon slds-icon_small' aria-hidden='true'>
                  <use href='/assets/icons/standard-sprite/svg/symbols.svg#event'></use>
                </svg>
              </div>
            </div>
            <div className='slds-media__body'>
              <div className='slds-grid slds-grid_align-spread slds-timeline__trigger'>
                <div className='slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space'>
                  <h3 className='slds-truncate' title='EBC Follow up call'>
                    <a href='javascript:void(0);'>
                      <strong>EBC Follow up call</strong>
                    </a>
                  </h3>
                  <div className='slds-no-flex'>
                    <span
                      className='slds-icon_container slds-icon-utility-world'
                      title='Public sharing'
                    >
                      <svg
                        className='slds-icon slds-icon_xx-small slds-icon-text-default slds-m-left_x-small'
                        aria-hidden='true'
                      >
                        <use href='/assets/icons/utility-sprite/svg/symbols.svg#world'></use>
                      </svg>
                      <span className='slds-assistive-text'>
                        Public sharing
                      </span>
                    </span>
                  </div>
                </div>
                <div className='slds-timeline__actions slds-timeline__actions_inline'>
                  <p className='slds-timeline__date'>10:30am | 3/24/17</p>
                  <button
                    className='slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small'
                    aria-haspopup='true'
                    title='More Options for this item'
                  >
                    <svg className='slds-button__icon' aria-hidden='true'>
                      <use href='/assets/icons/utility-sprite/svg/symbols.svg#down'></use>
                    </svg>
                    <span className='slds-assistive-text'>
                      More Options for this item
                    </span>
                  </button>
                </div>
              </div>
              <p className='slds-m-horizontal_xx-small'>
                <a href='javascript:void(0);'>You</a> created an event with
                <a href='javascript:void(0);'>Aida Lee</a> and 5 others
              </p>
              <article
                className='slds-box slds-timeline__item_details slds-theme_shade slds-m-top_x-small slds-m-horizontal_xx-small'
                id='event-item-base'
                aria-hidden='true'
              >
                <ul className='slds-list_horizontal slds-wrap'>
                  <li className='slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small'>
                    <span className='slds-text-title slds-p-bottom_x-small'>
                      Location
                    </span>
                    <span
                      className='slds-text-body_medium slds-truncate'
                      title='Westen St. Francis, San Francisco, CA, 94622'
                    >
                      <a href='javascript:void(0);'>
                        Westen St. Francis, San Francisco, CA, 94622
                      </a>
                    </span>
                  </li>
                  <li className='slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small'>
                    <span className='slds-text-title slds-p-bottom_x-small'>
                      Attendees
                    </span>
                    <span
                      className='slds-text-body_medium slds-truncate'
                      title='Jason Dewar (Organizer) + 5 others'
                    >
                      <a href='javascript:void(0);'>
                        Jason Dewar (Organizer) + 5 others
                      </a>
                    </span>
                  </li>
                  <li className='slds-grid slds-grid_vertical slds-size_1-of-2 slds-p-bottom_small'>
                    <span className='slds-text-title slds-p-bottom_x-small'>
                      When
                    </span>
                    <span
                      className='slds-text-body_medium slds-truncate'
                      title='March 26, 10:00 AM - 11:00 AM'
                    >
                      <a href='javascript:void(0);'>
                        March 26, 10:00 AM - 11:00 AM
                      </a>
                    </span>
                  </li>
                </ul>
                <div>
                  <span className='slds-text-title'>Description</span>
                  <p className='slds-p-top_x-small'>
                    Let&#x27;s discuss the 2017 product roadmap and address any
                    questions
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default RecordActivity
