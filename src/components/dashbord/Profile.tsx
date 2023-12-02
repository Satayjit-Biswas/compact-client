const Profile = () => {
	return (
		<div className="join">
			<div className="dropdown dropdown-end">
				<div tabIndex={0} role="button" className="custom_btn ml-[5px]">
					Click
				</div>
				<ul
					tabIndex={0}
					className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li>
						<a>Item 1</a>
					</li>
					<li>
						<a>Item 2</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Profile;
