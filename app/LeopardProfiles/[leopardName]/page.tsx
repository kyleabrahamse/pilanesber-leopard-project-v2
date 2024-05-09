import leopardIdCardsSorted from "@/app/leopard-profiles";
import Image from "next/image";

export default function LeopardIdPage({
  params,
}: {
  params: { leopardName: string };
}) {
  console.log(params);
  const urlName = params.leopardName.split("%")[0];
  return (
    <div>
      {leopardIdCardsSorted.map((leopard) => {
        if (leopard.name.includes(urlName)) {
          return (
            <div key={leopard.name} className="p-20">
              <div className="mb-20 flex border-b-2 border-black pb-8">
                <Image
                  src={leopard.imgUrl}
                  alt={leopard.name}
                  height={500}
                  width={500}
                  className="mr-5 h-[250px] w-[250px] rounded-full"
                />
                <h1 className="mt-auto">{leopard.name}</h1>
              </div>
              <div className="flex justify-center gap-10">
                {leopard.gallery.map((img, i) => {
                  let imgUrl = Object.values(img)[0];
                  return (
                    <Image
                      key={i}
                      src={imgUrl}
                      alt="leopard"
                      width={1000}
                      height={1000}
                      className="h-[500px] w-[400px] bg-cover"
                    />
                  );
                })}
              </div>
              <Image
                src={leopard.idCard as string}
                alt="idcard"
                height={2000}
                width={2000}
                className="mx-auto w-1/2 pt-20"
              />
            </div>
          );
        }
      })}
    </div>
  );
}
