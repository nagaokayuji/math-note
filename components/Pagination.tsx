import Link from "./Link";
import PaginationType from "../types/pagination";

export default function Pagination({
  totalPages,
  currentPage,
  basePath,
}: PaginationType) {
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className="pt-6 pb-8 space-y-2 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button
            // rel="previous"
            className="cursor-auto disabled:opacity-50"
            disabled={!prevPage}
          >
            Previous
          </button>
        )}
        {prevPage && (
          <Link href={`${basePath}/${currentPage - 1}`}>
            <button
            // rel="previous"
            >
              Previous
            </button>
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button
            // rel="next"
            className="cursor-auto disabled:opacity-50"
            disabled={!nextPage}
          >
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`${basePath}/${currentPage + 1}`}>
            <button
            // rel="next"
            >
              Next
            </button>
          </Link>
        )}
      </nav>
    </div>
  );
}