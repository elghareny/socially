/** @format */
"use client";
import {SignInButton, SignOutButton, useAuth} from "@clerk/nextjs";
import {BellIcon, HomeIcon, LogOutIcon, MenuIcon, UserIcon} from "lucide-react";
import React, {useState} from "react";
import ModeToggle from "./ModeToggle";
import NavLink from "./NavLink";
import {Button} from "./ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";

const MobileNavbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const {isSignedIn} = useAuth();
	return (
		<div className='flex md:hidden items-center space-x-2'>
			<ModeToggle />
			<Sheet
				open={showMobileMenu}
				onOpenChange={setShowMobileMenu}>
				<SheetTrigger asChild>
					<Button
						variant={"ghost"}
						size={"icon"}>
						<MenuIcon className='w-5 h-5' />
					</Button>
				</SheetTrigger>
				<SheetContent
					side='right'
					className='w-[300px]'>
					<SheetHeader>
						<SheetTitle>Menu</SheetTitle>
					</SheetHeader>
					<nav className='flex flex-col space-y-4 mt-6'>
						<NavLink
							title='Home'
							icon={<HomeIcon className='w-4 h-4' />}
							navigateTo='/'
							className='justify-start'
							isMobile
						/>
						{isSignedIn ? (
							<>
								<NavLink
									title='Notifications'
									icon={<BellIcon className='w-4 h-4' />}
									navigateTo='/notifications'
									className='justify-start'
									isMobile
								/>

								<NavLink
									title='Profile'
									icon={<UserIcon className='w-4 h-4' />}
									navigateTo='/profile'
									className='justify-start'
									isMobile
								/>
								<SignOutButton>
									<Button
										variant='ghost'
										className='flex items-center gap-3 justify-start w-full'>
										<LogOutIcon className='w-4 h-4' />
										Logout
									</Button>
								</SignOutButton>
							</>
						) : (
							<SignInButton
								mode='modal'
								forceRedirectUrl={"/"}>
								<Button
									variant='default'
									className='w-full'>
									Sign In
								</Button>
							</SignInButton>
						)}
					</nav>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default MobileNavbar;
