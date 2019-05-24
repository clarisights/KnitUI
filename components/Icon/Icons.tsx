import React from "react"

type IconType = {
  height?: string
  width?: string
  fill?: string
}

// Icon names starting with o follow "outline" theme

export const o360 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 7C6.48 7 2 9.24 2 12C2 14.24 4.94 16.13 9 16.77V20L13 16L9 12V14.73C5.85 14.17 4 12.83 4 12C4 10.94 7.04 9 12 9C16.96 9 20 10.94 20 12C20 12.73 18.54 13.89 16 14.53V16.58C19.53 15.81 22 14.05 22 12C22 9.24 17.52 7 12 7Z" />
  </svg>
)
export const o3DRotation = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7.53006 21.48C4.26006 19.94 1.92006 16.76 1.56006 13H0.0600586C0.570059 19.16 5.72006 24 12.0101 24L12.6701 23.97L8.86006 20.16L7.53006 21.48ZM8.42006 14.96C8.23006 14.96 8.05006 14.93 7.90006 14.88C7.74006 14.82 7.61006 14.75 7.50006 14.64C7.39006 14.54 7.30006 14.42 7.24006 14.27C7.18006 14.13 7.15006 13.97 7.15006 13.8H5.85006C5.85006 14.16 5.92006 14.48 6.06006 14.75C6.20006 15.02 6.39006 15.25 6.62006 15.44C6.86006 15.62 7.13006 15.76 7.44006 15.85C7.74006 15.95 8.06006 16 8.40006 16C8.77006 16 9.12006 15.95 9.43006 15.85C9.75006 15.75 10.0301 15.6 10.2601 15.41C10.4901 15.22 10.6801 14.98 10.8101 14.69C10.9401 14.4 11.0101 14.08 11.0101 13.72C11.0101 13.53 10.9901 13.34 10.9401 13.16C10.8901 12.98 10.8201 12.81 10.7101 12.65C10.6101 12.49 10.4701 12.35 10.3101 12.22C10.1401 12.09 9.94006 11.99 9.70006 11.91C9.90006 11.82 10.0701 11.71 10.2201 11.58C10.3701 11.45 10.4901 11.31 10.5901 11.16C10.6901 11.01 10.7601 10.86 10.8101 10.7C10.8601 10.54 10.8801 10.38 10.8801 10.22C10.8801 9.86 10.8201 9.54 10.7001 9.26C10.5801 8.98 10.4101 8.75 10.1901 8.57C9.99006 8.38 9.72006 8.24 9.42006 8.14C9.11006 8.05 8.77006 8 8.40006 8C8.04006 8 7.71006 8.05 7.40006 8.16C7.10006 8.27 6.83006 8.42 6.61006 8.61C6.40006 8.8 6.23006 9.02 6.10006 9.28C5.98006 9.54 5.92006 9.82 5.92006 10.13H7.22006C7.22006 9.96 7.25006 9.81 7.31006 9.68C7.37006 9.55 7.45006 9.43 7.56006 9.34C7.67006 9.25 7.79006 9.17 7.94006 9.12C8.09006 9.07 8.24006 9.04 8.42006 9.04C8.82006 9.04 9.12006 9.14 9.31006 9.35C9.50006 9.55 9.60006 9.84 9.60006 10.21C9.60006 10.39 9.57006 10.55 9.52006 10.7C9.47006 10.85 9.38006 10.97 9.27006 11.07C9.16006 11.17 9.02006 11.25 8.86006 11.31C8.70006 11.37 8.50006 11.4 8.28006 11.4H7.51006V12.43H8.28006C8.50006 12.43 8.70006 12.45 8.88006 12.5C9.06006 12.55 9.21006 12.63 9.33006 12.73C9.45006 12.84 9.55006 12.97 9.62006 13.13C9.69006 13.29 9.72006 13.48 9.72006 13.7C9.72006 14.11 9.60006 14.42 9.37006 14.63C9.14006 14.86 8.82006 14.96 8.42006 14.96ZM16.9701 9.04C16.6501 8.71 16.2701 8.45 15.8301 8.27C15.3901 8.09 14.9001 8 14.3601 8H12.0001V16H14.3001C14.8501 16 15.3601 15.91 15.8101 15.73C16.2601 15.55 16.6501 15.3 16.9701 14.97C17.2901 14.64 17.5401 14.24 17.7101 13.78C17.8801 13.31 17.9701 12.79 17.9701 12.21V11.81C17.9701 11.23 17.8801 10.71 17.7101 10.24C17.5401 9.77 17.2901 9.37 16.9701 9.04ZM16.5801 12.2C16.5801 12.62 16.5301 12.99 16.4401 13.33C16.3401 13.66 16.2001 13.95 16.0101 14.18C15.8201 14.41 15.5801 14.59 15.3001 14.71C15.0101 14.83 14.6801 14.89 14.3101 14.89H13.4001V9.12H14.3701C15.0901 9.12 15.6401 9.35 16.0101 9.81C16.3901 10.27 16.5801 10.93 16.5801 11.8V12.2ZM12.0101 0L11.3501 0.03L15.1601 3.84L16.4901 2.51C19.7601 4.06 22.1001 7.23 22.4501 10.99H23.9501C23.4501 4.84 18.3001 0 12.0101 0Z" />
  </svg>
)
export const o4K = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM19 19H5V5H19V19ZM9.5 15H11V13.51H12V12H11V9H9.5V12H8V9H6.5V13.5H9.5V15ZM18.2 15L16.2 12L18.2 9H16.5L14.5 12L16.5 15H18.2ZM14.5 12V9H13V15H14.5V12Z" />
  </svg>
)
export const oAcUnit = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 11H17.83L21.07 7.76L19.66 6.34L15 11H13V9L17.66 4.34L16.24 2.93L13 6.17V2H11V6.17L7.76 2.93L6.34 4.34L11 9V11H9L4.34 6.34L2.93 7.76L6.17 11H2V13H6.17L2.93 16.24L4.34 17.66L9 13H11V15L6.34 19.66L7.76 21.07L11 17.83V22H13V17.83L16.24 21.07L17.66 19.66L13 15V13H15L19.66 17.66L21.07 16.24L17.83 13H22V11Z" />
  </svg>
)
export const oAccessAlarm = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 5.71999L17.4 1.85999L16.11 3.38999L20.71 7.24999L22 5.71999ZM7.88 3.38999L6.6 1.85999L2 5.70999L3.29 7.23998L7.88 3.38999ZM12.5 7.99999H11V14L15.75 16.85L16.5 15.62L12.5 13.25V7.99999ZM12 3.99999C7.03 3.99999 3 8.02999 3 13C3 17.97 7.02 22 12 22C16.97 22 21 17.97 21 13C21 8.02999 16.97 3.99999 12 3.99999ZM12 20C8.13 20 5 16.87 5 13C5 9.12999 8.13 5.99999 12 5.99999C15.87 5.99999 19 9.12999 19 13C19 16.87 15.87 20 12 20Z" />
  </svg>
)
export const oAccessAlarms = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 5.69999L17.4 1.79999L16.1 3.29999L20.7 7.19999L22 5.69999ZM7.9 3.39999L6.6 1.89999L2 5.69999L3.3 7.19999L7.9 3.39999ZM12.5 7.99999H11V14L15.7 16.9L16.5 15.7L12.5 13.3V7.99999ZM12 3.99999C7 3.99999 3 7.99999 3 13C3 18 7 22 12 22C17 22 21 18 21 13C21 7.99999 17 3.99999 12 3.99999ZM12 20C8.1 20 5 16.9 5 13C5 9.09999 8.1 5.99999 12 5.99999C15.9 5.99999 19 9.09999 19 13C19 16.9 15.9 20 12 20Z" />
  </svg>
)
export const oAccessTime = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" />
  </svg>
)
export const oAccessibility = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z" />
  </svg>
)
export const oAccessibilityNew = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20.5 6C17.89 6.7 14.83 7 12 7C9.17 7 6.11 6.7 3.5 6L3 8C4.86 8.5 7 8.83 9 9V22H11V16H13V22H15V9C17 8.83 19.14 8.5 21 8L20.5 6ZM12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6Z" />
  </svg>
)
export const oAccessible = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4ZM19 11V13C17.25 12.99 15.29 12.12 14 11.05V14.5H17C18.1 14.5 19 15.4 19 16.5V22H17V17H12C10.9 17 10 16.1 10 15V9.09C10 8.04 10.76 7.11 11.81 7.02C12.25 6.98 12.65 7.08 13 7.28H13.01C13.015 7.28 13.0175 7.2825 13.02 7.285C13.0225 7.2875 13.025 7.29 13.03 7.29C13.26 7.4 13.47 7.55 13.64 7.74L14.93 9.17C15.91 10.25 17.46 11.02 19 11ZM7 17C7 18.66 8.34 20 10 20C11.31 20 12.42 19.16 12.83 18H14.9C14.44 20.28 12.42 22 10 22C7.24 22 5 19.76 5 17C5 14.58 6.72 12.56 9 12.1V14.17C7.84 14.59 7 15.69 7 17Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oAccessibleForward = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 4.54001C20 5.64458 19.1046 6.54001 18 6.54001C16.8954 6.54001 16 5.64458 16 4.54001C16 3.43544 16.8954 2.54001 18 2.54001C19.1046 2.54001 20 3.43544 20 4.54001ZM13 17H15C15 19.76 12.76 22 10 22C7.24 22 5 19.76 5 17C5 14.24 7.24 12 10 12V14C8.35 14 7 15.35 7 17C7 18.65 8.35 20 10 20C11.65 20 13 18.65 13 17ZM16.14 13.5H18C19.1 13.5 20 14.4 20 15.5V21H18V16H13.02C11.56 16 10.57 14.43 11.17 13.1L13 9H10.79L10.14 10.53L8.22 10L8.89 8.2C9.22 7.47 9.95 7 10.76 7H15.96C17.44 7 18.42 8.5 17.81 9.83L16.14 13.5Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oAccountBalance = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6.5 10H4.5V17H6.5V10ZM12.5 10H10.5V17H12.5V10ZM21 19H2V21H21V19ZM18.5 10H16.5V17H18.5V10ZM11.5 3.26L16.71 6H6.29L11.5 3.26ZM11.5 1L2 6V8H21V6L11.5 1Z" />
  </svg>
)
export const oAccountBalanceWallet = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 5V7.28C21.59 7.63 22 8.26 22 9V15C22 15.74 21.59 16.37 21 16.72V19C21 20.1 20.1 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3H19C20.1 3 21 3.9 21 5ZM13 15H20V9H13V15ZM5 5V19H19V17H13C11.9 17 11 16.1 11 15V9C11 7.9 11.9 7 13 7H19V5H5ZM17.5 12C17.5 12.8284 16.8284 13.5 16 13.5C15.1716 13.5 14.5 12.8284 14.5 12C14.5 11.1716 15.1716 10.5 16 10.5C16.8284 10.5 17.5 11.1716 17.5 12Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oAccountBox = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 5V19H5V5H19ZM19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 12C10.35 12 9 10.65 9 9C9 7.35 10.35 6 12 6C13.65 6 15 7.35 15 9C15 10.65 13.65 12 12 12ZM12 8C11.45 8 11 8.45 11 9C11 9.55 11.45 10 12 10C12.55 10 13 9.55 13 9C13 8.45 12.55 8 12 8ZM18 18H6V16.47C6 13.97 9.97 12.89 12 12.89C14.03 12.89 18 13.97 18 16.47V18ZM8.31 16H15.69C15 15.44 13.31 14.88 12 14.88C10.69 14.88 8.99 15.44 8.31 16Z" />
  </svg>
)
export const oAccountCircle = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11Z" />
  </svg>
)
export const oAdb = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5 16C5 19.87 8.13 23 12 23C15.87 23 19 19.87 19 16V12H5V16ZM16.12 4.37L18.22 2.27L17.4 1.44L15.1 3.75C14.16 3.28 13.12 3 12 3C10.88 3 9.84 3.28 8.91 3.75L6.6 1.44L5.78 2.27L7.88 4.37C6.14 5.64 5 7.68 5 10V11H19V10C19 7.68 17.86 5.64 16.12 4.37ZM9 9C8.45 9 8 8.55 8 8C8 7.45 8.45 7 9 7C9.55 7 10 7.45 10 8C10 8.55 9.55 9 9 9ZM15 9C14.45 9 14 8.55 14 8C14 7.45 14.45 7 15 7C15.55 7 16 7.45 16 8C16 8.55 15.55 9 15 9Z" />
  </svg>
)
export const oAdd = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
  </svg>
)
export const oAddAPhoto = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 6H17.83L16 4H10V6H15.12L16.95 8H21V20H5V11H3V20C3 21.1 3.9 22 5 22H21C22.1 22 23 21.1 23 20V8C23 6.9 22.1 6 21 6ZM8 14C8 16.76 10.24 19 13 19C15.76 19 18 16.76 18 14C18 11.24 15.76 9 13 9C10.24 9 8 11.24 8 14ZM13 11C14.65 11 16 12.35 16 14C16 15.65 14.65 17 13 17C11.35 17 10 15.65 10 14C10 12.35 11.35 11 13 11ZM5 6H8V4H5V1H3V4H0V6H3V9H5V6Z" />
  </svg>
)
export const oAddAlarm = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7.88 3.39L6.6 1.86L2 5.71L3.29 7.24L7.88 3.39ZM22 5.72L17.4 1.86L16.11 3.39L20.71 7.25L22 5.72ZM12 4C7.03 4 3 8.03 3 13C3 17.97 7.02 22 12 22C16.97 22 21 17.97 21 13C21 8.03 16.97 4 12 4ZM12 20C8.13 20 5 16.87 5 13C5 9.13 8.13 6 12 6C15.87 6 19 9.13 19 13C19 16.87 15.87 20 12 20ZM13 9H11V12H8V14H11V17H13V14H16V12H13V9Z" />
  </svg>
)
export const oAddAlert = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10.01 21.01C10.01 22.11 10.9 23 12 23C13.1 23 13.99 22.11 13.99 21.01H10.01ZM12 6C14.76 6 17 8.24 17 11V18H7V11C7 8.24 9.24 6 12 6ZM12 1.5C11.17 1.5 10.5 2.17 10.5 3V4.17C7.36 4.85 5 7.65 5 11V17L3 19V20H21V19L19 17V11C19 7.65 16.64 4.85 13.5 4.17V3C13.5 2.17 12.83 1.5 12 1.5ZM13 8H11V11H8V13H11V16H13V13H16V11H13V8Z" />
  </svg>
)
export const oAddBox = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM11 17H13V13H17V11H13V7H11V11H7V13H11V17Z" />
  </svg>
)
export const oAddCircle = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z" />
  </svg>
)
export const oAddCircleOutline = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
  </svg>
)
export const oAddComment = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 4C22 2.9 21.1 2 20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22V4ZM20 17.17L18.83 16H4V4H20V17.17ZM13 5H11V9H7V11H11V15H13V11H17V9H13V5Z" />
  </svg>
)
export const oAddLocation = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.14 2 5 5.14 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.14 15.86 2 12 2ZM7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 11.88 14.12 16.19 12 18.88C9.92 16.21 7 11.85 7 9ZM13 6H11V8H9V10H11V12H13V10H15V8H13V6Z" />
  </svg>
)
export const oAddPhotoAlternate = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 20H4V6H13V4H4C2.9 4 2 4.9 2 6V20C2 21.1 2.9 22 4 22H18C19.1 22 20 21.1 20 20V11H18V20ZM10.21 16.83L8.25 14.47L5.5 18H16.5L12.96 13.29L10.21 16.83ZM20 4V1H18V4H15C15.01 4.01 15 6 15 6H18V8.99C18.01 9 20 8.99 20 8.99V6H23V4H20Z" />
  </svg>
)
export const oAddShoppingCart = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 9H13V6H16V4H13V1H11V4H8V6H11V9ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L21.16 4.96L19.42 4L15.55 11H8.53L4.27 2H1V4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H19V15H7L8.1 13Z" />
  </svg>
)
export const oAddToHomeScreen = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 1.01L8 1C6.9 1 6 1.9 6 3V6H8V5H18V19H8V18H6V21C6 22.1 6.9 23 8 23H18C19.1 23 20 22.1 20 21V3C20 1.9 19.1 1.01 18 1.01ZM10 15H12V8H5V10H8.59L3 15.59L4.41 17L10 11.41V15Z" />
  </svg>
)
export const oAddToPhotos = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16ZM13 15H15V11H19V9H15V5H13V9H9V11H13V15Z" />
  </svg>
)
export const oAddToQueue = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 15H13V12H16V10H13V7H11V10H8V12H11V15ZM21 3H3C1.89 3 1 3.89 1 5V17C1 18.1 1.89 19 3 19H8V21H16V19H21C22.1 19 23 18.1 23 17V5C23 3.89 22.1 3 21 3ZM21 17H3V5H21V17Z" />
  </svg>
)
export const oAdjust = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 12C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12Z" />
  </svg>
)
export const oAirlineSeatFlat = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5 13C5.78 13 6.55 12.7 7.14 12.1C8.3 10.91 8.28 9.02 7.1 7.86C6.51 7.29 5.75 7 5 7C4.22 7 3.45 7.3 2.86 7.9C1.7 9.09 1.72 10.98 2.9 12.14C3.49 12.71 4.25 13 5 13ZM4.29 9.3C4.48 9.11 4.73 9 5 9C5.26 9 5.51 9.1 5.7 9.28C6.1 9.67 6.1 10.29 5.72 10.69C5.52 10.89 5.27 11 5 11C4.74 11 4.49 10.9 4.3 10.72C3.9 10.32 3.9 9.7 4.29 9.3ZM18 7H9V13H22V11C22 8.79 20.21 7 18 7ZM11 11V9H18C19.1 9 20 9.9 20 11H11ZM2 16H8V18H16V16H22V14H2V16Z" />
  </svg>
)
export const oAirlineSeatFlatAngled = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6 6.5C6.31 6.5 6.7 6.65 6.9 7.06C7.14 7.56 6.92 8.16 6.43 8.4C6.29 8.46 6.15 8.5 6 8.5C5.7 8.5 5.3 8.35 5.11 7.94C4.94 7.6 5.01 7.31 5.06 7.16C5.11 7.02 5.24 6.76 5.57 6.6C5.71 6.54 5.85 6.5 6 6.5ZM12.47 8.61L19.16 11.02C19.68 11.21 20.09 11.58 20.31 12.07C20.53 12.55 20.56 13.1 20.37 13.6L20.36 13.62L11.77 10.51L12.47 8.61ZM10 15.19L14 16.63V17H10V15.19ZM6 4.5C5.56 4.5 5.12 4.6 4.7 4.8C3.21 5.51 2.58 7.3 3.3 8.8C3.81 9.87 4.88 10.5 6 10.5C6.44 10.5 6.88 10.4 7.3 10.2C8.79 9.48 9.42 7.69 8.71 6.2C8.19 5.13 7.12 4.5 6 4.5ZM11.28 6.05L9.2 11.71L21.56 16.18L22.25 14.29C23.02 12.2 21.94 9.9 19.84 9.14L11.28 6.05ZM2.19 10.25L1.5 12.14L8 14.48V19H16V17.37L20.52 19L21.21 17.11L2.19 10.25Z" />
  </svg>
)
export const oAirlineSeatIndividualSuite = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 14C8.66 14 10 12.66 10 11C10 9.34 8.66 8 7 8C5.34 8 4 9.34 4 11C4 12.66 5.34 14 7 14ZM7 10C7.55 10 8 10.45 8 11C8 11.55 7.55 12 7 12C6.45 12 6 11.55 6 11C6 10.45 6.45 10 7 10ZM19 7H11V15H3V7H1V17H23V11C23 8.79 21.21 7 19 7ZM21 15H13V9H19C20.1 9 21 9.9 21 11V15Z" />
  </svg>
)
export const oAirlineSeatLegroomExtra = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12V3H2V12C2 14.76 4.24 17 7 17H13V15H7C5.34 15 4 13.66 4 12ZM22.83 17.24C22.45 16.52 21.54 16.27 20.8 16.61L19.71 17.11L16.3 10.13C15.96 9.45 15.27 9 14.51 9H11V3H5V11C5 12.66 6.34 14 8 14H15L18.41 21L22.13 19.3C22.9 18.94 23.23 18 22.83 17.24Z" />
  </svg>
)
export const oAirlineSeatLegroomNormal = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12V3H3V12C3 14.76 5.24 17 8 17H14V15H8C6.34 15 5 13.66 5 12ZM20.5 18H19V11C19 9.9 18.1 9 17 9H12V3H6V11C6 12.65 7.35 14 9 14H16V21H20.5C21.33 21 22 20.33 22 19.5C22 18.67 21.33 18 20.5 18Z" />
  </svg>
)
export const oAirlineSeatLegroomReduced = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.97 19.2C20.15 20.16 19.42 21 18.5 21H14V18L15 14H9C7.35 14 6 12.65 6 11V3H12V9H17C18.1 9 19 9.9 19 11L17 18H18.44C19.17 18 19.83 18.49 19.97 19.2ZM5 12V3H3V12C3 14.76 5.24 17 8 17H12V15H8C6.34 15 5 13.66 5 12Z" />
  </svg>
)
export const oAirlineSeatReclineExtra = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5.35 5.64C4.45 5 4.23 3.76 4.86 2.85C5.49 1.95 6.74 1.73 7.65 2.36C8.55 3 8.77 4.24 8.14 5.15C7.5 6.05 6.26 6.27 5.35 5.64ZM16 19H8.93C7.45 19 6.19 17.92 5.97 16.46L4 7H2L3.99 16.76C4.37 19.2 6.47 21 8.94 21H16V19ZM16.23 15H11.35L10.32 10.9C11.9 11.79 13.6 12.44 15.47 12.12V9.99C13.84 10.3 12.03 9.72 10.78 8.74L9.14 7.47C8.91 7.29 8.65 7.17 8.38 7.09C8.06 7 7.72 6.97 7.39 7.03H7.37C6.14 7.25 5.32 8.42 5.53 9.64L6.88 15.56C7.16 16.98 8.39 18 9.83 18H16.68L20.5 21L22 19.5L16.23 15Z" />
  </svg>
)
export const oAirlineSeatReclineNormal = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7.59 5.41C6.81 4.63 6.81 3.36 7.59 2.58C8.37 1.8 9.64 1.8 10.42 2.58C11.2 3.36 11.2 4.63 10.42 5.41C9.63 6.2 8.37 6.2 7.59 5.41ZM6 16V7H4V16C4 18.76 6.24 21 9 21H15V19H9C7.34 19 6 17.66 6 16ZM20 20.07L14.93 15H11.5V11.32C12.9 12.47 15.1 13.48 17 13.48V11.32C15.34 11.34 13.39 10.45 12.33 9.27999L10.93 7.73C10.74 7.52 10.5 7.35 10.24 7.23C9.95 7.09 9.62 7 9.28 7H9.25C8.01 7 7 8.01 7 9.25V15C7 16.66 8.34 18 10 18H15.07L18.57 21.5L20 20.07Z" />
  </svg>
)
export const oAirplanemodeActive = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" />
  </svg>
)
export const oAirplanemodeInactive = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V6.61L18.65 15.26L21 16ZM18.73 21L20.14 19.59L4.41 3.86L3 5.27L7.99 10.26L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V15.27L18.73 21Z" />
  </svg>
)
export const oAirplay = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6 22H18L12 16L6 22ZM21 3H3C1.9 3 1 3.9 1 5V17C1 18.1 1.9 19 3 19H7V17H3V5H21V17H17V19H21C22.1 19 23 18.1 23 17V5C23 3.9 22.1 3 21 3Z" />
  </svg>
)
export const oAirportShuttle = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 5H3C1.9 5 1 5.89 1 7V16H3C3 17.66 4.34 19 6 19C7.66 19 9 17.66 9 16H15C15 17.66 16.34 19 18 19C19.66 19 21 17.66 21 16H23V11L17 5ZM15 7H16L19 10H15V7ZM9 7H13V10H9V7ZM3 7H7V10H3V7ZM6 17.25C5.31 17.25 4.75 16.69 4.75 16C4.75 15.31 5.31 14.75 6 14.75C6.69 14.75 7.25 15.31 7.25 16C7.25 16.69 6.69 17.25 6 17.25ZM18 17.25C17.31 17.25 16.75 16.69 16.75 16C16.75 15.31 17.31 14.75 18 14.75C18.69 14.75 19.25 15.31 19.25 16C19.25 16.69 18.69 17.25 18 17.25ZM21 14H20.22C19.67 13.39 18.88 13 18 13C17.12 13 16.33 13.39 15.78 14H8.22C7.67 13.39 6.89 13 6 13C5.11 13 4.33 13.39 3.78 14H3V12H21V14Z" />
  </svg>
)
export const oAlarm = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 8H11V14L15.75 16.85L16.5 15.62L12.5 13.25V8ZM17.337 1.81L21.944 5.655L20.664 7.19L16.054 3.347L17.337 1.81ZM6.66301 1.81L7.94501 3.346L3.33701 7.19L2.05701 5.654L6.66301 1.81ZM12 4C7.03001 4 3.00001 8.03 3.00001 13C3.00001 17.97 7.03001 22 12 22C16.97 22 21 17.97 21 13C21 8.03 16.97 4 12 4ZM12 20C8.14001 20 5.00001 16.86 5.00001 13C5.00001 9.14 8.14001 6 12 6C15.86 6 19 9.14 19 13C19 16.86 15.86 20 12 20Z" />
  </svg>
)
export const oAlarmAdd = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.337 1.81L21.944 5.655L20.664 7.19L16.054 3.347L17.337 1.81ZM6.66301 1.81L7.94501 3.346L3.33701 7.19L2.05701 5.654L6.66301 1.81ZM12 4C7.03001 4 3.00001 8.03 3.00001 13C3.00001 17.97 7.03001 22 12 22C16.97 22 21 17.97 21 13C21 8.03 16.97 4 12 4ZM12 20C8.14001 20 5.00001 16.86 5.00001 13C5.00001 9.14 8.14001 6 12 6C15.86 6 19 9.14 19 13C19 16.86 15.86 20 12 20ZM13 9H11V12H8.00001V14H11V17H13V14H16V12H13V9Z" />
  </svg>
)
export const oAlarmOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10.04 6.29C10.66 6.11 11.32 6 12 6C15.86 6 19 9.14 19 13C19 13.68 18.89 14.34 18.71 14.96L20.27 16.52C20.74 15.44 21 14.25 21 13C21 8.03 16.97 4 12 4C10.75 4 9.55999 4.26 8.46999 4.72L10.04 6.29ZM17.337 1.81L21.944 5.655L20.664 7.19L16.054 3.347L17.337 1.81ZM3.01999 2.1L1.60999 3.51L2.97999 4.88L2.05999 5.65L3.33999 7.19L4.39999 6.31L5.19999 7.11C3.82999 8.69 2.99999 10.75 2.99999 13C2.99999 17.97 7.02999 22 12 22C14.25 22 16.31 21.17 17.89 19.8L19.99 21.9L21.4 20.49L3.01999 2.1ZM12 20C8.13999 20 4.99999 16.86 4.99999 13C4.99999 11.3 5.60999 9.74 6.61999 8.53L16.47 18.38C15.26 19.39 13.7 20 12 20ZM7.47999 3.73L7.93999 3.35L6.65999 1.81L6.05999 2.31L7.47999 3.73Z" />
  </svg>
)
export const oAlarmOn = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10.54 14.53L8.41001 12.4L7.35001 13.46L10.53 16.64L16.53 10.64L15.47 9.58L10.54 14.53ZM17.337 1.81L21.944 5.655L20.664 7.19L16.054 3.347L17.337 1.81ZM6.66301 1.81L7.94501 3.346L3.33701 7.19L2.05701 5.654L6.66301 1.81ZM12 4C7.03001 4 3.00001 8.03 3.00001 13C3.00001 17.97 7.03001 22 12 22C16.97 22 21 17.97 21 13C21 8.03 16.97 4 12 4ZM12 20C8.14001 20 5.00001 16.86 5.00001 13C5.00001 9.14 8.14001 6 12 6C15.86 6 19 9.14 19 13C19 16.86 15.86 20 12 20Z" />
  </svg>
)
export const oAlbum = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 7.5C9.51 7.5 7.5 9.51 7.5 12C7.5 14.49 9.51 16.5 12 16.5C14.49 16.5 16.5 14.49 16.5 12C16.5 9.51 14.49 7.5 12 7.5ZM12 13C11.45 13 11 12.55 11 12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12C13 12.55 12.55 13 12 13Z" />
  </svg>
)
export const oAllInbox = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V12C3 13.1 3.9 14 5 14H19C20.1 14 21 13.1 21 12V5C21 3.9 20.1 3 19 3ZM5 10H8.13C8.34 10.78 8.8 11.47 9.4 12H5V10ZM19 12H14.6C15.2 11.47 15.66 10.78 15.87 10H19V12ZM19 8H14V9C14 10.07 13.07 11 12 11C10.93 11 10 10.07 10 9V8H5V5H19V8ZM17 15H14V16C14 16.47 13.81 16.9 13.52 17.25C13.15 17.7 12.6 18 12 18C11.4 18 10.85 17.7 10.48 17.25C10.19 16.9 10 16.47 10 16V15H3V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V15H17ZM5 17H8.13C8.15 17.09 8.19 17.17 8.22 17.25C8.46 17.93 8.87 18.53 9.4 19H5V17ZM19 19H14.6C15.14 18.53 15.55 17.93 15.78 17.25C15.81 17.17 15.85 17.09 15.87 17H19V19Z" />
  </svg>
)
export const oAllInclusive = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18.6 6.62C17.16 6.62 15.8 7.17999 14.83 8.14999L7.8 14.39C7.16 15.03 6.31 15.38 5.4 15.38C3.53 15.38 2.01 13.87 2.01 12C2.01 10.13 3.53 8.62 5.4 8.62C6.31 8.62 7.16 8.96999 7.84 9.64999L8.97 10.65L10.48 9.31L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62C2.42 6.62 0 9.04 0 12C0 14.96 2.42 17.38 5.4 17.38C6.84 17.38 8.2 16.82 9.17 15.85L16.2 9.60999C16.84 8.97 17.69 8.62 18.6 8.62C20.47 8.62 21.99 10.13 21.99 12C21.99 13.87 20.47 15.38 18.6 15.38C17.7 15.38 16.84 15.03 16.16 14.35L15.02 13.34L13.51 14.68L14.78 15.8C15.8 16.81 17.15 17.37 18.6 17.37C21.58 17.37 24 14.96 24 11.99C24 9.01999 21.58 6.62 18.6 6.62Z" />
  </svg>
)
export const oAllOut = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4V8L8 4H4ZM16 4L20 8V4H16ZM20 20V16L16 20H20ZM4 20H8L4 16V20ZM19 12C19 8.13 15.87 5 12 5C8.13 5 5 8.13 5 12C5 15.87 8.13 19 12 19C15.87 19 19 15.87 19 12ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z" />
  </svg>
)
export const oAlternateEmail = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 1.95001C6.48 1.95001 2 6.43001 2 11.95C2 17.47 6.48 21.95 12 21.95H17V19.95H12C7.66 19.95 4 16.29 4 11.95C4 7.61001 7.66 3.95001 12 3.95001C16.34 3.95001 20 7.61001 20 11.95V13.38C20 14.17 19.29 14.95 18.5 14.95C17.71 14.95 17 14.17 17 13.38V11.95C17 9.19001 14.76 6.95001 12 6.95001C9.24 6.95001 7 9.19001 7 11.95C7 14.71 9.24 16.95 12 16.95C13.38 16.95 14.64 16.39 15.54 15.48C16.19 16.37 17.31 16.95 18.5 16.95C20.47 16.95 22 15.35 22 13.38V11.95C22 6.43001 17.52 1.95001 12 1.95001ZM12 14.95C10.34 14.95 9 13.61 9 11.95C9 10.29 10.34 8.95001 12 8.95001C13.66 8.95001 15 10.29 15 11.95C15 13.61 13.66 14.95 12 14.95Z"
      fillOpacity="0.9"
    />
  </svg>
)
export const oAndroid = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6 18C6 18.55 6.45 19 7 19H8V22.5C8 23.33 8.67 24 9.5 24C10.33 24 11 23.33 11 22.5V19H13V22.5C13 23.33 13.67 24 14.5 24C15.33 24 16 23.33 16 22.5V19H17C17.55 19 18 18.55 18 18V8H6V18ZM3.5 8C2.67 8 2 8.67 2 9.5V16.5C2 17.33 2.67 18 3.5 18C4.33 18 5 17.33 5 16.5V9.5C5 8.67 4.33 8 3.5 8ZM20.5 8C19.67 8 19 8.67 19 9.5V16.5C19 17.33 19.67 18 20.5 18C21.33 18 22 17.33 22 16.5V9.5C22 8.67 21.33 8 20.5 8ZM15.53 2.16L16.83 0.86C17.03 0.66 17.03 0.35 16.83 0.15C16.63 -0.05 16.32 -0.05 16.12 0.15L14.64 1.63C13.85 1.23 12.95 1 12 1C11.04 1 10.14 1.23 9.34 1.63L7.85 0.15C7.65 -0.05 7.34 -0.05 7.14 0.15C6.94 0.35 6.94 0.66 7.14 0.86L8.45 2.17C6.97 3.26 6 5.01 6 7H18C18 5.01 17.03 3.25 15.53 2.16ZM10 5H9V4H10V5ZM15 5H14V4H15V5Z" />
  </svg>
)
export const oAnnouncement = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16ZM11 5H13V11H11V5ZM11 13H13V15H11V13Z" />
  </svg>
)
export const oApps = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8H8V4H4V8ZM10 20H14V16H10V20ZM4 20H8V16H4V20ZM4 14H8V10H4V14ZM10 14H14V10H10V14ZM16 4V8H20V4H16ZM10 8H14V4H10V8ZM16 14H20V10H16V14ZM16 20H20V16H16V20Z" />
  </svg>
)
export const oArchive = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20.54 5.23L19.15 3.55C18.88 3.21 18.47 3 18 3H6C5.53 3 5.12 3.21 4.84 3.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V6.5C21 6.02 20.83 5.57 20.54 5.23ZM6.24 5H17.76L18.57 5.97H5.44L6.24 5ZM5 19V8H19V19H5ZM13.45 10H10.55V13H8L12 17L16 13H13.45V10Z" />
  </svg>
)
export const oArrowBack = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" />
  </svg>
)
export const oArrowBackIos = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.51 3.87001L15.73 2.10001L5.83997 12L15.74 21.9L17.51 20.13L9.37997 12L17.51 3.87001Z" />
  </svg>
)
export const oArrowDownward = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 12L18.59 10.59L13 16.17V4H11V16.17L5.42 10.58L4 12L12 20L20 12Z" />
  </svg>
)
export const oArrowDropDown = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 10L12 15L17 10H7Z" />
  </svg>
)
export const oArrowDropDownCircle = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 15L8 11H16L12 15Z" />
  </svg>
)
export const oArrowDropUp = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 14L12 9L17 14H7Z" />
  </svg>
)
export const oArrowForward = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" />
  </svg>
)
export const oArrowForwardIos = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6.48999 20.13L8.25999 21.9L18.16 12L8.25999 2.10001L6.48999 3.87001L14.62 12L6.48999 20.13Z" />
  </svg>
)
export const oArrowLeft = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14 7L9 12L14 17V7Z" />
  </svg>
)
export const oArrowRight = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10 17L15 12L10 7V17Z" />
  </svg>
)
export const oArrowRightAlt = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z" />
  </svg>
)
export const oArrowUpward = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12L5.41 13.41L11 7.83V20H13V7.83L18.58 13.42L20 12L12 4L4 12Z" />
  </svg>
)
export const oArtTrack = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 13H14V11H22V13ZM22 7H14V9H22V7ZM14 17H22V15H14V17ZM12 9V15C12 16.1 11.1 17 10 17H4C2.9 17 2 16.1 2 15V9C2 7.9 2.9 7 4 7H10C11.1 7 12 7.9 12 9ZM10.5 15L8.25 12L6.5 14.26L5.25 12.75L3.5 15H10.5Z" />
  </svg>
)
export const oAspectRatio = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 12H17V15H14V17H19V12ZM7 9H10V7H5V12H7V9ZM21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19.01H3V4.99H21V19.01Z" />
  </svg>
)
export const oAssessment = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H9V17H7V10ZM11 7H13V17H11V7ZM15 13H17V17H15V13Z" />
  </svg>
)
export const oAssignment = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 15H14V17H7V15ZM7 11H17V13H7V11ZM7 7H17V9H7V7ZM19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C4.86 3 4.73 3.01 4.6 3.04C4.21 3.12 3.86 3.32 3.59 3.59C3.41 3.77 3.26 3.99 3.16 4.23C3.06 4.46 3 4.72 3 5V19C3 19.27 3.06 19.54 3.16 19.78C3.26 20.02 3.41 20.23 3.59 20.42C3.86 20.69 4.21 20.89 4.6 20.97C4.73 20.99 4.86 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 2.75C12.41 2.75 12.75 3.09 12.75 3.5C12.75 3.91 12.41 4.25 12 4.25C11.59 4.25 11.25 3.91 11.25 3.5C11.25 3.09 11.59 2.75 12 2.75ZM19 19H5V5H19V19Z" />
  </svg>
)
export const oAssignmentInd = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 2.75C12.22 2.75 12.41 2.85 12.55 3C12.67 3.13 12.75 3.31 12.75 3.5C12.75 3.91 12.41 4.25 12 4.25C11.59 4.25 11.25 3.91 11.25 3.5C11.25 3.31 11.33 3.13 11.45 3C11.59 2.85 11.78 2.75 12 2.75ZM19 19H5V5H19V19ZM12 6C10.35 6 9 7.35 9 9C9 10.65 10.35 12 12 12C13.65 12 15 10.65 15 9C15 7.35 13.65 6 12 6ZM12 10C11.45 10 11 9.55 11 9C11 8.45 11.45 8 12 8C12.55 8 13 8.45 13 9C13 9.55 12.55 10 12 10ZM6 16.47V18H18V16.47C18 13.97 14.03 12.89 12 12.89C9.97 12.89 6 13.96 6 16.47ZM8.31 16C9 15.44 10.69 14.88 12 14.88C13.31 14.88 15.01 15.44 15.69 16H8.31Z" />
  </svg>
)
export const oAssignmentLate = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C4.86 3 4.73 3.01 4.6 3.04C4.21 3.12 3.86 3.32 3.59 3.59C3.41 3.77 3.26 3.99 3.16 4.23C3.06 4.46 3 4.72 3 5V19C3 19.27 3.06 19.54 3.16 19.78C3.26 20.02 3.41 20.23 3.59 20.42C3.86 20.69 4.21 20.89 4.6 20.97C4.73 20.99 4.86 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 2.75C12.41 2.75 12.75 3.09 12.75 3.5C12.75 3.91 12.41 4.25 12 4.25C11.59 4.25 11.25 3.91 11.25 3.5C11.25 3.09 11.59 2.75 12 2.75ZM19 19H5V5H19V19Z" />
  </svg>
)
export const oAssignmentReturn = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 14H16V10H12V7L7 12L12 17V14ZM19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C4.86 3 4.73 3.01 4.6 3.04C4.21 3.12 3.86 3.32 3.59 3.59C3.41 3.77 3.26 3.99 3.16 4.23C3.06 4.46 3 4.72 3 5V19C3 19.27 3.06 19.54 3.16 19.78C3.26 20.02 3.41 20.23 3.59 20.42C3.86 20.69 4.21 20.89 4.6 20.97C4.73 20.99 4.86 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 2.75C12.41 2.75 12.75 3.09 12.75 3.5C12.75 3.91 12.41 4.25 12 4.25C11.59 4.25 11.25 3.91 11.25 3.5C11.25 3.09 11.59 2.75 12 2.75ZM19 19H5V5H19V19Z" />
  </svg>
)
export const oAssignmentReturned = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 12H14V8H10V12H7L12 17L17 12ZM19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C4.86 3 4.73 3.01 4.6 3.04C4.21 3.12 3.86 3.32 3.59 3.59C3.41 3.77 3.26 3.99 3.16 4.23C3.06 4.46 3 4.72 3 5V19C3 19.27 3.06 19.54 3.16 19.78C3.26 20.02 3.41 20.23 3.59 20.42C3.86 20.69 4.21 20.89 4.6 20.97C4.73 20.99 4.86 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 2.75C12.41 2.75 12.75 3.09 12.75 3.5C12.75 3.91 12.41 4.25 12 4.25C11.59 4.25 11.25 3.91 11.25 3.5C11.25 3.09 11.59 2.75 12 2.75ZM19 19H5V5H19V19Z" />
  </svg>
)
export const oAssignmentTurnedIn = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 9L16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9ZM19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C4.86 3 4.73 3.01 4.6 3.04C4.21 3.12 3.86 3.32 3.59 3.59C3.41 3.77 3.26 3.99 3.16 4.23C3.06 4.46 3 4.72 3 5V19C3 19.27 3.06 19.54 3.16 19.78C3.26 20.02 3.41 20.23 3.59 20.42C3.86 20.69 4.21 20.89 4.6 20.97C4.73 20.99 4.86 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 2.75C12.41 2.75 12.75 3.09 12.75 3.5C12.75 3.91 12.41 4.25 12 4.25C11.59 4.25 11.25 3.91 11.25 3.5C11.25 3.09 11.59 2.75 12 2.75ZM19 19H5V5H19V19Z" />
  </svg>
)
export const oAssistant = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 2H5C3.9 2 3 2.9 3 4V18C3 19.1 3.9 20 5 20H9L12 23L15 20H19C20.1 20 21 19.1 21 18V4C21 2.9 20.1 2 19 2ZM19 18H14.17L13.58 18.59L12 20.17L10.41 18.58L9.83 18H5V4H19V18ZM12 17L13.88 12.88L18 11L13.88 9.12L12 5L10.12 9.12L6 11L10.12 12.88L12 17Z" />
  </svg>
)
export const oAssistantPhoto = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12.36 6L12.44 6.39L12.76 8H18V14H14.64L14.56 13.61L14.24 12H7V6H12.36ZM14 4H5V21H7V14H12.6L13 16H20V6H14.4L14 4Z" />
  </svg>
)
export const oAtm = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M8 9V10.5H10.25V15H11.75V10.5H14V9H8ZM6 9H3C2.45 9 2 9.45 2 10V15H3.5V13.5H5.5V15H7V10C7 9.45 6.55 9 6 9ZM5.5 12H3.5V10.5H5.5V12ZM21 9H16.5C15.95 9 15.5 9.45 15.5 10V15H17V10.5H18V14H19.5V10.49H20.5V15H22V10C22 9.45 21.55 9 21 9Z" />
  </svg>
)
export const oAttachFile = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5 6V17.5C16.5 19.71 14.71 21.5 12.5 21.5C10.29 21.5 8.5 19.71 8.5 17.5V5C8.5 3.62 9.62 2.5 11 2.5C12.38 2.5 13.5 3.62 13.5 5V15.5C13.5 16.05 13.05 16.5 12.5 16.5C11.95 16.5 11.5 16.05 11.5 15.5V6H10V15.5C10 16.88 11.12 18 12.5 18C13.88 18 15 16.88 15 15.5V5C15 2.79 13.21 1 11 1C8.79 1 7 2.79 7 5V17.5C7 20.54 9.46 23 12.5 23C15.54 23 18 20.54 18 17.5V6H16.5Z" />
  </svg>
)
export const oAttachMoney = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.7999 10.9C9.52995 10.31 8.79995 9.7 8.79995 8.75C8.79995 7.66 9.80995 6.9 11.4999 6.9C13.2799 6.9 13.9399 7.75 13.9999 9H16.2099C16.1399 7.28 15.0899 5.7 12.9999 5.19V3H9.99995V5.16C8.05995 5.58 6.49995 6.84 6.49995 8.77C6.49995 11.08 8.40995 12.23 11.1999 12.9C13.6999 13.5 14.1999 14.38 14.1999 15.31C14.1999 16 13.7099 17.1 11.4999 17.1C9.43995 17.1 8.62995 16.18 8.51995 15H6.31995C6.43995 17.19 8.07995 18.42 9.99995 18.83V21H12.9999V18.85C14.9499 18.48 16.4999 17.35 16.4999 15.3C16.4999 12.46 14.0699 11.49 11.7999 10.9Z" />
  </svg>
)
export const oAttachment = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18.5 16H7C4.79 16 3 14.21 3 12C3 9.79 4.79 8 7 8H19.5C20.88 8 22 9.12 22 10.5C22 11.88 20.88 13 19.5 13H9C8.45 13 8 12.55 8 12C8 11.45 8.45 11 9 11H18.5V9.5H9C7.62 9.5 6.5 10.62 6.5 12C6.5 13.38 7.62 14.5 9 14.5H19.5C21.71 14.5 23.5 12.71 23.5 10.5C23.5 8.29 21.71 6.5 19.5 6.5H7C3.96 6.5 1.5 8.96 1.5 12C1.5 15.04 3.96 17.5 7 17.5H18.5V16Z" />
  </svg>
)
export const oAudiotrack = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17C6 19.21 7.79 21 10 21C12.21 21 14 19.21 14 17V7H18V3H12ZM10 19C8.9 19 8 18.1 8 17C8 15.9 8.9 15 10 15C11.1 15 12 15.9 12 17C12 18.1 11.1 19 10 19Z" />
  </svg>
)
export const oAutorenew = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6V9L16 5L12 1V4C7.58 4 4 7.58 4 12C4 13.57 4.46 15.03 5.24 16.26L6.7 14.8C6.25 13.97 6 13.01 6 12C6 8.69 8.69 6 12 6ZM18.76 7.74L17.3 9.2C17.74 10.04 18 10.99 18 12C18 15.31 15.31 18 12 18V15L8 19L12 23V20C16.42 20 20 16.42 20 12C20 10.43 19.54 8.97 18.76 7.74Z" />
  </svg>
)
export const oAvTimer = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 17C11 17.55 11.45 18 12 18C12.55 18 13 17.55 13 17C13 16.45 12.55 16 12 16C11.45 16 11 16.45 11 17ZM11 3V7H13V5.08C16.39 5.57 19 8.47 19 12C19 15.87 15.87 19 12 19C8.13 19 5 15.87 5 12C5 10.32 5.59 8.78 6.58 7.58L12 13L13.41 11.59L6.61 4.79V4.81C4.42 6.45 3 9.05 3 12C3 16.97 7.02 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3H11ZM18 12C18 11.45 17.55 11 17 11C16.45 11 16 11.45 16 12C16 12.55 16.45 13 17 13C17.55 13 18 12.55 18 12ZM6 12C6 12.55 6.45 13 7 13C7.55 13 8 12.55 8 12C8 11.45 7.55 11 7 11C6.45 11 6 11.45 6 12Z" />
  </svg>
)
export const oBackspace = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 3H7C6.31 3 5.77 3.35 5.41 3.88L0 12L5.41 20.11C5.77 20.64 6.31 21 7 21H22C23.1 21 24 20.1 24 19V5C24 3.9 23.1 3 22 3ZM22 19H7.07L2.4 12L7.06 5H22V19ZM10.41 17L14 13.41L17.59 17L19 15.59L15.41 12L19 8.41L17.59 7L14 10.59L10.41 7L9 8.41L12.59 12L9 15.59L10.41 17Z" />
  </svg>
)
export const oBackup = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM19 18H6C3.79 18 2 16.21 2 14C2 11.95 3.53 10.24 5.56 10.03L6.63 9.92L7.13 8.97C8.08 7.14 9.94 6 12 6C14.62 6 16.88 7.86 17.39 10.43L17.69 11.93L19.22 12.04C20.78 12.14 22 13.45 22 15C22 16.65 20.65 18 19 18ZM8 13H10.55V16H13.45V13H16L12 9L8 13Z" />
  </svg>
)
export const oBallot = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13 7.5H18V9.5H13V7.5ZM13 14.5H18V16.5H13V14.5ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM11 6H6V11H11V6ZM10 10H7V7H10V10ZM11 13H6V18H11V13ZM10 17H7V14H10V17Z" />
  </svg>
)
export const oBarChart = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5 9.2H8V19H5V9.2ZM10.6 5H13.4V19H10.6V5ZM16.2 13H19V19H16.2V13Z" />
  </svg>
)
export const oBattery20 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17V20.67C7 21.4 7.6 22 8.33 22H15.66C16.4 22 17 21.4 17 20.67V17H7Z" />
    <path
      d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2H10V4H8.33C7.6 4 7 4.6 7 5.33V17H17V5.33Z"
      fill="black"
      fillOpacity="0.3"
    />
  </svg>
)
export const oBattery30 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2H10V4H8.33C7.6 4 7 4.6 7 5.33V15H17V5.33Z"
      fillOpacity="0.3"
    />
    <path
      d="M7 15V20.67C7 21.4 7.6 22 8.33 22H15.66C16.4 22 17 21.4 17 20.67V15H7Z"
      fill="black"
    />
  </svg>
)
export const oBattery50 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2H10V4H8.33C7.6 4 7 4.6 7 5.33V13H17V5.33Z"
      fillOpacity="0.3"
    />
    <path
      d="M7 13V20.67C7 21.4 7.6 22 8.33 22H15.66C16.4 22 17 21.4 17 20.67V13H7Z"
      fill="black"
    />
  </svg>
)
export const oBattery60 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2H10V4H8.33C7.6 4 7 4.6 7 5.33V11H17V5.33Z"
      fillOpacity="0.3"
    />
    <path
      d="M7 11V20.67C7 21.4 7.6 22 8.33 22H15.66C16.4 22 17 21.4 17 20.67V11H7Z"
      fill="black"
    />
  </svg>
)
export const oBattery80 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2H10V4H8.33C7.6 4 7 4.6 7 5.33V9H17V5.33Z"
      fillOpacity="0.3"
    />
    <path
      d="M7 9V20.67C7 21.4 7.6 22 8.33 22H15.66C16.4 22 17 21.4 17 20.67V9H7Z"
      fill="black"
    />
  </svg>
)
export const oBattery90 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2H10V4H8.33C7.6 4 7 4.6 7 5.33V8H17V5.33Z"
      fillOpacity="0.3"
    />
    <path
      d="M7 8V20.67C7 21.4 7.6 22 8.33 22H15.66C16.4 22 17 21.4 17 20.67V8H7Z"
      fill="black"
    />
  </svg>
)
export const oBatteryAlert = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.67 4H14V2H10V4H8.33C7.6 4 7 4.6 7 5.33V20.66C7 21.4 7.6 22 8.33 22H15.66C16.4 22 17 21.4 17 20.67V5.33C17 4.6 16.4 4 15.67 4ZM13 18H11V16H13V18ZM13 14H11V9H13V14Z" />
  </svg>
)
export const oBatteryCharging20 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 20V17H7V20.67C7 21.4 7.6 22 8.33 22H15.66C16.4 22 17 21.4 17 20.67V17H12.6L11 20Z" />
    <path
      d="M15.67 4H14V2H10V4H8.33C7.6 4 7 4.6 7 5.33V17H11V14.5H9L13 7V12.5H15L12.6 17H17V5.33C17 4.6 16.4 4 15.67 4Z"
      fill="black"
      fillOpacity="0.3"
    />
  </svg>
)
export const oBatteryCharging30 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.67 4H14V2H10V4H8.33C7.6 4 7 4.6 7 5.33V14.5H9L13 7V12.5H15L13.93 14.5H17V5.33C17 4.6 16.4 4 15.67 4Z"
      fillOpacity="0.3"
    />
    <path
      d="M11 20V14.5H7V20.67C7 21.4 7.6 22 8.33 22H15.66C16.4 22 17 21.4 17 20.67V14.5H13.93L11 20Z"
      fill="black"
    />
  </svg>
)
export const oBatteryCharging50 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14.47 13.5L11 20V14.5H9L9.53 13.5H7V20.67C7 21.4 7.6 22 8.33 22H15.66C16.4 22 17 21.4 17 20.67V13.5H14.47Z" />
    <path
      d="M15.67 4H14V2H10V4H8.33C7.6 4 7 4.6 7 5.33V13.5H9.53L13 7V12.5H15L14.47 13.5H17V5.33C17 4.6 16.4 4 15.67 4Z"
      fill="black"
      fillOpacity="0.3"
    />
  </svg>
)
export const oBatteryCharging60 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.67 4H14V2H10V4H8.33C7.6 4 7 4.6 7 5.33V11H10.87L13 7V11H17V5.33C17 4.6 16.4 4 15.67 4Z"
      fillOpacity="0.3"
    />
    <path
      d="M13 12.5H15L11 20V14.5H9L10.87 11H7V20.67C7 21.4 7.6 22 8.33 22H15.66C16.4 22 17 21.4 17 20.67V11H13V12.5Z"
      fill="black"
    />
  </svg>
)
export const oBatteryCharging80 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.67 4H14V2H10V4H8.33C7.6 4 7 4.6 7 5.33V9H11.93L13 7V9H17V5.33C17 4.6 16.4 4 15.67 4Z"
      fillOpacity="0.3"
    />
    <path
      d="M13 12.5H15L11 20V14.5H9L11.93 9H7V20.67C7 21.4 7.6 22 8.33 22H15.66C16.4 22 17 21.4 17 20.67V9H13V12.5Z"
      fill="black"
    />
  </svg>
)
export const oBatteryCharging90 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.67 4H14V2H10V4H8.33C7.6 4 7 4.6 7 5.33V8H12.47L13 7V8H17V5.33C17 4.6 16.4 4 15.67 4Z"
      fillOpacity="0.3"
    />
    <path
      d="M13 12.5H15L11 20V14.5H9L12.47 8H7V20.67C7 21.4 7.6 22 8.33 22H15.66C16.4 22 17 21.4 17 20.67V8H13V12.5Z"
      fill="black"
    />
  </svg>
)
export const oBatteryChargingFull = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.67 4H14V2H10V4H8.33C7.6 4 7 4.6 7 5.33V20.66C7 21.4 7.6 22 8.33 22H15.66C16.4 22 17 21.4 17 20.67V5.33C17 4.6 16.4 4 15.67 4ZM11 20V14.5H9L13 7V12.5H15L11 20Z" />
  </svg>
)
export const oBatteryFull = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.67 4H14V2H10V4H8.33C7.6 4 7 4.6 7 5.33V20.66C7 21.4 7.6 22 8.33 22H15.66C16.4 22 17 21.4 17 20.67V5.33C17 4.6 16.4 4 15.67 4Z" />
  </svg>
)
export const oBatteryStd = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.67 4H14V2H10V4H8.33C7.6 4 7 4.6 7 5.33V20.66C7 21.4 7.6 22 8.33 22H15.66C16.4 22 17 21.4 17 20.67V5.33C17 4.6 16.4 4 15.67 4Z" />
  </svg>
)
export const oBatteryUnknown = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.67 4H14V2H10V4H8.33C7.6 4 7 4.6 7 5.33V20.66C7 21.4 7.6 22 8.33 22H15.66C16.4 22 17 21.4 17 20.67V5.33C17 4.6 16.4 4 15.67 4ZM13 18H11V16H13V18ZM14.3 12.69C14.3 12.69 13.92 13.11 13.63 13.4C13.15 13.88 12.8 14.55 12.8 15H11.2C11.2 14.17 11.66 13.48 12.13 13L13.06 12.06C13.33 11.79 13.5 11.41 13.5 11C13.5 10.17 12.83 9.5 12 9.5C11.17 9.5 10.5 10.17 10.5 11H9C9 9.34 10.34 8 12 8C13.66 8 15 9.34 15 11C15 11.66 14.73 12.26 14.3 12.69Z" />
  </svg>
)
export const oBeachAccess = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20.9999 19.57L19.5729 20.998L13.1309 14.556L14.5609 13.128L20.9999 19.57ZM13.1199 3C10.5399 3 7.95995 3.98 5.97995 5.95L5.96995 5.96C2.01995 9.91 2.01995 16.32 5.96995 20.27L20.2699 5.96C18.2999 3.99 15.7099 3 13.1199 3ZM6.13995 17.27C5.39995 16.03 4.99995 14.61 4.99995 13.12C4.99995 12.19 5.15995 11.3 5.45995 10.45C5.64995 12.36 6.34995 14.24 7.52995 15.89L6.13995 17.27ZM8.97995 14.43C7.62995 12.38 7.11995 9.93 7.59995 7.6C8.17995 7.48 8.75995 7.42 9.34995 7.42C11.1499 7.42 12.8999 7.97 14.4299 8.98L8.97995 14.43ZM10.4499 5.46C11.2999 5.16 12.1899 5 13.1199 5C14.6099 5 16.0299 5.4 17.2699 6.14L15.8799 7.53C14.2299 6.35 12.3599 5.65 10.4499 5.46Z" />
  </svg>
)
export const oBeenhere = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 1H5C3.9 1 3.01 1.9 3.01 3L3 15.93C3 16.62 3.35 17.23 3.88 17.59L12 23L20.11 17.59C20.64 17.23 20.99 16.62 20.99 15.93L21 3C21 1.9 20.1 1 19 1ZM12 20.6L5 15.94V3H19V15.93L12 20.6ZM9.99 13.18L7.41 10.59L6 12L10 16L18 8L16.58 6.58L9.99 13.18Z" />
  </svg>
)
export const oBlock = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 7.58 7.58 4 12 4C13.85 4 15.55 4.63 16.9 5.69L5.69 16.9C4.63 15.55 4 13.85 4 12ZM12 20C10.15 20 8.45 19.37 7.1 18.31L18.31 7.1C19.37 8.45 20 10.15 20 12C20 16.42 16.42 20 12 20Z" />
  </svg>
)
export const oBluetooth = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.71 7.71L12 2H11V9.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L11 14.41V22H12L17.71 16.29L13.41 12L17.71 7.71ZM13 5.83L14.88 7.71L13 9.59V5.83ZM14.88 16.29L13 18.17V14.41L14.88 16.29Z" />
  </svg>
)
export const oBluetoothAudio = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14.24 12.01L16.56 14.33C16.84 13.61 17 12.82 17 12C17 11.18 16.84 10.41 16.57 9.69L14.24 12.01ZM19.53 6.71L18.27 7.97C18.9 9.18 19.25 10.54 19.25 11.99C19.25 13.44 18.89 14.81 18.27 16.01L19.47 17.21C20.44 15.67 21.01 13.85 21.01 11.9C21 10.01 20.46 8.23 19.53 6.71ZM15.71 7.71L10 2H9V9.59L4.41 5L3 6.41L8.59 12L3 17.59L4.41 19L9 14.41V22H10L15.71 16.29L11.41 12L15.71 7.71ZM11 5.83L12.88 7.71L11 9.59V5.83ZM12.88 16.29L11 18.17V14.41L12.88 16.29Z" />
  </svg>
)
export const oBluetoothConnected = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 12L5 10L3 12L5 14L7 12ZM17.71 7.71L12 2H11V9.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L11 14.41V22H12L17.71 16.29L13.41 12L17.71 7.71ZM13 5.83L14.88 7.71L13 9.59V5.83ZM14.88 16.29L13 18.17V14.41L14.88 16.29ZM19 10L17 12L19 14L21 12L19 10Z" />
  </svg>
)
export const oBluetoothDisabled = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13 5.83L14.88 7.71L13.28 9.31L14.69 10.72L17.71 7.7L12 2H11V7.03L13 9.03V5.83ZM5.41 4L4 5.41L10.59 12L5 17.59L6.41 19L11 14.41V22H12L16.29 17.71L18.59 20L20 18.59L5.41 4ZM13 18.17V14.41L14.88 16.29L13 18.17Z" />
  </svg>
)
export const oBluetoothSearching = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14.24 12.01L16.56 14.33C16.84 13.61 17 12.82 17 12C17 11.18 16.84 10.41 16.57 9.69L14.24 12.01ZM19.53 6.71L18.27 7.97C18.9 9.18 19.25 10.54 19.25 11.99C19.25 13.44 18.89 14.81 18.27 16.01L19.47 17.21C20.44 15.67 21.01 13.85 21.01 11.9C21 10.01 20.46 8.23 19.53 6.71ZM15.71 7.71L10 2H9V9.59L4.41 5L3 6.41L8.59 12L3 17.59L4.41 19L9 14.41V22H10L15.71 16.29L11.41 12L15.71 7.71ZM11 5.83L12.88 7.71L11 9.59V5.83ZM12.88 16.29L11 18.17V14.41L12.88 16.29Z" />
  </svg>
)
export const oBlurCircular = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10 9C9.45 9 9 9.45 9 10C9 10.55 9.45 11 10 11C10.55 11 11 10.55 11 10C11 9.45 10.55 9 10 9ZM10 13C9.45 13 9 13.45 9 14C9 14.55 9.45 15 10 15C10.55 15 11 14.55 11 14C11 13.45 10.55 13 10 13ZM7 9.5C6.72 9.5 6.5 9.72 6.5 10C6.5 10.28 6.72 10.5 7 10.5C7.28 10.5 7.5 10.28 7.5 10C7.5 9.72 7.28 9.5 7 9.5ZM10 16.5C9.72 16.5 9.5 16.72 9.5 17C9.5 17.28 9.72 17.5 10 17.5C10.28 17.5 10.5 17.28 10.5 17C10.5 16.72 10.28 16.5 10 16.5ZM7 13.5C6.72 13.5 6.5 13.72 6.5 14C6.5 14.28 6.72 14.5 7 14.5C7.28 14.5 7.5 14.28 7.5 14C7.5 13.72 7.28 13.5 7 13.5ZM10 7.5C10.28 7.5 10.5 7.28 10.5 7C10.5 6.72 10.28 6.5 10 6.5C9.72 6.5 9.5 6.72 9.5 7C9.5 7.28 9.72 7.5 10 7.5ZM14 9C13.45 9 13 9.45 13 10C13 10.55 13.45 11 14 11C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9ZM14 7.5C14.28 7.5 14.5 7.28 14.5 7C14.5 6.72 14.28 6.5 14 6.5C13.72 6.5 13.5 6.72 13.5 7C13.5 7.28 13.72 7.5 14 7.5ZM17 13.5C16.72 13.5 16.5 13.72 16.5 14C16.5 14.28 16.72 14.5 17 14.5C17.28 14.5 17.5 14.28 17.5 14C17.5 13.72 17.28 13.5 17 13.5ZM17 9.5C16.72 9.5 16.5 9.72 16.5 10C16.5 10.28 16.72 10.5 17 10.5C17.28 10.5 17.5 10.28 17.5 10C17.5 9.72 17.28 9.5 17 9.5ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM14 16.5C13.72 16.5 13.5 16.72 13.5 17C13.5 17.28 13.72 17.5 14 17.5C14.28 17.5 14.5 17.28 14.5 17C14.5 16.72 14.28 16.5 14 16.5ZM14 13C13.45 13 13 13.45 13 14C13 14.55 13.45 15 14 15C14.55 15 15 14.55 15 14C15 13.45 14.55 13 14 13Z" />
  </svg>
)
export const oBlurLinear = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5 17.5C5.83 17.5 6.5 16.83 6.5 16C6.5 15.17 5.83 14.5 5 14.5C4.17 14.5 3.5 15.17 3.5 16C3.5 16.83 4.17 17.5 5 17.5ZM9 13C9.55 13 10 12.55 10 12C10 11.45 9.55 11 9 11C8.45 11 8 11.45 8 12C8 12.55 8.45 13 9 13ZM9 9C9.55 9 10 8.55 10 8C10 7.45 9.55 7 9 7C8.45 7 8 7.45 8 8C8 8.55 8.45 9 9 9ZM3 21H21V19H3V21ZM5 9.5C5.83 9.5 6.5 8.83 6.5 8C6.5 7.17 5.83 6.5 5 6.5C4.17 6.5 3.5 7.17 3.5 8C3.5 8.83 4.17 9.5 5 9.5ZM5 13.5C5.83 13.5 6.5 12.83 6.5 12C6.5 11.17 5.83 10.5 5 10.5C4.17 10.5 3.5 11.17 3.5 12C3.5 12.83 4.17 13.5 5 13.5ZM9 17C9.55 17 10 16.55 10 16C10 15.45 9.55 15 9 15C8.45 15 8 15.45 8 16C8 16.55 8.45 17 9 17ZM17 16.5C17.28 16.5 17.5 16.28 17.5 16C17.5 15.72 17.28 15.5 17 15.5C16.72 15.5 16.5 15.72 16.5 16C16.5 16.28 16.72 16.5 17 16.5ZM3 3V5H21V3H3ZM17 8.5C17.28 8.5 17.5 8.28 17.5 8C17.5 7.72 17.28 7.5 17 7.5C16.72 7.5 16.5 7.72 16.5 8C16.5 8.28 16.72 8.5 17 8.5ZM17 12.5C17.28 12.5 17.5 12.28 17.5 12C17.5 11.72 17.28 11.5 17 11.5C16.72 11.5 16.5 11.72 16.5 12C16.5 12.28 16.72 12.5 17 12.5ZM13 9C13.55 9 14 8.55 14 8C14 7.45 13.55 7 13 7C12.45 7 12 7.45 12 8C12 8.55 12.45 9 13 9ZM13 13C13.55 13 14 12.55 14 12C14 11.45 13.55 11 13 11C12.45 11 12 11.45 12 12C12 12.55 12.45 13 13 13ZM13 17C13.55 17 14 16.55 14 16C14 15.45 13.55 15 13 15C12.45 15 12 15.45 12 16C12 16.55 12.45 17 13 17Z" />
  </svg>
)
export const oBlurOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.8 11.48L14 11.5C14.83 11.5 15.5 10.83 15.5 10C15.5 9.17 14.83 8.5 14 8.5C13.17 8.5 12.5 9.17 12.5 10L12.52 10.2C12.61 10.87 13.13 11.39 13.8 11.48ZM14 3.5C14.28 3.5 14.5 3.28 14.5 3C14.5 2.72 14.28 2.5 14 2.5C13.72 2.5 13.5 2.72 13.5 3C13.5 3.28 13.72 3.5 14 3.5ZM10 3.5C10.28 3.5 10.5 3.28 10.5 3C10.5 2.72 10.28 2.5 10 2.5C9.72 2.5 9.5 2.72 9.5 3C9.5 3.28 9.72 3.5 10 3.5ZM14 7C14.5523 7 15 6.55228 15 6C15 5.44772 14.5523 5 14 5C13.4477 5 13 5.44772 13 6C13 6.55228 13.4477 7 14 7ZM19 10C19 10.5523 18.5523 11 18 11C17.4477 11 17 10.5523 17 10C17 9.44772 17.4477 9 18 9C18.5523 9 19 9.44772 19 10ZM18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7ZM21.5 10C21.5 10.28 21.28 10.5 21 10.5C20.72 10.5 20.5 10.28 20.5 10C20.5 9.72 20.72 9.5 21 9.5C21.28 9.5 21.5 9.72 21.5 10ZM10 7C10.5523 7 11 6.55228 11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7ZM19 14C19 14.5523 18.5523 15 18 15C17.4477 15 17 14.5523 17 14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14ZM6 19C6.55228 19 7 18.5523 7 18C7 17.4477 6.55228 17 6 17C5.44772 17 5 17.4477 5 18C5 18.5523 5.44772 19 6 19ZM13.5 21C13.5 20.72 13.72 20.5 14 20.5C14.28 20.5 14.5 20.72 14.5 21C14.5 21.28 14.28 21.5 14 21.5C13.72 21.5 13.5 21.28 13.5 21ZM20.5 14C20.5 13.72 20.72 13.5 21 13.5C21.28 13.5 21.5 13.72 21.5 14C21.5 14.28 21.28 14.5 21 14.5C20.72 14.5 20.5 14.28 20.5 14ZM2.5 14C2.5 13.72 2.72 13.5 3 13.5C3.28 13.5 3.5 13.72 3.5 14C3.5 14.28 3.28 14.5 3 14.5C2.72 14.5 2.5 14.28 2.5 14ZM10 19C10.5523 19 11 18.5523 11 18C11 17.4477 10.5523 17 10 17C9.44772 17 9 17.4477 9 18C9 18.5523 9.44772 19 10 19ZM2.5 10C2.5 9.72 2.72 9.5 3 9.5C3.28 9.5 3.5 9.72 3.5 10C3.5 10.28 3.28 10.5 3 10.5C2.72 10.5 2.5 10.28 2.5 10ZM9.5 21C9.5 20.72 9.72 20.5 10 20.5C10.28 20.5 10.5 20.72 10.5 21C10.5 21.28 10.28 21.5 10 21.5C9.72 21.5 9.5 21.28 9.5 21ZM6 15C6.55228 15 7 14.5523 7 14C7 13.4477 6.55228 13 6 13C5.44772 13 5 13.4477 5 14C5 14.5523 5.44772 15 6 15ZM6 8.77L2.5 5.27L3.91 3.86L20.14 20.09L18.73 21.5H18.72L14.94 17.72C14.97 17.81 15 17.9 15 18C15 18.55 14.55 19 14 19C13.45 19 13 18.55 13 18C13 17.45 13.45 17 14 17C14.1 17 14.19 17.03 14.28 17.06L11.47 14.25C11.36 14.96 10.74 15.5 10 15.5C9.17 15.5 8.5 14.83 8.5 14C8.5 13.26 9.04 12.64 9.75 12.53L6.94 9.72C6.97 9.81 7 9.9 7 10C7 10.55 6.55 11 6 11C5.45 11 5 10.55 5 10C5 9.45 5.45 9 6 9L6.28 9.05L6 8.77Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oBlurOn = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6 13C5.45 13 5 13.45 5 14C5 14.55 5.45 15 6 15C6.55 15 7 14.55 7 14C7 13.45 6.55 13 6 13ZM6 17C5.45 17 5 17.45 5 18C5 18.55 5.45 19 6 19C6.55 19 7 18.55 7 18C7 17.45 6.55 17 6 17ZM6 9C5.45 9 5 9.45 5 10C5 10.55 5.45 11 6 11C6.55 11 7 10.55 7 10C7 9.45 6.55 9 6 9ZM3 9.5C2.72 9.5 2.5 9.72 2.5 10C2.5 10.28 2.72 10.5 3 10.5C3.28 10.5 3.5 10.28 3.5 10C3.5 9.72 3.28 9.5 3 9.5ZM6 5C5.45 5 5 5.45 5 6C5 6.55 5.45 7 6 7C6.55 7 7 6.55 7 6C7 5.45 6.55 5 6 5ZM21 10.5C21.28 10.5 21.5 10.28 21.5 10C21.5 9.72 21.28 9.5 21 9.5C20.72 9.5 20.5 9.72 20.5 10C20.5 10.28 20.72 10.5 21 10.5ZM14 7C14.55 7 15 6.55 15 6C15 5.45 14.55 5 14 5C13.45 5 13 5.45 13 6C13 6.55 13.45 7 14 7ZM14 3.5C14.28 3.5 14.5 3.28 14.5 3C14.5 2.72 14.28 2.5 14 2.5C13.72 2.5 13.5 2.72 13.5 3C13.5 3.28 13.72 3.5 14 3.5ZM3 13.5C2.72 13.5 2.5 13.72 2.5 14C2.5 14.28 2.72 14.5 3 14.5C3.28 14.5 3.5 14.28 3.5 14C3.5 13.72 3.28 13.5 3 13.5ZM10 20.5C9.72 20.5 9.5 20.72 9.5 21C9.5 21.28 9.72 21.5 10 21.5C10.28 21.5 10.5 21.28 10.5 21C10.5 20.72 10.28 20.5 10 20.5ZM10 3.5C10.28 3.5 10.5 3.28 10.5 3C10.5 2.72 10.28 2.5 10 2.5C9.72 2.5 9.5 2.72 9.5 3C9.5 3.28 9.72 3.5 10 3.5ZM10 7C10.55 7 11 6.55 11 6C11 5.45 10.55 5 10 5C9.45 5 9 5.45 9 6C9 6.55 9.45 7 10 7ZM10 12.5C9.17 12.5 8.5 13.17 8.5 14C8.5 14.83 9.17 15.5 10 15.5C10.83 15.5 11.5 14.83 11.5 14C11.5 13.17 10.83 12.5 10 12.5ZM18 13C17.45 13 17 13.45 17 14C17 14.55 17.45 15 18 15C18.55 15 19 14.55 19 14C19 13.45 18.55 13 18 13ZM18 17C17.45 17 17 17.45 17 18C17 18.55 17.45 19 18 19C18.55 19 19 18.55 19 18C19 17.45 18.55 17 18 17ZM18 9C17.45 9 17 9.45 17 10C17 10.55 17.45 11 18 11C18.55 11 19 10.55 19 10C19 9.45 18.55 9 18 9ZM18 5C17.45 5 17 5.45 17 6C17 6.55 17.45 7 18 7C18.55 7 19 6.55 19 6C19 5.45 18.55 5 18 5ZM21 13.5C20.72 13.5 20.5 13.72 20.5 14C20.5 14.28 20.72 14.5 21 14.5C21.28 14.5 21.5 14.28 21.5 14C21.5 13.72 21.28 13.5 21 13.5ZM14 17C13.45 17 13 17.45 13 18C13 18.55 13.45 19 14 19C14.55 19 15 18.55 15 18C15 17.45 14.55 17 14 17ZM14 20.5C13.72 20.5 13.5 20.72 13.5 21C13.5 21.28 13.72 21.5 14 21.5C14.28 21.5 14.5 21.28 14.5 21C14.5 20.72 14.28 20.5 14 20.5ZM10 8.5C9.17 8.5 8.5 9.17 8.5 10C8.5 10.83 9.17 11.5 10 11.5C10.83 11.5 11.5 10.83 11.5 10C11.5 9.17 10.83 8.5 10 8.5ZM10 17C9.45 17 9 17.45 9 18C9 18.55 9.45 19 10 19C10.55 19 11 18.55 11 18C11 17.45 10.55 17 10 17ZM14 12.5C13.17 12.5 12.5 13.17 12.5 14C12.5 14.83 13.17 15.5 14 15.5C14.83 15.5 15.5 14.83 15.5 14C15.5 13.17 14.83 12.5 14 12.5ZM14 8.5C13.17 8.5 12.5 9.17 12.5 10C12.5 10.83 13.17 11.5 14 11.5C14.83 11.5 15.5 10.83 15.5 10C15.5 9.17 14.83 8.5 14 8.5Z" />
  </svg>
)
export const oBook = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM9 4H11V9L10 8.25L9 9V4ZM18 20H6V4H7V13L10 10.75L13 13V4H18V20Z" />
  </svg>
)
export const oBookmark = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 25"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 3.0025H7C5.9 3.0025 5 3.9025 5 5.0025V21.0025L12 18.0025L19 21.0025V5.0025C19 3.9025 18.1 3.0025 17 3.0025Z" />
  </svg>
)
export const oBookmarkBorder = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 25"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 3.0025H7C5.9 3.0025 5 3.9025 5 5.0025V21.0025L12 18.0025L19 21.0025V5.0025C19 3.9025 18.1 3.0025 17 3.0025ZM17 18.0025L12 15.8225L7 18.0025V5.0025H17V18.0025Z" />
  </svg>
)
export const oBookmarks = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 25"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 7.0025V19.9725L10.79 18.1625L10 17.8225L9.21 18.1625L5 19.9725V7.0025H15ZM19 1.0025H8.99C7.89 1.0025 7 1.9025 7 3.0025H17C18.1 3.0025 19 3.9025 19 5.0025V18.0025L21 19.0025V3.0025C21 1.9025 20.1 1.0025 19 1.0025ZM15 5.0025H5C3.9 5.0025 3 5.9025 3 7.0025V23.0025L10 20.0025L17 23.0025V7.0025C17 5.9025 16.1 5.0025 15 5.0025Z" />
  </svg>
)
export const oBorderAll = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 25"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3.0025V21.0025H21V3.0025H3ZM11 19.0025H5V13.0025H11V19.0025ZM11 11.0025H5V5.0025H11V11.0025ZM19 19.0025H13V13.0025H19V19.0025ZM19 11.0025H13V5.0025H19V11.0025Z" />
  </svg>
)
export const oBorderBottom = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 25"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9 11.0025H7V13.0025H9V11.0025ZM13 15.0025H11V17.0025H13V15.0025ZM9 3.0025H7V5.0025H9V3.0025ZM13 11.0025H11V13.0025H13V11.0025ZM5 3.0025H3V5.0025H5V3.0025ZM13 7.0025H11V9.0025H13V7.0025ZM17 11.0025H15V13.0025H17V11.0025ZM13 3.0025H11V5.0025H13V3.0025ZM17 3.0025H15V5.0025H17V3.0025ZM19 13.0025H21V11.0025H19V13.0025ZM19 17.0025H21V15.0025H19V17.0025ZM5 7.0025H3V9.0025H5V7.0025ZM19 3.0025V5.0025H21V3.0025H19ZM19 9.0025H21V7.0025H19V9.0025ZM5 11.0025H3V13.0025H5V11.0025ZM3 21.0025H21V19.0025H3V21.0025ZM5 15.0025H3V17.0025H5V15.0025Z" />
  </svg>
)
export const oBorderClear = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 25"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 5.0025H9V3.0025H7V5.0025ZM7 13.0025H9V11.0025H7V13.0025ZM7 21.0025H9V19.0025H7V21.0025ZM11 17.0025H13V15.0025H11V17.0025ZM11 21.0025H13V19.0025H11V21.0025ZM3 21.0025H5V19.0025H3V21.0025ZM3 17.0025H5V15.0025H3V17.0025ZM3 13.0025H5V11.0025H3V13.0025ZM3 9.0025H5V7.0025H3V9.0025ZM3 5.0025H5V3.0025H3V5.0025ZM11 13.0025H13V11.0025H11V13.0025ZM19 17.0025H21V15.0025H19V17.0025ZM19 13.0025H21V11.0025H19V13.0025ZM19 21.0025H21V19.0025H19V21.0025ZM19 9.0025H21V7.0025H19V9.0025ZM11 9.0025H13V7.0025H11V9.0025ZM19 3.0025V5.0025H21V3.0025H19ZM11 5.0025H13V3.0025H11V5.0025ZM15 21.0025H17V19.0025H15V21.0025ZM15 13.0025H17V11.0025H15V13.0025ZM15 5.0025H17V3.0025H15V5.0025Z" />
  </svg>
)
export const oBorderColor = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 25"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14 3.2525L4 13.2525V17.0025H7.75L17.75 7.0025L14 3.2525ZM6.92 15.0025H6V14.0825L14 6.0825L14.92 7.0025L6.92 15.0025ZM20.71 4.0425C21.1 3.6525 21.1 3.0225 20.71 2.6325L18.37 0.2925C17.98 -0.0975 17.35 -0.0975 16.96 0.2925L15 2.2525L18.75 6.0025L20.71 4.0425Z" />
    <path
      d="M0 20.0025H24V24.0025H0V20.0025Z"
      fill="black"
      fillOpacity="0.36"
    />
  </svg>
)
export const oBorderHorizontal = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 25"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21.0025H5V19.0025H3V21.0025ZM5 7.0025H3V9.0025H5V7.0025ZM3 17.0025H5V15.0025H3V17.0025ZM7 21.0025H9V19.0025H7V21.0025ZM5 3.0025H3V5.0025H5V3.0025ZM9 3.0025H7V5.0025H9V3.0025ZM17 3.0025H15V5.0025H17V3.0025ZM13 7.0025H11V9.0025H13V7.0025ZM13 3.0025H11V5.0025H13V3.0025ZM19 17.0025H21V15.0025H19V17.0025ZM11 21.0025H13V19.0025H11V21.0025ZM3 13.0025H21V11.0025H3V13.0025ZM19 3.0025V5.0025H21V3.0025H19ZM19 9.0025H21V7.0025H19V9.0025ZM11 17.0025H13V15.0025H11V17.0025ZM15 21.0025H17V19.0025H15V21.0025ZM19 21.0025H21V19.0025H19V21.0025Z" />
  </svg>
)
export const oBorderInner = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 25"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21.0025H5V19.0025H3V21.0025ZM7 21.0025H9V19.0025H7V21.0025ZM5 7.0025H3V9.0025H5V7.0025ZM3 17.0025H5V15.0025H3V17.0025ZM9 3.0025H7V5.0025H9V3.0025ZM5 3.0025H3V5.0025H5V3.0025ZM17 3.0025H15V5.0025H17V3.0025ZM19 9.0025H21V7.0025H19V9.0025ZM19 3.0025V5.0025H21V3.0025H19ZM15 21.0025H17V19.0025H15V21.0025ZM13 3.0025H11V11.0025H3V13.0025H11V21.0025H13V13.0025H21V11.0025H13V3.0025ZM19 21.0025H21V19.0025H19V21.0025ZM19 17.0025H21V15.0025H19V17.0025Z" />
  </svg>
)
export const oBorderLeft = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 25"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 21.0025H13V19.0025H11V21.0025ZM11 17.0025H13V15.0025H11V17.0025ZM11 5.0025H13V3.0025H11V5.0025ZM11 9.0025H13V7.0025H11V9.0025ZM11 13.0025H13V11.0025H11V13.0025ZM7 21.0025H9V19.0025H7V21.0025ZM7 5.0025H9V3.0025H7V5.0025ZM7 13.0025H9V11.0025H7V13.0025ZM3 21.0025H5V3.0025H3V21.0025ZM19 9.0025H21V7.0025H19V9.0025ZM15 21.0025H17V19.0025H15V21.0025ZM19 17.0025H21V15.0025H19V17.0025ZM19 3.0025V5.0025H21V3.0025H19ZM19 13.0025H21V11.0025H19V13.0025ZM19 21.0025H21V19.0025H19V21.0025ZM15 13.0025H17V11.0025H15V13.0025ZM15 5.0025H17V3.0025H15V5.0025Z" />
  </svg>
)
export const oBorderOuter = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13 7H11V9H13V7ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM3 3V21H21V3H3ZM19 19H5V5H19V19ZM13 15H11V17H13V15ZM9 11H7V13H9V11Z" />
  </svg>
)
export const oBorderRight = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 21H9V19H7V21ZM3 5H5V3H3V5ZM7 5H9V3H7V5ZM7 13H9V11H7V13ZM3 21H5V19H3V21ZM11 21H13V19H11V21ZM3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM11 17H13V15H11V17ZM15 13H17V11H15V13ZM19 3V21H21V3H19ZM15 21H17V19H15V21ZM15 5H17V3H15V5ZM11 13H13V11H11V13ZM11 5H13V3H11V5ZM11 9H13V7H11V9Z" />
  </svg>
)
export const oBorderStyle = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 21H17V19H15V21ZM19 21H21V19H19V21ZM7 21H9V19H7V21ZM11 21H13V19H11V21ZM19 17H21V15H19V17ZM19 13H21V11H19V13ZM3 3V21H5V5H21V3H3ZM19 9H21V7H19V9Z" />
  </svg>
)
export const oBorderTop = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 21H9V19H7V21ZM7 13H9V11H7V13ZM11 13H13V11H11V13ZM11 21H13V19H11V21ZM3 17H5V15H3V17ZM3 21H5V19H3V21ZM3 13H5V11H3V13ZM3 9H5V7H3V9ZM11 17H13V15H11V17ZM19 9H21V7H19V9ZM19 13H21V11H19V13ZM3 3V5H21V3H3ZM19 17H21V15H19V17ZM15 21H17V19H15V21ZM11 9H13V7H11V9ZM19 21H21V19H19V21ZM15 13H17V11H15V13Z" />
  </svg>
)
export const oBorderVertical = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9H5V7H3V9ZM3 5H5V3H3V5ZM7 21H9V19H7V21ZM7 13H9V11H7V13ZM3 13H5V11H3V13ZM3 21H5V19H3V21ZM3 17H5V15H3V17ZM7 5H9V3H7V5ZM19 17H21V15H19V17ZM11 21H13V3H11V21ZM19 21H21V19H19V21ZM19 13H21V11H19V13ZM19 3V5H21V3H19ZM19 9H21V7H19V9ZM15 5H17V3H15V5ZM15 21H17V19H15V21ZM15 13H17V11H15V13Z" />
  </svg>
)
export const oBrandingWatermark = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19H3V5H21V19ZM11 12H20V18H11V12Z" />
  </svg>
)
export const oBrightness1 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" />
  </svg>
)
export const oBrightness2 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10 4C14.41 4 18 7.59 18 12C18 16.41 14.41 20 10 20C9.66 20 9.32 19.98 8.99 19.93C10.9 17.77 12 14.95 12 12C12 9.05 10.9 6.23 8.99 4.07C9.32 4.02 9.66 4 10 4ZM10 2C8.18 2 6.47 2.5 5 3.35C7.99 5.08 10 8.3 10 12C10 15.7 7.99 18.92 5 20.65C6.47 21.5 8.18 22 10 22C15.52 22 20 17.52 20 12C20 6.48 15.52 2 10 2Z" />
  </svg>
)
export const oBrightness3 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12.7 4.91C15.25 6.24 17 8.92 17 12C17 15.08 15.25 17.76 12.7 19.09C14.16 17.09 15 14.63 15 12C15 9.37 14.16 6.91 12.7 4.91ZM9 2C7.95 2 6.95 2.16 6 2.46C10.06 3.73 13 7.52 13 12C13 16.48 10.06 20.27 6 21.54C6.95 21.84 7.95 22 9 22C14.52 22 19 17.52 19 12C19 6.48 14.52 2 9 2Z" />
  </svg>
)
export const oBrightness4 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.9999 8.69V4H15.3099L11.9999 0.690002L8.68994 4H3.99994V8.69L0.689941 12L3.99994 15.31V20H8.68994L11.9999 23.31L15.3099 20H19.9999V15.31L23.3099 12L19.9999 8.69ZM17.9999 14.48V18H14.4799L11.9999 20.48L9.51994 18H5.99994V14.48L3.51994 12L5.99994 9.52V6H9.51994L11.9999 3.52L14.4799 6H17.9999V9.52L20.4799 12L17.9999 14.48ZM12.2899 7C11.5499 7 10.8399 7.17 10.2099 7.46C11.9299 8.25 13.1299 9.99 13.1299 12C13.1299 14.01 11.9299 15.75 10.2099 16.54C10.8399 16.83 11.5499 17 12.2899 17C15.0499 17 17.2899 14.76 17.2899 12C17.2899 9.24 15.0499 7 12.2899 7Z" />
  </svg>
)
export const oBrightness5 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.9999 8.69V4H15.3099L11.9999 0.690002L8.68994 4H3.99994V8.69L0.689941 12L3.99994 15.31V20H8.68994L11.9999 23.31L15.3099 20H19.9999V15.31L23.3099 12L19.9999 8.69ZM17.9999 14.48V18H14.4799L11.9999 20.48L9.51994 18H5.99994V14.48L3.51994 12L5.99994 9.52V6H9.51994L11.9999 3.52L14.4799 6H17.9999V9.52L20.4799 12L17.9999 14.48ZM11.9999 6.5C8.96994 6.5 6.49994 8.97 6.49994 12C6.49994 15.03 8.96994 17.5 11.9999 17.5C15.0299 17.5 17.4999 15.03 17.4999 12C17.4999 8.97 15.0299 6.5 11.9999 6.5ZM11.9999 15.5C10.0699 15.5 8.49994 13.93 8.49994 12C8.49994 10.07 10.0699 8.5 11.9999 8.5C13.9299 8.5 15.4999 10.07 15.4999 12C15.4999 13.93 13.9299 15.5 11.9999 15.5Z" />
  </svg>
)
export const oBrightness6 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.9999 8.69V4H15.3099L11.9999 0.690002L8.68994 4H3.99994V8.69L0.689941 12L3.99994 15.31V20H8.68994L11.9999 23.31L15.3099 20H19.9999V15.31L23.3099 12L19.9999 8.69ZM17.9999 14.48V18H14.4799L11.9999 20.48L9.51994 18H5.99994V14.48L3.51994 12L5.99994 9.52V6H9.51994L11.9999 3.52L14.4799 6H17.9999V9.52L20.4799 12L17.9999 14.48ZM11.9999 6.5V17.5C15.0299 17.5 17.4999 15.03 17.4999 12C17.4999 8.97 15.0299 6.5 11.9999 6.5Z" />
  </svg>
)
export const oBrightness7 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.9999 8.69V4H15.3099L11.9999 0.690002L8.68994 4H3.99994V8.69L0.689941 12L3.99994 15.31V20H8.68994L11.9999 23.31L15.3099 20H19.9999V15.31L23.3099 12L19.9999 8.69ZM17.9999 14.48V18H14.4799L11.9999 20.48L9.51994 18H5.99994V14.48L3.51994 12L5.99994 9.52V6H9.51994L11.9999 3.52L14.4799 6H17.9999V9.52L20.4799 12L17.9999 14.48ZM11.9999 6.5C8.96994 6.5 6.49994 8.97 6.49994 12C6.49994 15.03 8.96994 17.5 11.9999 17.5C15.0299 17.5 17.4999 15.03 17.4999 12C17.4999 8.97 15.0299 6.5 11.9999 6.5ZM11.9999 15.5C10.0699 15.5 8.49994 13.93 8.49994 12C8.49994 10.07 10.0699 8.5 11.9999 8.5C13.9299 8.5 15.4999 10.07 15.4999 12C15.4999 13.93 13.9299 15.5 11.9999 15.5Z" />
    <path
      d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
      fill="black"
    />
  </svg>
)
export const oBrightnessAuto = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10.9999 7L7.79994 16H9.69994L10.3999 14H13.5999L14.2999 16H16.1999L12.9999 7H10.9999ZM10.8499 12.65L11.9999 9L13.1499 12.65H10.8499ZM19.9999 8.69V4H15.3099L11.9999 0.690002L8.68994 4H3.99994V8.69L0.689941 12L3.99994 15.31V20H8.68994L11.9999 23.31L15.3099 20H19.9999V15.31L23.3099 12L19.9999 8.69ZM17.9999 14.48V18H14.4799L11.9999 20.48L9.51994 18H5.99994V14.48L3.51994 12L5.99994 9.52V6H9.51994L11.9999 3.52L14.4799 6H17.9999V9.52L20.4799 12L17.9999 14.48Z" />
  </svg>
)
export const oBrightnessHigh = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.9999 8.69V4H15.3099L11.9999 0.690002L8.68994 4H3.99994V8.69L0.689941 12L3.99994 15.31V20H8.68994L11.9999 23.31L15.3099 20H19.9999V15.31L23.3099 12L19.9999 8.69ZM17.9999 14.48V18H14.4799L11.9999 20.48L9.51994 18H5.99994V14.48L3.51994 12L5.99994 9.52V6H9.51994L11.9999 3.52L14.4799 6H17.9999V9.52L20.4799 12L17.9999 14.48ZM11.9999 6C8.68994 6 5.99994 8.69 5.99994 12C5.99994 15.31 8.68994 18 11.9999 18C15.3099 18 17.9999 15.31 17.9999 12C17.9999 8.69 15.3099 6 11.9999 6ZM11.9999 16C9.78994 16 7.99994 14.21 7.99994 12C7.99994 9.79 9.78994 8 11.9999 8C14.2099 8 15.9999 9.79 15.9999 12C15.9999 14.21 14.2099 16 11.9999 16Z" />
    <path
      d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
      fill="black"
    />
  </svg>
)
export const oBrightnessLow = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.9999 8.69V4H15.3099L11.9999 0.690002L8.68994 4H3.99994V8.69L0.689941 12L3.99994 15.31V20H8.68994L11.9999 23.31L15.3099 20H19.9999V15.31L23.3099 12L19.9999 8.69ZM17.9999 14.48V18H14.4799L11.9999 20.48L9.51994 18H5.99994V14.48L3.51994 12L5.99994 9.52V6H9.51994L11.9999 3.52L14.4799 6H17.9999V9.52L20.4799 12L17.9999 14.48ZM11.9999 6C8.68994 6 5.99994 8.69 5.99994 12C5.99994 15.31 8.68994 18 11.9999 18C15.3099 18 17.9999 15.31 17.9999 12C17.9999 8.69 15.3099 6 11.9999 6ZM11.9999 16C9.78994 16 7.99994 14.21 7.99994 12C7.99994 9.79 9.78994 8 11.9999 8C14.2099 8 15.9999 9.79 15.9999 12C15.9999 14.21 14.2099 16 11.9999 16Z" />
  </svg>
)
export const oBrightnessMedium = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.9999 8.69V4H15.3099L11.9999 0.690002L8.68994 4H3.99994V8.69L0.689941 12L3.99994 15.31V20H8.68994L11.9999 23.31L15.3099 20H19.9999V15.31L23.3099 12L19.9999 8.69ZM17.9999 14.48V18H14.4799L11.9999 20.48L9.51994 18H5.99994V14.48L3.51994 12L5.99994 9.52V6H9.51994L11.9999 3.52L14.4799 6H17.9999V9.52L20.4799 12L17.9999 14.48ZM11.9999 6V18C15.3099 18 17.9999 15.31 17.9999 12C17.9999 8.69 15.3099 6 11.9999 6Z" />
  </svg>
)
export const oBrokenImage = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V14.42L5.99 15.41L9.99 11.41L13.99 15.41L17.99 11.42L19 12.43V19ZM19 9.59L17.99 8.58L13.99 12.59L9.99 8.59L5.99 12.59L5 11.59V5H19V9.59Z" />
  </svg>
)
export const oBrush = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 16C7.55 16 8 16.45 8 17C8 18.1 7.1 19 6 19C5.83 19 5.67 18.98 5.5 18.95C5.81 18.4 6 17.74 6 17C6 16.45 6.45 16 7 16ZM18.67 3C18.41 3 18.16 3.1 17.96 3.29L9 12.25L11.75 15L20.71 6.04C21.1 5.65 21.1 5.02 20.71 4.63L19.37 3.29C19.17 3.09 18.92 3 18.67 3ZM7 14C5.34 14 4 15.34 4 17C4 18.31 2.84 19 2 19C2.92 20.22 4.49 21 6 21C8.21 21 10 19.21 10 17C10 15.34 8.66 14 7 14Z" />
  </svg>
)
export const oBubbleChart = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 10C4.79 10 3 11.79 3 14C3 16.21 4.79 18 7 18C9.21 18 11 16.21 11 14C11 11.79 9.21 10 7 10ZM7 16C5.9 16 5 15.1 5 14C5 12.9 5.9 12 7 12C8.1 12 9 12.9 9 14C9 15.1 8.1 16 7 16ZM15.01 15C13.36 15 12.01 16.35 12.01 18C12.01 19.65 13.36 21 15.01 21C16.66 21 18.01 19.65 18.01 18C18.01 16.35 16.66 15 15.01 15ZM15.01 19C14.46 19 14.01 18.55 14.01 18C14.01 17.45 14.46 17 15.01 17C15.56 17 16.01 17.45 16.01 18C16.01 18.55 15.56 19 15.01 19ZM16.5 3C13.47 3 11 5.47 11 8.5C11 11.53 13.47 14 16.5 14C19.53 14 22 11.53 22 8.5C22 5.47 19.53 3 16.5 3ZM16.5 12C14.57 12 13 10.43 13 8.5C13 6.57 14.57 5 16.5 5C18.43 5 20 6.57 20 8.5C20 10.43 18.43 12 16.5 12Z" />
  </svg>
)
export const oBugReport = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 8H17.19C16.74 7.22 16.12 6.55 15.37 6.04L17 4.41L15.59 3L13.42 5.17C12.96 5.06 12.49 5 12 5C11.51 5 11.04 5.06 10.59 5.17L8.41 3L7 4.41L8.62 6.04C7.88 6.55 7.26 7.22 6.81 8H4V10H6.09C6.04 10.33 6 10.66 6 11V12H4V14H6V15C6 15.34 6.04 15.67 6.09 16H4V18H6.81C7.85 19.79 9.78 21 12 21C14.22 21 16.15 19.79 17.19 18H20V16H17.91C17.96 15.67 18 15.34 18 15V14H20V12H18V11C18 10.66 17.96 10.33 17.91 10H20V8ZM16 12V15C16 15.22 15.97 15.47 15.93 15.7L15.83 16.35L15.46 17C14.74 18.24 13.42 19 12 19C10.58 19 9.26 18.23 8.54 17L8.17 16.36L8.07 15.71C8.03 15.48 8 15.23 8 15V11C8 10.77 8.03 10.52 8.07 10.3L8.17 9.65L8.54 9C8.84 8.48 9.26 8.03 9.75 7.69L10.32 7.3L11.06 7.12C11.37 7.04 11.69 7 12 7C12.32 7 12.63 7.04 12.95 7.12L13.63 7.28L14.24 7.7C14.74 8.04 15.15 8.48 15.45 9.01L15.83 9.66L15.93 10.31C15.97 10.53 16 10.78 16 11V12ZM10 14H14V16H10V14ZM10 10H14V12H10V10Z" />
  </svg>
)
export const oBuild = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22.61 18.99L13.53 9.90997C14.46 7.56997 13.98 4.80997 12.09 2.90997C9.78996 0.609971 6.20996 0.399971 3.65996 2.25997L7.49996 6.10997L6.07996 7.51997L2.24996 3.68997C0.389961 6.22997 0.599962 9.81997 2.89996 12.11C4.75996 13.97 7.46996 14.46 9.78996 13.59L18.9 22.7C19.29 23.09 19.92 23.09 20.31 22.7L22.61 20.4C23.01 20.02 23.01 19.39 22.61 18.99ZM19.61 20.59L10.15 11.13C9.53996 11.58 8.85996 11.85 8.14996 11.95C6.78996 12.15 5.35996 11.74 4.31996 10.7C3.36996 9.75997 2.92996 8.49997 2.99996 7.25997L6.08996 10.35L10.33 6.10997L7.23996 3.01997C8.47996 2.94997 9.72996 3.38997 10.68 4.32997C11.76 5.40997 12.17 6.89997 11.92 8.28997C11.8 8.99997 11.5 9.65997 11.04 10.25L20.49 19.7L19.61 20.59Z" />
  </svg>
)
export const oBurstMode = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M1 5H3V19H1V5ZM5 5H7V19H5V5ZM22 5H10C9.45 5 9 5.45 9 6V18C9 18.55 9.45 19 10 19H22C22.55 19 23 18.55 23 18V6C23 5.45 22.55 5 22 5ZM21 17H11V7H21V17ZM17.43 12.62L15.43 15.19L14 13.47L12 15.99H20L17.43 12.62Z" />
  </svg>
)
export const oBusiness = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 7V3H2V21H22V7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19ZM18 11H16V13H18V11ZM18 15H16V17H18V15Z" />
  </svg>
)
export const oBusinessCenter = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V14C2 14.75 2.4 15.38 3 15.73V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15.72C21.59 15.37 22 14.73 22 14V9C22 7.9 21.1 7 20 7ZM10 5H14V7H10V5ZM4 9H20V14H15V11H9V14H4V9ZM13 15H11V13H13V15ZM19 19H5V16H9V17H15V16H19V19Z" />
  </svg>
)
export const oCached = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 8L15 12H18C18 15.31 15.31 18 12 18C10.99 18 10.03 17.75 9.2 17.3L7.74 18.76C8.97 19.54 10.43 20 12 20C16.42 20 20 16.42 20 12H23L19 8ZM6 12C6 8.69 8.69 6 12 6C13.01 6 13.97 6.25 14.8 6.7L16.26 5.24C15.03 4.46 13.57 4 12 4C7.58 4 4 7.58 4 12H1L5 16L9 12H6Z" />
  </svg>
)
export const oCake = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6C13.11 6 14 5.1 14 4C14 3.62 13.9 3.27 13.71 2.97L12 0L10.29 2.97C10.1 3.27 10 3.62 10 4C10 5.1 10.9 6 12 6ZM18 9H13V7H11V9H6C4.34 9 3 10.34 3 12V21C3 21.55 3.45 22 4 22H20C20.55 22 21 21.55 21 21V12C21 10.34 19.66 9 18 9ZM19 20H5V17C5.9 16.99 6.76 16.63 7.4 15.99L8.49 14.92L9.56 15.99C10.87 17.3 13.15 17.29 14.45 15.99L15.53 14.92L16.6 15.99C17.24 16.63 18.1 16.99 19 17V20ZM19 15.5C18.49 15.49 18.01 15.3 17.65 14.93L15.52 12.8L13.38 14.93C12.64 15.67 11.35 15.67 10.61 14.93L8.48 12.8L6.34 14.93C5.99 15.29 5.51 15.49 5 15.5V12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12V15.5Z" />
  </svg>
)
export const oCalendarToday = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V10H20V21ZM20 8H4V5H20V8Z" />
  </svg>
)
export const oCalendarViewDay = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17H21V19H3V17ZM19 12V13H5V12H19ZM21 10H3V15H21V10ZM3 6H21V8H3V6Z" />
  </svg>
)
export const oCall = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z" />
  </svg>
)
export const oCallEnd = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18.59 10.52C19.64 11.03 20.63 11.67 21.55 12.43L20.48 13.5C19.9 13.03 19.27 12.61 18.6 12.23V10.52H18.59ZM5.4 10.52V12.22C4.75 12.59 4.12 13.01 3.53 13.49L2.46 12.42C3.37 11.67 4.36 11.04 5.4 10.52ZM12 7C7.46 7 3.34 8.78 0.29 11.67C0.11 11.85 0 12.1 0 12.38C0 12.66 0.11 12.91 0.29 13.08L2.77 15.56C2.95 15.74 3.2 15.85 3.48 15.85C3.75 15.85 4 15.75 4.18 15.57C4.97 14.84 5.86 14.21 6.84 13.72C7.17 13.56 7.4 13.21 7.4 12.82V9.72C8.85 9.25 10.4 9 12 9C13.6 9 15.15 9.25 16.59 9.73V12.83C16.59 13.23 16.82 13.57 17.15 13.73C18.13 14.22 19.03 14.84 19.82 15.58C20 15.75 20.25 15.86 20.52 15.86C20.8 15.86 21.05 15.75 21.23 15.57L23.71 13.09C23.89 12.91 24 12.66 24 12.38C24 12.1 23.89 11.85 23.71 11.67C20.66 8.78 16.54 7 12 7Z" />
  </svg>
)
export const oCallMade = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9 5V7H15.59L4 18.59L5.41 20L17 8.41V15H19V5H9Z" />
  </svg>
)
export const oCallMerge = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 20.41L18.41 19L15 15.59L13.59 17L17 20.41ZM7.49997 8H11V13.59L5.58997 19L6.99997 20.41L13 14.41V8H16.5L12 3.5L7.49997 8Z" />
  </svg>
)
export const oCallMissed = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 7L12 14.59L6.41 9H11V7H3V15H5V10.41L12 17.41L21 8.41L19.59 7Z" />
  </svg>
)
export const oCallMissedOutgoing = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8.41L12 17.41L19 10.41V15H21V7H13V9H17.59L12 14.59L4.41 7L3 8.41Z" />
  </svg>
)
export const oCallReceived = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5.41L18.59 4L7 15.59V9H5V19H15V17H8.41L20 5.41Z" />
  </svg>
)
export const oCallSplit = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14 4L16.29 6.29L13.41 9.17L14.83 10.59L17.71 7.71L20 10V4H14ZM10 4H4V10L6.29 7.71L11 12.41V20H13V11.59L7.71 6.29L10 4Z" />
  </svg>
)
export const oCallToAction = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19H3V5H21V19ZM5 15H19V18H5V15Z" />
  </svg>
)
export const oCamera = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14.25 2.26L14.17 2.22L14.16 2.24C13.46 2.09 12.74 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 7.25 18.69 3.28 14.25 2.26ZM19.41 9H11.42L14.13 4.3C16.53 4.96 18.48 6.72 19.41 9ZM13.1 4.08L10.27 9L9.12 11L6.4 6.3C7.84 4.88 9.82 4 12 4C12.37 4 12.74 4.03 13.1 4.08ZM5.7 7.09L8.54 12L9.69 14H4.26C4.1 13.36 4 12.69 4 12C4 10.15 4.64 8.45 5.7 7.09ZM4.59 15H12.57L9.86 19.7C7.46 19.03 5.52 17.28 4.59 15ZM10.9 19.91L14.89 13L17.61 17.7C16.16 19.12 14.18 20 12 20C11.62 20 11.26 19.96 10.9 19.91ZM18.3 16.91L14.3 10H19.73C19.9 10.64 20 11.31 20 12C20 13.85 19.36 15.55 18.3 16.91Z" />
  </svg>
)
export const oCameraAlt = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H16.83L15 2H9L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H8.05L9.88 4H14.12L15.95 6H20V18ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 15C10.35 15 9 13.65 9 12C9 10.35 10.35 9 12 9C13.65 9 15 10.35 15 12C15 13.65 13.65 15 12 15Z" />
  </svg>
)
export const oCameraEnhance = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 10L11.06 12.06L9 13L11.06 13.94L12 16L12.94 13.94L15 13L12.94 12.06L12 10ZM20 5H16.83L15 3H9L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5ZM20 19H4V7H8.05L8.64 6.35L9.88 5H14.12L15.36 6.35L15.95 7H20V19ZM12 8C9.24 8 7 10.24 7 13C7 15.76 9.24 18 12 18C14.76 18 17 15.76 17 13C17 10.24 14.76 8 12 8ZM12 16C10.35 16 9 14.65 9 13C9 11.35 10.35 10 12 10C13.65 10 15 11.35 15 13C15 14.65 13.65 16 12 16Z" />
  </svg>
)
export const oCameraFront = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5 20V22H10V24L13 21L10 18V20H5ZM14 20H19V22H14V20ZM11.99 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 11.99 4C10.88 4 10 4.9 10 6C10 7.1 10.89 8 11.99 8ZM17 0H7C5.9 0 5 0.9 5 2V16C5 17.1 5.9 18 7 18H17C18.1 18 19 17.1 19 16V2C19 0.9 18.1 0 17 0ZM17 16H7V14H17V16ZM17 12.5C17 10.83 13.67 10 12 10C10.33 10 7 10.83 7 12.5V2H17V12.5Z" />
  </svg>
)
export const oCameraRear = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5 20V22H10V24L13 21L10 18V20H5ZM14 20H19V22H14V20ZM17 0H7C5.9 0 5 0.9 5 2V16C5 17.1 5.9 18 7 18H17C18.1 18 19 17.1 19 16V2C19 0.9 18.1 0 17 0ZM17 16H7V2H17V16ZM12 7C13.1 7 14 6.1 13.99 5C13.99 3.9 13.09 3 11.99 3C10.89 3 10 3.9 10 5C10 6.1 10.89 7 12 7Z" />
  </svg>
)
export const oCameraRoll = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14 5C14 3.9 13.1 3 12 3H11V2C11 1.45 10.55 1 10 1H6C5.45 1 5 1.45 5 2V3H4C2.9 3 2 3.9 2 5V20C2 21.1 2.9 22 4 22H12C13.1 22 14 21.1 14 20H22V5H14ZM20 18H12V20H4V5H7V3H9V5H12V7H20V18ZM9 15H11V17H9V15ZM9 8H11V10H9V8ZM13 15H15V17H13V15ZM13 8H15V10H13V8ZM17 15H19V17H17V15ZM17 8H19V10H17V8Z" />
  </svg>
)
export const oCancel = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z" />
  </svg>
)
export const oCancelPresentation = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19H3V5H21V19ZM9.41 15.95L12 13.36L14.59 15.95L16 14.54L13.41 11.95L16 9.36L14.59 7.95L12 10.54L9.41 7.95L8 9.36L10.59 11.95L8 14.54L9.41 15.95Z" />
  </svg>
)
export const oCardGiftcard = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6H17.82C17.93 5.69 18 5.35 18 5C18 3.34 16.66 2 15 2C13.95 2 13.04 2.54 12.5 3.35L12 4.02L11.5 3.34C10.96 2.54 10.05 2 9 2C7.34 2 6 3.34 6 5C6 5.35 6.07 5.69 6.18 6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM15 4C15.55 4 16 4.45 16 5C16 5.55 15.55 6 15 6C14.45 6 14 5.55 14 5C14 4.45 14.45 4 15 4ZM9 4C9.55 4 10 4.45 10 5C10 5.55 9.55 6 9 6C8.45 6 8 5.55 8 5C8 4.45 8.45 4 9 4ZM20 19H4V17H20V19ZM20 14H4V8H9.08L7 10.83L8.62 12L12 7.4L15.38 12L17 10.83L14.92 8H20V14Z" />
  </svg>
)
export const oCardMembership = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4C2.89 2 2 2.89 2 4V15C2 16.11 2.89 17 4 17H8V22L12 20L16 22V17H20C21.11 17 22 16.11 22 15V4C22 2.89 21.11 2 20 2ZM20 15H4V13H20V15ZM20 10H4V4H20V10Z" />
  </svg>
)
export const oCardTravel = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6H17V4C17 2.89 16.11 2 15 2H9C7.89 2 7 2.89 7 4V6H4C2.89 6 2 6.89 2 8V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM9 4H15V6H9V4ZM20 19H4V17H20V19ZM20 14H4V8H7V10H9V8H15V10H17V8H20V14Z" />
  </svg>
)
export const oCasino = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM5 5V19H19V5H5ZM9 16.5C9 17.3284 8.32843 18 7.5 18C6.67157 18 6 17.3284 6 16.5C6 15.6716 6.67157 15 7.5 15C8.32843 15 9 15.6716 9 16.5ZM7.5 9C8.32843 9 9 8.32843 9 7.5C9 6.67157 8.32843 6 7.5 6C6.67157 6 6 6.67157 6 7.5C6 8.32843 6.67157 9 7.5 9ZM13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12ZM16.5 18C17.3284 18 18 17.3284 18 16.5C18 15.6716 17.3284 15 16.5 15C15.6716 15 15 15.6716 15 16.5C15 17.3284 15.6716 18 16.5 18ZM18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oCast = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3H3C1.9 3 1 3.9 1 5V8H3V5H21V19H14V21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM1 18V21H4C4 19.34 2.66 18 1 18ZM1 14V16C3.76 16 6 18.24 6 21H8C8 17.13 4.87 14 1 14ZM1 10V12C5.97 12 10 16.03 10 21H12C12 14.92 7.07 10 1 10Z" />
  </svg>
)
export const oCastConnected = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M1 18V21H4C4 19.34 2.66 18 1 18ZM1 14V16C3.76 16 6 18.24 6 21H8C8 17.13 4.87 14 1 14ZM1 10V12C5.97 12 10 16.03 10 21H12C12 14.92 7.07 10 1 10ZM21 3H3C1.9 3 1 3.9 1 5V8H3V5H21V19H14V21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM5 7V9H17V15H14V17H19V7H5Z" />
  </svg>
)
export const oCastForEducation = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3H3C1.9 3 1 3.9 1 5V8H3V5H21V19H14V21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM1 18V21H4C4 19.34 2.66 18 1 18ZM1 14V16C3.76 16 6 18.24 6 21H8C8 17.13 4.87 14 1 14ZM1 10V12C5.97 12 10 16.03 10 21H12C12 14.92 7.07 10 1 10ZM11 11.09V13.09L14.5 15L18 13.09V11.09L14.5 13L11 11.09ZM14.5 6L9 9L14.5 12L20 9L14.5 6Z" />
  </svg>
)
export const oCategory = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L6.5 11H17.5L12 2ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 21.5H11V13.5H3V21.5ZM5 15.5H9V19.5H5V15.5Z" />
  </svg>
)
export const oCellWifi = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 10.78V20H10.78L20 10.78ZM22 5.96997L6 22H22V5.96997Z"
      opacity="0.3"
    />
    <path
      d="M18.0001 9.98L6.00005 22H18.0001V9.98ZM3.93005 5.93L5.22005 7.22C8.41005 4.03 13.6001 4.03 16.7901 7.22L18.0801 5.93C14.1701 2.02 7.83005 2.02 3.93005 5.93ZM9.07005 11.07L11.0001 13L12.9301 11.07C11.8601 10.01 10.1401 10.01 9.07005 11.07ZM6.50005 8.5L7.79005 9.79C9.56005 8.02 12.4401 8.02 14.2201 9.79L15.5001 8.5C13.0201 6.02 8.98005 6.02 6.50005 8.5Z"
      fill="black"
    />
  </svg>
)
export const oCenterFocusStrong = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 12C17 9.24 14.76 7 12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12ZM12 15C10.35 15 9 13.65 9 12C9 10.35 10.35 9 12 9C13.65 9 15 10.35 15 12C15 13.65 13.65 15 12 15ZM5 15H3V19C3 20.1 3.9 21 5 21H9V19H5V15ZM5 5H9V3H5C3.9 3 3 3.9 3 5V9H5V5ZM19 3H15V5H19V9H21V5C21 3.9 20.1 3 19 3ZM19 19H15V21H19C20.1 21 21 20.1 21 19V15H19V19Z" />
  </svg>
)
export const oCenterFocusWeak = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5 15H3V19C3 20.1 3.9 21 5 21H9V19H5V15ZM5 5H9V3H5C3.9 3 3 3.9 3 5V9H5V5ZM12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14ZM19 3H15V5H19V9H21V5C21 3.9 20.1 3 19 3ZM19 19H15V21H19C20.1 21 21 20.1 21 19V15H19V19Z" />
  </svg>
)
export const oChangeHistory = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 7.77L18.39 18H5.61L12 7.77ZM12 4L2 20H22L12 4Z" />
  </svg>
)
export const oChat = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H20V16H5.17L4 17.17V4ZM4 2C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2H4ZM6 12H14V14H6V12ZM6 9H18V11H6V9ZM6 6H18V8H6V6Z" />
  </svg>
)
export const oChatBubble = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" />
  </svg>
)
export const oChatBubbleOutline = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z" />
  </svg>
)
export const oCheck = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9.00003 16.17L4.83003 12L3.41003 13.41L9.00003 19L21 6.99997L19.59 5.58997L9.00003 16.17Z" />
  </svg>
)
export const oCheckBox = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17.99 9L16.58 7.58L9.99 14.17L7.41 11.6L5.99 13.01L9.99 17L17.99 9Z" />
  </svg>
)
export const oCheckBoxOutlineBlank = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" />
  </svg>
)
export const oCheckCircle = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
  </svg>
)
export const oCheckCircleOutline = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
  </svg>
)
export const oChevronLeft = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" />
  </svg>
)
export const oChevronRight = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9.99997 6L8.58997 7.41L13.17 12L8.58997 16.59L9.99997 18L16 12L9.99997 6Z" />
  </svg>
)
export const oChildCare = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.13 8.17C21.58 8.6 22.69 9.83 22.94 11.34C22.98 11.55 23 11.77 23 12C23 12.23 22.98 12.45 22.94 12.66C22.69 14.18 21.58 15.4 20.14 15.83C19.62 16.93 18.87 17.92 17.97 18.72C16.38 20.14 14.29 21 12 21C9.71 21 7.62 20.14 6.04 18.72C5.14 17.92 4.39 16.94 3.87 15.83C2.42 15.4 1.31 14.17 1.06 12.66C1.02 12.45 1 12.23 1 12C1 11.77 1.02 11.55 1.06 11.34C1.31 9.82 2.42 8.6 3.87 8.17C4.39 7.06 5.14 6.07 6.06 5.26C7.64 3.85 9.72 3 12 3C14.28 3 16.36 3.85 17.94 5.26C18.85 6.07 19.6 7.05 20.13 8.17ZM18.8115 13.9828C18.8738 13.9915 18.9348 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10C18.9348 10 18.8738 10.0085 18.8115 10.0172C18.7783 10.0218 18.7448 10.0265 18.71 10.03C18.51 9.36 18.22 8.74 17.85 8.17C16.6 6.26 14.45 5 12 5C9.55 5 7.4 6.26 6.15 8.17C5.78 8.74 5.49 9.36 5.29 10.03C5.25525 10.0265 5.2217 10.0218 5.18853 10.0172C5.12624 10.0085 5.06525 10 5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C5.06525 14 5.12624 13.9915 5.18853 13.9828C5.2217 13.9782 5.25525 13.9735 5.29 13.97C5.49 14.64 5.78 15.26 6.15 15.83C7.4 17.74 9.55 19 12 19C14.45 19 16.6 17.74 17.85 15.83C18.22 15.26 18.51 14.64 18.71 13.97C18.7448 13.9735 18.7783 13.9782 18.8115 13.9828ZM16.5 14C15.74 15.77 14.01 17 12 17C9.99 17 8.26 15.77 7.5 14H16.5ZM9.5 11.75C10.1904 11.75 10.75 11.1904 10.75 10.5C10.75 9.80964 10.1904 9.25 9.5 9.25C8.80964 9.25 8.25 9.80964 8.25 10.5C8.25 11.1904 8.80964 11.75 9.5 11.75ZM14.5 11.75C15.1904 11.75 15.75 11.1904 15.75 10.5C15.75 9.80964 15.1904 9.25 14.5 9.25C13.8096 9.25 13.25 9.80964 13.25 10.5C13.25 11.1904 13.8096 11.75 14.5 11.75Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oChildFriendly = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2V10H21C21 5.58 17.42 2 13 2ZM15 8V4.34C16.7 4.94 18.05 6.29 18.66 8H15ZM6.44 11L5.49 9H2V11H4.22C4.22 11 6.11 15.07 6.34 15.42C5.24 16.01 4.5 17.17 4.5 18.5C4.5 20.43 6.07 22 8 22C9.76 22 11.22 20.7 11.46 19H13.54C13.78 20.7 15.24 22 17 22C18.93 22 20.5 20.43 20.5 18.5C20.5 17.46 20.04 16.53 19.32 15.89C20.37 14.54 21 12.84 21 11H6.44ZM8 20C7.17 20 6.5 19.33 6.5 18.5C6.5 17.67 7.17 17 8 17C8.83 17 9.5 17.67 9.5 18.5C9.5 19.33 8.83 20 8 20ZM17 20C16.17 20 15.5 19.33 15.5 18.5C15.5 17.67 16.17 17 17 17C17.83 17 18.5 17.67 18.5 18.5C18.5 19.33 17.83 20 17 20ZM17.74 14.66L17.45 15.03C17.31 15.01 17.15 15 17 15C15.61 15 14.4 15.82 13.84 17H11.16C10.66 15.96 9.66 15.2 8.48 15.03L8.04 14.36C7.94 14.19 7.7 13.67 7.37 13H18.66C18.45 13.59 18.14 14.15 17.74 14.66Z" />
  </svg>
)
export const oChromeReaderMode = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 4H3C1.9 4 1 4.9 1 6V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V6C23 4.9 22.1 4 21 4ZM3 19V6H11V19H3ZM21 19H13V6H21V19ZM14 9.5H20V11H14V9.5ZM14 12H20V13.5H14V12ZM14 14.5H20V16H14V14.5Z" />
  </svg>
)
export const oClass = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM9 4H11V9L10 8.25L9 9V4ZM18 20H6V4H7V13L10 10.75L13 13V4H18V20Z" />
  </svg>
)
export const oClear = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
  </svg>
)
export const oClearAll = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5 13H19V11H5V13ZM3 17H17V15H3V17ZM7 7V9H21V7H7Z" />
  </svg>
)
export const oClose = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
  </svg>
)
export const oClosedCaption = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 4H5C3.89 4 3 4.9 3 6V18C3 19.1 3.89 20 5 20H19C20.1 20 21 19.1 21 18V6C21 4.9 20.1 4 19 4ZM19 18H5V6H19V18ZM7 15H10C10.55 15 11 14.55 11 14V13H9.5V13.5H7.5V10.5H9.5V11H11V10C11 9.45 10.55 9 10 9H7C6.45 9 6 9.45 6 10V14C6 14.55 6.45 15 7 15ZM14 15H17C17.55 15 18 14.55 18 14V13H16.5V13.5H14.5V10.5H16.5V11H18V10C18 9.45 17.55 9 17 9H14C13.45 9 13 9.45 13 10V14C13 14.55 13.45 15 14 15Z" />
  </svg>
)
export const oCloud = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6C14.62 6 16.88 7.86 17.39 10.43L17.69 11.93L19.22 12.04C20.78 12.14 22 13.45 22 15C22 16.65 20.65 18 19 18H6C3.79 18 2 16.21 2 14C2 11.95 3.53 10.24 5.56 10.03L6.63 9.92L7.13 8.97C8.08 7.14 9.94 6 12 6ZM12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04C18.67 6.59 15.64 4 12 4Z" />
  </svg>
)
export const oCloudCircle = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.29 10.19C15.89 8.18 14.13 6.67 12 6.67C10.31 6.67 8.85 7.63 8.12 9.03C6.36 9.21 5 10.7 5 12.5C5 14.43 6.57 16 8.5 16H16.08C17.69 16 19 14.69 19 13.08C19 11.54 17.8 10.29 16.29 10.19ZM16 14H8.5C7.67 14 7 13.33 7 12.5C7 11.67 7.67 11 8.5 11H9.4L9.89 9.95C10.3 9.16 11.11 8.67 12 8.67C13.13 8.67 14.11 9.47 14.33 10.58L14.61 12H16C16.55 12 17 12.45 17 13C17 13.55 16.55 14 16 14Z" />
  </svg>
)
export const oCloudDone = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM19 18H6C3.79 18 2 16.21 2 14C2 11.95 3.53 10.24 5.56 10.03L6.63 9.92L7.13 8.97C8.08 7.14 9.94 6 12 6C14.62 6 16.88 7.86 17.39 10.43L17.69 11.93L19.22 12.04C20.78 12.14 22 13.45 22 15C22 16.65 20.65 18 19 18ZM10 14.18L7.91 12.09L6.5 13.5L10 17L16.01 10.99L14.6 9.58L10 14.18Z" />
  </svg>
)
export const oCloudDownload = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM19 18H6C3.79 18 2 16.21 2 14C2 11.95 3.53 10.24 5.56 10.03L6.63 9.92L7.13 8.97C8.08 7.14 9.94 6 12 6C14.62 6 16.88 7.86 17.39 10.43L17.69 11.93L19.22 12.04C20.78 12.14 22 13.45 22 15C22 16.65 20.65 18 19 18ZM13.45 10H10.55V13H8L12 17L16 13H13.45V10Z" />
  </svg>
)
export const oCloudOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M24 15C24 12.36 21.95 10.22 19.35 10.04C18.67 6.58999 15.64 3.99999 12 3.99999C10.67 3.99999 9.43 4.35999 8.35 4.96999L9.84 6.45999C10.51 6.16999 11.23 5.99999 12 5.99999C15.04 5.99999 17.5 8.45999 17.5 11.5V12H19C20.66 12 22 13.34 22 15C22 15.99 21.52 16.85 20.79 17.4L22.2 18.81C23.29 17.89 24 16.54 24 15ZM4.41 3.85999L3 5.26999L5.77 8.03999H5.35C2.34 8.35999 0 10.91 0 14C0 17.31 2.69 20 6 20H17.73L19.73 22L21.14 20.59L4.41 3.85999ZM6 18C3.79 18 2 16.21 2 14C2 11.79 3.79 9.99999 6 9.99999H7.73L15.73 18H6Z" />
  </svg>
)
export const oCloudQueue = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM19 18H6C3.79 18 2 16.21 2 14C2 11.79 3.79 10 6 10H6.71C7.37 7.69 9.48 6 12 6C15.04 6 17.5 8.46 17.5 11.5V12H19C20.66 12 22 13.34 22 15C22 16.66 20.66 18 19 18Z" />
  </svg>
)
export const oCloudUpload = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM19 18H6C3.79 18 2 16.21 2 14C2 11.95 3.53 10.24 5.56 10.03L6.63 9.92L7.13 8.97C8.08 7.14 9.94 6 12 6C14.62 6 16.88 7.86 17.39 10.43L17.69 11.93L19.22 12.04C20.78 12.14 22 13.45 22 15C22 16.65 20.65 18 19 18ZM8 13H10.55V16H13.45V13H16L12 9L8 13Z" />
  </svg>
)
export const oCode = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z" />
  </svg>
)
export const oCollections = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4V16H8V4H20ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM11.5 11.67L13.19 13.93L15.67 10.83L19 15H9L11.5 11.67ZM2 6V20C2 21.1 2.9 22 4 22H18V20H4V6H2Z" />
  </svg>
)
export const oCollectionsBookmark = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM17 4V9L16 8.25L15 9V4H17ZM20 16H8V4H13V13L16 10.75L19 13V4H20V16Z" />
  </svg>
)
export const oColorLens = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 22C6.49 22 2 17.51 2 12C2 6.49 6.49 2 12 2C17.51 2 22 6.04 22 11C22 14.31 19.31 17 16 17H14.23C13.95 17 13.73 17.22 13.73 17.5C13.73 17.62 13.78 17.73 13.86 17.83C14.27 18.3 14.5 18.89 14.5 19.5C14.5 20.88 13.38 22 12 22ZM12 4C7.59 4 4 7.59 4 12C4 16.41 7.59 20 12 20C12.28 20 12.5 19.78 12.5 19.5C12.5 19.34 12.42 19.22 12.36 19.15C11.95 18.69 11.73 18.1 11.73 17.5C11.73 16.12 12.85 15 14.23 15H16C18.21 15 20 13.21 20 11C20 7.14 16.41 4 12 4ZM6.5 13C7.32843 13 8 12.3284 8 11.5C8 10.6716 7.32843 10 6.5 10C5.67157 10 5 10.6716 5 11.5C5 12.3284 5.67157 13 6.5 13ZM11 7.5C11 8.32843 10.3284 9 9.5 9C8.67157 9 8 8.32843 8 7.5C8 6.67157 8.67157 6 9.5 6C10.3284 6 11 6.67157 11 7.5ZM14.5 9C15.3284 9 16 8.32843 16 7.5C16 6.67157 15.3284 6 14.5 6C13.6716 6 13 6.67157 13 7.5C13 8.32843 13.6716 9 14.5 9ZM19 11.5C19 12.3284 18.3284 13 17.5 13C16.6716 13 16 12.3284 16 11.5C16 10.6716 16.6716 10 17.5 10C18.3284 10 19 10.6716 19 11.5Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oColorize = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.66 5.41L18.58 6.33L15.89 9.02L14.97 8.1L17.66 5.41ZM17.67 3C17.41 3 17.16 3.1 16.96 3.29L13.84 6.41L11.91 4.5L10.5 5.91L11.92 7.33L3 16.25V21H7.75L16.67 12.08L18.09 13.5L19.5 12.09L17.58 10.17L20.7 7.05C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.1 17.92 3 17.67 3ZM6.92 19L5 17.08L13.06 9.02L14.98 10.94L6.92 19Z" />
  </svg>
)
export const oComment = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21.99 4C21.99 2.9 21.1 2 20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22L21.99 4ZM20 4V17.17L18.83 16H4V4H20ZM6 12H18V14H6V12ZM6 9H18V11H6V9ZM6 6H18V8H6V6Z" />
  </svg>
)
export const oCommute = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4H5C3.34 4 2 5.34 2 7V15C2 16.66 3.34 18 5 18L4 19V20H5L7 18H9V13H4V6H13V8H15V7C15 5.34 13.66 4 12 4ZM5 14C5.55 14 6 14.45 6 15C6 15.55 5.55 16 5 16C4.45 16 4 15.55 4 15C4 14.45 4.45 14 5 14ZM20.57 9.66C20.43 9.26 20.05 9 19.6 9H12.41C11.95 9 11.58 9.26 11.43 9.66L10.01 13.77V19.28C10.01 19.66 10.32 20 10.7 20H11.32C11.7 20 12 19.62 12 19.24V18H20V19.24C20 19.62 20.31 20 20.69 20H21.3C21.68 20 21.99 19.66 21.99 19.28L22 17.91V13.77L20.57 9.66ZM12.41 10H19.6L20.63 13H11.38L12.41 10ZM12 16C11.45 16 11 15.55 11 15C11 14.45 11.45 14 12 14C12.55 14 13 14.45 13 15C13 15.55 12.55 16 12 16ZM20 16C19.45 16 19 15.55 19 15C19 14.45 19.45 14 20 14C20.55 14 21 14.45 21 15C21 15.55 20.55 16 20 16Z" />
  </svg>
)
export const oCompare = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H10V23H12V1H10V3ZM10 18H5L10 12V18ZM19 3H14V5H19V18L14 12V21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" />
  </svg>
)
export const oCompareArrows = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9.01 14H2V16H9.01V19L13 15L9.01 11V14ZM14.99 13V10H22V8H14.99V5L11 9L14.99 13Z" />
  </svg>
)
export const oCompassCalibration = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C9.24 12 7 14.24 7 17C7 19.76 9.24 22 12 22C14.76 22 17 19.76 17 17C17 14.24 14.76 12 12 12ZM12 20C10.35 20 9 18.65 9 17C9 15.35 10.35 14 12 14C13.65 14 15 15.35 15 17C15 18.65 13.65 20 12 20ZM12 3C8.1 3 4.56 4.59 2 7.15L7 12.15C8.28 10.87 10.05 10.07 12 10.07C13.95 10.07 15.72 10.86 17 12.14L22 7.14C19.44 4.59 15.9 3 12 3ZM16.84 9.47C15.4 8.56 13.74 8.07 12 8.07C10.26 8.07 8.59 8.56 7.15 9.48L4.94 7.26C6.99 5.79 9.44 5 12 5C14.56 5 17 5.79 19.05 7.26L16.84 9.47Z" />
  </svg>
)
export const oComputer = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 18C21.1 18 21.99 17.1 21.99 16L22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V16C2 17.1 2.9 18 4 18H0V20H24V18H20ZM4 6H20V16H4V6Z" />
  </svg>
)
export const oConfirmationNumber = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 10V6C22 4.89 21.1 4 20 4H4C2.9 4 2.01 4.89 2.01 6V10C3.11 10 4 10.9 4 12C4 13.1 3.11 14 2 14V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V14C20.9 14 20 13.1 20 12C20 10.9 20.9 10 22 10ZM20 8.54C18.81 9.23 18 10.53 18 12C18 13.47 18.81 14.77 20 15.46V18H4V15.46C5.19 14.77 6 13.47 6 12C6 10.52 5.2 9.23 4.01 8.54L4 6H20V8.54ZM11 15H13V17H11V15ZM11 11H13V13H11V11ZM11 7H13V9H11V7Z" />
  </svg>
)
export const oContactMail = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 3H2C0.9 3 0 3.9 0 5V19C0 20.1 0.9 21 2 21H22C23.1 21 23.99 20.1 23.99 19L24 5C24 3.9 23.1 3 22 3ZM22 19H2V5H22V19ZM21 6H14V11H21V6ZM20 8L17.5 9.75L15 8V7L17.5 8.75L20 7V8ZM9 12C10.65 12 12 10.65 12 9C12 7.35 10.65 6 9 6C7.35 6 6 7.35 6 9C6 10.65 7.35 12 9 12ZM9 8C9.55 8 10 8.45 10 9C10 9.55 9.55 10 9 10C8.45 10 8 9.55 8 9C8 8.45 8.45 8 9 8ZM15 16.59C15 14.09 11.03 13.01 9 13.01C6.97 13.01 3 14.09 3 16.59V18H15V16.59ZM5.48 16C6.22 15.5 7.7 15 9 15C10.3 15 11.77 15.49 12.52 16H5.48Z" />
  </svg>
)
export const oContactPhone = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 3H2C0.9 3 0 3.9 0 5V19C0 20.1 0.9 21 2 21H22C23.1 21 23.99 20.1 23.99 19L24 5C24 3.9 23.1 3 22 3ZM22 19H2V5H22V19ZM19.01 17.99L21 16L19.49 14H17.85C17.63 13.37 17.5 12.7 17.5 12C17.5 11.3 17.63 10.63 17.85 10H19.49L21 8L19.01 6.01C17.7 6.99 16.73 8.38 16.28 10C16.1 10.64 16 11.31 16 12C16 12.69 16.1 13.36 16.28 14C16.73 15.61 17.7 17.01 19.01 17.99ZM9 12C10.65 12 12 10.65 12 9C12 7.35 10.65 6 9 6C7.35 6 6 7.35 6 9C6 10.65 7.35 12 9 12ZM9 8C9.55 8 10 8.45 10 9C10 9.55 9.55 10 9 10C8.45 10 8 9.55 8 9C8 8.45 8.45 8 9 8ZM15 16.59C15 14.09 11.03 13.01 9 13.01C6.97 13.01 3 14.09 3 16.59V18H15V16.59ZM5.48 16C6.22 15.5 7.7 15 9 15C10.3 15 11.77 15.49 12.52 16H5.48Z" />
  </svg>
)
export const oContactSupport = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 23.59V19.99C5.99 19.73 2 15.57 2 10.5C2 5.26 6.26 1 11.5 1C16.74 1 21 5.26 21 10.5C21 15.45 17.56 20.43 12.43 22.9L11 23.59ZM11.5 3C7.36 3 4 6.36 4 10.5C4 14.64 7.36 18 11.5 18H13V20.3C16.64 18 19 14.22 19 10.5C19 6.36 15.64 3 11.5 3ZM10.5 14.5H12.5V16.5H10.5V14.5ZM12.5 13H10.5C10.5 9.75 13.5 10 13.5 8C13.5 6.9 12.6 6 11.5 6C10.4 6 9.5 6.9 9.5 8H7.5C7.5 5.79 9.29 4 11.5 4C13.71 4 15.5 5.79 15.5 8C15.5 10.5 12.5 10.75 12.5 13Z" />
  </svg>
)
export const oContacts = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18ZM4 0H20V2H4V0ZM4 22H20V24H4V22ZM12 12C13.38 12 14.5 10.88 14.5 9.5C14.5 8.12 13.38 7 12 7C10.62 7 9.5 8.12 9.5 9.5C9.5 10.88 10.62 12 12 12ZM12 8.5C12.55 8.5 13 8.95 13 9.5C13 10.05 12.55 10.5 12 10.5C11.45 10.5 11 10.05 11 9.5C11 8.95 11.45 8.5 12 8.5ZM17 15.99C17 13.9 13.69 13 12 13C10.31 13 7 13.9 7 15.99V17H17V15.99ZM8.81 15.5C9.42 14.98 10.84 14.5 12 14.5C13.17 14.5 14.59 14.98 15.2 15.5H8.81Z" />
  </svg>
)
export const oControlCamera = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 12L5.54 8.46L7.3 10.23L5.54 12L7.3 13.77L5.54 15.54L2 12ZM10.23 16.7L12 18.46L13.77 16.7L15.54 18.46L12 22L8.46 18.46L10.23 16.7ZM16.7 10.23L18.46 8.46L22 12L18.46 15.54L16.7 13.77L18.46 12L16.7 10.23ZM10.23 7.3L8.46 5.54L12 2L15.54 5.54L13.77 7.3L12 5.54L10.23 7.3ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oControlPoint = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
  </svg>
)
export const oControlPointDuplicate = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8H14V11H11V13H14V16H16V13H19V11H16V8ZM2 12C2 9.21 3.64 6.8 6.01 5.68V3.52C2.52 4.76 0 8.09 0 12C0 15.91 2.52 19.24 6.01 20.48V18.32C3.64 17.2 2 14.79 2 12ZM15 3C10.04 3 6 7.04 6 12C6 16.96 10.04 21 15 21C19.96 21 24 16.96 24 12C24 7.04 19.96 3 15 3ZM15 19C11.14 19 8 15.86 8 12C8 8.14 11.14 5 15 5C18.86 5 22 8.14 22 12C22 15.86 18.86 19 15 19Z" />
  </svg>
)
export const oCopyright = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10.08 10.86C10.13 10.53 10.24 10.24 10.38 9.99C10.52 9.74 10.72 9.53 10.97 9.37C11.21 9.22 11.51 9.15 11.88 9.14C12.11 9.15 12.32 9.19 12.51 9.27C12.71 9.36 12.89 9.48 13.03 9.63C13.17 9.78 13.28 9.96 13.37 10.16C13.46 10.36 13.5 10.58 13.51 10.8H15.3C15.28 10.33 15.19 9.9 15.02 9.51C14.85 9.12 14.62 8.78 14.32 8.5C14.02 8.22 13.66 8 13.24 7.84C12.82 7.68 12.36 7.61 11.85 7.61C11.2 7.61 10.63 7.72 10.15 7.95C9.67 8.18 9.27 8.48 8.95 8.87C8.63 9.26 8.39 9.71 8.24 10.23C8.09 10.75 8 11.29 8 11.87V12.14C8 12.72 8.08 13.26 8.23 13.78C8.38 14.3 8.62 14.75 8.94 15.13C9.26 15.51 9.66 15.82 10.14 16.04C10.62 16.26 11.19 16.38 11.84 16.38C12.31 16.38 12.75 16.3 13.16 16.15C13.57 16 13.93 15.79 14.24 15.52C14.55 15.25 14.8 14.94 14.98 14.58C15.16 14.22 15.27 13.84 15.28 13.43H13.49C13.48 13.64 13.43 13.83 13.34 14.01C13.25 14.19 13.13 14.34 12.98 14.47C12.83 14.6 12.66 14.7 12.46 14.77C12.27 14.84 12.07 14.86 11.86 14.87C11.5 14.86 11.2 14.79 10.97 14.64C10.72 14.48 10.52 14.27 10.38 14.02C10.24 13.77 10.13 13.47 10.08 13.14C10.03 12.81 10 12.47 10 12.14V11.87C10 11.52 10.03 11.19 10.08 10.86ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
  </svg>
)
export const oCreate = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM5.92 19H5V18.08L14.06 9.02L14.98 9.94L5.92 19ZM20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3C17.4 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63Z" />
  </svg>
)
export const oCreateNewFolder = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6H12L10 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V8C22 6.89 21.11 6 20 6ZM20 18H4V6H9.17L11.17 8H20V18ZM12 14H14V16H16V14H18V12H16V10H14V12H12V14Z" />
  </svg>
)
export const oCreditCard = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" />
  </svg>
)
export const oCrop = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 15H19V7C19 5.9 18.1 5 17 5H9V7H17V15ZM7 17V1H5V5H1V7H5V17C5 18.1 5.9 19 7 19H17V23H19V19H23V17H7Z" />
  </svg>
)
export const oCrop169 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16V8C21 6.9 20.1 6 19 6ZM19 16H5V8H19V16Z" />
  </svg>
)
export const oCrop32 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 4H5C3.9 4 3 4.9 3 6V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V6C21 4.9 20.1 4 19 4ZM19 18H5V6H19V18Z" />
  </svg>
)
export const oCrop54 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5ZM19 17H5V7H19V17Z" />
  </svg>
)
export const oCrop75 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 7H5C3.9 7 3 7.9 3 9V15C3 16.1 3.9 17 5 17H19C20.1 17 21 16.1 21 15V9C21 7.9 20.1 7 19 7ZM19 15H5V9H19V15Z" />
  </svg>
)
export const oCropDin = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" />
  </svg>
)
export const oCropFree = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5V9H5V5H9V3H5C3.9 3 3 3.9 3 5ZM5 15H3V19C3 20.1 3.9 21 5 21H9V19H5V15ZM19 19H15V21H19C20.1 21 21 20.1 21 19V15H19V19ZM19 3H15V5H19V9H21V5C21 3.9 20.1 3 19 3Z" />
  </svg>
)
export const oCropLandscape = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5ZM19 17H5V7H19V17Z" />
  </svg>
)
export const oCropOriginal = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM13.96 12.29L11.21 15.83L9.25 13.47L6.5 17H17.5L13.96 12.29Z" />
  </svg>
)
export const oCropPortrait = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 3H7C5.9 3 5 3.9 5 5V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V5C19 3.9 18.1 3 17 3ZM17 19H7V5H17V19Z" />
  </svg>
)
export const oCropRotate = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7.47 21.49C4.2 19.93 1.86 16.76 1.5 13H0C0.51 19.16 5.66 24 11.95 24C12.18 24 12.39 23.98 12.61 23.97L8.8 20.15L7.47 21.49ZM12.05 0C11.82 0 11.61 0.02 11.39 0.04L15.2 3.85L16.53 2.52C19.8 4.07 22.14 7.24 22.5 11H24C23.49 4.84 18.34 0 12.05 0ZM16 14H18V8C18 6.89 17.1 6 16 6H10V8H16V14ZM8 16V4H6V6H4V8H6V16C6 17.1 6.89 18 8 18H16V20H18V18H20V16H8Z" />
  </svg>
)
export const oCropSquare = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 4H6C4.9 4 4 4.9 4 6V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V6C20 4.9 19.1 4 18 4ZM18 18H6V6H18V18Z" />
  </svg>
)
export const oDashboard = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 5V7H15V5H19ZM9 5V11H5V5H9ZM19 13V19H15V13H19ZM9 17V19H5V17H9ZM21 3H13V9H21V3ZM11 3H3V13H11V3ZM21 11H13V21H21V11ZM11 15H3V21H11V15Z" />
  </svg>
)
export const oDataUsage = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2.05005V5.08005C16.39 5.57005 19 8.47005 19 12C19 12.9 18.82 13.75 18.52 14.54L21.12 16.07C21.68 14.83 22 13.45 22 12C22 6.82005 18.05 2.55005 13 2.05005ZM12 19C8.13 19 5 15.87 5 12C5 8.47005 7.61 5.57005 11 5.08005V2.05005C5.94 2.55005 2 6.81005 2 12C2 17.52 6.47 22 11.99 22C15.3 22 18.23 20.39 20.05 17.91L17.45 16.38C16.17 17.98 14.21 19 12 19Z" />
  </svg>
)
export const oDateRange = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 11H9V13H7V11ZM21 6V20C21 21.1 20.1 22 19 22H5C3.89 22 3 21.1 3 20L3.01 6C3.01 4.9 3.89 4 5 4H6V2H8V4H16V2H18V4H19C20.1 4 21 4.9 21 6ZM5 8H19V6H5V8ZM19 20V10H5V20H19ZM15 13H17V11H15V13ZM11 13H13V11H11V13Z" />
  </svg>
)
export const oDehaze = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M2 16V18H22V16H2ZM2 11V13H22V11H2ZM2 6V8H22V6H2Z" />
  </svg>
)
export const oDelete = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z" />
  </svg>
)
export const oDeleteForever = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14.12 10.47L12 12.59L9.87 10.47L8.46 11.88L10.59 14L8.47 16.12L9.88 17.53L12 15.41L14.12 17.53L15.53 16.12L13.41 14L15.53 11.88L14.12 10.47ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5ZM6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9Z" />
  </svg>
)
export const oDeleteOutline = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z" />
  </svg>
)
export const oDeleteSweep = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 16H19V18H15V16ZM15 8H22V10H15V8ZM15 12H21V14H15V12ZM3 18C3 19.1 3.9 20 5 20H11C12.1 20 13 19.1 13 18V8H3V18ZM5 10H11V18H5V10ZM10 4H6L5 5H2V7H14V5H11L10 4Z" />
  </svg>
)
export const oDepartureBoard = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.25 4.02C11.51 2.2 13.61 1 16 1C19.87 1 23 4.13 23 8C23 11.53 20.39 14.43 17 14.92V18C17 18.88 16.61 19.67 16 20.22V22C16 22.55 15.55 23 15 23H14C13.45 23 13 22.55 13 22V21H5V22C5 22.55 4.55 23 4 23H3C2.45 23 2 22.55 2 22V20.22C1.39 19.67 1 18.88 1 18V8C1 4.5 4.58 4 9 4C9.42998 4 9.83996 4.01 10.2499 4.02L10.25 4.02ZM9.29 6H9C5.31 6 3.89 6.46 3.34 6.99H9.08C9.13 6.66 9.2 6.32 9.29 6ZM9.08 8.99H3V12H10.26C9.65 11.12 9.24 10.1 9.08 8.99ZM14.66 18.73C14.79 18.62 15 18.37 15 18V14.92C14.06 14.79 13.19 14.47 12.41 14H3V18C3 18.37 3.21 18.62 3.34 18.73L3.63 19H14.37L14.66 18.73ZM11 8C11 10.76 13.24 13 16 13C18.76 13 21 10.76 21 8C21 5.24 18.76 3 16 3C13.24 3 11 5.24 11 8ZM15 4H16.5V8.25L19.37 9.93L18.62 11.16L15 9V4ZM5.5 18C6.32843 18 7 17.3284 7 16.5C7 15.6716 6.32843 15 5.5 15C4.67157 15 4 15.6716 4 16.5C4 17.3284 4.67157 18 5.5 18ZM12.5 18C13.3284 18 14 17.3284 14 16.5C14 15.6716 13.3284 15 12.5 15C11.6716 15 11 15.6716 11 16.5C11 17.3284 11.6716 18 12.5 18Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oDescription = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M8 16H16V18H8V16ZM8 12H16V14H8V12ZM14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" />
  </svg>
)
export const oDesktopAccessDisabled = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M1.41 1.68994L0 3.09994L1 4.08994V15.9999C1 17.0999 1.89 17.9999 2.99 17.9999H10V19.9999H8V21.9999H16V19.9999H14V17.9999H14.9L20.9 23.9999L22.31 22.5899L1.41 1.68994ZM2.99 15.9999V6.08994L12.9 15.9999H2.99ZM4.55 1.99994L6.55 3.99994H21V15.9999H18.55L20.55 17.9999H20.99C22.09 17.9999 22.99 17.0999 22.99 15.9999V3.99994C22.99 2.89994 22.09 1.99994 20.99 1.99994H4.55Z" />
  </svg>
)
export const oDesktopMac = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 2H3C1.9 2 1 2.9 1 4V16C1 17.1 1.9 18 3 18H10L8 21V22H16V21L14 18H21C22.1 18 23 17.1 23 16V4C23 2.9 22.1 2 21 2ZM21 14H3V4H21V14Z" />
  </svg>
)
export const oDesktopWindows = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 2H3C1.9 2 1 2.9 1 4V16C1 17.1 1.9 18 3 18H10V20H8V22H16V20H14V18H21C22.1 18 23 17.1 23 16V4C23 2.9 22.1 2 21 2ZM21 16H3V4H21V16Z" />
  </svg>
)
export const oDetails = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4L12 20L21 4H3ZM6.38 6H17.63L12 16L6.38 6Z" />
  </svg>
)
export const oDeveloperBoard = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 9V7H20V5C20 3.9 19.1 3 18 3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H18C19.1 21 20 20.1 20 19V17H22V15H20V13H22V11H20V9H22ZM18 19H4V5H18V19ZM6 13H11V17H6V13ZM12 7H16V10H12V7ZM6 7H11V12H6V7ZM12 11H16V17H12V11Z" />
  </svg>
)
export const oDeveloperMode = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 5H17V7H19V3C19 1.9 18.1 1.01 17 1.01L7 1C5.9 1 5 1.9 5 3V7H7V5ZM15.41 16.59L20 12L15.41 7.41L14 8.83L17.17 12L14 15.17L15.41 16.59ZM10 15.17L6.83 12L10 8.83L8.59 7.41L4 12L8.59 16.59L10 15.17ZM17 19H7V17H5V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V17H17V19Z" />
  </svg>
)
export const oDeviceHub = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 16L13 12V8.82C14.16 8.4 15 7.3 15 6C15 4.34 13.66 3 12 3C10.34 3 9 4.34 9 6C9 7.3 9.84 8.4 11 8.82V12L7 16H3V21H8V17.95L12 13.75L16 17.95V21H21V16H17Z" />
  </svg>
)
export const oDeviceUnknown = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 1H7C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1ZM17 19H7V5H17V19ZM12 6.72C10.04 6.72 8.5 8.24 8.5 10.19H10.25C10.25 9.26 11.07 8.44 12 8.44C12.93 8.44 13.75 9.26 13.75 10.19C13.75 11.94 11.12 11.76 11.12 14.64H12.88C12.88 12.68 15.5 12.45 15.5 10.19C15.5 8.23 13.96 6.72 12 6.72ZM11 16H13V18H11V16Z" />
  </svg>
)
export const oDevices = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H22V4H4C2.9 4 2 4.9 2 6V17H0V20H14V17H4V6ZM23 8H17C16.45 8 16 8.45 16 9V19C16 19.55 16.45 20 17 20H23C23.55 20 24 19.55 24 19V9C24 8.45 23.55 8 23 8ZM22 17H18V10H22V17Z" />
  </svg>
)
export const oDevicesOther = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6H21V4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H7V18H3V6ZM13 12H9V13.78C8.39 14.33 8 15.11 8 16C8 16.89 8.39 17.67 9 18.22V20H13V18.22C13.61 17.67 14 16.88 14 16C14 15.12 13.61 14.33 13 13.78V12ZM11 17.5C10.17 17.5 9.5 16.83 9.5 16C9.5 15.17 10.17 14.5 11 14.5C11.83 14.5 12.5 15.17 12.5 16C12.5 16.83 11.83 17.5 11 17.5ZM22 8H16C15.5 8 15 8.5 15 9V19C15 19.5 15.5 20 16 20H22C22.5 20 23 19.5 23 19V9C23 8.5 22.5 8 22 8ZM21 18H17V10H21V18Z" />
  </svg>
)
export const oDialerSip = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3H17V8H16V3ZM15 5H13V4H15V3H12V6H14V7H12V8H15V5ZM18 3V8H19V6H21V3H18ZM20 5H19V4H20V5ZM20 15.5C18.75 15.5 17.55 15.3 16.43 14.93C16.33 14.9 16.22 14.88 16.12 14.88C15.86 14.88 15.61 14.98 15.42 15.17L13.22 17.37C10.39 15.93 8.07 13.62 6.63 10.78L8.83 8.57C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.5C21 15.95 20.55 15.5 20 15.5ZM5.03 5H6.53C6.6 5.88 6.75 6.75 6.99 7.59L5.79 8.8C5.38 7.59 5.12 6.32 5.03 5ZM19 18.97C17.68 18.88 16.41 18.62 15.2 18.22L16.4 17.02C17.25 17.26 18.11 17.41 18.99 17.47V18.97H19Z" />
  </svg>
)
export const oDialpad = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 19C10.9 19 10 19.9 10 21C10 22.1 10.9 23 12 23C13.1 23 14 22.1 14 21C14 19.9 13.1 19 12 19ZM6 1C4.9 1 4 1.9 4 3C4 4.1 4.9 5 6 5C7.1 5 8 4.1 8 3C8 1.9 7.1 1 6 1ZM6 7C4.9 7 4 7.9 4 9C4 10.1 4.9 11 6 11C7.1 11 8 10.1 8 9C8 7.9 7.1 7 6 7ZM6 13C4.9 13 4 13.9 4 15C4 16.1 4.9 17 6 17C7.1 17 8 16.1 8 15C8 13.9 7.1 13 6 13ZM18 5C19.1 5 20 4.1 20 3C20 1.9 19.1 1 18 1C16.9 1 16 1.9 16 3C16 4.1 16.9 5 18 5ZM12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13ZM18 13C16.9 13 16 13.9 16 15C16 16.1 16.9 17 18 17C19.1 17 20 16.1 20 15C20 13.9 19.1 13 18 13ZM18 7C16.9 7 16 7.9 16 9C16 10.1 16.9 11 18 11C19.1 11 20 10.1 20 9C20 7.9 19.1 7 18 7ZM12 7C10.9 7 10 7.9 10 9C10 10.1 10.9 11 12 11C13.1 11 14 10.1 14 9C14 7.9 13.1 7 12 7ZM12 1C10.9 1 10 1.9 10 3C10 4.1 10.9 5 12 5C13.1 5 14 4.1 14 3C14 1.9 13.1 1 12 1Z" />
  </svg>
)
export const oDirections = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22.43 10.5899L13.42 1.57993C12.67 0.829928 11.35 0.819928 10.59 1.57993L1.59 10.5799C0.810005 11.3599 0.810005 12.6199 1.59 13.3999L10.59 22.3999C10.98 22.7899 11.49 22.9799 12 22.9799C12.51 22.9799 13.02 22.7899 13.41 22.3999L22.4 13.4099C23.19 12.6499 23.2 11.3899 22.43 10.5899ZM12.01 20.9899L3.01 11.9899L12.01 2.98993L21.01 11.9899L12.01 20.9899ZM8 10.9999V14.9999H10V11.9999H14V14.4999L17.5 10.9999L14 7.49993V9.99993H9C8.45 9.99993 8 10.4499 8 10.9999Z" />
  </svg>
)
export const oDirectionsBike = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 5.5C16.6 5.5 17.5 4.6 17.5 3.5C17.5 2.4 16.6 1.5 15.5 1.5C14.4 1.5 13.5 2.4 13.5 3.5C13.5 4.6 14.4 5.5 15.5 5.5ZM5 12C2.2 12 0 14.2 0 17C0 19.8 2.2 22 5 22C7.8 22 10 19.8 10 17C10 14.2 7.8 12 5 12ZM5 20.5C3.1 20.5 1.5 18.9 1.5 17C1.5 15.1 3.1 13.5 5 13.5C6.9 13.5 8.5 15.1 8.5 17C8.5 18.9 6.9 20.5 5 20.5ZM10.8 10.5L13.2 8.1L14 8.9C15.3 10.2 17 11 19.1 11V9C17.6 9 16.4 8.4 15.5 7.5L13.6 5.6C13.1 5.2 12.6 5 12 5C11.4 5 10.9 5.2 10.6 5.6L7.8 8.4C7.4 8.8 7.2 9.3 7.2 9.8C7.2 10.4 7.4 10.9 7.8 11.2L11 14V19H13V12.8L10.8 10.5ZM19 12C16.2 12 14 14.2 14 17C14 19.8 16.2 22 19 22C21.8 22 24 19.8 24 17C24 14.2 21.8 12 19 12ZM19 20.5C17.1 20.5 15.5 18.9 15.5 17C15.5 15.1 17.1 13.5 19 13.5C20.9 13.5 22.5 15.1 22.5 17C22.5 18.9 20.9 20.5 19 20.5Z" />
  </svg>
)
export const oDirectionsBoat = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13 3V4H11V3H13ZM12 10.11L17.38 11.88L19.77 12.66L18.65 16.63C18.11 16.33 17.71 15.92 17.51 15.69L16 13.96L14.49 15.68C14.15 16.08 13.21 17 12 17C10.79 17 9.85001 16.08 9.51001 15.68L8.00001 13.96L6.49001 15.68C6.29001 15.91 5.89001 16.31 5.35001 16.61L4.22001 12.65L6.62001 11.86L12 10.11ZM15 1H9.00001V4H6.00001C4.90001 4 4.00001 4.9 4.00001 6V10.62L2.71001 11.04C2.45001 11.12 2.23001 11.3 2.11001 11.54C1.99001 11.78 1.96001 12.06 2.05001 12.32L3.95001 19H4.00001C5.60001 19 7.02001 18.12 8.00001 17C8.98001 18.12 10.4 19 12 19C13.6 19 15.02 18.12 16 17C16.98 18.12 18.4 19 20 19H20.05L21.94 12.32C22.02 12.06 22 11.78 21.88 11.54C21.76 11.3 21.54 11.12 21.28 11.04L20 10.62V6C20 4.9 19.1 4 18 4H15V1ZM6.00001 9.97V6H18V9.97L12 8L6.00001 9.97ZM16 19.68C14.78 20.53 13.39 20.96 12 20.96C10.61 20.96 9.22001 20.53 8.00001 19.68C6.78001 20.53 5.39001 21 4.00001 21H2.00001V23H4.00001C5.38001 23 6.74001 22.65 8.00001 22.01C9.26001 22.65 10.63 22.98 12 22.98C13.37 22.98 14.74 22.66 16 22.01C17.26 22.66 18.62 23 20 23H22V21H20C18.61 21 17.22 20.53 16 19.68Z" />
  </svg>
)
export const oDirectionsBus = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C7.58 2 4 2.5 4 6V16C4 16.88 4.39 17.67 5 18.22V20C5 20.55 5.45 21 6 21H7C7.55 21 8 20.55 8 20V19H16V20C16 20.55 16.45 21 17 21H18C18.55 21 19 20.55 19 20V18.22C19.61 17.67 20 16.88 20 16V6C20 2.5 16.42 2 12 2ZM6.34 4.99C6.89 4.46 8.31 4 12 4C15.69 4 17.11 4.46 17.66 4.99H6.34ZM18 6.99V10H6V6.99H18ZM17.66 16.73L17.37 17H6.63L6.34 16.73C6.21 16.62 6 16.37 6 16V12H18V16C18 16.37 17.79 16.62 17.66 16.73ZM8.5 16C9.32843 16 10 15.3284 10 14.5C10 13.6716 9.32843 13 8.5 13C7.67157 13 7 13.6716 7 14.5C7 15.3284 7.67157 16 8.5 16ZM17 14.5C17 15.3284 16.3284 16 15.5 16C14.6716 16 14 15.3284 14 14.5C14 13.6716 14.6716 13 15.5 13C16.3284 13 17 13.6716 17 14.5Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oDirectionsCar = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.29 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.85 7H17.14L18.22 10.11H5.77L6.85 7ZM19 17H5V12H19V17ZM7.5 16C8.32843 16 9 15.3284 9 14.5C9 13.6716 8.32843 13 7.5 13C6.67157 13 6 13.6716 6 14.5C6 15.3284 6.67157 16 7.5 16ZM18 14.5C18 15.3284 17.3284 16 16.5 16C15.6716 16 15 15.3284 15 14.5C15 13.6716 15.6716 13 16.5 13C17.3284 13 18 13.6716 18 14.5Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oDirectionsRailway = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1C7.58 1 4 1.5 4 5V15.5C4 17.43 5.57 19 7.5 19L6 20.5V21H18V20.5L16.5 19C18.43 19 20 17.43 20 15.5V5C20 1.5 16.42 1 12 1ZM12 3C18 3 18 4.2 18 5H6C6 4.2 6 3 12 3ZM18 7V10H6V7H18ZM16.5 17H7.5C6.67 17 6 16.33 6 15.5V12H18V15.5C18 16.33 17.33 17 16.5 17ZM12 12.5C10.9 12.5 10 13.4 10 14.5C10 15.6 10.9 16.5 12 16.5C13.1 16.5 14 15.6 14 14.5C14 13.4 13.1 12.5 12 12.5Z" />
  </svg>
)
export const oDirectionsRun = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13.49 5.47998C14.59 5.47998 15.49 4.57998 15.49 3.47998C15.49 2.37998 14.59 1.47998 13.49 1.47998C12.39 1.47998 11.49 2.37998 11.49 3.47998C11.49 4.57998 12.39 5.47998 13.49 5.47998ZM9.89001 19.38L10.89 14.98L12.99 16.98V22.98H14.99V15.48L12.89 13.48L13.49 10.48C14.79 11.98 16.79 12.98 18.99 12.98V10.98C17.09 10.98 15.49 9.97998 14.69 8.57998L13.69 6.97998C13.29 6.37998 12.69 5.97998 11.99 5.97998C11.69 5.97998 11.49 6.07998 11.19 6.07998L5.99001 8.27998V12.98H7.99001V9.57998L9.79001 8.87998L8.19001 16.98L3.29001 15.98L2.89001 17.98L9.89001 19.38Z" />
  </svg>
)
export const oDirectionsSubway = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C8 2 4 2.5 4 6V15.5C4 17.43 5.57 19 7.5 19L6 20.5V21H18V20.5L16.5 19C18.43 19 20 17.43 20 15.5V6C20 2.5 16.42 2 12 2ZM17.66 5H6.43C7.04 4.48 8.49 4 12 4C15.71 4 17.12 4.46 17.66 5ZM11 7V10H6V7H11ZM13 7H18V10H13V7ZM7.5 17C6.67 17 6 16.33 6 15.5V12H18V15.5C18 16.33 17.33 17 16.5 17H7.5ZM8.5 16C9.32843 16 10 15.3284 10 14.5C10 13.6716 9.32843 13 8.5 13C7.67157 13 7 13.6716 7 14.5C7 15.3284 7.67157 16 8.5 16ZM17 14.5C17 15.3284 16.3284 16 15.5 16C14.6716 16 14 15.3284 14 14.5C14 13.6716 14.6716 13 15.5 13C16.3284 13 17 13.6716 17 14.5Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oDirectionsTransit = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C8 2 4 2.5 4 6V15.5C4 17.43 5.57 19 7.5 19L6 20.5V21H18V20.5L16.5 19C18.43 19 20 17.43 20 15.5V6C20 2.5 16.42 2 12 2ZM17.66 5H6.43C7.04 4.48 8.49 4 12 4C15.71 4 17.12 4.46 17.66 5ZM11 7V10H6V7H11ZM13 7H18V10H13V7ZM7.5 17C6.67 17 6 16.33 6 15.5V12H18V15.5C18 16.33 17.33 17 16.5 17H7.5ZM8.5 16C9.32843 16 10 15.3284 10 14.5C10 13.6716 9.32843 13 8.5 13C7.67157 13 7 13.6716 7 14.5C7 15.3284 7.67157 16 8.5 16ZM17 14.5C17 15.3284 16.3284 16 15.5 16C14.6716 16 14 15.3284 14 14.5C14 13.6716 14.6716 13 15.5 13C16.3284 13 17 13.6716 17 14.5Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oDirectionsWalk = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 5.5C14.6 5.5 15.5 4.6 15.5 3.5C15.5 2.4 14.6 1.5 13.5 1.5C12.4 1.5 11.5 2.4 11.5 3.5C11.5 4.6 12.4 5.5 13.5 5.5ZM9.8 8.9L7 23H9.1L10.9 15L13 17V23H15V15.5L12.9 13.5L13.5 10.5C14.8 12 16.8 13 19 13V11C17.1 11 15.5 10 14.7 8.6L13.7 7C13.14 6.11 12.02 5.75 11.05 6.16L6 8.3V13H8V9.6L9.8 8.9Z" />
  </svg>
)
export const oDiscFull = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 7H22V12H20V7ZM10 4C5.58 4 2 7.58 2 12C2 16.42 5.58 20 10 20C14.42 20 18 16.42 18 12C18 7.58 14.42 4 10 4ZM10 18C6.69 18 4 15.31 4 12C4 8.69 6.69 6 10 6C13.31 6 16 8.69 16 12C16 15.31 13.31 18 10 18ZM20 14H22V16H20V14ZM10 10C8.9 10 8 10.9 8 12C8 13.1 8.9 14 10 14C11.1 14 12 13.1 12 12C12 10.9 11.1 10 10 10Z" />
  </svg>
)
export const oDns = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 15V19H5V15H19ZM20 13H4C3.45 13 3 13.45 3 14V20C3 20.55 3.45 21 4 21H20C20.55 21 21 20.55 21 20V14C21 13.45 20.55 13 20 13ZM7 18.5C6.18 18.5 5.5 17.83 5.5 17C5.5 16.17 6.18 15.5 7 15.5C7.82 15.5 8.5 16.17 8.5 17C8.5 17.83 7.83 18.5 7 18.5ZM19 5V9H5V5H19ZM20 3H4C3.45 3 3 3.45 3 4V10C3 10.55 3.45 11 4 11H20C20.55 11 21 10.55 21 10V4C21 3.45 20.55 3 20 3ZM7 8.5C6.18 8.5 5.5 7.83 5.5 7C5.5 6.17 6.18 5.5 7 5.5C7.82 5.5 8.5 6.18 8.5 7C8.5 7.82 7.83 8.5 7 8.5Z" />
  </svg>
)
export const oDock = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M8 23H16V21H8V23ZM16 1.01L8 1C6.9 1 6 1.9 6 3V17C6 18.1 6.9 19 8 19H16C17.1 19 18 18.1 18 17V3C18 1.9 17.1 1.01 16 1.01ZM16 15H8V5H16V15Z" />
  </svg>
)
export const oDomain = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 7V3H2V21H22V7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19ZM18 11H16V13H18V11ZM18 15H16V17H18V15Z" />
  </svg>
)
export const oDomainDisabled = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M1.41 1.68994L0 3.09994L2 5.09994V20.9999H17.9L20.9 23.9999L22.31 22.5899L1.41 1.68994ZM6 18.9999H4V16.9999H6V18.9999ZM6 14.9999H4V12.9999H6V14.9999ZM4 10.9999V8.99994H6V10.9999H4ZM10 18.9999H8V16.9999H10V18.9999ZM8 14.9999V12.9999H10V14.9999H8ZM12 18.9999V16.9999H13.9L15.9 18.9999H12ZM8 4.99994H10V6.99994H9.55L12 9.44994V8.99994H20V17.4499L22 19.4499V6.99994H12V2.99994H5.55L8 5.44994V4.99994ZM16 10.9999H18V12.9999H16V10.9999Z" />
  </svg>
)
export const oDone = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9.00002 16.2L4.80002 12L3.40002 13.4L9.00002 19L21 6.99998L19.6 5.59998L9.00002 16.2Z" />
  </svg>
)
export const oDoneAll = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 7.00009L16.59 5.59009L10.25 11.9301L11.66 13.3401L18 7.00009ZM22.24 5.59009L11.66 16.1701L7.48003 12.0001L6.07003 13.4101L11.66 19.0001L23.66 7.00009L22.24 5.59009ZM0.410034 13.4101L6.00003 19.0001L7.41003 17.5901L1.83003 12.0001L0.410034 13.4101Z" />
  </svg>
)
export const oDoneOutline = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.77 4.92998L21.17 6.32998L8.43 19.07L2.83 13.47L4.23 12.07L8.43 16.27L19.77 4.92998ZM19.77 2.09998L8.43 13.44L4.23 9.23998L0 13.47L8.43 21.9L24 6.32998L19.77 2.09998Z" />
  </svg>
)
export const oDonutLarge = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13 5.08005C16.06 5.52005 18.48 7.94005 18.92 11H21.95C21.48 6.28005 17.72 2.52005 13 2.05005V5.08005ZM18.92 13C18.48 16.06 16.06 18.48 13 18.92V21.9501C17.72 21.4801 21.48 17.72 21.95 13H18.92ZM11 18.92C7.61 18.43 5 15.52 5 12C5 8.48005 7.61 5.57005 11 5.08005V2.05005C5.95 2.55005 2 6.81005 2 12C2 17.19 5.95 21.4501 11 21.9501V18.92Z" />
  </svg>
)
export const oDonutSmall = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14.82 11H21.95C21.48 6.28005 17.72 2.52005 13 2.05005V9.18005C13.85 9.49005 14.51 10.15 14.82 11ZM15 4.58005C17 5.40005 18.6 7.00005 19.42 9.00005H15.99C15.71 8.63005 15.37 8.29005 15 8.01005V4.58005ZM2 12C2 17.19 5.95 21.4501 11 21.9501V14.82C9.84 14.4 9 13.3 9 12C9 10.7 9.84 9.60005 11 9.18005V2.05005C5.95 2.55005 2 6.81005 2 12ZM9 4.58005V8.02005C7.77 8.94005 7 10.41 7 12C7 13.59 7.77 15.06 9 15.99V19.43C6.04 18.24 4 15.35 4 12C4 8.65005 6.04 5.76005 9 4.58005ZM13 14.82V21.9501C17.72 21.4801 21.48 17.72 21.95 13H14.82C14.51 13.85 13.85 14.51 13 14.82ZM15 15.99C15.37 15.71 15.71 15.38 15.99 15H19.42C18.6 17 17 18.6 15 19.42V15.99Z" />
  </svg>
)
export const oDrafts = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21.99 8C21.99 7.28 21.62 6.65 21.05 6.3L12 1L2.95 6.3C2.38 6.65 2 7.28 2 8V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18L21.99 8ZM19.99 8V8.01L12 13L4 8L12 3.32L19.99 8ZM4 18V10.34L12 15.36L19.99 10.37L20 18H4Z" />
  </svg>
)
export const oDragHandle = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 9H4V11H20V9ZM4 15H20V13H4V15Z" />
  </svg>
)
export const oDragIndicator = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 18C11 19.1 10.1 20 9 20C7.9 20 7 19.1 7 18C7 16.9 7.9 16 9 16C10.1 16 11 16.9 11 18ZM9 10C7.9 10 7 10.9 7 12C7 13.1 7.9 14 9 14C10.1 14 11 13.1 11 12C11 10.9 10.1 10 9 10ZM9 4C7.9 4 7 4.9 7 6C7 7.1 7.9 8 9 8C10.1 8 11 7.1 11 6C11 4.9 10.1 4 9 4ZM15 8C16.1 8 17 7.1 17 6C17 4.9 16.1 4 15 4C13.9 4 13 4.9 13 6C13 7.1 13.9 8 15 8ZM15 10C13.9 10 13 10.9 13 12C13 13.1 13.9 14 15 14C16.1 14 17 13.1 17 12C17 10.9 16.1 10 15 10ZM15 16C13.9 16 13 16.9 13 18C13 19.1 13.9 20 15 20C16.1 20 17 19.1 17 18C17 16.9 16.1 16 15 16Z" />
  </svg>
)
export const oDriveEta = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4H6.5C5.84 4 5.29 4.42 5.08 5.01L3 11V19C3 19.55 3.45 20 4 20H5C5.55 20 6 19.55 6 19V18H18V19C18 19.55 18.45 20 19 20H20C20.55 20 21 19.55 21 19V11L18.92 5.01ZM6.85 6H17.14L18.18 9H5.81L6.85 6ZM19 16H5V11.34L5.12 11H18.89L19 11.34V16ZM7.5 15C8.32843 15 9 14.3284 9 13.5C9 12.6716 8.32843 12 7.5 12C6.67157 12 6 12.6716 6 13.5C6 14.3284 6.67157 15 7.5 15ZM18 13.5C18 14.3284 17.3284 15 16.5 15C15.6716 15 15 14.3284 15 13.5C15 12.6716 15.6716 12 16.5 12C17.3284 12 18 12.6716 18 13.5Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oDuo = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H12C6.38 2 2 6.66 2 12.28C2 17.5 6.49 22 11.72 22C17.39 22 22 17.62 22 12V4C22 2.9 21.1 2 20 2ZM17 15L14 13V15H7V9H14V11L17 9V15Z" />
  </svg>
)
export const oDvr = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3H3C1.9 3 1 3.9 1 5V17C1 18.1 1.9 19 3 19H8V21H16V19H21C22.1 19 23 18.1 23 17V5C23 3.9 22.1 3 21 3ZM21 17H3V5H21V17ZM19 8H8V10H19V8ZM19 12H8V14H19V12ZM7 8H5V10H7V8ZM7 12H5V14H7V12Z" />
  </svg>
)
export const oEdit = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14.06 9.02L14.98 9.94L5.92 19H5V18.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.17 3.09 17.92 3 17.66 3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19Z" />
  </svg>
)
export const oEditAttributes = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.63 7H6.37C3.96 7 2 9.24 2 12C2 14.76 3.96 17 6.37 17H17.63C20.04 17 22 14.76 22 12C22 9.24 20.04 7 17.63 7ZM17.63 15H6.37C5.09 15 4 13.63 4 12C4 10.37 5.09 9 6.37 9H17.63C18.91 9 20 10.37 20 12C20 13.63 18.91 15 17.63 15ZM7.24 13.06L5.37 11.19L4.67 11.89L7.24 14.46L11.46 10.24L10.76 9.54L7.24 13.06Z" />
  </svg>
)
export const oEditLocation = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1C7.59 1 4 4.59 4 9C4 14.57 10.96 22.34 11.26 22.67L12 23.49L12.74 22.67C13.04 22.34 20 14.57 20 9C20 4.59 16.41 1 12 1ZM12 20.47C9.82 17.86 6 12.54 6 9C6 5.69 8.69 3 12 3C15.31 3 18 5.69 18 9C18 12.83 13.75 18.36 12 20.47ZM8.51 11.05V12.49H9.95L13.87 8.56L12.44 7.13L8.51 11.05ZM14.39 5.71C14.24 5.56 14 5.56 13.85 5.71L13.15 6.41L14.59 7.85L15.29 7.15C15.44 7 15.44 6.76 15.29 6.61L14.39 5.71Z" />
  </svg>
)
export const oEject = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5 17H19V19H5V17ZM12 5L5.33 15H18.67L12 5ZM12 8.6L14.93 13H9.07L12 8.6Z" />
  </svg>
)
export const oEmail = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" />
  </svg>
)
export const oEnhancedEncryption = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM8.9 6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8H8.9V6ZM18 20H6V10H18V20ZM13 11H11V14H8V16H11V19H13V16H16V14H13V11Z" />
  </svg>
)
export const oEqualizer = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20H14V4H10V20ZM4 20H8V12H4V20ZM16 9V20H20V9H16Z" />
  </svg>
)
export const oError = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
  </svg>
)
export const oErrorOutline = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 15H13V17H11V15ZM11 7H13V13H11V7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" />
  </svg>
)
export const oEuroSymbol = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18.5C12.49 18.5 10.32 17.08 9.24 15H15V13H8.58C8.53 12.67 8.5 12.34 8.5 12C8.5 11.66 8.53 11.33 8.58 11H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5C16.61 5.5 18.09 6.09 19.23 7.07L21 5.3C19.41 3.87 17.3 3 15 3C11.08 3 7.76 5.51 6.52 9H3V11H6.06C6.02 11.33 6 11.66 6 12C6 12.34 6.02 12.67 6.06 13H3V15H6.52C7.76 18.49 11.08 21 15 21C17.31 21 19.41 20.13 21 18.7L19.22 16.93C18.09 17.91 16.62 18.5 15 18.5Z" />
  </svg>
)
export const oEvStation = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.77 7.23L19.78 7.22L16.06 3.5L15 4.56L17.11 6.67C16.17 7.03 15.5 7.93 15.5 9C15.5 10.38 16.62 11.5 18 11.5C18.36 11.5 18.69 11.42 19 11.29V18.5C19 19.05 18.55 19.5 18 19.5C17.45 19.5 17 19.05 17 18.5V14C17 12.9 16.1 12 15 12H14V5C14 3.9 13.1 3 12 3H6C4.9 3 4 3.9 4 5V21H14V13.5H15.5V18.5C15.5 19.88 16.62 21 18 21C19.38 21 20.5 19.88 20.5 18.5V9C20.5 8.31 20.22 7.68 19.77 7.23ZM12 11V19H6V5H12V11ZM18 10C17.45 10 17 9.55 17 9C17 8.45 17.45 8 18 8C18.55 8 19 8.45 19 9C19 9.55 18.55 10 18 10ZM10 6L6 13.5H8V18L12 11H10V6Z" />
  </svg>
)
export const oEvent = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8ZM12 13H17V18H12V13Z" />
  </svg>
)
export const oEventAvailable = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V9H19V19ZM5 7V5H19V7H5ZM10.56 17.46L16.49 11.53L15.43 10.47L10.56 15.34L8.45 13.23L7.39 14.29L10.56 17.46Z" />
  </svg>
)
export const oEventBusy = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V9H19V19ZM5 7V5H19V7H5ZM8.23 16.41L9.29 17.47L11.73 15.03L14.17 17.47L15.23 16.41L12.79 13.97L15.23 11.53L14.17 10.47L11.73 12.91L9.29 10.47L8.23 11.53L10.67 13.97L8.23 16.41Z" />
  </svg>
)
export const oEventNote = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V9H19V19ZM5 7V5H19V7H5ZM7 11H17V13H7V11ZM7 15H14V17H7V15Z" />
  </svg>
)
export const oEventSeat = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 5V12H9V5H15ZM15 3H9C7.9 3 7 3.9 7 5V14H17V5C17 3.9 16.1 3 15 3ZM22 10H19V13H22V10ZM5 10H2V13H5V10ZM20 15H4V21H6V17H18V21H20V15Z" />
  </svg>
)
export const oExitToApp = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10.09 15.59L11.5 17L16.5 12L11.5 7L10.09 8.41L12.67 11H3V13H12.67L10.09 15.59ZM19 3H5C3.89 3 3 3.9 3 5V9H5V5H19V19H5V15H3V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" />
  </svg>
)
export const oExpandLess = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z" />
  </svg>
)
export const oExpandMore = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16.59 8.59009L12 13.1701L7.41 8.59009L6 10.0001L12 16.0001L18 10.0001L16.59 8.59009Z" />
  </svg>
)
export const oExplicit = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM15 15H11V13H15V11H11V9H15V7H9V17H15V15Z" />
  </svg>
)
export const oExplore = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM6.5 17.5L14.01 14.01L17.5 6.5L9.99 9.99L6.5 17.5ZM12 10.9C12.61 10.9 13.1 11.39 13.1 12C13.1 12.61 12.61 13.1 12 13.1C11.39 13.1 10.9 12.61 10.9 12C10.9 11.39 11.39 10.9 12 10.9Z" />
  </svg>
)
export const oExploreOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4C16.41 4 20 7.59 20 12C20 13.48 19.59 14.86 18.88 16.06L20.34 17.52C21.39 15.93 22 14.04 22 12C22 6.48 17.52 2 12 2C9.96 2 8.07 2.61 6.49 3.66L7.95 5.12C9.14 4.41 10.52 4 12 4ZM14.91 12.08L17.5 6.5L11.92 9.09L14.91 12.08ZM2.1 4.93L3.66 6.49C2.61 8.07 2 9.96 2 12C2 17.52 6.48 22 12 22C14.04 22 15.93 21.39 17.51 20.34L19.07 21.9L20.48 20.49L3.51 3.51L2.1 4.93ZM5.12 7.94L9.1 11.92L6.5 17.5L12.08 14.91L16.06 18.89C14.86 19.59 13.48 20 12 20C7.59 20 4 16.41 4 12C4 10.52 4.41 9.14 5.12 7.94Z" />
  </svg>
)
export const oExposure = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17.59 5L5 17.59V5H17.59ZM6.41 19L19 6.41V19H6.41ZM6 7H11V8.5H6V7ZM16 12.5H14.5V14.5H12.5V16H14.5V18H16V16H18V14.5H16V12.5Z" />
  </svg>
)
export const oExposureNeg1 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 11V13H12V11H4ZM19 18H17V7.38L14 8.4V6.7L18.7 5H19V18Z" />
  </svg>
)
export const oExposureNeg2 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.05 16.29L17.91 13.22C18.29 12.83 18.63 12.43 18.95 12.04C19.27 11.65 19.54 11.26 19.77 10.87C20 10.48 20.18 10.09 20.31 9.7C20.44 9.31 20.5 8.91 20.5 8.52C20.5 7.99 20.41 7.5 20.23 7.06C20.05 6.62 19.79 6.25 19.45 5.95C19.11 5.64 18.68 5.41 18.19 5.24C17.68 5.08 17.11 5 16.47 5C15.78 5 15.16 5.11 14.62 5.32C14.08 5.53 13.62 5.83 13.26 6.2C12.89 6.57 12.61 7 12.42 7.5C12.24 7.97 12.15 8.47 12.14 9H14.28C14.29 8.69 14.33 8.4 14.41 8.13C14.5 7.84 14.64 7.59 14.81 7.38C14.99 7.17 15.22 7.01 15.49 6.89C15.76 6.77 16.09 6.71 16.45 6.71C16.76 6.71 17.03 6.76 17.26 6.86C17.49 6.96 17.69 7.11 17.85 7.29C18.01 7.47 18.13 7.69 18.22 7.94C18.3 8.19 18.35 8.46 18.35 8.75C18.35 8.97 18.32 9.18 18.27 9.4C18.21 9.62 18.12 9.85 17.98 10.1C17.84 10.35 17.66 10.63 17.42 10.93C17.19 11.23 16.9 11.58 16.54 11.96L12.37 16.51V18H21V16.29H15.05ZM2 11V13H10V11H2Z" />
  </svg>
)
export const oExposurePlus1 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10 7H8V11H4V13H8V17H10V13H14V11H10V7ZM20 18H18V7.38L15 8.4V6.7L19.7 5H20V18Z" />
  </svg>
)
export const oExposurePlus2 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16.05 16.29L18.91 13.22C19.29 12.83 19.63 12.43 19.95 12.04C20.27 11.65 20.54 11.26 20.77 10.87C21 10.48 21.18 10.09 21.31 9.7C21.44 9.31 21.5 8.91 21.5 8.52C21.5 7.99 21.41 7.5 21.23 7.06C21.05 6.62 20.79 6.25 20.45 5.95C20.11 5.64 19.68 5.41 19.19 5.24C18.68 5.08 18.11 5 17.47 5C16.78 5 16.16 5.11 15.62 5.32C15.08 5.53 14.62 5.83 14.26 6.2C13.89 6.57 13.61 7 13.42 7.5C13.24 7.97 13.15 8.47 13.14 9H15.28C15.29 8.69 15.33 8.4 15.41 8.13C15.5 7.84 15.64 7.59 15.81 7.38C15.99 7.17 16.22 7.01 16.49 6.89C16.76 6.77 17.09 6.71 17.45 6.71C17.76 6.71 18.03 6.76 18.26 6.86C18.49 6.96 18.69 7.11 18.85 7.29C19.01 7.47 19.13 7.69 19.22 7.94C19.3 8.19 19.35 8.46 19.35 8.75C19.35 8.97 19.32 9.18 19.27 9.4C19.21 9.62 19.12 9.85 18.98 10.1C18.84 10.35 18.66 10.63 18.42 10.93C18.19 11.23 17.9 11.58 17.54 11.96L13.37 16.51V18H22V16.29H16.05ZM8 7H6V11H2V13H6V17H8V13H12V11H8V7Z" />
  </svg>
)
export const oExposureZero = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16.14 12.5C16.14 13.5 16.04 14.35 15.84 15.05C15.64 15.75 15.36 16.32 15.01 16.75C14.65 17.19 14.22 17.5 13.71 17.7C13.2 17.9 12.64 18 12.01 18C11.39 18 10.83 17.9 10.32 17.7C9.80998 17.5 9.36999 17.19 9.00999 16.75C8.64999 16.31 8.35999 15.74 8.15999 15.05C7.95999 14.35 7.85999 13.5 7.85999 12.5V10.46C7.85999 9.46 7.95999 8.61 8.15999 7.91C8.35999 7.21 8.63999 6.65 8.99999 6.22C9.35999 5.79 9.79999 5.48 10.31 5.29C10.81 5.1 11.38 5 12 5C12.63 5 13.19 5.1 13.7 5.29C14.21 5.48 14.65 5.79 15.01 6.22C15.37 6.65 15.65 7.21 15.85 7.91C16.05 8.61 16.15 9.45 16.15 10.46V12.5H16.14ZM14.03 10.14C14.03 9.5 13.98 8.96 13.9 8.52C13.81 8.08 13.68 7.73 13.5 7.46C13.33 7.19 13.11 7 12.86 6.88C12.61 6.75 12.32 6.69 12 6.69C11.68 6.69 11.39 6.75 11.14 6.87C10.89 6.99 10.67 7.18 10.5 7.45C10.33 7.72 10.19 8.07 10.1 8.51C10.01 8.95 9.96999 9.49 9.96999 10.13V12.8C9.96999 13.44 10.02 13.98 10.11 14.42C10.2 14.87 10.34 15.23 10.51 15.51C10.68 15.79 10.9 15.99 11.15 16.12C11.4 16.25 11.69 16.31 12.02 16.31C12.35 16.31 12.64 16.25 12.89 16.12C13.14 15.99 13.35 15.79 13.52 15.51C13.69 15.23 13.82 14.87 13.91 14.42C14 13.97 14.04 13.43 14.04 12.8V10.14H14.03Z" />
  </svg>
)
export const oExtension = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 4.5C10.78 4.5 11 4.72 11 5V7H17V13H19C19.28 13 19.5 13.22 19.5 13.5C19.5 13.78 19.28 14 19 14H17V20H14.88C14.2 18.25 12.49 17 10.5 17C8.51 17 6.8 18.25 6.12 20H4V17.88C5.75 17.2 7 15.49 7 13.5C7 11.51 5.76 9.8 4.01 9.12L4 7H10V5C10 4.72 10.22 4.5 10.5 4.5ZM10.5 2.5C9.12 2.5 8 3.62 8 5H4C2.9 5 2.01 5.9 2.01 7V10.8H2.3C3.79 10.8 5 12.01 5 13.5C5 14.99 3.79 16.2 2.3 16.2H2V20C2 21.1 2.9 22 4 22H7.8V21.7C7.8 20.21 9.01 19 10.5 19C11.99 19 13.2 20.21 13.2 21.7V22H17C18.1 22 19 21.1 19 20V16C20.38 16 21.5 14.88 21.5 13.5C21.5 12.12 20.38 11 19 11V7C19 5.9 18.1 5 17 5H13C13 3.62 11.88 2.5 10.5 2.5Z" />
  </svg>
)
export const oFace = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10.25 13C10.25 13.69 9.69 14.25 9 14.25C8.31 14.25 7.75 13.69 7.75 13C7.75 12.31 8.31 11.75 9 11.75C9.69 11.75 10.25 12.31 10.25 13ZM15 11.75C14.31 11.75 13.75 12.31 13.75 13C13.75 13.69 14.31 14.25 15 14.25C15.69 14.25 16.25 13.69 16.25 13C16.25 12.31 15.69 11.75 15 11.75ZM22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12ZM10.66 4.12C12.06 6.44 14.6 8 17.5 8C17.96 8 18.41 7.95 18.84 7.88C17.44 5.56 14.9 4 12 4C11.54 4 11.09 4.05 10.66 4.12ZM4.42 9.47C6.13 8.5 7.45 6.92 8.08 5.03C6.37 6 5.05 7.58 4.42 9.47ZM20 12C20 11.22 19.88 10.47 19.67 9.76C18.97 9.91 18.25 10 17.5 10C14.37 10 11.58 8.56 9.74 6.31C8.69 8.87 6.6 10.88 4 11.86C4.01 11.9 4 11.95 4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12Z" />
  </svg>
)
export const oFastForward = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 9.86L18.03 12L15 14.14V9.86ZM6 9.86L9.03 12L6 14.14V9.86ZM13 6V18L21.5 12L13 6ZM4 6V18L12.5 12L4 6Z" />
  </svg>
)
export const oFastRewind = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 9.86V14.14L14.97 12L18 9.86ZM9 9.86V14.14L5.97 12L9 9.86ZM20 6L11.5 12L20 18V6ZM11 6L2.5 12L11 18V6Z" />
  </svg>
)
export const oFastfood = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M1 21.98C1 22.54 1.45 22.99 2.01 22.99H15C15.56 22.99 16.01 22.54 16.01 21.98V21H1V21.98ZM8.5 8.99C4.75 8.99 1 11 1 15H16C16 11 12.25 8.99 8.5 8.99ZM3.62 13C4.73 11.45 7.09 10.99 8.5 10.99C9.91 10.99 12.27 11.45 13.38 13H3.62ZM1 17H16V19H1V17ZM18 5V1H16V5H11L11.23 7H20.79L19.39 21H18V23H19.72C20.56 23 21.25 22.35 21.35 21.53L23 5H18Z" />
  </svg>
)
export const oFavorite = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" />
  </svg>
)
export const oFavoriteBorder = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" />
  </svg>
)
export const oFeaturedPlayList = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19H3V5H21V19ZM5 10H14V12H5V10ZM5 7H14V9H5V7Z" />
  </svg>
)
export const oFeaturedVideo = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19H3V5H21V19ZM4 6H13V13H4V6Z" />
  </svg>
)
export const oFeedback = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4.58 16.59L4 17.17V4H20V16ZM11 12H13V14H11V12ZM11 6H13V10H11V6Z" />
  </svg>
)
export const oFiberDvr = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.87 12.43L10.87 9H9.37L11.12 15H12.62L14.37 9H12.87L11.87 12.43ZM21 11.5V10.5C21 9.65 20.35 9 19.5 9H16V15H17.5V13H18.65L19.5 15H21L20.1 12.9C20.6 12.65 21 12.1 21 11.5ZM19.5 11.5H17.5V10.5H19.5V11.5ZM6.5 9H3V15H6.5C7.35 15 8 14.35 8 13.5V10.5C8 9.65 7.35 9 6.5 9ZM6.5 13.5H4.5V10.5H6.5V13.5Z" />
  </svg>
)
export const oFiberManualRecord = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6ZM12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z" />
  </svg>
)
export const oFiberNew = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7.25 12.5L4.75 9H3.5V15H4.75V11.5L7.3 15H8.5V9H7.25V12.5ZM9.5 15H13.5V13.75H11V12.64H13.5V11.38H11V10.26H13.5V9H9.5V15ZM19.25 9V13.5H18.13V9.99H16.88V13.51H15.75V9H14.5V14C14.5 14.55 14.95 15 15.5 15H19.5C20.05 15 20.5 14.55 20.5 14V9H19.25Z" />
  </svg>
)
export const oFiberPin = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 15H12.5V9H11V15ZM18.75 9V12.5L16.25 9H15V15H16.25V11.5L18.8 15H20V9H18.75ZM7.5 9H4V15H5.5V13H7.5C8.35 13 9 12.35 9 11.5V10.5C9 9.65 8.35 9 7.5 9ZM7.5 11.5H5.5V10.5H7.5V11.5Z" />
  </svg>
)
export const oFiberSmartRecord = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9 4C4.58 4 1 7.58 1 12C1 16.42 4.58 20 9 20C13.42 20 17 16.42 17 12C17 7.58 13.42 4 9 4ZM9 18C5.69 18 3 15.31 3 12C3 8.69 5.69 6 9 6C12.31 6 15 8.69 15 12C15 15.31 12.31 18 9 18ZM17 4.26V6.35C19.33 7.17 21 9.39 21 12C21 14.61 19.33 16.83 17 17.65V19.74C20.45 18.85 23 15.73 23 12C23 8.27 20.45 5.15 17 4.26Z" />
  </svg>
)
export const oFileCopy = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM15 5H8C6.9 5 6.01 5.9 6.01 7L6 21C6 22.1 6.89 23 7.99 23H19C20.1 23 21 22.1 21 21V11L15 5ZM8 21V7H14V12H19V21H8Z" />
  </svg>
)
export const oFilter = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.96 10.29L13.21 13.83L11.25 11.47L8.5 15H19.5L15.96 10.29ZM3 5H1V21C1 22.1 1.9 23 3 23H19V21H3V5ZM21 1H7C5.9 1 5 1.9 5 3V17C5 18.1 5.9 19 7 19H21C22.1 19 23 18.1 23 17V3C23 1.9 22.1 1 21 1ZM21 17H7V3H21V17Z" />
  </svg>
)
export const oFilter1 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5H1V21C1 22.1 1.9 23 3 23H19V21H3V5ZM14 15H16V5H12V7H14V15ZM21 1H7C5.9 1 5 1.9 5 3V17C5 18.1 5.9 19 7 19H21C22.1 19 23 18.1 23 17V3C23 1.9 22.1 1 21 1ZM21 17H7V3H21V17Z" />
  </svg>
)
export const oFilter2 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5H1V21C1 22.1 1.9 23 3 23H19V21H3V5ZM21 1H7C5.9 1 5 1.9 5 3V17C5 18.1 5.9 19 7 19H21C22.1 19 23 18.1 23 17V3C23 1.9 22.1 1 21 1ZM21 17H7V3H21V17ZM17 13H13V11H15C16.1 11 17 10.11 17 9V7C17 5.89 16.1 5 15 5H11V7H15V9H13C11.9 9 11 9.89 11 11V15H17V13Z" />
  </svg>
)
export const oFilter3 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 1H7C5.9 1 5 1.9 5 3V17C5 18.1 5.9 19 7 19H21C22.1 19 23 18.1 23 17V3C23 1.9 22.1 1 21 1ZM21 17H7V3H21V17ZM3 5H1V21C1 22.1 1.9 23 3 23H19V21H3V5ZM17 13V11.5C17 10.67 16.33 10 15.5 10C16.33 10 17 9.33 17 8.5V7C17 5.89 16.1 5 15 5H11V7H15V9H13V11H15V13H11V15H15C16.1 15 17 14.11 17 13Z" />
  </svg>
)
export const oFilter4 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5H1V21C1 22.1 1.9 23 3 23H19V21H3V5ZM15 15H17V5H15V9H13V5H11V11H15V15ZM21 1H7C5.9 1 5 1.9 5 3V17C5 18.1 5.9 19 7 19H21C22.1 19 23 18.1 23 17V3C23 1.9 22.1 1 21 1ZM21 17H7V3H21V17Z" />
  </svg>
)
export const oFilter5 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 1H7C5.9 1 5 1.9 5 3V17C5 18.1 5.9 19 7 19H21C22.1 19 23 18.1 23 17V3C23 1.9 22.1 1 21 1ZM21 17H7V3H21V17ZM3 5H1V21C1 22.1 1.9 23 3 23H19V21H3V5ZM17 13V11C17 9.89 16.1 9 15 9H13V7H17V5H11V11H15V13H11V15H15C16.1 15 17 14.11 17 13Z" />
  </svg>
)
export const oFilter6 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5H1V21C1 22.1 1.9 23 3 23H19V21H3V5ZM21 1H7C5.9 1 5 1.9 5 3V17C5 18.1 5.9 19 7 19H21C22.1 19 23 18.1 23 17V3C23 1.9 22.1 1 21 1ZM21 17H7V3H21V17ZM13 15H15C16.1 15 17 14.11 17 13V11C17 9.89 16.1 9 15 9H13V7H17V5H13C11.9 5 11 5.89 11 7V13C11 14.11 11.9 15 13 15ZM13 11H15V13H13V11Z" />
  </svg>
)
export const oFilter7 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5H1V21C1 22.1 1.9 23 3 23H19V21H3V5ZM21 1H7C5.9 1 5 1.9 5 3V17C5 18.1 5.9 19 7 19H21C22.1 19 23 18.1 23 17V3C23 1.9 22.1 1 21 1ZM21 17H7V3H21V17ZM13 15L17 7V5H11V7H15L11 15H13Z" />
  </svg>
)
export const oFilter8 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5H1V21C1 22.1 1.9 23 3 23H19V21H3V5ZM21 1H7C5.9 1 5 1.9 5 3V17C5 18.1 5.9 19 7 19H21C22.1 19 23 18.1 23 17V3C23 1.9 22.1 1 21 1ZM21 17H7V3H21V17ZM13 15H15C16.1 15 17 14.11 17 13V11.5C17 10.67 16.33 10 15.5 10C16.33 10 17 9.33 17 8.5V7C17 5.89 16.1 5 15 5H13C11.9 5 11 5.89 11 7V8.5C11 9.33 11.67 10 12.5 10C11.67 10 11 10.67 11 11.5V13C11 14.11 11.9 15 13 15ZM13 7H15V9H13V7ZM13 11H15V13H13V11Z" />
  </svg>
)
export const oFilter9 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5H1V21C1 22.1 1.9 23 3 23H19V21H3V5ZM21 1H7C5.9 1 5 1.9 5 3V17C5 18.1 5.9 19 7 19H21C22.1 19 23 18.1 23 17V3C23 1.9 22.1 1 21 1ZM21 17H7V3H21V17ZM15 5H13C11.9 5 11 5.89 11 7V9C11 10.11 11.9 11 13 11H15V13H11V15H15C16.1 15 17 14.11 17 13V7C17 5.89 16.1 5 15 5ZM15 9H13V7H15V9Z" />
  </svg>
)
export const oFilter9Plus = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5H1V21C1 22.1 1.9 23 3 23H19V21H3V5ZM14 12V8C14 6.89 13.1 6 12 6H11C9.9 6 9 6.89 9 8V9C9 10.11 9.9 11 11 11H12V12H9V14H12C13.1 14 14 13.11 14 12ZM11 9V8H12V9H11ZM21 1H7C5.9 1 5 1.9 5 3V17C5 18.1 5.9 19 7 19H21C22.1 19 23 18.1 23 17V3C23 1.9 22.1 1 21 1ZM21 9H19V7H17V9H15V11H17V13H19V11H21V17H7V3H21V9Z" />
  </svg>
)
export const oFilterBAndW = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19L12 11V19H5L12 11V5H19V19Z" />
  </svg>
)
export const oFilterCenterFocus = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5 15H3V19C3 20.1 3.9 21 5 21H9V19H5V15ZM5 5H9V3H5C3.9 3 3 3.9 3 5V9H5V5ZM19 3H15V5H19V9H21V5C21 3.9 20.1 3 19 3ZM19 19H15V21H19C20.1 21 21 20.1 21 19V15H19V19ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" />
  </svg>
)
export const oFilterDrama = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.61 5.64 5.36 8.04C2.35 8.36 0 10.9 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM19 18H6C3.79 18 2 16.21 2 14C2 11.79 3.79 10 6 10C8.21 10 10 11.79 10 14H12C12 11.24 10.14 8.92 7.6 8.22C8.61 6.88 10.2 6 12 6C15.03 6 17.5 8.47 17.5 11.5V12H19C20.65 12 22 13.35 22 15C22 16.65 20.65 18 19 18Z" />
  </svg>
)
export const oFilterFrames = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H16L12 0L8 4H4C2.9 4 2 4.9 2 6V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V6C22 4.9 21.1 4 20 4ZM20 20H4V6H8.52L12.04 2.5L15.52 6H20V20ZM6 18H18V8H6V18ZM8 10H16V16H8V10Z" />
  </svg>
)
export const oFilterHdr = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14 6L9.78 11.63L11.03 13.3L14 9.33L19 16H10.54L6.53 10.63L1 18H23L14 6ZM5 16L6.52 13.97L8.04 16H5Z" />
  </svg>
)
export const oFilterList = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" />
  </svg>
)
export const oFilterNone = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5H1V21C1 22.1 1.9 23 3 23H19V21H3V5ZM21 1H7C5.9 1 5 1.9 5 3V17C5 18.1 5.9 19 7 19H21C22.1 19 23 18.1 23 17V3C23 1.9 22.1 1 21 1ZM21 17H7V3H21V17Z" />
  </svg>
)
export const oFilterTiltShift = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 4.07005V2.05005C8.99005 2.25005 7.16005 3.05005 5.68005 4.26005L7.10005 5.69005C8.21005 4.83005 9.54005 4.25005 11 4.07005ZM18.32 4.26005C16.84 3.05005 15.01 2.25005 13 2.05005V4.07005C14.46 4.25005 15.79 4.83005 16.9 5.69005L18.32 4.26005ZM19.93 11H21.9501C21.75 8.99005 20.9501 7.16005 19.74 5.68005L18.31 7.10005C19.17 8.21005 19.75 9.54005 19.93 11ZM5.69005 7.10005L4.26005 5.68005C3.05005 7.16005 2.25005 8.99005 2.05005 11H4.07005C4.25005 9.54005 4.83005 8.21005 5.69005 7.10005ZM4.07005 13H2.05005C2.25005 15.01 3.05005 16.84 4.26005 18.32L5.69005 16.89C4.83005 15.79 4.25005 14.46 4.07005 13ZM15 12C15 10.34 13.66 9.00005 12 9.00005C10.34 9.00005 9.00005 10.34 9.00005 12C9.00005 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12ZM18.31 16.9L19.74 18.33C20.9501 16.85 21.75 15.01 21.9501 13.01H19.93C19.75 14.46 19.17 15.79 18.31 16.9ZM13 19.93V21.9501C15.01 21.75 16.84 20.9501 18.32 19.74L16.89 18.31C15.79 19.17 14.46 19.75 13 19.93ZM5.68005 19.74C7.16005 20.9501 9.00005 21.75 11 21.9501V19.93C9.54005 19.75 8.21005 19.17 7.10005 18.31L5.68005 19.74Z" />
  </svg>
)
export const oFilterVintage = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18.7001 12.4001C18.42 12.2401 18.13 12.1101 17.84 12.0001C18.13 11.8901 18.42 11.7601 18.7001 11.6001C20.6201 10.4901 21.6901 8.48006 21.7001 6.41006C20.7901 5.89006 19.75 5.61006 18.6901 5.61006C17.67 5.61006 16.64 5.87006 15.7 6.41006C15.42 6.57006 15.16 6.76006 14.92 6.95006C14.97 6.64006 15 6.32006 15 6.00006C15 3.78006 13.79 1.85006 12 0.810059C10.21 1.85006 9.00005 3.78006 9.00005 6.00006C9.00005 6.32006 9.03005 6.64006 9.08005 6.95006C8.84005 6.75006 8.58005 6.56006 8.30005 6.40006C7.36005 5.86006 6.33005 5.60006 5.31005 5.60006C4.26005 5.60006 3.21005 5.88006 2.30005 6.40006C2.30005 8.47006 3.37005 10.4801 5.30005 11.5901C5.58005 11.7501 5.87005 11.8801 6.16005 11.9901C5.87005 12.1001 5.58005 12.2301 5.30005 12.3901C3.38005 13.5001 2.31005 15.5101 2.30005 17.5801C3.21005 18.1001 4.25005 18.3801 5.31005 18.3801C6.33005 18.3801 7.36005 18.1201 8.30005 17.5801C8.58005 17.4201 8.84005 17.2301 9.08005 17.0401C9.03005 17.3601 9.00005 17.6801 9.00005 18.0001C9.00005 20.2201 10.21 22.1501 12 23.1901C13.79 22.1501 15 20.2201 15 18.0001C15 17.6801 14.97 17.3601 14.92 17.0501C15.16 17.2501 15.42 17.4301 15.7 17.5901C16.64 18.1301 17.67 18.3901 18.6901 18.3901C19.74 18.3901 20.7901 18.1101 21.7001 17.5901C21.6901 15.5201 20.6201 13.5101 18.7001 12.4001ZM16.16 8.52006C16.37 8.35006 16.54 8.23006 16.7 8.15006C17.31 7.80006 18.0001 7.61006 18.7001 7.61006C18.9701 7.61006 19.23 7.64006 19.49 7.69006C19.18 8.60006 18.55 9.38006 17.71 9.87006C17.54 9.97006 17.35 10.0501 17.13 10.1401L15.75 10.6601C15.58 10.2001 15.34 9.79006 15.03 9.42006L16.16 8.52006ZM12 3.37006C12.63 4.09006 13 5.03006 13 6.00006C13 6.19006 12.98 6.41006 12.95 6.63006L12.72 8.07006C12.48 8.03006 12.24 8.00006 12 8.00006C11.76 8.00006 11.52 8.03006 11.29 8.07006L11.06 6.63006C11.02 6.41006 11 6.19006 11 6.00006C11 5.02006 11.37 4.09006 12 3.37006ZM4.51005 7.68006C4.77005 7.62006 5.04005 7.60006 5.31005 7.60006C6.00005 7.60006 6.69005 7.78006 7.30005 8.14006C7.45005 8.23006 7.62005 8.34006 7.79005 8.49006L8.94005 9.45006C8.64005 9.81006 8.41005 10.2101 8.24005 10.6501L6.86005 10.1301C6.65005 10.0401 6.46005 9.95006 6.30005 9.86006C5.43005 9.36006 4.81005 8.59006 4.51005 7.68006ZM7.84005 15.4701C7.63005 15.6401 7.46005 15.7601 7.30005 15.8401C6.69005 16.1901 6.00005 16.3801 5.30005 16.3801C5.03005 16.3801 4.77005 16.3501 4.51005 16.3001C4.82005 15.3901 5.45005 14.6101 6.29005 14.1201C6.46005 14.0201 6.65005 13.9401 6.87005 13.8501L8.25005 13.3301C8.41005 13.7901 8.66005 14.2101 8.97005 14.5701L7.84005 15.4701ZM12 20.6301C11.37 19.9101 11 18.9701 11 18.0001C11 17.8001 11.02 17.5901 11.06 17.3501L11.28 15.9301C11.51 15.9701 11.75 16.0001 12 16.0001C12.24 16.0001 12.48 15.9701 12.71 15.9301L12.94 17.3701C12.98 17.5901 13 17.8101 13 18.0001C13 18.9801 12.63 19.9101 12 20.6301ZM18.6901 16.3901C18.0001 16.3901 17.31 16.2101 16.7 15.8501C16.52 15.7501 16.36 15.6301 16.21 15.5101L15.06 14.5501C15.36 14.1901 15.6 13.7901 15.76 13.3401L17.14 13.8601C17.36 13.9401 17.55 14.0301 17.71 14.1201C18.56 14.6101 19.18 15.3901 19.49 16.3001C19.22 16.3701 18.9501 16.3901 18.6901 16.3901Z" />
  </svg>
)
export const oFindInPage = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM6 4H13L18 9V17.58L16.16 15.74C17.44 13.8 17.23 11.17 15.52 9.46C14.55 8.49 13.28 8 12 8C10.72 8 9.45 8.49 8.47 9.46C6.52 11.41 6.52 14.57 8.47 16.51C9.44 17.48 10.72 17.97 12 17.97C12.96 17.97 13.92 17.69 14.75 17.14L17.6 20H6V4ZM14.11 15.1C13.55 15.66 12.8 15.98 12 15.98C11.2 15.98 10.45 15.67 9.89 15.1C9.33 14.54 9.01 13.79 9.01 12.99C9.01 12.19 9.32 11.44 9.89 10.88C10.45 10.31 11.2 10 12 10C12.8 10 13.55 10.31 14.11 10.88C14.67 11.44 14.99 12.19 14.99 12.99C14.99 13.79 14.68 14.54 14.11 15.1Z" />
  </svg>
)
export const oFindReplace = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 6C12.38 6 13.63 6.56 14.54 7.46L12 10H18V4L15.95 6.05C14.68 4.78 12.93 4 11 4C7.47 4 4.57 6.61 4.08 10H6.1C6.56 7.72 8.58 6 11 6ZM16.64 15.14C17.3 14.24 17.76 13.17 17.92 12H15.9C15.44 14.28 13.42 16 11 16C9.62 16 8.37 15.44 7.46 14.54L10 12H4V18L6.05 15.95C7.32 17.22 9.07 18 11 18C12.55 18 13.98 17.49 15.14 16.64L20 21.49L21.49 20L16.64 15.14Z" />
  </svg>
)
export const oFingerprint = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.81 4.47C17.73 4.47 17.65 4.45 17.58 4.41C15.66 3.42 14 3 12.01 3C10.03 3 8.14999 3.47 6.43999 4.41C6.19999 4.54 5.89999 4.45 5.75999 4.21C5.62999 3.97 5.71999 3.66 5.95999 3.53C7.81998 2.52 9.85998 2 12.01 2C14.14 2 16 2.47 18.04 3.52C18.29 3.65 18.38 3.95 18.25 4.19C18.16 4.37 17.99 4.47 17.81 4.47ZM3.49998 9.72C3.39998 9.72 3.29999 9.69 3.20999 9.63C2.97999 9.47 2.92998 9.16 3.08998 8.93C4.07998 7.53 5.33999 6.43 6.83999 5.66C9.97999 4.04 14 4.03 17.15 5.65C18.65 6.42 19.91 7.51 20.9 8.9C21.06 9.12 21.01 9.44 20.78 9.6C20.55 9.76 20.24 9.71 20.08 9.48C19.18 8.22 18.04 7.23 16.69 6.54C13.82 5.07 10.15 5.07 7.28999 6.55C5.92999 7.25 4.78999 8.25 3.88999 9.51C3.80999 9.65 3.65998 9.72 3.49998 9.72ZM9.74999 21.79C9.61999 21.79 9.48998 21.74 9.39998 21.64C8.52998 20.77 8.05999 20.21 7.38999 19C6.69999 17.77 6.33999 16.27 6.33999 14.66C6.33999 11.69 8.87998 9.27 12 9.27C15.12 9.27 17.66 11.69 17.66 14.66C17.66 14.94 17.44 15.16 17.16 15.16C16.88 15.16 16.66 14.94 16.66 14.66C16.66 12.24 14.57 10.27 12 10.27C9.42999 10.27 7.33999 12.24 7.33999 14.66C7.33999 16.1 7.65999 17.43 8.26999 18.51C8.90999 19.66 9.34999 20.15 10.12 20.93C10.31 21.13 10.31 21.44 10.12 21.64C10.01 21.74 9.87999 21.79 9.74999 21.79ZM16.92 19.94C15.73 19.94 14.68 19.64 13.82 19.05C12.33 18.04 11.44 16.4 11.44 14.66C11.44 14.38 11.66 14.16 11.94 14.16C12.22 14.16 12.44 14.38 12.44 14.66C12.44 16.07 13.16 17.4 14.38 18.22C15.09 18.7 15.92 18.93 16.92 18.93C17.16 18.93 17.56 18.9 17.96 18.83C18.23 18.78 18.49 18.96 18.54 19.24C18.59 19.51 18.41 19.77 18.13 19.82C17.56 19.93 17.06 19.94 16.92 19.94ZM14.91 22C14.87 22 14.82 21.99 14.78 21.98C13.19 21.54 12.15 20.95 11.06 19.88C9.65999 18.49 8.88999 16.64 8.88999 14.66C8.88999 13.04 10.27 11.72 11.97 11.72C13.67 11.72 15.05 13.04 15.05 14.66C15.05 15.73 15.98 16.6 17.13 16.6C18.28 16.6 19.21 15.73 19.21 14.66C19.21 10.89 15.96 7.83 11.96 7.83C9.11998 7.83 6.51998 9.41 5.34998 11.86C4.95998 12.67 4.75999 13.62 4.75999 14.66C4.75999 15.44 4.82998 16.67 5.42998 18.27C5.52998 18.53 5.39998 18.82 5.13998 18.91C4.87998 19.01 4.58999 18.87 4.49998 18.62C4.00998 17.31 3.76998 16.01 3.76998 14.66C3.76998 13.46 3.99998 12.37 4.44998 11.42C5.77998 8.63 8.72998 6.82 11.96 6.82C16.51 6.82 20.21 10.33 20.21 14.65C20.21 16.27 18.83 17.59 17.13 17.59C15.43 17.59 14.05 16.27 14.05 14.65C14.05 13.58 13.12 12.71 11.97 12.71C10.82 12.71 9.88999 13.58 9.88999 14.65C9.88999 16.36 10.55 17.96 11.76 19.16C12.71 20.1 13.62 20.62 15.03 21.01C15.3 21.08 15.45 21.36 15.38 21.62C15.33 21.85 15.12 22 14.91 22Z" />
  </svg>
)
export const oFirstPage = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18.41 16.59L13.82 12L18.41 7.41L17 6L11 12L17 18L18.41 16.59ZM6 6H8V18H6V6Z" />
  </svg>
)
export const oFitnessCenter = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20.57 14.86L22 13.43L20.57 12L17 15.57L8.43 7L12 3.43L10.57 2L9.14 3.43L7.71 2L5.57 4.14L4.14 2.71L2.71 4.14L4.14 5.57L2 7.71L3.43 9.14L2 10.57L3.43 12L7 8.43L15.57 17L12 20.57L13.43 22L14.86 20.57L16.29 22L18.43 19.86L19.86 21.29L21.29 19.86L19.86 18.43L22 16.29L20.57 14.86Z" />
  </svg>
)
export const oFlag = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12.36 6L12.76 8H18V14H14.64L14.24 12H7V6H12.36ZM14 4H5V21H7V14H12.6L13 16H20V6H14.4L14 4Z" />
  </svg>
)
export const oFlare = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 11H1V13H7V11ZM9.17 7.76L7.05 5.64L5.64 7.05L7.76 9.17L9.17 7.76ZM13 1H11V7H13V1ZM18.36 7.05L16.95 5.64L14.83 7.76L16.24 9.17L18.36 7.05ZM17 11V13H23V11H17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9ZM14.83 16.24L16.95 18.36L18.36 16.95L16.24 14.83L14.83 16.24ZM5.64 16.95L7.05 18.36L9.17 16.24L7.76 14.83L5.64 16.95ZM11 23H13V17H11V23Z" />
  </svg>
)
export const oFlashAuto = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 2V14H6V23L13 11H9L13 2H3ZM19 2H17L13.8 11H15.7L16.4 9H19.6L20.3 11H22.2L19 2ZM16.85 7.65L18 4L19.15 7.65H16.85Z" />
  </svg>
)
export const oFlashOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 10H13.39L15.67 12.28L17 10ZM17 2H7V3.61L13.13 9.74L17 2ZM3.41 2.86L2 4.27L7 9.27V13H10V22L13.58 15.85L17.73 20L19.14 18.59L3.41 2.86Z" />
  </svg>
)
export const oFlashOn = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 2V13H10V22L17 10H13L16 2H7Z" />
  </svg>
)
export const oFlight = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" />
  </svg>
)
export const oFlightLand = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 19H21.5V21H2.5V19ZM19.34 15.85C20.14 16.06 20.96 15.59 21.18 14.79C21.39 13.99 20.92 13.17 20.12 12.95L14.81 11.53L12.05 2.51L10.12 2V10.28L5.15 8.95L4.22 6.63L2.77 6.24V11.41L19.34 15.85Z" />
  </svg>
)
export const oFlightTakeoff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M2.49997 19.0001H21.5V21.0001H2.49997V19.0001ZM22.07 9.64007C21.86 8.84007 21.03 8.36007 20.23 8.58007L14.92 10.0001L8.01997 3.57007L6.08997 4.08007L10.23 11.2501L5.25997 12.5801L3.28997 11.0401L1.83997 11.4301L4.42997 15.9201L21 11.4901C21.81 11.2601 22.28 10.4401 22.07 9.64007Z" />
  </svg>
)
export const oFlip = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 21H17V19H15V21ZM19 9H21V7H19V9ZM3 5V19C3 20.1 3.9 21 5 21H9V19H5V5H9V3H5C3.9 3 3 3.9 3 5ZM19 3V5H21C21 3.9 20.1 3 19 3ZM11 23H13V1H11V23ZM19 17H21V15H19V17ZM15 5H17V3H15V5ZM19 13H21V11H19V13ZM19 21C20.1 21 21 20.1 21 19H19V21Z" />
  </svg>
)
export const oFlipToBack = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9 7H7V9H9V7ZM9 11H7V13H9V11ZM9 3C7.89 3 7 3.9 7 5H9V3ZM13 15H11V17H13V15ZM19 3V5H21C21 3.9 20.1 3 19 3ZM13 3H11V5H13V3ZM9 17V15H7C7 16.1 7.89 17 9 17ZM19 13H21V11H19V13ZM19 9H21V7H19V9ZM19 17C20.1 17 21 16.1 21 15H19V17ZM5 7H3V19C3 20.1 3.89 21 5 21H17V19H5V7ZM15 5H17V3H15V5ZM15 17H17V15H15V17Z" />
  </svg>
)
export const oFlipToFront = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 13H5V11H3V13ZM3 17H5V15H3V17ZM5 21V19H3C3 20.1 3.89 21 5 21ZM3 9H5V7H3V9ZM15 21H17V19H15V21ZM19 3H9C7.89 3 7 3.9 7 5V15C7 16.1 7.89 17 9 17H19C20.1 17 21 16.1 21 15V5C21 3.9 20.1 3 19 3ZM19 15H9V5H19V15ZM11 21H13V19H11V21ZM7 21H9V19H7V21Z" />
  </svg>
)
export const oFolder = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9.17 6L11.17 8H20V18H4V6H9.17ZM10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z" />
  </svg>
)
export const oFolderOpen = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM20 18H4V8H20V18Z" />
  </svg>
)
export const oFolderShared = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM20 18H4V6H9.17L11.17 8H20V18ZM15 13C16.1 13 17 12.1 17 11C17 9.9 16.1 9 15 9C13.9 9 13 9.9 13 11C13 12.1 13.9 13 15 13ZM11 17H19V16C19 14.67 16.33 14 15 14C13.67 14 11 14.67 11 16V17Z" />
  </svg>
)
export const oFolderSpecial = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6H12L10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM20 18H4V6H9.17L11.17 8H20V18ZM13.08 14.04L12.39 17L15 15.47L17.61 17L16.92 14.04L19.22 12.05L16.19 11.79L15 9L13.81 11.79L10.78 12.05L13.08 14.04Z" />
  </svg>
)
export const oFontDownload = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9.17 15.5H14.81L15.95 18.5H18.04L12.93 5.5H11.07L5.96 18.5H8.05L9.17 15.5ZM12 7.98L14.07 13.5H9.93L12 7.98ZM20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM20 20H4V4H20V20Z" />
  </svg>
)
export const oFormatAlignCenter = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 15V17H17V15H7ZM3 21H21V19H3V21ZM3 13H21V11H3V13ZM7 7V9H17V7H7ZM3 3V5H21V3H3Z" />
  </svg>
)
export const oFormatAlignJustify = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21H21V19H3V21ZM3 17H21V15H3V17ZM3 13H21V11H3V13ZM3 9H21V7H3V9ZM3 3V5H21V3H3Z" />
  </svg>
)
export const oFormatAlignLeft = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 15H3V17H15V15ZM15 7H3V9H15V7ZM3 13H21V11H3V13ZM3 21H21V19H3V21ZM3 3V5H21V3H3Z" />
  </svg>
)
export const oFormatAlignRight = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21H21V19H3V21ZM9 17H21V15H9V17ZM3 13H21V11H3V13ZM9 9H21V7H9V9ZM3 3V5H21V3H3Z" />
  </svg>
)
export const oFormatBold = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.6 10.79C16.57 10.12 17.25 9.02 17.25 8C17.25 5.74 15.5 4 13.25 4H7V18H14.04C16.13 18 17.75 16.3 17.75 14.21C17.75 12.69 16.89 11.39 15.6 10.79ZM10 6.5H13C13.83 6.5 14.5 7.17 14.5 8C14.5 8.83 13.83 9.5 13 9.5H10V6.5ZM13.5 15.5H10V12.5H13.5C14.33 12.5 15 13.17 15 14C15 14.83 14.33 15.5 13.5 15.5Z" />
  </svg>
)
export const oFormatClear = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 7.99999V4.99999H6.39L9.39 7.99999H11.22L10.67 9.27998L12.76 11.38L14.21 7.99999H20ZM3.41 4.85999L2 6.26999L8.97 13.24L6.5 19H9.5L11.07 15.34L16.73 21L18.14 19.59L3.41 4.85999Z" />
  </svg>
)
export const oFormatColorFill = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16.5601 8.94L7.62006 0L6.21006 1.41L8.59006 3.79L3.44006 8.94C2.85006 9.53 2.85006 10.48 3.44006 11.06L8.94006 16.56C9.23006 16.85 9.62006 17 10.0001 17C10.3801 17 10.7701 16.85 11.0601 16.56L16.5601 11.06C17.1501 10.48 17.1501 9.53 16.5601 8.94ZM5.21006 10L10.0001 5.21L14.7901 10H5.21006ZM19.0001 11.5C19.0001 11.5 17.0001 13.67 17.0001 15C17.0001 16.1 17.9001 17 19.0001 17C20.1001 17 21.0001 16.1 21.0001 15C21.0001 13.67 19.0001 11.5 19.0001 11.5Z" />
    <path d="M0 20H24V24H0V20Z" fill="black" fillOpacity="0.36" />
  </svg>
)
export const oFormatColorReset = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6.35995C13.53 8.35995 15.08 10.79 15.71 12.6L17.94 14.83C17.97 14.56 18 14.28 18 14C18 10.02 12 3.19995 12 3.19995C12 3.19995 10.82 4.54995 9.5 6.38995L10.94 7.82995C11.28 7.31995 11.64 6.82995 12 6.35995ZM5.41 5.13995L4 6.54995L7.32 9.86995C6.55 11.33 6 12.79 6 14C6 17.31 8.69 20 12 20C13.52 20 14.9 19.43 15.95 18.5L18.58 21.1299L20 19.7199L5.41 5.13995ZM12 18C9.79 18 8 16.21 8 14C8 13.31 8.32 12.38 8.81 11.36L14.53 17.08C13.83 17.64 12.96 18 12 18Z" />
  </svg>
)
export const oFormatColorText = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M0 20H24V24H0V20Z" fillOpacity="0.36" />
    <path
      d="M11 3L5.5 17H7.75L8.87 14H15.12L16.24 17H18.49L13 3H11ZM9.62 12L12 5.67L14.38 12H9.62Z"
      fill="black"
    />
  </svg>
)
export const oFormatIndentDecrease = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 17H21V15H11V17ZM3 12L7 16V8L3 12ZM3 21H21V19H3V21ZM3 3V5H21V3H3ZM11 9H21V7H11V9ZM11 13H21V11H11V13Z" />
  </svg>
)
export const oFormatIndentIncrease = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21H21V19H3V21ZM3 8V16L7 12L3 8ZM11 17H21V15H11V17ZM3 3V5H21V3H3ZM11 9H21V7H11V9ZM11 13H21V11H11V13Z" />
  </svg>
)
export const oFormatItalic = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10 4V7H12.21L8.79 15H6V18H14V15H11.79L15.21 7H18V4H10Z" />
  </svg>
)
export const oFormatLineSpacing = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6 7H8.5L5 3.5L1.5 7H4V17H1.5L5 20.5L8.5 17H6V7ZM10 5V7H22V5H10ZM10 19H22V17H10V19ZM10 13H22V11H10V13Z" />
  </svg>
)
export const oFormatListBulleted = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10.5C3.17 10.5 2.5 11.17 2.5 12C2.5 12.83 3.17 13.5 4 13.5C4.83 13.5 5.5 12.83 5.5 12C5.5 11.17 4.83 10.5 4 10.5ZM4 4.5C3.17 4.5 2.5 5.17 2.5 6C2.5 6.83 3.17 7.5 4 7.5C4.83 7.5 5.5 6.83 5.5 6C5.5 5.17 4.83 4.5 4 4.5ZM4 16.5C3.17 16.5 2.5 17.18 2.5 18C2.5 18.82 3.18 19.5 4 19.5C4.82 19.5 5.5 18.82 5.5 18C5.5 17.18 4.83 16.5 4 16.5ZM7 19H21V17H7V19ZM7 13H21V11H7V13ZM7 5V7H21V5H7Z" />
  </svg>
)
export const oFormatListNumbered = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M2 17H4V17.5H3V18.5H4V19H2V20H5V16H2V17ZM3 8H4V4H2V5H3V8ZM2 11H3.8L2 13.1V14H5V13H3.2L5 10.9V10H2V11ZM7 5V7H21V5H7ZM7 19H21V17H7V19ZM7 13H21V11H7V13Z" />
  </svg>
)
export const oFormatListNumberedRtl = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 17H20V17.5H19V18.5H20V19H18V20H21V16H18V17ZM19 8H20V4H18V5H19V8ZM18 11H19.8L18 13.1V14H21V13H19.2L21 10.9V10H18V11ZM2 5H16V7H2V5ZM2 17H16V19H2V17ZM2 11H16V13H2V11Z" />
  </svg>
)
export const oFormatPaint = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 4V3C18 2.45 17.55 2 17 2H5C4.45 2 4 2.45 4 3V7C4 7.55 4.45 8 5 8H17C17.55 8 18 7.55 18 7V6H19V10H9V21C9 21.55 9.45 22 10 22H12C12.55 22 13 21.55 13 21V12H21V4H18ZM16 6H6V4H16V6Z" />
  </svg>
)
export const oFormatQuote = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18.62 18H13.38L15.38 14H13V6H21V13.24L18.62 18ZM16.62 16H17.38L19 12.76V8H15V12H18.62L16.62 16ZM8.62 18H3.38L5.38 14H3V6H11V13.24L8.62 18ZM6.62 16H7.38L9 12.76V8H5V12H8.62L6.62 16Z" />
  </svg>
)
export const oFormatShapes = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M23 7V1H17V3H7V1H1V7H3V17H1V23H7V21H17V23H23V17H21V7H23ZM3 3H5V5H3V3ZM5 21H3V19H5V21ZM17 19H7V17H5V7H7V5H17V7H19V17H17V19ZM21 21H19V19H21V21ZM19 5V3H21V5H19ZM13.73 14H10.24L9.51 16H7.89L11.29 7H12.69L16.1 16H14.47L13.73 14ZM10.69 12.74H13.3L12 8.91L10.69 12.74Z" />
  </svg>
)
export const oFormatSize = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9 4V7H14V19H17V7H22V4H9ZM3 12H6V19H9V12H12V9H3V12Z" />
  </svg>
)
export const oFormatStrikethrough = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10 19H14V16H10V19ZM5 4V7H10V10H14V7H19V4H5ZM3 14H21V12H3V14Z" />
  </svg>
)
export const oFormatTextdirectionLToR = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9 4V8C7.9 8 7 7.1 7 6C7 4.9 7.9 4 9 4ZM17 2H9C6.79 2 5 3.79 5 6C5 8.21 6.79 10 9 10V15H11V4H13V15H15V4H17V2ZM17 14V17H5V19H17V22L21 18L17 14Z" />
  </svg>
)
export const oFormatTextdirectionRToL = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10 4V8C8.9 8 8 7.1 8 6C8 4.9 8.9 4 10 4ZM18 2H10C7.79 2 6 3.79 6 6C6 8.21 7.79 10 10 10V15H12V4H14V15H16V4H18V2ZM8 14L4 18L8 22V19H20V17H8V14Z" />
  </svg>
)
export const oFormatUnderlined = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17C15.31 17 18 14.31 18 11V3H15.5V11C15.5 12.93 13.93 14.5 12 14.5C10.07 14.5 8.5 12.93 8.5 11V3H6V11C6 14.31 8.69 17 12 17ZM5 19V21H19V19H5Z" />
  </svg>
)
export const oForum = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 4V11H5.17L4 12.17V4H15ZM16 2H3C2.45 2 2 2.45 2 3V17L6 13H16C16.55 13 17 12.55 17 12V3C17 2.45 16.55 2 16 2ZM21 6H19V15H6V17C6 17.55 6.45 18 7 18H18L22 22V7C22 6.45 21.55 6 21 6Z" />
  </svg>
)
export const oForward = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14 8.83L17.17 12L14 15.17V14H6V10H14V8.83ZM12 4V8H4V16H12V20L20 12L12 4Z" />
  </svg>
)
export const oForward10 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13C6 9.69 8.69 7 12 7V11L17 6L12 1V5C7.58 5 4 8.58 4 13C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13H18ZM10.9 16V11.73H10.81L9.04 12.36V13.05L10.05 12.74V16H10.9ZM14.32 11.78C14.14 11.71 13.95 11.68 13.73 11.68C13.51 11.68 13.32 11.71 13.14 11.78C12.96 11.85 12.81 11.96 12.69 12.11C12.57 12.26 12.46 12.45 12.4 12.68C12.34 12.91 12.3 13.18 12.3 13.5V14.24C12.3 14.56 12.34 14.84 12.41 15.06C12.48 15.28 12.58 15.48 12.71 15.63C12.84 15.78 12.99 15.89 13.17 15.96C13.35 16.03 13.54 16.06 13.76 16.06C13.98 16.06 14.17 16.03 14.35 15.96C14.53 15.89 14.68 15.78 14.8 15.63C14.92 15.48 15.02 15.29 15.09 15.06C15.16 14.83 15.19 14.56 15.19 14.24V13.5C15.19 13.18 15.15 12.9 15.08 12.68C15.01 12.46 14.91 12.26 14.78 12.11C14.65 11.96 14.49 11.85 14.32 11.78ZM14.33 14.35C14.33 14.54 14.32 14.7 14.29 14.83C14.26 14.96 14.23 15.07 14.18 15.15C14.13 15.23 14.07 15.29 13.99 15.32C13.91 15.35 13.83 15.37 13.74 15.37C13.65 15.37 13.56 15.35 13.49 15.32C13.42 15.29 13.35 15.23 13.3 15.15C13.25 15.07 13.21 14.96 13.18 14.83C13.15 14.7 13.14 14.54 13.14 14.35V13.38C13.14 13.19 13.15 13.03 13.18 12.9C13.21 12.77 13.24 12.67 13.3 12.59C13.36 12.51 13.41 12.45 13.49 12.42C13.57 12.39 13.65 12.37 13.74 12.37C13.83 12.37 13.92 12.39 13.99 12.42C14.06 12.45 14.13 12.51 14.18 12.59C14.23 12.67 14.27 12.77 14.3 12.9C14.33 13.03 14.34 13.19 14.34 13.38V14.35H14.33Z" />
  </svg>
)
export const oForward30 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13C6 9.69 8.69 7 12 7V11L17 6L12 1V5C7.58 5 4 8.58 4 13C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13H18ZM10.54 15.22C10.48 15.27 10.42 15.31 10.34 15.34C10.26 15.37 10.17 15.38 10.07 15.38C9.98 15.38 9.9 15.37 9.82 15.34C9.74 15.31 9.68 15.28 9.62 15.23C9.56 15.18 9.52 15.13 9.49 15.06C9.46 14.99 9.44 14.92 9.44 14.84H8.59C8.59 15.05 8.63 15.23 8.71 15.39C8.79 15.55 8.9 15.67 9.04 15.77C9.18 15.87 9.33 15.95 9.5 16C9.67 16.05 9.85 16.07 10.03 16.07C10.24 16.07 10.44 16.04 10.63 15.99C10.82 15.94 10.97 15.85 11.11 15.75C11.25 15.65 11.35 15.51 11.43 15.36C11.51 15.21 11.55 15.03 11.55 14.83C11.55 14.6 11.49 14.39 11.37 14.22C11.25 14.05 11.07 13.92 10.83 13.83C10.93 13.78 11.03 13.73 11.11 13.66C11.19 13.59 11.26 13.52 11.31 13.44C11.36 13.36 11.41 13.28 11.44 13.19C11.47 13.1 11.48 13.01 11.48 12.92C11.48 12.72 11.44 12.55 11.37 12.39C11.3 12.23 11.2 12.11 11.07 12.01C10.94 11.91 10.79 11.83 10.61 11.78C10.43 11.73 10.24 11.7 10.02 11.7C9.83 11.7 9.64 11.73 9.48 11.78C9.32 11.83 9.16 11.91 9.04 12.01C8.92 12.11 8.81 12.23 8.74 12.38C8.67 12.53 8.63 12.68 8.63 12.86H9.48C9.48 12.79 9.5 12.72 9.53 12.66C9.56 12.6 9.6 12.55 9.65 12.51C9.7 12.47 9.76 12.44 9.83 12.41C9.9 12.38 9.97 12.38 10.05 12.38C10.15 12.38 10.23 12.39 10.3 12.42C10.37 12.45 10.43 12.48 10.48 12.53C10.53 12.58 10.56 12.64 10.59 12.7C10.62 12.76 10.63 12.84 10.63 12.92C10.63 13.1 10.58 13.24 10.47 13.35C10.36 13.46 10.21 13.51 9.99 13.51H9.56V14.17H10.01C10.12 14.17 10.21 14.18 10.3 14.21C10.39 14.24 10.46 14.27 10.52 14.32C10.58 14.37 10.63 14.44 10.66 14.52C10.69 14.6 10.71 14.7 10.71 14.81C10.71 14.9 10.7 14.98 10.67 15.05C10.64 15.12 10.59 15.16 10.54 15.22ZM14.44 11.78C14.26 11.71 14.07 11.68 13.85 11.68C13.63 11.68 13.44 11.71 13.26 11.78C13.08 11.85 12.93 11.96 12.81 12.11C12.69 12.26 12.58 12.45 12.52 12.68C12.46 12.91 12.42 13.18 12.42 13.5V14.24C12.42 14.56 12.46 14.84 12.53 15.06C12.6 15.28 12.7 15.48 12.83 15.63C12.96 15.78 13.11 15.89 13.29 15.96C13.47 16.03 13.66 16.06 13.88 16.06C14.1 16.06 14.29 16.03 14.47 15.96C14.65 15.89 14.8 15.78 14.92 15.63C15.04 15.48 15.14 15.29 15.21 15.06C15.28 14.83 15.31 14.56 15.31 14.24V13.5C15.31 13.18 15.27 12.9 15.2 12.68C15.13 12.46 15.03 12.26 14.9 12.11C14.77 11.96 14.62 11.85 14.44 11.78ZM14.45 14.35C14.45 14.54 14.44 14.7 14.41 14.83C14.38 14.96 14.35 15.07 14.3 15.15C14.25 15.23 14.19 15.29 14.11 15.32C14.03 15.35 13.95 15.37 13.86 15.37C13.77 15.37 13.68 15.35 13.61 15.32C13.54 15.29 13.47 15.23 13.42 15.15C13.37 15.07 13.33 14.96 13.3 14.83C13.27 14.7 13.26 14.54 13.26 14.35V13.38C13.26 13.19 13.27 13.03 13.3 12.9C13.33 12.77 13.36 12.67 13.42 12.59C13.48 12.51 13.53 12.45 13.61 12.42C13.69 12.39 13.77 12.37 13.86 12.37C13.95 12.37 14.04 12.39 14.11 12.42C14.18 12.45 14.25 12.51 14.3 12.59C14.35 12.67 14.39 12.77 14.42 12.9C14.45 13.03 14.46 13.19 14.46 13.38V14.35H14.45Z" />
  </svg>
)
export const oForward5 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.95 13C17.95 16.31 15.26 19 11.95 19C8.63995 19 5.94995 16.31 5.94995 13C5.94995 9.69 8.63995 7 11.95 7V11L16.95 6L11.95 1V5C7.52995 5 3.94995 8.58 3.94995 13C3.94995 17.42 7.52995 21 11.95 21C16.37 21 19.95 17.42 19.95 13H17.95ZM12.43 15.15C12.38 15.22 12.32 15.28 12.25 15.32C12.18 15.36 12.08 15.38 11.98 15.38C11.81 15.38 11.67 15.33 11.56 15.23C11.45 15.13 11.39 14.99 11.37 14.82H10.53C10.54 15.02 10.58 15.19 10.66 15.35C10.74 15.51 10.85 15.63 10.98 15.74C11.11 15.85 11.27 15.93 11.44 15.98C11.61 16.03 11.79 16.06 11.97 16.06C12.21 16.06 12.43 16.02 12.61 15.94C12.79 15.86 12.94 15.76 13.06 15.63C13.18 15.5 13.27 15.35 13.33 15.18C13.39 15.01 13.42 14.83 13.42 14.64C13.42 14.42 13.39 14.21 13.33 14.04C13.27 13.87 13.19 13.71 13.08 13.59C12.97 13.47 12.83 13.37 12.67 13.31C12.51 13.25 12.33 13.21 12.12 13.21C12.05 13.21 11.98 13.22 11.92 13.23C11.86 13.24 11.79 13.25 11.74 13.27C11.69 13.29 11.64 13.3 11.59 13.32C11.54 13.34 11.51 13.36 11.48 13.37L11.59 12.45H13.29V11.74H10.9L10.65 13.91L11.32 14.08C11.35 14.05 11.38 14.02 11.42 13.99C11.46 13.96 11.49 13.94 11.54 13.92C11.59 13.9 11.64 13.88 11.69 13.87C11.74 13.86 11.82 13.85 11.89 13.85C12.01 13.85 12.11 13.87 12.19 13.9C12.27 13.93 12.35 13.99 12.4 14.05C12.45 14.11 12.5 14.19 12.53 14.29C12.56 14.39 12.57 14.48 12.57 14.6C12.57 14.72 12.56 14.82 12.54 14.91C12.52 15 12.48 15.08 12.43 15.15Z" />
  </svg>
)
export const oFreeBreakfast = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19H20V21H4V19ZM20 3H4V13C4 15.21 5.79 17 8 17H14C16.21 17 18 15.21 18 13V10H20C21.11 10 22 9.1 22 8V5C22 3.89 21.11 3 20 3ZM16 13C16 14.1 15.1 15 14 15H8C6.9 15 6 14.1 6 13V5H16V13ZM20 8H18V5H20V8Z" />
  </svg>
)
export const oFullscreen = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 14H5V19H10V17H7V14ZM5 10H7V7H10V5H5V10ZM17 17H14V19H19V14H17V17ZM14 5V7H17V10H19V5H14Z" />
  </svg>
)
export const oFullscreenExit = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5 16H8V19H10V14H5V16ZM8 8H5V10H10V5H8V8ZM14 19H16V16H19V14H14V19ZM16 8V5H14V10H19V8H16Z" />
  </svg>
)
export const oFunctions = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 4H6V6L12.5 12L6 18V20H18V17H11L16 12L11 7H18V4Z" />
  </svg>
)
export const oGTranslate = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5H10.88L10 2H4C2.9 2 2 2.9 2 4V17C2 18.1 2.9 19 4 19H11L12 22H20C21.1 22 22 21.1 22 20V7C22 5.9 21.1 5 20 5ZM7.17 14.59C4.92 14.59 3.08 12.76 3.08 10.5C3.08 8.24 4.91 6.41 7.17 6.41C8.21 6.41 9.16 6.78 9.91 7.48L9.98 7.54L8.75 8.72L8.69 8.67C8.4 8.4 7.91 8.08 7.17 8.08C5.86 8.08 4.79 9.17 4.79 10.5C4.79 11.83 5.86 12.92 7.17 12.92C8.54 12.92 9.13 12.05 9.29 11.46H7.08V9.91H11.03L11.04 9.98C11.08 10.19 11.09 10.38 11.09 10.59C11.09 12.94 9.48 14.59 7.17 14.59ZM13.2 12.88C13.53 13.48 13.94 14.06 14.39 14.58L13.85 15.11L13.2 12.88ZM13.97 12.12H12.98L12.67 11.08H16.66C16.66 11.08 16.32 12.39 15.1 13.82C14.58 13.2 14.21 12.59 13.97 12.12ZM21 20C21 20.55 20.55 21 20 21H13L15 19L14.19 16.23L15.11 15.31L17.79 18L18.52 17.27L15.81 14.59C16.71 13.56 17.41 12.34 17.73 11.08H19V10.04H15.36V9H14.32V10.04H12.36L11.18 6H20C20.55 6 21 6.45 21 7V20Z" />
  </svg>
)
export const oGamepad = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13 4V6.67L12 7.67L11 6.67V4H13ZM20 11V13H17.33L16.33 12L17.33 11H20ZM6.67 11L7.67 12L6.67 13H4V11H6.67ZM12 16.33L13 17.33V20H11V17.33L12 16.33ZM15 2H9V7.5L12 10.5L15 7.5V2ZM22 9H16.5L13.5 12L16.5 15H22V9ZM7.5 9H2V15H7.5L10.5 12L7.5 9ZM12 13.5L9 16.5V22H15V16.5L12 13.5Z" />
  </svg>
)
export const oGames = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13 4V6.67L12 7.67L11 6.67V4H13ZM20 11V13H17.33L16.33 12L17.33 11H20ZM6.67 11L7.67 12L6.67 13H4V11H6.67ZM12 16.33L13 17.33V20H11V17.33L12 16.33ZM15 2H9V7.5L12 10.5L15 7.5V2ZM22 9H16.5L13.5 12L16.5 15H22V9ZM7.5 9H2V15H7.5L10.5 12L7.5 9ZM12 13.5L9 16.5V22H15V16.5L12 13.5Z" />
  </svg>
)
export const oGavel = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M1 21H13V23H1V21ZM5.24 8.07L8.07 5.24L22.21 19.38L19.38 22.21L5.24 8.07ZM12.32 1L17.98 6.66L15.15 9.49L9.49 3.83L12.32 1ZM3.83 9.48L9.49 15.14L6.66 17.97L1 12.31L3.83 9.48Z" />
  </svg>
)
export const oGesture = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4.58997 6.89C5.28997 6.18 5.98997 5.54 6.29997 5.67C6.79997 5.87 6.29997 6.7 5.99997 7.19C5.74997 7.61 3.13997 11.08 3.13997 13.5C3.13997 14.78 3.61997 15.84 4.47997 16.48C5.22997 17.04 6.21997 17.21 7.11997 16.94C8.18997 16.63 9.06997 15.54 10.18 14.17C11.39 12.68 13.01 10.73 14.26 10.73C15.89 10.73 15.91 11.74 16.02 12.52C12.24 13.16 10.64 16.19 10.64 17.89C10.64 19.59 12.08 20.98 13.85 20.98C15.48 20.98 18.14 19.65 18.54 14.88H21V12.38H18.53C18.38 10.73 17.44 8.18 14.5 8.18C12.25 8.18 10.32 10.09 9.55997 11.02C8.97997 11.75 7.49997 13.5 7.26997 13.74C7.01997 14.04 6.58997 14.58 6.15997 14.58C5.70997 14.58 5.43997 13.75 5.79997 12.66C6.14997 11.57 7.19997 9.8 7.64997 9.14C8.42997 8 8.94997 7.22 8.94997 5.86C8.94997 3.69 7.30997 3 6.43997 3C5.11997 3 3.96997 4 3.71997 4.25C3.35997 4.61 3.05997 4.91 2.83997 5.18L4.58997 6.89ZM13.88 18.55C13.57 18.55 13.14 18.29 13.14 17.83C13.14 17.23 13.87 15.63 16.01 15.07C15.71 17.76 14.58 18.55 13.88 18.55Z" />
  </svg>
)
export const oGetApp = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13 5V11H14.17L12 13.17L9.83 11H11V5H13ZM15 3H9V9H5L12 16L19 9H15V3ZM19 18H5V20H19V18Z" />
  </svg>
)
export const oGif = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 9H13V15H11.5V9ZM9 9H6C5.4 9 5 9.5 5 10V14C5 14.5 5.4 15 6 15H9C9.6 15 10 14.5 10 14V12H8.5V13.5H6.5V10.5H10V10C10 9.5 9.6 9 9 9ZM19 10.5V9H14.5V15H16V13H18V11.5H16V10.5H19Z" />
  </svg>
)
export const oGolfCourse = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 2L17 5.92L11 8.98V18.03C13.84 18.19 16 19.01 16 20C16 21.1 13.31 22 10 22C6.69 22 4 21.1 4 20C4 19.26 5.21 18.62 7 18.27V20H9V2ZM21 19.5C21 20.3284 20.3284 21 19.5 21C18.6716 21 18 20.3284 18 19.5C18 18.6716 18.6716 18 19.5 18C20.3284 18 21 18.6716 21 19.5Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oGpsFixed = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM20.94 11C20.48 6.83 17.17 3.52 13 3.06V1H11V3.06C6.83 3.52 3.52 6.83 3.06 11H1V13H3.06C3.52 17.17 6.83 20.48 11 20.94V23H13V20.94C17.17 20.48 20.48 17.17 20.94 13H23V11H20.94ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z" />
  </svg>
)
export const oGpsNotFixed = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20.94 11C20.48 6.83 17.17 3.52 13 3.06V1H11V3.06C6.83 3.52 3.52 6.83 3.06 11H1V13H3.06C3.52 17.17 6.83 20.48 11 20.94V23H13V20.94C17.17 20.48 20.48 17.17 20.94 13H23V11H20.94ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z" />
  </svg>
)
export const oGpsOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20.94 11C20.48 6.83 17.17 3.52 13 3.06V1H11V3.06C10.02 3.17 9.09 3.44 8.23 3.84L9.76 5.37C10.46 5.13 11.22 5 12 5C15.87 5 19 8.13 19 12C19 12.79 18.87 13.54 18.63 14.24L20.16 15.77C20.56 14.91 20.83 13.98 20.94 13H23V11H20.94ZM3 4.27L5.04 6.31C3.97 7.62 3.26 9.23 3.06 11H1V13H3.06C3.52 17.17 6.83 20.48 11 20.94V23H13V20.94C14.77 20.74 16.38 20.03 17.69 18.96L19.73 21L21.14 19.59L4.41 2.86L3 4.27ZM16.27 17.54C15.09 18.45 13.61 19 12 19C8.13 19 5 15.87 5 12C5 10.39 5.55 8.91 6.46 7.73L16.27 17.54Z" />
  </svg>
)
export const oGrade = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 7.13L12.97 9.42L13.44 10.53L14.64 10.63L17.11 10.84L15.23 12.47L14.32 13.26L14.59 14.44L15.15 16.85L13.03 15.57L12 14.93L10.97 15.55L8.85 16.83L9.41 14.42L9.68 13.24L8.77 12.45L6.89 10.82L9.36 10.61L10.56 10.51L11.03 9.4L12 7.13ZM12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
  </svg>
)
export const oGradient = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 9H13V11H11V9ZM9 11H11V13H9V11ZM13 11H15V13H13V11ZM15 9H17V11H15V9ZM7 9H9V11H7V9ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 18H7V16H9V18ZM13 18H11V16H13V18ZM17 18H15V16H17V18ZM19 11H17V13H19V15H17V13H15V15H13V13H11V15H9V13H7V15H5V13H7V11H5V5H19V11Z" />
  </svg>
)
export const oGrain = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10 12C8.9 12 8 12.9 8 14C8 15.1 8.9 16 10 16C11.1 16 12 15.1 12 14C12 12.9 11.1 12 10 12ZM6 8C4.9 8 4 8.9 4 10C4 11.1 4.9 12 6 12C7.1 12 8 11.1 8 10C8 8.9 7.1 8 6 8ZM6 16C4.9 16 4 16.9 4 18C4 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM18 8C19.1 8 20 7.1 20 6C20 4.9 19.1 4 18 4C16.9 4 16 4.9 16 6C16 7.1 16.9 8 18 8ZM14 16C12.9 16 12 16.9 12 18C12 19.1 12.9 20 14 20C15.1 20 16 19.1 16 18C16 16.9 15.1 16 14 16ZM18 12C16.9 12 16 12.9 16 14C16 15.1 16.9 16 18 16C19.1 16 20 15.1 20 14C20 12.9 19.1 12 18 12ZM14 8C12.9 8 12 8.9 12 10C12 11.1 12.9 12 14 12C15.1 12 16 11.1 16 10C16 8.9 15.1 8 14 8ZM10 4C8.9 4 8 4.9 8 6C8 7.1 8.9 8 10 8C11.1 8 12 7.1 12 6C12 4.9 11.1 4 10 4Z" />
  </svg>
)
export const oGraphicEq = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 18H9V6H7V18ZM11 22H13V2H11V22ZM3 14H5V10H3V14ZM15 18H17V6H15V18ZM19 10V14H21V10H19Z" />
  </svg>
)
export const oGridOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 25"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M8 4.00014V4.89014L10 6.89014V4.00014H14V8.00014H11.11L13.11 10.0001H14V10.8901L16 12.8901V10.0001H20V14.0001H17.11L19.11 16.0001H20V16.8901L22 18.8901V4.00014C22 2.90014 21.1 2.00014 20 2.00014H5.11L7.11 4.00014H8ZM16 4.00014H20V8.00014H16V4.00014ZM1.41 1.14014L0 2.55014L2 4.55014V20.0001C2 21.1001 2.9 22.0001 4 22.0001H19.45L21.46 24.0101L22.87 22.6001L1.41 1.14014ZM10 12.5501L11.45 14.0001H10V12.5501ZM4 6.55014L5.45 8.00014H4V6.55014ZM8 20.0001H4V16.0001H8V20.0001ZM8 14.0001H4V10.0001H7.45L8 10.5501V14.0001ZM14 20.0001H10V16.0001H13.45L14 16.5501V20.0001ZM16 20.0001V18.5501L17.45 20.0001H16Z" />
  </svg>
)
export const oGridOn = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM8 20H4V16H8V20ZM8 14H4V10H8V14ZM8 8H4V4H8V8ZM14 20H10V16H14V20ZM14 14H10V10H14V14ZM14 8H10V4H14V8ZM20 20H16V16H20V20ZM20 14H16V10H20V14ZM20 8H16V4H20V8Z" />
  </svg>
)
export const oGroup = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9 13.75C6.66 13.75 2 14.92 2 17.25V19H16V17.25C16 14.92 11.34 13.75 9 13.75ZM4.34 17C5.18 16.42 7.21 15.75 9 15.75C10.79 15.75 12.82 16.42 13.66 17H4.34ZM9 12C10.93 12 12.5 10.43 12.5 8.5C12.5 6.57 10.93 5 9 5C7.07 5 5.5 6.57 5.5 8.5C5.5 10.43 7.07 12 9 12ZM9 7C9.83 7 10.5 7.67 10.5 8.5C10.5 9.33 9.83 10 9 10C8.17 10 7.5 9.33 7.5 8.5C7.5 7.67 8.17 7 9 7ZM16.04 13.81C17.2 14.65 18 15.77 18 17.25V19H22V17.25C22 15.23 18.5 14.08 16.04 13.81ZM15 12C16.93 12 18.5 10.43 18.5 8.5C18.5 6.57 16.93 5 15 5C14.46 5 13.96 5.13 13.5 5.35C14.13 6.24 14.5 7.33 14.5 8.5C14.5 9.67 14.13 10.76 13.5 11.65C13.96 11.87 14.46 12 15 12Z" />
  </svg>
)
export const oGroupAdd = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5 15V12H8V10H5V7H3V10H0V12H3V15H5ZM12 13.75C9.66 13.75 5 14.92 5 17.25V19H19V17.25C19 14.92 14.34 13.75 12 13.75ZM7.34 17C8.18 16.42 10.21 15.75 12 15.75C13.79 15.75 15.82 16.42 16.66 17H7.34ZM12 12C13.93 12 15.5 10.43 15.5 8.5C15.5 6.57 13.93 5 12 5C10.07 5 8.5 6.57 8.5 8.5C8.5 10.43 10.07 12 12 12ZM12 7C12.83 7 13.5 7.67 13.5 8.5C13.5 9.33 12.83 10 12 10C11.17 10 10.5 9.33 10.5 8.5C10.5 7.67 11.17 7 12 7ZM17 12C18.93 12 20.5 10.43 20.5 8.5C20.5 6.57 18.93 5 17 5C16.76 5 16.52 5.02 16.29 5.07C17.05 6.01 17.5 7.2 17.5 8.5C17.5 9.8 17.03 10.98 16.27 11.92C16.51 11.97 16.75 12 17 12ZM19.32 14.02C20.32 14.83 21 15.89 21 17.25V19H24V17.25C24 15.56 21.56 14.49 19.32 14.02Z" />
  </svg>
)
export const oGroupWork = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12ZM10 14C10 15.1046 9.10457 16 8 16C6.89543 16 6 15.1046 6 14C6 12.8954 6.89543 12 8 12C9.10457 12 10 12.8954 10 14ZM12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10ZM18 14C18 15.1046 17.1046 16 16 16C14.8954 16 14 15.1046 14 14C14 12.8954 14.8954 12 16 12C17.1046 12 18 12.8954 18 14Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oHd = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7.5 13H9.5V15H11V9H9.5V11.5H7.5V9H6V15H7.5V13ZM18 14V10C18 9.45 17.55 9 17 9H13V15H17C17.55 15 18 14.55 18 14ZM16.5 13.5H14.5V10.5H16.5V13.5Z" />
  </svg>
)
export const oHdrOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 15V13H18.6L19.5 15H21L20.1 12.9C20.6 12.6 21 12.1 21 11.5V10.5C21 9.69999 20.2999 8.99999 19.5 8.99999H16V13.86L17.14 15H17.5ZM17.5 10.5H19.5V11.5H17.5V10.5ZM13 10.5V10.86L14.5 12.36V10.5C14.5 9.69999 13.8 8.99999 13 8.99999H11.14L12.64 10.5H13ZM2.50995 2.48999L1.44995 3.54999L6.89995 8.99999H6.49995V11H4.49995V8.99999H2.99995V15H4.49995V12.5H6.49995V15H7.99995V10.1L9.49995 11.6V15H12.9L20.5 22.6L21.5599 21.54L2.50995 2.48999Z" />
  </svg>
)
export const oHdrOn = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 11.5V10.5C21 9.7 20.3 9 19.5 9H16V15H17.5V13H18.6L19.5 15H21L20.1 12.9C20.6 12.6 21 12.1 21 11.5ZM19.5 11.5H17.5V10.5H19.5V11.5ZM6.5 11H4.5V9H3V15H4.5V12.5H6.5V15H8V9H6.5V11ZM13 9H9.5V15H13C13.8 15 14.5 14.3 14.5 13.5V10.5C14.5 9.7 13.8 9 13 9ZM13 13.5H11V10.5H13V13.5Z" />
  </svg>
)
export const oHdrStrong = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 6C13.69 6 11 8.69 11 12C11 15.31 13.69 18 17 18C20.31 18 23 15.31 23 12C23 8.69 20.31 6 17 6ZM5 8C2.79 8 1 9.79 1 12C1 14.21 2.79 16 5 16C7.21 16 9 14.21 9 12C9 9.79 7.21 8 5 8ZM5 14C3.9 14 3 13.1 3 12C3 10.9 3.9 10 5 10C6.1 10 7 10.9 7 12C7 13.1 6.1 14 5 14Z" />
  </svg>
)
export const oHdrWeak = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5 8C2.79 8 1 9.79 1 12C1 14.21 2.79 16 5 16C7.21 16 9 14.21 9 12C9 9.79 7.21 8 5 8ZM17 6C13.69 6 11 8.69 11 12C11 15.31 13.69 18 17 18C20.31 18 23 15.31 23 12C23 8.69 20.31 6 17 6ZM17 16C14.79 16 13 14.21 13 12C13 9.79 14.79 8 17 8C19.21 8 21 9.79 21 12C21 14.21 19.21 16 17 16Z" />
  </svg>
)
export const oHeadset = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 14V17C19 17.55 18.55 18 18 18H17V14H19ZM7 14V18H6C5.45 18 5 17.55 5 17V14H7ZM12 1C7.03 1 3 5.03 3 10V17C3 18.66 4.34 20 6 20H9V12H5V10C5 6.13 8.13 3 12 3C15.87 3 19 6.13 19 10V12H15V20H18C19.66 20 21 18.66 21 17V10C21 5.03 16.97 1 12 1Z" />
  </svg>
)
export const oHeadsetMic = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 14V18H17V14H19ZM7 14V18H6C5.45 18 5 17.55 5 17V14H7ZM12 1C7.03 1 3 5.03 3 10V17C3 18.66 4.34 20 6 20H9V12H5V10C5 6.13 8.13 3 12 3C15.87 3 19 6.13 19 10V12H15V20H19V21H12V23H18C19.66 23 21 21.66 21 20V10C21 5.03 16.97 1 12 1Z" />
  </svg>
)
export const oHealing = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.73 12.0201L21.71 8.04006C22.1 7.65006 22.1 7.02006 21.71 6.63006L17.37 2.29006C16.98 1.90006 16.35 1.90006 15.96 2.29006L11.98 6.27006L8.00002 2.29006C7.80002 2.10006 7.55002 2.00006 7.29002 2.00006C7.04002 2.00006 6.78002 2.10006 6.59002 2.29006L2.25002 6.63006C1.86002 7.02006 1.86002 7.65006 2.25002 8.04006L6.23002 12.0201L2.25002 16.0001C1.86002 16.3901 1.86002 17.0201 2.25002 17.4101L6.59002 21.7501C6.98002 22.1401 7.61002 22.1401 8.00002 21.7501L11.98 17.7701L15.96 21.7501C16.16 21.9501 16.41 22.0401 16.67 22.0401C16.93 22.0401 17.18 21.9401 17.38 21.7501L21.72 17.4101C22.11 17.0201 22.11 16.3901 21.72 16.0001L17.73 12.0201ZM12 9.00006C12.55 9.00006 13 9.45006 13 10.0001C13 10.5501 12.55 11.0001 12 11.0001C11.45 11.0001 11 10.5501 11 10.0001C11 9.45006 11.45 9.00006 12 9.00006ZM7.29002 10.9601L3.66002 7.34006L7.29002 3.71006L10.91 7.33006L7.29002 10.9601ZM10 13.0001C9.45002 13.0001 9.00002 12.5501 9.00002 12.0001C9.00002 11.4501 9.45002 11.0001 10 11.0001C10.55 11.0001 11 11.4501 11 12.0001C11 12.5501 10.55 13.0001 10 13.0001ZM12 15.0001C11.45 15.0001 11 14.5501 11 14.0001C11 13.4501 11.45 13.0001 12 13.0001C12.55 13.0001 13 13.4501 13 14.0001C13 14.5501 12.55 15.0001 12 15.0001ZM14 11.0001C14.55 11.0001 15 11.4501 15 12.0001C15 12.5501 14.55 13.0001 14 13.0001C13.45 13.0001 13 12.5501 13 12.0001C13 11.4501 13.45 11.0001 14 11.0001ZM16.66 20.3401L13.03 16.7201L16.66 13.0901L20.28 16.7101L16.66 20.3401Z" />
  </svg>
)
export const oHearing = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 20C16.71 20 16.44 19.94 16.24 19.85C15.53 19.48 15.03 18.97 14.53 17.47C14.02 15.91 13.06 15.18 12.14 14.47C11.35 13.86 10.53 13.23 9.82 11.94C9.29 10.98 9 9.92997 9 8.99997C9 6.19997 11.2 3.99997 14 3.99997C16.8 3.99997 19 6.19997 19 8.99997H21C21 5.06997 17.93 1.99997 14 1.99997C10.07 1.99997 7 5.06997 7 8.99997C7 10.26 7.38 11.65 8.07 12.9C8.98 14.55 10.05 15.38 10.92 16.05C11.73 16.67 12.31 17.12 12.63 18.1C13.23 19.92 14 20.94 15.36 21.65C15.87 21.88 16.43 22 17 22C19.21 22 21 20.21 21 18H19C19 19.1 18.1 20 17 20ZM7.64 2.63997L6.22 1.21997C4.23 3.20997 3 5.95997 3 8.99997C3 12.04 4.23 14.79 6.22 16.78L7.63 15.37C6.01 13.74 5 11.49 5 8.99997C5 6.50997 6.01 4.25997 7.64 2.63997ZM11.5 8.99997C11.5 10.38 12.62 11.5 14 11.5C15.38 11.5 16.5 10.38 16.5 8.99997C16.5 7.61997 15.38 6.49997 14 6.49997C12.62 6.49997 11.5 7.61997 11.5 8.99997Z" />
  </svg>
)
export const oHelp = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19H11V17H13V19ZM15.07 11.25L14.17 12.17C13.45 12.9 13 13.5 13 15H11V14.5C11 13.4 11.45 12.4 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9H8C8 6.79 9.79 5 12 5C14.21 5 16 6.79 16 9C16 9.88 15.64 10.68 15.07 11.25Z" />
  </svg>
)
export const oHelpOutline = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 18H13V16H11V18ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10H10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 12 11 11.75 11 15H13C13 12.75 16 12.5 16 10C16 7.79 14.21 6 12 6Z" />
  </svg>
)
export const oHighQuality = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 4H5C3.89 4 3 4.9 3 6V18C3 19.1 3.89 20 5 20H19C20.1 20 21 19.1 21 18V6C21 4.9 20.1 4 19 4ZM19 18H5V6H19V18ZM7.5 13H9.5V15H11V9H9.5V11.5H7.5V9H6V15H7.5V13ZM14 15H14.75V16.5H16.25V15H17C17.55 15 18 14.55 18 14V10C18 9.45 17.55 9 17 9H14C13.45 9 13 9.45 13 10V14C13 14.55 13.45 15 14 15ZM14.5 10.5H16.5V13.5H14.5V10.5Z" />
  </svg>
)
export const oHighlight = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5.99995 14L8.99995 17V22H15V17L18 14V9H5.99995V14ZM7.99995 11H16V13.17L13 16.17V20H11V16.17L7.99995 13.17V11ZM11 2H13V5H11V2ZM3.50195 5.874L4.91595 4.46L7.03795 6.58L5.62395 7.995L3.50195 5.874ZM16.96 6.582L19.083 4.462L20.496 5.878L18.373 7.998L16.96 6.582Z" />
  </svg>
)
export const oHighlightOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14.59 8L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8ZM12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
  </svg>
)
export const oHistory = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 19.99 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.25 15.52L17.02 14.24L13.5 12.15V8H12Z" />
  </svg>
)
export const oHome = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z" />
  </svg>
)
export const oHorizontalSplit = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 15V17H5V15H19ZM21 5H3V7H21V5ZM21 9H3V11H21V9ZM21 13H3V19H21V13Z" />
  </svg>
)
export const oHotTub = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.33 11.28C10.56 11.54 10.84 11.78 11.15 12H22V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V12H5V11.25C5 10.01 6.01 9 7.25 9H7.28C7.62 9 7.95 9.09 8.24 9.23C8.5 9.35 8.74 9.52 8.93 9.73L10.33 11.28ZM5 20H7V14H5V20ZM9 20H11V14H9V20ZM13 14V20H15V14H13ZM17 14V20H19V14H17ZM18.09 9.41C18.24 8.62 17.99 7.83 17.42 7.21L17.35 7.15C16.32 6.14 15.85 4.79 16.05 3.43L16.11 3H18L17.91 3.59C17.76 4.38 18.01 5.17 18.58 5.79L18.65 5.86C19.68 6.86 20.16 8.21 19.95 9.57L19.89 10H17.98L18.09 9.41ZM14.09 9.41C14.24 8.62 13.99 7.83 13.42 7.21L13.35 7.15C12.32 6.14 11.85 4.79 12.05 3.43L12.11 3H14L13.91 3.59C13.76 4.38 14.01 5.17 14.58 5.79L14.65 5.86C15.68 6.86 16.16 8.21 15.95 9.57L15.89 10H13.98L14.09 9.41ZM9 6C9 7.10457 8.10457 8 7 8C5.89543 8 5 7.10457 5 6C5 4.89543 5.89543 4 7 4C8.10457 4 9 4.89543 9 6Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oHotel = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 14C8.66 14 10 12.66 10 11C10 9.34 8.66 8 7 8C5.34 8 4 9.34 4 11C4 12.66 5.34 14 7 14ZM7 10C7.55 10 8 10.45 8 11C8 11.55 7.55 12 7 12C6.45 12 6 11.55 6 11C6 10.45 6.45 10 7 10ZM19 7H11V15H3V5H1V20H3V17H21V20H23V11C23 8.79 21.21 7 19 7ZM21 15H13V9H19C20.1 9 21 9.9 21 11V15Z" />
  </svg>
)
export const oHourglassEmpty = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6 2V8H6.01L6 8.01L10 12L6 16L6.01 16.01H6V22H18V16.01H17.99L18 16L14 12L18 8.01L17.99 8H18V2H6ZM16 16.5V20H8V16.5L12 12.5L16 16.5ZM12 11.5L8 7.5V4H16V7.5L12 11.5Z" />
  </svg>
)
export const oHourglassFull = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6 2V8H6.01L6 8.01L10 12L6 16L6.01 16.01H6V22H18V16.01H17.99L18 16L14 12L18 8.01L17.99 8H18V2H6Z" />
  </svg>
)
export const oHowToReg = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 12C13.21 12 15 10.21 15 8C15 5.79 13.21 4 11 4C8.79 4 7 5.79 7 8C7 10.21 8.79 12 11 12ZM11 6C12.1 6 13 6.9 13 8C13 9.1 12.1 10 11 10C9.9 10 9 9.1 9 8C9 6.9 9.9 6 11 6ZM5 18C5.2 17.37 7.57 16.32 9.96 16.06L12 14.06C11.61 14.02 11.32 14 11 14C8.33 14 3 15.34 3 18V20H12L10 18H5ZM20.6 12.5L15.47 17.67L13.4 15.59L12 17L15.47 20.5L22 13.91L20.6 12.5Z" />
  </svg>
)
export const oHowToVote = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13H17.32L15.32 15H17.23L19 17H5L6.78 15H8.83L6.83 13H6L3 16V20C3 21.1 3.89 22 4.99 22H19C20.1 22 21 21.11 21 20V16L18 13ZM19 20H5V19H19V20ZM11.34 15.02C11.73 15.41 12.36 15.41 12.75 15.02L19.11 8.66004C19.5 8.27004 19.5 7.64004 19.11 7.25004L14.16 2.30004C13.78 1.90004 13.15 1.90004 12.76 2.29004L6.39 8.66004C6 9.05004 6 9.68004 6.39 10.07L11.34 15.02ZM13.46 4.41004L17 7.95004L12.05 12.9L8.51 9.36004L13.46 4.41004Z" />
  </svg>
)
export const oHttp = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 11H2.5V9H1V15H2.5V12.5H4.5V15H6V9H4.5V11ZM7 10.5H8.5V15H10V10.5H11.5V9H7V10.5ZM12.5 10.5H14V15H15.5V10.5H17V9H12.5V10.5ZM21.5 9H18V15H19.5V13H21.5C22.3 13 23 12.3 23 11.5V10.5C23 9.7 22.3 9 21.5 9ZM21.5 11.5H19.5V10.5H21.5V11.5Z" />
  </svg>
)
export const oHttps = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM9 6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9V6ZM18 20H6V10H18V20ZM12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17Z" />
  </svg>
)
export const oImage = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM14.14 11.86L11.14 15.73L9 13.14L6 17H18L14.14 11.86Z" />
  </svg>
)
export const oImageAspectRatio = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16 10H14V12H16V10ZM16 14H14V16H16V14ZM8 10H6V12H8V10ZM12 10H10V12H12V10ZM20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18Z" />
  </svg>
)
export const oImageSearch = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13V20H4V6H9.02C9.07 5.29 9.24 4.62 9.5 4H4C2.9 4 2 4.9 2 6V20C2 21.1 2.9 22 4 22H18C19.1 22 20 21.1 20 20V15L18 13ZM16.5 18H5.5L8.25 14.47L10.21 16.83L12.96 13.29L16.5 18ZM19.3 8.89C19.74 8.19 20 7.38 20 6.5C20 4.01 17.99 2 15.5 2C13.01 2 11 4.01 11 6.5C11 8.99 13.01 11 15.49 11C16.37 11 17.19 10.74 17.88 10.3L21 13.42L22.42 12L19.3 8.89ZM15.5 9C14.12 9 13 7.88 13 6.5C13 5.12 14.12 4 15.5 4C16.88 4 18 5.12 18 6.5C18 7.88 16.88 9 15.5 9Z" />
  </svg>
)
export const oImportContacts = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 5C19.89 4.65 18.67 4.5 17.5 4.5C15.55 4.5 13.45 4.9 12 6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5ZM21 18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V8C13.35 7.15 15.8 6.5 17.5 6.5C18.7 6.5 19.9 6.65 21 7V18.5Z" />
  </svg>
)
export const oImportExport = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9 3L5 6.99H8V14H10V6.99H13L9 3ZM16 17.01V10H14V17.01H11L15 21L19 17.01H16Z" />
  </svg>
)
export const oImportantDevices = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M23 11.01L18 11C17.45 11 17 11.45 17 12V21C17 21.55 17.45 22 18 22H23C23.55 22 24 21.55 24 21V12C24 11.45 23.55 11.01 23 11.01ZM23 20H18V13H23V20ZM20 2H2C0.89 2 0 2.89 0 4V16C0 17.1 0.89 18 2 18H9V20H7V22H15V20H13V18H15V16H2V4H20V9H22V4C22 2.89 21.1 2 20 2ZM11.97 9L11 6L10.03 9H7L9.47 10.76L8.53 13.67L11 11.87L13.47 13.67L12.53 10.76L15 9H11.97Z" />
  </svg>
)
export const oInbox = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V16H8.56C9.25 17.19 10.53 18 12.01 18C13.49 18 14.76 17.19 15.46 16H19V19ZM19 14H14.01C14.01 15.1 13.11 16 12.01 16C10.91 16 10.01 15.1 10.01 14H5V5H19V14Z" />
  </svg>
)
export const oIndeterminateCheckBox = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 11H17V13H7V11Z" />
  </svg>
)
export const oInfo = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
  </svg>
)
export const oInput = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3.01001H3C1.9 3.01001 1 3.91001 1 5.01001V9.00001H3V4.99001H21V19.02H3V15H1V19.01C1 20.11 1.9 20.99 3 20.99H21C22.1 20.99 23 20.11 23 19.01V5.01001C23 3.90001 22.1 3.01001 21 3.01001ZM11 16L15 12L11 8.00001V11H1V13H11V16ZM21 3.01001H3C1.9 3.01001 1 3.91001 1 5.01001V9.00001H3V4.99001H21V19.02H3V15H1V19.01C1 20.11 1.9 20.99 3 20.99H21C22.1 20.99 23 20.11 23 19.01V5.01001C23 3.90001 22.1 3.01001 21 3.01001ZM11 16L15 12L11 8.00001V11H1V13H11V16Z" />
  </svg>
)
export const oInsertChart = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H9V17H7V10ZM11 7H13V17H11V7ZM15 13H17V17H15V13Z" />
  </svg>
)
export const oInsertChartOutlined = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17ZM19 19H5V5H19V19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" />
  </svg>
)
export const oInsertComment = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4V17.17L18.83 16H4V4H20ZM20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22V4C22 2.9 21.1 2 20 2ZM18 12H6V14H18V12ZM18 9H6V11H18V9ZM18 6H6V8H18V6Z" />
  </svg>
)
export const oInsertDriveFile = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM6 20V4H13V9H18V20H6Z" />
  </svg>
)
export const oInsertEmoticon = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM15.5 11C16.33 11 17 10.33 17 9.5C17 8.67 16.33 8 15.5 8C14.67 8 14 8.67 14 9.5C14 10.33 14.67 11 15.5 11ZM8.5 11C9.33 11 10 10.33 10 9.5C10 8.67 9.33 8 8.5 8C7.67 8 7 8.67 7 9.5C7 10.33 7.67 11 8.5 11ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" />
  </svg>
)
export const oInsertInvitation = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V9H19V19ZM19 7H5V5H19V7ZM17 12H12V17H17V12Z" />
  </svg>
)
export const oInsertLink = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3.9 12C3.9 10.29 5.29 8.9 7 8.9H11V7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H11V15.1H7C5.29 15.1 3.9 13.71 3.9 12ZM8 13H16V11H8V13ZM17 7H13V8.9H17C18.71 8.9 20.1 10.29 20.1 12C20.1 13.71 18.71 15.1 17 15.1H13V17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7Z" />
  </svg>
)
export const oInsertPhoto = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM14.14 11.86L11.14 15.73L9 13.14L6 17H18L14.14 11.86Z" />
  </svg>
)
export const oInvertColors = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.66 7.93002L12 2.27002L6.34 7.93002C3.22 11.05 3.22 16.12 6.34 19.24C7.9 20.8 9.95 21.58 12 21.58C14.05 21.58 16.1 20.8 17.66 19.24C20.78 16.12 20.78 11.05 17.66 7.93002ZM12 19.59C10.4 19.59 8.89 18.97 7.76 17.83C6.62 16.69 6 15.19 6 13.59C6 11.99 6.62 10.48 7.76 9.35002L12 5.10002V19.59Z" />
  </svg>
)
export const oInvertColorsOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5.10002V9.15002L19.4 16.55C20.55 13.67 19.99 10.27 17.65 7.94002L12 2.27002L8.55999 5.71002L9.96999 7.12002L12 5.10002ZM4.39999 4.37002L2.98999 5.78002L5.76999 8.56002C3.22999 11.7 3.41999 16.31 6.33999 19.24C7.89999 20.8 9.94999 21.58 12 21.58C13.78 21.58 15.56 20.99 17.02 19.81L19.72 22.51L21.13 21.1L4.39999 4.37002ZM12 19.59C10.4 19.59 8.88999 18.97 7.75999 17.83C6.61999 16.69 5.99999 15.19 5.99999 13.59C5.99999 12.27 6.42999 11.03 7.20999 10L12 14.79V19.59Z" />
  </svg>
)
export const oIso = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM5.5 7.5H7.5V5.5H9V7.5H11V9H9V11H7.5V9H5.5V7.5ZM19 19H5L19 5V19ZM17 17V15.5H12V17H17Z" />
  </svg>
)
export const oKeyboard = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 7V17H4V7H20ZM20 5H4C2.9 5 2.01 5.9 2.01 7L2 17C2 18.1 2.9 19 4 19H20C21.1 19 22 18.1 22 17V7C22 5.9 21.1 5 20 5ZM11 8H13V10H11V8ZM11 11H13V13H11V11ZM8 8H10V10H8V8ZM8 11H10V13H8V11ZM5 11H7V13H5V11ZM5 8H7V10H5V8ZM8 14H16V16H8V14ZM14 11H16V13H14V11ZM14 8H16V10H14V8ZM17 11H19V13H17V11ZM17 8H19V10H17V8Z" />
  </svg>
)
export const oKeyboardArrowDown = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z" />
  </svg>
)
export const oKeyboardArrowLeft = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" />
  </svg>
)
export const oKeyboardArrowRight = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M8.58997 16.59L13.17 12L8.58997 7.41L9.99997 6L16 12L9.99997 18L8.58997 16.59Z" />
  </svg>
)
export const oKeyboardArrowUp = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z" />
  </svg>
)
export const oKeyboardBackspace = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.59L6.83 13H21V11Z" />
  </svg>
)
export const oKeyboardCapslock = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8.40984L16.59 12.9998L18 11.5898L12 5.58984L6 11.5898L7.41 12.9998L12 8.40984ZM6 17.9998H18V15.9998H6V17.9998Z" />
  </svg>
)
export const oKeyboardHide = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 3H4C2.9 3 2.01 3.9 2.01 5L2 15C2 16.1 2.9 17 4 17H20C21.1 17 22 16.1 22 15V5C22 3.9 21.1 3 20 3ZM20 15H4V5H20V15ZM11 6H13V8H11V6ZM11 9H13V11H11V9ZM8 6H10V8H8V6ZM8 9H10V11H8V9ZM5 9H7V11H5V9ZM5 6H7V8H5V6ZM8 12H16V14H8V12ZM14 9H16V11H14V9ZM14 6H16V8H14V6ZM17 9H19V11H17V9ZM17 6H19V8H17V6ZM12 23L16 19H8L12 23Z" />
  </svg>
)
export const oKeyboardReturn = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 7V11H5.83L9.41 7.41L8 6L2 12L8 18L9.41 16.59L5.83 13H21V7H19Z" />
  </svg>
)
export const oKeyboardTab = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.59 7.41L15.17 11H1V13H15.17L11.58 16.59L13 18L19 12L13 6L11.59 7.41ZM20 6V18H22V6H20Z" />
  </svg>
)
export const oKeyboardVoice = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15C13.66 15 14.99 13.66 14.99 12L15 6C15 4.34 13.66 3 12 3C10.34 3 9 4.34 9 6V12C9 13.66 10.34 15 12 15ZM10.8 5.9C10.8 5.24 11.34 4.7 12 4.7C12.66 4.7 13.2 5.24 13.2 5.9L13.19 12.1C13.19 12.76 12.66 13.3 12 13.3C11.34 13.3 10.8 12.76 10.8 12.1V5.9ZM17.3 12C17.3 15 14.76 17.1 12 17.1C9.24 17.1 6.7 15 6.7 12H5C5 15.41 7.72 18.23 11 18.72V22H13V18.72C16.28 18.24 19 15.42 19 12H17.3Z" />
  </svg>
)
export const oKitchen = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5H10V8H8V5ZM8 12H10V17H8V12ZM18 2.01L6 2C4.9 2 4 2.89 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.89 19.1 2.01 18 2.01ZM18 20H6V10.98H18V20ZM18 9H6V4H18V9Z" />
  </svg>
)
export const oLabel = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7V17C3 18.1 3.9 18.99 5 18.99L16 19C16.67 19 17.27 18.67 17.63 18.16L22 12L17.63 5.84ZM16 17H5V7H16L19.55 12L16 17Z" />
  </svg>
)
export const oLabelImportant = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 18.99H15C15.67 18.99 16.27 18.67 16.63 18.16L21 12L16.63 5.84C16.27 5.33 15.67 5 15 5H4L9 12L4 18.99Z" />
  </svg>
)
export const oLabelOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16 7.00012L19.55 12.0001L17.92 14.2901L19.35 15.7201L22 12.0001L17.63 5.84012C17.27 5.33012 16.67 5.00012 16 5.00012L8.63 5.01012L10.63 7.00012H16ZM2 4.03012L3.58 5.61012C3.22 5.96012 3 6.46012 3 7.00012V17.0001C3 18.1001 3.9 18.9901 5 18.9901L16 19.0001C16.28 19.0001 16.55 18.9301 16.79 18.8201L18.97 21.0001L20.38 19.5901L3.41 2.62012L2 4.03012ZM14.97 17.0001H5V7.03012L14.97 17.0001Z" />
  </svg>
)
export const oLandscape = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14 6L9.78 11.63L11.03 13.3L14 9.33L19 16H10.54L6.53 10.63L1 18H23L14 6ZM5 16L6.52 13.97L8.04 16H5Z" />
  </svg>
)
export const oLanguage = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" />
  </svg>
)
export const oLaptop = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 18C21.1 18 22 17.1 22 16V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V16C2 17.1 2.9 18 4 18H0V20H24V18H20ZM4 6H20V16H4V6Z" />
  </svg>
)
export const oLaptopChromebook = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 18V3H2V18H0V20H24V18H22ZM14 18H10V17H14V18ZM20 15H4V5H20V15Z" />
  </svg>
)
export const oLaptopMac = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 18C21.1 18 21.99 17.1 21.99 16L22 5C22 3.9 21.1 3 20 3H4C2.9 3 2 3.9 2 5V16C2 17.1 2.9 18 4 18H0C0 19.1 0.9 20 2 20H22C23.1 20 24 19.1 24 18H20ZM4 5H20V16H4V5ZM12 19C11.45 19 11 18.55 11 18C11 17.45 11.45 17 12 17C12.55 17 13 17.45 13 18C13 18.55 12.55 19 12 19Z" />
  </svg>
)
export const oLaptopWindows = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 18V17C21.1 17 21.99 16.1 21.99 15L22 5C22 3.9 21.1 3 20 3H4C2.9 3 2 3.9 2 5V15C2 16.1 2.9 17 4 17V18H0V20H24V18H20ZM4 5H20V15H4V5Z" />
  </svg>
)
export const oLastPage = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5.58997 7.41L10.18 12L5.58997 16.59L6.99997 18L13 12L6.99997 6L5.58997 7.41ZM16 6H18V18H16V6Z" />
  </svg>
)
export const oLaunch = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19ZM14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3H14Z" />
  </svg>
)
export const oLayers = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.99 18.54L4.62 12.81L3 14.07L12 21.07L21 14.07L19.37 12.8L11.99 18.54ZM12 16L19.36 10.27L21 9L12 2L3 9L4.63 10.27L12 16ZM12 4.53L17.74 9L12 13.47L6.26 9L12 4.53Z" />
  </svg>
)
export const oLayersClear = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4.52986L17.74 8.99986L15.85 10.4699L17.28 11.8899L21 8.99986L12 1.99986L9.41 4.01986L10.83 5.43986L12 4.52986ZM21 14.0699L19.37 12.7999L18.7 13.3199L20.13 14.7499L21 14.0699ZM3.41 0.859863L2 2.26986L6.22 6.48986L3 8.99986L12 15.9999L14.1 14.3699L15.52 15.7899L11.99 18.5399L4.62 12.8099L3 14.0699L12 21.0699L16.95 17.2199L20.73 20.9999L22.14 19.5899L3.41 0.859863ZM12 13.4699L6.26 8.99986L7.65 7.91986L12.67 12.9399L12 13.4699Z" />
  </svg>
)
export const oLeakAdd = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3H3V6C4.66 6 6 4.66 6 3ZM14 3H12C12 7.97 7.97 12 3 12V14C9.08 14 14 9.07 14 3ZM10 3H8C8 5.76 5.76 8 3 8V10C6.87 10 10 6.87 10 3ZM10 21H12C12 16.03 16.03 12 21 12V10C14.93 10 10 14.93 10 21ZM18 21H21V18C19.34 18 18 19.34 18 21ZM14 21H16C16 18.24 18.24 16 21 16V14C17.13 14 14 17.13 14 21Z" />
  </svg>
)
export const oLeakRemove = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2.99986H12C12 4.34986 11.69 5.62986 11.16 6.76986L12.65 8.25986C13.51 6.69986 14 4.90986 14 2.99986ZM21 11.9999V9.99986C19.09 9.99986 17.3 10.4899 15.73 11.3499L17.22 12.8399C18.37 12.3099 19.65 11.9999 21 11.9999ZM21 15.9999V13.9999C20.21 13.9999 19.46 14.1299 18.76 14.3699L20.44 16.0499C20.63 16.0399 20.81 15.9999 21 15.9999ZM10 2.99986H8C8 3.18986 7.96 3.36986 7.94 3.55986L9.62 5.23986C9.87 4.53986 10 3.77986 10 2.99986ZM4.41 2.85986L3 4.26986L5.84 7.10986C5.03 7.66986 4.06 7.99986 3 7.99986V9.99986C4.61 9.99986 6.09 9.44986 7.27 8.53986L8.7 9.96986C7.14 11.2399 5.16 11.9999 3 11.9999V13.9999C5.72 13.9999 8.2 13.0099 10.11 11.3799L12.62 13.8899C10.99 15.8099 10 18.2899 10 20.9999H12C12 18.8399 12.76 16.8599 14.03 15.2999L15.46 16.7299C14.55 17.9099 14 19.3899 14 20.9999H16C16 19.9399 16.33 18.9699 16.89 18.1599L19.73 20.9999L21.14 19.5899L4.41 2.85986Z" />
  </svg>
)
export const oLens = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" />
  </svg>
)
export const oLibraryAdd = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16ZM13 14H15V11H18V9H15V6H13V9H10V11H13V14Z" />
  </svg>
)
export const oLibraryBooks = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16ZM10 9H18V11H10V9ZM10 12H14V14H10V12ZM10 6H18V8H10V6Z" />
  </svg>
)
export const oLibraryMusic = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16ZM12.5 15C13.88 15 15 13.88 15 12.5V7H18V5H14V10.51C13.58 10.19 13.07 10 12.5 10C11.12 10 10 11.12 10 12.5C10 13.88 11.12 15 12.5 15ZM4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6Z" />
  </svg>
)
export const oLineStyle = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 16H8V14H3V16ZM9.5 16H14.5V14H9.5V16ZM16 16H21V14H16V16ZM3 20H5V18H3V20ZM7 20H9V18H7V20ZM11 20H13V18H11V20ZM15 20H17V18H15V20ZM19 20H21V18H19V20ZM3 12H11V10H3V12ZM13 12H21V10H13V12ZM3 4V8H21V4H3Z" />
  </svg>
)
export const oLineWeight = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17H21V15H3V17ZM3 20H21V19H3V20ZM3 13H21V10H3V13ZM3 4V8H21V4H3Z" />
  </svg>
)
export const oLinearScale = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.5 9.5C18.47 9.5 17.6 10.12 17.21 11H14.29C13.9 10.12 13.03 9.5 12 9.5C10.97 9.5 10.1 10.12 9.71 11H6.79C6.4 10.12 5.53 9.5 4.5 9.5C3.12 9.5 2 10.62 2 12C2 13.38 3.12 14.5 4.5 14.5C5.53 14.5 6.4 13.88 6.79 13H9.71C10.1 13.88 10.97 14.5 12 14.5C13.03 14.5 13.9 13.88 14.29 13H17.21C17.6 13.88 18.47 14.5 19.5 14.5C20.88 14.5 22 13.38 22 12C22 10.62 20.88 9.5 19.5 9.5Z" />
  </svg>
)
export const oLink = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 7H13V9H17C18.65 9 20 10.35 20 12C20 13.65 18.65 15 17 15H13V17H17C19.76 17 22 14.76 22 12C22 9.24 19.76 7 17 7ZM11 15H7C5.35 15 4 13.65 4 12C4 10.35 5.35 9 7 9H11V7H7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17H11V15ZM8 11H16V13H8V11Z" />
  </svg>
)
export const oLinkOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14.39 10.9999L16 12.6099V10.9999H14.39ZM17 6.99986H13V8.89986H17C18.71 8.89986 20.1 10.2899 20.1 11.9999C20.1 13.2699 19.33 14.3699 18.23 14.8399L19.63 16.2399C21.05 15.3599 22 13.7899 22 11.9999C22 9.23986 19.76 6.99986 17 6.99986ZM2 4.26986L5.11 7.37986C3.29 8.11986 2 9.90986 2 11.9999C2 14.7599 4.24 16.9999 7 16.9999H11V15.0999H7C5.29 15.0999 3.9 13.7099 3.9 11.9999C3.9 10.4099 5.11 9.09986 6.66 8.92986L8.73 10.9999H8V12.9999H10.73L13 15.2699V16.9999H14.73L18.74 21.0099L20.15 19.5999L3.41 2.85986L2 4.26986Z" />
  </svg>
)
export const oLinkedCamera = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 9V20H4V8H8.05L9.88 6H15V4H9L7.17 6H4C2.9 6 2 6.9 2 8V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V9H20ZM20.67 7.99H22C21.99 4.68 19.31 2 16 2V3.33C18.58 3.33 20.66 5.41 20.67 7.99ZM18 7.99H19.33C19.32 6.15 17.84 4.67 16 4.67V6C17.11 6 17.99 6.89 18 7.99ZM7 14C7 16.76 9.24 19 12 19C14.76 19 17 16.76 17 14C17 11.24 14.76 9 12 9C9.24 9 7 11.24 7 14ZM15 14C15 15.65 13.65 17 12 17C10.35 17 9 15.65 9 14C9 12.35 10.35 11 12 11C13.65 11 15 12.34 15 14Z" />
  </svg>
)
export const oList = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7ZM3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7Z" />
  </svg>
)
export const oListAlt = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 7H17V9H11V7ZM11 11H17V13H11V11ZM11 15H17V17H11V15ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15ZM20.1 3H3.9C3.4 3 3 3.4 3 3.9V20.1C3 20.5 3.4 21 3.9 21H20.1C20.5 21 21 20.5 21 20.1V3.9C21 3.4 20.5 3 20.1 3ZM19 19H5V5H19V19Z" />
  </svg>
)
export const oLiveHelp = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 2H5C3.89 2 3 2.9 3 4V18C3 19.1 3.89 20 5 20H9L12 23L15 20H19C20.1 20 21 19.1 21 18V4C21 2.9 20.1 2 19 2ZM19 18H14.17L13.58 18.59L12 20.17L10.41 18.58L9.83 18H5V4H19V18ZM11 15H13V17H11V15ZM12 7C13.1 7 14 7.9 14 9C14 11 11 10.75 11 14H13C13 11.75 16 11.5 16 9C16 6.79 14.21 5 12 5C9.79 5 8 6.79 8 9H10C10 7.9 10.9 7 12 7Z" />
  </svg>
)
export const oLiveTv = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9 10V18L16 14L9 10ZM21 6H13.42L16.71 2.71L16 2L12 6H11.97L7.97 2L7.28 2.71L10.56 6H3C1.9 6 1 6.9 1 8V20C1 21.1 1.9 22 3 22H21C22.1 22 23 21.1 23 20V8C23 6.9 22.1 6 21 6ZM21 20H3V8H21V20Z" />
  </svg>
)
export const oLocalActivity = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 10V6C22 4.9 21.1 4 20 4H4C2.9 4 2.01 4.9 2.01 6V10C3.11 10 4 10.9 4 12C4 13.1 3.11 14 2 14V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V14C20.9 14 20 13.1 20 12C20 10.9 20.9 10 22 10ZM20 8.54C18.81 9.23 18 10.53 18 12C18 13.47 18.81 14.77 20 15.46V18H4V15.46C5.19 14.77 6 13.47 6 12C6 10.52 5.2 9.23 4.01 8.54L4 6H20V8.54ZM9.07 16L12 14.12L14.93 16L14.04 12.64L16.73 10.44L13.26 10.23L12 7L10.73 10.22L7.26 10.43L9.95 12.63L9.07 16Z" />
  </svg>
)
export const oLocalAirport = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" />
  </svg>
)
export const oLocalAtm = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 17H13V16H14C14.55 16 15 15.55 15 15V12C15 11.45 14.55 11 14 11H11V10H15V8H13V7H11V8H10C9.45 8 9 8.45 9 9V12C9 12.55 9.45 13 10 13H13V14H9V16H11V17ZM20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V6H20V18Z" />
  </svg>
)
export const oLocalBar = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14.77 9L12 12.11L9.23 9H14.77ZM21 3H3V5L11 14V19H6V21H18V19H13V14L21 5V3ZM7.43 7L5.66 5H18.35L16.57 7H7.43Z" />
  </svg>
)
export const oLocalCafe = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16 5V13C16 14.1 15.1 15 14 15H8C6.9 15 6 14.1 6 13V5H16ZM20 3H4V13C4 15.21 5.79 17 8 17H14C16.21 17 18 15.21 18 13V10H20C21.11 10 22 9.11 22 8V5C22 3.89 21.11 3 20 3ZM18 8V5H20V8H18ZM20 19H2V21H20V19Z" />
  </svg>
)
export const oLocalCarWash = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17 5.00005C17.83 5.00005 18.5 4.33005 18.5 3.50005C18.5 2.50005 17 0.800049 17 0.800049C17 0.800049 15.5 2.50005 15.5 3.50005C15.5 4.33005 16.17 5.00005 17 5.00005ZM12 5.00005C12.83 5.00005 13.5 4.33005 13.5 3.50005C13.5 2.50005 12 0.800049 12 0.800049C12 0.800049 10.5 2.50005 10.5 3.50005C10.5 4.33005 11.17 5.00005 12 5.00005ZM7 5.00005C7.83 5.00005 8.5 4.33005 8.5 3.50005C8.5 2.50005 7 0.800049 7 0.800049C7 0.800049 5.5 2.50005 5.5 3.50005C5.5 4.33005 6.17 5.00005 7 5.00005ZM18.92 8.01005C18.72 7.42005 18.16 7.00005 17.5 7.00005H6.5C5.84 7.00005 5.29 7.42005 5.08 8.01005L3 14V22C3 22.55 3.45 23 4 23H5C5.55 23 6 22.55 6 22V21H18V22C18 22.55 18.45 23 19 23H20C20.55 23 21 22.55 21 22V14L18.92 8.01005ZM6.85 9.00005H17.14L18.18 12H5.81L6.85 9.00005ZM5 19V14.34L5.12 14H18.89L19 14.34V19H5ZM7.5 18C8.32843 18 9 17.3284 9 16.5C9 15.6716 8.32843 15 7.5 15C6.67157 15 6 15.6716 6 16.5C6 17.3284 6.67157 18 7.5 18ZM18 16.5C18 17.3284 17.3284 18 16.5 18C15.6716 18 15 17.3284 15 16.5C15 15.6716 15.6716 15 16.5 15C17.3284 15 18 15.6716 18 16.5Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oLocalConvenienceStore = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 7V4H5V7H2V20H10V16H14V20H22V7H19ZM20 18H16V14H8V18H4V9H7V6H17V9H20V18ZM8 8H10V9H8V12H11V11H9V10H11V7H8V8ZM15 9H14V7H13V10H15V12H16V7H15V9Z" />
  </svg>
)
export const oLocalDining = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M8.09999 13.34L10.93 10.51L3.90999 3.49996C2.34999 5.05996 2.34999 7.58996 3.90999 9.15996L8.09999 13.34ZM14.88 11.53C16.41 12.24 18.56 11.74 20.15 10.15C22.06 8.23996 22.43 5.49996 20.96 4.02996C19.5 2.56996 16.76 2.92996 14.84 4.83996C13.25 6.42996 12.75 8.57996 13.46 10.11L3.69999 19.87L5.10999 21.28L12 14.41L18.88 21.29L20.29 19.88L13.41 13L14.88 11.53Z" />
  </svg>
)
export const oLocalDrink = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 2L5.01 20.23C5.13 21.23 5.97 22 7 22H17C18.03 22 18.87 21.23 18.99 20.23L21 2H3ZM17 20L7 20.01L5.89 10H18.1L17 20ZM18.33 8H5.67L5.23 4H18.76L18.33 8ZM12 19C13.66 19 15 17.66 15 16C15 14 12 10.6 12 10.6C12 10.6 9 14 9 16C9 17.66 10.34 19 12 19ZM12 13.91C12.59 14.82 13 15.64 13 16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16C11 15.63 11.41 14.81 12 13.91Z" />
  </svg>
)
export const oLocalFlorist = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M8.66 13.07C8.81 13.07 8.95 13.06 9.09 13.04C9.56 14.19 10.69 15 12 15C13.31 15 14.44 14.19 14.91 13.04C15.05 13.06 15.2 13.07 15.34 13.07C17.07 13.07 18.48 11.66 18.48 9.93C18.48 9.22 18.23 8.54 17.81 8C18.24 7.46 18.48 6.78 18.48 6.07C18.48 4.34 17.07 2.93 15.34 2.93C15.19 2.93 15.05 2.94 14.91 2.96C14.44 1.81 13.31 1 12 1C10.69 1 9.56 1.81 9.09 2.96C8.95 2.94 8.8 2.93 8.66 2.93C6.93 2.93 5.52 4.34 5.52 6.07C5.52 6.78 5.77 7.46 6.19 8C5.76 8.54 5.51 9.22 5.51 9.93C5.51 11.66 6.92 13.07 8.66 13.07ZM12 13C11.38 13 10.88 12.51 10.86 11.9L10.98 10.81C11.3 10.93 11.64 11 12 11C12.36 11 12.71 10.93 13.03 10.81L13.14 11.9C13.12 12.51 12.62 13 12 13ZM15.34 11.07C15.1 11.07 14.88 11 14.7 10.87L13.89 10.3C14.44 9.85 14.83 9.21 14.95 8.47L15.83 8.89C16.23 9.08 16.49 9.48 16.49 9.92C16.49 10.56 15.97 11.07 15.34 11.07ZM14.69 5.13C14.89 5 15.11 4.93 15.34 4.93C15.97 4.93 16.48 5.44 16.48 6.07C16.48 6.51 16.23 6.9 15.82 7.1L14.94 7.52C14.82 6.78 14.43 6.14 13.87 5.69L14.69 5.13ZM12 3C12.62 3 13.12 3.49 13.14 4.1L13.03 5.19C12.71 5.07 12.36 5 12 5C11.64 5 11.3 5.07 10.98 5.19L10.86 4.1C10.88 3.49 11.38 3 12 3ZM8.66 4.93C8.9 4.93 9.12 5 9.3 5.13L10.11 5.69C9.56 6.14 9.17 6.78 9.05 7.52L8.17 7.1C7.77 6.9 7.51 6.51 7.51 6.07C7.51 5.44 8.03 4.93 8.66 4.93ZM8.17 8.9L9.05 8.48C9.17 9.22 9.56 9.86 10.12 10.31L9.31 10.86C9.11 10.99 8.89 11.06 8.66 11.06C8.03 11.06 7.52 10.55 7.52 9.92C7.51 9.49 7.77 9.1 8.17 8.9ZM12 22C16.97 22 21 17.97 21 13C16.03 13 12 17.03 12 22ZM14.44 19.56C15.15 17.66 16.66 16.14 18.56 15.44C17.85 17.34 16.34 18.85 14.44 19.56ZM3 13C3 17.97 7.03 22 12 22C12 17.03 7.97 13 3 13ZM5.44 15.44C7.34 16.15 8.86 17.66 9.56 19.56C7.66 18.85 6.15 17.34 5.44 15.44Z" />
  </svg>
)
export const oLocalGasStation = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.77 7.23L19.78 7.22L16.06 3.5L15 4.56L17.11 6.67C16.17 7.03 15.5 7.93 15.5 9C15.5 10.38 16.62 11.5 18 11.5C18.36 11.5 18.69 11.42 19 11.29V18.5C19 19.05 18.55 19.5 18 19.5C17.45 19.5 17 19.05 17 18.5V14C17 12.9 16.1 12 15 12H14V5C14 3.9 13.1 3 12 3H6C4.9 3 4 3.9 4 5V21H14V13.5H15.5V18.5C15.5 19.88 16.62 21 18 21C19.38 21 20.5 19.88 20.5 18.5V9C20.5 8.31 20.22 7.68 19.77 7.23ZM12 13.5V19H6V12H12V13.5ZM12 10H6V5H12V10ZM18 10C17.45 10 17 9.55 17 9C17 8.45 17.45 8 18 8C18.55 8 19 8.45 19 9C19 9.55 18.55 10 18 10Z" />
  </svg>
)
export const oLocalGroceryStore = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM15.55 13C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C21.25 4.82 20.77 4 20.01 4H5.21L4.27 2H1V4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H19V15H7L8.1 13H15.55ZM6.16 6H18.31L15.55 11H8.53L6.16 6Z" />
  </svg>
)
export const oLocalHospital = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3.01 3.9 3.01 5L3 19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM10.5 17H13.5V13.5H17V10.5H13.5V7H10.5V10.5H7V13.5H10.5V17Z" />
  </svg>
)
export const oLocalHotel = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 14C8.66 14 10 12.66 10 11C10 9.34 8.66 8 7 8C5.34 8 4 9.34 4 11C4 12.66 5.34 14 7 14ZM7 10C7.55 10 8 10.45 8 11C8 11.55 7.55 12 7 12C6.45 12 6 11.55 6 11C6 10.45 6.45 10 7 10ZM19 7H11V15H3V5H1V20H3V17H21V20H23V11C23 8.79 21.21 7 19 7ZM21 15H13V9H19C20.1 9 21 9.9 21 11V15Z" />
  </svg>
)
export const oLocalLaundryService = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 2L18 2.01C19.11 2.01 20 2.89 20 4V20C20 21.11 19.11 22 18 22H6C4.89 22 4 21.11 4 20V4C4 2.89 4.89 2 6 2ZM18 20V4H5.99L6 20H18ZM9 6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6C7 5.44772 7.44772 5 8 5C8.55228 5 9 5.44772 9 6ZM11 7C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6C10 6.55228 10.4477 7 11 7ZM17 14C17 16.76 14.76 19 12 19C9.24 19 7 16.76 7 14C7 11.24 9.24 9 12 9C14.76 9 17 11.24 17 14ZM14.36 16.36C15.66 15.06 15.66 12.94 14.36 11.64L9.64 16.36C10.94 17.66 13.06 17.66 14.36 16.36Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oLocalLibrary = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 9C14.21 9 16 7.21 16 5C16 2.79 14.21 1 12 1C9.79 1 8 2.79 8 5C8 7.21 9.79 9 12 9ZM12 3C13.1 3 14 3.9 14 5C14 6.1 13.1 7 12 7C10.9 7 10 6.1 10 5C10 3.9 10.9 3 12 3ZM12 11.55C9.64 9.35 6.48 8 3 8V19C6.48 19 9.64 20.35 12 22.55C14.36 20.36 17.52 19 21 19V8C17.52 8 14.36 9.35 12 11.55ZM19 17.13C16.47 17.47 14.07 18.43 12 19.95C9.94 18.43 7.53 17.46 5 17.12V10.17C7.1 10.55 9.05 11.52 10.64 13L12 14.28L13.36 13.01C14.95 11.53 16.9 10.56 19 10.18V17.13Z" />
  </svg>
)
export const oLocalMall = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 6H17C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6H5C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6ZM12 3C13.66 3 15 4.34 15 6H9C9 4.34 10.34 3 12 3ZM19 20H5V8H19V20ZM12 12C10.34 12 9 10.66 9 9H7C7 11.76 9.24 14 12 14C14.76 14 17 11.76 17 9H15C15 10.66 13.66 12 12 12Z" />
  </svg>
)
export const oLocalMovies = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14 5V19H10V5H14ZM20 3H18V5H16V3H8V5H6V3H4V21H6V19H8V21H16V19H18V21H20V3ZM16 9V7H18V9H16ZM6 9V7H8V9H6ZM16 13V11H18V13H16ZM6 13V11H8V13H6ZM16 17V15H18V17H16ZM6 17V15H8V17H6Z" />
  </svg>
)
export const oLocalOffer = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.41 2.58L21.41 11.58C21.77 11.94 22 12.45 22 13C22 13.55 21.78 14.05 21.41 14.41L14.41 21.41C14.05 21.78 13.55 22 13 22C12.45 22 11.95 21.78 11.59 21.42L2.59 12.42C2.22 12.05 2 11.55 2 11V4C2 2.9 2.9 2 4 2H11C11.55 2 12.05 2.22 12.41 2.58ZM4 11L13 20.01L20 12.99L11 3.99V4H4V11ZM8 6.5C8 7.32843 7.32843 8 6.5 8C5.67157 8 5 7.32843 5 6.5C5 5.67157 5.67157 5 6.5 5C7.32843 5 8 5.67157 8 6.5Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oLocalParking = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13 3H6V21H10V15H13C16.31 15 19 12.31 19 9C19 5.69 16.31 3 13 3ZM13.2 11H10V7H13.2C14.3 7 15.2 7.9 15.2 9C15.2 10.1 14.3 11 13.2 11Z" />
  </svg>
)
export const oLocalPharmacy = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 5H18.36L19.5 1.86L17.15 1L15.69 5H3V7L5 13L3 19V21H21V19L19 13L21 7V5ZM17.1 13.63L18.89 19H5.11L6.9 13.63L7.11 13L6.9 12.37L5.11 7H18.89L17.1 12.37L16.89 13L17.1 13.63ZM13 9H11V12H8V14H11V17H13V14H16V12H13V9Z" />
  </svg>
)
export const oLocalPhone = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z" />
  </svg>
)
export const oLocalPizza = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.43001 2 5.23001 3.54 3.01001 6L12 22L20.99 6C18.78 3.55 15.57 2 12 2ZM12 17.92L5.51001 6.36C7.32001 4.85 9.62001 4 12 4C14.38 4 16.68 4.85 18.49 6.36L12 17.92ZM9.00001 5.5C8.17001 5.5 7.50001 6.17 7.50001 7C7.50001 7.83 8.17001 8.5 9.00001 8.5C9.83001 8.5 10.5 7.83 10.5 7C10.5 6.17 9.82001 5.5 9.00001 5.5ZM10.5 13C10.5 13.83 11.17 14.5 12 14.5C12.82 14.5 13.5 13.83 13.5 13C13.5 12.17 12.82 11.5 12 11.5C11.18 11.5 10.5 12.17 10.5 13Z" />
  </svg>
)
export const oLocalPlay = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 10V6C22 4.9 21.1 4 20 4H4C2.9 4 2.01 4.9 2.01 6V10C3.11 10 4 10.9 4 12C4 13.1 3.11 14 2 14V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V14C20.9 14 20 13.1 20 12C20 10.9 20.9 10 22 10ZM20 8.54C18.81 9.23 18 10.53 18 12C18 13.47 18.81 14.77 20 15.46V18H4V15.46C5.19 14.77 6 13.47 6 12C6 10.52 5.2 9.23 4.01 8.54L4 6H20V8.54ZM9.07 16L12 14.12L14.93 16L14.04 12.64L16.73 10.44L13.26 10.23L12 7L10.73 10.22L7.26 10.43L9.95 12.63L9.07 16Z" />
  </svg>
)
export const oLocalPostOffice = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" />
  </svg>
)
export const oLocalPrintshop = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 8H19C20.66 8 22 9.34 22 11V17H18V21H6V17H2V11C2 9.34 3.34 8 5 8H6V3H18V8ZM16 5H8V8H16V5ZM8 19H16V15H8V19ZM18 13V15H20V11C20 10.45 19.55 10 19 10H5C4.45 10 4 10.45 4 11V15H6V13H18ZM19 11.5C19 12.0523 18.5523 12.5 18 12.5C17.4477 12.5 17 12.0523 17 11.5C17 10.9477 17.4477 10.5 18 10.5C18.5523 10.5 19 10.9477 19 11.5Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oLocalSee = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H16.83L15 2H9L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H8.05L8.64 5.35L9.88 4H14.12L15.36 5.35L15.95 6H20V18ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 15.2C10.23 15.2 8.8 13.77 8.8 12C8.8 10.23 10.23 8.8 12 8.8C13.77 8.8 15.2 10.23 15.2 12C15.2 13.77 13.77 15.2 12 15.2Z" />
  </svg>
)
export const oLocalShipping = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 8H17V4H3C1.9 4 1 4.9 1 6V17H3C3 18.66 4.34 20 6 20C7.66 20 9 18.66 9 17H15C15 18.66 16.34 20 18 20C19.66 20 21 18.66 21 17H23V12L20 8ZM19.5 9.5L21.46 12H17V9.5H19.5ZM6 18C5.45 18 5 17.55 5 17C5 16.45 5.45 16 6 16C6.55 16 7 16.45 7 17C7 17.55 6.55 18 6 18ZM8.22 15C7.67 14.39 6.89 14 6 14C5.11 14 4.33 14.39 3.78 15H3V6H15V15H8.22ZM18 18C17.45 18 17 17.55 17 17C17 16.45 17.45 16 18 16C18.55 16 19 16.45 19 17C19 17.55 18.55 18 18 18Z" />
  </svg>
)
export const oLocalTaxi = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9V5H6.5C5.84 5 5.29 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.85 7H17.14L18.18 10H5.81L6.85 7ZM19 17H5V12.34L5.12 12H18.89L19 12.34V17ZM7.5 16C8.32843 16 9 15.3284 9 14.5C9 13.6716 8.32843 13 7.5 13C6.67157 13 6 13.6716 6 14.5C6 15.3284 6.67157 16 7.5 16ZM18 14.5C18 15.3284 17.3284 16 16.5 16C15.6716 16 15 15.3284 15 14.5C15 13.6716 15.6716 13 16.5 13C17.3284 13 18 13.6716 18 14.5Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oLocationCity = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 11V5L12 2L9 5V7H3V21H21V11H15ZM7 19H5V17H7V19ZM7 15H5V13H7V15ZM7 11H5V9H7V11ZM13 19H11V17H13V19ZM13 15H11V13H13V15ZM13 11H11V9H13V11ZM13 7H11V5H13V7ZM19 19H17V17H19V19ZM19 15H17V13H19V15Z" />
  </svg>
)
export const oLocationDisabled = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M23 13V11H20.94C20.48 6.83 17.17 3.52 13 3.06V1H11V3.06C10.02 3.17 9.09 3.44 8.23 3.84L9.76 5.37C10.46 5.13 11.22 5 12 5C15.87 5 19 8.13 19 12C19 12.79 18.87 13.54 18.63 14.24L20.16 15.77C20.56 14.91 20.83 13.98 20.94 13H23ZM4.41 2.86L3 4.27L5.04 6.31C3.97 7.62 3.26 9.23 3.06 11H1V13H3.06C3.52 17.17 6.83 20.48 11 20.94V23H13V20.94C14.77 20.74 16.38 20.03 17.69 18.96L19.73 21L21.14 19.59L4.41 2.86ZM12 19C8.13 19 5 15.87 5 12C5 10.39 5.55 8.91 6.46 7.73L16.27 17.54C15.09 18.45 13.61 19 12 19Z" />
  </svg>
)
export const oLocationOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4C14.76 4 17 6.24 17 9C17 10.06 16.61 11.32 16 12.62L17.49 14.11C18.37 12.36 19 10.57 19 9C19 5.13 15.87 2 12 2C10.16 2 8.5 2.71 7.25 3.86L8.68 5.29C9.56 4.5 10.72 4 12 4ZM12 6.5C11.41 6.5 10.87 6.71 10.44 7.06L13.94 10.56C14.29 10.13 14.5 9.59 14.5 9C14.5 7.62 13.38 6.5 12 6.5ZM3.41 2.86L2 4.27L5.18 7.45C5.07 7.95 5 8.47 5 9C5 14.25 12 22 12 22C12 22 13.67 20.15 15.38 17.65L18.73 21L20.14 19.59L3.41 2.86ZM12 18.88C9.99 16.3 7.2 12.14 7.02 9.29L13.94 16.21C13.29 17.19 12.61 18.1 12 18.88Z" />
  </svg>
)
export const oLocationOn = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9ZM12 4C9.24 4 7 6.24 7 9C7 11.85 9.92 16.21 12 18.88C14.12 16.19 17 11.88 17 9C17 6.24 14.76 4 12 4ZM14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oLocationSearching = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20.94 11C20.48 6.83 17.17 3.52 13 3.06V1H11V3.06C6.83 3.52 3.52 6.83 3.06 11H1V13H3.06C3.52 17.17 6.83 20.48 11 20.94V23H13V20.94C17.17 20.48 20.48 17.17 20.94 13H23V11H20.94ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z" />
  </svg>
)
export const oLock = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM9 6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9V6ZM18 20H6V10H18V20ZM12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17Z" />
  </svg>
)
export const oLockOpen = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6H9C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM18 20H6V10H18V20ZM12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17Z" />
  </svg>
)
export const oLooks = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 10C8.14 10 5 13.14 5 17H7C7 14.24 9.24 12 12 12C14.76 12 17 14.24 17 17H19C19 13.14 15.86 10 12 10ZM12 6C5.93 6 1 10.93 1 17H3C3 12.04 7.04 8 12 8C16.96 8 21 12.04 21 17H23C23 10.93 18.07 6 12 6Z" />
  </svg>
)
export const oLooks3 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM15 15V13.5C15 12.67 14.33 12 13.5 12C14.33 12 15 11.33 15 10.5V9C15 7.89 14.1 7 13 7H9V9H13V11H11V13H13V15H9V17H13C14.1 17 15 16.11 15 15Z" />
  </svg>
)
export const oLooks4 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM13 17H15V7H13V11H11V7H9V13H13V17Z" />
  </svg>
)
export const oLooks5 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM15 15V13C15 11.89 14.1 11 13 11H11V9H15V7H9V13H13V15H9V17H13C14.1 17 15 16.11 15 15Z" />
  </svg>
)
export const oLooks6 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 17H13C14.1 17 15 16.11 15 15V13C15 11.89 14.1 11 13 11H11V9H15V7H11C9.9 7 9 7.89 9 9V15C9 16.11 9.9 17 11 17ZM11 13H13V15H11V13ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" />
  </svg>
)
export const oLooksOne = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM12 17H14V7H10V9H12V17Z" />
  </svg>
)
export const oLooksTwo = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM15 15H11V13H13C14.1 13 15 12.11 15 11V9C15 7.89 14.1 7 13 7H9V9H13V11H11C9.9 11 9 11.89 9 13V17H15V15Z" />
  </svg>
)
export const oLoop = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4V1L8 5L12 9V6C15.31 6 18 8.69 18 12C18 13.01 17.75 13.97 17.3 14.8L18.76 16.26C19.54 15.03 20 13.57 20 12C20 7.58 16.42 4 12 4ZM12 18C8.69 18 6 15.31 6 12C6 10.99 6.25 10.03 6.7 9.2L5.24 7.74C4.46 8.97 4 10.43 4 12C4 16.42 7.58 20 12 20V23L16 19L12 15V18Z" />
  </svg>
)
export const oLoupe = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22H20C21.1 22 22 21.1 22 20V12C22 6.49 17.51 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
  </svg>
)
export const oLowPriority = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14 5H22V7H14V5ZM14 10.5H22V12.5H14V10.5ZM14 16H22V18H14V16ZM2 11.5C2 15.08 4.92 18 8.5 18H9V20L12 17L9 14V16H8.5C6.02 16 4 13.98 4 11.5C4 9.02 6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5Z" />
  </svg>
)
export const oLoyalty = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.41 11.58L12.41 2.58C12.05 2.22 11.55 2 11 2H4C2.9 2 2 2.9 2 4V11C2 11.55 2.22 12.05 2.59 12.42L11.59 21.42C11.95 21.78 12.45 22 13 22C13.55 22 14.05 21.78 14.41 21.41L21.41 14.41C21.78 14.05 22 13.55 22 13C22 12.45 21.77 11.94 21.41 11.58ZM13 20.01L4 11V4H11V3.99L20 12.99L13 20.01ZM6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8ZM9.50002 14C9.13002 13.62 8.90002 13.12 8.90002 12.55C8.90002 11.42 9.82002 10.5 10.95 10.5C11.51 10.5 12.03 10.73 12.4 11.11L13 11.7L13.6 11.1C13.97 10.73 14.48 10.5 15.05 10.5C16.18 10.5 17.1 11.42 17.1 12.55C17.1 13.11 16.87 13.63 16.5 14L13 17.5L9.50002 14Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oMail = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 10.99L4 6H20ZM20 18H4V8L12 13L20 8V18Z" />
  </svg>
)
export const oMailOutline = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" />
  </svg>
)
export const oMap = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20.5 3L20.34 3.03L15 5.1L9 3L3.36 4.9C3.15 4.97 3 5.15 3 5.38V20.5C3 20.78 3.22 21 3.5 21L3.66 20.97L9 18.9L15 21L20.64 19.1C20.85 19.03 21 18.85 21 18.62V3.5C21 3.22 20.78 3 20.5 3ZM10 5.47L14 6.87V18.53L10 17.13V5.47ZM5 6.46L8 5.45V17.15L5 18.31V6.46ZM19 17.54L16 18.55V6.86L19 5.7V17.54Z" />
  </svg>
)
export const oMarkunread = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" />
  </svg>
)
export const oMarkunreadMailbox = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6H10V8H20V20H4V8H6V12H8V4H14V0H6V6H4C2.9 6 2 6.9 2 8V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V8C22 6.9 21.1 6 20 6Z" />
  </svg>
)
export const oMaximize = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3H21V5H3V3Z" />
  </svg>
)
export const oMeetingRoom = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 19V4H15V3H5V19H3V21H15V6H17V21H21V19H19ZM13 19H7V5H13V19ZM10 11H12V13H10V11Z" />
  </svg>
)
export const oMemory = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 9H9V15H15V9ZM13 13H11V11H13V13ZM21 11V9H19V7C19 5.9 18.1 5 17 5H15V3H13V5H11V3H9V5H7C5.9 5 5 5.9 5 7V9H3V11H5V13H3V15H5V17C5 18.1 5.9 19 7 19H9V21H11V19H13V21H15V19H17C18.1 19 19 18.1 19 17V15H21V13H19V11H21ZM17 17H7V7H17V17Z" />
  </svg>
)
export const oMenu = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" />
  </svg>
)
export const oMergeType = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16.9998 20.41L18.4098 19L14.9998 15.59L13.5898 17L16.9998 20.41ZM7.49984 8H10.9998V13.59L5.58984 19L6.99984 20.41L12.9998 14.41V8H16.4998L11.9998 3.5L7.49984 8Z" />
  </svg>
)
export const oMessage = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H20V16H5.17L4 17.17V4ZM4 2C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2H4ZM6 12H18V14H6V12ZM6 9H18V11H6V9ZM6 6H18V8H6V6Z" />
  </svg>
)
export const oMic = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 14C13.66 14 15 12.66 15 11V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 12.66 10.34 14 12 14ZM17 11C17 13.76 14.76 16 12 16C9.24 16 7 13.76 7 11H5C5 14.53 7.61 17.43 11 17.92V21H13V17.92C16.39 17.43 19 14.53 19 11H17Z" />
  </svg>
)
export const oMicNone = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 14C13.66 14 15 12.66 15 11V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 12.66 10.34 14 12 14ZM11 5C11 4.45 11.45 4 12 4C12.55 4 13 4.45 13 5V11C13 11.55 12.55 12 12 12C11.45 12 11 11.55 11 11V5ZM17 11C17 13.76 14.76 16 12 16C9.24 16 7 13.76 7 11H5C5 14.53 7.61 17.43 11 17.92V21H13V17.92C16.39 17.43 19 14.53 19 11H17Z" />
  </svg>
)
export const oMicOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10.8 4.9C10.8 4.24 11.34 3.7 12 3.7C12.66 3.7 13.2 4.24 13.2 4.9L13.19 8.81L15 10.6V5C15 3.34 13.66 2 12 2C10.46 2 9.21 3.16 9.04 4.65L10.8 6.41V4.9ZM19 11H17.3C17.3 11.58 17.2 12.13 17.03 12.64L18.3 13.91C18.74 13.03 19 12.04 19 11ZM4.41 2.86L3 4.27L9 10.27V11C9 12.66 10.34 14 12 14C12.23 14 12.44 13.97 12.65 13.92L14.31 15.58C13.6 15.91 12.81 16.1 12 16.1C9.24 16.1 6.7 14 6.7 11H5C5 14.41 7.72 17.23 11 17.72V21H13V17.72C13.91 17.59 14.77 17.27 15.55 16.82L19.75 21.02L21.16 19.61L4.41 2.86Z" />
  </svg>
)
export const oMinimize = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6 19H18V21H6V19Z" />
  </svg>
)
export const oMissedVideoCall = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 10.5V7C17 6.45 16.55 6 16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5ZM15 8.67V16H5V8H15V8.67ZM7.11 11.11L11 15L14.77 11.21L13.99 10.42L11 13.43L7.89 10.33H10.44V9.22H6V13.66H7.11V11.11Z" />
  </svg>
)
export const oMms = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16ZM14.5 8L11 12.51L8.5 9.5L5 14H19L14.5 8Z" />
  </svg>
)
export const oMobileFriendly = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18.9999 1H8.99994C7.89994 1 6.99994 1.9 6.99994 3V6H8.99994V4H18.9999V20H8.99994V18H6.99994V21C6.99994 22.1 7.89994 23 8.99994 23H18.9999C20.0999 23 20.9999 22.1 20.9999 21V3C20.9999 1.9 20.0999 1 18.9999 1ZM7.00994 13.47L4.45994 10.92L3.18994 12.19L6.99994 16L14.1899 8.81L12.9199 7.54L7.00994 13.47Z" />
  </svg>
)
export const oMobileOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 5V13.61L19 15.61V3C19 1.9 18.1 1 17 1H6.99999C6.28999 1 5.66999 1.37 5.31999 1.93L8.38999 5H17ZM1.48999 3.76L4.99999 7.27V21C4.99999 22.1 5.89999 23 6.99999 23H17C18.02 23 18.85 22.23 18.98 21.25L20.7 22.97L22.11 21.56L2.89999 2.35L1.48999 3.76ZM6.99999 9.27L16.73 19H6.99999V9.27Z" />
  </svg>
)
export const oMobileScreenShare = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 1H7.00001C5.90001 1 5.01001 1.85 5.01001 2.95V20.95C5.01001 22.05 5.90001 23 7.00001 23H17C18.1 23 19 22.05 19 20.95V2.95C19 1.85 18.1 1 17 1ZM17 19H7.00001V5H17V19ZM12.8 13.24V14.99L16 12L12.8 9.02V10.72C9.69001 11.15 8.45001 13.28 8.00001 15.42C9.11001 13.92 10.58 13.24 12.8 13.24Z" />
  </svg>
)
export const oModeComment = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 17.17L18.83 16H4V4H20V17.17ZM20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22V4C22 2.9 21.1 2 20 2Z" />
  </svg>
)
export const oMonetizationOn = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.31 11.14C10.54 10.69 9.97 10.2 9.97 9.47C9.97 8.63 10.76 8.04 12.07 8.04C13.45 8.04 13.97 8.7 14.01 9.68H15.72C15.67 8.34 14.85 7.11 13.23 6.71V5H10.9V6.69C9.39 7.01 8.18 7.99 8.18 9.5C8.18 11.29 9.67 12.19 11.84 12.71C13.79 13.17 14.18 13.86 14.18 14.58C14.18 15.11 13.79 15.97 12.08 15.97C10.48 15.97 9.85 15.25 9.76 14.33H8.04C8.14 16.03 9.4 16.99 10.9 17.3V19H13.24V17.33C14.76 17.04 15.96 16.17 15.97 14.56C15.96 12.36 14.07 11.6 12.31 11.14Z" />
  </svg>
)
export const oMoney = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 16H18C18.55 16 19 15.55 19 15V9C19 8.45 18.55 8 18 8H15C14.45 8 14 8.45 14 9V15C14 15.55 14.45 16 15 16ZM16 10H17V14H16V10ZM9 16H12C12.55 16 13 15.55 13 15V9C13 8.45 12.55 8 12 8H9C8.45 8 8 8.45 8 9V15C8 15.55 8.45 16 9 16ZM10 10H11V14H10V10ZM5 8H7V16H5V8ZM2 4V20H22V4H2ZM20 18H4V6H20V18Z" />
  </svg>
)
export const oMoneyOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5001 6.9C14.2801 6.9 14.9401 7.75 15.0001 9H17.2101C17.1401 7.28 16.0901 5.7 14.0001 5.19V3H11.0001V5.16C10.6101 5.24 10.2501 5.37 9.90006 5.52L11.4101 7.03C11.7301 6.95 12.1001 6.9 12.5001 6.9ZM5.47006 3.92L4.06006 5.33L7.50006 8.77C7.50006 10.85 9.06006 11.99 11.4101 12.68L14.9201 16.19C14.5801 16.68 13.8701 17.1 12.5001 17.1C10.4401 17.1 9.63006 16.18 9.52006 15H7.32006C7.44006 17.19 9.08006 18.42 11.0001 18.83V21H14.0001V18.85C14.9601 18.67 15.8301 18.3 16.4601 17.73L18.6801 19.95L20.0901 18.54L5.47006 3.92Z" />
  </svg>
)
export const oMonochromePhotos = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5H16.8L15 3H9L7.2 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5ZM20 19H12V18C9.2 18 7 15.8 7 13C7 10.2 9.2 8 12 8V7H20V19ZM17 13C17 10.2 14.8 8 12 8V9.8C13.8 9.8 15.2 11.2 15.2 13C15.2 14.8 13.8 16.2 12 16.2V18C14.8 18 17 15.8 17 13ZM8.8 13C8.8 14.8 10.2 16.2 12 16.2V9.8C10.2 9.8 8.8 11.2 8.8 13Z" />
  </svg>
)
export const oMood = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM15.5 11C16.33 11 17 10.33 17 9.5C17 8.67 16.33 8 15.5 8C14.67 8 14 8.67 14 9.5C14 10.33 14.67 11 15.5 11ZM8.5 11C9.33 11 10 10.33 10 9.5C10 8.67 9.33 8 8.5 8C7.67 8 7 8.67 7 9.5C7 10.33 7.67 11 8.5 11ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" />
  </svg>
)
export const oMoodBad = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM15.5 11C16.33 11 17 10.33 17 9.5C17 8.67 16.33 8 15.5 8C14.67 8 14 8.67 14 9.5C14 10.33 14.67 11 15.5 11ZM8.5 11C9.33 11 10 10.33 10 9.5C10 8.67 9.33 8 8.5 8C7.67 8 7 8.67 7 9.5C7 10.33 7.67 11 8.5 11ZM12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5Z" />
  </svg>
)
export const oMore = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 3H22C23.1 3 24 3.9 24 5V19C24 20.1 23.1 21 22 21H7.07C6.38 21 5.77 20.64 5.41 20.11L0 12L5.41 3.88C5.77 3.35 6.31 3 7 3ZM7.07 19H22V5H7.06L2.4 12L7.07 19ZM10.5 12C10.5 12.8284 9.82843 13.5 9 13.5C8.17157 13.5 7.5 12.8284 7.5 12C7.5 11.1716 8.17157 10.5 9 10.5C9.82843 10.5 10.5 11.1716 10.5 12ZM14 13.5C14.8284 13.5 15.5 12.8284 15.5 12C15.5 11.1716 14.8284 10.5 14 10.5C13.1716 10.5 12.5 11.1716 12.5 12C12.5 12.8284 13.1716 13.5 14 13.5ZM20.5 12C20.5 12.8284 19.8284 13.5 19 13.5C18.1716 13.5 17.5 12.8284 17.5 12C17.5 11.1716 18.1716 10.5 19 10.5C19.8284 10.5 20.5 11.1716 20.5 12Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oMoreHoriz = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" />
  </svg>
)
export const oMoreVert = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" />
  </svg>
)
export const oMotorcycle = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12.72 11L10.72 13H9.95L9.7 12.31C9.52 11.83 9.28 11.39 8.98 11H12.72ZM15.41 5H11V7H14.59L16.59 9H5C2.2 9 0 11.2 0 14C0 16.8 2.2 19 5 19C7.46 19 9.45 17.31 9.9 15H11.55L14.32 12.23C14.11 12.77 14 13.37 14 14C14 16.8 16.2 19 19 19C21.8 19 24 16.8 24 14C24 11.35 22.03 9.23 19.44 9.03L15.41 5ZM19 17C17.34 17 16 15.66 16 14C16 12.34 17.34 11 19 11C20.66 11 22 12.34 22 14C22 15.66 20.66 17 19 17ZM5 17C3.37 17 2 15.63 2 14C2 12.37 3.37 11 5 11C6.28 11 7.4 11.85 7.82 13H5V15H7.82C7.4 16.15 6.28 17 5 17Z" />
  </svg>
)
export const oMouse = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 8.99995C19.96 4.60995 16.4 1.06995 12 1.06995C7.6 1.06995 4.04 4.60995 4 8.99995V14.9999C4 19.4199 7.58 22.9999 12 22.9999C16.42 22.9999 20 19.4199 20 14.9999V8.99995ZM18 8.99995H13V3.15995C15.81 3.62995 17.96 6.05995 18 8.99995ZM11 3.15995V8.99995H6C6.04 6.05995 8.19 3.62995 11 3.15995ZM18 14.9999C18 18.3099 15.31 20.9999 12 20.9999C8.69 20.9999 6 18.3099 6 14.9999V10.9999H18V14.9999Z" />
  </svg>
)
export const oMoveToInbox = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16 9H13.45V6H10.55V9H8L12 13L16 9ZM19 3H4.99C3.88 3 3 3.9 3 5V19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V16H8.56C9.25 17.19 10.53 18 12.01 18C13.49 18 14.76 17.19 15.46 16H19V19ZM19 14H14.01C14.01 15.1 13.11 16 12.01 16C10.91 16 10.01 15.1 10.01 14H5L4.99 5H19V14Z" />
  </svg>
)
export const oMovie = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6.47L5.76 10H20V18H4V6.47ZM22 4H18L20 8H17L15 4H13L15 8H12L10 4H8L10 8H7L5 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V4Z" />
  </svg>
)
export const oMovieCreation = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5.76 10H20V18H4V6.47L5.76 10ZM22 4H18L20 8H17L15 4H13L15 8H12L10 4H8L10 8H7L5 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V4Z" />
  </svg>
)
export const oMovieFilter = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10 11L9.06001 13.06L7.00001 14L9.06001 14.94L10 17L10.94 14.94L13 14L10.94 13.06L10 11ZM18.01 4L20.01 8H17.01L15.01 4H13.01L15.01 8H12.01L10.01 4H8.01001L10.01 8H7.01001L5.01001 4H4.01001C2.91001 4 2.02001 4.9 2.02001 6L2.01001 18C2.01001 19.1 2.91001 20 4.01001 20H20.01C21.11 20 22 19.1 22 18V4H18.01ZM20.01 18H4.01001V6.47L5.77001 10H16L15.37 11.37L14 12L15.37 12.63L16 14L16.63 12.63L18 12L16.63 11.37L16 10H20.01V18Z" />
  </svg>
)
export const oMultilineChart = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 6.92L20.59 5.51L17.74 8.72C15.68 6.4 12.83 5 9.61 5C6.72 5 4.07 6.16 2 8L3.42 9.42C5.12 7.93 7.27 7 9.61 7C12.35 7 14.7 8.26 16.38 10.24L13.5 13.48L9.5 9.48L2 16.99L3.5 18.49L9.5 12.48L13.5 16.48L17.55 11.93C18.3 13.28 18.8 14.83 18.99 16.48H21C20.78 14.18 20.05 12.09 18.96 10.34L22 6.92Z" />
  </svg>
)
export const oMusicNote = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L12.01 13.55C11.42 13.21 10.74 13 10.01 13C7.79 13 6 14.79 6 17C6 19.21 7.79 21 10.01 21C12.23 21 14 19.21 14 17V7H18V3H12ZM10.01 19C8.91 19 8.01 18.1 8.01 17C8.01 15.9 8.91 15 10.01 15C11.11 15 12.01 15.9 12.01 17C12.01 18.1 11.11 19 10.01 19Z" />
  </svg>
)
export const oMusicOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14 6.99999H18V2.99999H12V7.60999L14 9.60999V6.99999ZM12 10.44L4.41 2.85999L3 4.26999L12 13.27V13.55C11.06 13.01 9.9 12.8 8.67 13.23C7.33 13.71 6.3 14.9 6.06 16.3C5.6 19.04 7.92 21.38 10.65 20.95C12.61 20.64 14 18.84 14 16.85V15.27L19.73 21L21.14 19.59L12 10.44ZM10 19C8.9 19 8 18.1 8 17C8 15.9 8.9 15 10 15C11.1 15 12 15.9 12 17C12 18.1 11.1 19 10 19Z" />
  </svg>
)
export const oMusicVideo = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19H3V5H21V19ZM8 15C8 13.34 9.34 12 11 12C11.35 12 11.69 12.07 12 12.18V6H17V8H14V15.03C13.98 16.67 12.65 18 11 18C9.34 18 8 16.66 8 15Z" />
  </svg>
)
export const oMyLocation = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM20.94 11C20.48 6.83 17.17 3.52 13 3.06V1H11V3.06C6.83 3.52 3.52 6.83 3.06 11H1V13H3.06C3.52 17.17 6.83 20.48 11 20.94V23H13V20.94C17.17 20.48 20.48 17.17 20.94 13H23V11H20.94ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z" />
  </svg>
)
export const oNature = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13 16.12H12.97C16.46 15.72 19.17 12.76 19.17 9.17004C19.17 5.30004 16.04 2.17004 12.17 2.17004C8.3 2.17004 5.17 5.30004 5.17 9.17004C5.17 12.64 7.69 15.51 11 16.06V20H5V22H19V20H13V16.12ZM7.17 9.17004C7.17 6.41004 9.41 4.17004 12.17 4.17004C14.93 4.17004 17.17 6.41004 17.17 9.17004C17.17 11.93 14.93 14.17 12.17 14.17C9.41 14.17 7.17 11.93 7.17 9.17004Z" />
  </svg>
)
export const oNaturePeople = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.17 2.17004C19.04 2.17004 22.17 5.30004 22.17 9.17004C22.17 12.76 19.47 15.71 16 16.12V20H19V22H3V17H2V13C2 12.45 2.45 12 3 12H6C6.55 12 7 12.45 7 13V17H6V20H14V16.06C10.69 15.51 8.17 12.64 8.17 9.17004C8.17 5.30004 11.3 2.17004 15.17 2.17004ZM10.17 9.17004C10.17 11.93 12.41 14.17 15.17 14.17C17.93 14.17 20.17 11.93 20.17 9.17004C20.17 6.41004 17.93 4.17004 15.17 4.17004C12.41 4.17004 10.17 6.41004 10.17 9.17004ZM6 9.5C6 10.3284 5.32843 11 4.5 11C3.67157 11 3 10.3284 3 9.5C3 8.67157 3.67157 8 4.5 8C5.32843 8 6 8.67157 6 9.5Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oNavigateBefore = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.61 7.41L14.2 6L8.19995 12L14.2 18L15.61 16.59L11.03 12L15.61 7.41Z" />
  </svg>
)
export const oNavigateNext = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10.0199 6L8.60986 7.41L13.1899 12L8.60986 16.59L10.0199 18L16.0199 12L10.0199 6Z" />
  </svg>
)
export const oNavigation = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 7.27L16.28 17.7L12.81 16.17L12 15.81L11.19 16.17L7.72 17.7L12 7.27ZM12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
  </svg>
)
export const oNearMe = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.27 6.73L13.03 16.86L11.71 13.44L11.39 12.61L10.57 12.29L7.14 10.96L17.27 6.73ZM21 3L3 10.53V11.51L9.84 14.16L12.48 21H13.46L21 3Z" />
  </svg>
)
export const oNetworkCell = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M2 22H22V2L2 22Z" fillOpacity="0.3" />
    <path d="M17 7L2 22H17V7Z" fill="black" />
  </svg>
)
export const oNetworkCheck = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.9 5.00005C15.73 5.00005 15.58 5.09005 15.49 5.23005L15.42 5.38005L10.24 17.03C10.08 17.32 9.98 17.64 9.98 17.99C9.98 19.1 10.88 20 11.99 20C12.95 20 13.76 19.32 13.95 18.41L13.96 18.38L16.4 5.50005C16.4 5.22005 16.18 5.00005 15.9 5.00005ZM1 9.00005L3 11C5.88 8.12005 9.79 6.92005 13.53 7.38005L14.72 4.70005C9.89 3.84005 4.74 5.27005 1 9.00005ZM21 11L23 9.00005C21.36 7.36005 19.45 6.18005 17.41 5.43005L16.88 8.25005C18.38 8.87005 19.78 9.78005 21 11ZM17 15L19 13C18.2 12.2 17.3 11.58 16.34 11.11L15.79 14.03C16.21 14.3 16.62 14.62 17 15ZM5 13L7 15C8.13 13.87 9.56 13.21 11.03 13L12.31 10.12C9.68 10.04 7.01 10.99 5 13Z" />
  </svg>
)
export const oNetworkLocked = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16V15.5C22 14.12 20.88 13 19.5 13C18.12 13 17 14.12 17 15.5V16C16.45 16 16 16.45 16 17V21C16 21.55 16.45 22 17 22H22C22.55 22 23 21.55 23 21V17C23 16.45 22.55 16 22 16ZM21 16H18V15.5C18 14.67 18.67 14 19.5 14C20.33 14 21 14.67 21 15.5V16ZM18 5.83V11.26C18.47 11.1 18.97 11 19.5 11C19.67 11 19.83 11.03 20 11.05V1L1 20H14V18H5.83L18 5.83Z" />
  </svg>
)
export const oNetworkWifi = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23.6399 7C23.1899 6.66 18.7099 3 11.9999 3C5.27986 3 0.809863 6.66 0.359863 7L11.9999 21.5L23.6399 7Z"
      fillOpacity="0.3"
    />
    <path
      d="M3.52979 10.94L11.9998 21.5L20.4698 10.94C20.0398 10.61 16.8098 7.98999 11.9998 7.98999C7.18979 7.98999 3.95979 10.61 3.52979 10.94Z"
      fill="black"
    />
  </svg>
)
export const oNewReleases = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M23 12L20.56 9.22004L20.9 5.54004L17.29 4.72004L15.4 1.54004L12 3.00004L8.6 1.54004L6.71 4.72004L3.1 5.53004L3.44 9.21004L1 12L3.44 14.78L3.1 18.47L6.71 19.29L8.6 22.47L12 21L15.4 22.46L17.29 19.28L20.9 18.46L20.56 14.78L23 12ZM18.49 14.11L18.75 16.9L16.01 17.52L14.58 19.93L12 18.82L9.42 19.93L7.99 17.52L5.25 16.9L5.51 14.1L3.66 12L5.51 9.88004L5.25 7.10004L7.99 6.49004L9.42 4.08004L12 5.18004L14.58 4.07004L16.01 6.48004L18.75 7.10004L18.49 9.89004L20.34 12L18.49 14.11ZM11 15H13V17H11V15ZM11 7.00004H13V13H11V7.00004Z" />
  </svg>
)
export const oNextWeek = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 18.5L15 14.5L11 10.5L10 11.5L13 14.5L10 17.5L11 18.5ZM20 7H16V5C16 4.45 15.78 3.95 15.41 3.59C15.05 3.22 14.55 3 14 3H10C8.9 3 8 3.9 8 5V7H4C2.9 7 2 7.9 2 9V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V9C22 7.9 21.1 7 20 7ZM10 5H14V7H10V5ZM20 20H4V9H20V20Z" />
  </svg>
)
export const oNfc = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM20 20H4V4H20V20ZM18 6H13C11.9 6 11 6.9 11 8V10.28C10.4 10.63 10 11.26 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 11.26 13.6 10.62 13 10.28V8H16V16H8V8H10V6H6V18H18V6Z" />
  </svg>
)
export const oNoEncryption = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M8.9 6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8H10.44L12.44 10H18V15.56L20 17.56V10C20 8.9 19.1 8 18 8H17V6C17 3.24 14.76 1 12 1C9.68 1 7.74 2.59 7.18 4.74L8.9 6.46V6ZM4.41 4.81L3 6.22L5.04 8.26C4.42 8.6 4 9.25 4 10V20C4 21.1 4.9 22 6 22H18.78L19.78 23L21.19 21.59L4.41 4.81ZM6 20V10H6.78L16.78 20H6Z" />
  </svg>
)
export const oNoMeetingRoom = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5V8.88L14 10.88V6H17V13.88L19 15.88V4H14V3H6.12L8.12 5H12ZM2.41 2.13L1 3.54L5 7.54V19H3V21H14V16.54L20.46 23L21.87 21.59L2.41 2.13ZM12 19H7V9.54L12 14.54V19Z" />
  </svg>
)
export const oNoSim = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21.2599 21.21L3.78988 3.74L2.37988 5.15L5.11988 7.89L4.99988 8.01V19C4.99988 20.1 5.89988 21 6.99988 21H16.9999C17.3499 21 17.6799 20.9 17.9699 20.74L19.8499 22.62L21.2599 21.21ZM6.99988 19V9.77L16.2299 19H6.99988ZM10.8399 5H16.9999V14.11L18.9999 16.11V5C18.9999 3.9 18.0999 3 16.9999 3H10.0099L7.94988 5.06L9.35988 6.47L10.8399 5Z" />
  </svg>
)
export const oNotInterested = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20ZM18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9Z" />
  </svg>
)
export const oNotListedLocation = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1C7.59 1 4 4.59 4 9C4 14.57 10.96 22.34 11.26 22.67L12 23.49L12.74 22.67C13.04 22.34 20 14.57 20 9C20 4.59 16.41 1 12 1ZM12 20.47C9.82 17.86 6 12.54 6 9C6 5.69 8.69 3 12 3C15.31 3 18 5.69 18 9C18 12.83 13.75 18.36 12 20.47ZM11.13 14H12.88V15.75H11.13V14ZM12 5C10.07 5 8.5 6.57 8.5 8.5H10.25C10.25 7.54 11.04 6.75 12 6.75C12.96 6.75 13.75 7.54 13.75 8.5C13.75 10.26 11.13 10.04 11.13 12.88H12.88C12.88 10.91 15.5 10.69 15.5 8.5C15.5 6.57 13.93 5 12 5Z" />
  </svg>
)
export const oNote = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4H4C2.9 4 2 4.9 2 6V18.01C2 19.11 2.9 20 4 20H20C21.1 20 22 19.1 22 18V10L16 4ZM4 18.01V6H15V11H20V18.01H4Z" />
  </svg>
)
export const oNoteAdd = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13 11H11V14H8V16H11V19H13V16H16V14H13V11ZM14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" />
  </svg>
)
export const oNotes = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 11.01L3 11V13H21V11.01ZM3 16H15V18H3V16ZM21 6H3V8.01L21 8V6Z" />
  </svg>
)
export const oNotificationImportant = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10.01 21.01C10.01 22.11 10.9 23 12 23C13.1 23 13.99 22.11 13.99 21.01H10.01ZM12 6C14.76 6 17 8.24 17 11V18H7V11C7 8.24 9.24 6 12 6ZM12 1.5C11.17 1.5 10.5 2.17 10.5 3V4.17C7.36 4.85 5 7.65 5 11V17L3 19V20H21V19L19 17V11C19 7.65 16.64 4.85 13.5 4.17V3C13.5 2.17 12.83 1.5 12 1.5ZM11 8H13V12H11V8ZM11 14H13V16H11V14Z" />
  </svg>
)
export const oNotifications = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z" />
  </svg>
)
export const oNotificationsActive = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64003 5.36 6.00003 7.92 6.00003 11V16L4.00003 18V19H20V18L18 16ZM16 17H8.00003V11C8.00003 8.52 9.51003 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17ZM7.58003 4.08L6.15003 2.65C3.75003 4.48 2.17003 7.3 2.03003 10.5H4.03003C4.18003 7.85 5.54003 5.53 7.58003 4.08ZM19.97 10.5H21.97C21.82 7.3 20.24 4.48 17.85 2.65L16.43 4.08C18.45 5.53 19.82 7.85 19.97 10.5Z" />
  </svg>
)
export const oNotificationsNone = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z" />
  </svg>
)
export const oNotificationsOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM12 6.5C14.49 6.5 16 8.52 16 11V11.1L18 13.1V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C10.26 4.74 10.03 4.83 9.81 4.91L11.45 6.55C11.63 6.53 11.81 6.5 12 6.5ZM5.41 3.35L4 4.76L6.81 7.57C6.29 8.57 6 9.74 6 11V16L4 18V19H18.24L19.98 20.74L21.39 19.33L5.41 3.35ZM16 17H8V11C8 10.32 8.12 9.68 8.34 9.1L16 16.76V17Z" />
  </svg>
)
export const oNotificationsPaused = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 9.8H12.3L9.5 13.2V15H14.5V13.2H11.7L14.5 9.8V8H9.5V9.8ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17ZM12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22Z" />
  </svg>
)
export const oOfflineBolt = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.02002C6.49002 2.02002 2.02002 6.49002 2.02002 12C2.02002 17.51 6.49002 21.98 12 21.98C17.51 21.98 21.98 17.51 21.98 12C21.98 6.49002 17.51 2.02002 12 2.02002ZM12 19.98C7.60002 19.98 4.02002 16.4 4.02002 12C4.02002 7.60002 7.60002 4.02002 12 4.02002C16.4 4.02002 19.98 7.60002 19.98 12C19.98 16.4 16.4 19.98 12 19.98ZM12.75 5.00002L8.25002 13.5H11.39V19L15.75 10.5H12.75V5.00002Z" />
  </svg>
)
export const oOfflinePin = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM7 15H17V17H7V15ZM10.3 11.2L8.4 9.3L7 10.7L10.3 14L17 7.3L15.6 5.9L10.3 11.2Z" />
  </svg>
)
export const oOndemandVideo = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9 7V15L16 11L9 7ZM21 3H3C1.9 3 1 3.9 1 5V17C1 18.1 1.9 19 3 19H8V21H16V19H21C22.1 19 23 18.1 23 17V5C23 3.9 22.1 3 21 3ZM21 17H3V5H21V17Z" />
  </svg>
)
export const oOpacity = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.66 7.99998L12 2.34998L6.34 7.99998C4.78 9.55998 4 11.64 4 13.64C4 15.64 4.78 17.75 6.34 19.31C7.9 20.87 9.95 21.66 12 21.66C14.05 21.66 16.1 20.87 17.66 19.31C19.22 17.75 20 15.64 20 13.64C20 11.64 19.22 9.55998 17.66 7.99998ZM6 14C6.01 12 6.62 10.73 7.76 9.59998L12 5.26998L16.24 9.64998C17.38 10.77 17.99 12 18 14H6Z" />
  </svg>
)
export const oOpenInBrowser = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 4H5C3.89 4 3 4.9 3 6V18C3 19.1 3.89 20 5 20H9V18H5V8H19V18H15V20H19C20.1 20 21 19.1 21 18V6C21 4.9 20.11 4 19 4ZM12 10L8 14H11V20H13V14H16L12 10Z" />
  </svg>
)
export const oOpenInNew = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19ZM14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3H14Z" />
  </svg>
)
export const oOpenWith = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10 9H14V6H17L12 1L7 6H10V9ZM9 10H6V7L1 12L6 17V14H9V10ZM23 12L18 7V10H15V14H18V17L23 12ZM14 15H10V18H7L12 23L17 18H14V15Z" />
  </svg>
)
export const oOutlinedFlag = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14 6L13 4H5V21H7V14H12L13 16H20V6H14ZM18 14H14L13 12H7V6H12L13 8H18V14Z" />
  </svg>
)
export const oPages = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM13 5H19V11H16L17 7L13 8V5ZM5 5H11V8L7 7L8 11H5V5ZM11 19H5V13H8L7 17L11 16V19ZM19 19H13V16L17 17L16 13H19V19ZM14.63 14.63L12 13.72L9.37 14.63L10.28 12L9.37 9.37L12 10.28L14.63 9.37L13.72 12L14.63 14.63Z" />
  </svg>
)
export const oPageview = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.49 16C12.37 16 13.19 15.74 13.88 15.3L16.32 17.74L17.74 16.32L15.3 13.89C15.74 13.19 16 12.38 16 11.5C16 9.01 13.99 7 11.5 7C9.01 7 7 9.01 7 11.5C7 13.99 9.01 16 11.49 16ZM11.5 9C12.88 9 14 10.12 14 11.5C14 12.88 12.88 14 11.5 14C10.12 14 9 12.88 9 11.5C9 10.12 10.12 9 11.5 9ZM20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18Z" />
  </svg>
)
export const oPalette = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 22C6.49 22 2 17.51 2 12C2 6.49 6.49 2 12 2C17.51 2 22 6.04 22 11C22 14.31 19.31 17 16 17H14.23C13.95 17 13.73 17.22 13.73 17.5C13.73 17.62 13.78 17.73 13.86 17.83C14.27 18.3 14.5 18.89 14.5 19.5C14.5 20.88 13.38 22 12 22ZM12 4C7.59 4 4 7.59 4 12C4 16.41 7.59 20 12 20C12.28 20 12.5 19.78 12.5 19.5C12.5 19.34 12.42 19.22 12.36 19.15C11.95 18.69 11.73 18.1 11.73 17.5C11.73 16.12 12.85 15 14.23 15H16C18.21 15 20 13.21 20 11C20 7.14 16.41 4 12 4ZM6.5 13C7.32843 13 8 12.3284 8 11.5C8 10.6716 7.32843 10 6.5 10C5.67157 10 5 10.6716 5 11.5C5 12.3284 5.67157 13 6.5 13ZM11 7.5C11 8.32843 10.3284 9 9.5 9C8.67157 9 8 8.32843 8 7.5C8 6.67157 8.67157 6 9.5 6C10.3284 6 11 6.67157 11 7.5ZM14.5 9C15.3284 9 16 8.32843 16 7.5C16 6.67157 15.3284 6 14.5 6C13.6716 6 13 6.67157 13 7.5C13 8.32843 13.6716 9 14.5 9ZM19 11.5C19 12.3284 18.3284 13 17.5 13C16.6716 13 16 12.3284 16 11.5C16 10.6716 16.6716 10 17.5 10C18.3284 10 19 10.6716 19 11.5Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oPanTool = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 24H11.45C10.37 24 9.31001 23.55 8.56001 22.77L1.26001 15.16L3.33001 13.33C3.95001 12.78 4.86001 12.67 5.59001 13.06L8.00001 14.34V4.79001C8.00001 3.41001 9.12001 2.29001 10.5 2.29001C10.67 2.29001 10.84 2.31001 11.01 2.34001C11.1 1.04001 12.18 0.0100098 13.5 0.0100098C14.36 0.0100098 15.11 0.44001 15.56 1.10001C15.85 0.98001 16.17 0.92001 16.5 0.92001C17.88 0.92001 19 2.04001 19 3.42001V3.70001C19.16 3.67001 19.33 3.65001 19.5 3.65001C20.88 3.65001 22 4.77001 22 6.15001V20C22 22.21 20.21 24 18 24ZM4.14001 15.28L10 21.38C10.38 21.77 10.9 22 11.44 22H18C19.1 22 20 21.1 20 20V6.15001C20 5.87001 19.78 5.65001 19.5 5.65001C19.22 5.65001 19 5.87001 19 6.15001V12H17V3.42001C17 3.14001 16.78 2.92001 16.5 2.92001C16.22 2.92001 16 3.14001 16 3.42001V12H14V2.51001C14 2.23001 13.78 2.01001 13.5 2.01001C13.22 2.01001 13 2.23001 13 2.51001V12H11V4.79001C11 4.51001 10.78 4.29001 10.5 4.29001C10.22 4.29001 10 4.52001 10 4.79001V17.66L4.65001 14.83L4.14001 15.28Z" />
  </svg>
)
export const oPanorama = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H21C22.1 20 23 19.1 23 18V6C23 4.9 22.1 4 21 4ZM21 18H3V6H21V18ZM14.5 11L11 15.51L8.5 12.5L5 17H19L14.5 11Z" />
  </svg>
)
export const oPanoramaFishEye = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
  </svg>
)
export const oPanoramaHorizontal = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6.54V17.45C17.4 16.68 14.72 16.29 12 16.29C9.28 16.29 6.6 16.68 4 17.45V6.54C6.6 7.31 9.28 7.7 12 7.7C14.72 7.71 17.4 7.32 20 6.54ZM21.43 4C21.33 4 21.23 4.02 21.12 4.06C18.18 5.16 15.09 5.7 12 5.7C8.91 5.7 5.82 5.15 2.88 4.06C2.77 4.02 2.66 4 2.57 4C2.23 4 2 4.23 2 4.63V19.38C2 19.77 2.23 20 2.57 20C2.67 20 2.77 19.98 2.88 19.94C5.82 18.84 8.91 18.3 12 18.3C15.09 18.3 18.18 18.85 21.12 19.94C21.23 19.98 21.33 20 21.43 20C21.76 20 22 19.77 22 19.37V4.63C22 4.23 21.76 4 21.43 4Z" />
  </svg>
)
export const oPanoramaVertical = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.94 21.12C18.84 18.18 18.3 15.09 18.3 12C18.3 8.91 18.85 5.82 19.94 2.88C19.98 2.77 20 2.66 20 2.57C20 2.23 19.77 2 19.37 2H4.63C4.23 2 4 2.23 4 2.57C4 2.67 4.02 2.77 4.06 2.88C5.16 5.82 5.71 8.91 5.71 12C5.71 15.09 5.16 18.18 4.07 21.12C4.02 21.23 4 21.34 4 21.43C4 21.76 4.23 22 4.63 22H19.38C19.77 22 20.01 21.76 20.01 21.43C20 21.33 19.98 21.23 19.94 21.12ZM6.54 20C7.31 17.4 7.7 14.72 7.7 12C7.7 9.28 7.31 6.6 6.54 4H17.45C16.68 6.6 16.29 9.28 16.29 12C16.29 14.72 16.68 17.4 17.45 20H6.54Z" />
  </svg>
)
export const oPanoramaWideAngle = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6C14.45 6 16.71 6.2 19.29 6.64C19.76 8.42 20 10.22 20 12C20 13.78 19.76 15.58 19.29 17.36C16.71 17.8 14.45 18 12 18C9.55 18 7.29 17.8 4.71 17.36C4.24 15.58 4 13.78 4 12C4 10.22 4.24 8.42 4.71 6.64C7.29 6.2 9.55 6 12 6ZM12 4C9.27 4 6.78 4.24 4.05 4.72L3.12 4.88L2.87 5.78C2.29 7.85 2 9.93 2 12C2 14.07 2.29 16.15 2.87 18.22L3.12 19.11L4.05 19.27C6.78 19.76 9.27 20 12 20C14.73 20 17.22 19.76 19.95 19.28L20.88 19.12L21.13 18.23C21.71 16.15 22 14.07 22 12C22 9.93 21.71 7.85 21.13 5.78L20.88 4.89L19.95 4.73C17.22 4.24 14.73 4 12 4Z" />
  </svg>
)
export const oPartyMode = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H16.83L15 2H9L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H8.05L8.64 5.35L9.88 4H14.12L15.36 5.35L15.95 6H20V18ZM9 12C9 10.34 10.34 9 12 9H15.98C15.06 7.79 13.63 7 12 7C9.24 7 7 9.24 7 12C7 12.34 7.04 12.68 7.1 13H9.18C9.07 12.69 9 12.35 9 12ZM15 12C15 13.66 13.66 15 12 15H8.02C8.94 16.21 10.37 17 12 17C14.76 17 17 14.76 17 12C17 11.66 16.97 11.32 16.9 11H14.82C14.93 11.31 15 11.65 15 12Z" />
  </svg>
)
export const oPause = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" />
  </svg>
)
export const oPauseCircleFilled = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 16H9V8H11V16ZM15 16H13V8H15V16Z" />
  </svg>
)
export const oPauseCircleOutline = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9 16H11V8H9V16ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM13 16H15V8H13V16Z" />
  </svg>
)
export const oPausePresentation = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3H3C1.9 3 1 3.85 1 4.95V18.95C1 20.05 1.9 21 3 21H21C22.1 21 23 20.05 23 18.95V4.95C23 3.85 22.1 3 21 3ZM21 19H3V5H21V19ZM9 8H11V16H9V8ZM13 8H15V16H13V8Z" />
  </svg>
)
export const oPayment = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" />
  </svg>
)
export const oPeople = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9 13.75C6.66 13.75 2 14.92 2 17.25V19H16V17.25C16 14.92 11.34 13.75 9 13.75ZM4.34 17C5.18 16.42 7.21 15.75 9 15.75C10.79 15.75 12.82 16.42 13.66 17H4.34ZM9 12C10.93 12 12.5 10.43 12.5 8.5C12.5 6.57 10.93 5 9 5C7.07 5 5.5 6.57 5.5 8.5C5.5 10.43 7.07 12 9 12ZM9 7C9.83 7 10.5 7.67 10.5 8.5C10.5 9.33 9.83 10 9 10C8.17 10 7.5 9.33 7.5 8.5C7.5 7.67 8.17 7 9 7ZM16.04 13.81C17.2 14.65 18 15.77 18 17.25V19H22V17.25C22 15.23 18.5 14.08 16.04 13.81ZM15 12C16.93 12 18.5 10.43 18.5 8.5C18.5 6.57 16.93 5 15 5C14.46 5 13.96 5.13 13.5 5.35C14.13 6.24 14.5 7.33 14.5 8.5C14.5 9.67 14.13 10.76 13.5 11.65C13.96 11.87 14.46 12 15 12Z" />
  </svg>
)
export const oPeopleOutline = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9 13.75C6.66 13.75 2 14.92 2 17.25V19H16V17.25C16 14.92 11.34 13.75 9 13.75ZM4.34 17C5.18 16.42 7.21 15.75 9 15.75C10.79 15.75 12.82 16.42 13.66 17H4.34ZM9 12C10.93 12 12.5 10.43 12.5 8.5C12.5 6.57 10.93 5 9 5C7.07 5 5.5 6.57 5.5 8.5C5.5 10.43 7.07 12 9 12ZM9 7C9.83 7 10.5 7.67 10.5 8.5C10.5 9.33 9.83 10 9 10C8.17 10 7.5 9.33 7.5 8.5C7.5 7.67 8.17 7 9 7ZM16.04 13.81C17.2 14.65 18 15.77 18 17.25V19H22V17.25C22 15.23 18.5 14.08 16.04 13.81ZM15 12C16.93 12 18.5 10.43 18.5 8.5C18.5 6.57 16.93 5 15 5C14.46 5 13.96 5.13 13.5 5.35C14.13 6.24 14.5 7.33 14.5 8.5C14.5 9.67 14.13 10.76 13.5 11.65C13.96 11.87 14.46 12 15 12Z" />
  </svg>
)
export const oPermCameraMic = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6C10.9 6 10 6.9 10 8V12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12V8C14 6.9 13.1 6 12 6ZM20 5H16.83L14.97 3H8.96L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5ZM20 19H13V17.91C15.83 17.43 18 14.97 18 12H16C16 14.21 14.21 16 12 16C9.79 16 8 14.21 8 12H6C6 14.97 8.17 17.43 11 17.91V19H4V7H8.21L8.8 6.35L10.04 5H14.28L15.52 6.35L16.11 7H20V19Z" />
  </svg>
)
export const oPermContactCalendar = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.22C20.79 4.1 20.73 3.99 20.66 3.88C20.52 3.67 20.33 3.48 20.12 3.34C20.01 3.27 19.9 3.21 19.78 3.16C19.54 3.06 19.28 3 19 3H18V1H16V3H8V1H6V3H5C4.58 3 4.2 3.13 3.88 3.34C3.67 3.48 3.48 3.67 3.34 3.88C3.27 3.99 3.21 4.1 3.16 4.22C3.06 4.46 3 4.72 3 5V19C3 20.1 3.89 21 5 21H19C19.28 21 19.54 20.94 19.78 20.84C19.9 20.79 20.01 20.73 20.12 20.66C20.33 20.52 20.52 20.33 20.66 20.12C20.87 19.8 21 19.41 21 19V5C21 4.72 20.94 4.46 20.84 4.22ZM5 19V5H19V19H5ZM12 12.88C9.97 12.88 6 13.96 6 16.46V18H18V16.47C18 13.96 14.03 12.88 12 12.88ZM8.31 16C9 15.44 10.69 14.88 12 14.88C13.31 14.88 15.01 15.44 15.69 16H8.31ZM12 12C13.65 12 15 10.65 15 9C15 7.35 13.65 6 12 6C10.35 6 9 7.35 9 9C9 10.65 10.35 12 12 12ZM12 8C12.55 8 13 8.45 13 9C13 9.55 12.55 10 12 10C11.45 10 11 9.55 11 9C11 8.45 11.45 8 12 8Z" />
  </svg>
)
export const oPermDataSetting = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.99 11.57H20V0L0 20H11.56V18H4.83L17.99 4.83V11.57ZM23.77 20.32L22.7 19.49C22.72 19.33 22.74 19.17 22.74 19C22.74 18.83 22.73 18.67 22.7 18.51L23.76 17.68C23.85 17.6 23.88 17.47 23.82 17.36L22.82 15.63C22.76 15.52 22.63 15.48 22.51 15.52L21.27 16.02C21.01 15.82 20.73 15.65 20.42 15.53L20.23 14.21C20.22 14.09 20.11 14 19.99 14H17.99C17.87 14 17.76 14.09 17.74 14.21L17.55 15.53C17.25 15.66 16.96 15.82 16.7 16.02L15.46 15.52C15.35 15.48 15.22 15.52 15.15 15.63L14.15 17.36C14.09 17.47 14.11 17.6 14.21 17.68L15.27 18.51C15.25 18.67 15.24 18.83 15.24 19C15.24 19.17 15.25 19.33 15.27 19.49L14.21 20.32C14.12 20.4 14.09 20.53 14.15 20.64L15.15 22.37C15.21 22.48 15.34 22.52 15.46 22.48L16.7 21.98C16.96 22.18 17.24 22.35 17.55 22.47L17.74 23.79C17.76 23.91 17.86 24 17.99 24H19.99C20.11 24 20.22 23.91 20.24 23.79L20.43 22.47C20.73 22.34 21.02 22.18 21.27 21.98L22.52 22.48C22.63 22.52 22.76 22.48 22.83 22.37L23.83 20.64C23.89 20.53 23.86 20.4 23.77 20.32ZM18.99 20.5C18.16 20.5 17.49 19.83 17.49 19C17.49 18.17 18.16 17.5 18.99 17.5C19.82 17.5 20.49 18.17 20.49 19C20.49 19.83 19.82 20.5 18.99 20.5Z" />
  </svg>
)
export const oPermDeviceInformation = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM17 1.01L7 1C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1.01 17 1.01ZM17 21H7V20H17V21ZM17 18H7V6H17V18ZM7 4V3H17V4H7Z" />
  </svg>
)
export const oPermIdentity = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 15C14.7 15 17.8 16.29 18 17V18H6V17.01C6.2 16.29 9.3 15 12 15ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13Z" />
  </svg>
)
export const oPermMedia = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M2 6H0V11H0.01L0 20C0 21.1 0.9 22 2 22H20V20H2V6ZM7 15H21L17.5 10.5L15 13.51L11.5 9L7 15ZM22 4H14L12 2H6C4.9 2 4.01 2.9 4.01 4L4 16C4 17.1 4.9 18 6 18H22C23.1 18 24 17.1 24 16V6C24 4.9 23.1 4 22 4ZM22 16H6V4H11.17L12.58 5.41L13.17 6H22V16Z" />
  </svg>
)
export const oPermPhoneMsg = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 15.5C18.75 15.5 17.55 15.3 16.43 14.93C16.33 14.9 16.22 14.88 16.12 14.88C15.86 14.88 15.61 14.98 15.41 15.17L13.21 17.37C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.58C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.5C21 15.95 20.55 15.5 20 15.5ZM5.03 5H6.53C6.6 5.88 6.75 6.75 6.99 7.59L5.79 8.8C5.38 7.59 5.12 6.32 5.03 5ZM19 18.97C17.68 18.88 16.4 18.62 15.2 18.21L16.4 17.01C17.25 17.25 18.12 17.4 19 17.46V18.97ZM12 3V13L15 10H21V3H12ZM19 8H14V5H19V8Z" />
  </svg>
)
export const oPermScanWifi = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22L24 7.25C20.85 4.87 17.05 3 12 3ZM2.92 7.65C5.8 5.85 8.74 5 12 5C15.25 5 18.18 5.85 21.08 7.67L12 18.83L2.92 7.65ZM11 10H13V16H11V10ZM11 6H13V8H11V6Z" />
  </svg>
)
export const oPerson = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 16C14.7 16 17.8 17.29 18 18H6C6.23 17.28 9.31 16 12 16ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" />
  </svg>
)
export const oPersonAdd = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C12.79 4 11 5.79 11 8C11 10.21 12.79 12 15 12ZM15 6C16.1 6 17 6.9 17 8C17 9.1 16.1 10 15 10C13.9 10 13 9.1 13 8C13 6.9 13.9 6 15 6ZM15 14C12.33 14 7 15.34 7 18V20H23V18C23 15.34 17.67 14 15 14ZM9 18C9.22 17.28 12.31 16 15 16C17.7 16 20.8 17.29 21 18H9ZM6 15V12H9V10H6V7H4V10H1V12H4V15H6Z" />
  </svg>
)
export const oPersonAddDisabled = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 5.99996C16.1 5.99996 17 6.89996 17 7.99996C17 8.98996 16.27 9.81996 15.33 9.96996L13.02 7.65996C13.19 6.71996 14.01 5.99996 15 5.99996ZM15 3.99996C12.79 3.99996 11 5.78996 11 7.99996C11 8.17996 11.03 8.34996 11.05 8.51996L14.48 11.95C14.65 11.97 14.82 12 15 12C17.21 12 19 10.21 19 7.99996C19 5.78996 17.21 3.99996 15 3.99996ZM16.69 14.16L22.53 20H23V18C23 15.86 19.44 14.5 16.69 14.16ZM13.01 16.13L14.88 18H9C9.08 17.76 9.88 16.99 11.91 16.43L13.01 16.13ZM1.41 1.70996L0 3.11996L4 7.11996V9.99996H1V12H4V15H6V12H8.88L11.39 14.51C9.19 15.11 7 16.3 7 18V20H16.88L20.88 24L22.29 22.59L1.41 1.70996ZM6 9.99996V9.11996L6.88 9.99996H6Z" />
  </svg>
)
export const oPersonOutline = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5.9C13.16 5.9 14.1 6.84 14.1 8C14.1 9.16 13.16 10.1 12 10.1C10.84 10.1 9.9 9.16 9.9 8C9.9 6.84 10.84 5.9 12 5.9ZM12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13Z" />
  </svg>
)
export const oPersonPin = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 2H5C3.89 2 3 2.9 3 4V18C3 19.1 3.89 20 5 20H9L12 23L15 20H19C20.1 20 21 19.1 21 18V4C21 2.9 20.1 2 19 2ZM19 18H14.17L13.58 18.59L12 20.17L10.41 18.58L9.83 18H5V4H19V18ZM12 11C13.65 11 15 9.65 15 8C15 6.35 13.65 5 12 5C10.35 5 9 6.35 9 8C9 9.65 10.35 11 12 11ZM12 7C12.55 7 13 7.45 13 8C13 8.55 12.55 9 12 9C11.45 9 11 8.55 11 8C11 7.45 11.45 7 12 7ZM18 15.58C18 13.08 14.03 12 12 12C9.97 12 6 13.08 6 15.58V17H18V15.58ZM8.48 15C9.22 14.49 10.71 14 12 14C13.29 14 14.78 14.49 15.52 15H8.48Z" />
  </svg>
)
export const oPersonPinCircle = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1C7.59 1 4 4.59 4 9C4 14.57 10.96 22.34 11.26 22.67L12 23.49L12.74 22.67C13.04 22.34 20 14.57 20 9C20 4.59 16.41 1 12 1ZM12 20.47C9.82 17.86 6 12.54 6 9C6 5.69 8.69 3 12 3C15.31 3 18 5.69 18 9C18 12.83 13.75 18.36 12 20.47ZM12 9C12.83 9 13.5 8.33 13.5 7.5C13.5 6.67 12.83 6 12 6C11.17 6 10.5 6.68 10.5 7.5C10.5 8.33 11.17 9 12 9ZM12 10C11 10 9 10.5 9 11.5V11.62C9.73 12.46 10.8 13 12 13C13.2 13 14.27 12.46 15 11.62V11.5C15 10.5 13 10 12 10Z" />
  </svg>
)
export const oPersonalVideo = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3H3C1.89 3 1 3.89 1 5V17C1 18.1 1.89 19 3 19H8V21H16V19H21C22.1 19 22.99 18.1 22.99 17L23 5C23 3.89 22.1 3 21 3ZM21 17H3V5H21V17Z" />
  </svg>
)
export const oPets = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 8C10.3807 8 11.5 6.88071 11.5 5.5C11.5 4.11929 10.3807 3 9 3C7.61929 3 6.5 4.11929 6.5 5.5C6.5 6.88071 7.61929 8 9 8ZM4.5 12C5.88071 12 7 10.8807 7 9.5C7 8.11929 5.88071 7 4.5 7C3.11929 7 2 8.11929 2 9.5C2 10.8807 3.11929 12 4.5 12ZM17.5 5.5C17.5 6.88071 16.3807 8 15 8C13.6193 8 12.5 6.88071 12.5 5.5C12.5 4.11929 13.6193 3 15 3C16.3807 3 17.5 4.11929 17.5 5.5ZM19.5 12C20.8807 12 22 10.8807 22 9.5C22 8.11929 20.8807 7 19.5 7C18.1193 7 17 8.11929 17 9.5C17 10.8807 18.1193 12 19.5 12ZM16.4437 13.8055C16.7334 14.1469 17.0277 14.4938 17.34 14.86C17.4179 14.9379 17.4969 15.0163 17.5765 15.0953C18.8347 16.3446 20.2416 17.7413 19.95 19.66C19.66 20.67 18.93 21.69 17.62 21.98C17.2841 22.0444 16.6092 21.9564 15.7368 21.8425C14.7136 21.709 13.4187 21.54 12.08 21.54H11.9C10.5726 21.54 9.2882 21.709 8.26908 21.8431C7.38417 21.9596 6.6993 22.0497 6.36002 21.98C5.05002 21.69 4.32002 20.68 4.03002 19.66C3.748 17.7516 5.15393 16.3559 6.41178 15.1071C6.49195 15.0275 6.57153 14.9485 6.65002 14.87C7.21409 14.2162 7.71653 13.624 8.23371 13.0145C8.52338 12.6731 8.81768 12.3262 9.13002 11.96C9.60002 11.42 10.18 10.88 10.88 10.64C10.99 10.6 11.1 10.57 11.21 10.55C11.47 10.5 11.74 10.5 12 10.5C12.26 10.5 12.53 10.5 12.78 10.54C12.89 10.56 13 10.59 13.11 10.63C13.81 10.87 14.4 11.41 14.86 11.95C15.4241 12.6038 15.9265 13.196 16.4437 13.8055Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oPhone = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6.55001 5C6.61001 5.89 6.76001 6.76 7.00001 7.59L5.80001 8.79C5.39001 7.59 5.13001 6.32 5.04001 5H6.55001ZM16.41 17.02C17.26 17.26 18.13 17.41 19.01 17.47V18.96C17.69 18.87 16.42 18.61 15.21 18.21L16.41 17.02ZM7.51001 3H4.01001C3.46001 3 3.01001 3.45 3.01001 4C3.01001 13.39 10.62 21 20.01 21C20.56 21 21.01 20.55 21.01 20V16.51C21.01 15.96 20.56 15.51 20.01 15.51C18.77 15.51 17.56 15.31 16.44 14.94C16.34 14.9 16.23 14.89 16.13 14.89C15.87 14.89 15.62 14.99 15.42 15.18L13.22 17.38C10.39 15.93 8.07001 13.62 6.63001 10.79L8.83001 8.59C9.11001 8.31 9.19001 7.92 9.08001 7.57C8.71001 6.45 8.51001 5.25 8.51001 4C8.51001 3.45 8.06001 3 7.51001 3Z" />
  </svg>
)
export const oPhoneAndroid = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16 1H8C6.34 1 5 2.34 5 4V20C5 21.66 6.34 23 8 23H16C17.66 23 19 21.66 19 20V4C19 2.34 17.66 1 16 1ZM17 18H7V4H17V18ZM14 21H10V20H14V21Z" />
  </svg>
)
export const oPhoneBluetoothSpeaker = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 15.5C18.75 15.5 17.55 15.3 16.43 14.93C16.33 14.9 16.22 14.88 16.12 14.88C15.86 14.88 15.61 14.98 15.41 15.17L13.21 17.37C10.38 15.93 8.06 13.62 6.62 10.78L8.82 8.57C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.5C21 15.95 20.55 15.5 20 15.5ZM5.03 5H6.53C6.6 5.88 6.75 6.75 6.98 7.58L5.78 8.79C5.38 7.58 5.12 6.32 5.03 5ZM19 18.97C17.68 18.88 16.4 18.62 15.2 18.21L16.4 17.01C17.25 17.25 18.12 17.4 19 17.46V18.97ZM14.71 9.5L17 7.21V11H17.5L20.35 8.15L18.21 6L20.36 3.85L17.5 1H17V4.79L14.71 2.5L14 3.21L16.79 6L14 8.79L14.71 9.5ZM18 2.91L18.94 3.85L18 4.79V2.91ZM18 7.21L18.94 8.15L18 9.09V7.21Z" />
  </svg>
)
export const oPhoneCallback = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 15.5099C18.76 15.5099 17.55 15.3099 16.43 14.9399C16.33 14.8999 16.22 14.8899 16.12 14.8899C15.86 14.8899 15.61 14.9899 15.41 15.1799L13.21 17.3799C10.38 15.9299 8.06 13.6199 6.62 10.7899L8.82 8.58995C9.1 8.30995 9.18 7.91995 9.07 7.56995C8.7 6.44995 8.5 5.24995 8.5 3.99995C8.5 3.44995 8.05 2.99995 7.5 2.99995H4C3.45 2.99995 3 3.44995 3 3.99995C3 13.3899 10.61 20.9999 20 20.9999C20.55 20.9999 21 20.5499 21 19.9999V16.5099C21 15.9599 20.55 15.5099 20 15.5099ZM5.03 4.99995H6.53C6.6 5.88995 6.75 6.75995 6.99 7.58995L5.79 8.78995C5.38 7.58995 5.12 6.31995 5.03 4.99995ZM19 18.9699C17.68 18.8799 16.41 18.6199 15.2 18.2199L16.39 17.0299C17.24 17.2699 18.11 17.4199 18.99 17.4799V18.9699H19ZM18 8.99995H15.41L20.43 3.97995L19.02 2.56995L14 7.58995V4.99995H12V10.9999H18V8.99995Z" />
  </svg>
)
export const oPhoneForwarded = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 15.5C18.75 15.5 17.55 15.3 16.43 14.93C16.33 14.9 16.22 14.88 16.12 14.88C15.86 14.88 15.61 14.98 15.41 15.17L13.21 17.37C10.38 15.93 8.06 13.62 6.62 10.78L8.82 8.57C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.5C21 15.95 20.55 15.5 20 15.5ZM5.03 5H6.53C6.6 5.88 6.75 6.75 6.98 7.58L5.78 8.79C5.38 7.58 5.12 6.32 5.03 5ZM19 18.97C17.68 18.88 16.4 18.62 15.2 18.21L16.4 17.01C17.25 17.25 18.12 17.4 19 17.46V18.97ZM18 11L23 6L18 1V4H14V8H18V11Z" />
  </svg>
)
export const oPhoneInTalk = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 12H17C17 9.24 14.76 7 12 7V9C13.66 9 15 10.34 15 12ZM19 12H21C21 7.03 16.97 3 12 3V5C15.87 5 19 8.13 19 12ZM20 15.5C18.75 15.5 17.55 15.3 16.43 14.93C16.33 14.9 16.22 14.88 16.12 14.88C15.86 14.88 15.61 14.98 15.41 15.17L13.21 17.37C10.38 15.93 8.06 13.62 6.62 10.78L8.82 8.57C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.5C21 15.95 20.55 15.5 20 15.5ZM5.03 5H6.53C6.6 5.88 6.75 6.75 6.98 7.58L5.78 8.79C5.38 7.58 5.12 6.32 5.03 5ZM19 18.97C17.68 18.88 16.4 18.62 15.2 18.21L16.4 17.01C17.25 17.25 18.12 17.4 19 17.46V18.97Z" />
  </svg>
)
export const oPhoneIphone = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 1H7.5C6.12 1 5 2.12 5 3.5V20.5C5 21.88 6.12 23 7.5 23H15.5C16.88 23 18 21.88 18 20.5V3.5C18 2.12 16.88 1 15.5 1ZM11.5 22C10.67 22 10 21.33 10 20.5C10 19.67 10.67 19 11.5 19C12.33 19 13 19.67 13 20.5C13 21.33 12.33 22 11.5 22ZM16 18H7V4H16V18Z" />
  </svg>
)
export const oPhoneLocked = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 15.5C18.75 15.5 17.55 15.3 16.43 14.93C16.33 14.9 16.22 14.88 16.12 14.88C15.86 14.88 15.61 14.98 15.41 15.17L13.21 17.37C10.38 15.93 8.06 13.62 6.62 10.78L8.82 8.57C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.5C21 15.95 20.55 15.5 20 15.5ZM5.03 5H6.53C6.6 5.88 6.75 6.75 6.98 7.58L5.78 8.79C5.38 7.58 5.12 6.32 5.03 5ZM19 18.97C17.68 18.88 16.4 18.62 15.2 18.21L16.4 17.01C17.25 17.25 18.12 17.4 19 17.46V18.97ZM20 4V3.5C20 2.12 18.88 1 17.5 1C16.12 1 15 2.12 15 3.5V4C14.45 4 14 4.45 14 5V9C14 9.55 14.45 10 15 10H20C20.55 10 21 9.55 21 9V5C21 4.45 20.55 4 20 4ZM19 4H16V3.5C16 2.67 16.67 2 17.5 2C18.33 2 19 2.67 19 3.5V4Z" />
  </svg>
)
export const oPhoneMissed = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M23.71 16.67C20.66 13.78 16.54 12 12 12C7.46 12 3.34 13.78 0.29 16.67C0.11 16.85 0 17.1 0 17.38C0 17.66 0.11 17.91 0.29 18.09L2.77 20.57C2.95 20.75 3.2 20.86 3.48 20.86C3.75 20.86 4 20.75 4.18 20.58C4.97 19.84 5.87 19.22 6.84 18.73C7.17 18.57 7.4 18.23 7.4 17.83V14.73C8.85 14.25 10.4 14 12 14C13.6 14 15.15 14.25 16.6 14.72V17.82C16.6 18.21 16.83 18.56 17.16 18.72C18.14 19.21 19.03 19.84 19.83 20.57C20.01 20.75 20.26 20.85 20.53 20.85C20.81 20.85 21.06 20.74 21.24 20.56L23.72 18.08C23.9 17.9 24.01 17.65 24.01 17.37C24.01 17.09 23.89 16.85 23.71 16.67ZM5.4 17.23C4.74 17.6 4.11 18.03 3.53 18.5L2.46 17.43C3.37 16.68 4.36 16.04 5.41 15.53V17.23H5.4ZM20.48 18.49C19.88 18.01 19.26 17.59 18.6 17.22V15.52C19.65 16.03 20.63 16.67 21.55 17.42L20.48 18.49ZM7 6.43L11.94 11.37L19.01 4.3L17.6 2.88L11.94 8.54L8.4 5H11V3H5V9H7V6.43Z" />
  </svg>
)
export const oPhonePaused = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6.55001 5C6.61001 5.88 6.76001 6.75 6.99001 7.58L5.79001 8.79C5.39001 7.58 5.13001 6.32 5.04001 5H6.55001ZM16.41 17.01C17.26 17.25 18.13 17.4 19.01 17.46V18.96C17.69 18.87 16.41 18.61 15.21 18.2L16.41 17.01ZM7.51001 3H4.01001C3.46001 3 3.01001 3.45 3.01001 4C3.01001 13.39 10.62 21 20.01 21C20.56 21 21.01 20.55 21.01 20V16.5C21.01 15.95 20.56 15.5 20.01 15.5C18.76 15.5 17.56 15.3 16.44 14.93C16.34 14.9 16.23 14.88 16.13 14.88C15.87 14.88 15.62 14.98 15.42 15.17L13.22 17.37C10.39 15.93 8.07001 13.62 6.63001 10.78L8.83001 8.57C9.11001 8.31 9.19001 7.92 9.08001 7.57C8.71001 6.45 8.51001 5.25 8.51001 4C8.51001 3.45 8.06001 3 7.51001 3ZM15.01 3H17.01V10H15.01V3ZM19.01 3H21.01V10H19.01V3Z" />
  </svg>
)
export const oPhonelink = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H22V4H4C2.9 4 2 4.9 2 6V17H0V20H14V17H4V6ZM23 8H17C16.45 8 16 8.45 16 9V19C16 19.55 16.45 20 17 20H23C23.55 20 24 19.55 24 19V9C24 8.45 23.55 8 23 8ZM22 17H18V10H22V17Z" />
  </svg>
)
export const oPhonelinkErase = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13.01 8.2L12.01 7.2L8.01001 11.2L4.01001 7.2L3.01001 8.2L7.01001 12.2L3.01001 16.2L4.01001 17.2L8.01001 13.2L12.01 17.2L13.01 16.2L9.01001 12.2L13.01 8.2ZM19.01 1H9.01001C7.91001 1 7.01001 1.9 7.01001 3V6H9.01001V4H19.01V20H9.01001V18H7.01001V21C7.01001 22.1 7.91001 23 9.01001 23H19.01C20.11 23 21.01 22.1 21.01 21V3C21.01 1.9 20.11 1 19.01 1Z" />
  </svg>
)
export const oPhonelinkLock = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.01 1H9.01001C7.91001 1 7.01001 1.9 7.01001 3V6H9.01001V4H19.01V20H9.01001V18H7.01001V21C7.01001 22.1 7.91001 23 9.01001 23H19.01C20.11 23 21.01 22.1 21.01 21V3C21.01 1.9 20.11 1 19.01 1ZM10.81 11V9.5C10.81 8.1 9.41001 7 8.01001 7C6.61001 7 5.21001 8.1 5.21001 9.5V11C4.61001 11 4.01001 11.6 4.01001 12.2V15.7C4.01001 16.4 4.61001 17 5.21001 17H10.71C11.41 17 12.01 16.4 12.01 15.8V12.3C12.01 11.6 11.41 11 10.81 11ZM9.51001 11H6.51001V9.5C6.51001 8.7 7.21001 8.2 8.01001 8.2C8.81001 8.2 9.51001 8.7 9.51001 9.5V11Z" />
  </svg>
)
export const oPhonelinkOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22.01 6.00001V4.00001H7.40001L9.40001 6.00001H22.01ZM24.01 19V9.00001C24.01 8.45001 23.56 8.00001 23.01 8.00001H17.01C16.46 8.00001 16.01 8.45001 16.01 9.00001V12.61L18.01 14.61V10H22.01V17H20.4L23.33 19.93C23.72 19.8 24.01 19.44 24.01 19ZM2.07001 1.51001L0.66001 2.92001L2.48001 4.74001C2.19001 5.08001 2.01001 5.52001 2.01001 6.00001V17H0.0100098V20H17.74L20.09 22.35L21.5 20.94L2.07001 1.51001ZM4.01001 17V6.27001L14.74 17H4.01001Z" />
  </svg>
)
export const oPhonelinkRing = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20.1 7.7L19.1 8.7C20.9 10.5 20.9 13.3 19.1 15.2L20.1 16.2C22.6 13.9 22.6 10.1 20.1 7.7ZM18 9.8L17 10.8C17.5 11.5 17.5 12.4 17 13.1L18 14.1C19.2 12.9 19.2 11.1 18 9.8ZM14 1H4C2.9 1 2 1.9 2 3V21C2 22.1 2.9 23 4 23H14C15.1 23 16 22.1 16 21V3C16 1.9 15.1 1 14 1ZM14 20H4V4H14V20Z" />
  </svg>
)
export const oPhonelinkSetup = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6.99997 3V6H8.99997V4H19V20H8.99997V18H6.99997V21C6.99997 22.1 7.89997 23 8.99997 23H19C20.1 23 21 22.1 21 21V3C21 1.9 20.1 1 19 1H8.99997C7.89997 1 6.99997 1.9 6.99997 3ZM9.49997 15.5C9.78997 15.38 10.05 15.21 10.3 15.02L10.28 15.05L11.29 15.44C11.52 15.53 11.78 15.44 11.9 15.22L12.74 13.76C12.86 13.55 12.81 13.27 12.62 13.12L11.77 12.44L11.75 12.47C11.77 12.31 11.8 12.15 11.8 11.99C11.8 11.83 11.77 11.67 11.75 11.51L11.77 11.54L12.62 10.86C12.81 10.71 12.86 10.43 12.74 10.22L11.9 8.76C11.78 8.55 11.52 8.45 11.29 8.54L10.28 8.93L10.3 8.96C10.05 8.79 9.78997 8.62 9.49997 8.5L9.32997 7.42C9.29997 7.18 9.08997 7 8.83997 7H7.15997C6.90997 7 6.69997 7.18 6.66997 7.42L6.49997 8.5C6.20997 8.62 5.94997 8.79 5.69997 8.98L5.71997 8.95L4.69997 8.56C4.46997 8.47 4.20997 8.56 4.08997 8.78L3.24997 10.24C3.12997 10.45 3.17997 10.73 3.36997 10.88L4.21997 11.56L4.23997 11.53C4.21997 11.68 4.18997 11.84 4.18997 12C4.18997 12.16 4.21997 12.32 4.23997 12.48L4.21997 12.45L3.36997 13.13C3.17997 13.28 3.12997 13.56 3.24997 13.77L4.08997 15.23C4.20997 15.44 4.46997 15.54 4.69997 15.45L5.70997 15.06L5.69997 15.02C5.94997 15.21 6.20997 15.38 6.49997 15.5L6.66997 16.57C6.69997 16.82 6.90997 17 7.15997 17H8.83997C9.08997 17 9.29997 16.82 9.32997 16.58L9.49997 15.5ZM5.99997 12C5.99997 10.9 6.89997 10 7.99997 10C9.09997 10 9.99997 10.9 9.99997 12C9.99997 13.1 9.09997 14 7.99997 14C6.89997 14 5.99997 13.1 5.99997 12Z" />
  </svg>
)
export const oPhoto = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM14.14 11.86L11.14 15.73L9 13.14L6 17H18L14.14 11.86Z" />
  </svg>
)
export const oPhotoAlbum = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM11 4V9L10 8.25L9 9V4H11ZM18 20H6V4H7V13L10 10.75L13 13V4H18V20ZM11.28 17.96L9.5 15.81L7 19H17L13.78 14.74L11.28 17.96Z" />
  </svg>
)
export const oPhotoCamera = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14.12 4L15.95 6H20V18H4V6H8.05L9.88 4H14.12ZM15 2H9L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2ZM12 9C13.65 9 15 10.35 15 12C15 13.65 13.65 15 12 15C10.35 15 9 13.65 9 12C9 10.35 10.35 9 12 9ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7Z" />
  </svg>
)
export const oPhotoFilter = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 10V19H4.98V5H13.98V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V10H19ZM16.06 7.94L17 10L17.94 7.94L20 7L17.94 6.06L17 4L16.06 6.06L14 7L16.06 7.94ZM12 8L10.75 10.75L8 12L10.75 13.25L12 16L13.25 13.25L16 12L13.25 10.75L12 8Z" />
  </svg>
)
export const oPhotoLibrary = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4V16H8V4H20ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM11.5 11.67L13.19 13.93L15.67 10.83L19 15H9L11.5 11.67ZM2 6V20C2 21.1 2.9 22 4 22H18V20H4V6H2Z" />
  </svg>
)
export const oPhotoSizeSelectActual = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3H3C2 3 1 4 1 5V19C1 20.1 1.9 21 3 21H21C22 21 23 20 23 19V5C23 4 22 3 21 3ZM21 18.92C20.98 18.95 20.94 18.98 20.92 19H3V5.08L3.08 5H20.91C20.94 5.02 20.97 5.06 20.99 5.08V18.92H21ZM11 15.51L8.5 12.5L5 17H19L14.5 11L11 15.51Z" />
  </svg>
)
export const oPhotoSizeSelectLarge = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15H23V17H21V15ZM21 11H23V13H21V11ZM23 19H21V21C22 21 23 20 23 19ZM13 3H15V5H13V3ZM21 7H23V9H21V7ZM21 3V5H23C23 4 22 3 21 3ZM1 7H3V9H1V7ZM17 3H19V5H17V3ZM17 19H19V21H17V19ZM3 3C2 3 1 4 1 5H3V3ZM9 3H11V5H9V3ZM5 3H7V5H5V3ZM1 11V19C1 20.1 1.9 21 3 21H15V11H1ZM3 19L5.5 15.79L7.29 17.94L9.79 14.72L13 19H3Z" />
  </svg>
)
export const oPhotoSizeSelectSmall = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M23 15H21V17H23V15ZM23 11H21V13H23V11ZM23 19H21V21C22 21 23 20 23 19ZM15 3H13V5H15V3ZM23 7H21V9H23V7ZM21 3V5H23C23 4 22 3 21 3ZM3 21H11V15H1V19C1 20.1 1.9 21 3 21ZM3 7H1V9H3V7ZM15 19H13V21H15V19ZM19 3H17V5H19V3ZM19 19H17V21H19V19ZM3 3C2 3 1 4 1 5H3V3ZM3 11H1V13H3V11ZM11 3H9V5H11V3ZM7 3H5V5H7V3Z" />
  </svg>
)
export const oPictureAsPdf = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16ZM4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM16 12V9C16 8.45 15.55 8 15 8H13V13H15C15.55 13 16 12.55 16 12ZM14 9H15V12H14V9ZM18 11H19V10H18V9H19V8H17V13H18V11ZM10 11H11C11.55 11 12 10.55 12 10V9C12 8.45 11.55 8 11 8H9V13H10V11ZM10 9H11V10H10V9Z" />
  </svg>
)
export const oPictureInPicture = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 7H11V13H19V7ZM17 11H13V9H17V11ZM21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 20.98 3 20.98H21C22.1 20.98 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19.01H3V4.98H21V19.01Z" />
  </svg>
)
export const oPictureInPictureAlt = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 11H11V17H19V11ZM17 15H13V13H17V15ZM21 3H3C1.9 3 1 3.88 1 4.98V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V4.98C23 3.88 22.1 3 21 3ZM21 19.02H3V4.97H21V19.02Z" />
  </svg>
)
export const oPieChart = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM19.93 11H13V4.07C16.61 4.52 19.48 7.39 19.93 11ZM4 12C4 7.93 7.06 4.56 11 4.07V19.93C7.06 19.44 4 16.07 4 12ZM13 19.93V13H19.93C19.48 16.61 16.61 19.48 13 19.93Z" />
  </svg>
)
export const oPinDrop = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5 20H19V22H5V20ZM18 8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8C6 12.5 12 19 12 19C12 19 18 12.5 18 8ZM8 8C8 5.79 9.79 4 12 4C14.21 4 16 5.79 16 8C16 10.13 13.92 13.46 12 15.91C10.08 13.47 8 10.13 8 8ZM12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.11 10 14 9.1 14 8C14 6.9 13.1 6 12 6Z" />
  </svg>
)
export const oPlace = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9ZM12 4C9.24 4 7 6.24 7 9C7 11.85 9.92 16.21 12 18.88C14.12 16.19 17 11.88 17 9C17 6.24 14.76 4 12 4ZM14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oPlayArrow = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10 8.64L15.27 12L10 15.36V8.64ZM8 5V19L19 12L8 5Z" />
  </svg>
)
export const oPlayCircleFilled = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 16.5V7.5L16 12L10 16.5Z" />
  </svg>
)
export const oPlayCircleFilledWhite = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM10 16.5L16 12L10 7.5V16.5Z" />
  </svg>
)
export const oPlayCircleOutline = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10 16.5L16 12L10 7.5V16.5ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
  </svg>
)
export const oPlayForWork = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 5V10.59H7.5L12 15.09L16.5 10.59H13V5H11ZM6 14C6 17.31 8.69 20 12 20C15.31 20 18 17.31 18 14H16C16 16.21 14.21 18 12 18C9.79 18 8 16.21 8 14H6Z" />
  </svg>
)
export const oPlaylistAdd = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14 10H2V12H14V10ZM14 6H2V8H14V6ZM18 14V10H16V14H12V16H16V20H18V16H22V14H18ZM2 16H10V14H2V16Z" />
  </svg>
)
export const oPlaylistAddCheck = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14 10H2V12H14V10ZM14 6H2V8H14V6ZM2 16H10V14H2V16ZM21.5 11.5L23 13L16.01 20L11.5 15.5L13 14L16.01 17L21.5 11.5Z" />
  </svg>
)
export const oPlaylistPlay = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10H16V12H4V10ZM4 6H16V8H4V6ZM4 14H12V16H4V14ZM14 14V20L19 17L14 14Z" />
  </svg>
)
export const oPlusOne = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10 8H8V12H4V14H8V18H10V14H14V12H10V8ZM14.5 6.08V7.9L17 7.4V18H19V5L14.5 6.08Z" />
  </svg>
)
export const oPoll = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H9V17H7V10ZM11 7H13V17H11V7ZM15 13H17V17H15V13Z" />
  </svg>
)
export const oPolymer = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 4H15L7.11 16.63L4.5 12L9 4H5L0.5 12L5 20H9L16.89 7.37L19.5 12L15 20H19L23.5 12L19 4Z" />
  </svg>
)
export const oPool = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.75 11.25L10 8.00004L9 7.00004C7.89 5.89004 6.82 5.49004 5 5.50004V3.00004C7.5 2.99004 8.93 3.45004 10.48 5.00004L16.9 11.41C16.75 11.49 16.61 11.57 16.49 11.64C16.12 11.87 15.89 12 15.34 12C14.7954 12 14.5645 11.8628 14.2008 11.6465L14.19 11.64C13.74 11.37 13.12 11 12.01 11C10.9101 11 10.2914 11.3633 9.83265 11.6326L9.82 11.64C9.45 11.87 9.23 12 8.67 12C8.11 12 7.89 11.87 7.52 11.64C7.4994 11.6283 7.47842 11.6162 7.45703 11.6039C7.26038 11.4909 7.02959 11.3583 6.75 11.25ZM6.48921 15.8536C6.12548 15.6373 5.89463 15.5 5.35 15.5C4.8 15.5 4.57 15.63 4.2 15.86C4.1903 15.8656 4.18053 15.8712 4.1707 15.8769C3.70419 16.1452 3.08708 16.5 2 16.5V14.5C2.56 14.5 2.78 14.37 3.15 14.14C3.6 13.87 4.22 13.5 5.33 13.5C6.44 13.5 7.06 13.87 7.51 14.14L7.52079 14.1465C7.88452 14.3628 8.11537 14.5 8.66 14.5C9.22 14.5 9.44 14.37 9.81 14.14C10.26 13.87 10.88 13.5 11.99 13.5C13.1 13.5 13.72 13.87 14.17 14.14L14.1808 14.1465C14.5445 14.3628 14.7754 14.5 15.32 14.5C15.87 14.5 16.1 14.37 16.47 14.14C16.92 13.87 17.54 13.5 18.65 13.5C19.76 13.5 20.38 13.87 20.83 14.14L20.8408 14.1465C21.2045 14.3628 21.4354 14.5 21.98 14.5V16.5C20.88 16.49 20.27 16.13 19.82 15.86L19.8092 15.8536C19.4455 15.6373 19.2146 15.5 18.67 15.5C18.11 15.5 17.89 15.63 17.52 15.86C17.07 16.13 16.45 16.5 15.34 16.5C14.23 16.5 13.61 16.13 13.16 15.86L13.1492 15.8536C12.7855 15.6373 12.5546 15.5 12.01 15.5C11.45 15.5 11.23 15.63 10.86 15.86C10.41 16.13 9.79 16.5 8.68 16.5C7.57 16.5 6.95 16.13 6.5 15.86L6.48921 15.8536ZM16.49 18.64C16.94 18.37 17.56 18 18.67 18C19.78 18 20.4 18.37 20.85 18.64C21.22 18.87 21.44 19 22 19V21C20.89 21 20.27 20.63 19.82 20.36L19.8092 20.3536C19.4455 20.1373 19.2146 20 18.67 20C18.11 20 17.89 20.13 17.52 20.36C17.5119 20.3648 17.5038 20.3696 17.4956 20.3744C17.0384 20.6429 16.4305 21 15.34 21C14.23 21 13.61 20.63 13.16 20.36L13.1492 20.3536C12.7855 20.1373 12.5546 20 12.01 20C11.45 20 11.23 20.13 10.86 20.36L10.8473 20.3675C10.3886 20.6368 9.76986 21 8.67 21C7.56 21 6.94 20.63 6.49 20.36C6.12 20.13 5.89 20 5.34 20C4.79 20 4.56 20.13 4.19 20.36L4.17735 20.3675C3.71863 20.6368 3.09986 21 2 21V19C2.56 19 2.78 18.87 3.15 18.64L3.16265 18.6326C3.62137 18.3633 4.24014 18 5.34 18C6.45 18 7.07 18.37 7.52 18.64C7.89 18.87 8.11 19 8.67 19C9.23 19 9.45 18.87 9.82 18.64L9.83265 18.6326C10.2914 18.3633 10.9101 18 12.01 18C13.12 18 13.74 18.37 14.19 18.64L14.2008 18.6465C14.5645 18.8628 14.7954 19 15.34 19C15.89 19 16.12 18.87 16.49 18.64ZM19 5.5C19 6.88071 17.8807 8 16.5 8C15.1193 8 14 6.88071 14 5.5C14 4.11929 15.1193 3 16.5 3C17.8807 3 19 4.11929 19 5.5Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oPortableWifiOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3.42 2.36L2.01 3.78L4.1 5.87C2.79 7.57 2 9.69 2 12C2 15.7 4.01 18.92 6.99 20.65L7.99 18.92C5.61 17.53 4 14.96 4 12C4 10.24 4.57 8.62 5.53 7.31L6.96 8.75C6.36 9.68 6 10.8 6 12C6 14.22 7.21 16.15 9 17.19L10 15.45C8.81 14.75 8 13.48 8 12C8 11.35 8.17 10.75 8.44 10.21L10.02 11.79L10 12C10 13.1 10.9 14 12 14L12.21 13.98L19.73 21.5L21.14 20.09L3.42 2.36ZM17.71 13.82C17.89 13.25 18 12.63 18 12C18 8.69 15.31 6 12 6C11.37 6 10.75 6.11 10.18 6.29L11.9 8.01C11.93 8.01 11.96 8 12 8C14.21 8 16 9.79 16 12C16 12.04 15.99 12.07 15.99 12.11L17.71 13.82ZM12 4C16.42 4 20 7.58 20 12C20 13.2 19.71 14.32 19.23 15.35L20.72 16.84C21.53 15.4 22 13.76 22 12C22 6.48 17.52 2 12 2C10.24 2 8.6 2.48 7.16 3.28L8.64 4.76C9.66 4.28 10.8 4 12 4Z" />
  </svg>
)
export const oPortrait = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C13.65 12 15 10.65 15 9C15 7.35 13.65 6 12 6C10.35 6 9 7.35 9 9C9 10.65 10.35 12 12 12ZM12 8C12.55 8 13 8.45 13 9C13 9.55 12.55 10 12 10C11.45 10 11 9.55 11 9C11 8.45 11.45 8 12 8ZM18 16.58C18 14.08 14.03 13 12 13C9.97 13 6 14.08 6 16.58V18H18V16.58ZM8.48 16C9.22 15.49 10.71 15 12 15C13.29 15 14.78 15.49 15.52 16H8.48ZM19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" />
  </svg>
)
export const oPower = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16 9V13.66L12.5 17.17V19H11.5V17.17L8 13.65V9H16ZM16 3H14V7H10V3H8V7H7.99C6.9 6.99 6 7.89 6 8.98V14.5L9.5 18V21H14.5V18L18 14.49V9C18 7.9 17.1 7 16 7V3Z" />
  </svg>
)
export const oPowerInput = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M2 9V11H21V9H2ZM2 15H7V13H2V15ZM9 15H14V13H9V15ZM16 15H21V13H16V15Z" />
  </svg>
)
export const oPowerOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9.99996 3H7.99996V4.88L9.99996 6.88V3ZM16 9V12.88L17.8 14.68L18 14.48V9C18 7.9 17.1 7 16 7V3H14V7H10.12L12.12 9H16ZM4.11996 3.84L2.70996 5.25L5.99996 8.54V14.5L9.49996 18V21H14.5V18L14.98 17.52L19.45 21.99L20.86 20.58L4.11996 3.84ZM12.5 17.17V19H11.5V17.17L7.99996 13.65V10.54L13.57 16.11L12.5 17.17Z" />
  </svg>
)
export const oPowerSettingsNew = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13 3H11V13H13V3ZM17.83 5.17L16.41 6.59C17.99 7.86 19 9.81 19 12C19 15.87 15.87 19 12 19C8.13 19 5 15.87 5 12C5 9.81 6.01 7.86 7.58 6.58L6.17 5.17C4.23 6.82 3 9.26 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 9.26 19.77 6.82 17.83 5.17Z" />
  </svg>
)
export const oPregnantWoman = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9 4C9 2.89 9.89 2 11 2C12.11 2 13 2.89 13 4C13 5.11 12.11 6 11 6C9.89 6 9 5.11 9 4ZM16 13C15.99 11.66 15.17 10.49 14 10C14 8.34 12.66 7 11 7C9.34 7 8 8.34 8 10V17H10V22H13V17H16V13Z" />
  </svg>
)
export const oPresentToAll = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3H3C1.89 3 1 3.89 1 5V19C1 20.11 1.89 21 3 21H21C22.11 21 23 20.11 23 19V5C23 3.89 22.11 3 21 3ZM21 19.02H3V4.98H21V19.02ZM10 12H8L12 8L16 12H14V16H10V12Z" />
  </svg>
)
export const oPrint = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 8H19C20.66 8 22 9.34 22 11V17H18V21H6V17H2V11C2 9.34 3.34 8 5 8H6V3H18V8ZM16 5H8V8H16V5ZM16 19V17V15H8V19H16ZM18 13V15H20V11C20 10.45 19.55 10 19 10H5C4.45 10 4 10.45 4 11V15H6V13H18ZM19 11.5C19 12.0523 18.5523 12.5 18 12.5C17.4477 12.5 17 12.0523 17 11.5C17 10.9477 17.4477 10.5 18 10.5C18.5523 10.5 19 10.9477 19 11.5Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oPrintDisabled = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 3.00998L1.41 1.59998L22.36 22.55L20.95 23.96L18 21H6V17H2V11C2 9.33998 3.34 7.99998 5 7.99998L0 3.00998ZM4 11V15H6V13H10L7 9.99998H5C4.45 9.99998 4 10.45 4 11ZM16 19L12 15H8V19H16ZM16 4.99998H8V5.35998L6 3.35998V2.99998H18V7.99998H19C20.66 7.99998 22 9.33998 22 11V17H19.66L15.66 13H18V15.01L20 15V11C20 10.45 19.55 9.99998 19 9.99998H12.66L10.66 7.99998H16V4.99998ZM19 11.51C19 12.0623 18.5523 12.51 18 12.51C17.4477 12.51 17 12.0623 17 11.51C17 10.9577 17.4477 10.51 18 10.51C18.5523 10.51 19 10.9577 19 11.51Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oPriorityHigh = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 3H10V15H14V3ZM14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oPublic = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 11.39 4.08 10.79 4.21 10.22L8.99 15V16C8.99 17.1 9.89 18 10.99 18V19.93C7.06 19.43 4 16.07 4 12ZM17.89 17.4C17.63 16.59 16.89 16 15.99 16H14.99V13C14.99 12.45 14.54 12 13.99 12H7.99V10H9.99C10.54 10 10.99 9.55 10.99 9V7H12.99C14.09 7 14.99 6.1 14.99 5V4.59C17.92 5.77 20 8.65 20 12C20 14.08 19.19 15.98 17.89 17.4Z" />
  </svg>
)
export const oPublish = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5 4H19V6H5V4ZM5 14H9V20H15V14H19L12 7L5 14ZM13 12V18H11V12H9.83L12 9.83L14.17 12H13Z" />
  </svg>
)
export const oQueryBuilder = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" />
  </svg>
)
export const oQuestionAnswer = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 4V11H5.17L4.58 11.59L4 12.17V4H15ZM16 2H3C2.45 2 2 2.45 2 3V17L6 13H16C16.55 13 17 12.55 17 12V3C17 2.45 16.55 2 16 2ZM21 6H19V15H6V17C6 17.55 6.45 18 7 18H18L22 22V7C22 6.45 21.55 6 21 6Z" />
  </svg>
)
export const oQueue = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16ZM13 15H15V11H19V9H15V5H13V9H9V11H13V15Z" />
  </svg>
)
export const oQueueMusic = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15 6H3V8H15V6ZM22 6H17V14.18C16.69 14.07 16.35 14 16 14C14.34 14 13 15.34 13 17C13 18.66 14.34 20 16 20C17.66 20 19 18.66 19 17V8H22V6ZM3 10H15V12H3V10ZM11 14H3V16H11V14ZM15 17C15 16.45 15.45 16 16 16C16.55 16 17 16.45 17 17C17 17.55 16.55 18 16 18C15.45 18 15 17.55 15 17Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oQueuePlayNext = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3H3C1.89 3 1 3.89 1 5V17C1 18.1 1.89 19 3 19H8V21H16V19H18V17H3V5H21V13H23V5C23 3.89 22.1 3 21 3ZM13 10V7H11V10H8V12H11V15H13V12H16V10H13ZM24 18L19.5 22.5L18 21L21 18L18 15L19.5 13.5L24 18Z" />
  </svg>
)
export const oRadio = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.3 6H20C21.11 6 22 6.89 22 8V20C22 21.1 21.11 22 20 22H4C2.89 22 2 21.1 2 20V8C2 7.17 2.51 6.43 3.24 6.15L15.88 1L16.56 2.66L8.3 6ZM20 11V8H4V11H16V9H18V11H20ZM4 13V20H20V13H4ZM10.5 16.48C10.5 17.8607 9.38071 18.98 8 18.98C6.61929 18.98 5.5 17.8607 5.5 16.48C5.5 15.0993 6.61929 13.98 8 13.98C9.38071 13.98 10.5 15.0993 10.5 16.48Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oRadioButtonChecked = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oRadioButtonUnchecked = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" />
  </svg>
)
export const oRateReview = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4.58 16.59L4 17.17V4H20V16ZM10.5 14H18V12H12.5L10.5 14ZM14.36 8.13C14.56 7.93 14.56 7.62 14.36 7.42L12.59 5.65C12.39 5.45 12.08 5.45 11.88 5.65L6 11.53V14H8.47L14.36 8.13Z" />
  </svg>
)
export const oReceipt = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.5 3.5L18 2L16.5 3.5L15 2L13.5 3.5L12 2L10.5 3.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2V22L4.5 20.5L6 22L7.5 20.5L9 22L10.5 20.5L12 22L13.5 20.5L15 22L16.5 20.5L18 22L19.5 20.5L21 22V2L19.5 3.5ZM19 19.09H5V4.91H19V19.09ZM6 15H18V17H6V15ZM6 11H18V13H6V11ZM6 7H18V9H6V7Z" />
  </svg>
)
export const oRecentActors = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 5H23V19H21V5ZM17 5H19V19H17V5ZM14 5H2C1.45 5 1 5.45 1 6V18C1 18.55 1.45 19 2 19H14C14.55 19 15 18.55 15 18V6C15 5.45 14.55 5 14 5ZM13 17H3V7H13V17ZM8.00005 11.89C9.077 11.89 9.95005 11.0169 9.95005 9.93999C9.95005 8.86304 9.077 7.98999 8.00005 7.98999C6.92309 7.98999 6.05005 8.86304 6.05005 9.93999C6.05005 11.0169 6.92309 11.89 8.00005 11.89ZM7.99999 13.4C9.29998 13.4 11.89 14.05 11.89 15.35V16H4.10999V15.35C4.10999 14.05 6.69999 13.4 7.99999 13.4Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oRecordVoiceOver = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9 13C11.21 13 13 11.21 13 9C13 6.79 11.21 5 9 5C6.79 5 5 6.79 5 9C5 11.21 6.79 13 9 13ZM9 7C10.1 7 11 7.9 11 9C11 10.1 10.1 11 9 11C7.9 11 7 10.1 7 9C7 7.9 7.9 7 9 7ZM9 15C6.33 15 1 16.34 1 19V21H17V19C17 16.34 11.67 15 9 15ZM3 19C3.22 18.28 6.31 17 9 17C11.7 17 14.8 18.29 15 19H3ZM15.08 7.05C15.92 8.23 15.92 9.76 15.08 10.94L16.76 12.63C18.78 10.61 18.78 7.56 16.76 5.36L15.08 7.05ZM20.07 2L18.44 3.63C21.21 6.65 21.21 11.19 18.44 14.37L20.07 16C23.97 12.11 23.98 6.05 20.07 2Z" />
  </svg>
)
export const oRedeem = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6H17.82C17.93 5.69 18 5.35 18 5C18 3.34 16.66 2 15 2C13.95 2 13.04 2.54 12.5 3.35L12 4.02L11.5 3.34C10.96 2.54 10.05 2 9 2C7.34 2 6 3.34 6 5C6 5.35 6.07 5.69 6.18 6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM15 4C15.55 4 16 4.45 16 5C16 5.55 15.55 6 15 6C14.45 6 14 5.55 14 5C14 4.45 14.45 4 15 4ZM9 4C9.55 4 10 4.45 10 5C10 5.55 9.55 6 9 6C8.45 6 8 5.55 8 5C8 4.45 8.45 4 9 4ZM20 19H4V17H20V19ZM20 14H4V8H9.08L7 10.83L8.62 12L11 8.76L12 7.4L13 8.76L15.38 12L17 10.83L14.92 8H20V14Z" />
  </svg>
)
export const oRedo = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8C6.85004 8 2.92004 11.03 1.54004 15.22L3.90004 16C4.95004 12.81 7.95004 10.5 11.5 10.5C13.45 10.5 15.23 11.22 16.62 12.38L13 16H22V7L18.4 10.6Z" />
  </svg>
)
export const oRefresh = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4C7.58001 4 4.01001 7.58 4.01001 12C4.01001 16.42 7.58001 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C8.69001 18 6.00001 15.31 6.00001 12C6.00001 8.69 8.69001 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z" />
  </svg>
)
export const oRemove = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 13H5V11H19V13Z" />
  </svg>
)
export const oRemoveCircle = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17 13H7V11H17V13Z" />
  </svg>
)
export const oRemoveCircleOutline = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 11V13H17V11H7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
  </svg>
)
export const oRemoveFromQueue = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3H3C1.89 3 1 3.89 1 5V17C1 18.1 1.89 19 3 19H8V21H16V19H21C22.1 19 23 18.1 23 17V5C23 3.89 22.1 3 21 3ZM21 17H3V5H21V17ZM16 10V12H8V10H16Z" />
  </svg>
)
export const oRemoveRedEye = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6.5C15.79 6.5 19.17 8.63 20.82 12C19.17 15.37 15.8 17.5 12 17.5C8.2 17.5 4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5ZM12 7.5C9.52 7.5 7.5 9.52 7.5 12C7.5 14.48 9.52 16.5 12 16.5C14.48 16.5 16.5 14.48 16.5 12C16.5 9.52 14.48 7.5 12 7.5Z" />
  </svg>
)
export const oRemoveShoppingCart = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M1.41 1.13L0 2.54L4.39 6.93L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H14.46L15.84 18.38C15.34 18.74 15.01 19.33 15.01 20C15.01 21.1 15.9 22 17 22C17.67 22 18.26 21.67 18.62 21.16L21.46 24L22.87 22.59L1.41 1.13ZM7 15L8.1 13H10.46L12.46 15H7ZM20 4H7.12L9.12 6H18.31L15.55 11H14.11L16.05 12.94C16.59 12.8 17.04 12.45 17.3 11.97L20.88 5.48C21.25 4.82 20.76 4 20 4ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18Z" />
  </svg>
)
export const oReorder = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 15H21V13H3V15ZM3 19H21V17H3V19ZM3 11H21V9H3V11ZM3 5V7H21V5H3Z" />
  </svg>
)
export const oRepeat = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 7H17V10L21 6L17 2V5H5V11H7V7ZM17 17H7V14L3 18L7 22V19H19V13H17V17Z" />
  </svg>
)
export const oRepeatOne = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 7H17V10L21 6L17 2V5H5V11H7V7ZM17 17H7V14L3 18L7 22V19H19V13H17V17ZM13 15V9H12L10 10V11H11.5V15H13Z" />
  </svg>
)
export const oReplay = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1V5C16.42 5 20 8.58 20 13C20 17.42 16.42 21 12 21C7.58 21 4 17.42 4 13H6C6 16.31 8.69 19 12 19C15.31 19 18 16.31 18 13C18 9.69 15.31 7 12 7V11L7 6L12 1Z" />
  </svg>
)
export const oReplay10 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.99 5V1L6.98999 6L11.99 11V7C15.3 7 17.99 9.69 17.99 13C17.99 16.31 15.3 19 11.99 19C8.67999 19 5.98999 16.31 5.98999 13H3.98999C3.98999 17.42 7.56999 21 11.99 21C16.41 21 19.99 17.42 19.99 13C19.99 8.58 16.41 5 11.99 5ZM10.89 16H10.04V12.74L9.02999 13.05V12.36L10.8 11.73H10.89V16ZM15.17 14.24C15.17 14.56 15.14 14.84 15.07 15.06C15 15.28 14.9 15.48 14.78 15.63C14.66 15.78 14.5 15.89 14.33 15.96C14.16 16.03 13.96 16.06 13.74 16.06C13.52 16.06 13.33 16.03 13.15 15.96C12.97 15.89 12.82 15.78 12.69 15.63C12.56 15.48 12.46 15.29 12.39 15.06C12.32 14.83 12.28 14.56 12.28 14.24V13.5C12.28 13.18 12.31 12.9 12.38 12.68C12.45 12.46 12.55 12.26 12.67 12.11C12.79 11.96 12.95 11.85 13.12 11.78C13.29 11.71 13.49 11.68 13.71 11.68C13.93 11.68 14.12 11.71 14.3 11.78C14.48 11.85 14.63 11.96 14.76 12.11C14.89 12.26 14.99 12.45 15.06 12.68C15.13 12.91 15.17 13.18 15.17 13.5V14.24ZM14.32 13.38C14.32 13.19 14.31 13.03 14.28 12.9C14.25 12.77 14.21 12.67 14.16 12.59C14.11 12.51 14.05 12.45 13.97 12.42C13.89 12.39 13.81 12.37 13.72 12.37C13.63 12.37 13.54 12.39 13.47 12.42C13.4 12.45 13.33 12.51 13.28 12.59C13.23 12.67 13.19 12.77 13.16 12.9C13.13 13.03 13.12 13.19 13.12 13.38V14.35C13.12 14.54 13.13 14.7 13.16 14.83C13.19 14.96 13.23 15.07 13.28 15.15C13.33 15.23 13.39 15.29 13.47 15.32C13.55 15.35 13.63 15.37 13.72 15.37C13.81 15.37 13.9 15.35 13.97 15.32C14.04 15.29 14.11 15.23 14.16 15.15C14.21 15.07 14.25 14.96 14.27 14.83C14.29 14.7 14.31 14.54 14.31 14.35V13.38H14.32Z" />
  </svg>
)
export const oReplay30 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5V1L7 6L12 11V7C15.31 7 18 9.69 18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13H4C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13C20 8.58 16.42 5 12 5ZM9.56 13.49H10.01C10.22 13.49 10.38 13.44 10.49 13.33C10.6 13.22 10.65 13.08 10.65 12.9C10.65 12.82 10.64 12.75 10.61 12.68C10.58 12.61 10.55 12.56 10.5 12.51C10.45 12.46 10.39 12.42 10.32 12.4C10.25 12.38 10.16 12.36 10.07 12.36C9.99 12.36 9.92 12.37 9.85 12.39C9.78 12.41 9.72 12.44 9.67 12.49C9.62 12.54 9.58 12.58 9.55 12.64C9.52 12.7 9.5 12.77 9.5 12.84H8.65C8.65 12.66 8.69 12.5 8.76 12.36C8.83 12.22 8.93 12.09 9.06 11.99C9.19 11.89 9.33 11.81 9.5 11.76C9.67 11.71 9.85 11.68 10.04 11.68C10.25 11.68 10.45 11.71 10.63 11.76C10.81 11.81 10.96 11.89 11.09 11.99C11.22 12.09 11.32 12.22 11.39 12.37C11.46 12.52 11.5 12.7 11.5 12.9C11.5 12.99 11.49 13.08 11.46 13.17C11.43 13.26 11.39 13.34 11.33 13.42C11.27 13.5 11.21 13.57 11.13 13.64C11.05 13.71 10.96 13.76 10.85 13.81C11.09 13.9 11.27 14.02 11.39 14.2C11.51 14.38 11.57 14.58 11.57 14.81C11.57 15.01 11.53 15.19 11.45 15.34C11.37 15.49 11.27 15.63 11.13 15.73C10.99 15.83 10.84 15.92 10.65 15.97C10.46 16.02 10.27 16.05 10.05 16.05C9.87 16.05 9.69 16.03 9.52 15.98C9.35 15.93 9.19 15.86 9.06 15.75C8.93 15.64 8.81 15.52 8.73 15.37C8.65 15.22 8.61 15.03 8.61 14.82H9.46C9.46 14.9 9.48 14.97 9.51 15.04C9.54 15.11 9.58 15.16 9.64 15.21C9.7 15.26 9.76 15.3 9.84 15.32C9.92 15.34 10 15.36 10.09 15.36C10.19 15.36 10.28 15.35 10.36 15.32C10.44 15.29 10.51 15.25 10.56 15.2C10.61 15.15 10.66 15.09 10.69 15.02C10.72 14.95 10.73 14.87 10.73 14.78C10.73 14.67 10.71 14.57 10.68 14.49C10.65 14.41 10.6 14.34 10.54 14.29C10.48 14.24 10.41 14.2 10.32 14.18C10.23 14.16 10.14 14.14 10.03 14.14H9.56V13.49ZM15.3 14.24C15.3 14.56 15.27 14.84 15.2 15.06C15.13 15.28 15.03 15.48 14.91 15.63C14.79 15.78 14.63 15.89 14.46 15.96C14.29 16.03 14.09 16.06 13.87 16.06C13.65 16.06 13.46 16.03 13.28 15.96C13.1 15.89 12.95 15.78 12.82 15.63C12.69 15.48 12.59 15.29 12.52 15.06C12.45 14.83 12.41 14.56 12.41 14.24V13.5C12.41 13.18 12.44 12.9 12.51 12.68C12.58 12.46 12.68 12.26 12.8 12.11C12.92 11.96 13.08 11.85 13.25 11.78C13.42 11.71 13.62 11.68 13.84 11.68C14.06 11.68 14.25 11.71 14.43 11.78C14.61 11.85 14.76 11.96 14.89 12.11C15.02 12.26 15.12 12.45 15.19 12.68C15.26 12.91 15.3 13.18 15.3 13.5V14.24ZM14.45 13.38C14.45 13.19 14.44 13.03 14.41 12.9C14.38 12.77 14.34 12.67 14.29 12.59C14.24 12.51 14.18 12.45 14.1 12.42C14.02 12.39 13.94 12.37 13.85 12.37C13.76 12.37 13.67 12.39 13.6 12.42C13.53 12.45 13.46 12.51 13.41 12.59C13.36 12.67 13.32 12.77 13.29 12.9C13.26 13.03 13.25 13.19 13.25 13.38V14.35C13.25 14.54 13.26 14.7 13.29 14.83C13.32 14.96 13.36 15.07 13.41 15.15C13.46 15.23 13.52 15.29 13.6 15.32C13.68 15.35 13.76 15.37 13.85 15.37C13.94 15.37 14.03 15.35 14.1 15.32C14.17 15.29 14.24 15.23 14.29 15.15C14.34 15.07 14.38 14.96 14.4 14.83C14.43 14.7 14.44 14.54 14.44 14.35V13.38H14.45Z" />
  </svg>
)
export const oReplay5 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5V1L7 6L12 11V7C15.31 7 18 9.69 18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13H4C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13C20 8.58 16.42 5 12 5ZM10.69 13.9L10.94 11.73H13.33V12.44H11.63L11.52 13.36C11.55 13.34 11.59 13.33 11.63 13.31C11.67 13.29 11.72 13.27 11.78 13.26C11.84 13.25 11.9 13.23 11.96 13.22C12.02 13.21 12.09 13.2 12.16 13.2C12.37 13.2 12.55 13.23 12.71 13.3C12.87 13.37 13.01 13.46 13.12 13.58C13.23 13.7 13.32 13.85 13.37 14.03C13.42 14.21 13.46 14.41 13.46 14.63C13.46 14.82 13.43 15 13.37 15.17C13.31 15.34 13.22 15.49 13.1 15.62C12.98 15.75 12.83 15.86 12.65 15.93C12.47 16 12.26 16.05 12.01 16.05C11.83 16.05 11.65 16.02 11.48 15.97C11.31 15.92 11.16 15.83 11.02 15.73C10.88 15.63 10.78 15.49 10.7 15.34C10.62 15.19 10.57 15.01 10.57 14.81H11.41C11.43 14.99 11.49 15.13 11.6 15.22C11.71 15.31 11.85 15.37 12.02 15.37C12.13 15.37 12.22 15.35 12.29 15.31C12.36 15.27 12.43 15.21 12.47 15.14C12.51 15.07 12.55 14.99 12.58 14.89C12.61 14.79 12.61 14.69 12.61 14.58C12.61 14.47 12.6 14.37 12.57 14.27C12.54 14.17 12.5 14.1 12.44 14.03C12.38 13.96 12.31 13.91 12.23 13.88C12.15 13.85 12.04 13.83 11.93 13.83C11.85 13.83 11.78 13.84 11.73 13.85C11.68 13.86 11.62 13.88 11.58 13.9C11.54 13.92 11.5 13.95 11.46 13.97C11.42 13.99 11.39 14.03 11.36 14.06L10.69 13.9Z" />
  </svg>
)
export const oReply = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10 9V5L3 12L10 19V14.9C15 14.9 18.5 16.5 21 20C20 15 17 10 10 9Z" />
  </svg>
)
export const oReplyAll = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 8V5L0 12L7 19V16L3 12L7 8ZM13 9V5L6 12L13 19V14.9C18 14.9 21.5 16.5 24 20C23 15 20 10 13 9Z" />
  </svg>
)
export const oReport = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.73 3H8.27L3 8.27V15.73L8.27 21H15.73L21 15.73V8.27L15.73 3ZM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5H14.9L19 9.1V14.9ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17ZM13 7H11V14H13V7Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oReportOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13 6.99996V9.32996L11 7.32996V6.99996H13ZM1 2.98996L2.41 1.57996L22.42 21.59L21.01 23L17.37 19.36L15.73 21H8.27L3 15.73V8.26996L4.64 6.62996L1 2.98996ZM9.1 19H14.9L15.95 17.95L6.05 8.04996L5 9.09996V14.9L9.1 19ZM9.09997 5H14.9L19 9.1V14.9L18.78 15.12L20.2 16.53L21 15.73V8.27L15.73 3H8.26997L7.46997 3.8L8.87997 5.22L9.09997 5ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oReportProblem = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5.99L19.53 19H4.47L12 5.99ZM12 2L1 21H23L12 2ZM13 16H11V18H13V16ZM13 10H11V14H13V10Z" />
  </svg>
)
export const oRestaurant = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16 6V14H19V22H21V2C18.24 2 16 4.24 16 6ZM11 9H9V2H7V9H5V2H3V9C3 11.21 4.79 13 7 13V22H9V13C11.21 13 13 11.21 13 9V2H11V9Z" />
  </svg>
)
export const oRestaurantMenu = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M8.09999 13.34L10.93 10.51L3.90999 3.49996C2.34999 5.05996 2.34999 7.58996 3.90999 9.15996L8.09999 13.34ZM14.88 11.53C16.41 12.24 18.56 11.74 20.15 10.15C22.06 8.23996 22.43 5.49996 20.96 4.02996C19.5 2.56996 16.76 2.92996 14.84 4.83996C13.25 6.42996 12.75 8.57996 13.46 10.11L3.69999 19.87L5.10999 21.28L12 14.41L18.88 21.29L20.29 19.88L13.41 13L14.88 11.53Z" />
  </svg>
)
export const oRestore = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13 3C8.03 3 4 7.03 4 12H1L5 15.99L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 19.99 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.25 15.52L17.02 14.24L13.5 12.15V8H12Z" />
  </svg>
)
export const oRestoreFromTrash = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5ZM6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 14V9H16V19H8V14ZM10 18H14V14H16L12 10L8 14H10V18Z" />
  </svg>
)
export const oRestorePage = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13.17L18 8.83V20ZM8.45 10.57L7.28 9.4V13H10.88L9.44 11.56C9.96 10.55 11.02 9.85 12.23 9.85C13.97 9.85 15.38 11.26 15.38 13C15.38 14.74 13.97 16.15 12.23 16.15C11.16 16.15 10.21 15.61 9.65 14.8H8.1C8.79 16.38 10.38 17.5 12.22 17.5C14.7 17.5 16.72 15.48 16.72 13C16.72 10.52 14.7 8.5 12.22 8.5C10.63 8.5 9.25 9.33 8.45 10.57Z" />
  </svg>
)
export const oRingVolume = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M23.71 16.67C20.66 13.78 16.54 12 12 12C7.46 12 3.34 13.78 0.29 16.67C0.11 16.85 0 17.1 0 17.38C0 17.66 0.11 17.91 0.29 18.09L2.77 20.57C2.95 20.75 3.2 20.86 3.48 20.86C3.75 20.86 4 20.75 4.18 20.58C4.97 19.84 5.87 19.22 6.84 18.73C7.17 18.57 7.4 18.23 7.4 17.83V14.73C8.85 14.25 10.4 14 12 14C13.6 14 15.15 14.25 16.6 14.72V17.82C16.6 18.21 16.83 18.56 17.16 18.72C18.14 19.21 19.03 19.84 19.82 20.57C20 20.75 20.25 20.85 20.52 20.85C20.8 20.85 21.05 20.74 21.23 20.56L23.71 18.08C23.89 17.9 24 17.65 24 17.37C24 17.1 23.89 16.85 23.71 16.67ZM5.4 17.23C4.74 17.6 4.11 18.03 3.53 18.5L2.46 17.43C3.37 16.68 4.36 16.04 5.41 15.53V17.23H5.4ZM20.47 18.49C19.88 18.01 19.26 17.59 18.6 17.22V15.52C19.64 16.03 20.63 16.67 21.54 17.42L20.47 18.49ZM21.16 6.26L19.75 4.85L16.19 8.4L17.6 9.81C17.6 9.81 21.05 6.29 21.16 6.26ZM11 2H13V7H11V2ZM6.4 9.81L7.81 8.4L4.26 4.84L2.84 6.26C2.95 6.29 6.4 9.81 6.4 9.81Z" />
  </svg>
)
export const oRoom = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9ZM12 4C9.24 4 7 6.24 7 9C7 11.85 9.92 16.21 12 18.88C14.12 16.19 17 11.88 17 9C17 6.24 14.76 4 12 4ZM14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oRoomService = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18.98 17H2V19H22V17H18.98ZM21 16C20.73 11.93 17.75 8.6 13.84 7.79C13.94 7.55 14 7.28 14 7C14 5.9 13.1 5 12 5C10.9 5 10 5.9 10 7C10 7.28 10.06 7.55 10.16 7.79C6.25 8.6 3.27 11.93 3 16H21ZM12 9.58C14.95 9.58 17.47 11.41 18.5 13.99H5.5C6.53 11.41 9.05 9.58 12 9.58Z" />
  </svg>
)
export const oRotate90DegreesCcw = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7.33986 6.41001L0.859863 12.9L7.34986 19.38L13.8399 12.9L7.33986 6.41001ZM3.68986 12.9L7.34986 9.24001L10.9999 12.9L7.33986 16.56L3.68986 12.9ZM19.3599 6.64001C17.6099 4.88001 15.2999 4.00001 12.9999 4.00001V0.76001L8.75986 5.00001L12.9999 9.24001V6.00001C14.7899 6.00001 16.5799 6.68001 17.9499 8.05001C20.6799 10.78 20.6799 15.22 17.9499 17.95C16.5799 19.32 14.7899 20 12.9999 20C12.0299 20 11.0599 19.79 10.1599 19.39L8.66986 20.88C10.0199 21.62 11.5099 22 12.9999 22C15.2999 22 17.6099 21.12 19.3599 19.36C22.8799 15.85 22.8799 10.15 19.3599 6.64001Z" />
  </svg>
)
export const oRotateLeft = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7.10982 8.53L5.69982 7.11C4.79982 8.27 4.23982 9.61 4.06982 11H6.08982C6.22982 10.13 6.57982 9.28 7.10982 8.53ZM6.08982 13H4.06982C4.23982 14.39 4.78982 15.73 5.68982 16.89L7.09982 15.47C6.57982 14.72 6.22982 13.88 6.08982 13ZM7.09982 18.32C8.25982 19.22 9.60982 19.76 10.9998 19.93V17.9C10.1298 17.75 9.28982 17.41 8.53982 16.87L7.09982 18.32ZM12.9998 4.07V1L8.44982 5.55L12.9998 10V6.09C15.8398 6.57 17.9998 9.03 17.9998 12C17.9998 14.97 15.8398 17.43 12.9998 17.91V19.93C16.9498 19.44 19.9998 16.08 19.9998 12C19.9998 7.92 16.9498 4.56 12.9998 4.07Z" />
  </svg>
)
export const oRotateRight = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.55 5.55L11 1V4.07C7.06 4.56 4 7.92 4 12C4 16.08 7.05 19.44 11 19.93V17.91C8.16 17.43 6 14.97 6 12C6 9.03 8.16 6.57 11 6.09V10L15.55 5.55ZM19.93 11C19.76 9.61 19.21 8.27 18.31 7.11L16.89 8.53C17.43 9.28 17.77 10.13 17.91 11H19.93ZM13 17.9V19.92C14.39 19.75 15.74 19.21 16.9 18.31L15.46 16.87C14.71 17.41 13.87 17.76 13 17.9ZM16.89 15.48L18.31 16.89C19.21 15.73 19.76 14.39 19.93 13H17.91C17.77 13.87 17.43 14.72 16.89 15.48Z" />
  </svg>
)
export const oRoundedCorner = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 19H21V21H19V19ZM19 17H21V15H19V17ZM3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM3 5H5V3H3V5ZM7 5H9V3H7V5ZM15 21H17V19H15V21ZM11 21H13V19H11V21ZM15 21H17V19H15V21ZM7 21H9V19H7V21ZM3 21H5V19H3V21ZM21 8C21 5.24 18.76 3 16 3H11V5H16C17.65 5 19 6.35 19 8V13H21V8Z" />
  </svg>
)
export const oRouter = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4.2C17.5 4.2 19 4.8 20.2 5.9L21 5.1C19.6 3.7 17.8 3 16 3C14.2 3 12.4 3.7 11 5.1L11.8 5.9C13 4.8 14.5 4.2 16 4.2ZM12.7 6.7L13.5 7.5C14.2 6.8 15.1 6.5 16 6.5C16.9 6.5 17.8 6.8 18.5 7.5L19.3 6.7C18.4 5.8 17.2 5.3 16 5.3C14.8 5.3 13.6 5.8 12.7 6.7ZM19 13H17V9H15V13H5C3.9 13 3 13.9 3 15V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V15C21 13.9 20.1 13 19 13ZM19 19H5V15H19V19ZM6 16H8V18H6V16ZM9.5 16H11.5V18H9.5V16ZM13 16H15V18H13V16Z" />
  </svg>
)
export const oRowing = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5 14.5L4 19L5.5 20.5L9 17H11L8.5 14.5ZM15 1C13.9 1 13 1.9 13 3C13 4.1 13.9 5 15 5C16.1 5 17 4.1 17 3C17 1.9 16.1 1 15 1ZM21 21.01L18 24L15.01 20.99V19.5L7.91 12.41C7.6 12.46 7.3 12.48 7 12.48V10.32C8.66 10.35 10.61 9.45 11.67 8.28L13.07 6.73C13.26 6.52 13.5 6.35 13.76 6.23C14.05 6.09 14.38 6 14.72 6H14.75C15.99 6.01 17 7.02 17 8.26V14.01C17 14.85 16.65 15.62 16.08 16.17L12.5 12.59V10.32C11.87 10.84 11.07 11.34 10.21 11.71L16.5 18H18L21 21.01Z" />
  </svg>
)
export const oRssFeed = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 7.26994V4.43994C12.59 4.43994 19.56 11.4099 19.56 19.9999H16.73C16.73 12.9699 11.03 7.26994 4 7.26994ZM4 12.9299V10.0999C9.47 10.0999 13.9 14.5299 13.9 19.9999H11.07C11.07 16.0999 7.9 12.9299 4 12.9299ZM8.36 17.82C8.36 19.024 7.38398 20 6.18 20C4.97602 20 4 19.024 4 17.82C4 16.616 4.97602 15.64 6.18 15.64C7.38398 15.64 8.36 16.616 8.36 17.82Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oRvHookup = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 17V11C20 9.9 19.1 9 18 9H7V7L4 10L7 13V11H11V14H4V17C4 18.1 4.9 19 6 19H8C8 20.66 9.34 22 11 22C12.66 22 14 20.66 14 19H22V17H20ZM11 20C10.45 20 10 19.55 10 19C10 18.45 10.45 18 11 18C11.55 18 12 18.45 12 19C12 19.55 11.55 20 11 20ZM18 14H14V11H18V14ZM17 2V4H9V6H17V8L20 5L17 2Z" />
  </svg>
)
export const oSatellite = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM8.57 6H6V8.58C7.42 8.58 8.57 7.42 8.57 6ZM12 6H10.29C10.29 8.36 8.37 10.29 6 10.29V12C9.32 12 12 9.31 12 6ZM14.14 11.86L11.14 15.73L9 13.15L6 17H18L14.14 11.86Z" />
  </svg>
)
export const oSave = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3ZM19 19H5V5H16.17L19 7.83V19ZM12 12C10.34 12 9 13.34 9 15C9 16.66 10.34 18 12 18C13.66 18 15 16.66 15 15C15 13.34 13.66 12 12 12ZM6 6H15V10H6V6Z" />
  </svg>
)
export const oSaveAlt = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 12V19H5V12H3V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V12H19ZM13 12.67L15.59 10.09L17 11.5L12 16.5L7 11.5L8.41 10.09L11 12.67V3H13V12.67Z" />
  </svg>
)
export const oScanner = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.8 10.7L4.2 5L3.5 6.9L17.6 12H5C3.9 12 3 12.9 3 14V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V12.5C21 11.7 20.5 10.9 19.8 10.7ZM19 18H5V14H19V18ZM6 15H8V17H6V15ZM10 15H18V17H10V15Z" />
  </svg>
)
export const oScatterPlot = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 18C4.79 18 3 16.21 3 14C3 11.79 4.79 10 7 10C9.21 10 11 11.79 11 14C11 16.21 9.21 18 7 18ZM7 12C5.9 12 5 12.9 5 14C5 15.1 5.9 16 7 16C8.1 16 9 15.1 9 14C9 12.9 8.1 12 7 12ZM11 10C8.79 10 7 8.21 7 6C7 3.79 8.79 2 11 2C13.21 2 15 3.79 15 6C15 8.21 13.21 10 11 10ZM11 4C9.9 4 9 4.9 9 6C9 7.1 9.9 8 11 8C12.1 8 13 7.1 13 6C13 4.9 12.1 4 11 4ZM16.6 21.6C14.39 21.6 12.6 19.81 12.6 17.6C12.6 15.39 14.39 13.6 16.6 13.6C18.81 13.6 20.6 15.39 20.6 17.6C20.6 19.81 18.81 21.6 16.6 21.6ZM16.6 15.6C15.5 15.6 14.6 16.5 14.6 17.6C14.6 18.7 15.5 19.6 16.6 19.6C17.7 19.6 18.6 18.7 18.6 17.6C18.6 16.5 17.7 15.6 16.6 15.6Z" />
  </svg>
)
export const oSchedule = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" />
  </svg>
)
export const oSchool = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" />
  </svg>
)
export const oScore = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5L9 15L13 19L19 13V19ZM19 10.5L13 16.5L9 12.5L5 16.5V5H19V10.5ZM13.5 9V6H12V12H13.5V9ZM17.2 12L15.2 9L17.2 6H15.5L13.5 9L15.5 12H17.2ZM11 10.5H8.5V9.75H11V6H7V7.5H9.5V8.25H7V12H11V10.5Z" />
  </svg>
)
export const oScreenLockLandscape = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 5H3C1.9 5 1 5.9 1 7V17C1 18.1 1.9 19 3 19H21C22.1 19 23 18.1 23 17V7C23 5.9 22.1 5 21 5ZM19 17H5V7H19V17ZM10 16H14C14.55 16 15 15.55 15 15V12C15 11.45 14.55 11 14 11V10C14 8.89 13.1 8 12 8C10.89 8 10 8.9 10 10V11C9.45 11 9 11.45 9 12V15C9 15.55 9.45 16 10 16ZM10.8 10C10.8 9.34 11.34 8.8 12 8.8C12.66 8.8 13.2 9.34 13.2 10V11H10.8V10Z" />
  </svg>
)
export const oScreenLockPortrait = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10 16H14C14.55 16 15 15.55 15 15V12C15 11.45 14.55 11 14 11V10C14 8.89 13.1 8 12 8C10.89 8 10 8.9 10 10V11C9.45 11 9 11.45 9 12V15C9 15.55 9.45 16 10 16ZM10.8 10C10.8 9.34 11.34 8.8 12 8.8C12.66 8.8 13.2 9.34 13.2 10V11H10.8V10ZM17 1H7C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1ZM17 19H7V5H17V19Z" />
  </svg>
)
export const oScreenLockRotation = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22.3 13.77L19.73 11.2L18.32 12.61L20.5401 14.83L14.88 20.49L3.56005 9.17L9.22005 3.51L11.32 5.61L12.73 4.2L10.28 1.75C9.69005 1.16 8.74005 1.16 8.16005 1.75L1.80005 8.11C1.21005 8.7 1.21005 9.65 1.80005 10.23L13.82 22.25C14.41 22.84 15.36 22.84 15.94 22.25L22.3 15.89C22.89 15.3 22.89 14.35 22.3 13.77ZM7.52005 21.48C4.25005 19.94 1.91005 16.76 1.55005 13H0.0500488C0.560049 19.16 5.71005 24 12 24L12.66 23.97L8.85005 20.15L7.52005 21.48ZM15.05 10H20.05C20.6 10 21.05 9.55 21.05 9V5C21.05 4.45 20.6 4 20.05 4V3.5C20.05 2.12 18.93 1 17.55 1C16.17 1 15.05 2.12 15.05 3.5V4C14.5 4 14.05 4.45 14.05 5V9C14.05 9.55 14.5 10 15.05 10ZM15.85 3.5C15.85 2.56 16.61 1.8 17.55 1.8C18.49 1.8 19.25 2.56 19.25 3.5V4H15.85V3.5Z" />
  </svg>
)
export const oScreenRotation = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16.48 2.52C19.75 4.07 22.09 7.24 22.4501 11H23.9501C23.4401 4.84 18.29 0 12 0L11.34 0.03L15.15 3.84L16.48 2.52ZM10.23 1.75C9.64005 1.16 8.69005 1.16 8.11005 1.75L1.75005 8.11C1.16005 8.7 1.16005 9.65 1.75005 10.23L13.77 22.25C14.36 22.84 15.31 22.84 15.89 22.25L22.25 15.89C22.84 15.3 22.84 14.35 22.25 13.77L10.23 1.75ZM14.83 21.19L2.81005 9.17L9.17005 2.81L21.1901 14.83L14.83 21.19ZM7.52005 21.48C4.25005 19.94 1.91005 16.76 1.55005 13H0.0500488C0.560049 19.16 5.71005 24 12 24L12.66 23.97L8.85005 20.16L7.52005 21.48Z" />
  </svg>
)
export const oScreenShare = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 18C21.1 18 21.99 17.1 21.99 16L22 6C22 4.89 21.1 4 20 4H4C2.89 4 2 4.89 2 6V16C2 17.1 2.89 18 4 18H0V20H24V18H20ZM4 16V6H20V16.01L4 16ZM13 9.13C9.11 9.67 7.56 12.33 7 15C8.39 13.13 10.22 12.28 13 12.28V14.47L17 10.73L13 7V9.13Z" />
  </svg>
)
export const oSdCard = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2H10L4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H6V8.83L10.83 4H18V20ZM9 7H11V11H9V7ZM12 7H14V11H12V7ZM15 7H17V11H15V7Z" />
  </svg>
)
export const oSdStorage = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 4V20H6V8.83L10.83 4H18ZM18 2H10L4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM9 7H11V11H9V7ZM12 7H14V11H12V7ZM15 7H17V11H15V7Z" />
  </svg>
)
export const oSearch = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" />
  </svg>
)
export const oSecurity = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" />
  </svg>
)
export const oSelectAll = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5H5V3C3.9 3 3 3.9 3 5ZM3 13H5V11H3V13ZM7 21H9V19H7V21ZM3 9H5V7H3V9ZM13 3H11V5H13V3ZM19 3V5H21C21 3.9 20.1 3 19 3ZM5 21V19H3C3 20.1 3.9 21 5 21ZM3 17H5V15H3V17ZM9 3H7V5H9V3ZM11 21H13V19H11V21ZM19 13H21V11H19V13ZM19 21C20.1 21 21 20.1 21 19H19V21ZM19 9H21V7H19V9ZM19 17H21V15H19V17ZM15 21H17V19H15V21ZM15 5H17V3H15V5ZM7 17H17V7H7V17ZM9 9H15V15H9V9Z" />
  </svg>
)
export const oSend = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4.01 6.03L11.52 9.25L4 8.25L4.01 6.03ZM11.51 14.75L4 17.97V15.75L11.51 14.75ZM2.01 3L2 10L17 12L2 14L2.01 21L23 12L2.01 3Z" />
  </svg>
)
export const oSentimentDissatisfied = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.88 17.5C7.68 15.45 9.67 14 12 14C14.33 14 16.32 15.45 17.12 17.5H15.45C14.75 16.31 13.48 15.5 12 15.5C10.52 15.5 9.24 16.31 8.55 17.5H6.88ZM2 12C2 6.48 6.47 2 11.99 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 11.99 22C6.47 22 2 17.52 2 12ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12ZM8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11ZM15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oSentimentSatisfied = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.55 14C9.25 15.19 10.52 16 12 16C13.48 16 14.75 15.19 15.45 14H17.12C16.32 16.05 14.33 17.5 12 17.5C9.67 17.5 7.68 16.05 6.88 14H8.55ZM2 12C2 6.48 6.47 2 11.99 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 11.99 22C6.47 22 2 17.52 2 12ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12ZM8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11ZM15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oSentimentSatisfiedAlt = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.55 14C9.25 15.19 10.52 16 12 16C13.48 16 14.76 15.19 15.45 14H17.12C16.32 16.05 14.33 17.5 12 17.5C9.67 17.5 7.68 16.05 6.88 14H8.55ZM2 12C2 6.48 6.47 2 11.99 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 11.99 22C6.47 22 2 17.52 2 12ZM4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12ZM8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11ZM15.5 11C16.3284 11 17 10.3284 17 9.5C17 8.67157 16.3284 8 15.5 8C14.6716 8 14 8.67157 14 9.5C14 10.3284 14.6716 11 15.5 11Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oSentimentVeryDissatisfied = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 13.5C9.67 13.5 7.69 14.96 6.89 17H17.11C16.31 14.96 14.33 13.5 12 13.5ZM7.82 12L8.88 10.94L9.94 12L11 10.94L9.94 9.88L11 8.82L9.94 7.76L8.88 8.82L7.82 7.76L6.76 8.82L7.82 9.88L6.76 10.94L7.82 12ZM11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM16.18 7.76L15.12 8.82L14.06 7.76L13 8.82L14.06 9.88L13 10.94L14.06 12L15.12 10.94L16.18 12L17.24 10.94L16.18 9.88L17.24 8.82L16.18 7.76Z" />
  </svg>
)
export const oSentimentVerySatisfied = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.99 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 11.99 22C17.51 22 22 17.53 22 12C22 6.47 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" />
  </svg>
)
export const oSettings = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.4298 12.98C19.4698 12.66 19.4998 12.34 19.4998 12C19.4998 11.66 19.4698 11.34 19.4298 11.02L21.5398 9.37C21.7298 9.22 21.7798 8.95 21.6598 8.73L19.6598 5.27C19.5698 5.11 19.3998 5.02 19.2198 5.02C19.1598 5.02 19.0998 5.03 19.0498 5.05L16.5598 6.05C16.0398 5.65 15.4798 5.32 14.8698 5.07L14.4898 2.42C14.4598 2.18 14.2498 2 13.9998 2H9.99984C9.74984 2 9.53984 2.18 9.50984 2.42L9.12984 5.07C8.51984 5.32 7.95984 5.66 7.43984 6.05L4.94984 5.05C4.88984 5.03 4.82984 5.02 4.76984 5.02C4.59984 5.02 4.42984 5.11 4.33984 5.27L2.33984 8.73C2.20984 8.95 2.26984 9.22 2.45984 9.37L4.56984 11.02C4.52984 11.34 4.49984 11.67 4.49984 12C4.49984 12.33 4.52984 12.66 4.56984 12.98L2.45984 14.63C2.26984 14.78 2.21984 15.05 2.33984 15.27L4.33984 18.73C4.42984 18.89 4.59984 18.98 4.77984 18.98C4.83984 18.98 4.89984 18.97 4.94984 18.95L7.43984 17.95C7.95984 18.35 8.51984 18.68 9.12984 18.93L9.50984 21.58C9.53984 21.82 9.74984 22 9.99984 22H13.9998C14.2498 22 14.4598 21.82 14.4898 21.58L14.8698 18.93C15.4798 18.68 16.0398 18.34 16.5598 17.95L19.0498 18.95C19.1098 18.97 19.1698 18.98 19.2298 18.98C19.3998 18.98 19.5698 18.89 19.6598 18.73L21.6598 15.27C21.7798 15.05 21.7298 14.78 21.5398 14.63L19.4298 12.98ZM17.4498 11.27C17.4898 11.58 17.4998 11.79 17.4998 12C17.4998 12.21 17.4798 12.43 17.4498 12.73L17.3098 13.86L18.1998 14.56L19.2798 15.4L18.5798 16.61L17.3098 16.1L16.2698 15.68L15.3698 16.36C14.9398 16.68 14.5298 16.92 14.1198 17.09L13.0598 17.52L12.8998 18.65L12.6998 20H11.2998L11.1098 18.65L10.9498 17.52L9.88984 17.09C9.45984 16.91 9.05984 16.68 8.65984 16.38L7.74984 15.68L6.68984 16.11L5.41984 16.62L4.71984 15.41L5.79984 14.57L6.68984 13.87L6.54984 12.74C6.51984 12.43 6.49984 12.2 6.49984 12C6.49984 11.8 6.51984 11.57 6.54984 11.27L6.68984 10.14L5.79984 9.44L4.71984 8.6L5.41984 7.39L6.68984 7.9L7.72984 8.32L8.62984 7.64C9.05984 7.32 9.46984 7.08 9.87984 6.91L10.9398 6.48L11.0998 5.35L11.2998 4H12.6898L12.8798 5.35L13.0398 6.48L14.0998 6.91C14.5298 7.09 14.9298 7.32 15.3298 7.62L16.2398 8.32L17.2998 7.89L18.5698 7.38L19.2698 8.59L18.1998 9.44L17.3098 10.14L17.4498 11.27ZM11.9998 8C9.78984 8 7.99984 9.79 7.99984 12C7.99984 14.21 9.78984 16 11.9998 16C14.2098 16 15.9998 14.21 15.9998 12C15.9998 9.79 14.2098 8 11.9998 8ZM11.9998 14C10.8998 14 9.99984 13.1 9.99984 12C9.99984 10.9 10.8998 10 11.9998 10C13.0998 10 13.9998 10.9 13.9998 12C13.9998 13.1 13.0998 14 11.9998 14Z" />
  </svg>
)
export const oSettingsApplications = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6.21 13.97L7.41 16.04C7.49 16.17 7.64 16.22 7.78 16.17L9.27 15.57C9.58 15.81 9.91 16.01 10.28 16.16L10.5 17.75C10.53 17.89 10.65 18 10.8 18H13.2C13.35 18 13.47 17.89 13.5 17.74L13.72 16.15C14.08 16 14.42 15.8 14.73 15.56L16.22 16.16C16.36 16.21 16.51 16.16 16.59 16.03L17.79 13.96C17.87 13.83 17.83 13.67 17.72 13.57L16.45 12.58C16.48 12.39 16.49 12.19 16.49 12C16.49 11.8 16.47 11.61 16.45 11.41L17.72 10.42C17.83 10.33 17.87 10.16 17.79 10.03L16.59 7.96C16.51 7.83 16.36 7.78 16.22 7.83L14.73 8.43C14.42 8.19 14.09 7.99 13.72 7.84L13.5 6.25C13.47 6.11 13.35 6 13.2 6H10.8C10.65 6 10.53 6.11 10.5 6.26L10.28 7.85C9.92 8 9.57 8.19 9.27 8.43L7.78 7.83C7.64 7.78 7.49 7.83 7.41 7.96L6.21 10.03C6.13 10.16 6.17 10.32 6.28 10.42L7.55 11.41C7.52 11.61 7.5 11.8 7.5 12C7.5 12.2 7.52 12.39 7.54 12.59L6.27 13.58C6.16 13.68 6.13 13.84 6.21 13.97ZM12 10.29C12.94 10.29 13.71 11.06 13.71 12C13.71 12.94 12.94 13.71 12 13.71C11.06 13.71 10.29 12.94 10.29 12C10.29 11.06 11.06 10.29 12 10.29ZM19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM19 19H5V5H19V19Z" />
  </svg>
)
export const oSettingsBackupRestore = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12ZM12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19C10.49 19 9.09 18.51 7.94 17.7L6.52 19.14C8.04 20.3 9.94 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3Z" />
  </svg>
)
export const oSettingsBluetooth = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 24H13V22H11V24ZM7 24H9V22H7V24ZM15 24H17V22H15V24ZM17.71 5.71L12 0H11V7.59L6.41 3L5 4.41L10.59 10L5 15.59L6.41 17L11 12.41V20H12L17.71 14.29L13.41 10L17.71 5.71ZM13 3.83L14.88 5.71L13 7.59V3.83ZM14.88 14.29L13 16.17V12.41L14.88 14.29Z" />
  </svg>
)
export const oSettingsBrightness = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19.01H3V4.99H21V19.01ZM8 16H10.5L12 17.5L13.5 16H16V13.5L17.5 12L16 10.5V8H13.5L12 6.5L10.5 8H8V10.5L6.5 12L8 13.5V16ZM12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15V9Z" />
  </svg>
)
export const oSettingsCell = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 22H9V24H7V22ZM11 22H13V24H11V22ZM15 22H17V24H15V22ZM16 0.01L8 0C6.9 0 6 0.9 6 2V18C6 19.1 6.9 20 8 20H16C17.1 20 18 19.1 18 18V2C18 0.9 17.1 0.01 16 0.01ZM16 18H8V17H16V18ZM16 15H8V5H16V15ZM16 3H8V2H16V3Z" />
  </svg>
)
export const oSettingsEthernet = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7.76982 6.75998L6.22982 5.47998L0.819824 12L6.22982 18.52L7.76982 17.24L3.41982 12L7.76982 6.75998ZM6.99982 13H8.99982V11H6.99982V13ZM16.9998 11H14.9998V13H16.9998V11ZM10.9998 13H12.9998V11H10.9998V13ZM17.7698 5.47998L16.2298 6.75998L20.5798 12L16.2298 17.24L17.7698 18.52L23.1798 12L17.7698 5.47998Z" />
  </svg>
)
export const oSettingsInputAntenna = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5C8.13 5 5 8.13 5 12H7C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12H19C19 8.13 15.87 5 12 5ZM13 14.29C13.88 13.9 14.5 13.03 14.5 12C14.5 10.62 13.38 9.5 12 9.5C10.62 9.5 9.5 10.62 9.5 12C9.5 13.02 10.12 13.9 11 14.29V17.59L7.59 21L9 22.41L12 19.41L15 22.41L16.41 21L13 17.59V14.29ZM12 1C5.93 1 1 5.93 1 12H3C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12H23C23 5.93 18.07 1 12 1Z" />
  </svg>
)
export const oSettingsInputComponent = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5 2C5 1.45 4.55 1 4 1C3.45 1 3 1.45 3 2V6H1V16C1 17.3 1.84 18.4 3 18.82V23H5V18.82C6.16 18.4 7 17.3 7 16V6H5V2ZM4 17C3.45 17 3 16.55 3 16V14H5V16C5 16.55 4.55 17 4 17ZM3 12V8H5V12H3ZM13 2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2V6H9V16C9 17.3 9.84 18.4 11 18.82V23H13V18.82C14.16 18.4 15 17.3 15 16V6H13V2ZM12 17C11.45 17 11 16.55 11 16V14H13V16C13 16.55 12.55 17 12 17ZM11 12V8H13V12H11ZM21 6V2C21 1.45 20.55 1 20 1C19.45 1 19 1.45 19 2V6H17V16C17 17.3 17.84 18.4 19 18.82V23H21V18.82C22.16 18.4 23 17.3 23 16V6H21ZM20 17C19.45 17 19 16.55 19 16V14H21V16C21 16.55 20.55 17 20 17ZM19 12V8H21V12H19Z" />
  </svg>
)
export const oSettingsInputComposite = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5 2C5 1.45 4.55 1 4 1C3.45 1 3 1.45 3 2V6H1V16C1 17.3 1.84 18.4 3 18.82V23H5V18.82C6.16 18.4 7 17.3 7 16V6H5V2ZM4 17C3.45 17 3 16.55 3 16V14H5V16C5 16.55 4.55 17 4 17ZM3 12V8H5V12H3ZM13 2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2V6H9V16C9 17.3 9.84 18.4 11 18.82V23H13V18.82C14.16 18.4 15 17.3 15 16V6H13V2ZM12 17C11.45 17 11 16.55 11 16V14H13V16C13 16.55 12.55 17 12 17ZM11 12V8H13V12H11ZM21 6V2C21 1.45 20.55 1 20 1C19.45 1 19 1.45 19 2V6H17V16C17 17.3 17.84 18.4 19 18.82V23H21V18.82C22.16 18.4 23 17.3 23 16V6H21ZM20 17C19.45 17 19 16.55 19 16V14H21V16C21 16.55 20.55 17 20 17ZM19 12V8H21V12H19Z" />
  </svg>
)
export const oSettingsInputHdmi = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 7V4C18 2.9 17.1 2 16 2H8C6.9 2 6 2.9 6 4V7H5V13L8 19V22H16V19L19 13V7H18ZM8 4H16V7H13.99V5H12.99V7H11V5H10V7H8V4ZM17 12.53L14 18.53V20H10V18.53L7 12.53V9H17V12.53Z" />
  </svg>
)
export const oSettingsInputSvideo = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M8 11.5C8 10.67 7.33 10 6.5 10C5.67 10 5 10.67 5 11.5C5 12.33 5.67 13 6.5 13C7.33 13 8 12.33 8 11.5ZM15 6.5C15 5.67 14.33 5 13.5 5H10.5C9.67 5 9 5.67 9 6.5C9 7.33 9.67 8 10.5 8H13.5C14.33 8 15 7.33 15 6.5ZM8.5 15C7.67 15 7 15.67 7 16.5C7 17.33 7.67 18 8.5 18C9.33 18 10 17.33 10 16.5C10 15.67 9.33 15 8.5 15ZM12 1C5.93 1 1 5.93 1 12C1 18.07 5.93 23 12 23C18.07 23 23 18.07 23 12C23 5.93 18.07 1 12 1ZM12 21C7.04 21 3 16.96 3 12C3 7.04 7.04 3 12 3C16.96 3 21 7.04 21 12C21 16.96 16.96 21 12 21ZM17.5 10C16.67 10 16 10.67 16 11.5C16 12.33 16.67 13 17.5 13C18.33 13 19 12.33 19 11.5C19 10.67 18.33 10 17.5 10ZM15.5 15C14.67 15 14 15.67 14 16.5C14 17.33 14.67 18 15.5 18C16.33 18 17 17.33 17 16.5C17 15.67 16.33 15 15.5 15Z" />
  </svg>
)
export const oSettingsOverscan = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12.01 5.5L10 8H14L12.01 5.5ZM18 10V14L20.5 12.01L18 10ZM6 10L3.5 12.01L6 14V10ZM14 16H10L12.01 18.5L14 16ZM21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19.01H3V4.99H21V19.01Z" />
  </svg>
)
export const oSettingsPhone = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 9H13V11H11V9ZM15 9H17V11H15V9ZM20 15.5C18.75 15.5 17.55 15.3 16.43 14.93C16.33 14.9 16.22 14.88 16.12 14.88C15.86 14.88 15.61 14.98 15.41 15.17L13.21 17.37C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.58C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.5C21 15.95 20.55 15.5 20 15.5ZM5.03 5H6.53C6.6 5.88 6.75 6.75 6.99 7.59L5.79 8.8C5.38 7.59 5.12 6.32 5.03 5ZM19 18.97C17.68 18.88 16.4 18.62 15.2 18.21L16.4 17.01C17.25 17.25 18.12 17.4 19 17.46V18.97ZM19 9H21V11H19V9Z" />
  </svg>
)
export const oSettingsPower = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 24H9V22H7V24ZM11 24H13V22H11V24ZM13 2H11V12H13V2ZM16.56 4.44L15.11 5.89C16.84 6.94 18 8.83 18 11C18 14.31 15.31 17 12 17C8.69 17 6 14.31 6 11C6 8.83 7.16 6.94 8.88 5.88L7.44 4.44C5.36 5.88 4 8.28 4 11C4 15.42 7.58 19 12 19C16.42 19 20 15.42 20 11C20 8.28 18.64 5.88 16.56 4.44ZM15 24H17V22H15V24Z" />
  </svg>
)
export const oSettingsRemote = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.45997 7.46L7.04997 6.05C8.31997 4.78 10.07 4 12 4C13.93 4 15.68 4.78 16.95 6.05L15.54 7.46C14.63 6.56 13.38 6 12 6C10.62 6 9.36997 6.56 8.45997 7.46ZM4.21997 3.22C6.20997 1.23 8.95997 0 12 0C15.04 0 17.79 1.23 19.77 3.23L18.36 4.64C16.74 3.01 14.49 2 12 2C9.50997 2 7.25997 3.01 5.62997 4.63L4.21997 3.22ZM15 9H9C8.45 9 8 9.45 8 10V22C8 22.55 8.45 23 9 23H15C15.55 23 16 22.55 16 22V10C16 9.45 15.55 9 15 9ZM10 21V11H14V21H10ZM12 14C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13C11 13.5523 11.4477 14 12 14Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oSettingsSystemDaydream = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 17H9C6.79 17 5 15.21 5 13C5 11.07 6.36 9.44 8.22 9.08C9.04 7.8 10.47 7 12 7C13.95 7 15.66 8.28 16.26 10.09C17.84 10.45 19 11.84 19 13.5C19 15.43 17.43 17 15.5 17ZM8.74 11.02C7.74 11.15 7 11.99 7 13C7 14.1 7.9 15 9 15H15.5C16.33 15 17 14.33 17 13.5C17 12.67 16.33 12 15.5 12H14.63L14.46 11.14C14.29 9.92 13.23 9 12 9C11.04 9 10.16 9.57 9.74 10.45L9.47 11.02H8.74ZM21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19.01H3V4.99H21V19.01Z" />
  </svg>
)
export const oSettingsVoice = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 22H9V24H7V22ZM12 13C13.66 13 15 11.66 15 10V4C15 2.34 13.66 1 12 1C10.34 1 9 2.34 9 4V10C9 11.66 10.34 13 12 13ZM11 4C11 3.45 11.45 3 12 3C12.55 3 13 3.45 13 4V10C13 10.56 12.56 11 12 11C11.45 11 11 10.55 11 10V4ZM11 22H13V24H11V22ZM15 22H17V24H15V22ZM19 10H17.3C17.3 13 14.76 15.1 12 15.1C9.24 15.1 6.7 13 6.7 10H5C5 13.41 7.72 16.23 11 16.72V20H13V16.72C16.28 16.23 19 13.41 19 10Z" />
  </svg>
)
export const oShare = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08ZM18 4C18.55 4 19 4.45 19 5C19 5.55 18.55 6 18 6C17.45 6 17 5.55 17 5C17 4.45 17.45 4 18 4ZM6 13C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11C6.55 11 7 11.45 7 12C7 12.55 6.55 13 6 13ZM18 20.02C17.45 20.02 17 19.57 17 19.02C17 18.47 17.45 18.02 18 18.02C18.55 18.02 19 18.47 19 19.02C19 19.57 18.55 20.02 18 20.02Z" />
  </svg>
)
export const oShop = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16 6V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H2V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V6H16ZM10 4H14V6H10V4ZM20 19H4V8H20V19ZM9 18L16.5 13L9 9V18Z" />
  </svg>
)
export const oShopTwo = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9H1V20C1 21.11 1.89 22 3 22H17C18.11 22 19 21.11 19 20H3V9ZM18 5V3C18 1.89 17.11 1 16 1H12C10.89 1 10 1.89 10 3V5H5V16C5 17.11 5.89 18 7 18H21C22.11 18 23 17.11 23 16V5H18ZM12 3H16V5H12V3ZM21 16H7V7H21V16ZM12 15L17.5 11L12 8V15Z" />
  </svg>
)
export const oShoppingBasket = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 9.00002H17.21L12.83 2.44002C12.64 2.16002 12.32 2.02002 12 2.02002C11.68 2.02002 11.36 2.16002 11.17 2.45002L6.79 9.00002H2C1.45 9.00002 1 9.45002 1 10C1 10.09 1.01 10.18 1.04 10.27L3.58 19.54C3.81 20.38 4.58 21 5.5 21H18.5C19.42 21 20.19 20.38 20.43 19.54L22.97 10.27L23 10C23 9.45002 22.55 9.00002 22 9.00002ZM12 4.80002L14.8 9.00002H9.2L12 4.80002ZM18.5 19L5.51 19.01L3.31 11H20.7L18.5 19ZM12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13Z" />
  </svg>
)
export const oShoppingCart = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.55 13C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C21.25 4.82 20.77 4 20.01 4H5.21L4.27 2H1V4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H19V15H7L8.1 13H15.55ZM6.16 6H18.31L15.55 11H8.53L6.16 6ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" />
  </svg>
)
export const oShortText = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 9H20V11H4V9ZM4 13H14V15H4V13Z" />
  </svg>
)
export const oShowChart = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3.5 18.49L9.5 12.48L13.5 16.48L22 6.92001L20.59 5.51001L13.5 13.48L9.5 9.48001L2 16.99L3.5 18.49Z" />
  </svg>
)
export const oShuffle = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10.59 9.17L5.41 4L4 5.41L9.17 10.58L10.59 9.17ZM14.5 4L16.54 6.04L4 18.59L5.41 20L17.96 7.46L20 9.5V4H14.5ZM14.83 13.41L13.42 14.82L16.55 17.95L14.5 20H20V14.5L17.96 16.54L14.83 13.41Z" />
  </svg>
)
export const oShutterSpeed = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 1H9V3H15V1ZM19.03 7.39L20.45 5.97C20.02 5.46 19.55 4.98 19.04 4.56L17.62 5.98C16.07 4.74 14.12 4 12 4C7.03 4 3 8.03 3 13C3 17.97 7.02 22 12 22C16.98 22 21 17.97 21 13C21 10.88 20.26 8.93 19.03 7.39ZM12 20C8.13 20 5 16.87 5 13C5 9.13 8.13 6 12 6C15.87 6 19 9.13 19 13C19 16.87 15.87 20 12 20ZM11.68 15H6.35C6.92 16.62 8.17 17.92 9.76 18.56L9.65 18.5L11.68 15ZM17.65 11C17.08 9.4 15.87 8.11 14.31 7.46L12.26 11H17.65ZM10.61 18.83C11.06 18.94 11.52 19 12 19C13.34 19 14.57 18.55 15.57 17.81L13.46 13.91L10.61 18.83ZM7.55 8.99C6.59 10.05 6 11.46 6 13C6 13.34 6.04 13.67 6.09 14H10.81L7.55 8.99ZM16.34 17.13C17.37 16.06 18 14.6 18 13C18 12.66 17.96 12.33 17.91 12H13.57L16.34 17.13ZM13.33 7.15C12.9 7.06 12.46 7 12 7C10.6 7 9.31 7.49 8.29 8.29L10.61 11.85L13.33 7.15Z" />
  </svg>
)
export const oSignalCellular0Bar = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M2 22H22V2L2 22Z" fillOpacity="0.3" />
  </svg>
)
export const oSignalCellular1Bar = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M2 22H22V2L2 22Z" fillOpacity="0.3" />
    <path d="M12 12L2 22H12V12Z" fill="black" />
  </svg>
)
export const oSignalCellular2Bar = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M2 22H22V2L2 22Z" fillOpacity="0.3" />
    <path d="M14 10L2 22H14V10Z" fill="black" />
  </svg>
)
export const oSignalCellular3Bar = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M2 22H22V2L2 22Z" fillOpacity="0.3" />
    <path d="M17 7L2 22H17V7Z" fill="black" />
  </svg>
)
export const oSignalCellular4Bar = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M2 22H22V2L2 22Z" />
  </svg>
)
export const oSignalCellularAlt = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 4H20V20H17V4ZM5 14H8V20H5V14ZM11 9H14V20H11V9Z" />
  </svg>
)
export const oSignalCellularConnectedNoInternet0Bar = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 8V2L2 22H18V8H22Z" fillOpacity="0.3" />
    <path d="M20 22H22V20H20V22ZM20 10V18H22V10H20Z" fill="black" />
  </svg>
)
export const oSignalCellularConnectedNoInternet1Bar = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 8V2L2 22H18V8H22Z" fillOpacity="0.3" />
    <path
      d="M20 10V18H22V10H20ZM12 22V12L2 22H12ZM20 22H22V20H20V22Z"
      fill="black"
    />
  </svg>
)
export const oSignalCellularConnectedNoInternet2Bar = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 8V2L2 22H18V8H22Z" fillOpacity="0.3" />
    <path
      d="M14 22V10L2 22H14ZM20 10V18H22V10H20ZM20 22H22V20H20V22Z"
      fill="black"
    />
  </svg>
)
export const oSignalCellularConnectedNoInternet3Bar = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 8V2L2 22H18V8H22Z" fillOpacity="0.3" />
    <path
      d="M18 22V6L2 22H18ZM20 10V18H22V10H20ZM20 22H22V20H20V22Z"
      fill="black"
    />
  </svg>
)
export const oSignalCellularConnectedNoInternet4Bar = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 18H22V10H20V18ZM20 22H22V20H20V22ZM2 22H18V8H22V2L2 22Z" />
  </svg>
)
export const oSignalCellularNoSim = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10.8299 5H16.9999V14.11L18.9999 16.11V5C18.9999 3.9 18.0999 3 16.9999 3H9.99988L7.93988 5.06L9.35988 6.48L10.8299 5ZM21.2599 21.21L3.78988 3.74L2.37988 5.15L4.99988 7.77V19C4.99988 20.11 5.89988 21 6.99988 21H18.2299L19.8499 22.62L21.2599 21.21ZM6.99988 19V9.79L16.2299 19H6.99988Z" />
  </svg>
)
export const oSignalCellularNull = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6.83V20H6.83L20 6.83ZM22 2L2 22H22V2Z" />
  </svg>
)
export const oSignalCellularOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 1L12.69 9.31L21 17.61V1ZM4.91 4.36L3.5 5.77L9.86 12.14L1 21H18.73L20.73 23L22.14 21.59L4.91 4.36Z" />
  </svg>
)
export const oSignalWifi0Bar = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.0099 21.49L23.6399 7C23.1899 6.66 18.7099 3 11.9999 3C5.27986 3 0.809863 6.66 0.359863 7L11.9899 21.49L11.9999 21.5L12.0099 21.49Z"
      fillOpacity="0.3"
    />
  </svg>
)
export const oSignalWifi1Bar = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.0099 21.49L23.6399 7C23.1899 6.66 18.7099 3 11.9999 3C5.27986 3 0.809863 6.66 0.359863 7L11.9899 21.49L11.9999 21.5L12.0099 21.49Z"
      fillOpacity="0.3"
    />
    <path
      d="M6.66992 14.86L11.9999 21.49V21.5L12.0099 21.49L17.3399 14.86C17.0599 14.65 15.0299 13 11.9999 13C8.96992 13 6.93992 14.65 6.66992 14.86Z"
      fill="black"
    />
  </svg>
)
export const oSignalWifi1BarLock = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.4999 14.5C15.4999 11.7 17.6999 9.5 20.4999 9.5C20.8599 9.5 21.2099 9.54 21.5499 9.61L23.6399 7C23.1899 6.66 18.7099 3 11.9999 3C5.27986 3 0.809863 6.66 0.359863 7L11.9999 21.5L15.4999 17.14V14.5Z"
      fillOpacity="0.3"
    />
    <path
      d="M15.4997 14.5C15.4997 14.27 15.5397 14.04 15.5697 13.82C14.6497 13.39 13.4297 13 11.9997 13C8.99971 13 6.89971 14.7 6.69971 14.9L11.9997 21.5L15.4997 17.14V14.5ZM22.9997 16V14.5C22.9997 13.1 21.8997 12 20.4997 12C19.0997 12 17.9997 13.1 17.9997 14.5V16C17.4997 16 16.9997 16.5 16.9997 17V21C16.9997 21.5 17.4997 22 17.9997 22H22.9997C23.4997 22 23.9997 21.5 23.9997 21V17C23.9997 16.5 23.4997 16 22.9997 16ZM21.9997 16H18.9997V14.5C18.9997 13.7 19.6997 13 20.4997 13C21.2997 13 21.9997 13.7 21.9997 14.5V16Z"
      fill="black"
    />
  </svg>
)
export const oSignalWifi2Bar = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23.6399 7C23.1899 6.66 18.7099 3 11.9999 3C5.27986 3 0.809863 6.66 0.359863 7L11.9999 21.5L23.6399 7Z"
      fillOpacity="0.3"
    />
    <path
      d="M4.79004 12.52L12 21.5L19.21 12.51C18.85 12.24 16.1 10 12 10C7.90004 10 5.15004 12.24 4.79004 12.52Z"
      fill="black"
    />
  </svg>
)
export const oSignalWifi2BarLock = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.4999 14.5C15.4999 11.7 17.6999 9.5 20.4999 9.5C20.8599 9.5 21.2099 9.54 21.5499 9.61L23.6399 7C23.1899 6.66 18.7099 3 11.9999 3C5.27986 3 0.809863 6.66 0.359863 7L11.9999 21.5L15.4999 17.14V14.5Z"
      fillOpacity="0.3"
    />
    <path
      d="M15.4998 14.5C15.4998 13.16 16.0098 11.97 16.8398 11.08C15.6198 10.51 13.9798 10 11.9998 10C7.8998 10 5.1998 12.2 4.7998 12.5L11.9998 21.5L15.4998 17.12V14.5ZM22.9998 16V14.5C22.9998 13.1 21.8998 12 20.4998 12C19.0998 12 17.9998 13.1 17.9998 14.5V16C17.4998 16 16.9998 16.5 16.9998 17V21C16.9998 21.5 17.4998 22 17.9998 22H22.9998C23.4998 22 23.9998 21.5 23.9998 21V17C23.9998 16.5 23.4998 16 22.9998 16ZM21.9998 16H18.9998V14.5C18.9998 13.7 19.6998 13 20.4998 13C21.2998 13 21.9998 13.7 21.9998 14.5V16Z"
      fill="black"
    />
  </svg>
)
export const oSignalWifi3Bar = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23.6399 7C23.1899 6.66 18.7099 3 11.9999 3C5.27986 3 0.809863 6.66 0.359863 7L11.9999 21.5L23.6399 7Z"
      fillOpacity="0.3"
    />
    <path
      d="M3.52979 10.95L11.9998 21.5L20.4698 10.95C20.0398 10.62 16.8098 8 11.9998 8C7.18979 8 3.95979 10.62 3.52979 10.95Z"
      fill="black"
    />
  </svg>
)
export const oSignalWifi3BarLock = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.4999 14.5C15.4999 11.7 17.6999 9.5 20.4999 9.5C20.8599 9.5 21.2099 9.54 21.5499 9.61L23.6399 7C23.1899 6.66 18.7099 3 11.9999 3C5.27986 3 0.809863 6.66 0.359863 7L11.9999 21.5L15.4999 17.14V14.5Z"
      fillOpacity="0.3"
    />
    <path
      d="M22.9998 16V14.5C22.9998 13.1 21.8998 12 20.4998 12C19.0998 12 17.9998 13.1 17.9998 14.5V16C17.4998 16 16.9998 16.5 16.9998 17V21C16.9998 21.5 17.4998 22 17.9998 22H22.9998C23.4998 22 23.9998 21.5 23.9998 21V17C23.9998 16.5 23.4998 16 22.9998 16ZM21.9998 16H18.9998V14.5C18.9998 13.7 19.6998 13 20.4998 13C21.2998 13 21.9998 13.7 21.9998 14.5V16ZM15.4998 14.5C15.4998 12.31 16.8498 10.51 18.7698 9.82C17.2898 8.98 14.9398 8 11.9998 8C7.18979 8 3.95979 10.62 3.52979 10.95L11.9998 21.5L15.4998 17.14V14.5Z"
      fill="black"
    />
  </svg>
)
export const oSignalWifi4Bar = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12.0099 21.49L23.6399 7C23.1899 6.66 18.7099 3 11.9999 3C5.27986 3 0.809863 6.66 0.359863 7L11.9899 21.49L11.9999 21.5L12.0099 21.49Z" />
  </svg>
)
export const oSignalWifi4BarLock = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20.4999 9.5C20.8599 9.5 21.2099 9.54 21.5499 9.61L23.6399 7C23.1899 6.66 18.7099 3 11.9999 3C5.27986 3 0.809863 6.66 0.359863 7L11.9999 21.5L15.4999 17.14V14.5C15.4999 11.7 17.6999 9.5 20.4999 9.5ZM22.9999 16V14.5C22.9999 13.1 21.8999 12 20.4999 12C19.0999 12 17.9999 13.1 17.9999 14.5V16C17.4999 16 16.9999 16.5 16.9999 17V21C16.9999 21.5 17.4999 22 17.9999 22H22.9999C23.4999 22 23.9999 21.5 23.9999 21V17C23.9999 16.5 23.4999 16 22.9999 16ZM21.9999 16H18.9999V14.5C18.9999 13.7 19.6999 13 20.4999 13C21.2999 13 21.9999 13.7 21.9999 14.5V16Z" />
  </svg>
)
export const oSignalWifiOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M23.6399 7.00006C23.1899 6.66006 18.7099 3.00006 11.9999 3.00006C10.6799 3.00006 9.44986 3.14006 8.30986 3.38006L18.4299 13.5001L23.6399 7.00006ZM3.40986 1.31006L1.99986 2.72006L4.04986 4.77006C1.90986 5.76006 0.589863 6.82006 0.359863 7.00006L11.9999 21.5001L15.9099 16.6301L19.2299 19.9501L20.6399 18.5401L3.40986 1.31006Z" />
  </svg>
)
export const oSimCard = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2H10L4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 4V20H6V8.83L10.83 4H18ZM7 17H9V19H7V17ZM15 17H17V19H15V17ZM7 11H9V15H7V11ZM11 15H13V19H11V15ZM11 11H13V13H11V11ZM15 11H17V15H15V11Z" />
  </svg>
)
export const oSkipNext = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6 18L14.5 12L6 6V18ZM8 9.86L11.03 12L8 14.14V9.86ZM16 6H18V18H16V6Z" />
  </svg>
)
export const oSkipPrevious = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6 6H8V18H6V6ZM9.5 12L18 18V6L9.5 12ZM16 14.14L12.97 12L16 9.86V14.14Z" />
  </svg>
)
export const oSlideshow = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M10 8V16L15 12L10 8ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" />
  </svg>
)
export const oSlowMotionVideo = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13.05 9.79005L10 7.50005V16.5L13.05 14.21L16 12L13.05 9.79005ZM13.05 9.79005L10 7.50005V16.5L13.05 14.21L16 12L13.05 9.79005ZM13.05 9.79005L10 7.50005V16.5L13.05 14.21L16 12L13.05 9.79005ZM11 4.07005V2.05005C8.99005 2.25005 7.16005 3.05005 5.68005 4.26005L7.10005 5.69005C8.21005 4.83005 9.54005 4.25005 11 4.07005ZM5.69005 7.10005L4.26005 5.68005C3.05005 7.16005 2.25005 8.99005 2.05005 11H4.07005C4.25005 9.54005 4.83005 8.21005 5.69005 7.10005ZM4.07005 13H2.05005C2.25005 15.01 3.05005 16.84 4.26005 18.32L5.69005 16.89C4.83005 15.79 4.25005 14.46 4.07005 13ZM5.68005 19.74C7.16005 20.9501 9.00005 21.75 11 21.9501V19.93C9.54005 19.75 8.21005 19.17 7.10005 18.31L5.68005 19.74ZM22 12C22 17.16 18.08 21.42 13.05 21.9501V19.93C16.97 19.41 20 16.05 20 12C20 7.95005 16.97 4.59005 13.05 4.07005V2.05005C18.08 2.58005 22 6.84005 22 12Z" />
  </svg>
)
export const oSmartphone = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 1.01L7 1C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1.01 17 1.01ZM17 19H7V5H17V19Z" />
  </svg>
)
export const oSmokeFree = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20.5 13H22V16H20.5V13ZM18 13H19.5V16H18V13ZM17 13H14.66L17 15.34V13ZM14.5 8.64995H16.03C17.08 8.64995 18 9.38995 18 10.7V12H19.5V10.36C19.5 8.54995 17.9 7.19995 16.03 7.19995H14.5C13.48 7.19995 12.65 6.21995 12.65 5.19995C12.65 4.17995 13.48 3.44995 14.5 3.44995V1.94995C12.65 1.94995 11.15 3.44995 11.15 5.29995C11.15 7.14995 12.65 8.64995 14.5 8.64995ZM18.85 4.72995C19.47 4.11995 19.85 3.27995 19.85 2.34995H18.35C18.35 3.36995 17.52 4.19995 16.5 4.19995V5.69995C18.74 5.69995 20.5 7.52995 20.5 9.76995V12H22V9.75995C22 7.53995 20.72 5.61995 18.85 4.72995ZM3.41 4.58995L2 5.99995L9 13H2V16H12L19 23L20.41 21.59L3.41 4.58995Z" />
  </svg>
)
export const oSmokingRooms = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 16H19.5V19H18V16ZM2 16H17V19H2V16ZM16.03 10.2H14.5C13.48 10.2 12.65 9.22 12.65 8.2C12.65 7.18 13.48 6.45 14.5 6.45V4.95C12.65 4.95 11.15 6.45 11.15 8.3C11.15 10.15 12.65 11.65 14.5 11.65H16.03C17.08 11.65 18 12.39 18 13.7V15H19.5V13.36C19.5 11.55 17.9 10.2 16.03 10.2ZM20.5 16H22V19H20.5V16ZM18.85 7.73C19.47 7.12 19.85 6.28 19.85 5.35C19.85 3.5 18.35 2 16.5 2V3.5C17.52 3.5 18.35 4.33 18.35 5.35C18.35 6.37 17.52 7.2 16.5 7.2V8.7C18.74 8.7 20.5 10.53 20.5 12.77V15H22V12.76C22 10.54 20.72 8.62 18.85 7.73Z" />
  </svg>
)
export const oSms = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16ZM7 9H9V11H7V9ZM15 9H17V11H15V9ZM11 9H13V11H11V9Z" />
  </svg>
)
export const oSmsFailed = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16ZM11 12H13V14H11V12ZM11 6H13V10H11V6Z" />
  </svg>
)
export const oSnooze = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9.00015 11.0001H12.6302L9.00015 15.2001V17.0001H15.0002V15.0001H11.3702L15.0002 10.8001V9.00006H9.00015V11.0001ZM16.0562 3.34606L17.3382 1.81106L21.9452 5.66106L20.6652 7.20106L16.0562 3.34606ZM3.33615 7.19006L2.05615 5.65406L6.66215 1.81006L7.94215 3.34606L3.33615 7.19006ZM12.0002 6.00006C15.8602 6.00006 19.0002 9.14006 19.0002 13.0001C19.0002 16.8601 15.8602 20.0001 12.0002 20.0001C8.14015 20.0001 5.00015 16.8601 5.00015 13.0001C5.00015 9.14006 8.14015 6.00006 12.0002 6.00006ZM12.0002 4.00006C7.03015 4.00006 3.00015 8.03006 3.00015 13.0001C3.00015 17.9701 7.03015 22.0001 12.0002 22.0001C16.9702 22.0001 21.0002 17.9701 21.0002 13.0001C21.0002 8.03006 16.9702 4.00006 12.0002 4.00006Z" />
  </svg>
)
export const oSort = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 18H9V16H3V18ZM3 6V8H21V6H3ZM3 13H15V11H3V13Z" />
  </svg>
)
export const oSortByAlpha = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14.9401 4.66005H10.2201L12.5801 2.30005L14.9401 4.66005ZM10.2501 19.3701H14.9101L12.5801 21.7001L10.2501 19.3701ZM6.1001 6.27005L1.6001 17.73H3.4401L4.3601 15.28H9.4701L10.3901 17.73H12.2301L7.7401 6.27005H6.1001ZM4.9701 13.64L6.9101 8.46005L8.8501 13.64H4.9701ZM15.7301 16.14H21.8501V17.73H13.3201V16.44L19.2401 7.88005H13.3601V6.28005H21.6601V7.54005L15.7301 16.14Z" />
  </svg>
)
export const oSpa = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.49 9.63C15.31 6.84 14.18 4.12 12.06 2C9.92 4.14 8.74 6.86 8.51 9.63C9.79 10.31 10.97 11.19 12 12.26C13.03 11.2 14.21 10.32 15.49 9.63ZM12.05 5.19C12.68 6.22 13.12 7.37 13.35 8.57C12.88 8.87 12.44 9.2 12.01 9.55C11.59 9.21 11.14 8.88 10.68 8.58C10.93 7.38 11.39 6.23 12.05 5.19ZM12 15.45C11.18 14.2 10.14 13.11 8.94 12.25C8.81 12.16 8.67 12.09 8.54 11.99C8.67 12.08 8.81 12.16 8.93 12.24C6.98 10.83 4.59 10 2 10C2 15.32 5.36 19.82 10.03 21.49C10.66 21.72 11.32 21.89 12 22C12.68 21.88 13.33 21.71 13.97 21.49C18.64 19.82 22 15.32 22 10C17.82 10 14.15 12.17 12 15.45ZM13.32 19.6C12.88 19.75 12.44 19.87 11.99 19.97C11.55 19.88 11.12 19.76 10.71 19.61C7.42 18.43 5.01 15.62 4.26 12.26C5.36 12.52 6.41 12.97 7.38 13.59L7.36 13.6C7.49 13.69 7.62 13.78 7.75 13.85L7.82 13.89C8.81 14.61 9.66 15.5 10.33 16.54L12 19.1L13.67 16.55C14.36 15.5 15.22 14.6 16.2 13.89L16.27 13.84C16.36 13.79 16.45 13.73 16.54 13.67L16.53 13.65C17.51 13 18.6 12.52 19.74 12.25C18.99 15.62 16.59 18.43 13.32 19.6ZM8.99 12.28C8.97 12.27 8.95 12.25 8.94 12.24C8.94 12.24 8.95 12.24 8.95 12.25C8.96 12.26 8.97 12.27 8.99 12.28Z" />
  </svg>
)
export const oSpaceBar = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 9V13H6V9H4V15H20V9H18Z" />
  </svg>
)
export const oSpeaker = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 21.99 7 21.99L17 22C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2ZM7 20V4H17V20H7ZM12 9C13.1 9 14 8.1 14 7C14 5.9 13.1 5 12 5C10.89 5 10 5.9 10 7C10 8.1 10.89 9 12 9ZM12 11C9.79 11 8 12.79 8 15C8 17.21 9.79 19 12 19C14.21 19 16 17.21 16 15C16 12.79 14.21 11 12 11ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17Z" />
  </svg>
)
export const oSpeakerGroup = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18.2 1H9.8C8.81 1 8 1.81 8 2.8V17.2C8 18.19 8.81 18.99 9.8 18.99L18.2 19C19.19 19 20 18.19 20 17.2V2.8C20 1.81 19.19 1 18.2 1ZM18 17L10 16.99V3H18V17ZM14 8C15.1 8 16 7.11 16 6C16 4.89 15.1 4 14 4C12.9 4 12 4.89 12 6C12 7.11 12.9 8 14 8ZM14 16C15.93 16 17.5 14.43 17.5 12.5C17.5 10.57 15.93 9 14 9C12.07 9 10.5 10.57 10.5 12.5C10.5 14.43 12.07 16 14 16ZM14 11C14.83 11 15.5 11.67 15.5 12.5C15.5 13.33 14.83 14 14 14C13.17 14 12.5 13.33 12.5 12.5C12.5 11.67 13.17 11 14 11ZM6 5H4V21C4 22.1 4.89 23 6 23H16V21H6V5Z" />
  </svg>
)
export const oSpeakerNotes = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4.58 16.59L4 17.17V4H20V16ZM6 12H8V14H6V12ZM6 9H8V11H6V9ZM6 6H8V8H6V6ZM10 12H15V14H10V12ZM10 9H18V11H10V9ZM10 6H18V8H10V6Z" />
  </svg>
)
export const oSpeakerNotesOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4.00009V16.0001H18.66L20.57 17.9101C21.39 17.6601 22 16.9001 22 16.0001V4.00009C22 2.90009 21.1 2.00009 20 2.00009H4.66L6.66 4.00009H20ZM6 12.0001H8V14.0001H6V12.0001ZM18 9.00009H11.66L13.66 11.0001H18V9.00009ZM18 6.00009H10V7.34009L10.66 8.00009H18V6.00009ZM1.41 1.59009L0 3.00009L2.01 5.01009L2 22.0001L6 18.0001H15L20.73 23.7301L22.14 22.3201L1.41 1.59009ZM5.17 16.0001L4 17.1701V7.00009L6 9.00009V11.0001H8L13 16.0001H5.17Z" />
  </svg>
)
export const oSpeakerPhone = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 7.07L8.43 8.5C9.34 7.59 10.61 7.02 12 7.02C13.39 7.02 14.66 7.59 15.57 8.5L17 7.07C15.72 5.79 13.95 5 12 5C10.05 5 8.28 5.79 7 7.07ZM12 1C8.98 1 6.24 2.23 4.25 4.21L5.66 5.62C7.28 4 9.53 3 12 3C14.47 3 16.72 4 18.34 5.62L19.75 4.21C17.76 2.23 15.02 1 12 1ZM14.86 10.01L9.14 10C8.51 10 8 10.51 8 11.14V20.85C8 21.48 8.51 21.99 9.14 21.99H14.85C15.48 21.99 15.99 21.48 15.99 20.85V11.14C16 10.51 15.49 10.01 14.86 10.01ZM15 20H9V12H15V20Z" />
  </svg>
)
export const oSpellcheck = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12.45 16H14.54L9.42996 3H7.56996L2.45996 16H4.54996L5.66996 13H11.31L12.45 16ZM6.42996 11L8.49996 5.48L10.57 11H6.42996ZM21.59 11.59L13.5 19.68L9.82996 16L8.41996 17.41L13.51 22.5L23 13L21.59 11.59Z" />
  </svg>
)
export const oStar = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
  </svg>
)
export const oStarBorder = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 9.24L14.81 8.62L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.55 13.97L22 9.24ZM12 15.4L8.24 17.67L9.24 13.39L5.92 10.51L10.3 10.13L12 6.1L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z" />
  </svg>
)
export const oStarHalf = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 9.24L14.81 8.62L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.55 13.97L22 9.24ZM12 15.4V6.1L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z" />
  </svg>
)
export const oStars = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM19.47 9.16L14.46 8.73L12.46 4.02C15.67 4.21 18.37 6.29 19.47 9.16ZM14.4 15.42L12 13.98L9.61 15.42L10.24 12.7L8.13 10.87L10.91 10.63L12 8.06L13.09 10.62L15.87 10.86L13.76 12.69L14.4 15.42ZM11.54 4.02L9.54 8.74L4.52 9.17C5.62 6.29 8.32 4.2 11.54 4.02ZM4 12C4 11.36 4.08 10.74 4.23 10.14L8.02 13.42L6.91 18.17C5.13 16.7 4 14.48 4 12ZM7.84 18.82L12 16.31L16.16 18.81C14.94 19.56 13.52 20 11.99 20C10.47 20 9.05 19.56 7.84 18.82ZM17.09 18.17L15.98 13.42L19.77 10.14C19.91 10.73 20 11.36 20 12C20 14.48 18.86 16.7 17.09 18.17Z" />
  </svg>
)
export const oStayCurrentLandscape = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M1.01 7L1 17C1 18.1 1.9 19 3 19H21C22.1 19 23 18.1 23 17V7C23 5.9 22.1 5 21 5H3C1.9 5 1.01 5.9 1.01 7ZM19 7V17H5V7H19Z" />
  </svg>
)
export const oStayCurrentPortrait = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 1.01L7.00001 1C5.90001 1 5.01001 1.9 5.01001 3V21C5.01001 22.1 5.90001 23 7.00001 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1.01 17 1.01ZM17 19H7.00001V5H17V19Z" />
  </svg>
)
export const oStayPrimaryLandscape = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M1.01 7L1 17C1 18.1 1.9 19 3 19H21C22.1 19 23 18.1 23 17V7C23 5.9 22.1 5 21 5H3C1.9 5 1.01 5.9 1.01 7ZM19 7V17H5V7H19Z" />
  </svg>
)
export const oStayPrimaryPortrait = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 1.01L7.00001 1C5.90001 1 5.01001 1.9 5.01001 3V21C5.01001 22.1 5.90001 23 7.00001 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1.01 17 1.01ZM17 19H7.00001V5H17V19Z" />
  </svg>
)
export const oStop = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8V16H8V8H16ZM18 6H6V18H18V6Z" />
  </svg>
)
export const oStopScreenShare = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21.79 18.0001L23.79 20.0001H24V18.0001H21.79ZM1.11 2.98007L2.66 4.54007C2.25 4.91007 2 5.43007 2 6.02007V16.0001C2 17.1001 2.9 18.0001 4.01 18.0001H0V20.0001H18.13L20.84 22.7101L22.25 21.3001L2.52 1.57007L1.11 2.98007ZM4 6.02007H4.13L9.08 10.9501C7.94 12.0701 7.31 13.5201 7 15.0001C7.96 13.7101 9.13 12.9201 10.67 12.5401L14.13 16.0201H4V6.02007ZM20 6.02007V16.2101L21.3 17.5101C21.72 17.1401 22 16.6201 22 16.0201V6.02007C22 4.91007 21.1 4.02007 20 4.02007H7.8L9.8 6.02007H20ZM12.93 9.15007L15.72 11.9301L17 10.7301L13 7.00007V9.13007L12.93 9.15007Z" />
  </svg>
)
export const oStorage = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M2 20H22V16H2V20ZM4 17H6V19H4V17ZM2 4V8H22V4H2ZM6 7H4V5H6V7ZM2 14H22V10H2V14ZM4 11H6V13H4V11Z" />
  </svg>
)
export const oStore = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18.36 9L18.96 12H5.04L5.64 9H18.36ZM20 4H4V6H20V4ZM20 7H4L3 12V14H4V20H14V14H18V20H20V14H21V12L20 7ZM6 18V14H12V18H6Z" />
  </svg>
)
export const oStoreMallDirectory = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18.36 9L18.96 12H5.04L5.64 9H18.36ZM20 4H4V6H20V4ZM20 7H4L3 12V14H4V20H14V14H18V20H20V14H21V12L20 7ZM6 18V14H12V18H6Z" />
  </svg>
)
export const oStraighten = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 6H3C1.9 6 1 6.9 1 8V16C1 17.1 1.9 18 3 18H21C22.1 18 23 17.1 23 16V8C23 6.9 22.1 6 21 6ZM21 16H3V8H5V12H7V8H9V12H11V8H13V12H15V8H17V12H19V8H21V16Z" />
  </svg>
)
export const oStreetview = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 11C20.7614 11 23 8.76142 23 6C23 3.23858 20.7614 1 18 1C15.2386 1 13 3.23858 13 6C13 8.76142 15.2386 11 18 11ZM12.56 14.33C12.22 14.6 12 15.03 12 15.5V21H19C20.1 21 21 20.1 21 19V13.02C20.06 12.69 19.05 12.5 18 12.5C15.97 12.5 14.07 13.2 12.56 14.33ZM12.24 3C11.77 3.9 11.5 4.92 11.5 6C11.5 7.8 12.23 9.42 13.41 10.59L3.59 20.41C3.23 20.05 3 19.55 3 19V5C3 3.9 3.9 3 5 3H12.24Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oStrikethroughS = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7.24 8.75C6.98 8.27 6.85 7.72 6.85 7.08C6.85 6.47 6.98 5.92 7.25 5.41C7.51 4.91 7.88 4.48 8.36 4.12C8.84 3.77 9.41 3.49 10.06 3.29C10.72 3.1 11.45 3 12.24 3C13.05 3 13.78 3.11 14.45 3.34C15.11 3.56 15.68 3.88 16.14 4.28C16.61 4.68 16.97 5.16 17.22 5.71C17.47 6.26 17.6 6.86 17.6 7.52H14.59C14.59 7.21 14.54 6.93 14.44 6.67C14.35 6.4 14.2 6.18 14 5.99C13.8 5.8 13.55 5.66 13.25 5.55C12.95 5.45 12.59 5.39 12.19 5.39C11.8 5.39 11.45 5.43 11.16 5.52C10.87 5.61 10.63 5.73 10.44 5.88C10.25 6.04 10.1 6.22 10 6.43C9.9 6.64 9.85 6.86 9.85 7.09C9.85 7.57 10.1 7.97 10.59 8.3C10.97 8.55 11.36 8.78 12 9H7.39C7.34 8.92 7.28 8.83 7.24 8.75ZM21 12V10H3V12H12.62C12.8 12.07 13.02 12.14 13.17 12.2C13.54 12.37 13.83 12.54 14.04 12.71C14.25 12.88 14.39 13.07 14.47 13.28C14.54 13.48 14.58 13.71 14.58 13.97C14.58 14.2 14.53 14.42 14.44 14.63C14.35 14.83 14.21 15.01 14.02 15.16C13.83 15.31 13.6 15.42 13.31 15.51C13.02 15.59 12.68 15.64 12.3 15.64C11.87 15.64 11.47 15.6 11.12 15.51C10.77 15.42 10.46 15.28 10.21 15.09C9.96 14.9 9.76 14.65 9.62 14.34C9.48 14.03 9.37 13.58 9.37 13.13H6.4C6.4 13.68 6.48 14.26 6.64 14.71C6.8 15.16 7.01 15.56 7.29 15.92C7.57 16.27 7.89 16.58 8.27 16.84C8.64 17.1 9.05 17.32 9.49 17.49C9.93 17.66 10.39 17.79 10.87 17.88C11.35 17.96 11.83 18.01 12.31 18.01C13.11 18.01 13.84 17.92 14.49 17.73C15.14 17.54 15.7 17.28 16.16 16.94C16.62 16.6 16.98 16.17 17.23 15.67C17.48 15.17 17.61 14.6 17.61 13.96C17.61 13.36 17.51 12.82 17.3 12.35C17.25 12.24 17.19 12.12 17.13 12.02H21V12Z" />
  </svg>
)
export const oStyle = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.52985 19.65L3.86985 20.21V11.18L1.43986 17.04C1.02986 18.06 1.51985 19.23 2.52985 19.65ZM22.0299 15.95L17.0699 3.98C16.7599 3.23 16.0299 2.77 15.2599 2.75C14.9999 2.75 14.7299 2.79 14.4699 2.9L7.09985 5.95C6.34985 6.26 5.88985 6.98 5.86985 7.75C5.85985 8.02 5.90985 8.29 6.01986 8.55L10.9799 20.52C11.2899 21.28 12.0299 21.74 12.8099 21.75C13.0699 21.75 13.3299 21.7 13.5799 21.6L20.9399 18.55C21.9599 18.13 22.4499 16.96 22.0299 15.95ZM12.8299 19.75L7.86985 7.79L15.2199 4.75H15.2299L20.1799 16.7L12.8299 19.75ZM10.9999 10C11.5522 10 11.9999 9.55228 11.9999 9C11.9999 8.44771 11.5522 8 10.9999 8C10.4476 8 9.99988 8.44771 9.99988 9C9.99988 9.55228 10.4476 10 10.9999 10ZM7.87988 21.7499C6.77988 21.7499 5.87988 20.8499 5.87988 19.7499V13.4099L9.32988 21.7499H7.87988Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oSubdirectoryArrowLeft = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 9L12.42 10.42L8.83 14H18V4H20V16H8.83L12.42 19.58L11 21L5 15L11 9Z" />
  </svg>
)
export const oSubdirectoryArrowRight = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 15L13 21L11.58 19.58L15.17 16H4V4H6V14H15.17L11.58 10.42L13 9L19 15Z" />
  </svg>
)
export const oSubject = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14 17H4V19H14V17ZM20 9H4V11H20V9ZM4 15H20V13H4V15ZM4 5V7H20V5H4Z" />
  </svg>
)
export const oSubscriptions = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H20V8H4V6ZM6 2H18V4H6V2ZM20 10H4C2.9 10 2 10.9 2 12V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V12C22 10.9 21.1 10 20 10ZM20 20H4V12H20V20ZM10 12.73V19.26L16 16L10 12.73Z" />
  </svg>
)
export const oSubtitles = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18ZM6 10H8V12H6V10ZM6 14H14V16H6V14ZM16 14H18V16H16V14ZM10 10H18V12H10V10Z" />
  </svg>
)
export const oSubway = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.8 2.8C16 2.09 13.86 2 12 2C10.14 2 8 2.09 6.2 2.8C3.53 3.84 2 6.05 2 8.86V22H22V8.86C22 6.05 20.47 3.84 17.8 2.8ZM9.17 20L10.67 18.5H13.33L14.83 20H9.17ZM7.01 14V9H17.01V14H7.01ZM16.5 16C16.5 16.55 16.05 17 15.5 17C14.95 17 14.5 16.55 14.5 16C14.5 15.45 14.95 15 15.5 15C16.05 15 16.5 15.45 16.5 16ZM8.5 15C9.05 15 9.5 15.45 9.5 16C9.5 16.55 9.05 17 8.5 17C7.95 17 7.5 16.55 7.5 16C7.5 15.45 7.95 15 8.5 15ZM20 20H16.5V19.62L15.35 18.46C16.84 18.29 18 17.04 18 15.5V9C18 6.37 15 6 12 6C9 6 6 6.37 6 9V15.5C6 17.04 7.16 18.29 8.65 18.46L7.5 19.62V20H4V8.86C4 6.86 5.01 5.41 6.93 4.66C8.41 4.08 10.32 4 12 4C13.68 4 15.59 4.08 17.07 4.66C18.99 5.41 20 6.86 20 8.86V20Z" />
  </svg>
)
export const oSupervisedUserCircle = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 10C12.5 8.35001 11.15 7.00001 9.49999 7.00001C7.84999 7.00001 6.49999 8.35001 6.49999 10C6.49999 11.65 7.84999 13 9.49999 13C11.15 13 12.5 11.65 12.5 10ZM9.49999 11C8.94999 11 8.49999 10.55 8.49999 10C8.49999 9.45001 8.94999 9.00001 9.49999 9.00001C10.05 9.00001 10.5 9.45001 10.5 10C10.5 10.55 10.05 11 9.49999 11ZM16 13C17.11 13 18 12.11 18 11C18 9.89001 17.11 9.00001 16 9.00001C14.89 9.00001 13.99 9.89001 14 11C14 12.11 14.89 13 16 13ZM11.99 2.01001C6.46999 2.01001 1.98999 6.49001 1.98999 12.01C1.98999 17.53 6.46999 22.01 11.99 22.01C17.51 22.01 21.99 17.53 21.99 12.01C21.99 6.49001 17.51 2.01001 11.99 2.01001ZM5.83999 17.12C6.51999 16.58 8.10999 16.01 9.49999 16.01C9.56999 16.01 9.64999 16.02 9.72999 16.02C9.96999 15.38 10.4 14.73 11.03 14.16C10.47 14.06 9.93999 14 9.49999 14C8.19999 14 6.10999 14.45 4.76999 15.43C4.26999 14.39 3.98999 13.23 3.98999 12C3.98999 7.59001 7.57999 4.00001 11.99 4.00001C16.4 4.00001 19.99 7.59001 19.99 12C19.99 13.2 19.72 14.34 19.24 15.37C18.24 14.78 16.88 14.5 16 14.5C14.48 14.5 11.5 15.31 11.5 17.2V19.98C9.22999 19.85 7.20999 18.77 5.83999 17.12Z" />
  </svg>
)
export const oSupervisorAccount = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9 12C10.93 12 12.5 10.43 12.5 8.5C12.5 6.57 10.93 5 9 5C7.07 5 5.5 6.57 5.5 8.5C5.5 10.43 7.07 12 9 12ZM9 7C9.83 7 10.5 7.67 10.5 8.5C10.5 9.33 9.83 10 9 10C8.17 10 7.5 9.33 7.5 8.5C7.5 7.67 8.17 7 9 7ZM9.05 17H4.77C5.76 16.5 7.47 16 9 16C9.11 16 9.23 16.01 9.34 16.01C9.68 15.28 10.27 14.68 10.98 14.2C10.25 14.07 9.56 14 9 14C6.66 14 2 15.17 2 17.5V19H9V17.5C9 17.33 9.02 17.16 9.05 17ZM16.5 14.5C14.66 14.5 11 15.51 11 17.5V19H22V17.5C22 15.51 18.34 14.5 16.5 14.5ZM17.71 12.68C18.47 12.25 19 11.44 19 10.5C19 9.12 17.88 8 16.5 8C15.12 8 14 9.12 14 10.5C14 11.44 14.53 12.25 15.29 12.68C15.65 12.88 16.06 13 16.5 13C16.94 13 17.35 12.88 17.71 12.68Z" />
  </svg>
)
export const oSurroundSound = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18ZM8.29 15.71C7.27 14.69 6.75 13.35 6.75 12C6.75 10.65 7.27 9.31 8.28 8.28L7.05 7.05C5.68 8.41 5 10.21 5 12C5 13.79 5.68 15.59 7.06 16.94L8.29 15.71ZM12 15.5C13.93 15.5 15.5 13.93 15.5 12C15.5 10.07 13.93 8.5 12 8.5C10.07 8.5 8.5 10.07 8.5 12C8.5 13.93 10.07 15.5 12 15.5ZM12 10.5C12.83 10.5 13.5 11.17 13.5 12C13.5 12.83 12.83 13.5 12 13.5C11.17 13.5 10.5 12.83 10.5 12C10.5 11.17 11.17 10.5 12 10.5ZM15.72 15.72L16.95 16.95C18.32 15.59 19 13.79 19 12C19 10.21 18.32 8.41 16.94 7.06L15.71 8.29C16.73 9.31 17.25 10.65 17.25 12C17.25 13.35 16.73 14.69 15.72 15.72Z" />
  </svg>
)
export const oSwapCalls = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 4L14 8H17V15C17 16.1 16.1 17 15 17C13.9 17 13 16.1 13 15V8C13 5.79 11.21 4 9 4C6.79 4 5 5.79 5 8V15H2L6 19L10 15H7V8C7 6.9 7.9 6 9 6C10.1 6 11 6.9 11 8V15C11 17.21 12.79 19 15 19C17.21 19 19 17.21 19 15V8H22L18 4Z" />
  </svg>
)
export const oSwapHoriz = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6.99 11L3 15L6.99 19V16H14V14H6.99V11ZM21 9L17.01 5V8H10V10H17.01V13L21 9Z" />
  </svg>
)
export const oSwapHorizontalCircle = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 6.5V9H11V11H15V13.5L18.5 10L15 6.5ZM9 10.5L5.5 14L9 17.5V15H13V13H9V10.5Z" />
  </svg>
)
export const oSwapVert = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16 17.01V10H14V17.01H11L15 21L19 17.01H16ZM9 3L5 6.99H8V14H10V6.99H13L9 3ZM16 17.01V10H14V17.01H11L15 21L19 17.01H16ZM9 3L5 6.99H8V14H10V6.99H13L9 3Z" />
  </svg>
)
export const oSwapVerticalCircle = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM6.5 9L10 5.5L13.5 9H11V13H9V9H6.5ZM17.5 15L14 18.5L10.5 15H13V11H15V15H17.5Z" />
  </svg>
)
export const oSwitchCamera = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.83 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H7.17L9 2H15L16.83 4ZM14.12 4H9.88L8.05 6H4V18H20V6H15.95L14.12 4ZM9 11H15V8.5L18.5 12L15 15.5V13H9V15.5L5.5 12L9 8.5V11Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oSwitchVideo = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M8 13H12V15L15 12L12 9V11H8V9L5 12L8 15V13ZM18 9.5V6C18 5.45 17.55 5 17 5H3C2.45 5 2 5.45 2 6V18C2 18.55 2.45 19 3 19H17C17.55 19 18 18.55 18 18V14.5L22 18.5V5.5L18 9.5ZM16 17H4V7H16V17Z" />
  </svg>
)
export const oSync = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.99 4V1L7.98999 5L11.99 9V6C15.3 6 17.99 8.69 17.99 12C17.99 13.01 17.74 13.97 17.29 14.8L18.75 16.26C19.53 15.03 19.99 13.57 19.99 12C19.99 7.58 16.41 4 11.99 4ZM11.99 18C8.67999 18 5.98999 15.31 5.98999 12C5.98999 10.99 6.23999 10.03 6.68999 9.2L5.22999 7.74C4.44999 8.97 3.98999 10.43 3.98999 12C3.98999 16.42 7.56999 20 11.99 20V23L15.99 19L11.99 15V18Z" />
  </svg>
)
export const oSyncDisabled = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9.99986 6.35V4.26C9.33986 4.43 8.70986 4.69 8.11986 5.01L9.61986 6.51C9.74986 6.46 9.86986 6.4 9.99986 6.35ZM19.9999 12C19.9999 9.79 19.0899 7.8 17.6399 6.36L19.9999 4H13.9999V10L16.2399 7.76C17.3199 8.85 17.9999 10.34 17.9999 12C17.9999 12.85 17.8099 13.65 17.4899 14.38L18.9899 15.88C19.6299 14.74 19.9999 13.41 19.9999 12ZM4.26986 4L2.85986 5.41L5.21986 7.77C4.44986 8.99 3.99986 10.44 3.99986 12C3.99986 14.21 4.90986 16.2 6.35986 17.64L3.99986 20H9.99986V14L7.75986 16.24C6.67986 15.15 5.99986 13.66 5.99986 12C5.99986 11 6.24986 10.06 6.67986 9.23L14.7599 17.31C14.5099 17.44 14.2599 17.55 13.9999 17.65V19.74C14.7999 19.53 15.5499 19.2 16.2299 18.78L18.8099 21.36L20.2199 19.95L4.26986 4Z" />
  </svg>
)
export const oSyncProblem = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12C3 14.21 3.91 16.2 5.36 17.64L3 20H9V14L6.76 16.24C5.68 15.15 5 13.66 5 12C5 9.39 6.67 7.17 9 6.35V4.26C5.55 5.15 3 8.27 3 12ZM11 17H13V15H11V17ZM21 4H15V10L17.24 7.76C18.32 8.85 19 10.34 19 12C19 14.61 17.33 16.83 15 17.65V19.74C18.45 18.85 21 15.73 21 12C21 9.79 20.09 7.8 18.64 6.36L21 4ZM11 13H13V7H11V13Z" />
  </svg>
)
export const oSystemUpdate = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 1.01L7 1C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1.01 17 1.01ZM17 19H7V5H17V19ZM16 13H13V8H11V13H8L12 17L16 13Z" />
  </svg>
)
export const oTab = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19H3V5H13V9H21V19Z" />
  </svg>
)
export const oTabUnselected = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M1 9H3V7H1V9ZM1 13H3V11H1V13ZM1 5H3V3C1.9 3 1 3.9 1 5ZM9 21H11V19H9V21ZM1 17H3V15H1V17ZM3 21V19H1C1 20.1 1.9 21 3 21ZM21 3H13V9H23V5C23 3.9 22.1 3 21 3ZM21 17H23V15H21V17ZM9 5H11V3H9V5ZM5 21H7V19H5V21ZM5 5H7V3H5V5ZM21 21C22.1 21 23 20.1 23 19H21V21ZM21 13H23V11H21V13ZM13 21H15V19H13V21ZM17 21H19V19H17V21Z" />
  </svg>
)
export const oTableChart = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3ZM20 5V8H5V5H20ZM15 19H10V10H15V19ZM5 10H8V19H5V10ZM17 19V10H20V19H17Z" />
  </svg>
)
export const oTablet = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H21C22.1 20 22.99 19.1 22.99 18L23 6C23 4.9 22.1 4 21 4ZM19 18H5V6H19V18Z" />
  </svg>
)
export const oTabletAndroid = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 0H6C4.34 0 3 1.34 3 3V21C3 22.66 4.34 24 6 24H18C19.66 24 21 22.66 21 21V3C21 1.34 19.66 0 18 0ZM14 22H10V21H14V22ZM19.25 19H4.75V3H19.25V19Z" />
  </svg>
)
export const oTabletMac = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18.5 0H4.5C3.12 0 2 1.12 2 2.5V21.5C2 22.88 3.12 24 4.5 24H18.5C19.88 24 21 22.88 21 21.5V2.5C21 1.12 19.88 0 18.5 0ZM11.5 23C10.67 23 10 22.33 10 21.5C10 20.67 10.67 20 11.5 20C12.33 20 13 20.67 13 21.5C13 22.33 12.33 23 11.5 23ZM19 19H4V3H19V19Z" />
  </svg>
)
export const oTagFaces = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM15.5 11C16.33 11 17 10.33 17 9.5C17 8.67 16.33 8 15.5 8C14.67 8 14 8.67 14 9.5C14 10.33 14.67 11 15.5 11ZM8.5 11C9.33 11 10 10.33 10 9.5C10 8.67 9.33 8 8.5 8C7.67 8 7 8.67 7 9.5C7 10.33 7.67 11 8.5 11ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" />
  </svg>
)
export const oTapAndPlay = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M2 16V18C4.76 18 7 20.24 7 23H9C9 19.13 5.87 16 2 16ZM2 20V23H5C5 21.34 3.66 20 2 20ZM2 12V14C6.97 14 11 18.03 11 23H13C13 16.92 8.08 12 2 12ZM17 1.01L7 1C5.9 1 5 1.9 5 3V10.37C5.69 10.53 6.36 10.74 7 11.01V5H17V18H13.97C14.49 19.25 14.81 20.59 14.92 22H17C18.1 22 19 21.1 19 20V3C19 1.9 18.1 1.01 17 1.01Z" />
  </svg>
)
export const oTerrain = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14 6L9.78 11.63L11.03 13.3L14 9.33L19 16H10.54L6.53 10.63L1 18H23L14 6ZM5 16L6.52 13.97L8.04 16H5Z" />
  </svg>
)
export const oTextFields = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 4V7H7.5V19H10.5V7H15.5V4H2.5ZM21.5 9H12.5V12H15.5V19H18.5V12H21.5V9Z" />
  </svg>
)
export const oTextFormat = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5 17V19H19V17H5ZM9.5 12.8H14.5L15.4 15H17.5L12.75 4H11.25L6.5 15H8.6L9.5 12.8ZM12 5.98L13.87 11H10.13L12 5.98Z" />
  </svg>
)
export const oTextRotateUp = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 4L15 7H17V20H19V7H21L18 4ZM11.8 15.5V10.5L14 9.6V7.5L3 12.25V13.75L14 18.5V16.4L11.8 15.5ZM4.98 13L10 11.13V14.87L4.98 13Z" />
  </svg>
)
export const oTextRotateVertical = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.75 5H14.25L9.5 16H11.6L12.5 13.8H17.5L18.4 16H20.5L15.75 5ZM13.13 12L15 6.98L16.87 12H13.13ZM6 20L9 17H7V4H5V17H3L6 20Z" />
  </svg>
)
export const oTextRotationDown = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6 20L9 17H7V4H5V17H3L6 20ZM12.2 8.5V13.5L10 14.4V16.5L21 11.75V10.25L10 5.5V7.6L12.2 8.5ZM19.02 11L14 12.87V9.13L19.02 11Z" />
  </svg>
)
export const oTextRotationNone = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 18L18 15V17H5V19H18V21L21 18ZM9.5 11.8H14.5L15.4 14H17.5L12.75 3H11.25L6.5 14H8.6L9.5 11.8ZM12 4.98L13.87 10H10.13L12 4.98Z" />
  </svg>
)
export const oTextsms = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16ZM7 9H9V11H7V9ZM11 9H13V11H11V9ZM15 9H17V11H15V9Z" />
  </svg>
)
export const oTexture = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.51 3.08L3.08 19.51C3.17 19.85 3.35 20.16 3.59 20.41C3.84 20.65 4.15 20.83 4.49 20.92L20.93 4.49C20.74 3.8 20.2 3.26 19.51 3.08ZM11.88 3L3 11.88V14.71L14.71 3H11.88ZM5 3C3.9 3 3 3.9 3 5V7L7 3H5ZM19 21C19.55 21 20.05 20.78 20.41 20.41C20.78 20.05 21 19.55 21 19V17L17 21H19ZM9.29 21H12.12L21 12.12V9.29L9.29 21Z" />
  </svg>
)
export const oTheaters = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 3V5H16V3H8V5H6V3H4V21H6V19H8V21H16V19H18V21H20V3H18ZM8 17H6V15H8V17ZM8 13H6V11H8V13ZM8 9H6V7H8V9ZM14 19H10V5H14V19ZM18 17H16V15H18V17ZM18 13H16V11H18V13ZM18 9H16V7H18V9Z" />
  </svg>
)
export const oThumbDown = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 3H6C5.17 3 4.46 3.5 4.16 4.22L1.14 11.27C1.05 11.5 1 11.74 1 12V14C1 15.1 1.9 16 3 16H9.31L8.36 20.57L8.33 20.89C8.33 21.3 8.5 21.68 8.77 21.95L9.83 23L16.42 16.41C16.78 16.05 17 15.55 17 15V5C17 3.9 16.1 3 15 3ZM15 15L10.66 19.34L12 14H3V12L6 5H15V15ZM19 3H23V15H19V3Z" />
  </svg>
)
export const oThumbDownAlt = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 3H6C5.17 3 4.46 3.5 4.16 4.22L1.14 11.27C1.05 11.5 1 11.74 1 12V14C1 15.1 1.9 16 3 16H9.31L8.36 20.57L8.33 20.89C8.33 21.3 8.5 21.68 8.77 21.95L9.83 23L16.41 16.41C16.78 16.05 17 15.55 17 15V5C17 3.9 16.1 3 15 3ZM15 15L10.66 19.34L11.77 14H3V12L6 5H15V15ZM19 3H23V15H19V3Z" />
  </svg>
)
export const oThumbUp = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9 21H18C18.83 21 19.54 20.5 19.84 19.78L22.86 12.73C22.95 12.5 23 12.26 23 12V10C23 8.9 22.1 8 21 8H14.69L15.64 3.43L15.67 3.11C15.67 2.7 15.5 2.32 15.23 2.05L14.17 1L7.58 7.59C7.22 7.95 7 8.45 7 9V19C7 20.1 7.9 21 9 21ZM9 9L13.34 4.66L12 10H21V12L18 19H9V9ZM1 9H5V21H1V9Z" />
  </svg>
)
export const oThumbUpAlt = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 8H14.69L15.64 3.43L15.67 3.11C15.67 2.7 15.5 2.32 15.23 2.05L14.17 1L7.59 7.59C7.22 7.95 7 8.45 7 9V19C7 20.1 7.9 21 9 21H18C18.83 21 19.54 20.5 19.84 19.78L22.86 12.73C22.95 12.5 23 12.26 23 12V10C23 8.9 22.1 8 21 8ZM21 12L18 19H9V9L13.34 4.66L12.23 10H21V12ZM1 9H5V21H1V9Z" />
  </svg>
)
export const oThumbsUpDown = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6C12 5.45 11.55 5 11 5H5.82L6.48 1.82L6.5 1.59C6.5 1.28 6.37 1 6.17 0.79L5.38 0L0.44 4.94C0.17 5.21 0 5.59 0 6V12.5C0 13.33 0.67 14 1.5 14H8.25C8.87 14 9.4 13.62 9.63 13.09L11.89 7.8C11.96 7.63 12 7.44 12 7.25V6ZM10 7.13L7.92 12H2V6.21L3.93 4.28L3.36 7H10V7.13ZM22.5 10H15.75C15.13 10 14.6 10.38 14.37 10.91L12.11 16.2C12.04 16.37 12 16.56 12 16.75V18C12 18.55 12.45 19 13 19H18.18L17.52 22.18L17.5 22.42C17.5 22.73 17.63 23.01 17.83 23.22L18.62 24L23.56 19.06C23.83 18.79 24 18.41 24 18V11.5C24 10.67 23.33 10 22.5 10ZM22 17.79L20.07 19.72L20.64 17H14V16.87L16.08 12H22V17.79Z" />
  </svg>
)
export const oTimeToLeave = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4H6.5C5.84 4 5.29 4.42 5.08 5.01L3 11V19C3 19.55 3.45 20 4 20H5C5.55 20 6 19.55 6 19V18H18V19C18 19.55 18.45 20 19 20H20C20.55 20 21 19.55 21 19V11L18.92 5.01ZM6.85 6H17.14L18.18 9H5.81L6.85 6ZM19 16H5V11.34L5.12 11H18.89L19 11.34V16ZM7.5 15C8.32843 15 9 14.3284 9 13.5C9 12.6716 8.32843 12 7.5 12C6.67157 12 6 12.6716 6 13.5C6 14.3284 6.67157 15 7.5 15ZM18 13.5C18 14.3284 17.3284 15 16.5 15C15.6716 15 15 14.3284 15 13.5C15 12.6716 15.6716 12 16.5 12C17.3284 12 18 12.6716 18 13.5Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oTimelapse = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16.24 7.74999C15.07 6.57999 13.54 5.98999 12 5.98999V11.99L7.76 16.23C10.1 18.57 13.9 18.57 16.25 16.23C18.59 13.89 18.59 10.09 16.24 7.74999ZM12 1.98999C6.48 1.98999 2 6.46999 2 11.99C2 17.51 6.48 21.99 12 21.99C17.52 21.99 22 17.51 22 11.99C22 6.46999 17.52 1.98999 12 1.98999ZM12 19.99C7.58 19.99 4 16.41 4 11.99C4 7.56999 7.58 3.98999 12 3.98999C16.42 3.98999 20 7.56999 20 11.99C20 16.41 16.42 19.99 12 19.99Z" />
  </svg>
)
export const oTimeline = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M23 8C23 9.1 22.1 10 21 10C20.82 10 20.65 9.98 20.49 9.93L16.93 13.48C16.98 13.64 17 13.82 17 14C17 15.1 16.1 16 15 16C13.9 16 13 15.1 13 14C13 13.82 13.02 13.64 13.07 13.48L10.52 10.93C10.36 10.98 10.18 11 10 11C9.82 11 9.64 10.98 9.48 10.93L4.93 15.49C4.98 15.65 5 15.82 5 16C5 17.1 4.1 18 3 18C1.9 18 1 17.1 1 16C1 14.9 1.9 14 3 14C3.18 14 3.35 14.02 3.51 14.07L8.07 9.52C8.02 9.36 8 9.18 8 9C8 7.9 8.9 7 10 7C11.1 7 12 7.9 12 9C12 9.18 11.98 9.36 11.93 9.52L14.48 12.07C14.64 12.02 14.82 12 15 12C15.18 12 15.36 12.02 15.52 12.07L19.07 8.51C19.02 8.35 19 8.18 19 8C19 6.9 19.9 6 21 6C22.1 6 23 6.9 23 8Z" />
  </svg>
)
export const oTimer = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.0898 1.01001H9.08984V3.01001H15.0898V1.01001ZM11.0898 14.01H13.0898V8.01001H11.0898V14.01ZM19.1198 7.39001L20.5398 5.97001C20.1098 5.46001 19.6398 4.98001 19.1298 4.56001L17.7098 5.98001C16.1598 4.74001 14.2098 4.00001 12.0898 4.00001C7.11984 4.00001 3.08984 8.03001 3.08984 13C3.08984 17.97 7.10984 22 12.0898 22C17.0698 22 21.0898 17.97 21.0898 13C21.0898 10.89 20.3498 8.94001 19.1198 7.39001ZM12.0898 20.01C8.21984 20.01 5.08984 16.88 5.08984 13.01C5.08984 9.14001 8.21984 6.01001 12.0898 6.01001C15.9598 6.01001 19.0898 9.14001 19.0898 13.01C19.0898 16.88 15.9598 20.01 12.0898 20.01Z" />
  </svg>
)
export const oTimer10 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M0 7.7199V9.3999L3 8.3999V17.9999H5V5.9999H4.75L0 7.7199ZM23.78 14.3699C23.64 14.0899 23.43 13.8399 23.15 13.6299C22.87 13.4199 22.54 13.2399 22.14 13.0999C21.74 12.9599 21.29 12.8299 20.79 12.7199C20.44 12.6499 20.15 12.5699 19.92 12.4899C19.69 12.4099 19.51 12.3299 19.37 12.2399C19.23 12.1499 19.14 12.0499 19.09 11.9399C19.04 11.8299 19.01 11.6999 19.01 11.5499C19.01 11.4099 19.04 11.2699 19.1 11.1399C19.16 11.0099 19.25 10.8899 19.37 10.7999C19.49 10.6999 19.64 10.6199 19.82 10.5599C20 10.4999 20.22 10.4699 20.46 10.4699C20.71 10.4699 20.93 10.5099 21.12 10.5799C21.31 10.6499 21.47 10.7499 21.6 10.8699C21.73 10.9899 21.82 11.1299 21.89 11.2899C21.95 11.4499 21.99 11.6099 21.99 11.7799H23.94C23.94 11.3899 23.86 11.0299 23.7 10.6899C23.54 10.3499 23.31 10.0599 23.01 9.8099C22.71 9.5599 22.35 9.3699 21.92 9.2199C21.49 9.0699 21 8.9999 20.46 8.9999C19.95 8.9999 19.48 9.0699 19.07 9.2099C18.66 9.3499 18.3 9.5399 18.01 9.7799C17.72 10.0199 17.5 10.2999 17.34 10.6199C17.18 10.9399 17.11 11.2699 17.11 11.6299C17.11 11.9899 17.19 12.3199 17.34 12.5899C17.49 12.8699 17.7 13.1099 17.98 13.3199C18.25 13.5299 18.58 13.6999 18.96 13.8499C19.34 13.9899 19.77 14.1099 20.23 14.2099C20.62 14.2899 20.94 14.3799 21.18 14.4699C21.42 14.5599 21.61 14.6599 21.75 14.7599C21.88 14.8599 21.97 14.9799 22.02 15.0999C22.07 15.2199 22.09 15.3499 22.09 15.4899C22.09 15.8099 21.96 16.0599 21.69 16.2599C21.42 16.4599 21.03 16.5499 20.52 16.5499C20.3 16.5499 20.09 16.5299 19.88 16.4699C19.67 16.4199 19.48 16.3399 19.32 16.2299C19.15 16.1199 19.02 15.9699 18.91 15.7899C18.8 15.6099 18.74 15.3799 18.73 15.1199H16.84C16.84 15.4799 16.92 15.8299 17.08 16.1699C17.24 16.5099 17.47 16.8199 17.78 17.0999C18.09 17.3699 18.47 17.5899 18.93 17.7599C19.39 17.9299 19.91 18.0099 20.51 18.0099C21.04 18.0099 21.52 17.9499 21.95 17.8199C22.38 17.6899 22.75 17.5099 23.06 17.2799C23.37 17.0499 23.6 16.7699 23.77 16.4499C23.94 16.1299 24.02 15.7799 24.02 15.3899C24 14.9899 23.93 14.6499 23.78 14.3699ZM13.82 7.0499C13.48 6.6499 13.07 6.3499 12.59 6.1699C12.12 5.9899 11.58 5.8999 11 5.8999C10.42 5.8999 9.89 5.9899 9.41 6.1699C8.93 6.3499 8.52 6.6399 8.18 7.0499C7.84 7.4599 7.58 7.9799 7.39 8.6399C7.21 9.2899 7.11 10.0899 7.11 11.0299V12.9499C7.11 13.8899 7.2 14.6899 7.39 15.3399C7.58 15.9999 7.84 16.5299 8.19 16.9399C8.53 17.3499 8.94 17.6499 9.42 17.8299C9.9 18.0099 10.43 18.1099 11.01 18.1099C11.6 18.1099 12.13 18.0199 12.6 17.8299C13.08 17.6499 13.48 17.3499 13.82 16.9399C14.16 16.5299 14.42 15.9999 14.6 15.3399C14.78 14.6899 14.88 13.8899 14.88 12.9499V11.0299C14.88 10.0899 14.79 9.2899 14.6 8.6399C14.42 7.9799 14.16 7.4499 13.82 7.0499ZM12.9 13.2199C12.9 13.8199 12.86 14.3299 12.78 14.7499C12.7 15.1699 12.58 15.5099 12.42 15.7699C12.26 16.0299 12.06 16.2199 11.83 16.3399C11.6 16.4599 11.32 16.5199 11.01 16.5199C10.71 16.5199 10.43 16.4599 10.19 16.3399C9.95 16.2199 9.75 16.0299 9.59 15.7699C9.43 15.5099 9.3 15.1699 9.21 14.7499C9.12 14.3299 9.08 13.8199 9.08 13.2199V10.7199C9.08 10.1199 9.12 9.6099 9.21 9.1999C9.3 8.7899 9.42 8.4599 9.59 8.1999C9.75 7.9499 9.95 7.7699 10.19 7.6499C10.43 7.5399 10.7 7.4799 11 7.4799C11.31 7.4799 11.58 7.5399 11.81 7.6499C12.05 7.7599 12.25 7.9399 12.41 8.1999C12.57 8.4499 12.7 8.7799 12.78 9.1899C12.86 9.5999 12.91 10.1099 12.91 10.7099V13.2199H12.9Z" />
  </svg>
)
export const oTimer3 = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.6099 12.9699C11.4499 12.7299 11.2499 12.5099 10.9899 12.3199C10.7399 12.1299 10.4299 11.9699 10.0599 11.8399C10.3599 11.6999 10.6299 11.5399 10.8599 11.3399C11.0899 11.1399 11.2799 10.9299 11.4299 10.6999C11.5799 10.4699 11.6999 10.2399 11.7699 9.9899C11.8499 9.7499 11.8799 9.4999 11.8799 9.2599C11.8799 8.7099 11.7899 8.2199 11.5999 7.7999C11.4199 7.3799 11.1599 7.0299 10.8199 6.7399C10.4899 6.4599 10.0899 6.2399 9.61994 6.0999C9.16994 5.9699 8.64994 5.8999 8.08994 5.8999C7.53994 5.8999 7.02994 5.9799 6.56994 6.1399C6.09994 6.3099 5.69994 6.5399 5.36994 6.8299C5.03994 7.1199 4.76994 7.4599 4.58994 7.8599C4.38994 8.2499 4.29994 8.6899 4.29994 9.1499H6.27994C6.27994 8.8899 6.32994 8.6599 6.41994 8.4599C6.50994 8.2599 6.63994 8.0799 6.79994 7.9399C6.96994 7.7999 7.15994 7.6899 7.37994 7.6099C7.59994 7.5299 7.83994 7.4899 8.10994 7.4899C8.71994 7.4899 9.16994 7.6499 9.46994 7.9599C9.76994 8.2699 9.90994 8.7099 9.90994 9.2799C9.90994 9.5499 9.86994 9.7999 9.78994 10.0199C9.70994 10.2399 9.57994 10.4299 9.40994 10.5899C9.23994 10.7499 9.02994 10.8699 8.77994 10.9599C8.52994 11.0499 8.22994 11.0899 7.88994 11.0899H6.71994V12.6599H7.89994C8.23994 12.6599 8.53994 12.6999 8.80994 12.7699C9.07994 12.8499 9.30994 12.9599 9.49994 13.1199C9.68994 13.2799 9.83994 13.4799 9.93994 13.7299C10.0399 13.9699 10.0999 14.2699 10.0999 14.5999C10.0999 15.2199 9.91994 15.6899 9.56994 16.0199C9.21994 16.3499 8.72994 16.5099 8.11994 16.5099C7.82994 16.5099 7.55994 16.4699 7.31994 16.3799C7.07994 16.2999 6.87994 16.1799 6.70994 16.0199C6.53994 15.8599 6.40994 15.6799 6.31994 15.4599C6.22994 15.2399 6.17994 14.9999 6.17994 14.7399H4.18994C4.18994 15.2899 4.29994 15.7699 4.50994 16.1899C4.71994 16.6099 5.00994 16.9599 5.36994 17.2399C5.72994 17.5199 6.13994 17.7299 6.60994 17.8699C7.07994 18.0099 7.56994 18.0799 8.08994 18.0799C8.65994 18.0799 9.17994 17.9999 9.66994 17.8499C10.1599 17.6999 10.5799 17.4699 10.9299 17.1699C11.2899 16.8699 11.5699 16.5099 11.7699 16.0699C11.9699 15.6399 12.0699 15.1399 12.0699 14.5899C12.0699 14.2999 12.0299 14.0099 11.9599 13.7299C11.8799 13.4799 11.7699 13.2199 11.6099 12.9699ZM20.8699 14.3699C20.7299 14.0899 20.5199 13.8399 20.2399 13.6299C19.9599 13.4199 19.6299 13.2399 19.2299 13.0999C18.8299 12.9599 18.3799 12.8299 17.8799 12.7199C17.5299 12.6499 17.2399 12.5699 17.0099 12.4899C16.7799 12.4099 16.5999 12.3299 16.4599 12.2399C16.3199 12.1499 16.2299 12.0499 16.1799 11.9399C16.1299 11.8299 16.0999 11.6999 16.0999 11.5499C16.0999 11.3999 16.1299 11.2699 16.1899 11.1399C16.2499 11.0099 16.3399 10.8899 16.4599 10.7999C16.5799 10.6999 16.7299 10.6199 16.9099 10.5599C17.0899 10.4999 17.3099 10.4699 17.5499 10.4699C17.7999 10.4699 18.0199 10.5099 18.2099 10.5799C18.3999 10.6499 18.5599 10.7499 18.6899 10.8699C18.8199 10.9899 18.9099 11.1299 18.9799 11.2899C19.0399 11.4499 19.0799 11.6099 19.0799 11.7799H21.0299C21.0299 11.3899 20.9499 11.0299 20.7899 10.6899C20.6299 10.3499 20.3999 10.0599 20.0999 9.8099C19.7999 9.5599 19.4399 9.3699 19.0099 9.2199C18.5799 9.0699 18.0899 8.9999 17.5499 8.9999C17.0399 8.9999 16.5699 9.0699 16.1599 9.2099C15.7499 9.3499 15.3899 9.5399 15.0999 9.7799C14.8099 10.0199 14.5899 10.2999 14.4299 10.6199C14.2699 10.9399 14.1999 11.2699 14.1999 11.6299C14.1999 11.9899 14.2799 12.3099 14.4299 12.5899C14.5799 12.8699 14.7999 13.1099 15.0699 13.3199C15.3399 13.5299 15.6699 13.6999 16.0499 13.8499C16.4299 13.9899 16.8599 14.1099 17.3199 14.2099C17.7099 14.2899 18.0299 14.3799 18.2699 14.4699C18.5099 14.5599 18.6999 14.6599 18.8399 14.7599C18.9699 14.8599 19.0599 14.9799 19.1099 15.0999C19.1599 15.2199 19.1799 15.3499 19.1799 15.4899C19.1799 15.8099 19.0499 16.0599 18.7799 16.2599C18.5099 16.4599 18.1199 16.5499 17.6099 16.5499C17.3899 16.5499 17.1799 16.5299 16.9699 16.4699C16.7599 16.4199 16.5699 16.3399 16.4099 16.2299C16.2399 16.1199 16.1099 15.9699 15.9999 15.7899C15.8899 15.6099 15.8299 15.3799 15.8199 15.1199H13.9299C13.9299 15.4799 14.0099 15.8299 14.1699 16.1699C14.3299 16.5099 14.5599 16.8199 14.8699 17.0999C15.1799 17.3699 15.5599 17.5899 16.0199 17.7599C16.4799 17.9299 16.9999 18.0099 17.5999 18.0099C18.1299 18.0099 18.6099 17.9499 19.0399 17.8199C19.4699 17.6899 19.8399 17.5099 20.1499 17.2799C20.4599 17.0499 20.6899 16.7699 20.8599 16.4499C21.0299 16.1299 21.1099 15.7799 21.1099 15.3899C21.0899 14.9899 21.0199 14.6499 20.8699 14.3699Z" />
  </svg>
)
export const oTimerOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.02 8V8.86L13.02 10.86V8H11.02ZM9.02002 1H15.02V3H9.02002V1ZM12.02 6C15.89 6 19.02 9.13 19.02 13C19.02 14.12 18.75 15.18 18.28 16.12L19.75 17.59C20.55 16.25 21.02 14.68 21.02 13C21.02 10.88 20.28 8.93 19.05 7.39L20.47 5.97C20.04 5.46 19.57 4.98 19.06 4.56L17.64 5.98C16.09 4.74 14.14 4 12.02 4C10.34 4 8.77002 4.47 7.43002 5.27L8.90002 6.74C9.84002 6.27 10.9 6 12.02 6ZM3.18002 3.86L1.77002 5.27L4.52002 8.02C3.58002 9.45 3.02002 11.16 3.02002 13C3.02002 17.97 7.04002 22 12.02 22C13.86 22 15.57 21.45 17 20.5L19.5 23L20.91 21.59L3.18002 3.86ZM12.02 20C8.15002 20 5.02002 16.87 5.02002 13C5.02002 11.71 5.37002 10.51 5.98002 9.48L15.55 19.05C14.51 19.65 13.31 20 12.02 20Z" />
  </svg>
)
export const oTitle = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5.02002 4V7H10.52V19H13.52V7H19.02V4H5.02002Z" />
  </svg>
)
export const oToc = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3.02002 9H17.02V7H3.02002V9ZM3.02002 13H17.02V11H3.02002V13ZM3.02002 17H17.02V15H3.02002V17ZM19.02 17H21.02V15H19.02V17ZM19.02 7V9H21.02V7H19.02ZM19.02 13H21.02V11H19.02V13Z" />
  </svg>
)
export const oToday = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.02 3H18.02V1H16.02V3H8.02002V1H6.02002V3H5.02002C3.91002 3 3.02002 3.9 3.02002 5V19C3.02002 20.1 3.91002 21 5.02002 21H19.02C20.12 21 21.02 20.1 21.02 19V5C21.02 3.9 20.12 3 19.02 3ZM19.02 19H5.02002V9H19.02V19ZM19.02 7H5.02002V5H19.02V7ZM7.02002 11H12.02V16H7.02002V11Z" />
  </svg>
)
export const oToggleOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.02 6H7.02002C3.71002 6 1.02002 8.69 1.02002 12C1.02002 15.31 3.71002 18 7.02002 18H17.02C20.33 18 23.02 15.31 23.02 12C23.02 8.69 20.33 6 17.02 6ZM17.02 16H7.02002C4.81002 16 3.02002 14.21 3.02002 12C3.02002 9.79 4.81002 8 7.02002 8H17.02C19.23 8 21.02 9.79 21.02 12C21.02 14.21 19.23 16 17.02 16ZM7.02002 9C5.36002 9 4.02002 10.34 4.02002 12C4.02002 13.66 5.36002 15 7.02002 15C8.68002 15 10.02 13.66 10.02 12C10.02 10.34 8.68002 9 7.02002 9Z" />
  </svg>
)
export const oToggleOn = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.02 6H7.02002C3.71002 6 1.02002 8.69 1.02002 12C1.02002 15.31 3.71002 18 7.02002 18H17.02C20.33 18 23.02 15.31 23.02 12C23.02 8.69 20.33 6 17.02 6ZM17.02 16H7.02002C4.81002 16 3.02002 14.21 3.02002 12C3.02002 9.79 4.81002 8 7.02002 8H17.02C19.23 8 21.02 9.79 21.02 12C21.02 14.21 19.23 16 17.02 16ZM17.02 9C15.36 9 14.02 10.34 14.02 12C14.02 13.66 15.36 15 17.02 15C18.68 15 20.02 13.66 20.02 12C20.02 10.34 18.68 9 17.02 9Z" />
  </svg>
)
export const oToll = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.02 4C10.6 4 7.02002 7.58 7.02002 12C7.02002 16.42 10.6 20 15.02 20C19.44 20 23.02 16.42 23.02 12C23.02 7.58 19.44 4 15.02 4ZM15.02 18C11.71 18 9.02002 15.31 9.02002 12C9.02002 8.69 11.71 6 15.02 6C18.33 6 21.02 8.69 21.02 12C21.02 15.31 18.33 18 15.02 18ZM3.02002 12C3.02002 9.39 4.69002 7.17 7.02002 6.35V4.26C3.57002 5.15 1.02002 8.27 1.02002 12C1.02002 15.73 3.57002 18.85 7.02002 19.74V17.65C4.69002 16.83 3.02002 14.61 3.02002 12Z" />
  </svg>
)
export const oTonality = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.06 19.44 4 16.08 4 12C4 7.92 7.05 4.56 11 4.07V19.93ZM13 4.07C14.03 4.2 15 4.52 15.87 5H13V4.07ZM13 7H18.24C18.49 7.31 18.72 7.65 18.92 8H13V7ZM13 10H19.74C19.82 10.33 19.89 10.66 19.93 11H13V10ZM13 19.93V19H15.87C15 19.48 14.03 19.8 13 19.93ZM18.24 17H13V16H18.92C18.72 16.35 18.49 16.69 18.24 17ZM19.74 14H13V13H19.93C19.89 13.34 19.82 13.67 19.74 14Z" />
  </svg>
)
export const oTouchApp = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18.1202 14.44L14.8802 12.82C16.1702 11.82 17.0002 10.26 17.0002 8.5C17.0002 5.47 14.5302 3 11.5002 3C8.47018 3 6.00018 5.47 6.00018 8.5C6.00018 10.63 7.22018 12.48 9.00018 13.39V16.65L7.16018 16.26L7.06018 16.24C6.96018 16.22 6.86018 16.21 6.74018 16.21C6.21018 16.21 5.71018 16.42 5.33018 16.8L3.93018 18.22L9.02018 23.31C9.45018 23.75 10.0502 24 10.6702 24H16.9702C17.9502 24 18.7802 23.3 18.9402 22.33L19.7402 17.62C19.9602 16.32 19.3102 15.04 18.1202 14.44ZM17.7702 17.29L16.9702 22H10.6702C10.5802 22 10.5002 21.96 10.4302 21.9L6.75018 18.22L11.0002 19.11V8.5C11.0002 8.22 11.2202 8 11.5002 8C11.7802 8 12.0002 8.22 12.0002 8.5V14.5H13.7602L17.2202 16.23C17.6202 16.43 17.8402 16.86 17.7702 17.29ZM8.00018 8.5C8.00018 6.57 9.57018 5 11.5002 5C13.4302 5 15.0002 6.57 15.0002 8.5C15.0002 9.45 14.6202 10.31 14.0002 10.94V8.5C14.0002 7.12 12.8802 6 11.5002 6C10.1202 6 9.00018 7.12 9.00018 8.5V10.94C8.38018 10.31 8.00018 9.45 8.00018 8.5Z" />
  </svg>
)
export const oToys = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 23H11V16.43C9.93 17.4 8.52 18 7 18C3.75 18 1 15.25 1 12V11H7.57C6.6 9.93 6 8.52 6 7C6 3.75 8.75 1 12 1H13V7.57C14.07 6.6 15.48 6 17 6C20.25 6 23 8.75 23 12V13H16.43C17.4 14.07 18 15.48 18 17C18 20.25 15.25 23 12 23ZM13 13.13V20.87C14.7 20.41 16 18.83 16 17C16 15.17 14.7 13.59 13 13.13ZM3.13 13C3.59 14.7 5.17 16 7 16C8.83 16 10.41 14.7 10.87 13H3.13ZM13.13 11H20.87C20.41 9.3 18.82 8 17 8C15.18 8 13.59 9.3 13.13 11ZM11 3.13C9.3 3.59 8 5.18 8 7C8 8.82 9.3 10.41 11 10.87V3.13Z" />
  </svg>
)
export const oTrackChanges = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.07 4.93L17.66 6.34C19.1 7.79 20 9.79 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12C4 7.92 7.05 4.56 11 4.07V6.09C8.16 6.57 6 9.03 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 10.34 17.33 8.84 16.24 7.76L14.83 9.17C15.55 9.9 16 10.9 16 12C16 14.21 14.21 16 12 16C9.79 16 8 14.21 8 12C8 10.14 9.28 8.59 11 8.14V10.28C10.4 10.63 10 11.26 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 11.26 13.6 10.62 13 10.28V2H12C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 9.24 20.88 6.74 19.07 4.93Z" />
  </svg>
)
export const oTraffic = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 10H17V8.86C18.72 8.41 20 6.86 20 5H17V4C17 3.45 16.55 3 16 3H8C7.45 3 7 3.45 7 4V5H4C4 6.86 5.28 8.41 7 8.86V10H4C4 11.86 5.28 13.41 7 13.86V15H4C4 16.86 5.28 18.41 7 18.86V20C7 20.55 7.45 21 8 21H16C16.55 21 17 20.55 17 20V18.86C18.72 18.41 20 16.86 20 15H17V13.86C18.72 13.41 20 11.86 20 10ZM15 19H9V5H15V19ZM12 18C12.83 18 13.5 17.33 13.5 16.5C13.5 15.67 12.83 15 12 15C11.17 15 10.5 15.67 10.5 16.5C10.5 17.33 11.17 18 12 18ZM12 13.5C12.83 13.5 13.5 12.83 13.5 12C13.5 11.17 12.83 10.5 12 10.5C11.17 10.5 10.5 11.17 10.5 12C10.5 12.83 11.17 13.5 12 13.5ZM12 9C12.83 9 13.5 8.33 13.5 7.5C13.5 6.67 12.83 6 12 6C11.17 6 10.5 6.67 10.5 7.5C10.5 8.33 11.17 9 12 9Z" />
  </svg>
)
export const oTrain = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 6C4 2.5 8 2 12 2C16 2 20 2.5 20 6V15.5C20 17.43 18.43 19 16.5 19L18 20.5V21H16L14 19H10L8 21H6V20.5L7.5 19C5.57 19 4 17.43 4 15.5V6ZM17.57 5C16.96 4.48 15.51 4 12 4C8.49 4 7.04 4.48 6.43 5H17.57ZM11 7H6V10H11V7ZM16.5 17C17.33 17 18 16.33 18 15.5V12H6V15.5C6 16.33 6.67 17 7.5 17H16.5ZM13 10H18V7H13V10ZM8.5 16C9.32843 16 10 15.3284 10 14.5C10 13.6716 9.32843 13 8.5 13C7.67157 13 7 13.6716 7 14.5C7 15.3284 7.67157 16 8.5 16ZM15.5 16C16.3284 16 17 15.3284 17 14.5C17 13.6716 16.3284 13 15.5 13C14.6716 13 14 13.6716 14 14.5C14 15.3284 14.6716 16 15.5 16Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oTram = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M13 5L13.75 3.5H17V2H7V3.5H11.75L11 5C7.87 5.09 5 5.73 5 8.5V17C5 18.5 6.11 19.73 7.55 19.95L6 21.5V22H8L10 20H14L16 22H18V21.5L16.45 19.95H16.44H16.45C17.89 19.73 19 18.5 19 17V8.5C19 5.73 16.13 5.09 13 5ZM11.03 7H12.97C15.72 7.08 16.59 7.58 16.87 8H7.13C7.41 7.58 8.28 7.08 11.03 7ZM10.85 17.95H7.74C7.3 17.84 7 17.45 7 17V16H10.89C10.65 16.27 10.5 16.61 10.5 17C10.5 17.36 10.63 17.69 10.85 17.95ZM17 17C17 17.45 16.7 17.84 16.26 17.95H13.15C13.37 17.69 13.5 17.36 13.5 17C13.5 16.61 13.35 16.27 13.11 16H17V17ZM17 14H7V10H17V14Z" />
  </svg>
)
export const oTransferWithinAStation = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16.49 15.5V13.75L14 16.25L16.49 18.75V17H22V15.5H16.49ZM19.51 19.75H14V21.25H19.51V23L22 20.5L19.51 18V19.75ZM9.5 5.5C10.6 5.5 11.5 4.6 11.5 3.5C11.5 2.4 10.6 1.5 9.5 1.5C8.4 1.5 7.5 2.4 7.5 3.5C7.5 4.6 8.4 5.5 9.5 5.5ZM5.75 8.9L3 23H5.1L6.85 15L9 17V23H11V15.45L8.95 13.4L9.55 10.4C10.85 12 12.8 13 15 13V11C13.15 11 11.55 10 10.65 8.55L9.7 6.95C9.35 6.35 8.7 6 8 6C7.75 6 7.5 6.05 7.25 6.15L2 8.3V13H4V9.65L5.75 8.9Z" />
  </svg>
)
export const oTransform = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 18V16H8V4H10L7 1L4 4H6V6H2V8H6V16C6 17.1 6.9 18 8 18H16V20H14L17 23L20 20H18V18H22ZM10 8H16V14H18V8C18 6.9 17.1 6 16 6H10V8Z" />
  </svg>
)
export const oTransitEnterexit = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16 18H6V8H9V12.77L15.98 6L18 8.03L11.15 15H16V18Z" />
  </svg>
)
export const oTranslate = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12.87 15.07L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6H17V4H10V2H8V4H1V5.99H12.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8H4.69C5.42 9.63 6.42 11.17 7.67 12.56L2.58 17.58L4 19L9 14L12.11 17.11L12.87 15.07ZM18.5 10H16.5L12 22H14L15.12 19H19.87L21 22H23L18.5 10ZM15.88 17L17.5 12.67L19.12 17H15.88Z" />
  </svg>
)
export const oTrendingDown = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16 18L18.29 15.71L13.41 10.83L9.41 14.83L2 7.41L3.41 6L9.41 12L13.41 8L19.71 14.29L22 12V18H16Z" />
  </svg>
)
export const oTrendingFlat = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 12L18 8V11H3V13H18V16L22 12Z" />
  </svg>
)
export const oTrendingUp = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" />
  </svg>
)
export const oTripOrigin = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18Z" />
  </svg>
)
export const oTune = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17V19H9V17H3ZM3 5V7H13V5H3ZM13 21V19H21V17H13V15H11V21H13ZM7 9V11H3V13H7V15H9V9H7ZM21 13V11H11V13H21ZM15 9H17V7H21V5H17V3H15V9Z" />
  </svg>
)
export const oTurnedIn = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3Z" />
  </svg>
)
export const oTurnedInNot = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z" />
  </svg>
)
export const oTv = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3H3C1.9 3 1 3.9 1 5V17C1 18.1 1.9 19 3 19H8V21H16V19H21C22.1 19 22.99 18.1 22.99 17L23 5C23 3.9 22.1 3 21 3ZM21 17H3V5H21V17Z" />
  </svg>
)
export const oTvOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 7V17.88L22.85 19.73C22.94 19.5 23 19.26 23 19V7C23 5.89 22.11 5 21 5H13.42L16.71 1.7L16 1L12 5L8 1L7.3 1.7L10.58 5H8.12L10.12 7H21ZM20.46 23L21.72 21.73L20.46 22.99V23ZM2.41 2.13L2.27 2.27L1 3.54L2.53 5.07C1.65 5.28 1 6.06 1 7V19C1 20.1 1.9 21 3 21H18.46L20.45 22.99L21.71 21.73L21.86 21.58L2.41 2.13ZM3 19V7H4.46L16.46 19H3Z" />
  </svg>
)
export const oUnarchive = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20.54 5.23L19.15 3.55C18.88 3.21 18.47 3 18 3H6C5.53 3 5.12 3.21 4.84 3.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V6.5C21 6.02 20.83 5.57 20.54 5.23ZM6.24 5H17.76L18.59 6H5.42L6.24 5ZM5 19V8H19V19H5ZM8 14H10.55V17H13.45V14H16L12 10L8 14Z" />
  </svg>
)
export const oUndo = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 8C9.85 8 7.45 8.99 5.6 10.6L2 7V16H11L7.38 12.38C8.77 11.22 10.54 10.5 12.5 10.5C16.04 10.5 19.05 12.81 20.1 16L22.47 15.22C21.08 11.03 17.15 8 12.5 8Z" />
  </svg>
)
export const oUnfoldLess = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7.41016 18.59L8.83016 20L12.0002 16.83L15.1702 20L16.5802 18.59L12.0002 14L7.41016 18.59ZM16.5902 5.41L15.1702 4L12.0002 7.17L8.83016 4L7.41016 5.41L12.0002 10L16.5902 5.41Z" />
  </svg>
)
export const oUnfoldMore = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12.0002 5.83L15.1702 9L16.5802 7.59L12.0002 3L7.41016 7.59L8.83016 9L12.0002 5.83ZM12.0002 18.17L8.83016 15L7.42016 16.41L12.0002 21L16.5902 16.41L15.1702 15L12.0002 18.17Z" />
  </svg>
)
export const oUnsubscribe = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20.99 14.04V5C20.99 3.9 20.09 3 18.99 3H5C3.9 3 3 3.9 3 5V15C3 16.1 3.9 17 5 17H15.05C15.33 18.92 17.15 20.35 19.23 19.93C20.57 19.66 21.66 18.56 21.93 17.22C22.18 15.98 21.77 14.83 20.99 14.04ZM18.99 5L12 8.5L5 5H18.99ZM15.35 15H5V7L12 10.5L19 7V13.05C18.84 13.03 18.67 13 18.5 13C17.11 13 15.91 13.82 15.35 15ZM20.5 17H16.5V16H20.5V17Z" />
  </svg>
)
export const oUpdate = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11 8V13L15.25 15.52L16.02 14.24L12.5 12.15V8H11ZM21 10V3L18.36 5.64C16.74 4.01 14.49 3 12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12H19C19 15.86 15.86 19 12 19C8.14 19 5 15.86 5 12C5 8.14 8.14 5 12 5C13.93 5 15.68 5.79 16.95 7.05L14 10H21Z" />
  </svg>
)
export const oUsb = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 7V11H16V13H13V5H15L12 1L9.00005 5H11V13H8.00005V10.93C8.70005 10.56 9.20005 9.85 9.20005 9C9.20005 7.79 8.21005 6.8 7.00005 6.8C5.79005 6.8 4.80005 7.79 4.80005 9C4.80005 9.85 5.30005 10.56 6.00005 10.93V13C6.00005 14.11 6.89005 15 8.00005 15H11V18.05C10.29 18.42 9.80005 19.15 9.80005 20C9.80005 21.22 10.79 22.2 12 22.2C13.21 22.2 14.2 21.22 14.2 20C14.2 19.15 13.71 18.42 13 18.05V15H16C17.11 15 18 14.11 18 13V11H19V7H15Z" />
  </svg>
)
export const oVerifiedUser = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM19 11C19 15.52 16.02 19.69 12 20.93C7.98 19.69 5 15.52 5 11V6.3L12 3.19L19 6.3V11ZM7.41 11.59L6 13L10 17L18 9L16.59 7.58L10 14.17L7.41 11.59Z" />
  </svg>
)
export const oVerticalAlignBottom = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16 13H13V3H11V13H8L12 17L16 13ZM4 19V21H20V19H4Z" />
  </svg>
)
export const oVerticalAlignCenter = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M8 19H11V23H13V19H16L12 15L8 19ZM16 5H13V1H11V5H8L12 9L16 5ZM4 11V13H20V11H4Z" />
  </svg>
)
export const oVerticalAlignTop = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M8 11H11V21H13V11H16L12 7L8 11ZM4 3V5H20V3H4Z" />
  </svg>
)
export const oVerticalSplit = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 13H11V15H3V13ZM3 17H11V19H3V17ZM3 9H11V11H3V9ZM3 5H11V7H3V5ZM19 7V17H15V7H19ZM21 5H13V19H21V5Z" />
  </svg>
)
export const oVibration = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M0 15H2V9H0V15ZM3 17H5V7H3V17ZM22 9V15H24V9H22ZM19 17H21V7H19V17ZM16.5 3H7.5C6.67 3 6 3.67 6 4.5V19.5C6 20.33 6.67 21 7.5 21H16.5C17.33 21 18 20.33 18 19.5V4.5C18 3.67 17.33 3 16.5 3ZM16 19H8V5H16V19Z" />
  </svg>
)
export const oVideoCall = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 10.5V7C17 6.45 16.55 6 16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5ZM15 16H5V8H15V16ZM9 15H11V13H13V11H11V9H9V11H7V13H9V15Z" />
  </svg>
)
export const oVideoLabel = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 16H3V5H21V16Z" />
  </svg>
)
export const oVideoLibrary = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16ZM12 5.5V14.5L18 10L12 5.5Z" />
  </svg>
)
export const oVideocam = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 8V16H5V8H15ZM16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5V7C17 6.45 16.55 6 16 6Z" />
  </svg>
)
export const oVideocamOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9.56 8.00011L7.56 6.00011L3.41 1.86011L2 3.27011L4.73 6.00011H4C3.45 6.00011 3 6.45011 3 7.00011V17.0001C3 17.5501 3.45 18.0001 4 18.0001H16C16.21 18.0001 16.39 17.9201 16.55 17.8201L19.73 21.0001L21.14 19.5901L12.28 10.7301L9.56 8.00011ZM5 16.0001V8.00011H6.73L14.73 16.0001H5ZM15 8.00011V10.6101L21 16.6101V6.50011L17 10.5001V7.00011C17 6.45011 16.55 6.00011 16 6.00011H10.39L12.39 8.00011H15Z" />
  </svg>
)
export const oVideogameAsset = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 6H3C1.9 6 1 6.9 1 8V16C1 17.1 1.9 18 3 18H21C22.1 18 23 17.1 23 16V8C23 6.9 22.1 6 21 6ZM21 16H3V8H21V16ZM6 15H8V13H10V11H8V9H6V11H4V13H6V15ZM14.5 15C15.3284 15 16 14.3284 16 13.5C16 12.6716 15.3284 12 14.5 12C13.6716 12 13 12.6716 13 13.5C13 14.3284 13.6716 15 14.5 15ZM20 10.5C20 11.3284 19.3284 12 18.5 12C17.6716 12 17 11.3284 17 10.5C17 9.67157 17.6716 9 18.5 9C19.3284 9 20 9.67157 20 10.5Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oViewAgenda = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19 5V9H4V5H19ZM19 15V19H4V15H19ZM20 3H3C2.45 3 2 3.45 2 4V10C2 10.55 2.45 11 3 11H20C20.55 11 21 10.55 21 10V4C21 3.45 20.55 3 20 3ZM20 13H3C2.45 13 2 13.45 2 14V20C2 20.55 2.45 21 3 21H20C20.55 21 21 20.55 21 20V14C21 13.45 20.55 13 20 13Z" />
  </svg>
)
export const oViewArray = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 7V16H10V7H15ZM21 5H18V18H21V5ZM17 5H8V18H17V5ZM7 5H4V18H7V5Z" />
  </svg>
)
export const oViewCarousel = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M2 6H6V17H2V6ZM7 19H17V4H7V19ZM9 6H15V17H9V6ZM18 6H22V17H18V6Z" />
  </svg>
)
export const oViewColumn = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 5V18H21V5H4ZM14 7V16H11V7H14ZM6 7H9V16H6V7ZM19 16H16V7H19V16Z" />
  </svg>
)
export const oViewComfy = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5V19H22V5H3ZM20 9H17.75V7H20V9ZM9.25 11H11.5V13H9.25V11ZM7.25 13H5V11H7.25V13ZM11.5 9H9.25V7H11.5V9ZM13.5 7H15.75V9H13.5V7ZM11.5 15V17H9.25V15H11.5ZM13.5 15H15.75V17H13.5V15ZM13.5 13V11H15.75V13H13.5ZM17.75 11H20V13H17.75V11ZM7.25 7V9H5V7H7.25ZM5 15H7.25V17H5V15ZM17.75 17V15H20V17H17.75Z" />
  </svg>
)
export const oViewCompact = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5V19H22V5H3ZM5 7H20V11H5V7ZM5 17V13H9V17H5ZM11 17V13H20V17H11Z" />
  </svg>
)
export const oViewDay = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 18H2V20H21V18ZM19 10V14H4V10H19ZM20 8H3C2.45 8 2 8.45 2 9V15C2 15.55 2.45 16 3 16H20C20.55 16 21 15.55 21 15V9C21 8.45 20.55 8 20 8ZM21 4H2V6H21V4Z" />
  </svg>
)
export const oViewHeadline = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 15H20V13H4V15ZM4 19H20V17H4V19ZM4 11H20V9H4V11ZM4 5V7H20V5H4Z" />
  </svg>
)
export const oViewList = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 5V19H20V5H3ZM7 7V9H5V7H7ZM5 13V11H7V13H5ZM5 15H7V17H5V15ZM18 17H9V15H18V17ZM18 13H9V11H18V13ZM18 9H9V7H18V9Z" />
  </svg>
)
export const oViewModule = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 5V18H21V5H4ZM14 7V10.5H11V7H14ZM6 7H9V10.5H6V7ZM6 16V12.5H9V16H6ZM11 16V12.5H14V16H11ZM19 16H16V12.5H19V16ZM16 10.5V7H19V10.5H16Z" />
  </svg>
)
export const oViewQuilt = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 5V18H21V5H4ZM6 16V7H9V16H6ZM11 16V12.5H14V16H11ZM19 16H16V12.5H19V16ZM11 10.5V7H19V10.5H11Z" />
  </svg>
)
export const oViewStream = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6V18H21V6H4ZM19 16H6V13H19V16ZM6 11V8H19V11H6Z" />
  </svg>
)
export const oViewWeek = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 4H3C2.45 4 2 4.45 2 5V19C2 19.55 2.45 20 3 20H21C21.55 20 22 19.55 22 19V5C22 4.45 21.55 4 21 4ZM8 18H4V6H8V18ZM14 18H10V6H14V18ZM20 18H16V6H20V18Z" />
  </svg>
)
export const oVignette = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 5V19H3V5H21ZM21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM12 8C15.25 8 18 9.83 18 12C18 14.17 15.25 16 12 16C8.75 16 6 14.17 6 12C6 9.83 8.75 8 12 8ZM12 6C7.58 6 4 8.69 4 12C4 15.31 7.58 18 12 18C16.42 18 20 15.31 20 12C20 8.69 16.42 6 12 6Z" />
  </svg>
)
export const oVisibility = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6C15.79 6 19.17 8.13 20.82 11.5C19.17 14.87 15.79 17 12 17C8.21 17 4.83 14.87 3.18 11.5C4.83 8.13 8.21 6 12 6ZM12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 11.5C21.27 7.11 17 4 12 4ZM12 9C13.38 9 14.5 10.12 14.5 11.5C14.5 12.88 13.38 14 12 14C10.62 14 9.5 12.88 9.5 11.5C9.5 10.12 10.62 9 12 9ZM12 7C9.52 7 7.5 9.02 7.5 11.5C7.5 13.98 9.52 16 12 16C14.48 16 16.5 13.98 16.5 11.5C16.5 9.02 14.48 7 12 7Z" />
  </svg>
)
export const oVisibilityOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5.99995C15.79 5.99995 19.17 8.12995 20.82 11.5C20.23 12.72 19.4 13.77 18.41 14.62L19.82 16.03C21.21 14.8 22.31 13.26 23 11.5C21.27 7.10995 17 3.99995 12 3.99995C10.73 3.99995 9.51 4.19995 8.36 4.56995L10.01 6.21995C10.66 6.08995 11.32 5.99995 12 5.99995ZM10.93 7.13995L13 9.20995C13.57 9.45995 14.03 9.91995 14.28 10.49L16.35 12.56C16.43 12.22 16.49 11.86 16.49 11.49C16.5 9.00995 14.48 6.99995 12 6.99995C11.63 6.99995 11.28 7.04995 10.93 7.13995ZM2.01 3.86995L4.69 6.54995C3.06 7.82995 1.77 9.52995 1 11.5C2.73 15.89 7 19 12 19C13.52 19 14.98 18.71 16.32 18.18L19.74 21.6L21.15 20.19L3.42 2.44995L2.01 3.86995ZM9.51 11.37L12.12 13.98C12.08 13.99 12.04 14 12 14C10.62 14 9.5 12.88 9.5 11.5C9.5 11.45 9.51 11.42 9.51 11.37ZM6.11 7.96995L7.86 9.71995C7.63 10.27 7.5 10.87 7.5 11.5C7.5 13.98 9.52 16 12 16C12.63 16 13.23 15.87 13.77 15.64L14.75 16.62C13.87 16.86 12.95 17 12 17C8.21 17 4.83 14.87 3.18 11.5C3.88 10.07 4.9 8.88995 6.11 7.96995Z" />
  </svg>
)
export const oVoiceChat = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16ZM14 10.6L17 13V7L14 9.4V7H7V13H14V10.6Z" />
  </svg>
)
export const oVoiceOverOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16.76 5.36L15.08 7.05C15.88 8.18 15.91 9.63 15.17 10.79L16.87 12.49C18.77 10.47 18.74 7.51 16.76 5.36ZM20.07 2L18.44 3.63C21.16 6.6 21.2 11.02 18.58 14.19L20.22 15.83C23.96 11.94 23.93 5.99 20.07 2ZM9.43 5.04L12.96 8.57C12.76 6.71 11.29 5.24 9.43 5.04ZM4.41 2.86L3 4.27L5.62 6.89C5.23 7.5 5 8.22 5 9C5 11.21 6.79 13 9 13C9.78 13 10.5 12.77 11.11 12.38L15.51 16.78C13.74 15.6 10.78 15 9 15C6.33 15 1 16.34 1 19V21H17V19C17 18.63 16.89 18.3 16.71 17.98L19.73 21L21.14 19.59L4.41 2.86ZM3 19C3.22 18.28 6.31 17 9 17C11.7 17 14.8 18.29 15 19H3ZM9 11C7.9 11 7 10.1 7 9C7 8.78 7.04 8.58 7.11 8.38L9.62 10.89C9.42 10.96 9.22 11 9 11Z" />
  </svg>
)
export const oVoicemail = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18.5 6C15.46 6 13 8.46 13 11.5C13 12.83 13.47 14.05 14.26 15H9.74C10.53 14.05 11 12.83 11 11.5C11 8.46 8.54 6 5.5 6C2.46 6 0 8.46 0 11.5C0 14.54 2.46 17 5.5 17H18.5C21.54 17 24 14.54 24 11.5C24 8.46 21.54 6 18.5 6ZM5.5 15C3.57 15 2 13.43 2 11.5C2 9.57 3.57 8 5.5 8C7.43 8 9 9.57 9 11.5C9 13.43 7.43 15 5.5 15ZM18.5 15C16.57 15 15 13.43 15 11.5C15 9.57 16.57 8 18.5 8C20.43 8 22 9.57 22 11.5C22 13.43 20.43 15 18.5 15Z" />
  </svg>
)
export const oVolumeDown = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16 7.97V16.02C17.48 15.29 18.5 13.77 18.5 12C18.5 10.23 17.48 8.71 16 7.97ZM5 9V15H9L14 20V4L9 9H5ZM12 8.83V15.17L9.83 13H7V11H9.83L12 8.83Z" />
  </svg>
)
export const oVolumeMute = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14 8.83V15.17L11.83 13H9V11H11.83L14 8.83ZM16 4L11 9H7V15H11L16 20V4Z" />
  </svg>
)
export const oVolumeOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4.34018 2.92993L2.93018 4.33993L7.29018 8.69993L7.00018 8.99993H3.00018V14.9999H7.00018L12.0002 19.9999V13.4099L16.1802 17.5899C15.5302 18.0799 14.8002 18.4699 14.0002 18.6999V20.7599C15.3402 20.4599 16.5702 19.8399 17.6102 19.0099L19.6602 21.0599L21.0702 19.6499L4.34018 2.92993ZM10.0002 15.1699L7.83018 12.9999H5.00018V10.9999H7.83018L8.71018 10.1199L10.0002 11.4099V15.1699ZM19.0002 11.9999C19.0002 12.8199 18.8502 13.6099 18.5902 14.3399L20.1202 15.8699C20.6802 14.6999 21.0002 13.3899 21.0002 11.9999C21.0002 7.71993 18.0102 4.13993 14.0002 3.22993V5.28993C16.8902 6.14993 19.0002 8.82993 19.0002 11.9999ZM12.0002 3.99993L10.1202 5.87993L12.0002 7.75993V3.99993ZM16.5002 11.9999C16.5002 10.2299 15.4802 8.70993 14.0002 7.96993V9.75993L16.4802 12.2399C16.4902 12.1599 16.5002 12.0799 16.5002 11.9999Z" />
  </svg>
)
export const oVolumeUp = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM10 8.82998V15.17L7.83 13H5V11H7.83L10 8.82998ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998Z" />
  </svg>
)
export const oVpnKey = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M22 19H16V15H13.32C12.18 17.42 9.72 19 7 19C3.14 19 0 15.86 0 12C0 8.14 3.14 5 7 5C9.72 5 12.17 6.58 13.32 9H24V15H22V19ZM18 17H20V13H22V11H11.94L11.71 10.33C11.01 8.34 9.11 7 7 7C4.24 7 2 9.24 2 12C2 14.76 4.24 17 7 17C9.11 17 11.01 15.66 11.71 13.67L11.94 13H18V17ZM7 15C5.35 15 4 13.65 4 12C4 10.35 5.35 9 7 9C8.65 9 10 10.35 10 12C10 13.65 8.65 15 7 15ZM7 11C6.45 11 6 11.45 6 12C6 12.55 6.45 13 7 13C7.55 13 8 12.55 8 12C8 11.45 7.55 11 7 11Z" />
  </svg>
)
export const oVpnLock = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18.92 12C18.96 12.33 19 12.66 19 13C19 15.08 18.2 16.97 16.9 18.39C16.64 17.58 15.9 17 15 17H14V14C14 13.45 13.55 13 13 13H7V11H9C9.55 11 10 10.55 10 10V8H12C13.1 8 14 7.1 14 6V3.46C13.05 3.16 12.05 3 11 3C5.48 3 1 7.48 1 13C1 18.52 5.48 23 11 23C16.52 23 21 18.52 21 13C21 12.66 20.98 12.33 20.95 12H18.92ZM10 20.93C6.05 20.44 3 17.08 3 13C3 12.38 3.08 11.79 3.21 11.21L8 16V17C8 18.1 8.9 19 10 19V20.93ZM22 4V3.5C22 2.12 20.88 1 19.5 1C18.12 1 17 2.12 17 3.5V4C16.45 4 16 4.45 16 5V9C16 9.55 16.45 10 17 10H22C22.55 10 23 9.55 23 9V5C23 4.45 22.55 4 22 4ZM21 4H18V3.5C18 2.67 18.67 2 19.5 2C20.33 2 21 2.67 21 3.5V4Z" />
  </svg>
)
export const oWallpaper = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H11V2H4C2.9 2 2 2.9 2 4V11H4V4ZM10 13L6 18H18L15 14L12.97 16.71L10 13ZM17 8.5C17 7.67 16.33 7 15.5 7C14.67 7 14 7.67 14 8.5C14 9.33 14.67 10 15.5 10C16.33 10 17 9.33 17 8.5ZM20 2H13V4H20V11H22V4C22 2.9 21.1 2 20 2ZM20 20H13V22H20C21.1 22 22 21.1 22 20V13H20V20ZM4 13H2V20C2 21.1 2.9 22 4 22H11V20H4V13Z" />
  </svg>
)
export const oWarning = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" />
  </svg>
)
export const oWatch = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14.31 2L14.72 4.48C13.87 4.17 12.96 4 12 4C11.05 4 10.13 4.17 9.29 4.47L9.7 2H14.31ZM14.72 19.52L14.31 22H9.7L9.29 19.53C10.13 19.83 11.05 20 12 20C12.96 20 13.87 19.83 14.72 19.52ZM16 0H8L7.05 5.73C5.19 7.19 4 9.45 4 12C4 14.55 5.19 16.81 7.05 18.27L8 24H16L16.96 18.27C18.81 16.81 20 14.54 20 12C20 9.46 18.81 7.19 16.96 5.73L16 0ZM12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18Z" />
  </svg>
)
export const oWatchLater = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z" />
  </svg>
)
export const oWaves = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17 16.9899C15.65 16.9899 14.8 17.4099 14.05 17.7899C13.4 18.1199 12.87 18.3899 12 18.3899C11.1 18.3899 10.6 18.1399 9.95 17.7899C9.2 17.4099 8.38 16.9899 7 16.9899C5.62 16.9899 4.8 17.4099 4.05 17.7899C3.4 18.1199 2.88 18.3899 2 18.3899V20.3399C3.35 20.3399 4.2 19.9199 4.95 19.5399C5.6 19.2099 6.12 18.9399 7 18.9399C7.88 18.9399 8.4 19.1899 9.05 19.5399C9.8 19.9199 10.62 20.3399 12 20.3399C13.38 20.3399 14.2 19.9199 14.95 19.5399C15.6 19.2099 16.13 18.9399 17 18.9399C17.9 18.9399 18.4 19.1899 19.05 19.5399C19.8 19.9199 20.63 20.3399 22 20.3399V18.3899C21.1 18.3899 20.6 18.1399 19.95 17.7899C19.2 17.4099 18.35 16.9899 17 16.9899ZM17 12.5399C15.65 12.5399 14.8 12.9699 14.05 13.3399C13.4 13.6599 12.87 13.9399 12 13.9399C11.1 13.9399 10.6 13.6899 9.95 13.3399C9.2 12.9599 8.38 12.5399 7 12.5399C5.62 12.5399 4.8 12.9699 4.05 13.3399C3.4 13.6599 2.88 13.9399 2 13.9399V15.8899C3.35 15.8899 4.2 15.4599 4.95 15.0899C5.6 14.7399 6.1 14.4899 7 14.4899C7.9 14.4899 8.4 14.7399 9.05 15.0899C9.8 15.4699 10.62 15.8899 12 15.8899C13.38 15.8899 14.2 15.4599 14.95 15.0899C15.6 14.7399 16.1 14.4899 17 14.4899C17.9 14.4899 18.4 14.7399 19.05 15.0899C19.8 15.4699 20.63 15.8899 22 15.8899V13.9399C21.1 13.9399 20.6 13.6899 19.95 13.3399C19.2 12.9599 18.35 12.5399 17 12.5399ZM19.95 4.45991C19.2 4.07991 18.37 3.65991 17 3.65991C15.63 3.65991 14.8 4.07991 14.05 4.45991C13.4 4.77991 12.87 5.05991 12 5.05991C11.1 5.05991 10.6 4.80991 9.95 4.45991C9.2 4.08991 8.38 3.65991 7 3.65991C5.62 3.65991 4.8 4.07991 4.05 4.45991C3.4 4.78991 2.88 5.05991 2 5.05991V6.98991C3.35 6.98991 4.2 6.55991 4.95 6.18991C5.6 5.85991 6.12 5.58991 7 5.58991C7.88 5.58991 8.4 5.83991 9.05 6.18991C9.8 6.56991 10.62 6.98991 12 6.98991C13.38 6.98991 14.2 6.55991 14.95 6.18991C15.6 5.86991 16.13 5.58991 17 5.58991C17.9 5.58991 18.4 5.83991 19.05 6.18991C19.8 6.56991 20.63 6.98991 22 6.98991V5.03991C21.1 5.03991 20.6 4.78991 19.95 4.45991ZM17 8.08991C15.65 8.08991 14.8 8.51991 14.05 8.88991C13.4 9.23991 12.9 9.48991 12 9.48991C11.1 9.48991 10.6 9.23991 9.95 8.88991C9.2 8.50991 8.38 8.08991 7 8.08991C5.62 8.08991 4.8 8.51991 4.05 8.88991C3.4 9.23991 2.9 9.48991 2 9.48991V11.4399C3.35 11.4399 4.2 11.0099 4.95 10.6399C5.6 10.3199 6.13 10.0399 7 10.0399C7.87 10.0399 8.4 10.2899 9.05 10.6399C9.8 11.0199 10.62 11.4399 12 11.4399C13.38 11.4399 14.2 11.0099 14.95 10.6399C15.6 10.3199 16.13 10.0399 17 10.0399C17.9 10.0399 18.4 10.2899 19.05 10.6399C19.8 11.0199 20.63 11.4399 22 11.4399V9.48991C21.1 9.48991 20.6 9.23991 19.95 8.88991C19.2 8.50991 18.35 8.08991 17 8.08991Z" />
  </svg>
)
export const oWbAuto = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M7 7L3.8 16H5.7L6.4 14H9.6L10.3 16H12.2L9 7H7ZM6.85 12.65L8 9L9.15 12.65H6.85ZM22 7L20.8 13.29L19.3 7H17.7L16.21 13.29L15 7H14.24L14.23 7.01C12.76 5.18 10.53 4 8 4C3.58 4 0 7.58 0 12C0 16.42 3.58 20 8 20C10.96 20 13.55 18.39 14.93 16C14.96 15.94 14.98 15.88 15.01 15.82C15.06 15.74 15.1 15.65 15.15 15.57L15.25 16H17L18.5 9.9L20 16H21.75L23.8 7H22ZM13.37 14.67C12.38 16.64 10.35 18 8 18C4.69 18 2 15.31 2 12C2 8.69 4.69 6 8 6C11.31 6 14 8.69 14 12C14 12.96 13.77 13.86 13.37 14.67Z" />
  </svg>
)
export const oWbCloudy = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12.01 6C14.62 6 16.9 7.86 17.41 10.43L17.71 11.93L19.23 12.04C20.79 12.15 22.01 13.45 22.01 15C22.01 16.65 20.66 18 19.01 18H6.01001C3.80001 18 2.01001 16.21 2.01001 14C2.01001 11.95 3.54001 10.24 5.57001 10.03L6.64001 9.92L7.14001 8.97C8.08001 7.14 9.95001 6 12.01 6ZM12.01 4C9.12001 4 6.60001 5.64 5.35001 8.04C2.35001 8.36 0.0100098 10.91 0.0100098 14C0.0100098 17.31 2.70001 20 6.01001 20H19.01C21.77 20 24.01 17.76 24.01 15C24.01 12.36 21.96 10.22 19.37 10.04C18.68 6.59 15.65 4 12.01 4Z" />
  </svg>
)
export const oWbIncandescent = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M3.56001 19.09L4.97001 20.5L6.76001 18.7001L5.35001 17.29L3.56001 19.09ZM11.01 20H13.01V23H11.01V20ZM1.01001 11H4.01001V13H1.01001V11ZM13.01 4.05005V8.01005L14.01 8.59005C15.25 9.31005 16.01 10.63 16.01 12.05C16.01 14.26 14.22 16.05 12.01 16.05C9.80001 16.05 8.01001 14.26 8.01001 12.05C8.01001 10.63 8.78001 9.31005 10.01 8.59005L11.01 8.01005V4.05005H13.01ZM15.01 2.05005H9.01001V6.86005C7.22001 7.90005 6.01001 9.83005 6.01001 12.05C6.01001 15.36 8.70001 18.05 12.01 18.05C15.32 18.05 18.01 15.36 18.01 12.05C18.01 9.83005 16.8 7.90005 15.01 6.86005V2.05005ZM20.01 11H23.01V13H20.01V11ZM17.25 18.71L19.04 20.51L20.45 19.1L18.65 17.31L17.25 18.71Z" />
  </svg>
)
export const oWbIridescent = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5.01006 15H19.0101V9H5.01006V15ZM7.01006 11H17.0101V13H7.01006V11ZM11.0101 1H13.0101V4H11.0101V1ZM20.4701 5.01L19.0501 3.6L17.2601 5.39L18.6701 6.8L20.4701 5.01ZM11.0101 20H13.0101V23H11.0101V20ZM17.2501 18.71L19.0401 20.51L20.4601 19.09L18.6601 17.3L17.2501 18.71ZM4.97006 3.595L6.75806 5.385L5.35006 6.79L3.56306 5.003L4.97006 3.595ZM3.56006 19.08L4.97006 20.5L6.76006 18.7L5.35006 17.29L3.56006 19.08Z" />
  </svg>
)
export const oWbSunny = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M6.77001 4.84005L4.97001 3.05005L3.56001 4.46005L5.35001 6.25005L6.77001 4.84005ZM1.01001 10.5H4.01001V12.5H1.01001V10.5ZM11.01 0.550049H13.01V3.50005H11.01V0.550049ZM19.05 3.04505L20.458 4.45205L18.668 6.24205L17.261 4.83405L19.05 3.04505ZM17.25 18.16L19.04 19.96L20.45 18.55L18.65 16.76L17.25 18.16ZM20.01 10.5H23.01V12.5H20.01V10.5ZM12.01 5.50005C8.70001 5.50005 6.01001 8.19005 6.01001 11.5C6.01001 14.81 8.70001 17.5 12.01 17.5C15.32 17.5 18.01 14.81 18.01 11.5C18.01 8.19005 15.32 5.50005 12.01 5.50005ZM12.01 15.5C9.80001 15.5 8.01001 13.71 8.01001 11.5C8.01001 9.29005 9.80001 7.50005 12.01 7.50005C14.22 7.50005 16.01 9.29005 16.01 11.5C16.01 13.71 14.22 15.5 12.01 15.5ZM11.01 19.5H13.01V22.4501H11.01V19.5ZM3.56001 18.5401L4.97001 19.9501L6.76001 18.15L5.35001 16.74L3.56001 18.5401Z" />
  </svg>
)
export const oWc = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 22V14.5H4V9C4 7.9 4.9 7 6 7H9C10.1 7 11 7.9 11 9V14.5H9.5V22H5.5ZM18 22V16H21L18.46 8.37C18.18 7.55 17.42 7 16.56 7H16.44C15.58 7 14.81 7.55 14.54 8.37L12 16H15V22H18ZM7.5 6C8.61 6 9.5 5.11 9.5 4C9.5 2.89 8.61 2 7.5 2C6.39 2 5.5 2.89 5.5 4C5.5 5.11 6.39 6 7.5 6ZM16.5 6C17.61 6 18.5 5.11 18.5 4C18.5 2.89 17.61 2 16.5 2C15.39 2 14.5 2.89 14.5 4C14.5 5.11 15.39 6 16.5 6Z" />
  </svg>
)
export const oWeb = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.01 4H4.01001C2.91001 4 2.02001 4.9 2.02001 6L2.01001 18C2.01001 19.1 2.91001 20 4.01001 20H20.01C21.11 20 22.01 19.1 22.01 18V6C22.01 4.9 21.11 4 20.01 4ZM14.51 9H4.01001V12.5H14.51V9ZM14.51 14.5H4.01001V18H14.51V14.5ZM20.01 18H16.51V9H20.01V18Z"
      fillRule="evenodd"
    />
  </svg>
)
export const oWebAsset = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M19.01 4H5.01001C3.90001 4 3.01001 4.9 3.01001 6V18C3.01001 19.1 3.90001 20 5.01001 20H19.01C20.11 20 21.01 19.1 21.01 18V6C21.01 4.9 20.12 4 19.01 4ZM19.01 18H5.01001V8H19.01V18Z" />
  </svg>
)
export const oWeekend = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21.01 9V7C21.01 5.35 19.66 4 18.01 4H6.01001C4.36001 4 3.01001 5.35 3.01001 7V9C1.36001 9 0.0100098 10.35 0.0100098 12V17C0.0100098 18.65 1.36001 20 3.01001 20H21.01C22.66 20 24.01 18.65 24.01 17V12C24.01 10.35 22.66 9 21.01 9ZM5.01001 7C5.01001 6.45 5.46001 6 6.01001 6H18.01C18.56 6 19.01 6.45 19.01 7V9.78C18.4 10.33 18.01 11.12 18.01 12V14H6.01001V12C6.01001 11.12 5.62001 10.33 5.01001 9.78V7ZM22.01 17C22.01 17.55 21.56 18 21.01 18H3.01001C2.46001 18 2.01001 17.55 2.01001 17V12C2.01001 11.45 2.46001 11 3.01001 11C3.56001 11 4.01001 11.45 4.01001 12V16H20.01V12C20.01 11.45 20.46 11 21.01 11C21.56 11 22.01 11.45 22.01 12V17Z" />
  </svg>
)
export const oWhatshot = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M11.58 13.1599C10.22 13.4399 9.41001 14.3199 9.41001 15.5699C9.41001 16.9099 10.52 17.9899 11.9 17.9899C13.95 17.9899 15.61 16.3299 15.61 14.2799C15.61 13.2099 15.46 12.1599 15.15 11.1599C14.36 12.2299 12.95 12.8799 11.58 13.1599ZM13.51 0.669922C13.51 0.669922 14.25 3.31992 14.25 5.46992C14.25 7.52992 12.9 9.19992 10.84 9.19992C8.77001 9.19992 7.21001 7.52992 7.21001 5.46992L7.24001 5.10992C5.22001 7.50992 4.01001 10.6199 4.01001 13.9999C4.01001 18.4199 7.59001 21.9999 12.01 21.9999C16.43 21.9999 20.01 18.4199 20.01 13.9999C20.01 8.60992 17.42 3.79992 13.51 0.669922ZM12.01 19.9999C8.70001 19.9999 6.01001 17.3099 6.01001 13.9999C6.01001 12.4699 6.31001 10.9599 6.87001 9.56992C7.88001 10.5799 9.28001 11.1999 10.84 11.1999C13.5 11.1999 15.59 9.36992 16.12 6.76992C17.35 8.96992 18.01 11.4399 18.01 13.9999C18.01 17.3099 15.32 19.9999 12.01 19.9999Z" />
  </svg>
)
export const oWhereToVote = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 25 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12.01 1C7.60001 1 4.01001 4.59 4.01001 9C4.01001 14.57 10.97 22.34 11.27 22.67L12.01 23.49L12.75 22.67C13.05 22.34 20.01 14.57 20.01 9C20.01 4.59 16.42 1 12.01 1ZM12.01 20.47C9.83001 17.86 6.01001 12.54 6.01001 9C6.01001 5.69 8.70001 3 12.01 3C15.32 3 18.01 5.69 18.01 9C18.01 12.83 13.76 18.36 12.01 20.47ZM10.48 11.17L8.72001 9.4L7.30001 10.82L10.48 14L16.49 7.99L15.08 6.57L10.48 11.17Z" />
  </svg>
)
export const oWidgets = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M16.66 4.51994L19.49 7.34994L16.66 10.1799L13.83 7.34994L16.66 4.51994ZM9 4.99994V8.99994H5V4.99994H9ZM19 14.9999V18.9999H15V14.9999H19ZM9 14.9999V18.9999H5V14.9999H9ZM16.66 1.68994L11 7.33994L16.66 12.9999L22.32 7.33994L16.66 1.68994ZM11 2.99994H3V10.9999H11V2.99994ZM21 12.9999H13V20.9999H21V12.9999ZM11 12.9999H3V20.9999H11V12.9999Z" />
  </svg>
)
export const oWifi = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M1 9.00001L3 11C7.97 6.03001 16.03 6.03001 21 11L23 9.00001C16.93 2.93001 7.08 2.93001 1 9.00001ZM9 17L12 20L15 17C13.35 15.34 10.66 15.34 9 17ZM5 13L7 15C9.76 12.24 14.24 12.24 17 15L19 13C15.14 9.14001 8.87 9.14001 5 13Z" />
  </svg>
)
export const oWifiLock = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21.31 9.58L24 6C20.66 3.49 16.5 2 12 2C7.5 2 3.34 3.49 0 6L12 22L15.5 17.33V14.5C15.5 11.74 17.74 9.5 20.5 9.5C20.78 9.5 21.05 9.54 21.31 9.58ZM23 16V14.5C23 13.12 21.88 12 20.5 12C19.12 12 18 13.12 18 14.5V16C17.45 16 17 16.45 17 17V21C17 21.55 17.45 22 18 22H23C23.55 22 24 21.55 24 21V17C24 16.45 23.55 16 23 16ZM22 16H19V14.5C19 13.67 19.67 13 20.5 13C21.33 13 22 13.67 22 14.5V16Z" />
  </svg>
)
export const oWifiOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10.9999L23 8.99989C19.27 5.26989 14.13 3.84989 9.3 4.68989L11.88 7.26989C15.18 7.24989 18.49 8.48989 21 10.9999ZM19 12.9999C17.92 11.9199 16.64 11.1499 15.28 10.6699L18.3 13.6899L19 12.9999ZM9 16.9999L12 19.9999L15 16.9999C13.35 15.3399 10.66 15.3399 9 16.9999ZM3.41 1.63989L2 3.04989L5.05 6.09989C3.59 6.82989 2.22 7.78989 1 8.99989L3 10.9999C4.23 9.76989 5.65 8.83989 7.17 8.21989L9.41 10.4599C7.79 10.8899 6.27 11.7399 5 12.9999L7 14.9999C8.35 13.6499 10.11 12.9599 11.89 12.9399L18.97 20.0199L20.38 18.6099L3.41 1.63989Z" />
  </svg>
)
export const oWifiTethering = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M12 11C10.9 11 10 11.9 10 13C10 14.1 10.9 15 12 15C13.1 15 14 14.1 14 13C14 11.9 13.1 11 12 11ZM18 13C18 9.69 15.31 7 12 7C8.69 7 6 9.69 6 13C6 15.22 7.21 17.15 9 18.19L10 16.45C8.81 15.75 8 14.48 8 13C8 10.79 9.79 9 12 9C14.21 9 16 10.79 16 13C16 14.48 15.19 15.75 14 16.45L15 18.19C16.79 17.15 18 15.22 18 13ZM12 3C6.48 3 2 7.48 2 13C2 16.7 4.01 19.92 6.99 21.65L7.99 19.92C5.61 18.53 4 15.96 4 13C4 8.58 7.58 5 12 5C16.42 5 20 8.58 20 13C20 15.96 18.39 18.53 16 19.92L17 21.65C19.99 19.92 22 16.7 22 13C22 7.48 17.52 3 12 3Z" />
  </svg>
)
export const oWork = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM14 6H10V4H14V6Z" />
  </svg>
)
export const oWorkOff = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M9.99999 4.00009H14V6.00009H10.4L12.4 8.00009H20V15.6001L22 17.6001V8.00009C22 6.89009 21.11 6.00009 20 6.00009H16V4.00009C16 2.89009 15.11 2.00009 14 2.00009H9.99999C9.00999 2.00009 8.19999 2.70009 8.03999 3.64009L9.99999 5.60009V4.00009ZM3.39999 1.84009L1.98999 3.25009L4.73999 6.00009H3.99999C2.88999 6.00009 2.00999 6.89009 2.00999 8.00009L1.99999 19.0001C1.99999 20.1101 2.88999 21.0001 3.99999 21.0001H19.74L21.74 23.0001L23.15 21.5901L3.39999 1.84009ZM3.99999 19.0001V8.00009H6.73999L17.74 19.0001H3.99999Z" />
  </svg>
)
export const oWorkOutline = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14 6V4H10V6H14ZM4 8V19H20V8H4ZM20 6C21.11 6 22 6.89 22 8V19C22 20.11 21.11 21 20 21H4C2.89 21 2 20.11 2 19L2.01 8C2.01 6.89 2.89 6 4 6H8V4C8 2.89 8.89 2 10 2H14C15.11 2 16 2.89 16 4V6H20Z" />
  </svg>
)
export const oWrapText = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19H10V17H4V19ZM20 5H4V7H20V5ZM17 11H4V13H17.25C18.35 13 19.25 13.9 19.25 15C19.25 16.1 18.35 17 17.25 17H15V15L12 18L15 21V19H17C19.21 19 21 17.21 21 15C21 12.79 19.21 11 17 11Z" />
  </svg>
)
export const oYoutubeSearchedFor = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M17.01 14H16.21L15.94 13.73C16.92 12.59 17.51 11.12 17.51 9.5C17.51 5.91 14.6 3 11.01 3C7.42 3 4.51 6 4.51 9.5H2L5.84 13.5L10 9.5H6.51C6.51 7 8.53 5 11.01 5C13.49 5 15.51 7.01 15.51 9.5C15.51 11.98 13.49 14 11.01 14C10.36 14 9.75 13.86 9.19 13.62L7.71 15.1C8.68 15.67 9.8 16 11.01 16C12.62 16 14.09 15.41 15.23 14.43L15.5 14.7V15.49L20.51 20.48L22 19L17.01 14Z" />
  </svg>
)
export const oZoomIn = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14ZM10 7H9V9H7V10H9V12H10V10H12V9H10V7Z" />
  </svg>
)
export const oZoomOut = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14ZM7 9H12V10H7V9Z" />
  </svg>
)
export const oZoomOutMap = ({
  height = "24px",
  width = "24px",
  fill = "#000",
}: IconType) => (
  <svg
    height={height}
    width={width}
    fill={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15 3L17.3 5.3L14.41 8.17L15.83 9.59L18.7 6.7L21 9V3H15ZM3 9L5.3 6.7L8.17 9.59L9.59 8.17L6.7 5.3L9 3H3V9ZM9 21L6.7 18.7L9.59 15.83L8.17 14.41L5.3 17.3L3 15V21H9ZM21 15L18.7 17.3L15.83 14.41L14.41 15.83L17.3 18.7L15 21H21V15Z" />
  </svg>
)
