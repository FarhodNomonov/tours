import Image from "next/image";
import React, { useMemo } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { nameLang } from "../../../../utils/func";
import { getLanguage } from "../../../../redux/selector";

const Container1 = () => {
  const router = useRouter();
  const { id } = router.query;
  const tours = useSelector(({ tours }) => tours);
  const { language } = getLanguage();

  const isActiveTour = useMemo(
    () => tours?.find((item) => Number(item?.id) === Number(id)) || [tours],
    [tours, id]
  );

  return (
    <div className="">
      <div className="relative h-[55vh] flex justify-center items-center">
        <Image
          src="/images/about-bg.webp"
          layout="fill"
          objectFit="cover"
          alt="img"
        />
        <h1 className="absolute z-10 text-white text-[30px] xs:text-[50px] xs:mt-20 ml:text-[25px] ml:text-center">
          {nameLang(isActiveTour, language)}
        </h1>
      </div>
    </div>
  );
};

export default Container1;
