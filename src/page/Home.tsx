import { useGetRouteListQuery } from "../APIs/apiSlice";

export default function Home() {
  const { data } = useGetRouteListQuery();

  console.log(data);
  return (
    <>
      <div>Home</div>
      <div>Home</div>
      <div>Home</div>
    </>
  );
}
