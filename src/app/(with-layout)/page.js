import Image from "next/image";
import img1 from "../../../public/images/peakpx.jpg";
import img2 from "../../../public/images/wallpaperflare.com_wallpaper.jpg";

const Home = () => {
  return (
    <main>
      <h1 className="text-3xl text-center font-bold underline text-green-500">
        Home
      </h1>

      {/* image section  */}
      <div className="mx-10 overflow-x-auto flex justify-center gap-5 mt-10">
        <Image width={600} height={400} placeholder="blur" src={img1} alt="" />
        <Image width={600} height={400} placeholder="blur" src={img2} alt="" />
        <Image
          width={600}
          height={400}
          placeholder="blur"
          src="https://hips.hearstapps.com/hmg-prod/images/911-t-gulf-blue-4-1666118935.jpg?crop=1xw:1xh;center,top&resize=980:*"
          blurDataURL="data:image/webp;base64,UklGRo4DAABXRUJQVlA4WAoAAAAgAAAAFgIALAEASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggoAEAAFApAJ0BKhcCLQE+7Xa4VqmnJSOgCAEwHYlpbuFqMfxuvOob4AJ7APfbJyHvtk5D32ych77Y5pjSwD9nKcUE4au0qBZLlKU7hBdw6uybcj3m14uTj+UuPCC7igduf3R+EF2lQZq0UXKlTp7rpSB9gk9KgWS7L+X9eV6m/Ie4K3rN1naQkRERE+wTlvkkis1AVvdLiD+/OcGCsnb+HTDpI+sFXVLSoD7J0xHZhL4qba76/Kj2OZmdKbSoFku3gqt4dVvS0qBZLteLqezcPlKh6DcH9PbJ4JAsmH2+m2XhZNtd32ych79+nIgp3rmzV4DRD9snIe+2TlWLbc4ado+41D8ILtKgWUYuG7q8One0m8ha7SoFku15XqzOKsm2XT2ych77ZOQ990N2QWR4hzCJJS0qBZLteLlZmA+m2XhXVLSoFku14uTkQFSXaWCaVAsl2vFrAAD++lorDzaOQLV4yQ+/zRmF1l5hgMxuIbZj0jIJoDoHT2xquN/Ci30qdkL2IpZZYj2J3rouCFJC8Io+xwXdnA0RP7qhZAh2ID5wAAAA"
          alt=""
        />
      </div>
    </main>
  );
};

export default Home;
