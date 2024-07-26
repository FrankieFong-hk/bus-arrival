import { useParams } from "react-router-dom";
import {
  useGetETAAllRouteQuery,
  useGetRouteDetailQuery,
  useGetRouteStopDetailQuery,
  useGetRouteStopListQuery,
} from "../../api/busApiSlice";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Spinner,
} from "@nextui-org/react";
import ETAInfo from "./components/ETAInfo";

export default function RoutePage() {
  const { routeId, direction } = useParams();

  const {
    data: routeStopList,
    isLoading: routeStopListLoading,
    isSuccess,
  } = useGetRouteStopDetailQuery({
    route: routeId ?? "",
    direction: direction == "O" ? "outbound" : "inbound",
    service_type: "1",
  });

  const { data: routeDetails } = useGetRouteDetailQuery({
    route: routeId ?? "",
    direction: direction == "O" ? "outbound" : "inbound",
    service_type: "1",
  });

  console.log(routeStopList);
  return (
    <div>
      <Card>
        <CardHeader>
          {routeDetails?.data.route} To {routeDetails?.data.dest_en}
        </CardHeader>
        <CardBody>
          {routeStopListLoading ? (
            <div className="flex justify-center">
              <Spinner />
            </div>
          ) : routeStopList && routeStopList?.data.length > 0 ? (
            routeStopList.data.map((item) => (
              <div key={item.stop} className="mb-2 p-2 rounded bg-black">
                <ETAInfo route={item.route} stop_id={item.stop} />
                <p className="font-bold">{item.route}</p>
                <p className="text-sm">To {item.stop}</p>
              </div>
            ))
          ) : (
            <p>No routes found</p>
          )}
        </CardBody>
        <CardFooter>
          {/* {routeStopList && routeStopList.length > 0 && (
      <p className="text-sm text-gray-500">
        Showing {routeStopList.length} of {routeStopList?.data.length} routes
      </p>
    )} */}
        </CardFooter>
      </Card>
    </div>
  );
}
