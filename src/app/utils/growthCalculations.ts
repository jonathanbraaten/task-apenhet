export const calculateGrowthByYear = (arg) => {
  return arg
    .map((item, i) => {
      if (i === arg.length - 1) return { ...item, growth: null };
      const currentPopulation = item.value;
      const previousPopulation = arg[i + 1].value;
      const growth = ((currentPopulation - previousPopulation) / previousPopulation) * 100;
      return {
        ...item,
        'Population growth': growth,
      };
    })
    .reverse();
};
