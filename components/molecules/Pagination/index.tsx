"use client";

type Props = { totalCount: number };

export default function Pagination({ totalCount }: Props) {
  return (
    <div className="join gap-x-1">
      <button className="btn join-item btn-sm">1</button>
      <button className="btn join-item btn-active btn-sm">2</button>
      <button className="btn join-item btn-sm">3</button>
      <button className="btn join-item btn-sm">4</button>
    </div>
  );
}
