import React, { useEffect } from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import Button from '../../UI/Button'

const Header = () => {
  const {onClose, user} = useTelegram();

  return (
    <div className={'header'}>

      <Button onClick={onClose}>Закрыть</Button>
      <span className={'username'}>
        {user}
      </span>

    </div>
  )
}

export default Header