import { ReactNode } from "react";

export interface BaseFilmsProps {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  people: string[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string[];
}

export type FilmsProps = {
  data: BaseFilmsProps[];
};

export interface BaseLocationsProps {
  id: string;
  name: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string[];
  films: string[];
  url: string;
}

export type LocationsProps = {
  data: BaseLocationsProps[];
};

export interface BasePeopleProps {
  id: string;
  name: string;
  gender: string;
  age: number;
  eye_color: string;
  hair_color: string;
  films: string[];
  species: string;
  url: string;
}

export type PeopleProps = {
  data: BasePeopleProps[];
};

export interface BaseSpeciesProps {
  id: string;
  name: string;
  classification: string;
  eye_colors: string;
  hair_colors: string;
  people: string[];
  films: string[];
  url: string;
}

export type SpeciesProps = {
  data: BaseSpeciesProps[];
};

export interface BaseVehiclesProps {
  id: string;
  name: string;
  description: string;
  vehicle_class: string;
  length: string;
  pilot: string;
  films: string[];
  url: string;
}

export type VehiclesProps = {
  data: BaseVehiclesProps[];
};

export interface ChildrenProps {
  children: ReactNode;
}
