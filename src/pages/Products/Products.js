import React from "react";
import SemiHeader from "@components/common/SemiHeader/SemiHeader";
import ImageBlock from "@components/common/ImageBlock/ImageBlock";
import Images from "@assets/images";

const imageData = [
  {
    title: "Custom Glulam Beams",
    description:
      "Get the perfect fit for your project with QB Corporation’s custom and curved glulam beams.",
    image: Images.product_custom,
    link:'/products/custom-beams'
  },
  {
    title: "Stock Glulam Beams",
    description:
      "Get your construction project completed faster and more efficiently with our stock glulam beams.",
    image: Images.product_stock,
    link:'/products/stock-beams'
  },
  {
    title: "QB Rim Board",
    description:
      "QB Rim Board has enhanced strength, stability, and resistance to warping or splitting.",
    image: Images.prodcut_qb,
    link:'/products/qb-rim-board'
  },
  {
    title: "Utility Structures",
    description:
      "An excellent solution for expanding the nation’s infrastructure efficiently.",
    image: Images.product_utility,
    link:'/products/utility-structures'
  },
  {
    title: "Wood Pellets",
    description:
      "Our pellets are renewable, sustainable, and rated as high-performance fuel.",
    image: Images.product_Wood,
    link:'/products/wood-pellets'
  },
];

function Products() {
  return (
    <>
      <SemiHeader
        title={
          <>
            Varn Extrusion Produces Dependable Products <br />
            With Unmatched Strength And Durability
          </>
        }
        description={
          <>
            We strive for 100% on-time deliveries <br />
            and 100% customer satisfaction.
          </>
        }
        buttonText="Contact an Expert"
        buttonLink="/contact"
      />
      <ImageBlock data={imageData} />
    </>
  );
}

export default Products;
