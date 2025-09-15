import FilterCard from "@/components/filters/card-filter";
import DataTable from "@/components/table/data-table";

export default async function Page( props: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {

  const searchParams = await props.searchParams;

  return (
    <>
      <FilterCard />
      <DataTable
        searchParams={searchParams}
      />
    </>
  )
}
