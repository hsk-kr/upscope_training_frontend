import { useCallback, useEffect, useState } from "react";
import { fetchPain } from "../api/api";
import { useNavigate, useParams } from "react-router";
import type { Pain } from "../types/pain";

const Pain = () => {
  let params = useParams();
  const navigate = useNavigate();
  const [pain, setPain] = useState<Pain | null>(null);

  const getPain = useCallback(async () => {
    setPain(await fetchPain(params.id!));
  }, [setPain]);

  useEffect(() => {
    getPain();
  }, [getPain]);

  if (!pain) return null;

  return (
    <div className="w-full max-w-6xl mx-auto p-8 flex flex-col gap-4">
      <button
        className="btn btn-outline w-fit mb-4"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <h1 className="text-4xl font-bold">{pain.title}</h1>
      <div className="text-slate-400 text-sm">{pain.desc}</div>
      <div className="text-sm p-2">{pain.concept}</div>
      <hr />
      <div className="flex flex-col gap-2">
        <div className="text-xl">Explain this on the whiteboard</div>
        <div className="p-2">{pain.whiteboard}</div>
      </div>
      <hr />
      {pain.practices.map((p, idx) => (
        <div key={idx}>
          <h2 className="text-lg">Practice {idx + 1}.</h2>
          <div className="p-2">{p}</div>
        </div>
      ))}
    </div>
  );
};

export default Pain;
