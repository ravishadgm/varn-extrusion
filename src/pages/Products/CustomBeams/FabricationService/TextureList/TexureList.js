import React from 'react'
import style from "./TexureList.module.scss"
import texureOne from "../../../../../assets/images/products/InnerImages/Texture1.jpeg"
import texureTwo from "../../../../../assets/images/products/InnerImages/Texture2.jpeg"
import { ImNotification } from "react-icons/im";

const TexureList = () => {
    return (
        <div className={style.mainContaier}>
            <div className={style.innerContainer}>
                <div>
                    <p>The textures we offer can be applied to most of our finishes. Each provides its own unique look that differs from the standard appearance. The texture affects the beam’s appearance but does not influence the strength of the beam in any way.</p>
                </div>
                <div className={style.tableContent}>
                    <h4>Satin Finish</h4>
                    <p>A fine-brushed appearance that adds texture without glare. It offers a balance between matte and polished looks.</p>
                </div>
                <div className={style.tableContent}>
                    <h4>Polished Finish</h4>
                    <p>A glossy, mirror-like surface ideal for decorative or high-end design elements. Great for applications where shine and smoothness are key.</p>
                </div>
                <div className={style.tableContent}>
                    <h4>Shot Blasted</h4>
                    <p>Creates a uniform, matte texture by blasting the surface with fine media. It enhances the coating adhesion and gives a refined industrial look.</p>
                </div>
            </div>
            <div className={style.imageContainer}>
                <div className={style.imageBlock}>
                    <img src={texureOne} alt="Columns – Combination 2 or V8" />
                    <p>Rough Saw Texture</p>
                </div>
                <div className={style.imageBlock}>
                    <img src={texureTwo} alt="Columns – Combination 2 or V8" />
                    <p>Wire Brush Texture</p>
                </div>
            </div>
            <div className={style.warningBox}>
                <ImNotification className={style.icon} />
                <p>
                    <strong>Please be advised that Varn Extrusion does not currently provide staining services.</strong>
                </p>
            </div>
        </div>
    )
}

export default TexureList