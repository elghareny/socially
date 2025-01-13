/** @format */

import {SignInButton, UserButton} from "@clerk/nextjs";
import {currentUser} from "@clerk/nextjs/server";
import {BellIcon, HomeIcon, UserIcon} from "lucide-react";
import React from "react";
import ModeToggle from "./ModeToggle";
import NavLink from "./NavLink";
import {Button} from "./ui/button";

const DesktopNavbar = async () => {
	const user = await currentUser();
	return (
		<div className='hidden md:flex items-center space-x-4'>
			<ModeToggle />
			<NavLink
				title='Home'
				icon={<HomeIcon className='w-4 h-4' />}
				navigateTo='/'
			/>

			{user ? (
				<>
					<NavLink
						title='Notifications'
						icon={<BellIcon className='w-4 h-4' />}
						navigateTo='/notifications'
					/>
					<NavLink
						title='Profile'
						icon={<UserIcon className='w-4 h-4' />}
						navigateTo={`/profile/${
							user.username ?? user.emailAddresses[0].emailAddress.split("@")[0]
						}`}
					/>
					<UserButton />
				</>
			) : (
				<SignInButton
					mode='modal'
					forceRedirectUrl='/'>
					<Button variant={"default"}>Sign In</Button>
				</SignInButton>
			)}
		</div>
	);
};

export default DesktopNavbar;
