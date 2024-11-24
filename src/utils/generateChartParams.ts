type ChartParams = 'growthByYear' | 'growthByRate';
export const generateChartParams = (param: ChartParams) => {
  return `chart=${param}`;
};
