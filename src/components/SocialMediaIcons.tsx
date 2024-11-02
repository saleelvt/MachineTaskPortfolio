




import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { LINKEDIN_PROFILE, GITHUB_PROFILE, INSTAGRAM_PROFILE } from '../constants'

const SocialMediaIcons: React.FC = React.memo(() => {
  return (
    <>
      <a href={LINKEDIN_PROFILE} target="_blank">
        <AiFillLinkedin className="icon-style" />
      </a>
      <a href={GITHUB_PROFILE} target="_blank">
        <AiFillGithub className="icon-style" />
      </a>
      <a href={INSTAGRAM_PROFILE} target="_blank">
        <AiFillInstagram className="icon-style" />
      </a>
    </>
  );
})

export default SocialMediaIcons;