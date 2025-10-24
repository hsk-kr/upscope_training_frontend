import { useCallback, useEffect, useState } from "react";
import { fetchPains } from "../api/api";
import type { PainListItem } from "../types/pain";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router";

const PainList = () => {
  const [pains, setPains] = useState<PainListItem[]>([]);

  const getPains = useCallback(async () => {
    setPains(await fetchPains());
  }, [setPains]);

  useEffect(() => {
    getPains();
  }, [getPains]);

  return (
    <div>
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Pains</li>
        {pains.map((pain, painIdx) => {
          const comp = (
            <li
              key={painIdx}
              className={twMerge(
                "list-row",
                pain.available ? undefined : "opacity-30",
              )}
            >
              <div className="text-4xl font-thin tabular-nums text-white">
                {(painIdx + 1).toString().padStart(2, "0")}
              </div>
              <input
                type="checkbox"
                className="checkbox checkbox-success"
                checked={pain.complete}
              />
              <div className="list-col-grow">
                <div>{pain.title}</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  {pain.desc}
                </div>
              </div>
            </li>
          );

          return pain.available ? (
            <Link to={{ pathname: `/pains/${pain._id}` }}>{comp}</Link>
          ) : (
            comp
          );
        })}
      </ul>
    </div>
  );
};

export default PainList;
