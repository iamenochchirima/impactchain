import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const TargetCard = ({ target, setSelectedTargets }) => {
  const [selectedButton, setSelectedButton] = useState<boolean>(false);
  const { userRecord } = useSelector((state: RootState) => state.app);

  useEffect(() => {
    if (userRecord) {
      if (userRecord.impactTargets.length > 0) {
        const _innerTargets = userRecord.impactTargets;
        const _sortedTargets = [..._innerTargets].sort(
          (a, b) => Number(a.id) - Number(b.id)
        );
        const found = _sortedTargets.find((t) => Number(t.id) === target.id);
        if (found) {
          setSelectedTargets((prev) => {
            const prevArray = Array.isArray(prev) ? prev : [];
            if (prevArray.some((t) => t.id === target.id)) {
              return prevArray;
            } else {
              return [...prevArray, target];
            }
          });
          setSelectedButton(true);
        }
      }
    }
  }, [userRecord, target, setSelectedButton]);

  const handleClicked = () => {
    setSelectedButton(!selectedButton);
    if (!selectedButton) {
      setSelectedTargets((prev) => [...(prev || []), target]);
    } else {
      setSelectedTargets((prev) =>
        (prev || []).filter((t) => t.id !== target.id)
      );
    }
  };

  return (
    <button onClick={handleClicked}>
      <img
        className={`${
          selectedButton ? "opacity-40" : ""
        } hover:scale-105 duration-300 fade-in-fwd`}
        src={target.icon}
        alt={target.name}
      />
    </button>
  );
};

export default TargetCard;
