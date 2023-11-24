'use client'

import styles from './pagination.module.scss'
import ReactPaginate from 'react-paginate'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'

type TProps = {
  totalPages: number
  itemsPerPage: number
}

export default function Pagination({ totalPages }: TProps) {
  const itemsPerPage = 10
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const currentPage = Number(searchParams.get('page')) || 1

  useEffect(() => {
    replace(createPageURL(currentPage))
  }, [])

  const pageCount = Math.ceil(totalPages / itemsPerPage)

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  const handlePageClick = (e: { selected: number }) => {
    replace(createPageURL(e.selected + 1))
  }
  return (
    <ReactPaginate
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="< previous"
      pageClassName={styles['page-item']}
      previousClassName={styles['page-item']}
      previousLinkClassName="page-link"
      nextClassName={styles['page-item']}
      breakLabel="..."
      breakClassName={styles['page-item']}
      containerClassName={styles.pagination}
      activeClassName={styles.active}
      renderOnZeroPageCount={null}
    />
  )
}
