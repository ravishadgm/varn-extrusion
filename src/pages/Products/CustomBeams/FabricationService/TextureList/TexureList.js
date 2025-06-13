import React from 'react'
import style from "./TexureList.module.scss"
import texureOne from "../../../../../assets/images/products/textureOne.jpg"
import texureTwo from "../../../../../assets/images/products/texureTwo.jpg"
import { ImNotification } from "react-icons/im";

const TexureList = () => {
    return (
        <div className={style.mainContaier}>
            <div className={style.innerContainer}>
                <div>
                    <p>The textures we offer can be applied to most of our finishes. Each provides its own unique look that differs from the standard appearance. The texture affects the beam’s appearance but does not influence the strength of the beam in any way.</p>
                </div>
                <div className={style.tableContent}>
                    <h4>Rough Saw</h4>
                    <p>It gives the beam an olden look of sawn timber that can add an aesthetic character to the beam in any application.</p>
                </div>
                <div className={style.tableContent}>
                    <h4>Light Rough Saw</h4>
                    <p>The exact appearance of the Rough Saw but a lighter version.</p>
                </div>
                <div className={style.tableContent}>
                    <h4>Wire Brush</h4>
                    <p>As the name states, it gives the beam the look of being wiped with a wire brush. It removes some of the wood’s soft parts, adding a more natural look to the appearance.</p>
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
                    <strong>Please be advised that QB Corporation does not currently provide staining services.</strong>
                </p>
            </div>
        </div>
    )
}

export default TexureList