export const dataset = [
  { day: 'Mon', deposit: 49.9, withdraw: 42.4 },
  { day: 'Tue', deposit: 71.5, withdraw: 51.4 },
  { day: 'Wed', deposit: 106.4, withdraw: 76.5 },
  { day: 'Thu', deposit: 129.2, withdraw: 86.4 },
  { day: 'Fri', deposit: 144.0, withdraw: 93.3 },
];

export const valueFormatter = (value: number | null) => {
  if (value === null) return '-';
  return `${value} mm`;
};