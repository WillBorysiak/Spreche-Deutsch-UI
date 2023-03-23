import Image from 'next/image';

const HomeGallery = () => {
	return (
		<section id="home-gallery" className="overflow-hidden">
			<div className="container mx-auto px-5 py-2 pt-5 lg:px-12">
				<div className="-m-1 flex flex-wrap md:-m-2">
					<div className="flex w-1/2 flex-wrap">
						<div className="w-1/2 p-1">
							<Image
								width={1000}
								height={1000}
								quality={100}
								priority={true}
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="/images/gallery/meduana-PdnseHuDFZU-unsplash.jpg"
							/>
						</div>
						<div className="w-1/2 p-1">
							<Image
								width={1000}
								height={1000}
								quality={100}
								priority={true}
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="/images/gallery/elevate-snnhGYNqm44-unsplash.jpg"
							/>
						</div>
						<div className="w-full p-1">
							<Image
								width={1000}
								height={1000}
								quality={100}
								priority={true}
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="/images/gallery/roman-kraft-g_gwdpsCVAY-unsplash.jpg"
							/>
						</div>
					</div>
					<div className="flex w-1/2 flex-wrap">
						<div className="w-full p-1">
							<Image
								width={1000}
								height={1000}
								quality={100}
								priority={true}
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="/images/gallery/maheshkumar-painam-HF-lFqdOMF8-unsplash.jpg"
							/>
						</div>
						<div className="w-1/2 p-1">
							<Image
								width={1000}
								height={1000}
								quality={100}
								priority={true}
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="/images/gallery/op23-PGSQ6V7s0_E-unsplash.jpg"
							/>
						</div>
						<div className="w-1/2 p-1">
							<Image
								width={1000}
								height={1000}
								quality={100}
								priority={true}
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src="/images/gallery/rachel-davis-tn2rBnvIl9I-unsplash.jpg"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeGallery;
