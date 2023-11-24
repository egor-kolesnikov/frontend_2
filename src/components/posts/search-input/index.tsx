'use client'

import styles from './search-input.module.scss'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SearchInput() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const [timeoutState, setTimeoutState] = useState<number>()

  const handleSearch = (value: string) => {
    const currentTimeout = window.setTimeout(() => {
      const params = new URLSearchParams(searchParams)
      params.set('page', '1')
      value ? params.set('title_like', value) : params.delete('title_like')
      replace(`${pathname}?${params.toString()}`)
      setTimeoutState(undefined)
    }, 1000)
    timeoutState && window.clearTimeout(timeoutState)
    setTimeoutState(currentTimeout)
  }
  return (
    <label className={styles['search-input']}>
      <span className={styles['search-input__text']}>Search</span>
      <input
        className={styles['search-input__input']}
        name="title_like"
        type="text"
        onChange={e => handleSearch(e.target.value)}
        defaultValue={searchParams.get('title_like')?.toString()}
      />
    </label>
  )
}
