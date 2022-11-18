export const capitalizeAll = (str: string) =>
  str
    .split(' ')
    .map((temp) => temp.charAt(0).toUpperCase() + temp.slice(1))
    .join(' ')

export const randomValueFrom = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)]
