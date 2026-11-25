import { z } from "zod";

export const DAFTAR_DIVISI = ["Frontend", "Backend", "UIUX"] as const;
export const DAFTAR_KEAHLIAN = ["HTML", "CSS", "JavaScript", "React"] as const;

export type Divisi = (typeof DAFTAR_DIVISI)[number];
export type Keahlian = (typeof DAFTAR_KEAHLIAN)[number];

export const peminatanSchema = z.object({
  namaSantri: z
    .string({ error: "Nama santri wajib diisi" })
    .min(3, { error: "Nama santri minimal 3 karakter" }),

  nis: z.coerce
    .number<string>({ error: "NIS harus berupa angka" })
    .min(100, { error: "NIS minimal bernilai 100" }),

  umur: z.coerce
    .number<string>({ error: "Umur harus berupa angka" })
    .min(15, { error: "Umur minimal 15 tahun" })
    .max(20, { error: "Umur maksimal 20 tahun" }),

  divisi: z.enum(DAFTAR_DIVISI, {
    error: "Pilih salah satu divisi",
  }),

  keahlian: z
    .array(z.enum(DAFTAR_KEAHLIAN))
    .min(1, { error: "Pilih minimal 1 keahlian" }),

  persetujuan: z.boolean().refine((val: boolean): boolean => val === true, {
    error: "Anda harus menyetujui tata tertib",
  }),
});

export type PeminatanFormInput = z.input<typeof peminatanSchema>;
export type PeminatanFormOutput = z.output<typeof peminatanSchema>;
