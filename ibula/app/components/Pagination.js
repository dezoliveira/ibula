import { Pagination } from "react-bootstrap";

export default function MainPagination({currentPage, totalPages, onPageChange}) {
  const handlePageChange = (page) => {
    if (page !== currentPage) {
      onPageChange(page)
    }

    scroolToTop()
  }

  const scroolToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <Pagination>
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </>
  )
}