import React, { useEffect, useState } from "react";

const TargetCard = ({ target, setSelectedTargets, userRecord }) => {
  const [selectedButton, setSelectedButton] = useState<boolean>(false);

  useEffect(() => {
    console.log("userRecord", userRecord);
    if (
          userRecord.impactTargets.length > 0 &&
          (userRecord.impactTargets[0]?.length ?? 0) > 0
        ) {
      const _innerTargets = Array.isArray(userRecord.impactTargets[0]?.[0])
        ? userRecord.impactTargets[0]?.[0]
        : [];
      const _sortedTargets = [..._innerTargets].sort(
        (a, b) => Number(a.id) - Number(b.id)
      );
      console.log("sortedTargets", _sortedTargets)
      if (_sortedTargets.find((t) => t.id === target.id)) {
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
      console.log("selectedTargets", selectedButton, target.id);
    }
  }, [userRecord, target, setSelectedButton]);


  // useEffect(() => {
  //   if (userRecord) {
  //     console.log("userRecord", userRecord);
  //   console.log("userRecord", userRecord);
  //   if (
  //     userRecord.impactTargets.length > 0 &&
  //     (userRecord.impactTargets[0]?.length ?? 0) > 0
  //   ) {
  //     const _innerTargets = Array.isArray(userRecord.impactTargets[0])
  //       ? userRecord.impactTargets[0] as ImpactTarget[]
  //       : [];
  //     const _sortedTargets = _innerTargets.sort(
  //       (a, b) => Number(a.id) - Number(b.id)
  //     );

  //     console.log("Inner Targets", _innerTargets);
  //     console.log("sortedTargets", _sortedTargets);
  //     console.log("Target ID:", target.id);
  //     const flatTargets = _sortedTargets
  //     console.log("flatTargets", flatTargets[0]);
  //     console.log("find: ", flatTargets[0].find((t) => Number(t.id) === Number(target.id)));
      
  //     if (_sortedTargets.find((t) => Number(t.id) === Number(target.id))) {
  //       setSelectedTargets((prev) => {
  //         const prevArray = Array.isArray(prev) ? prev : [];
  //         if (!prevArray.some((t) => Number(t.id) === Number(target.id))) {
  //           return [...prevArray, target];
  //         }
  //         return prevArray;
  //       });
  //       setSelectedButton(true);
  //     }
      
  //   }
  //   }
  // }, [userRecord, target, setSelectedButton]);
  
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
