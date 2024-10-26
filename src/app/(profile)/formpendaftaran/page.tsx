"use client";

import React, { useState } from "react";

const FormPendaftaran = () => {
  const [alasanPutusSekolah, setAlasanPutusSekolah] = useState("");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Formulir Pendaftaran</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nama"
          >
            Nama Lengkap
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nama"
            type="text"
            placeholder="Nama Lengkap"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="alamat"
          >
            Alamat
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="alamat"
            placeholder="Alamat"
            rows={3}
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nomorHP"
          >
            Nomor HP Aktif (WhatsApp)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nomorHP"
            type="tel"
            placeholder="Nomor HP"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="jenjangSekolah"
          >
            Jenjang Sekolah Terakhir
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="jenjangSekolah"
          >
            <option value="">Pilih Jenjang</option>
            <option value="SD">SD</option>
            <option value="SMP">SMP</option>
            <option value="SMA">SMA</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="alasanPutusSekolah"
          >
            Alasan Putus Sekolah
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="alasanPutusSekolah"
            value={alasanPutusSekolah}
            onChange={(e) => setAlasanPutusSekolah(e.target.value)}
          >
            <option value="">Pilih Alasan</option>
            <option value="ekonomi">Ekonomi</option>
            <option value="jarak">Jarak ke Sekolah</option>
            <option value="motivasi">Kurang Motivasi</option>
            <option value="lainnya">Lainnya</option>
          </select>
        </div>
        {alasanPutusSekolah === "lainnya" && (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="alasanLainnya"
            >
              Alasan Lainnya
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="alasanLainnya"
              type="text"
              placeholder="Sebutkan alasan lainnya"
            />
          </div>
        )}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Daftar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPendaftaran;
