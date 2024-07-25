import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";
import {
  useGetBusStopDetailQuery,
  useGetBusStopListQuery,
  useGetETAQuery,
  useGetRouteDetailQuery,
  useGetRouteListQuery,
  useGetRouteStopDetailQuery,
  useGetRouteStopListQuery,
} from "../../api/busApiSlice";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const { data: routeList } = useGetRouteListQuery();
  const { data } = useGetRouteDetailQuery({
    route: "1A",
    direction: "outbound",
    service_type: "1",
  });

  const { data: stopList } = useGetBusStopListQuery();

  const { data: stopDetail } = useGetBusStopDetailQuery("6156B488BEB726C6");

  const { data: routeStopList } = useGetRouteStopListQuery();

  const { data: routeStopDetail } = useGetRouteStopDetailQuery({
    route: "1A",
    direction: "outbound",
    service_type: "1",
  });

  const { data: ETA } = useGetETAQuery({
    route: "1",
    stop_id: "18492910339410B1",
    service_type: "1",
  });

  console.log(routeList);
  return (
    <div className="max-w-[500px] mx-auto">
      <Input onChange={(e) => setSearch(e.target.value)} />
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>
          {routeList?.data
            .filter((route) => route.route.includes(search))
            .slice(0, 10)
            .map((item) => item.route)}
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
  );
}
