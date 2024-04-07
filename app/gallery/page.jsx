"use client";

import { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import Image from "next/image";

export default function GalleryPage() {
  // image pathname format -> /assets/gallery-page/img-1.jpg
  const numOfImages = 17; // Number of images
  const imagesPerPage = 8; // Images per page
  const totalPages = Math.ceil(numOfImages / imagesPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the range of images to display for the current page
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = Math.min(startIndex + imagesPerPage, numOfImages);
  const displayedImages = Array.from(
    { length: endIndex - startIndex },
    // image pathname format -> /assets/gallery-page/img-1.jpg
    (_, i) => `/assets/gallery-page/img-${startIndex + i + 1}.jpg`
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <PageHeader pageTitle="Gallery" />
      {/* gallery images */}
      <div className="max-w-[1000px] mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {displayedImages.map((img, i) => (
          <div className="relative" key={i}>
            <Image
              alt={`gallery-img-${i + 1}`}
              // fill
              width={500}
              height={500}
              priority
              src={img}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center py-4 gap-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`py-1 px-3 rounded-full ${
              currentPage === i + 1 ? "bg-gray-800 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
