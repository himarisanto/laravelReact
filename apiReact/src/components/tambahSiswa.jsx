import { useState } from "react";
import { useDispatch } from "react-redux";
import { createSiswa, fetchSiswa } from "../store/siswaSlice";

export default function TambahSiswa() {
    const dispatch = useDispatch();
    const [gambar, setGambar] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("nama", e.target.nama.value);
        formData.append("kelas", e.target.kelas.value);
        formData.append("jurusan", e.target.jurusan.value);
        formData.append("no_absen", e.target.no_absen.value);
        if (gambar) formData.append("gambar", gambar);
        console.log(gambar);
        dispatch(createSiswa(formData)).then(() => {
        dispatch(fetchSiswa());
        });

        e.target.reset();
        setGambar(null);
};

    const handleFileChange = (e) => {
        setGambar(e.target.files[0]);
    };

    return (
        <form onSubmit={handleSubmit} className="grid h-40 grid-cols-3 content-center gap-1">
            <div>
                <label className="block font-semibold mb-1 text-gray-700">Nama</label>
                <input
                    type="text"
                    name="nama"
                    placeholder="Nama lengkap"
                    required
                    className="border rounded-lg px-2 py-2 w-full"
                />
            </div>
            <div>
                <label className="block font-semibold mb-1 text-gray-700">Kelas</label>
                <input
                    type="text"
                    name="kelas"
                    placeholder="Kelas"
                    required
                    className="border rounded-lg px-3 py-2 w-full"
                />
            </div>
            <div>
                <label className="block font-semibold mb-1 text-gray-700">Jurusan</label>
                    <input
                        type="text"
                        name="jurusan"
                        placeholder="Jurusan"
                        required
                        className="border rounded-lg px-3 py-2 w-full"
                    />
            </div>
            <div>
                <label className="block font-semibold mb-1 text-gray-700">No Absen</label>
                    <input
                        type="number"
                        name="no_absen"
                        placeholder="No Absen"
                        required
                        className="border rounded-lg px-3 py-2 w-full"
                    />
            </div>
            <div>
                <label className="block font-semibold mb-1 text-gray-700">Foto Siswa</label>
                    <input
                        type="file"
                        name="gambar"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="mt-1 rounded-lg px-3 py-2 w-full border"
                    />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition font-medium self-end mb-1"
            >
                Tambah
            </button>
        </form>
    );
}   