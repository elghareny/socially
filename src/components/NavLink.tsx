/** @format */

import Link from "next/link";
import React from "react";
import {Button} from "./ui/button";

type TProps = {
	title: string;
	icon: React.ReactNode;
	navigateTo: string;
	className?: string;
	isMobile?: boolean;
};

const NavLink: React.FC<TProps> = ({
	title,
	icon,
	navigateTo,
	className,
	isMobile = false,
}) => {
	return (
		<Button
			variant='ghost'
			className={`flex items-center gap-3 ${className}`}
			asChild>
			<Link href={`${navigateTo}`}>
				{icon}
				{isMobile ? title : <span className='hidden md:inline'>{title}</span>}
			</Link>
		</Button>
	);
};

export default NavLink;
