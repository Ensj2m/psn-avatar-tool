import Image from "next/image";

export default function SuccessPopup({
  avatarSrc,
  setAvatarSrc,
}: {
  avatarSrc: string;
  setAvatarSrc: any;
}) {
  return (
    <div
      onClick={() => setAvatarSrc(null)}
      className="bg-black w-full rounded-3xl h-full absolute z-50 overflow-hidden rounded-tl-none flex justify-center items-center py-10 px-6 flex-col gap-14"
    >
      <h1 className="font-mono font-bold text-orange-600 text-center text-lg">
        Successfully added to cart
      </h1>
      <div className="bg-black aspect-square rounded-3xl overflow-hidden w-[90%] relative">
        <Image
          src={avatarSrc}
          className="w-[102%] h-[102%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          alt="Avatar"
          height={200}
          width={200}
        />
      </div>
      <p className="cursor-pointer py-1 w-fit font-black px-3 bg-orange-600 text-black font-mono rounded-full">
        close
      </p>
    </div>
  );
}
