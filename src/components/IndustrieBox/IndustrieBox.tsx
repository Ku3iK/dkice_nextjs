import React from "react";
import { IndustriesBoxWrapper } from "./IndustrieBox.styled";
import { IndustrieBoxInterface } from "./IndustrieBoxInterface";
import Image from "next/image";
import classNames from 'clsx';
import Link from "next/link";

const IndustrieBox = ({
    path,
    title,
    content,
    bgImage,
}: IndustrieBoxInterface ) => {
    const classes = classNames(`flex flex-col justify-center relative w-full grow p-24 cursor-pointer overflow-hidden text-white z-0`);

    return (
        <Link href={path}>
            <IndustriesBoxWrapper className={classes}>
                {bgImage && (
                    <Image
                        src={bgImage}
                        layout={'fill'}
                        objectFit={'cover'}
                    />
                )}
                <h2 className="pb-24 text-32 z-50">{title} fawd</h2>
                <p className="w-full md:w-1/2 leading-24 text-18 z-50">{content}</p>
            </IndustriesBoxWrapper>
        </Link>
    );

}

export default IndustrieBox;