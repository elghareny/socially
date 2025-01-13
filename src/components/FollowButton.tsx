/** @format */
"use client";
import {toggleFollow} from "@/actions/user.action";
import {Loader2Icon} from "lucide-react";
import React, {useState} from "react";
import toast from "react-hot-toast";
import {Button} from "./ui/button";

const FollowButton = ({userId}: {userId: string}) => {
	const [isLoading, setIsLoading] = useState(false);

	const handleFollow = async () => {
		setIsLoading(true);

		try {
			await toggleFollow(userId);
			toast.success("User followed successfully");
		} catch (error) {
			toast.error("Error following user");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Button
			size={"sm"}
			variant={"secondary"}
			disabled={isLoading}
			className='w-20'
			onClick={handleFollow}>
			{isLoading ? <Loader2Icon className='size-4 animate-spin' /> : "Follow"}
		</Button>
	);
};

export default FollowButton;
