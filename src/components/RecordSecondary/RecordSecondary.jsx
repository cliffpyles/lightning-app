import React from 'react'
import {
  Card,
  MediaObject,
  Icon,
  IconSettings
} from '@salesforce/design-system-react'

class RecordSecondary extends React.Component {
  render () {
    return (
      <IconSettings iconPath='/assets/icons'>
        <Card heading='First Card'>
          <div className='slds-p-around_large'>
            <MediaObject
              body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda.'
              figure={<Icon category='standard' name='user' size='large' />}
            />
          </div>
        </Card>
        <Card heading='Second Card'>
          <div className='slds-p-around_large'>
            <MediaObject
              body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda.'
              figure={<Icon category='standard' name='user' size='large' />}
            />
          </div>
        </Card>
        <Card heading='Third Card'>
          <div className='slds-p-around_large'>
            <MediaObject
              body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat minus molestias reprehenderit consequuntur sapiente. Modi veritatis totam accusantium numquam assumenda.'
              figure={<Icon category='standard' name='user' size='large' />}
            />
          </div>
        </Card>
      </IconSettings>
    )
  }
}

export default RecordSecondary
