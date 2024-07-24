import { useGetRouteListQuery } from "../APIs/apiSlice";

export default function Home() {
  const { data } = useGetRouteListQuery();

  console.log(data);
  return (
    <>
      <div className="text-red-500">Home</div>
      <div>Home</div>
      <div>Home</div>
    </>
  );
}
