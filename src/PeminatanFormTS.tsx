import { useState, type ReactElement } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  peminatanSchema,
  DAFTAR_DIVISI,
  DAFTAR_KEAHLIAN,
  type Divisi,
  type Keahlian,
  type PeminatanFormInput,
  type PeminatanFormOutput,
} from "./schemas/peminatanSchema";

export default function PeminatanFormTS(): ReactElement {
  const [hasilSubmit, setHasilSubmit] = useState<PeminatanFormOutput | null>(
    null,
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PeminatanFormInput, unknown, PeminatanFormOutput>({
    resolver: zodResolver(peminatanSchema),
    mode: "onChange",
    defaultValues: {
      namaSantri: "",
      nis: "",
      umur: "",
      divisi: "" as Divisi,
      keahlian: [] as Keahlian[],
      persetujuan: false,
    },
  });

  const onSubmit: SubmitHandler<PeminatanFormOutput> = (
    data: PeminatanFormOutput,
  ): void => {
    console.log(data);
    setHasilSubmit(data);
  };

  return (
    <div className="flex flex-col gap-6 items-start border p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Nama Santri */}
        <div className="flex flex-col gap-1">
          <label>Nama Santri</label>
          <input className="border" type="text" {...register("namaSantri")} />
          {errors.namaSantri && (
            <p className="text-red-500 text-xs">{errors.namaSantri.message}</p>
          )}
        </div>

        {/* NIS */}
        <div className="flex flex-col gap-1">
          <label>NIS</label>
          <input className="border" type="number" {...register("nis")} />
          {errors.nis && (
            <p className="text-red-500 text-xs">{errors.nis.message}</p>
          )}
        </div>

        {/* Umur */}
        <div className="flex flex-col gap-1">
          <label>Umur</label>
          <input className="border" type="number" {...register("umur")} />
          {errors.umur && (
            <p className="text-red-500 text-xs">{errors.umur.message}</p>
          )}
        </div>

        {/* Divisi */}
        <div className="flex flex-col gap-1">
          <label>Pilihan Divisi</label>
          <select {...register("divisi")}>
            <option value="">-- Pilih Divisi --</option>
            {DAFTAR_DIVISI.map((divisi: Divisi) => (
              <option key={divisi} value={divisi}>
                {divisi}
              </option>
            ))}
          </select>
          {errors.divisi && (
            <p className="text-red-500 text-xs">{errors.divisi.message}</p>
          )}
        </div>

        {/* Keahlian */}
        <div className="flex flex-col gap-1">
          <label>Keahlian yang Dikuasai</label>
          <div className="flex gap-4">
            {DAFTAR_KEAHLIAN.map((item: Keahlian) => (
              <label key={item} className="flex items-center gap-1">
                <input
                  className="border"
                  type="checkbox"
                  value={item}
                  {...register("keahlian")}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
          {errors.keahlian && (
            <p className="text-red-500 text-xs">{errors.keahlian.message}</p>
          )}
        </div>

        {/*Tata Tertib */}
        <div className="flex flex-col gap-1">
          <label className="flex items-center gap-2">
            <input
              className="border"
              type="checkbox"
              {...register("persetujuan")}
            />
            <span>Saya menyetujui tata tertib yang berlaku</span>
          </label>
          {errors.persetujuan && (
            <p className="text-red-500 text-xs">{errors.persetujuan.message}</p>
          )}
        </div>

        <button type="submit" disabled={!isValid}>
          Kirim Pendaftaran
        </button>
      </form>

      {hasilSubmit && (
        <div className="flex flex-col gap-1 border p-4">
          <h3>Pendaftaran Berhasil</h3>
          <p>Nama Santri: {hasilSubmit.namaSantri}</p>
          <p>NIS: {hasilSubmit.nis}</p>
          <p>Umur: {hasilSubmit.umur} tahun</p>
          <p>Divisi: {hasilSubmit.divisi}</p>
          <p>Keahlian: {hasilSubmit.keahlian.join(", ")}</p>
          <p>Tata Tertib: {hasilSubmit.persetujuan ? "Disetujui" : "Belum"}</p>
        </div>
      )}
    </div>
  );
}
