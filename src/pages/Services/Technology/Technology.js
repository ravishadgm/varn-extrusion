import NumberBlock from "@components/common/NumberBlock/NumberBlock";


const infoList = [
  {
    number: "01.",
    title: "CNC Capabilities",
    text: "Our CNC Fabrication division specializes in processing glulam beams of remarkable dimensions, accommodating widths up to 23.5 inches, depths up to 55 inches, and lengths up to 59 feet. It's important to note that certain dimension combinations may be limited by the capabilities of our CNC system.",
  },
  {
    number: "02.",
    title: "Precision Cuts",
    text: "CNC machining technology gives us the ability to achieve precise dimensions, kerfs, holes, and notches with unmatched accuracy. This technological advantage enables exact measurements and high-quality finishes, ensuring that each piece consistently adheres to the desired specifications of the customer.",
  },
  {
    number: "03.",
    title: "Accurate Drilling",
    text: "CNC machined holes in glulam beams ensures precise location and accurate drilling, minimizing the risk of human error and preserving structural integrity. CNC drilling also enhances design flexibility, enabling architects and engineers to create intricate structures with elaborate bolt and pipe configurations.",
  },
  {
    number: "04.",
    title: "Corbels/Custom Beam Designs",
    text: "Our CNC process delivers precise results, ensuring the final product meets the required specifications. Additionally, CNC fabrication provides greater design flexibility, allowing for the creation of complex shapes and patterns that cannot be achieved with traditional manufacturing processes.",
  },
];

export default function Technology() {
  return (
    <NumberBlock
      title={
        <>
          Cutting-edge technology, extensive <br />
          capabilities, and superior results

        </>
      }
      infoList={infoList}
      buttonLabel="ABOUT QB CORP"
    />
  );
}

