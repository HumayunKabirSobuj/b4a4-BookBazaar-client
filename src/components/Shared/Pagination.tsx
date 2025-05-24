interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
     <div className="flex flex-wrap lg:justify-end justify-center gap-2 mt-8 mb-4 mr-6">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`min-w-[40px] px-2 py-1 rounded-lg border transition-all duration-300
            ${
              page === currentPage
                ? "bg-blue-600 text-white shadow-lg border-blue-600"
                : "bg-white text-gray-700 hover:bg-blue-50 border-gray-300"
            }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
