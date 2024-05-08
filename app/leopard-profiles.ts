const leopardIdCards = [
  {
    imgUrl: "/images/gosebo.jpg",
    name: "Gosebo Male",
    gallery: [
      {
        img1: "/images/gosebo1.jpg",
      },
      {
        img2: "/images/gosebo2.jpg",
      },
      {
        img3: "/images/gosebo3.jpg",
      },
      {
        img4: "/images/gosebo4.jpg",
      },
    ],
  },
  {
    imgUrl: "/images/serati.jpg",
    name: "Serati Female",
    gallery: [
      {
        img1: "/images/serati1.jpg",
      },
      {
        img2: "/images/serati2.jpg",
      },
      {
        img3: "/images/serati3.jpg",
      },
      {
        img4: "/images/serati4.jpg",
      },
    ],
  },
  {
    imgUrl: "/images/kimbia.jpg",
    name: "Kimbia Female",
    gallery: [
      {
        img1: "/images/kimbia1.jpg",
      },
      {
        img2: "/images/kimbia2.jpg",
      },
      {
        img3: "/images/kimbia3.jpg",
      },
      {
        img4: "/images/kimbia4.jpg",
      },
    ],
  },
  {
    imgUrl: "/images/Clover.jpg",
    name: "Clover Male",
    idCard: "/images/clover-id-card.jpg",
    gallery: [
      {
        img1: "/images/clover.jpg",
      },
      {
        img2: "/images/clover2.jpg",
      },
      {
        img3: "/images/clover3.jpg",
      },
      {
        img4: "/images/clover4.jpg",
      },
    ],
  },
  {
    imgUrl: "/images/motsamai.jpg",
    name: "Motsamai Female",
    idCard: "/images/motsamai-id.jpg",
    gallery: [
      {
        img1: "/images/motsamai1.jpg",
      },
      {
        img2: "/images/motsamai3.jpg",
      },
      {
        img3: "/images/motsamai2.jpg",
      },
      {
        img4: "/images/motsamai4.jpg",
      },
    ],
  },
  {
    imgUrl: "/images/zawadi.jpg",
    name: "Zawadi Male",
    gallery: [
      {
        img1: "/images/zawadi1.jpg",
      },
      {
        img2: "/images/zawadi2.jpg",
      },
      {
        img3: "/images/zawadi3.jpg",
      },
      {
        img4: "/images/zawadi4.jpg",
      },
    ],
  },
  {
    imgUrl: "/images/mogako.jpg",
    name: "Mogako Male",
    gallery: [
      {
        img1: "/images/mogako1.jpg",
      },
      {
        img2: "/images/mogako2.jpg",
      },
      {
        img3: "/images/mogako3.jpg",
      },
      {
        img4: "/images/mogako4.jpg",
      },
    ],
  },
  {
    imgUrl: "/images/nandi.jpg",
    name: "Nandi Female",
    gallery: [
      {
        img1: "/images/nandi1.jpg",
      },
      {
        img2: "/images/nandi2.jpg",
      },
      {
        img3: "/images/nandi3.jpg",
      },
      {
        img4: "/images/nandi4.jpg",
      },
    ],
  },
  {
    imgUrl: "/images/makatane.jpg",
    name: "Makatane Male",
    gallery: [
      {
        img1: "/images/makatane1.jpg",
      },
      {
        img2: "/images/makatane3.jpg",
      },
      {
        img3: "/images/makatane2.jpg",
      },
      {
        img4: "/images/makatane4.jpg",
      },
    ],
  },
  {
    imgUrl: "/images/tree.jpg",
    name: "Kgodisa Female",
    idCard: "/images/kgodisa-id-card.jpg",
    gallery: [
      {
        img1: "/images/kgodisa1.jpg",
      },
      {
        img2: "/images/kgodisa2.jpg",
      },
      {
        img3: "/images/kgodisa3.jpg",
      },
      {
        img4: "/images/kgodisa4.jpg",
      },
    ],
  },
];

const leopardIdCardsSorted = leopardIdCards.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (b.name > a.name) return -1;
  return 0;
});

export default leopardIdCardsSorted;
