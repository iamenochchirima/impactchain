import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import ChartThree from "./Charts/ChartThree";

const TartgetsCharts = () => {
  const { impactTargets } = useSelector((state: RootState) => state.app);

  return (
    <div
      className="flex flex-wrap -m-2"
    >
      {impactTargets?.map((target, index) => (
        <div
          className="p-2 flex-col w-full sm:w-1/2 lg:w-1/4 xl:w-1/4"
          key={index}
        >
          <ChartThree {...{target}} />
        </div>
      ))}
    </div>
  );
};

export default TartgetsCharts;
