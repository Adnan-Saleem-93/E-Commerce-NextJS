"use client";

type Props = { totalCount: number };

export default function Pagination({ totalCount }: Props) {
  return (
    <div className="join gap-x-1">
      <button className="btn join-item">1</button>
      <button className="btn join-item btn-active">2</button>
      <button className="btn join-item">3</button>
      <button className="btn join-item">4</button>
    </div>
  );
}
