"use client";

import React, { useState } from 'react';
import { Download } from 'lucide-react';

export default function CoverPageGenerator() {
  const [formData, setFormData] = useState({
    uniName: 'GOPALGANJ SCIENCE AND TECHNOLOGY UNIVERSITY',
    uniLocation: 'GOPALGANJ',
    postalCode: '8100',
    courseCode: 'PHY513',
    courseTitle: 'Superconductivity',
    studentName: 'Rubayet Billah',
    studentId: '18PHYO27',
    levelSemester: 'M.Sc. 1st Year 1st Semester',
    session: '2023-24',
    studentDept: 'Department of Physics',
    teacherName: 'Dr. Noor-E-Ashrafi',
    teacherDesignation: 'Assistant Professor',
    teacherDept: 'Department of Physics',
    submissionDate: '2026-12-31'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 font-sans print:h-auto print:block print:bg-white print:overflow-visible">

      {/* Left Panel: Form */}
      <div className="w-[450px] bg-white border-r border-gray-200 p-6 overflow-y-auto z-10 flex flex-col gap-6 shadow-md print:hidden">

        <div className="flex justify-between items-center mb-2 sticky -top-6 bg-white py-4 z-10 border-b border-gray-200">
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">CoverGen</h1>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2.5 font-semibold cursor-pointer flex items-center gap-2 shadow-sm transition-all active:scale-95"
            onClick={handlePrint}
          >
            <Download size={18} />
            <span>Download PDF</span>
          </button>
        </div>

        <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-lg mb-4 text-slate-700 font-semibold border-l-4 border-blue-600 pl-3">University Details</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5 text-slate-600">University Name</label>
            <input className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-shadow text-gray-800" type="text" name="uniName" value={formData.uniName} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5 text-slate-600">Location</label>
            <input className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-shadow text-gray-800" type="text" name="uniLocation" value={formData.uniLocation} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-slate-600">Postal Code</label>
            <input className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-shadow text-gray-800" type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
          </div>
        </div>

        <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-lg mb-4 text-slate-700 font-semibold border-l-4 border-blue-600 pl-3">Course Information</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5 text-slate-600">Course Code</label>
            <input className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-shadow text-gray-800" type="text" name="courseCode" value={formData.courseCode} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-slate-600">Course Title</label>
            <input className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-shadow text-gray-800" type="text" name="courseTitle" value={formData.courseTitle} onChange={handleChange} />
          </div>
        </div>

        <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-lg mb-4 text-slate-700 font-semibold border-l-4 border-blue-600 pl-3">Submitted By</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5 text-slate-600">Student Name</label>
            <input className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-shadow text-gray-800" type="text" name="studentName" value={formData.studentName} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5 text-slate-600">Student ID</label>
            <input className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-shadow text-gray-800" type="text" name="studentId" value={formData.studentId} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5 text-slate-600">Level / Semester</label>
            <input className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-shadow text-gray-800" type="text" name="levelSemester" value={formData.levelSemester} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5 text-slate-600">Session</label>
            <input className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-shadow text-gray-800" type="text" name="session" value={formData.session} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-slate-600">Department</label>
            <input className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-shadow text-gray-800" type="text" name="studentDept" value={formData.studentDept} onChange={handleChange} />
          </div>
        </div>

        <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-lg mb-4 text-slate-700 font-semibold border-l-4 border-blue-600 pl-3">Submitted To</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5 text-slate-600">Teacher's Name</label>
            <input className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-shadow text-gray-800" type="text" name="teacherName" value={formData.teacherName} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5 text-slate-600">Designation</label>
            <input className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-shadow text-gray-800" type="text" name="teacherDesignation" value={formData.teacherDesignation} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-slate-600">Department</label>
            <input className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-shadow text-gray-800" type="text" name="teacherDept" value={formData.teacherDept} onChange={handleChange} />
          </div>
        </div>

        {/* Date of submission */}
        <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-lg mb-4 text-slate-700 font-semibold border-l-4 border-blue-600 pl-3">Date of submission</h2>
          <input className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-shadow text-gray-800" type="date" name="submissionDate" value={formData.submissionDate} onChange={handleChange} />
        </div>
      </div>

      {/* Right Panel: Preview */}
      <div className="flex-1 bg-slate-200 flex items-center justify-center overflow-auto p-10 print:p-0 print:bg-transparent print:overflow-visible">
        <div className="transform scale-[0.85] origin-top print:scale-100 print:m-0">

          {/* A4 Sheet */}
          <div className="bg-white w-[210mm] min-h-[297mm] shadow-2xl relative overflow-hidden mx-auto print:shadow-none print:w-[210mm] print:h-[297mm] print:break-after-avoid" id="print-area">

            {/* Elegant Top Border */}
            <div className="w-full h-4 bg-[#003366]"></div>
            <div className="w-full h-1 bg-gray-200 mt-1"></div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full h-full flex flex-col items-center text-center px-0 pt-24 pb-20 font-montserrat">

              {/* University Header */}
              <div className="text-[#003366] pb-8 mb-10 border-b-2 border-gray-200">
                <h1 className="text-4xl font-extrabold uppercase leading-tight mb-3 tracking-wide">
                  {formData.uniName}
                </h1>

                {(formData.uniLocation || formData.postalCode) && (
                  <div className="text-[22px] text-slate-600 font-semibold tracking-wider mt-2">
                    {formData.uniLocation}
                    {formData.uniLocation && formData.postalCode && ' - '}
                    {formData.postalCode}
                  </div>
                )}
              </div>

              {/* Course Information */}
              <div className="mt-8 w-[90%] px-10 py-8 bg-slate-50 rounded-lg border-t-4 border-b-4 border-[#003366] flex flex-col gap-4 text-left">
                <div className="text-xl">
                  <span className="text-slate-600 font-medium tracking-wider">Course Code: </span>
                  <span className="text-[#003366] font-extrabold ml-3">{formData.courseCode}</span>
                </div>
                <div className="text-xl">
                  <span className="text-slate-600 font-medium tracking-wider">Course Title: </span>
                  <span className="text-[#003366] font-extrabold ml-3">{formData.courseTitle}</span>
                </div>
              </div>

              {/* 2-Column Split: Submitted By / To */}
              <div className="mt-20 mb-10 flex gap-10 w-full justify-center text-left mx-auto">

                {/* Left: Submitted By */}
                <div className="flex flex-col gap-2 p-6 bg-white w-auto">
                  <div className="text-[#003366] font-extrabold text-xl mb-4 uppercase tracking-widest border-b-2 border-gray-200 pb-2">
                    Submitted By
                  </div>
                  <div className="text-gray-900 font-extrabold text-[22px]">{formData.studentName}</div>
                  <div className="text-slate-600 text-lg mt-1">
                    <span className="font-semibold">ID: </span>
                    <span className="text-gray-900 font-extrabold">{formData.studentId}</span>
                  </div>
                  <div className="text-slate-600 text-lg">{formData.levelSemester}</div>
                  <div className="text-slate-600 text-lg">
                    <span className="font-semibold">Session: </span>
                    {formData.session}
                  </div>
                  <div className="text-slate-600 text-lg mt-2">{formData.studentDept}</div>
                </div>
                <hr className='border-2 h-auto border-[#003366] my-10' />
                {/* Right: Submitted To */}
                <div className="flex flex-col gap-2 p-6 w-auto border-l-4 border-transparent bg-white">
                  <div className="text-[#003366] font-extrabold text-xl mb-4 uppercase tracking-widest border-b-2 border-gray-200 pb-2">
                    Submitted To
                  </div>
                  <div className="text-gray-900 font-extrabold text-[22px]">{formData.teacherName}</div>
                  <div className="text-slate-600 text-lg mt-1">{formData.teacherDesignation}</div>
                  <div className="text-slate-600 text-lg mt-2">{formData.teacherDept}</div>
                </div>

              </div>

            </div>

            {/* Date of submission  */}
            <div className="flex gap-2 px-6 w-auto bg-white text-xl uppercase mx-4">
              <div className=" tracking-widest  border-gray-200">
                Date of submission :
              </div>
              <div className="text-[#003366] font-bold">{new Date(formData.submissionDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</div>
            </div>

            {/* Elegant Bottom Border */}
            <div className="absolute bottom-0 w-full">
              <div className="w-full h-1 bg-gray-200 mb-1"></div>
              <div className="w-full h-6 bg-[#003366]"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
