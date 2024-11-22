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

export type Country = {
  id: string;
  iso2Code: string;
  name: string;
  region: Region;
  adminregion: AdminRegion;
  incomeLevel: IncomeLevel;
  lendingType: LendingType;
  capitalCity: string;
  longitude: string;
  latitude: string;
};
