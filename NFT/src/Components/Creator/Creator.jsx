import CreatorItem from "./CreatorItem";

function Creator() {
  const items = [
    {
      id: 1,
      icon: "fa-figma",
      title: "CONNECT YOUR WALLET",
      description:
        "Connect your Wallet, use the pink button in the left of the Header. Now you can use any feature",
    },
    {
      id: 2,
      icon: "fa-codepen",
      title: "CREATE ARTWORK",
      description:
        "Create your NFT collection. Add social links, profile and banner image. Set a secondary sales fee for your artwork.",
    },
    {
      id: 3,
      icon: "fa-linux",
      title: "UPLOAD YOUR NFTS",
      description:
        "Upload. Add a title & description. Customize your NFT's, properties, stats and unlockable content.",
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-[#020b33] to-[#06113c] py-16 px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-yellow-400 font-bold">
            How To Become Spiritual <br />
            NFT Creator
          </h2>
          <div className="flex items-center justify-center flex-wrap gap-1 md:gap-8">
            {items.map((item) => (
              <CreatorItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Creator;