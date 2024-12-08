type Region = {
  id: string;
  iso2code: string;
  value: string;
};

type AdminRegion = {
  id: string;
  iso2code: string;
  value: string;
};

type IncomeLevel = {
  id: string;
  iso2code: string;
  value: string;
};

type LendingType = {
  id: string;
  iso2code: string;
  value: string;
};

export type Countries = {
  id: string;
  iso2Code: string;
  name: string;
  region: Region;
  adminRegion: AdminRegion;
  incomeLevel: IncomeLevel;
  lendingType: LendingType;
  capitalCity: string;
  longitude: string;
  latitude: string;
};

type CountryMetadata = {
  page: number;
  pages: number;
  per_page: string;
  total: number;
};

export type WorldBankAPIResponse = [CountryMetadata, Countries[]];
// Types for all countries

// Types for population

type Indicator = {
  id: string;
  value: string;
};

type Country = {
  id: string;
  value: string;
};

export type PopulationData = {
  indicator: Indicator;
  country: Country;
  countryiso3code: string;
  date: string;
  value: number;
  unit: string;
  obs_status: string;
  decimal: number;
};
