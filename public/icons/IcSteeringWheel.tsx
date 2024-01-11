import { SizeImage } from "@/constants/types/homeType";

export const IcSteeringWheel = ({ width, height }: SizeImage) => {
  return (
    <div style={{ width, height }}>
      <svg viewBox="0 0 20 20" fill="none">
        <path
          d="M10 0C4.49383 0 0 4.4941 0 10C0 15.5063 4.4941 20 10 20C15.5063 20 20 15.5059 20 10C20 4.49383 15.5059 0 10 0ZM10 2.38281C13.8017 2.38281 16.9617 5.18234 17.527 8.82812H15.495C14.2067 8.82812 12.9826 8.31113 12.1367 7.40973C10.9805 6.17746 9.01965 6.17707 7.86328 7.40969C7.01738 8.31113 5.79332 8.82812 4.50492 8.82812H2.47297C3.03832 5.18234 6.19832 2.38281 10 2.38281ZM10 12.3438C9.03078 12.3438 8.24219 11.5552 8.24219 10.5859C8.24219 9.61664 9.03078 8.82812 10 8.82812C10.9693 8.82812 11.7578 9.61664 11.7578 10.5859C11.7578 11.5552 10.9693 12.3438 10 12.3438ZM2.90703 12.7772C3.57773 12.5141 4.06203 12.3438 4.72656 12.3438C6.86281 12.3438 8.52418 14.2474 8.20238 16.3863H8.20102C8.1532 16.7137 8.05914 17.0309 7.92348 17.3295C5.6282 16.6783 3.77074 14.9755 2.90703 12.7772ZM12.077 17.3293C11.9376 17.0229 11.8456 16.7057 11.799 16.3863H11.7976C11.4227 13.8939 13.7234 11.8374 16.1083 12.4435C16.3597 12.5074 16.6743 12.613 17.0929 12.7773C16.2293 14.9754 14.372 16.6781 12.077 17.3293Z"
          fill="#5D5FC0" />
      </svg>
    </div>
  )
}