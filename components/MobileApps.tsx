import Image from "next/image";
import React from "react";

function MobileApps() {
  return (
    <div className="w-full px-10 py-16 ">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="col-span-2">
          <h2 className="tracking-widest uppercase">
            Instagram Clone Mobile App
          </h2>
        </div>
        <div>
          <Image
            src="https://res.cloudinary.com/magezi-tech-solutions/image/upload/v1646826713/personal%20pictures/igclone1_grrwqa.png"
            width="500"
            height="500"
            className="rounded"
          />
        </div>
        <div>
          <Image
            src="https://res.cloudinary.com/magezi-tech-solutions/image/upload/v1646826713/personal%20pictures/igclone2_nxgtak.png"
            width="500"
            height="500"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default MobileApps;
