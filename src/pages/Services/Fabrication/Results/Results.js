
import NumberBlock from "@components/common/NumberBlock/NumberBlock";


const infoList = [
  {
    number: "01.",
    title: "Ultra-Slim Profile Expertise",
    text: "We specialize in manufacturing ultra-thin aluminium profiles with wall thickness as fine as 0.3 mm — a rare capability that demonstrates our precision engineering and commitment to design innovation.",
  },
  {
    number: "02.",
    title: "Precision Fabrication",
    text: "Our in-house facilities offer advanced cutting, punching, and drilling that ensure tight tolerances and flawless finishes — delivering consistent, high-quality results for every profile.",
  },
  {
    number: "03.",
    title: "Anodizing & Coating Excellence",
    text: "With 25 anodizing tanks and Jotun, AkzoNobel, and PPG-approved powder coating systems, we deliver long-lasting, premium finishes with guaranteed durability and visual appeal.",
  },
  {
    number: "04.",
    title: "Integrated Manufacturing System",
    text: "From extrusion to packaging, our ERP-powered workflow and over 300 skilled professionals ensure every step of the process is efficient, accurate, and aligned with global quality standards.",
  },
];

export default function Results() {
  return (
    <NumberBlock
      title={
        <>
          Cutting-edge technology, extensive <br />
          capabilities, and superior results
        </>
      }
      infoList={infoList}
      buttonLabel=""
      alertBox={true}

    />
  );
}
