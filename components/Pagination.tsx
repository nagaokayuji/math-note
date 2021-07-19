import Link from "./Link";
import PaginationType from "../types/pagination";
import { POSTS_PER_PAGE } from "../lib/constants";

export default function Pagination({
  totalPages,
  currentPage,
  basePath,
  allCount,
}: PaginationType) {
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;
  const startCount = (currentPage - 1) * POSTS_PER_PAGE + 1;
  const endCount = Math.min(allCount, currentPage * POSTS_PER_PAGE);

  return (
    <div className="pt-6 pb-8 space-y-2 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!prevPage}
          >
            Previous
          </button>
        )}
        {prevPage && (
          <Link href={`${basePath}/${currentPage - 1}`}>
            <button>Previous</button>
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!nextPage}
          >
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`${basePath}/${currentPage + 1}`}>
            <button>Next</button>
          </Link>
        )}
      </nav>
      <p>
        {startCount} - {endCount} / {allCount} 件
      </p>
    </div>
  );
}
