"use client";
import s1 from "@/assets/1.png";
import s2 from "@/assets/2.png";
import s3 from "@/assets/3.png";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Available = () => {
	return (
		<div className="container">
			<h3 className="text-[40px] text-center mb-[40px] capitalize">
				We are available
			</h3>
			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>
					<Image
						src={s1}
						alt="s1"
						width={480}
						height={480}
						className="w-[420px] lg:w-[480px] md:w-[430px]"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={s3}
						alt="s3"
						width={480}
						height={480}
						className="w-[420px] lg:w-[480px] md:w-[430px]"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={s2}
						alt="s2"
						width={480}
						height={480}
						className="w-[420px] lg:w-[480px] md:w-[430px]"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={s1}
						alt="s1"
						width={480}
						height={480}
						className="w-[420px] lg:w-[480px] md:w-[430px]"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={s3}
						alt="s3"
						width={480}
						height={480}
						className="w-[420px] lg:w-[480px] md:w-[430px]"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={s2}
						alt="s2"
						width={480}
						height={480}
						className="w-[420px] lg:w-[480px] md:w-[430px]"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Available;
