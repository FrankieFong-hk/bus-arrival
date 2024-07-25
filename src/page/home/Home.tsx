import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Spinner,
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
import { useState, useCallback } from "react";
import debounce from "lodash/debounce";

export default function Home() {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { data: routeList, isLoading } = useGetRouteListQuery();

  // Debounce the search function
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearch(value);
      setIsSearching(false);
    }, 300),
    []
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearching(true);
    debouncedSearch(e.target.value);
  };

  const filteredRoutes = routeList?.data
    .filter((route) => route.route.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 10);

  return (
    <div className="max-w-[500px] mx-auto min-h-screen p-4">
      <Input
        label="Search routes"
        placeholder="Enter route number"
        onChange={handleSearchChange}
        className="mb-4"
      />
      <Card>
        <CardHeader>Bus Routes</CardHeader>
        <CardBody>
          {isLoading || isSearching ? (
            <div className="flex justify-center">
              <Spinner />
            </div>
          ) : filteredRoutes && filteredRoutes.length > 0 ? (
            filteredRoutes.map((item) => (
              <div
                key={item.route}
                className="mb-2 p-2 bg-gray-100 rounded bg-black"
              >
                <p className="font-bold">{item.route}</p>
                <p className="text-sm">To {item.dest_en}</p>
              </div>
            ))
          ) : (
            <p>No routes found</p>
          )}
        </CardBody>
        <CardFooter>
          {filteredRoutes && filteredRoutes.length > 0 && (
            <p className="text-sm text-gray-500">
              Showing {filteredRoutes.length} of {routeList?.data.length} routes
            </p>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
