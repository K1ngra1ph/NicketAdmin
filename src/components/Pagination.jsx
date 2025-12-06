export default function Pagination({ page, total, setPage }) {
  return (
    <div className="flex justify-end gap-2 mt-4">
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>
      <button onClick={() => setPage(page + 1)} disabled={page * 10 >= total}>
        Next
      </button>
    </div>
  );
}
