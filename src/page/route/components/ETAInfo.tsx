import {
  useGetBusStopDetailQuery,
  useGetETAQuery,
  useGetRouteFareQuery,
} from "../../../api/busApiSlice";
import dayjs from "dayjs";

interface ETAInfoProps {
  route: string;
  stop_id: string;
  seq: Number;
}

export default function ETAInfo({ route, stop_id, seq }: ETAInfoProps) {
  const { data: eta, isLoading } = useGetETAQuery({
    route,
    stop_id,
    service_type: "1",
  });

  const { data: stopDetail } = useGetBusStopDetailQuery(stop_id);

  const calculateRemainingTime = (etaTime: string | undefined) => {
    if (!etaTime) return "N/A";
    const now = dayjs();
    const eta = dayjs(etaTime);
    const diffMinutes = eta.diff(now, "minute");
    if (diffMinutes <= 0) return "Arriving";
    return `${diffMinutes} min`;
  };

  return (
    <div>
      {isLoading ? (
        <>Loading</>
      ) : (
        <>
          <div>{stopDetail?.data.name_en}</div>
          <div>{calculateRemainingTime(eta?.data[0]?.eta)}</div>
        </>
      )}
    </div>
  );
}
