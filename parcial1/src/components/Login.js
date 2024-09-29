import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import '../i18n';

const Login = (props) => {
  const [ t, i18n ] = useTranslation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const onButtonClick = () => {
  setEmailError('')
  setPasswordError('')
  if ('' === email) {
    setEmailError(t('mailErrorEmpty'))
    return
  }

  if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    setEmailError(t('mailErrorValid'))
    return
  }

  if ('' === password) {
    setPasswordError(t('passwordErrorEmpty'))
    return
  }

  if (password.length < 7) {
    setPasswordError(t('passwordErrorValid'))
    return
  }
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder={t("mail")}
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder={t('password')}
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </div>
  )
}

export default Login