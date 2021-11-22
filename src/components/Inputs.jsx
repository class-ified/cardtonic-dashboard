export const Input = ({ placeholder, onChange, type, disabled, value, max, ...props }) => {
	return (
		<input
			className={`${
				disabled ? "disabled-input" : "default-input"
			} text-small text-regular`}
			type={type}
			placeholder={placeholder}
			onChange={onChange}
			disabled={disabled}
			value={value}
            maxLength={max}
            {...props}
		/>
	);
};

export const SelectMenu = ({ name, optionsData, firstOption, onChange, ...props }) => {
	return (
		<div className="default-select-box">
			<select
				className="text-vbold text-small default-input"
				name={name}
				id={name}
				onChange={onChange}
				onBlur={onChange}
                {...props}
			>
				<option value="">{firstOption}</option>
				{optionsData?.map((option) => (
					<option value={option.value}>{option.label}</option>
				))}
			</select>

			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1.35288 6.95043C2.00437 4.17301 4.17301 2.00437 6.95043 1.35288C8.95626 0.882374 11.0437 0.882375 13.0496 1.35288C15.827 2.00437 17.9956 4.17301 18.6471 6.95044C19.1176 8.95626 19.1176 11.0437 18.6471 13.0496C17.9956 15.827 15.827 17.9956 13.0496 18.6471C11.0437 19.1176 8.95626 19.1176 6.95044 18.6471C4.17301 17.9956 2.00437 15.827 1.35288 13.0496C0.882374 11.0437 0.882374 8.95626 1.35288 6.95043Z"
					stroke="#00CEDE"
					stroke-width="1.5"
				/>
				<path
					d="M12.5 9L10 11.5L7.5 9"
					stroke="#00CEDE"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
	);
};
