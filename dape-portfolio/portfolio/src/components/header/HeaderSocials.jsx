import React from 'react'
import {BsLinkedin,BsMessenger} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/dabe-ventigan-309a67288/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/dapeventigan" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://m.me/trashdape" target="_blank" rel="noreferrer"><BsMessenger/></a>
    </div>
  )
}

export default HeaderSocials