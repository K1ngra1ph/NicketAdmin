"use client";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import Table from "@/components/Table";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const fetchEvents = async () => {
    const res = await api.get(`/events?search=${search}&page=${page}`);
    setEvents(res.data.data || []);
  };

  useEffect(() => {
    fetchEvents();
  }, [search, page]);

  const columns = [
    { label: "Event Name", accessor: "name" },
    { label: "Status", accessor: "status" },
    { label: "Created", accessor: "createdAt" },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Events</h1>
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <Table columns={columns} data={events} />
      <Pagination page={page} totalPages={10} onPageChange={setPage} />
    </div>
  );
}
