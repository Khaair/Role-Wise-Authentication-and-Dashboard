import { ReactElement, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { getUpdatedUrl } from "../../utils/updateUrl";

const Pagination = ({ total }: any): ReactElement => {
  const limit= 6;
  console.log("total",total)
  const history = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  const page: any = queryParams?.get("page");
  const initialPage: any = page !== null ? parseInt(page, 10) - 1 : null; // Subtract 1 to match array index
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [totalPages, setTotalPages] = useState<number>(0);
  useEffect(() => {
    setTotalPages(Math.ceil(total / limit));
  }, [limit, total]);

  const handlePageClick = async (data: any) => {
    const selectedPage = data.selected + 1;
    const newOffset = selectedPage;
    (await currentPage) &&
      history(getUpdatedUrl("page", `${data.selected + 1}`));
    setCurrentPage(newOffset);
   
  };
  return (
    <div className="global-pagination-wrapper react-pagination-wrapper">
      <div className="grid grid-cols-1 gap-4 mt-10">
        {total > limit && (
          <div className="text-right">
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              pageCount={totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              initialPage={page !== null ? initialPage : 0}
              activeClassName={
                page !== null && currentPage === parseInt(page, 10)
                  ? "active"
                  : "active"
              }
              // forcePage={offset / limit}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;