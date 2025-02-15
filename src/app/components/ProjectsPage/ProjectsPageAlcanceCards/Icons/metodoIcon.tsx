import { useTheme } from 'next-themes';
import React from 'react'

const MetodoIcon = () => {
     const { theme, setTheme } = useTheme();
			const color = theme === "dark" ? "#ffffff" : "#1a1d12";
  return (
		<div>
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M16.5 3.2H18.75C19.3467 3.2 19.919 3.43179 20.341 3.84437C20.7629 4.25695 21 4.81652 21 5.4V20.8C21 21.3835 20.7629 21.9431 20.341 22.3556C19.919 22.7682 19.3467 23 18.75 23H5.25C4.65326 23 4.08097 22.7682 3.65901 22.3556C3.23705 21.9431 3 21.3835 3 20.8V5.4C3 4.81652 3.23705 4.25695 3.65901 3.84437C4.08097 3.43179 4.65326 3.2 5.25 3.2H7.5M8.625 1H15.375C15.9963 1 16.5 1.49249 16.5 2.1V4.3C16.5 4.90751 15.9963 5.4 15.375 5.4H8.625C8.00368 5.4 7.5 4.90751 7.5 4.3V2.1C7.5 1.49249 8.00368 1 8.625 1Z'
                  stroke={color}
                  stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</svg>
		</div>
	);
}

export default MetodoIcon
