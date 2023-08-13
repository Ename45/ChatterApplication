import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import '../../../../styles/components/auth/signUp/signUp.css'
import FormButton from '../../reusable/FormButton';
import InputFields from '../../reusable/InputFields';
import AuthHeader from '../../reusable/AuthHeader';
import openEye from '../../../../assets/images/svg/openEye.svg'
import eyeClosed from '../../../../assets/images/svg/eyeClosed.svg'
import googleLogo from '../../../../assets/images/svg/googleLogo.svg'
import linkedinLogo from '../../../../assets/images/svg/linkedinLogo.svg'
import AuthPages from '../../reusable/AuthPages';
import Axios from 'axios'
import { signUpUrl, codeConfirmationUrl } from '../../../../api/Api.jsx'

export {
  React,
  useState,
  useNavigate,
  AuthPages,
  Axios,
  AuthHeader,
  FormButton,
  InputFields,
  openEye,
  eyeClosed,
  googleLogo,
  linkedinLogo,
  signUpUrl,
  codeConfirmationUrl
};