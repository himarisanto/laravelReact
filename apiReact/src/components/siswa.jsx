import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSiswa } from "../store/siswaSlice";
import { User } from "lucide-react";
import TambahSiswa from "./tambahSiswa";

export default function SiswaIndex() {
const siswa = useSelector((state) => state.siswa.data);
const dispatch = useDispatch();
const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
    dispatch(fetchSiswa());
}, [dispatch]);
// const handleSiswaAdded = () => {
//     setIsOpen(false);      
//     dispatch(fetchSiswa());
// };
return (
    <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-center items-start mb-3">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-800 text-center">
                    Daftar Siswa
                    </h1>
                    <p className="text-gray-500 text-center">Kelola data siswa sekolah</p>
                </div>
            </div>
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={() => setIsOpen(true)}
                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                            focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                            text-sm px-5 py-2.5 text-center"
                    type="button"
                >
                    + Tambah Siswa
                </button>
                <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full shadow font-medium">
                    Total: {siswa.length} siswa
                </span>
            </div>

            {isOpen && (
            <div className="fixed inset-0 z-100 flex items-center justify-center bg-[rgba(0,0,0,0.88)]" onClick={() => setIsOpen(false)}>
                <div
                className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg"
                onClick={(e) => e.stopPropagation()} 
                >
                <div className="relative border-b pb-2 mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-black text-center">
                        Tambah Siswa
                    </h3>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute right-0 top-0 text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                        ✕
                    </button>
                </div>
                <TambahSiswa onClose={() => setIsOpen(false)} />
                </div>
            </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-2">
            {siswa.length === 0 && (
                <div className="text-center text-gray-400 italic py-8 col-span-full">
                Tidak ada siswa ditemukan.
                </div>
            )}
            {siswa.map((s) => (
                <div
                key={s.id}
                className="bg-white border rounded-2xl shadow p-1 flex flex-col items-center transition hover:shadow-lg"
                >
                {s.gambar ? (
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
                    <img
                        src={`http://127.0.0.1:8000${s.gambar}`}
                        className="w-full h-full object-cover"
                    />
                    </div>
                ) : (
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center relative mb-3">
                    <User className="w-12 h-12 text-gray-400" />
                    <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>
                )}

                <h2 className="font-bold text-xl text-gray-800">{s.nama}</h2>
                <span className="text-gray-500 text-sm mb-3">
                    NO Absen: {s.no_absen}
                </span>

                <div className="flex flex-col items-center gap-1 text-sm">
                    <div className="flex items-center gap-2">
                    <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-md font-semibold">
                        Kelas
                    </span>
                    <span className="bg-gray-100 px-2 rounded text-black">
                        {s.kelas}
                    </span>
                    </div>
                    <div className="mt-2">
                    <span className="text-gray-800 text-sm font-normal mr-2">
                        Jurusan
                    </span>
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-medium text-xs">
                        {s.jurusan}
                    </span>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
    </div>
);
}
