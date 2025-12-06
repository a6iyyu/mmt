import { Search } from "lucide-react";
import Input from "@/components/common/input";
import Select from "@/components/common/select";

export default function Filter() {
  return (
    <form className="mx-auto mt-8 flex w-9/10 flex-col items-end justify-between gap-4 lg:w-19/20 lg:flex-row">
      <Input
        type="text"
        placeholder="Cari pelatihan..."
        name="cari"
        label="Cari Kata Kunci"
        required={false}
        icon={<Search className="h-4 w-4 text-gray-400" />}
      />
      <Select name="status" label="Status" required={false} options={[]} />
    </form>
  );
}