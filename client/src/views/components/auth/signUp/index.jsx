import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import '../../../../styles/components/auth/signUp/signUp.css'
import FormButton from '../../reuseables/FormButton';
import InputFields from '../../reuseables/InputFields';
import AuthHeader from '../../reuseables/AuthHeader';
import openEye from '../../../../assets/images/svg/openEye.svg'
import eyeClosed from '../../../../assets/images/svg/eyeClosed.svg'
import googleLogo from '../../../../assets/images/svg/googleLogo.svg'
import linkedinLogo from '../../../../assets/images/svg/linkedinLogo.svg'
import AuthPages from '../../reuseables/AuthPages';
import Axios from 'axios'

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
};