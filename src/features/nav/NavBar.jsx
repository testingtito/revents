import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';

export const NavBar = ({setFormOpen}) => {
  return (
    <Menu inverted fixed='top'>
          <Container>
            <Menu.Item header>
              <img src='/assets/logo.png' alt='logo' style={{marginRight:'15px'}}/>
              Re-vents
            </Menu.Item>
            <Menu.Item name='Events' />
            <Menu.Item>
              {/* 그냥 setFormOpen(true)를 하면 즉시 실행되어서 반드시 ()=>을 해줘야 한다.  */}
              <Button onClick={()=>setFormOpen(true)} positive inverted content='Create Event' />
            </Menu.Item>
            <Menu.Item position='right'>
              <Button basic inverted content='Login' />
              <Button basic inverted content='Register' style={{ marginLeft: '0.5em' }} />
            </Menu.Item>
          </Container>
        </Menu>
  )
}

